import React, { useState } from 'react'

import { Container, Filter } from '../styles/global'

import Navbar from '../components/navbar'
import MainImageSection from '../components/mainImageSection'
import Footer from '../components/footer'
import SearchPosts from '../components/searchPosts'
import Sponsored from '../components/sponsored'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const [sideSectionIsVisible, setSideSectionVisibility] = useState(false)

  return (
    <>
      <Navbar
        changeSideSectionState={setSideSectionVisibility}
        visibility={sideSectionIsVisible}
      />
      <Filter isSideSectionVisible={sideSectionIsVisible}>
        <main>
          <Container>
            <MainImageSection posts={posts} />
          </Container>
          <Container>
            <Sponsored />
          </Container>
        </main>
        <SearchPosts
          changeSideSectionState={() => setSideSectionVisibility(true)}
        />
        <Footer />
      </Filter>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const FIRST_POSTS_QUERY = `
    query lastPosts {
      posts(first: 3) {
        nodes {
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
          categories {
            nodes {
              name
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
      query: FIRST_POSTS_QUERY
    })
  })

  const { data } = await res.json()
  const posts = data.posts.nodes

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}

export default Home
