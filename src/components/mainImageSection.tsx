import React from 'react'

import { TypeSpan } from '../styles/global'

import {
  MainImagesContainer,
  ImgCard,
  MainCardImage,
  Description
} from '../styles/components/mainImageSection'
import Link from 'next/link'

interface MainImageSectionProps {
  posts: Array<{
    featuredImage: {
      node: {
        sourceUrl: string
      }
    }
    slug: string
    title: string
    categories: Record<string, unknown>
  }>
}

const MainImageSection: React.FC<MainImageSectionProps> = ({ posts }) => {
  return (
    <MainImagesContainer>
      <Link href={`${posts[0].categories.nodes[0].slug}/${posts[0].slug}`}>
        <ImgCard>
          <MainCardImage
            src={posts[0].featuredImage.node.sourceUrl}
            alt={posts[0].title}
          />
          <Description>
            <TypeSpan>{posts[0].categories.nodes[0].name}</TypeSpan>
            <p>{posts[0].title}</p>
          </Description>
        </ImgCard>
      </Link>
      <div>
        <Link href={`${posts[1].categories.nodes[0].slug}/${posts[1].slug}`}>
          <ImgCard>
            <MainCardImage
              src={posts[1].featuredImage.node.sourceUrl}
              alt={posts[1].title}
            />
            <Description>
              <TypeSpan>{posts[1].categories.nodes[0].name}</TypeSpan>
              <p>{posts[1].title}</p>
            </Description>
          </ImgCard>
        </Link>
        <Link href={`${posts[2].categories.nodes[0].slug}/${posts[2].slug}`}>
          <ImgCard>
            <MainCardImage
              src={posts[2].featuredImage.node.sourceUrl}
              alt={posts[2].title}
            />
            <Description>
              <TypeSpan>{posts[2].categories.nodes[0].name}</TypeSpan>
              <p>{posts[2].title}</p>
            </Description>
          </ImgCard>
        </Link>
      </div>
    </MainImagesContainer>
  )
}

export default MainImageSection
