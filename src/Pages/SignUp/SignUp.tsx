import React, { useState } from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SignUp.css";
import useAuth from '../../Hooks/useAuth';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [accountType, setAccountType] = useState('');
    const [password, setPassword] = useState('');
    const [passwordT, setPasswordT] = useState('');
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    // const [signUpInfo, setSignUpInfo] = useState({});

    const handleOnBlurEmail = (e: React.FocusEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }
    const handleOnBlurName = (e: React.FocusEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const handleOnBlurPassword = (e: React.FocusEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }
    const handleOnBlurPasswordT = (e: React.FocusEvent<HTMLInputElement>) => {
        setPasswordT(e.currentTarget.value);
    }

    const handleOnChangeAccountType = (e: React.FocusEvent<HTMLInputElement>) => {
        setAccountType(e.currentTarget.value);
    }
    const handleOnBlurUrl = (e: React.FocusEvent<HTMLInputElement>) => {
        setImg(e.currentTarget.value);
    }

    // interface IregistrationInfo {
    //     name: string,
    //     email: string,
    //     password: string,
    //     passwordT: string,
    //     accountType: string
    // }
    // const newSignUp: IregistrationInfo = {
    //     name: name,
    //     email: email,
    //     password: password,
    //     passwordT: passwordT,
    //     accountType: accountType
    // }
    const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (password === passwordT) {
            setMessage("");
            // console.log(email, password, name, accountType);
            createUsingEmail(email, password, name, accountType, img);
        }
        else {
            setMessage("Password not matched");
        }
        // console.log(newSignUp);
        e.preventDefault();
    }

    const {
        signUsingGoogle, message, setMessage, createUsingEmail

    } = useAuth();
    return (
        <div className='sign-up-form container my-5'>
            <div className="row">
                <div className='col-xl-4 col-lg-4 col-md-8 m-auto'>
                    <div className="row">
                        <div className='sign-text'>
                            <h2>Create an Account</h2>
                            <div className='d-flex'>
                                <p>Already have an account?</p>
                                <span><Nav.Link as={Link} to="/login" className='ps-2 pt-0 pe-0 pb-0'>Login</Nav.Link></span>
                            </div>
                            <Form className="login-form">
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control required className='login-input' type="text" onBlur={handleOnBlurName} placeholder="Shop/Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control required className='login-input' type="email" onBlur={handleOnBlurEmail} placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicimg">
                                    <Form.Control required className='login-input' type="url" onBlur={handleOnBlurUrl} placeholder="Photo url" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control required className='login-input' type="password" onBlur={handleOnBlurPassword} placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control required className='login-input' type="password" onBlur={handleOnBlurPasswordT} placeholder="Confirm Password" />
                                    <p>{message}</p>
                                </Form.Group>
                                <div className='mt-4 mb-3'>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input custom-control-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="customer" onChange={handleOnChangeAccountType} />
                                        <label className="form-check-label">
                                            I am a customer
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input custom-control-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="vendor" onChange={handleOnChangeAccountType} />
                                        <label className="form-check-label" >
                                            I am a vendor
                                        </label>
                                    </div>
                                </div>
                                <Button className='sign-up-button w-100' variant="primary" type="submit" onClick={handleOnSubmit}>
                                    Submit &amp; Register
                                </Button>
                                <div className='third-party-login'>
                                    <p className='text-center my-2 fw-bold'>Or</p>
                                    <Button onClick={signUsingGoogle} className='w-100' variant="primary" type="submit">
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