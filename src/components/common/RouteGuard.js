import { useAuthContext } from "../../contexts/UserContext.js"
import { Navigate, Outlet } from "react-router-dom"

export const RouteGuard = ({ children }) => {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children ? children : <Outlet />
}