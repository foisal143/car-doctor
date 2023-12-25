import { createBrowserRouter } from 'react-router-dom';
import Main from '../Laoutes/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ServicesDetails from '../pages/ServiceDetails/ServicesDetails';
import Checkout from '../pages/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: '/:id',
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

export default router;
