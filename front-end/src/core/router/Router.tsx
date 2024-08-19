import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from '../utilities/AppRoutes';
import { Login, SignUp } from '@/components/auth';

const router = createBrowserRouter([
  { path: AppRoutes.home, element: <h1>Hi</h1> },
  { path: AppRoutes.login, element: <Login /> },
  { path: AppRoutes.signUp, element: <SignUp /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
