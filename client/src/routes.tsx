import { RouteObject } from 'react-router-dom';
import Home from '@/pages/Home';
import Verify from '@/pages/Verify';
import Result from '@/pages/Result';
import Default from '@/layouts/Default';
import Finish from '@/pages/Finish';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Default />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/verify',
        element: <Verify />,
      },
      {
        path: '/result',
        element: <Result />,
      },
      {
        path: '/finish',
        element: <Finish />,
      },
      {
        path: '*',
        element: <Home />,
      },
    ],
  },
];

export default routes;
