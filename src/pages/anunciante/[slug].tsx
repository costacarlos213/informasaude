import React from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { prefetchSponsoreds, getSponsoredBySlug } from '../../lib/api'

import Main from '../../components/main'
import { Container } from '../../styles/global'
import { PostHeader, PostSection } from '../../styles/pages/article'

const SponsoredPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>Loading</h1>
      </main>
    )
  }

  return (
    <Main>
      <Container>
        <PostHeader>
          <h1>{post.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
        </PostHeader>
        <PostSection>
          <div>
            <img src={post.featuredImage.node.sourceUrl} />
          </div>
          <section dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostSection>
      </Container>
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await prefetchSponsoreds()

  const posts = res.data.posts.nodes
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await getSponsoredBySlug(params.slug.toString())

  const post = res.data.post

  return {
    props: {
      post
    },
    revalidate: 60
  }
}

export default SponsoredPage
