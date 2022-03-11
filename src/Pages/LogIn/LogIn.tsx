import React, { useRef } from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { signUsingEmail } = useAuth()
    const mail = useRef<HTMLInputElement>(null!);
    const pass = useRef<HTMLInputElement>(null!);
    const handelSubmit = (e:any): void => {
        e.preventDefault();
        const mailE: string  = mail.current.value;
        const passE: string  = pass.current.value;
        signUsingEmail(mailE, passE);
        // console.log(mailE,passE);
        const field1:any= document.getElementById("field1");
        const field2:any = document.getElementById("field2");
        field1.value = "";
        field2.value = "";
    }
    return (
        <div className='container my-5'>
            <div className="row">
                <div className='col-xl-8 col-lg-10 col-md-12 m-auto'>
                    <div className="row">
                        <div className="login-image col-md-6 pr-30 d-none d-md-block">
                            <img src="https://i.ibb.co/fFc9HHD/login-1.png" className='img-fluid rounded' alt="" />
                        </div>
                        <div className='login-text col-md-6'>
                            <h2>Login</h2>
                            <div className='d-flex'>
                                <p>Don't have an account?</p>
                                <span><Nav.Link as={Link} to="/singUp" className='ps-2 pt-0 pe-0 pb-0'>Create here</Nav.Link></span>
                            </div>
                            <Form id="form" className="login-form">
                                <Form.Group className="mb-3" >
                                    <Form.Control ref={mail} id="field1" required className='login-input' type="email" placeholder="Username or Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control ref={pass} required id="field2" className='login-input' type="password" placeholder="Your Password" />
                                </Form.Group>
                                <Button onClick={handelSubmit} variant="primary" type="submit">
                                    Log in
                                </Button>
                            </Form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;