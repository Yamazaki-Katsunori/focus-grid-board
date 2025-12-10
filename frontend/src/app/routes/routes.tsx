// src/app/router/routes.tsx
import { createBrowserRouter, Navigate } from 'react-router';

import { LoginPage } from '@domain/auth/LoginPage';
import { FocusGridBoardPage } from '@domain/focusGrid/FocusGridBoardPage'; // main画面のpage.tsx 相当

import { loginLoader, loginAction } from '@domain/auth/loginRoute';
import { focusGridLoader } from '@domain/focusGrid/focusGridRoute';
import { RootLayout } from '@app/layout/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: '/login',
        element: <LoginPage />,
        loader: loginLoader,
        action: loginAction,
      },
      {
        path: '/focus-grid-board',
        element: <FocusGridBoardPage />,
        loader: focusGridLoader,
      },
      {
        path: '*',
        element: <div>ページが見つかりません</div>,
      },
    ],
  },
]);
