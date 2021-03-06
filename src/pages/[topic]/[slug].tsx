import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { formatDate } from '../../utils/dateTransform'

import { Filter, Container, TypeSpan } from '../../styles/global'
import { PostHeader, PostSection } from '../../styles/pages/article'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Newsletter from '../../components/newsletter'
import Sponsored from '../../components/sponsored'
import { getPostBySlug, prefetchPosts } from '../../lib/api'

const Post: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post
}) => {
  const [sideSectionIsVisible, setSideSectionVisibility] = useState(false)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <Navbar
          changeSideSectionState={setSideSectionVisibility}
          visibility={sideSectionIsVisible}
        />
        <Filter isSideSectionVisible={sideSectionIsVisible}>
          <main>
            <h1>Carregando artigo...</h1>
          </main>
          <Footer />
        </Filter>
      </>
    )
  }

  const date = formatDate(post.dateGmt)

  return (
    <>
      <Navbar
        changeSideSectionState={setSideSectionVisibility}
        visibility={sideSectionIsVisible}
      />
      <Filter isSideSectionVisible={sideSectionIsVisible}>
        <main>
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
          <Container>
            <Sponsored />
          </Container>
        </main>
        <Newsletter />
        <Footer />
      </Filter>
    </>
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
  const post = res.data.post

  return {
    props: {
      post
    },
    revalidate: 1
  }
}

export default Post
