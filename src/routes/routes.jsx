import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../components/Layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Error from '../components/ErrorPage/Error';
import About from '../components/About/About';
import Career from '../components/Career/Career';

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
            path: '/signup',
            element: <SignUp/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/career',
          element: <Career/>
        }
      ]
    },
  ]);

export default router;