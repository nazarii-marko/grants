import { gql } from '@apollo/client';

export const GrantFragment = gql`
  fragment GrantFragment on Grant {
    id
    logoUrl
    name
    foundationName
    averageAmount
    status
    location {
      id
      country
      state
      city
    }
    areaOfFunding
    deadline
    matchDate
  }
`;
