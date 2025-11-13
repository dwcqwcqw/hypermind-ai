'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Post = {
  id: string
  title: string
  slug: string
  publishAt: string
  content: string
  coverImage: string
  excerpt: string
  createdAt: string
  updatedAt: string
}

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'Hypermind2025!@#'

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  
  // Form state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [publishAt, setPublishAt] = useState('')
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null)
  const [coverImagePreview, setCoverImagePreview] = useState('')
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
      fetchPosts()
      // Set default publish date to now
      const now = new Date()
      const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16)
      setPublishAt(localDate)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_authenticated', 'true')
      fetchPosts()
      // Set default publish date to now
      const now = new Date()
      const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16)
      setPublishAt(localDate)
    } else {
      setLoginError('Invalid username or password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_authenticated')
    setUsername('')
    setPassword('')
  }

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts')
      if (res.ok) {
        const data = await res.json() as Post[]
        // Sort by publishAt descending (newest first)
        const sorted = data.sort((a, b) => 
          new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime()
        )
        setPosts(sorted)
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCoverImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEdit = (post: Post) => {
    setEditingPost(post)
    setTitle(post.title)
    setContent(post.content)
    setExcerpt(post.excerpt)
    setCoverImagePreview(post.coverImage)
    // Convert ISO to datetime-local format
    const localDate = new Date(post.publishAt)
    const formattedDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)
    setPublishAt(formattedDate)
    setShowForm(true)
  }

  const resetForm = () => {
    setTitle('')
    setContent('')
    setExcerpt('')
    setCoverImageFile(null)
    setCoverImagePreview('')
    setShowForm(false)
    setEditingPost(null)
    // Reset to current time
    const now = new Date()
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)
    setPublishAt(localDate)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // For editing, cover image is optional (can keep existing)
    // For new post, cover image is required
    if (!title || !content || !publishAt) {
      alert('Please fill in all required fields')
      return
    }

    if (!editingPost && !coverImageFile) {
      alert('Please select a cover image')
      return
    }

    setUploading(true)

    try {
      let coverImageUrl = editingPost?.coverImage || ''

      // Upload new image if selected
      if (coverImageFile) {
        const formData = new FormData()
        formData.append('file', coverImageFile)
        
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!uploadRes.ok) {
          throw new Error('Image upload failed')
        }

        const { url } = await uploadRes.json() as { url: string; key: string }
        coverImageUrl = url
      }

      // Prepare post data
      const postData = {
        title,
        content,
        excerpt: excerpt || content.replace(/<[^>]*>/g, '').substring(0, 200),
        coverImage: coverImageUrl,
        publishAt: new Date(publishAt).toISOString(),
      }

      if (editingPost) {
        // Update existing post
        const postRes = await fetch(`/api/posts/${editingPost.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        })

        if (!postRes.ok) {
          throw new Error('Post update failed')
        }

        alert('Post updated successfully!')
      } else {
        // Create new post
        const postRes = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        })

        if (!postRes.ok) {
          throw new Error('Post creation failed')
        }

        alert('Post published successfully!')
      }
      
      // Reset form
      resetForm()
      
      // Refresh posts list
      fetchPosts()
    } catch (error) {
      console.error('Submit error:', error)
      alert(`Failed to ${editingPost ? 'update' : 'publish'} post. Please try again.`)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return
    }

    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        alert('Post deleted successfully')
        fetchPosts()
      } else {
        throw new Error('Delete failed')
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('Failed to delete post. Please try again.')
    }
  }

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>
            {loginError && (
              <div className="text-red-600 text-sm">{loginError}</div>
            )}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-900">Resources Admin</h1>
          <div className="flex gap-4">
            <button
              onClick={() => {
                if (showForm) {
                  resetForm()
                } else {
                  setShowForm(true)
                }
              }}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              {showForm ? 'Cancel' : '+ New Post'}
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">
              {editingPost ? 'Edit Post' : 'Create New Post'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Image {editingPost ? '(Optional - keep existing if not changed)' : '*'}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required={!editingPost}
                />
                {coverImagePreview && (
                  <div className="mt-4">
                    <img
                      src={coverImagePreview}
                      alt="Preview"
                      className="w-64 h-40 object-cover rounded-lg"
                    />
                    {editingPost && !coverImageFile && (
                      <p className="text-sm text-gray-500 mt-2">Current image</p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt (Optional)
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter post excerpt (auto-generated from content if empty)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-mono text-sm"
                  placeholder="Enter post content (HTML supported)"
                  required
                />
                <p className="mt-2 text-sm text-gray-500">
                  Note: Font styles will automatically match existing posts
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date & Time *
                </label>
                <input
                  type="datetime-local"
                  value={publishAt}
                  onChange={(e) => setPublishAt(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
                >
                  {uploading 
                    ? (editingPost ? 'Updating...' : 'Publishing...') 
                    : (editingPost ? 'Update Post' : 'Publish Post')
                  }
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold">Published Posts</h2>
            <p className="text-sm text-gray-500 mt-1">
              Sorted by publish date (newest first)
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            {posts.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No posts yet. Click "New Post" to create your first post.
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>
                          Publish Date: {new Date(post.publishAt).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                        <span>·</span>
                        <span>Slug: {post.slug}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`/resources/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                      >
                        View
                      </a>
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-4 py-2 text-sm border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-4 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
