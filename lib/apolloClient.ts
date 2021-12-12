import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { parseCookies } from 'nookies';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = parseCookies().token

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});