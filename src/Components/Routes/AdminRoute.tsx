import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



export default function AdminRoute({ children }: { children: JSX.Element }) {

    const {  user } = useAuth();
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
console.log(user,"k");
    if (isLoading) {
        // console.log(isLoading);
        if (user?.email) {
            fetch(`https://blooming-chamber-05072.herokuapp.com/users/${user?.email}`)
                .then((res: any) => res.json())
                .then((data) => {
                    setAdmin(data.admin)
                }).finally(() => {
                    setIsLoading(false);
                })
        }
        return (<div className="text-center my-5">
            <Spinner animation="border" variant="dark" />
        </div>)
    }

    else {
        return (
            admin ? children : <Navigate to="/" />)
    }




}