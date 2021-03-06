import React, { useState } from 'react'

import { Container, Filter } from '../styles/global'

import Navbar from '../components/navbar'
import MainImageSection from '../components/mainImageSection'
import Footer from '../components/footer'
import SearchPosts from '../components/searchPosts'
import Sponsored from '../components/sponsored'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getMainPosts } from '../lib/api'

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
          {posts.length === 3 && (
            <Container>
              <MainImageSection posts={posts} />
            </Container>
          )}
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
  const { data } = await getMainPosts()

  const posts = data.posts.nodes

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}

export default Home
