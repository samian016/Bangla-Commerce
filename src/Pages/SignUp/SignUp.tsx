import React from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className='sign-up-form container my-5'>
            <div className="row">
                <div className='col-xl-4 col-lg-4 col-md-8 m-auto'>
                    <div className="row">
                        <div className='sign-text'>
                            <h2>Create an Account</h2>
                            <div className='d-flex'>
                                <p>Already have an account?</p>
                                <span><Nav.Link href="https://fb.com" className='ps-2 pt-0 pe-0 pb-0'>Login</Nav.Link></span>
                            </div>
                            <Form className="login-form">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control required className='login-input' type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control required className='login-input' type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control required className='login-input' type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <div className='mt-4 mb-3'>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input custom-control-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label">
                                            I am a customer
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input custom-control-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" >
                                            I am a vendor
                                        </label>
                                    </div>
                                </div>
                                <Button className='sign-up-button w-100' variant="primary" type="submit">
                                    Submit &amp; Register
                                </Button>
                                <div className='third-party-login'>
                                    <p className='text-center my-2 fw-bold'>Or</p>
                                    <Button className='w-100' variant="primary" type="submit">
                                        <i className="fa-brands fa-google"></i> Continue With Google
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;