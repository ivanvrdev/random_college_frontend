import { Outlet, useNavigate } from "react-router-dom"

const ProtectedRoutes = ({condition, redirectTo = '/signIn', children}) => {
    
    const navigate = useNavigate()
    
    if(!condition){
        navigate(redirectTo)
    }

    return children || <Outlet/>
}

export default ProtectedRoutes