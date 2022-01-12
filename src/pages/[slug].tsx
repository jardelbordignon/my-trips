import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { PageTemplate, IPageTemplate } from '@/templates/Page'
import { gqlClient, GET_PAGES, GET_PAGE_BY_SLUG } from '@/graphql'
import { GetPageBySlugQuery, GetPagesQuery } from '@/graphql/generated/graphql'

const Page: NextPage<IPageTemplate> = ({ heading, body }) => {
  const router = useRouter()

  if (router.isFallback) return <span>Loading...</span>

  return <PageTemplate heading={heading} body={body} />
}

export default Page

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { notFound: true }

  const { page } = await gqlClient.request<GetPageBySlugQuery>(
    GET_PAGE_BY_SLUG,
    { slug: params.slug }
  )

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// pegando o slug das páginas registradas no endpoint
export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await gqlClient.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  })

  const paths = pages.map(({ slug }) => ({ params: { slug: `${slug}` } }))

  return {
    paths,
    fallback: true
  }
}

// getStaticPaths -> serve para gerar as urls, build time: /about, /trip/carazinho
// getStaticProps -> sever para buscar dados da página e disponibilizar nas props, build time
// getServerSideProps -> sever para buscar dados da página e disponibilizar nas props, runtime (toda requisição) (bundle fica no server)
// getInitialProps -> sever para buscar dados da página e disponibilizar nas props, runtime (toda requisição) (bundle também vem para o clinet - hydrate)
