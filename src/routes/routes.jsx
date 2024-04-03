import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../components/Layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../components/ErrorPage/Error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
      ]
    },
  ]);

export default router;