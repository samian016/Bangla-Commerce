import { Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



export default function LoginRoute({ children }: { children: JSX.Element }) {

    const { isLoading, isLogged } = useAuth();


    if (isLoading) {
        console.log(isLoading);
        return (<div className="text-center my-5">
            <Spinner animation="border" variant="dark" />
        </div>)
    }

    else {
        return (
            isLogged ? <Navigate to="/" /> : children)
    }


    

}
