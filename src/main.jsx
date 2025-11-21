import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Apps from './Pages/Apps/Apps';
import Installation from './Pages/Installation/Installation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('/homeApp.json'),
        element: <Home></Home>,
      },
      {
        path: 'apps',
        loader: () => fetch('/AllAppsCard.json'),
        element: <Apps></Apps>,
      },
      {
        path: 'installation',
        element: <Installation></Installation>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
