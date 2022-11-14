import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = ({condition, redirectTo = '/login', children}) => {
    
  if(!condition) return <Navigate to={redirectTo}/>

  return children || <Outlet/>
}

export default ProtectedRoutes