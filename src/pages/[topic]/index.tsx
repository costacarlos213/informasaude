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

import { formatDate, splitDate } from '../../utils/dateTransform'

async function fetchPosts(topic, offset) {
  const TARGETED_POSTS_QUERY = `
    query lastPosts {
      posts(where: {categoryName: "${topic.toString()}", offsetPagination: {offset: ${offset}, size: 6}}) {
        pageInfo {
          offsetPagination {
            total
            hasMore
            hasPrevious
          }
        }
        edges {
          cursor
          node {
            title
            slug
            dateGmt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `

  const res = await fetch('https://api.informasaude.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: TARGETED_POSTS_QUERY
    })
  })

  const json = await res.json()
  const data = json.data.posts.edges
  const pageInfo = json.data.posts.pageInfo.offsetPagination

  return {
    data,
    pageInfo
  }
}

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

  const fetchAPI = async index => {
    const offset = (index - 1) * 6
    console.log(offset)
    const res = await fetchPosts(topic, offset)
    setPosts(res.data)
    setPageIndex(index)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  const calcPagination = (equal: boolean): Array<JSX.Element> => {
    let index = 0
    const array = []

    if (equal) {
      index = pageInfo.total / 6
    } else {
      index = Math.trunc(pageInfo.total / 6) + 1
    }

    for (let i = 1; i <= index; i++) {
      if (pageIndex === i) {
        array.push(
          <PaginationButtons active={true} key={i} onClick={() => fetchAPI(i)}>
            {i}
          </PaginationButtons>
        )
      } else {
        array.push(
          <PaginationButtons active={false} key={i} onClick={() => fetchAPI(i)}>
            {i}
          </PaginationButtons>
        )
      }
    }

    return array
  }

  const Pagination = () => {
    const result = pageInfo.total / 6
    const roundedResult = Math.trunc(pageInfo.total / 6)

    let equal = false

    result === roundedResult && (equal = true)
    result === 0 && (equal = false)

    const buttons = calcPagination(equal)

    return buttons
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
                const splitedDate = splitDate(post.node.dateGmt)
                const date = formatDate(splitedDate)

                return (
                  <Link
                    href={`${topic}/${post.node.slug}`}
                    key={post.node.slug}
                  >
                    <PostArticle>
                      <img
                        src={post.node.featuredImage.node.sourceUrl}
                        alt={post.node.title}
                      />
                      <div>
                        <h1>{post.node.title}</h1>
                        <TypeSpan>{date}</TypeSpan>
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
  const CATEGORIES_QUERY = `
    query CATEGORIES {
      categories {
        nodes {
          slug
        }
      }
    }
  `
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: CATEGORIES_QUERY
    })
  })

  const json = await res.json()
  const categories = json.data.categories.nodes

  const paths = categories.map(post => ({
    params: { topic: post.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, pageInfo } = await fetchPosts(params.topic, 0)

  return {
    props: {
      data,
      pageInfo
    },
    revalidate: 1
  }
}

export default Topic
