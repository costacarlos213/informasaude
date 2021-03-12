import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { getMainPosts, getSponsoreds, getLastPosts } from '../lib/api'

import { Container, TypeSpan } from '../styles/global'

import MainImageSection from '../components/mainImageSection'
import SearchPosts from '../components/searchPosts'
import Sponsored from '../components/sponsoredSection'
import Main from '../components/main'
import LastPosts from '../components/lastPosts'
import { LastPostHeader } from '../styles/pages'

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
  sponsoreds,
  lastPosts
}) => {
  return (
    <Main>
      {posts.length === 3 && (
        <Container>
          <MainImageSection posts={posts} />
        </Container>
      )}
      {lastPosts.map(posts => {
        const post = posts.data.posts.nodes

        if (post.length === 0) {
          return <></>
        } else {
          return (
            <Container key={post[0].categories.nodes[0].slug}>
              <LastPostHeader>
                <h1>Últimas Postagens</h1>
                <TypeSpan style={{ fontSize: '1.4rem' }}>
                  {post[0].categories.nodes[0].name}
                </TypeSpan>
              </LastPostHeader>
              <LastPosts posts={post} />
            </Container>
          )
        }
      })}
      <Sponsored sponsoreds={sponsoreds} />
      <SearchPosts />
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastPosts = []

  const { data } = await getMainPosts()
  const response = await getSponsoreds()

  const sponsoreds = response.data.posts.nodes
  const posts = data.posts.nodes

  const categories = posts.map(post => {
    return post.categories.nodes[0].slug
  })

  const filteredCategories = categories.filter(
    (este, i) => categories.indexOf(este) === i
  )

  for (let i = 0; i <= filteredCategories.length; i++) {
    lastPosts.push(await getLastPosts(filteredCategories[i]))
  }

  return {
    props: {
      posts,
      sponsoreds,
      lastPosts
    },
    revalidate: 20
  }
}

export default Home
