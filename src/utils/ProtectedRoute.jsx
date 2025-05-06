import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({requiredRole,children}) =>{
     const {isAuthenticated,user} = useSelector(state=>state.auth);

    if(!isAuthenticated)
    {
        return <Navigate to={"/login"} />

    }
    if(requiredRole && !requiredRole.includes(user.role))
    {
        return <Navigate to={"/login"} />

    }
    return children
} 

export default ProtectedRoute