import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Apps from './Pages/Apps/Apps';
import Installation from './Pages/Installation/Installation';
import axios, { Axios } from 'axios';
import Error404 from './Components/Error-404/Error404';
import ErrorApp from './Components/Error-App/ErrorApp';
import CardDetails from './Components/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => axios('/AllAppsCard.json'),
        element: <Home></Home>,
      },
      {
        path: 'apps',
        loader: () => axios(`/AllAppsCard.json`),
        element: <Apps></Apps>,
      },
      {
        path: 'installation',
        element: <Installation></Installation>,
      },
      {
        path: '*',
        element: <Error404></Error404>,
      },
      {
        path: 'error-app',
        element: <ErrorApp></ErrorApp>,
      },
      {
        path: 'card-details',
        element: <CardDetails></CardDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
