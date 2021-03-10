interface IMultiplePosts {
  data: {
    posts: {
      pageInfo: Record<string, unknown>
      nodes: [
        {
          featuredImage: Record<string, unknown>
          title: string
          dateGmt: string
          slug: string
          categories: {
            nodes: [
              {
                name: string
              }
            ]
          }
        }
      ]
    }
  }
}

interface ISinglePost {
  data: {
    post: {
      content: string
      featuredImage: Record<string, unknown>
      title: string
      dateGmt: string
      categories: {
        nodes: [
          {
            name: string
          }
        ]
      }
    }
  }
}

interface IPrefetchPosts {
  data: {
    posts: {
      nodes: [
        {
          slug: string
          categories: {
            nodes: {
              slug: string
            }
          }
        }
      ]
    }
  }
}

interface IPrefetchedCategories {
  data: {
    categories: {
      nodes: [
        {
          slug: string
        }
      ]
    }
  }
}

async function fetchAPI(query) {
  const res = await fetch('https://api.informasaude.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query
    })
  })

  const json = await res.json()

  if (json.errors) {
    console.log(json.erros)
    throw new Error('Failed to fetch API')
  }

  return json
}

export async function getMainPosts(): Promise<IMultiplePosts> {
  const MAIN_POSTS_QUERY = `
    query lastPosts {
      posts(first: 3, where: {categoryNotIn: "12"}) {
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

  const data = await fetchAPI(MAIN_POSTS_QUERY)

  return data
}

export async function getPostsByName(
  offset: number,
  query: string
): Promise<IMultiplePosts> {
  const SEARCH_POSTS_QUERY = `
    query lastPosts {
      posts(where: {offsetPagination: {offset: ${offset}, size: 6}, search: "${query}"}) {
        pageInfo {
          offsetPagination {
            total
            hasMore
            hasPrevious
          }
        }
        nodes {
          title
          slug
          dateGmt
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  `

  const data = await fetchAPI(SEARCH_POSTS_QUERY)

  return data
}

export async function getPostsByTopic(
  topic: string,
  offset: number
): Promise<IMultiplePosts> {
  const TARGETED_POSTS_QUERY = `
    query lastPosts {
      posts(where: {categoryName: "${topic}", offsetPagination: {offset: ${offset}, size: 6}, categoryNotIn: "12"}) {
        pageInfo {
          offsetPagination {
            total
            hasMore
            hasPrevious
          }
        }
        nodes {
          title
          slug
          dateGmt
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `

  const data = await fetchAPI(TARGETED_POSTS_QUERY)

  return data
}

export async function getPostBySlug(slug: string): Promise<ISinglePost> {
  const SINGLE_POST_QUERY = `
    query accessPost {
      post(id: "${slug}", idType: SLUG) {
        categories {
          nodes {
            name
          }
        }
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        dateGmt
      }
    }
  `

  const data = await fetchAPI(SINGLE_POST_QUERY)

  return data
}

export async function getSponsoreds(): Promise<IMultiplePosts> {
  const SPONSORED_QUERY = `
    query Sponsored {
      posts(where: {categoryId: 12}) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories(where: {exclude: "12"}) {
            nodes {
              name
              slug
            }
          }
          content
        }
      }
    }
  `

  const data = await fetchAPI(SPONSORED_QUERY)

  return data
}

export async function getSponsoredsByTopic(
  topic: string
): Promise<IMultiplePosts> {
  const CATEGORIZED_SPONSOREDS_QUERY = `
    query SponsoredsByTopic {
      posts(where: {categoryId: 12, categoryName: "${topic}"}) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories(where: {exclude: "12"}) {
            nodes {
              name
              slug
            }
          }
          content
        }
      }
    }
  `

  const data = await fetchAPI(CATEGORIZED_SPONSOREDS_QUERY)

  return data
}

export async function prefetchPosts(): Promise<IPrefetchPosts> {
  const CATEGORIES_POSTS_QUERY = `
    query postsAndCategories {
      posts {
        nodes {
          slug
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
  `

  const data = await fetchAPI(CATEGORIES_POSTS_QUERY)

  return data
}

export async function prefetchCategories(): Promise<IPrefetchedCategories> {
  const CATEGORIES_QUERY = `
    query CATEGORIES {
      categories(first: 20) {
        nodes {
          slug
        }
      }
    }
  `

  const data = await fetchAPI(CATEGORIES_QUERY)

  return data
}
