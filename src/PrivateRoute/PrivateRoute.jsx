import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center my-12">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
