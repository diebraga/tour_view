import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($identifier: String!, $password: String!) {
  login(input: {identifier: $identifier, password: $password}) {
    jwt
    user {
      id
      username
      email
    }
  }
}
`
