import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { getMainPosts, getSponsoreds } from '../lib/api'

import { Container } from '../styles/global'

import MainImageSection from '../components/mainImageSection'
import SearchPosts from '../components/searchPosts'
import Sponsored from '../components/sponsored'
import Main from '../components/main'

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
  sponsoreds
}) => {
  return (
    <Main>
      {posts.length === 3 && (
        <Container>
          <MainImageSection posts={posts} />
        </Container>
      )}
      <Sponsored sponsoreds={sponsoreds} />
      <SearchPosts />
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getMainPosts()
  const response = await getSponsoreds()

  const sponsoreds = response.data.posts.nodes
  const posts = data.posts.nodes

  return {
    props: {
      posts,
      sponsoreds
    },
    revalidate: 1
  }
}

export default Home
