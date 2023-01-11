import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loading from "../Loading/Loading"
import { useSelector } from "react-redux";


export function PrivateRoutes({ children }) {
  const { userByUid, loading } = useAuth();
  const user = useSelector(state => state.userByUid)
  const navigate = useNavigate()

 
  if (loading) return <Loading/>
  if (user === null) return navigate('/login')

  return <>{children}</>;
}

/* export function UserRoutes({ children }) {
  const { userByUid, loading } = useAuth();
  const rtActual = window.location.pathname
  console.log(rtActual)
  if (loading) return <Loading/>
    <Navigate to={rtActual} />
  if (userByUid === null) return <Navigate to="/login" />;

  return <>{children}</>;
} */

export function AdminRoutes({ children }) {
  const {userByUid, loading} = useAuth();
  const user = useSelector(state => state.userByUid)
  const navigate = useNavigate()

  if (loading) return <Loading/>
  if (!user) return navigate('/login')
  if (user.isAdmin === true ){
    return <>{children}</>
  }
  else {
      return navigate('*')
  }
}



export function PublicRoutes({ children }) {
  const {userByUid, loading} = useAuth();
  

  if (loading) return <Loading/>
  
 
    return <>{children}</>
  

}