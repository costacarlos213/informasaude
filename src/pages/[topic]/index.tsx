import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'

import {
  PostArticle,
  CircleButtonsDiv,
  PostsContainer,
  PaginationButtons
} from '../../styles/pages/topic'
import { Filter, Container, TypeSpan } from '../../styles/global'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import SearchPosts from '../../components/searchPosts'
import Sponsored from '../../components/sponsored'
import Link from 'next/link'

import { formatDate } from '../../utils/dateTransform'
import { calcPagination } from '../../utils/calcPagination'
import { getPostsByTopic, prefetchCategories } from '../../lib/api'

const Topic: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
  pageInfo
}) => {
  const [sideSectionIsVisible, setSideSectionVisibility] = useState(false)
  const [pageIndex, setPageIndex] = useState(1)
  const [posts, setPosts] = useState(data)

  useEffect(() => {
    setPosts(data)
  }, [data])

  const router = useRouter()
  const { topic } = router.query

  const fetchPosts = async index => {
    const offset = (index - 1) * 6
    const res = await getPostsByTopic(topic.toString(), offset)

    setPosts(res.data.posts.nodes)
    setPageIndex(index)

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  const Pagination = () => {
    const array = []

    const index = calcPagination(pageInfo.total)

    for (let i = 1; i <= index; i++) {
      if (pageIndex === i) {
        array.push(
          <PaginationButtons
            active={true}
            key={i}
            onClick={() => fetchPosts(i)}
          >
            {i}
          </PaginationButtons>
        )
      } else {
        array.push(
          <PaginationButtons
            active={false}
            key={i}
            onClick={() => fetchPosts(i)}
          >
            {i}
          </PaginationButtons>
        )
      }
    }

    return array
  }

  return (
    <>
      <Navbar
        changeSideSectionState={setSideSectionVisibility}
        visibility={sideSectionIsVisible}
      />
      <Filter isSideSectionVisible={sideSectionIsVisible}>
        <main>
          <PostsContainer>
            <div>
              {posts.map(post => {
                const date = formatDate(post.dateGmt)

                return (
                  <Link href={`${topic}/${post.slug}`} key={post.slug}>
                    <PostArticle>
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                      />
                      <div>
                        <h1>{post.title}</h1>
                        <TypeSpan>{date}</TypeSpan>
                        <br />
                        <TypeSpan>{post.categories.nodes[0].name}</TypeSpan>
                      </div>
                    </PostArticle>
                  </Link>
                )
              })}
            </div>
            <CircleButtonsDiv>{Pagination()}</CircleButtonsDiv>
          </PostsContainer>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await prefetchCategories()
  const categories = res.data.categories.nodes

  const paths = categories.map(post => ({
    params: { topic: post.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await getPostsByTopic(params.topic.toString(), 0)

  const data = res.data.posts.nodes
  const pageInfo = res.data.posts.pageInfo.offsetPagination

  return {
    props: {
      data,
      pageInfo
    },
    revalidate: 1
  }
}

export default Topic
