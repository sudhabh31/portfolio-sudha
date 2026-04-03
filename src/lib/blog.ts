import type { BlogPost } from '@/types'

// Load all .md files from content/blog at build time
const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    meta[key] = value
  }

  return { meta, content: match[2].trim() }
}

function parseTags(raw: string): string[] {
  // Handle ["tag1", "tag2"] format
  const match = raw.match(/\[(.+)\]/)
  if (!match) return []
  return match[1].split(',').map((t) => t.trim().replace(/['"]/g, ''))
}

function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

let _cachedPosts: BlogPost[] | null = null

export function getAllPosts(): BlogPost[] {
  if (_cachedPosts) return _cachedPosts

  const posts: BlogPost[] = []

  for (const [path, raw] of Object.entries(modules)) {
    const slug = path.split('/').pop()?.replace('.md', '') ?? ''
    const { meta, content } = parseFrontmatter(raw)

    posts.push({
      slug,
      title: meta.title ?? 'Untitled',
      date: meta.date ?? '',
      description: meta.description ?? '',
      tags: meta.tags ? parseTags(meta.tags) : [],
      content,
      readingTime: calculateReadingTime(content),
    })
  }

  _cachedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return _cachedPosts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}
