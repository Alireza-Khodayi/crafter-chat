import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from '../utilities/app-routes';
import { Login, SignUp } from '@/components/auth';

const router = createBrowserRouter([
  { path: appRoutes.home, element: <h1>Hi</h1> },
  { path: appRoutes.login, element: <Login /> },
  { path: appRoutes.signUp, element: <SignUp /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
