import { gql } from '@apollo/client';
import { GrantFragment } from './fragments/grant.ts';

export const GRANTS = gql`
  ${GrantFragment}
  query grants($take: Int!, $skip: Int!, $orderBy: OrderByInput) {
    grants(pagination: { take: $take, skip: $skip, orderBy: $orderBy }) {
      grants {
        ...GrantFragment
      }
      totalCount
    }
  }
`;

export const NEW_MATCHES = gql`
  ${GrantFragment}
  query {
    newMatches {
      ...GrantFragment
    }
  }
`;
