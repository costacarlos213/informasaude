import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import Link from 'next/link'

import { formatDate } from '../../lib/dateTransform'
import {
  getPostsByTopic,
  prefetchCategories,
  getSponsoredsByTopic
} from '../../lib/api'
import { PaginationContext, previewPagination } from '../../lib/context'
import { useNonInitialEffect } from '../../lib/useNonInitialEffect'

import { PostArticle, PostsContainer } from '../../styles/pages/topic'
import { TypeSpan } from '../../styles/global'

import Sponsored from '../../components/sponsoredSection'
import Main from '../../components/main'
import Pagination from '../../components/Pagination'
import SearchPosts from '../../components/searchPosts'

const Topic: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
  pageInfo,
  sponsoreds
}) => {
  const [posts, setPosts] = useState(data)
  const [paginationContext, setPaginationContext] = useContext(
    PaginationContext
  )

  const router = useRouter()
  const { topic } = router.query

  const fetchPosts = async index => {
    try {
      const offset = (index - 1) * 6
      const res = await getPostsByTopic(topic.toString(), offset)

      setPosts(res.data.posts.nodes)

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    } catch (err) {
      console.log(err)
      setPaginationContext(previewPagination)
    }
  }

  useEffect(() => {
    setPosts(data)
  }, [data])

  useNonInitialEffect(() => {
    fetchPosts(paginationContext)
  }, [paginationContext])

  return (
    <Main>
      <PostsContainer>
        <div>
          {posts.map(post => {
            const date = formatDate(post.dateGmt)

            const Category = (): JSX.Element => {
              let isPartner = false
              let partnerIndex = 0

              for (let i = 0; i < post.categories.nodes.length; i++) {
                const name = post.categories.nodes[i].name

                if (name === 'Parceiro') {
                  isPartner = true
                  partnerIndex = i
                }
              }

              if (isPartner) {
                return (
                  <TypeSpan>
                    {post.categories.nodes[partnerIndex].name}
                  </TypeSpan>
                )
              } else {
                return <TypeSpan>{post.categories.nodes[0].name}</TypeSpan>
              }
            }

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
                    {Category()}
                  </div>
                </PostArticle>
              </Link>
            )
          })}
        </div>
        <Pagination total={pageInfo.total} />
      </PostsContainer>
      <Sponsored sponsoreds={sponsoreds} />
      <SearchPosts />
    </Main>
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
  const response = await getSponsoredsByTopic(params.topic.toString())

  const sponsoreds = response.data.posts.nodes

  const pageInfo = res.data.posts.pageInfo.offsetPagination
  const data = res.data.posts.nodes

  return {
    props: {
      data,
      pageInfo,
      sponsoreds
    },
    revalidate: 20
  }
}

export default Topic
