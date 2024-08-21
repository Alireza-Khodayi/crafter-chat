import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import excludedRoutes from './excluded-routes';
import { router } from '../router';

const logoutLink = onError(error => {
  if (
    error.graphQLErrors?.length &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error.graphQLErrors[0]?.extensions?.originalError as any).statusCode ===
      401
  ) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      router.navigate('/login');
      client.resetStore();
    }
  }
});

const httpLink = new HttpLink({
  uri: `/graphql`,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
});

export default client;
