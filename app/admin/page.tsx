'use client'

import { useState, useEffect, useCallback } from 'react'
import { BLOG_CATEGORIES, BLOG_TAG_GROUPS } from '@/lib/blogConfig'

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
  category?: string
  tags?: string[]
  tldr?: string
  keyTakeaways?: string[]
}

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'Hypermind2025!@#'

const ALL_TAGS = BLOG_TAG_GROUPS.flatMap((g) => g.tags)
const DEFAULT_QUICK_COVER_IMAGE = '/asset/Understand_What_AI_is_Saying_About_Your_Brand.jpg'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const [posts, setPosts] = useState<Post[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [classifying, setClassifying] = useState(false)
  const [classifyResult, setClassifyResult] = useState<string | null>(null)
  const [quickSubmitting, setQuickSubmitting] = useState(false)

  // Quick publish state
  const [quickTitle, setQuickTitle] = useState('')
  const [quickContent, setQuickContent] = useState('')
  const [quickExcerpt, setQuickExcerpt] = useState('')
  const [quickCategory, setQuickCategory] = useState('geo-strategy')
  const [quickCoverImage, setQuickCoverImage] = useState(DEFAULT_QUICK_COVER_IMAGE)
  const [quickPublishAt, setQuickPublishAt] = useState('')

  // Form state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [publishAt, setPublishAt] = useState('')
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null)
  const [coverImagePreview, setCoverImagePreview] = useState('')
  const [uploading, setUploading] = useState(false)

  // GEO fields
  const [category, setCategory] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [tldr, setTldr] = useState('')
  const [keyTakeawaysText, setKeyTakeawaysText] = useState('')
  const [tagSearch, setTagSearch] = useState('')

  const defaultPublishAt = () => {
    const now = new Date()
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
  }

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch('/api/posts')
      if (res.ok) {
        const data = await res.json() as Post[]
        setPosts(data.sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime()))
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    }
  }, [])

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
      void fetchPosts()
      setPublishAt(defaultPublishAt())
      setQuickPublishAt(defaultPublishAt())
    }
  }, [fetchPosts])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_authenticated', 'true')
      void fetchPosts()
      setPublishAt(defaultPublishAt())
      setQuickPublishAt(defaultPublishAt())
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCoverImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => { setCoverImagePreview(reader.result as string) }
      reader.readAsDataURL(file)
    }
  }

  const handleEdit = useCallback((post: Post) => {
    setEditingPost(post)
    setTitle(post.title)
    setContent(post.content)
    setExcerpt(post.excerpt)
    setCoverImagePreview(post.coverImage)
    setCategory(post.category ?? '')
    setSelectedTags(post.tags ?? [])
    setTldr(post.tldr ?? '')
    setKeyTakeawaysText((post.keyTakeaways ?? []).join('\n'))
    const localDate = new Date(post.publishAt)
    setPublishAt(new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000).toISOString().slice(0, 16))
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const resetForm = useCallback(() => {
    setTitle('')
    setContent('')
    setExcerpt('')
    setCoverImageFile(null)
    setCoverImagePreview('')
    setCategory('')
    setSelectedTags([])
    setTldr('')
    setKeyTakeawaysText('')
    setTagSearch('')
    setShowForm(false)
    setEditingPost(null)
    setPublishAt(defaultPublishAt())
  }, [])

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }, [])

  const resetQuickForm = useCallback(() => {
    setQuickTitle('')
    setQuickContent('')
    setQuickExcerpt('')
    setQuickCategory('geo-strategy')
    setQuickCoverImage(DEFAULT_QUICK_COVER_IMAGE)
    setQuickPublishAt(defaultPublishAt())
  }, [])

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!quickTitle || !quickContent || !quickCategory || !quickPublishAt) {
      alert('Please fill in title, category, content, and publish time')
      return
    }

    setQuickSubmitting(true)
    try {
      const coverImage = quickCoverImage.trim() || DEFAULT_QUICK_COVER_IMAGE
      const postData = {
        title: quickTitle,
        content: quickContent,
        excerpt: quickExcerpt || quickContent.replace(/<[^>]*>/g, '').substring(0, 200),
        coverImage,
        publishAt: new Date(quickPublishAt).toISOString(),
        category: quickCategory,
      }

      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      })

      if (!res.ok) throw new Error('Quick post creation failed')
      const post = await res.json() as Post
      alert(`Quick post published: /resources/${post.slug}/`)
      resetQuickForm()
      void fetchPosts()
    } catch (error) {
      console.error('Quick publish error:', error)
      alert('Failed to quick publish post. Please check the fields and try again.')
    } finally {
      setQuickSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content || !publishAt) {
      alert('Please fill in all required fields')
      return
    }
    if (!editingPost && !coverImageFile) {
      alert('Please select a cover image')
      return
    }
    if (selectedTags.length < 3 || selectedTags.length > 5) {
      alert('Please select 3–5 tags')
      return
    }

    setUploading(true)

    try {
      let coverImageUrl = editingPost?.coverImage ?? ''

      if (coverImageFile) {
        const formData = new FormData()
        formData.append('file', coverImageFile)
        const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData })
        if (!uploadRes.ok) throw new Error('Image upload failed')
        const { url } = await uploadRes.json() as { url: string; key: string }
        coverImageUrl = url
      }

      const postData = {
        title,
        content,
        excerpt: excerpt || content.replace(/<[^>]*>/g, '').substring(0, 200),
        coverImage: coverImageUrl,
        publishAt: new Date(publishAt).toISOString(),
        category: category || undefined,
        tags: selectedTags.length > 0 ? selectedTags : undefined,
        tldr: tldr || undefined,
        keyTakeaways: keyTakeawaysText
          ? keyTakeawaysText.split('\n').map((l) => l.trim()).filter(Boolean)
          : undefined,
      }

      if (editingPost) {
        const res = await fetch(`/api/posts/${editingPost.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        })
        if (!res.ok) throw new Error('Post update failed')
        alert('Post updated successfully!')
      } else {
        const res = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        })
        if (!res.ok) throw new Error('Post creation failed')
        alert('Post published successfully!')
      }

      resetForm()
      void fetchPosts()
    } catch (error) {
      console.error('Submit error:', error)
      alert(`Failed to ${editingPost ? 'update' : 'publish'} post. Please try again.`)
    } finally {
      setUploading(false)
    }
  }

  const handleBulkClassify = async () => {
    if (!confirm('Auto-classify all posts that have no category? This writes to KV and is safe to re-run.')) return
    setClassifying(true)
    setClassifyResult(null)
    try {
      const res = await fetch('/api/admin/bulk-classify', { method: 'POST' })
      const data = await res.json() as { message: string; updated: number; alreadyClassified: number; distribution: Record<string, number> }
      const dist = Object.entries(data.distribution ?? {}).map(([k, v]) => `${k}: ${v}`).join(', ')
      setClassifyResult(`✅ ${data.message} Distribution → ${dist}`)
      void fetchPosts()
    } catch (err) {
      console.error('Bulk classify error:', err)
      setClassifyResult('❌ Failed to classify posts. Check console.')
    } finally {
      setClassifying(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
      if (res.ok) { alert('Post deleted successfully'); void fetchPosts() }
      else throw new Error('Delete failed')
    } catch (error) {
      console.error('Delete error:', error)
      alert('Failed to delete post. Please try again.')
    }
  }

  const filteredTags = tagSearch
    ? ALL_TAGS.filter((t) => t.toLowerCase().includes(tagSearch.toLowerCase()))
    : null

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter username" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter password" required />
            </div>
            {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
            <button type="submit" className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-900">Resources Admin</h1>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => { showForm ? resetForm() : setShowForm(true) }}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              {showForm ? 'Cancel' : '+ Full Editor'}
            </button>
            <button
              onClick={handleBulkClassify}
              disabled={classifying}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:bg-indigo-300"
              title="Auto-assign categories to all posts that have none"
            >
              {classifying ? 'Classifying...' : '⚡ Auto-Classify Posts'}
            </button>
            <button onClick={handleLogout}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              Logout
            </button>
          </div>
        </div>

        {classifyResult && (
          <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700">
            {classifyResult}
          </div>
        )}

        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 rounded-2xl shadow-sm p-8 mb-8 text-white">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200 mb-2">KV quick publish</p>
              <h2 className="text-2xl font-bold">Quick Post Entry</h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                Publish directly to POSTS_KV so the article appears on /resources/blog/ and /resources/&lt;slug&gt;/ without editing source files or triggering a Cloudflare build. Rebuild only when you need the static sitemap or llms.txt refreshed.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-300/15 text-cyan-100 text-xs border border-cyan-200/20">
              No code deploy for normal posts
            </span>
          </div>

          <form onSubmit={handleQuickSubmit} className="space-y-5">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-200 mb-2">Title *</label>
                <input
                  type="text"
                  value={quickTitle}
                  onChange={(e) => setQuickTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                  placeholder="Question-style title for AI answer extraction"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">Category *</label>
                <select
                  value={quickCategory}
                  onChange={(e) => setQuickCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-white/15 rounded-lg text-white focus:ring-2 focus:ring-cyan-300"
                  required
                >
                  {BLOG_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">Cover image path or URL</label>
                <input
                  type="text"
                  value={quickCoverImage}
                  onChange={(e) => setQuickCoverImage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300"
                  placeholder="/generated/blog/example-cover.png"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">Publish Date & Time *</label>
                <input
                  type="datetime-local"
                  value={quickPublishAt}
                  onChange={(e) => setQuickPublishAt(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white focus:ring-2 focus:ring-cyan-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Excerpt</label>
              <textarea
                value={quickExcerpt}
                onChange={(e) => setQuickExcerpt(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300"
                placeholder="Short card description. If empty, it is generated from the content."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Content * <span className="text-slate-400">(Markdown or HTML)</span>
              </label>
              <textarea
                value={quickContent}
                onChange={(e) => setQuickContent(e.target.value)}
                rows={10}
                className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300 font-mono text-sm"
                placeholder="<h2>Direct Answer</h2><p>...</p>"
                required
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={quickSubmitting}
                className="px-8 py-3 bg-cyan-300 text-slate-950 rounded-lg hover:bg-cyan-200 transition disabled:bg-slate-500 disabled:text-slate-300 font-semibold"
              >
                {quickSubmitting ? 'Publishing to KV...' : 'Quick Publish'}
              </button>
              <button
                type="button"
                onClick={resetQuickForm}
                className="px-8 py-3 border border-white/20 text-slate-100 rounded-lg hover:bg-white/10 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter post title (question or definition format works best for GEO)" required />
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Image {editingPost ? '(Optional — keep existing if unchanged)' : '*'}
                </label>
                <input type="file" accept="image/*" onChange={handleImageChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  required={!editingPost} />
                {coverImagePreview && (
                  <div className="mt-4">
                    <img src={coverImagePreview} alt="Preview" className="w-64 h-40 object-cover rounded-lg" />
                    {editingPost && !coverImageFile && <p className="text-sm text-gray-500 mt-2">Current image</p>}
                  </div>
                )}
              </div>

              {/* ── GEO Section ──────────────────────────────────── */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  GEO Metadata <span className="text-sm font-normal text-gray-500">(Improves AI citability)</span>
                </h3>

                {/* Category */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black">
                    <option value="">— Select a category —</option>
                    {BLOG_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags ({selectedTags.length}/5 selected — need 3–5)
                  </label>
                  <input type="text" value={tagSearch} onChange={(e) => setTagSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-black text-sm"
                    placeholder="Search tags..." />
                  {/* Selected tags */}
                  {selectedTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedTags.map((tag) => (
                        <button key={tag} type="button" onClick={() => toggleTag(tag)}
                          className="px-3 py-1 text-xs bg-black text-white rounded-full hover:bg-gray-700 transition">
                          {tag} ✕
                        </button>
                      ))}
                    </div>
                  )}
                  {/* Tag groups */}
                  <div className="border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto space-y-4">
                    {BLOG_TAG_GROUPS.map((group) => {
                      const groupTags = filteredTags
                        ? group.tags.filter((t) => filteredTags.includes(t))
                        : group.tags
                      if (groupTags.length === 0) return null
                      return (
                        <div key={group.group}>
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">{group.group}</p>
                          <div className="flex flex-wrap gap-2">
                            {groupTags.map((tag) => (
                              <button key={tag} type="button" onClick={() => toggleTag(tag)}
                                className={`px-3 py-1 text-xs rounded-full border transition ${
                                  selectedTags.includes(tag)
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                                }`}>
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* TL;DR */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    TL;DR <span className="text-gray-400">(2–3 sentences, shown before the article)</span>
                  </label>
                  <textarea value={tldr} onChange={(e) => setTldr(e.target.value)} rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="Write a concise summary AI models can extract as a direct answer..." />
                </div>

                {/* Key Takeaways */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Takeaways <span className="text-gray-400">(one per line, 3–5 bullets)</span>
                  </label>
                  <textarea value={keyTakeawaysText} onChange={(e) => setKeyTakeawaysText(e.target.value)} rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black font-mono text-sm"
                    placeholder={`GEO increases AI mention rate by 30–50% in 90 days\nStructured content is 3x more likely to be cited\n...`} />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt (Optional)</label>
                <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  placeholder="Short description shown on blog cards (auto-generated if empty)" />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content * <span className="text-gray-400">(Markdown or HTML)</span>
                </label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={16}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black font-mono text-sm"
                  placeholder="Recommended structure: Definition → Main Sections (H2/H3) → Examples → FAQ → Conclusion"
                  required />
                <p className="mt-2 text-xs text-gray-500">
                  GEO tip: Include a FAQ section with 5–10 questions for AI extraction. Use short quotable statements (≤25 words).
                </p>
              </div>

              {/* Publish Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date & Time *</label>
                <input type="datetime-local" value={publishAt} onChange={(e) => setPublishAt(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  required />
              </div>

              <div className="flex gap-4">
                <button type="submit" disabled={uploading}
                  className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400">
                  {uploading
                    ? (editingPost ? 'Updating...' : 'Publishing...')
                    : (editingPost ? 'Update Post' : 'Publish Post')}
                </button>
                <button type="button" onClick={resetForm}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts list */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold">Published Posts</h2>
            <p className="text-sm text-gray-500 mt-1">Sorted by publish date (newest first)</p>
          </div>
          <div className="divide-y divide-gray-200">
            {posts.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No posts yet. Click &ldquo;New Post&rdquo; to create your first post.</div>
            ) : (
              posts.map((post) => {
                const cat = BLOG_CATEGORIES.find((c) => c.id === post.category)
                return (
                  <div key={post.id} className="p-6 hover:bg-gray-50 transition">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{post.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
                          <span>{new Date(post.publishAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                          <span>·</span>
                          <span className="font-mono text-xs">{post.slug}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cat && (
                            <span className={`px-2 py-0.5 text-xs rounded-full ${cat.color} ${cat.textColor}`}>
                              {cat.label}
                            </span>
                          )}
                          {!cat && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500">
                              No category
                            </span>
                          )}
                          {(post.tags ?? []).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-gray-50 border border-gray-200 text-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <a href={`/resources/${post.slug}`} target="_blank" rel="noopener noreferrer"
                          className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                          View
                        </a>
                        <button onClick={() => handleEdit(post)}
                          className="px-4 py-2 text-sm border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(post.id)}
                          className="px-4 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
