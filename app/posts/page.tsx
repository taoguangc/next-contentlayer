import Link from 'next/link'
import { allPosts, type Post } from 'contentlayer/generated'
import Pagination from '@/components/pagination'

export const dynamic = 'force-static'

export default async function Posts({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const per_items = '5'
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? per_items

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)

  console.log(start + end)

  const PagiPosts = allPosts.slice(start, end)
  return (
    <div className='mx-auto max-w-5xl py-8'>
      <h1 className='mb-8 text-center text-2xl font-black'>我的博客</h1>
      {PagiPosts.map((post: Post) => (
        <article key={post._id} className='mb-8'>
          <h2 className='text-xl'>
            <Link href={post.slug} className='text-blue-700 hover:text-blue-900'>
              {post.title}
            </Link>
          </h2>
          <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
            {new Date(post.date ?? '').toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
          <p className='relative z-10 mt-2 text-sm text-zinc-600'>{post.description}</p>
        </article>
      ))}
      <Pagination hasNextPage={end < allPosts.length} hasPrevPage={start > 0} totalPage={allPosts.length} />
    </div>
  )
}
