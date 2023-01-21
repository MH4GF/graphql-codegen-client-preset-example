import * as Types from '~/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockAllFilmsWithVariablesQueryQuery((req, res, ctx) => {
 *   const { first } = req.variables;
 *   return res(
 *     ctx.data({ allFilms })
 *   )
 * })
 */
export const mockAllFilmsWithVariablesQueryQuery = (resolver: ResponseResolver<GraphQLRequest<Types.AllFilmsWithVariablesQueryQueryVariables>, GraphQLContext<Types.AllFilmsWithVariablesQueryQuery>, any>) =>
  graphql.query<Types.AllFilmsWithVariablesQueryQuery, Types.AllFilmsWithVariablesQueryQueryVariables>(
    'allFilmsWithVariablesQuery',
    resolver
  )
