// src/app/router/routes.tsx
import { createBrowserRouter, Navigate } from 'react-router';

import { LoginPage } from '@domain/auth/LoginPage';
import { FocusGridBoardPage } from '@domain/focusGrid/FocusGridBoardPage'; // main画面のpage.tsx 相当

import { loginLoader, loginAction } from '@domain/auth/loginRoute';
import { focusGridLoader } from '@domain/focusGrid/focusGridRoute';
import { RootLayout } from '@app/layout/RootLayout';
import { FocusTaskMatrixBoard } from '@domain/focusGrid/focusTaskMatrixBoard/FocusTaskMatrixBoard';
import { ROWS } from '@domain/focusGrid/demoTaskData';
import { FocusKanbanBoard } from '@domain/focusGrid/focusKanbanBoard/FocusKanbanBoard';
import { FocusTaskTable } from '@domain/focusGrid/focusTaskTable/FocusTaskTable';
import { focusMainTabLoader } from '@domain/focusGrid/focusMainTab/focusMainTabRoute';
import { CreateTaskPage } from '@domain/createTask/CreateTaskPage';
import { createTaskAction, createTaskLoader } from '@domain/createTask/createTaskRoute';
import { logoutAction } from '@domain/auth/logout.Route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      // login画面 route
      {
        path: '/login',
        element: <LoginPage />,
        loader: loginLoader,
        action: loginAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },

      // main画面 route
      {
        path: '/focus-grid-board',
        element: <FocusGridBoardPage />,
        loader: focusGridLoader,
        // main画面 各種タブ route
        children: [
          { index: true, element: <Navigate to="matrix" replace /> },
          {
            path: 'matrix',
            element: <FocusTaskMatrixBoard tasks={ROWS} />,
            loader: focusMainTabLoader,
          },
          { path: 'board', element: <FocusKanbanBoard />, loader: focusMainTabLoader },
          { path: 'table', element: <FocusTaskTable />, loader: focusMainTabLoader },

          // timeline / calender はまた後で
        ],
      },
      {
        path: '/focus-grid-board/create-task',
        element: <CreateTaskPage />,
        loader: createTaskLoader,
        action: createTaskAction,
      },
      {
        path: '*',
        element: <div>ページが見つかりません</div>,
      },
    ],
  },
]);
