import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { Router } from './core/router';
import { ApolloProvider } from '@apollo/client';
import client from './core/constants/apollo-clients';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
