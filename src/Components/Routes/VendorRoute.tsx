import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



export default function VendorRoute({ children }: { children: JSX.Element }) {

    const { user } = useAuth();
    const [vendor, setVendor] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    console.log(user, "k");
    if (isLoading) {
        // console.log(isLoading);
        if (user?.email) {
            fetch(`http://localhost:5000/user/${user?.email}`)
                .then((res: any) => res.json())
                .then((data) => {
                    setVendor(data.vendor)
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
            vendor ? children : <Navigate to="/" />)
    }




}