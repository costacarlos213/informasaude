import React, { useState, useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

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

import { formatDate } from '../../utils/dateTransform'
import { getPostsByName } from '../../lib/api'
import { calcPagination } from '../../utils/calcPagination'

const Search: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data, pageInfo, query }) => {
  const [sideSectionIsVisible, setSideSectionVisibility] = useState(false)
  const [pageIndex, setPageIndex] = useState(1)
  const [posts, setPosts] = useState(data)

  useEffect(() => {
    setPosts(data)
  }, [data])

  const fetchPosts = async index => {
    const offset = (index - 1) * 6
    const res = await getPostsByName(offset, query)

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
                  <Link
                    href={`/${post.categories.nodes[0].slug}/${post.slug}`}
                    key={post.slug}
                  >
                    <PostArticle>
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                      />
                      <div>
                        <h1>{post.title}</h1>
                        <TypeSpan>{date}</TypeSpan>
                        <br />
                        <Link href={`/${post.categories.nodes[0].slug}`}>
                          <TypeSpan>{post.categories.nodes[0].name}</TypeSpan>
                        </Link>
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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx.params
  const res = await getPostsByName(0, query.toString())

  const data = res.data.posts.nodes
  const pageInfo = res.data.posts.pageInfo.offsetPagination

  return {
    props: {
      data,
      pageInfo,
      query: query.toString()
    }
  }
}

export default Search
