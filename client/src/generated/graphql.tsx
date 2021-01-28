import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Person = {
  __typename?: 'Person';
  name: Scalars['String'];
  films?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  quickExample?: Maybe<Person>;
};


export type QueryQuickExampleArgs = {
  id?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetExchangeRatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExchangeRatesQuery = (
  { __typename?: 'Query' }
  & { quickExample?: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'name' | 'films'>
  )> }
);


export const GetExchangeRatesDocument = gql`
    query GetExchangeRates {
  quickExample(id: "1") {
    name
    films
  }
}
    `;

/**
 * __useGetExchangeRatesQuery__
 *
 * To run a query within a React component, call `useGetExchangeRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExchangeRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExchangeRatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExchangeRatesQuery(baseOptions?: Apollo.QueryHookOptions<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>) {
        return Apollo.useQuery<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>(GetExchangeRatesDocument, baseOptions);
      }
export function useGetExchangeRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>) {
          return Apollo.useLazyQuery<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>(GetExchangeRatesDocument, baseOptions);
        }
export type GetExchangeRatesQueryHookResult = ReturnType<typeof useGetExchangeRatesQuery>;
export type GetExchangeRatesLazyQueryHookResult = ReturnType<typeof useGetExchangeRatesLazyQuery>;
export type GetExchangeRatesQueryResult = Apollo.QueryResult<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>;