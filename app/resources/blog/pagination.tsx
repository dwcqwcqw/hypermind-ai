'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  category?: string
  subtopic?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  category,
  subtopic,
}: PaginationProps) {
  const router = useRouter()
  const [pageInput, setPageInput] = useState('')

  const buildHref = (page: number) => {
    const params = new URLSearchParams()
    if (page > 1) params.set('page', String(page))
    if (category) params.set('category', category)
    if (subtopic) params.set('subtopic', subtopic)
    const qs = params.toString()
    return qs ? `/resources/blog?${qs}` : '/resources/blog'
  }

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)
      if (currentPage <= 3) end = Math.min(5, totalPages - 1)
      if (currentPage >= totalPages - 2) start = Math.max(2, totalPages - 4)
      if (start > 2) pages.push('...')
      for (let i = start; i <= end; i++) pages.push(i)
      if (end < totalPages - 1) pages.push('...')
      if (totalPages > 1) pages.push(totalPages)
    }
    return pages
  }

  const handlePageJump = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const page = parseInt(pageInput, 10)
    if (!Number.isNaN(page) && page >= 1 && page <= totalPages) {
      router.push(buildHref(page))
      setPageInput('')
    }
  }

  return (
    <nav className="mt-10 flex flex-col items-center gap-4" aria-label="Blog pagination">
      <div className="flex items-center flex-wrap gap-2">
        <Link
          href={currentPage > 1 ? buildHref(currentPage - 1) : '#'}
          aria-disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full border text-sm ${
            currentPage === 1
              ? 'cursor-not-allowed border-gray-200 text-gray-400'
              : 'border-gray-300 text-gray-700 hover:bg-white'
          }`}
        >
          Previous
        </Link>

        {getPageNumbers().map((page, i) => {
          if (typeof page === 'string') {
            return (
              <span key={`ellipsis-${i}`} className="px-2 text-gray-400 text-sm">
                ...
              </span>
            )
          }
          const isActive = page === currentPage
          return (
            <Link
              key={page}
              href={buildHref(page)}
              aria-current={isActive ? 'page' : undefined}
              className={`min-w-[2.5rem] text-center px-3 py-2 rounded-full text-sm ${
                isActive
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {page}
            </Link>
          )
        })}

        <Link
          href={currentPage < totalPages ? buildHref(currentPage + 1) : '#'}
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

      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600">Go to page:</span>
        <form onSubmit={handlePageJump} className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max={totalPages}
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            placeholder={`1–${totalPages}`}
            className="w-20 px-3 py-2 border border-gray-300 rounded-full text-center text-sm focus:outline-none focus:ring-2 focus:ring-black"
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
