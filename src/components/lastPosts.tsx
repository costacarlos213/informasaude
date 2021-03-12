import React from 'react'
import { PostCard, PostsDiv } from '../styles/components/lastPosts'
import { TypeSpan } from '../styles/global'
import Link from 'next/link'
import { formatDate } from '../lib/dateTransform'

interface LastPostsProps {
  posts: [
    {
      title: string
      slug: string
      dateGmt: string
      featuredImage: {
        node: {
          sourceUrl: string
        }
      }
      categories: {
        nodes: [
          {
            name: string
            slug: string
          }
        ]
      }
    }
  ]
}

const LastPosts: React.FC<LastPostsProps> = ({ posts }) => {
  let unique = false

  if (posts.length <= 1) {
    unique = true
  }

  return (
    <PostsDiv unique={unique}>
      {posts.map(post => {
        const date = formatDate(post.dateGmt)

        return (
          <Link
            href={`/${post.categories.nodes[0].slug}/${post.slug}`}
            key={post.slug}
          >
            <PostCard unique={unique}>
              <img src={post.featuredImage.node.sourceUrl} />
              <div>
                <p>{post.title}</p>
                <TypeSpan>{date}</TypeSpan>
              </div>
            </PostCard>
          </Link>
        )
      })}
    </PostsDiv>
  )
}

export default LastPosts
