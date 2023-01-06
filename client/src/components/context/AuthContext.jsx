import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from '../firebase/firebase';



const AuthContext = React.createContext();

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const auth = getAuth(app)
  


  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
                setCurrentUser(user)
               
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.error(`Error ${errorCode}: ${errorMessage}`)
            })
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
      
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
      }}
      {...props}
    />
  );
}

export { AuthProvider, AuthContext };