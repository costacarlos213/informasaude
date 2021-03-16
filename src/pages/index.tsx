import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import {
  getMainPosts,
  getSponsoreds,
  getLastPosts,
  getPartners
} from '../lib/api'

import { Container, TypeSpan } from '../styles/global'

import MainImageSection from '../components/mainImageSection'
import SearchPosts from '../components/searchPosts'
import Sponsored from '../components/sponsoredSection'
import Main from '../components/main'
import LastPosts from '../components/lastPosts'
import { LastPostHeader } from '../styles/pages'
import Partners from '../components/partners'

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
  sponsoreds,
  lastPosts,
  partners
}) => {
  let areTherePartners = true

  if (partners.length === 0) {
    areTherePartners = false
  }

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
      {areTherePartners && (
        <Container>
          <LastPostHeader>
            <h1>Nossos parceiros</h1>
          </LastPostHeader>
          <Partners partners={partners} />
        </Container>
      )}
      <Sponsored sponsoreds={sponsoreds} />
      <SearchPosts />
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastPosts = []

  const { data } = await getMainPosts()
  const response = await getSponsoreds()
  const res = await getPartners()

  const sponsoreds = response.data.posts.nodes
  const posts = data.posts.nodes
  const partners = res.data.posts.nodes

  const postCategories = posts.map(post => {
    return post.categories.nodes[0].slug
  })

  const filteredPostCategories = postCategories.filter(
    (este, i) => postCategories.indexOf(este) === i
  )

  for (let i = 0; i <= filteredPostCategories.length; i++) {
    lastPosts.push(await getLastPosts(filteredPostCategories[i]))
  }

  return {
    props: {
      posts,
      sponsoreds,
      lastPosts,
      partners
    },
    revalidate: 20
  }
}

export default Home
