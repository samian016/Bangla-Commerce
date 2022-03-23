import { Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



export default function PrivateOutlet(){

    const { isLoading, user } = useAuth();
    if (isLoading) {
        // console.log(isLoading);
        return (<div className="text-center my-5">
            <Spinner animation="border" variant="dark" />
        </div>)
    }

    else {
        return user ? <Outlet /> : <Navigate to="/login" />;
    }

}

