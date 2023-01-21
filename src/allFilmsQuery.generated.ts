import * as Types from '~/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FilmItemFragmentDoc } from './FilmItem.generated';

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockAllFilmsQueryQuery((req, res, ctx) => {
 *   const { first, last } = req.variables;
 *   return res(
 *     ctx.data({ allFilms })
 *   )
 * })
 */
export const mockAllFilmsQueryQuery = (resolver: ResponseResolver<GraphQLRequest<Types.AllFilmsQueryQueryVariables>, GraphQLContext<Types.AllFilmsQueryQuery>, any>) =>
  graphql.query<Types.AllFilmsQueryQuery, Types.AllFilmsQueryQueryVariables>(
    'allFilmsQuery',
    resolver
  )


export const AllFilmsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allFilmsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFilms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilmItem"}}]}}]}}]}}]}},...FilmItemFragmentDoc.definitions]} as unknown as DocumentNode<Types.AllFilmsQueryQuery, Types.AllFilmsQueryQueryVariables>;