import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Apps from './Pages/Apps/Apps';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => {
          fetch('homeData.json')
            .then((res) => res.json())
            .then((data) => console.log(data));
        },
      },
      {
        path: 'apps',
        element: <Apps></Apps>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
