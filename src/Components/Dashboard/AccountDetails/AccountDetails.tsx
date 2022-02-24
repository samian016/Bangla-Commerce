import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AccountDetails = () => {
    const { user, updateUserName, updatingPass } = useAuth();
    // console.log(user);
    const [presentUser, setPresentUser] = useState<{ email: string | undefined, displayName: string | undefined,address?: string,contact?: string,}>({email:"",displayName:""});
    useEffect(() => {
        const userMail: {
           email:string | null | undefined, 
        } = {
            email: user?.email
        }
        // console.log(userMail);
        console.log(JSON.stringify(userMail), '1');

        if (user) {
            fetch("http://localhost:5000/user", {
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
    

    const [message, setMessage] = useState<string>('');
    const name = useRef<HTMLInputElement>(null!);
    const location = useRef<HTMLInputElement>(null!);
    const contact = useRef<HTMLInputElement>(null!);
    const pass1 = useRef<HTMLInputElement>(null!);
    const pass2 = useRef<HTMLInputElement>(null!);



    const onSubmit = (e: React.FormEvent) => {
        const nameU = name.current.value;
        const locationU = location.current.value;
        const contactU = contact.current.value;
        e.preventDefault();
        const update: { email: string | undefined, displayName: string | undefined, address?: string, contact?: string, } = {
            email: presentUser.email,
            displayName: nameU,
            address: locationU,
            contact: contactU,
        }
        fetch('http://localhost:5000/user', {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
            },
            body:JSON.stringify(update)
        })
            .then((result) => result.json())
            .then((data) => {
                if (data.modifiedCount === 1) {
                    setMessage("updated")
                    updateUserName(nameU);
                }
        })
        // console.log(presentUser);

}

    const onSubmit2 = (e: React.FormEvent) => {
        e.preventDefault();
        const pass1U = pass1.current.value;
        const pass2U = pass2.current.value;

        if (pass1U === pass2U) {
            updatingPass(pass1U);
            // console.log(pass1U);
        }
        else {
            console.log("not matched");
        }

}


    return (
        <>
        <form onSubmit={onSubmit}>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Account Details</h1>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                            <input type="text" ref={name} className="form-control" id="floatingInputGrid" defaultValue={presentUser.displayName}  />
                        <label htmlFor="floatingInputGrid">Name</label>
                    </div>
                </div>
                
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" readOnly defaultValue={presentUser.email} />
                <label htmlFor="floatingInput">Email Addresss</label>
            </div>
            {/* <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                <label htmlFor="floatingInput">Current Password</label>
            </div> */}
            
            <div className="form-floating mb-3">
                    <input type="text" ref={location} className="form-control" id="floatingInput" defaultValue={presentUser.address} />
                <label htmlFor="floatingInput">Your Location</label>
            </div>
            <div className="form-floating mb-3">
                    <input type="text" ref={contact} className="form-control" id="floatingInput" defaultValue={presentUser.contact }/>
                <label htmlFor="floatingInput">Contact Number</label>
                </div>
                <p>{ message }</p>
            <Button className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColorBtn text-white fw-bold' type='submit'>
                
                   Update Account Details
            </Button>
            </form>
            <form className='pt-5' onSubmit={onSubmit2}>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Update Password</h1>
                <div className="form-floating mb-3">
                    <input type="password" ref={pass1} className="form-control" id="floatingInput" placeholder="Product Name" />
                    <label htmlFor="floatingInput">New Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" ref={pass2} className="form-control" id="floatingInput" placeholder="Product Name" />
                    <label htmlFor="floatingInput">Confirm Password</label>
                </div>
                <Button className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColorBtn text-white fw-bold' type='submit'>

                    Update Password
                </Button>
            </form>
        </>
    );
};

export default AccountDetails;