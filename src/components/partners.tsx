import React from 'react'
import Link from 'next/link'

import { PostsDiv, PostCard } from '../styles/components/lastPosts'
import { TypeSpan } from '../styles/global'

interface PartnersProps {
  partners: [
    {
      title: string
      slug: string
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

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  let unique = false

  if (partners.length <= 1) {
    unique = true
  }

  return (
    <PostsDiv unique={unique}>
      {partners.map(partner => {
        return (
          <Link
            href={`/${partner.categories.nodes[0].slug}/${partner.slug}`}
            key={partner.slug}
          >
            <PostCard unique={unique}>
              <img src={partner.featuredImage.node.sourceUrl} />
              <div>
                <p>{partner.title}</p>
                {partner.categories.nodes.map(category => {
                  if (category.slug !== 'parceiro') {
                    return (
                      <TypeSpan key={category.slug}>{category.name}</TypeSpan>
                    )
                  } else {
                    return <></>
                  }
                })}
              </div>
            </PostCard>
          </Link>
        )
      })}
    </PostsDiv>
  )
}

export default Partners
