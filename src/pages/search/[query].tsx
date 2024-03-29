import React, { useState, useContext } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

import { PaginationContext, previewPagination } from '../../lib/context'

import { PostArticle, PostsContainer } from '../../styles/pages/topic'
import { TypeSpan } from '../../styles/global'

import { formatDate } from '../../lib/dateTransform'
import { getPostsByName, getSponsoreds } from '../../lib/api'
import Main from '../../components/main'
import Sponsored from '../../components/sponsoredSection'
import Pagination from '../../components/Pagination'
import { useNonInitialEffect } from '../../lib/useNonInitialEffect'

const Search: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data, pageInfo, query, sponsoreds }) => {
  const [posts, setPosts] = useState(data)
  const [paginationContext, setPaginationContext] = useContext(
    PaginationContext
  )

  const fetchPosts = async index => {
    try {
      const offset = (index - 1) * 6
      const res = await getPostsByName(offset, query)

      setPosts(res.data.posts.nodes)

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    } catch (err) {
      console.log(err)
      setPaginationContext(previewPagination)
    }
  }

  useNonInitialEffect(() => {
    fetchPosts(paginationContext)
  }, [paginationContext])

  return (
    <Main>
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
        <Pagination total={pageInfo.total} />
      </PostsContainer>
      <Sponsored sponsoreds={sponsoreds} />
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx.params
  const res = await getPostsByName(0, query.toString())
  const response = await getSponsoreds()

  const sponsoreds = response.data.posts.nodes
  const data = res.data.posts.nodes
  const pageInfo = res.data.posts.pageInfo.offsetPagination

  return {
    props: {
      data,
      pageInfo,
      query: query.toString(),
      sponsoreds
    }
  }
}

export default Search
