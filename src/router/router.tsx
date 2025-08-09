import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../Root';
import { AuthLayout, DashboardLayout } from '@layouts';
import { PrivateRoute } from './PrivateRoute';
import {
  BearPage,
  DashboardPage,
  JiraPage,
  LoginPage,
  PersonPage,
  WeddingInvitationPage,
} from '@pages';
import { NotFoundPage } from '@components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // Dashboard Routes - wrapped with PrivateRoute for protection
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          { path: '', element: <DashboardPage /> },
          { path: 'bears', element: <BearPage /> },
          { path: 'person', element: <PersonPage /> },
          { path: 'tasks', element: <JiraPage /> },
          { path: 'wedding-invitation', element: <WeddingInvitationPage /> },
        ],
      },
      // Auth Routes
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [{ path: 'login', element: <LoginPage /> }],
      },
      // 404 Not Found
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
