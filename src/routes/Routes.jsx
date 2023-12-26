import { createBrowserRouter } from 'react-router-dom';
import Main from '../Laoutes/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ServicesDetails from '../pages/ServiceDetails/ServicesDetails';
import Checkout from '../pages/Checkout/Checkout';
import OrderReview from '../pages/OrderReview/OrderReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'order',
        element: (
          <PrivateRoute>
            <OrderReview></OrderReview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
