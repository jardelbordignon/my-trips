import { GraphQLClient } from 'graphql-request'

import { graphqlEndpoint, graphqlToken } from '@/config/dotenv'

export const client = new GraphQLClient(graphqlEndpoint, {
  headers: {
    authorization: `Bearer ${graphqlToken}`
  }
})
