import { getAllPosts } from '@/lib/blog'
import PostCard from '@/components/blog/PostCard'
import SectionHeading from '@/components/ui/SectionHeading'

export default function PostsList() {
  const posts = getAllPosts()

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Blog"
          title="Thoughts & Writing"
          subtitle="Sharing insights on architecture, engineering, and building great software."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-text-secondary">
            No posts yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  )
}
