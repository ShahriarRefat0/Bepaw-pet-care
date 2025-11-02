import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import SpinnerLoading from '../Pages/SpinnerLoading';

const PrivetRout = ({ children }) => {
  const { user} = use(AuthContext)
  const location = useLocation();
  
  
  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRout;