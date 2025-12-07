'use client'

import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'
import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter()
  const [pageInput, setPageInput] = useState('')

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're near the start
      if (currentPage <= 3) {
        endPage = Math.min(5, totalPages - 1)
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 4)
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('ellipsis-start')
      }

      // Add pages around current
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end')
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const handlePageJump = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const page = parseInt(pageInput, 10)
    if (!Number.isNaN(page) && page >= 1 && page <= totalPages) {
      if (page === 1) {
        router.push('/resources')
      } else {
        router.push(`/resources?page=${page}`)
      }
      setPageInput('')
    }
  }

  const getPageHref = (page: number) => {
    return page === 1 ? '/resources' : `/resources?page=${page}`
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav
      className="mt-12 flex flex-col items-center justify-center gap-4"
      aria-label="Resources pagination"
    >
      <div className="flex items-center justify-center flex-wrap gap-3">
        {/* Previous */}
        <Link
          href={
            currentPage > 2
              ? `/resources?page=${currentPage - 1}`
              : currentPage === 2
              ? '/resources'
              : '#'
          }
          aria-disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full border text-sm ${
            currentPage === 1
              ? 'cursor-not-allowed border-gray-200 text-gray-400'
              : 'border-gray-300 text-gray-700 hover:bg-white'
          }`}
        >
          Previous
        </Link>

        {/* Page numbers */}
        <div className="flex flex-wrap gap-2">
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis-start' || page === 'ellipsis-end') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="min-w-[2.5rem] text-center px-3 py-2 text-sm text-gray-500"
                >
                  ...
                </span>
              )
            }

            const pageNum = page as number
            const href = getPageHref(pageNum)
            const isActive = pageNum === currentPage

            return (
              <Link
                key={pageNum}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`min-w-[2.5rem] text-center px-3 py-2 rounded-full text-sm ${
                  isActive
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </Link>
            )
          })}
        </div>

        {/* Next */}
        <Link
          href={
            currentPage < totalPages
              ? `/resources?page=${currentPage + 1}`
              : '#'
          }
          aria-disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full border text-sm ${
            currentPage === totalPages
              ? 'cursor-not-allowed border-gray-200 text-gray-400'
              : 'border-gray-300 text-gray-700 hover:bg-white'
          }`}
        >
          Next
        </Link>
      </div>

      {/* Page jump input */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600">Go to page:</span>
        <form onSubmit={handlePageJump} className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max={totalPages}
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            placeholder={`1-${totalPages}`}
            className="w-20 px-3 py-2 border border-gray-300 rounded-full text-center text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            Go
          </button>
        </form>
      </div>
    </nav>
  )
}

