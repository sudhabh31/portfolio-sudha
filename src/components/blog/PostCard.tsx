import { memo } from 'react'
import { Link } from 'react-router-dom'
import type { BlogPost } from '@/types'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'

interface PostCardProps {
  post: BlogPost
}

export default memo(function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/posts/${post.slug}`}
      className="group block rounded-2xl border border-border bg-surface p-6 no-underline shadow-soft transition-all hover:border-accent/30 hover:shadow-elevated"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="accent">{tag}</Badge>
        ))}
      </div>

      <h3 className="mb-2 text-xl font-bold text-text-primary transition-colors group-hover:text-accent">
        {post.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-2">
        {post.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-text-tertiary">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime} min read
          </span>
        </div>

        <ArrowUpRight
          size={16}
          className="text-text-tertiary transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  )
})
