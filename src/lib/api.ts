interface IMultiplePosts {
  data: {
    posts: {
      pageInfo: Record<string, unknown>
      nodes: Array<Record<string, unknown>>
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
  const res = await fetch('http://api.informasaude.com/graphql', {
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
      posts(first: 3) {
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
      posts(where: {categoryName: "${topic}", offsetPagination: {offset: ${offset}, size: 6}}) {
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
      categories {
        nodes {
          slug
        }
      }
    }
  `

  const data = await fetchAPI(CATEGORIES_QUERY)

  return data
}
