import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { router } from './core/router';
import { ApolloProvider } from '@apollo/client';
import client from './core/constants/apollo-clients';
import { Guard } from './components/auth';
import { RouterProvider } from 'react-router-dom';
import { Header } from './components/template/layout/Header';

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
        <Header />
        <Container>
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
