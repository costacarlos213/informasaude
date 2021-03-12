import React from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { formatDate } from '../../lib/dateTransform'
import {
  getPostBySlug,
  prefetchPosts,
  getSponsoredsByTopic
} from '../../lib/api'

import { Container, TypeSpan } from '../../styles/global'
import { PostHeader, PostSection } from '../../styles/pages/article'
// import Newsletter from '../../components/newsletter'
import Sponsored from '../../components/sponsoredSection'
import Main from '../../components/main'

const Post: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  sponsoreds
}) => {
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
        <h1>Loading...</h1>
      </main>
    )
  }

  const date = formatDate(post.dateGmt)

  return (
    <Main>
      <Container>
        <PostHeader>
          <TypeSpan>{post.categories.nodes[0].name}</TypeSpan>
          <h1>{post.title}</h1>
          <p>{date}</p>
        </PostHeader>
        <PostSection>
          <div>
            <img src={post.featuredImage.node.sourceUrl} />
          </div>
          <section dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostSection>
      </Container>
      <Sponsored sponsoreds={sponsoreds} />
      {/* <Newsletter /> */}
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await prefetchPosts()

  const posts = res.data.posts.nodes
  const paths = posts.map(post => ({
    params: { slug: post.slug, topic: post.categories.nodes[0].slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await getPostBySlug(params.slug.toString())
  const response = await getSponsoredsByTopic(params.topic.toString())

  const post = res.data.post
  const sponsoreds = response.data.posts.nodes

  return {
    props: {
      post,
      sponsoreds
    },
    revalidate: 60
  }
}

export default Post
