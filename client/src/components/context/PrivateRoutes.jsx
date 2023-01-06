import React from 'react';
import { AuthContext } from './AuthContext';
import { Route, redirect, useLocation, Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const { currentUser } = React.useContext(AuthContext);
  const location = useLocation();

  if(currentUser){
    return <Navigate to='profile' />
  }

  return (
    <Outlet />
  );
}

export default PrivateRoute;
