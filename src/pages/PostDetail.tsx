import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '@/lib/blog'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Badge from '@/components/ui/Badge'

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-text-primary">
            Post not found
          </h1>
          <Link
            to="/posts"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
          >
            <ArrowLeft size={16} /> Back to posts
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 pt-32 pb-24">
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          to="/posts"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary no-underline transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} /> All posts
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="accent">{tag}</Badge>
            ))}
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
            {post.title}
          </h1>

          <p className="mb-6 text-lg text-text-secondary">
            {post.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-text-tertiary">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime} min read
            </span>
          </div>

          <div className="mt-8 h-px bg-border" />
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent prose-strong:text-text-primary prose-code:text-text-primary prose-code:bg-bg prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-pre:bg-[#1e293b] prose-pre:text-gray-100">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
