import React from 'react';
import { AuthContext } from './AuthContext';
import { Route, Outlet, Navigate } from 'react-router-dom';

function PublicRoute({ children, ...rest }) {
  const { currentUser } = React.useContext(AuthContext);

  if(!currentUser){
    return <Navigate to='/' />
  }
  return (
            <Outlet />
  )
    }

    export default PublicRoute;
