import React from 'react';
import App from '../../App'

const AuthContext = React.createContext();

function AuthContext () {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prevState) => !prevState);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        toggleAuth,
      }}
    >
    
    </AuthContext.Provider>
  );
}

export default AuthContext;