import React from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import './LogIn.css';

const LogIn = () => {
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
                                <span><Nav.Link href="https://fb.com" className='ps-2 pt-0 pe-0 pb-0'>Create here</Nav.Link></span>
                            </div>
                            <Form className="login-form">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control required className='login-input' type="email" placeholder="Username or Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control required className='login-input' type="password" placeholder="Your Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
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