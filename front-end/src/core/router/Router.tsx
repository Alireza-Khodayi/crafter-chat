import { createBrowserRouter } from 'react-router-dom';
import { appRoutes } from '../utilities/app-routes';
import { Login, SignUp } from '@/components/auth';
import Home from '@/components/home/Home';

const router = createBrowserRouter([
  { path: appRoutes.home, element: <Home /> },
  { path: appRoutes.login, element: <Login /> },
  { path: appRoutes.signUp, element: <SignUp /> },
]);

export { router };
