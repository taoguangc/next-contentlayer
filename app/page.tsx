import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Hero from '@/components/sections/hero'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='mx-auto container prose'>
      {allPosts.map(post => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
    </>
  )
}
