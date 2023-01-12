
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import {useSelector, useStore} from "react-redux";
import { getUserByUid, createUsers, userNull,emailBienvenido, updateUser , cartLogOut, cartLogIn} from "../../redux/actions/actions"
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [userByUid, setUserByUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const ucart = useSelector((state)=> state.shoppingCart)
  const u = useSelector((state) => state.userByUid)
  const rtActual = window.location.pathname
  const navigate  = useNavigate()
  const store = useStore()
  const[userCart, setUserCart] = useState({
    
    id: u?.uid,
    cart: ucart
  })
console.log(ucart)
console.log('user',userCart)


  let mounted = true;
useEffect(() => {
    if(mounted && u?.uid && ucart?.length > 0 ){
    setUserCart({
      ...userCart,
      id: u?.uid,
      cart: ucart
    })
    store.dispatch(cartLogIn(u.cart))
  }
  return () => {
    mounted = false;
  }
},[u])

useEffect(() => {
  if(u && u?.cart?.length > 0) {
     
  }
}, [u])

  const signup = async (user) => {
    const {name, apellido, email, password}  = user
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      
      const u = userCredential.user
      setTimeout(() => {
          const users = {
              "uid": u.uid,
              "name": name || "",
              "surname":apellido || "",
              "email": email ,
              //password: user.password,
              "phone": u?.phoneNumber ||"",
              "img": u?.photoURL || "",
              "city": "",
              "province": "",
              "address": "",
          }
          swal({
            title:`Registrado con exito`,
            icon: "success",
            button: "OK"
  
          })
          
         
          store.dispatch(createUsers({
              "uid": u?.uid || "",
              "name": name || "",
              "surname":apellido || "",
              "email": email ,
              //password: user.password,
              "phone": u?.phoneNumber ||"",
              "img": u?.photoURL || "",
              "city": "",
              "province": "",
              "address": "",
          }))
          navigate("/login")
          store.dispatch(emailBienvenido(users))
      }, 1000);
      
      // ...
  })
  .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === "auth/email-already-in-use") {
            swal({
              title:`Existe una cuenta con ese correo`,
              icon: "error",
              button: "OK"
    
            })
        }
        console.error(`Error ${errorCode}`)
          // ..
      })
  };

  const login = async(email, password) => {
    
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
                const user = userCredential.user
                store.dispatch(getUserByUid(user.uid))
                
               
                setTimeout(() => {
                  swal({
                    title:`Bienvenido ${user?.email}`,
                    icon: "success",
                    button: "OK"
              
                  })
                }, 1000);
                if(rtActual === '/cart')
                {
                    
                    navigate('/cart')
                  }
                  else navigate("/products")
                  
                  /* 
                  if(u && u?.cart?.length >0){
                    store.dispatch(cartLogIn(u?.cart))
                    console.log(u.cart)
                  } */
                   
                    
                    
                
              
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                if (errorCode === "auth/user-not-found") {
                  swal({
                    title:`No existe ninguna cuenta con ese correo`,
                    icon: "error",
                    button: "OK"
          
                  })
                }
                console.error(`Error ${errorCode}`)
            })
            
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
                .then((result) => {
                    const credential =
                        GoogleAuthProvider.credentialFromResult(result)
                    const token = credential.accessToken
                    // The signed-in user info.
                    const u = result.user
                    store.dispatch(getUserByUid(u?.uid))
                    //Verifico si es la primera vez que se ingresa
                   
               
                    if (userByUid?.email) {
                      if(rtActual === '/cart')
                        {
                         
                          navigate('/cart')
                        }
                        else navigate("/products")
                  } else {
                          store.dispatch(
                              createUsers({
                                  "uid": u?.uid,
                                  "name": u?.name || '',
                                  "surname": "",
                                  "email": u?.email,
                                  "phone": u?.phoneNumber || '',
                                  "img": u?.photoURL || "",
                                  "city": "",
                                  "province": "",
                                  "address": "",
                              })
                          )
                          store.dispatch(getUserByUid(u?.uid))
                          navigate("/products")
                          
                     
                      }
                     
                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code
                    const errorMessage = error.message
                    // The email of the user"s account used.
                    const email = error.reloadUserInfo
                    
                    // The AuthCredential type that was used.

                    const credential =
                        GoogleAuthProvider.credentialFromError(error)
                    // ...
                })
               
  };

  const logout = () => {
    console.log('cart Logout', userCart)
    if (u?.uid && ucart.length > 0) {
      store.dispatch(updateUser(userCart))
      
      }
      if (u?.uid && ucart.length === 0) 
      {
        store.dispatch(updateUser(userCart))
        store.dispatch(cartLogOut())
        
       
      }
    signOut(auth)
            .then(() => {
                // Sign-out successful.

                
                
                setTimeout(() => {
                  store.dispatch(cartLogOut())
                  store.dispatch(userNull())
                  navigate("/products")
                  console.log('sesion cerrada')
                  
                  useEffect(()=> {
                    
                  },[userCart])
                }, 1000);
                    
            })
            .catch((error) => {
                // An error happened.
            })
          }


  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
    
       if (currentUser?.email === u?.email)
      { 
        setUserByUid(u); 

        if (u && u?.cart?.length > 0) {
          store.dispatch(cartLogIn(u.cart))
      } 
      else store.dispatch(cartLogOut([]))
 
        

      } 
      /* if(!currentUser){
        store.dispatch(userNull())
      } */
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);



  


  return (
    <authContext.Provider
      value={{
        signup,
        login,
        userByUid,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }} 
    >
      {children}
    </authContext.Provider>
  );
}