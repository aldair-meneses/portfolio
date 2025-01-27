export type PostFrontMatter = {
  lang: string
  title: string
  date: string
  tags: string[]
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string
  authors?: string[]
  layout?: string
  slug: string
  fileName: string
}
