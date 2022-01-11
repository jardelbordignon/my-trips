import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_ENDPOINT || ''

export const gqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})
