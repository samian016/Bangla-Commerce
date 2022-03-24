import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Address = () => {

    const { user } = useAuth();
    const [presentUser, setPresentUser] = useState<{ email: string | undefined, displayName: string | undefined, address?: string, contact?: string, }>({ email: "", displayName: "" });
    useEffect(() => {
        const userMail: {
            email: string | null | undefined,
        } = {
            email: user?.email
        }
        // console.log(userMail);
        console.log(JSON.stringify(userMail), '1');

        if (user) {
            fetch("https://blooming-chamber-05072.herokuapp.com/user", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userMail)
            })
                .then((result) => result.json())
                .then((data) => {
                    setPresentUser(data);
                    console.log(data);
                })
        }
        else {

        }
    }, [user])
    return (
        <div>
            <div>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Your Address</h1>
                <p className='h4'>{presentUser.address ? presentUser.address : "Give your Address"}</p>
                <p className='h4'>{presentUser.contact ? presentUser.contact : "Give your Contact info"}</p>
                <p><Link to='/dashboard/account-details'>Edit Account Details</Link></p>
            </div>
        </div>
    );
};

export default Address;