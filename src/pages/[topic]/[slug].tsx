import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { formatDate, splitDate } from '../../utils/dateTransform'

import { Filter, Container, TypeSpan } from '../../styles/global'
import { PostHeader, PostSection } from '../../styles/pages/article'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Newsletter from '../../components/newsletter'
import Sponsored from '../../components/sponsored'

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

  const splitedDate = splitDate(post.dateGmt)
  const date = formatDate(splitedDate)

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
  const CATEGORIES_POSTS_QUERY = `
      query postsAndCategories {
        posts {
          nodes {
            slug
            categories {
              nodes {
                slug
              }
            }
          }
        }
      }
    `

  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: CATEGORIES_POSTS_QUERY
    })
  })

  const json = await res.json()
  const posts = json.data.posts.nodes
  const paths = posts.map(post => ({
    params: { slug: post.slug, topic: post.categories.nodes[0].slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SINGLE_POST_QUERY = `
    query accessPost {
      post(id: "${params.slug}", idType: SLUG) {
        categories {
          nodes {
            name
          }
        }
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        dateGmt
      }
    }
  `

  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: SINGLE_POST_QUERY
    })
  })

  const { data } = await res.json()
  const post = data.post

  return {
    props: {
      post
    },
    revalidate: 1
  }
}

export default Post
