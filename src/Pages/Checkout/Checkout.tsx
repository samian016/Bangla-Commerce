import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { BsBoxArrowInRight } from "react-icons/bs";
import swal from 'sweetalert';

const Checkout: React.FC = () => {
    const { cartTotal, emptyCart ,isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem, totalItems  } = useCart();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addres, setAddress] = useState('');
    const [aptHouse, setAptHouse] = useState('');
    const [contry, setCountry] = useState('');
    const [cityTown, setCityTown] = useState('');
    const [company, setCompany] = useState('');
    const [postCode, setPostCode] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [payment, setPayment] = useState('');
    const [cart, setCart] = useState({});

    const myData = JSON.parse(localStorage.getItem('react-use-cart') || "")

    const handleCart = (e: React.Dispatch<React.SetStateAction<{}>>) => {
        const myData = JSON.parse(localStorage.getItem('react-use-cart') || "")
        setCart(cart);
    }
    const handleFirstName = (e: React.FocusEvent<HTMLInputElement>) => {
        setFirstName(e.currentTarget.value);
    }
    const handleLastName = (e: React.FocusEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value);
    }
    const handleEmailAddress = (e: React.FocusEvent<HTMLInputElement>) => {
        setEmailAddress(e.currentTarget.value);
    }
    const handleAddress = (e: React.FocusEvent<HTMLInputElement>) => {
        setAddress(e.currentTarget.value);
    }
    const handlePhoneNumber = (e: React.FocusEvent<HTMLInputElement>) => {
        setPhoneNumber(e.currentTarget.value);
    }
    const handleCountry = (e: React.FocusEvent<HTMLInputElement>) => {
        setCountry(e.currentTarget.value);
    }
    const handleAptHouse = (e: React.FocusEvent<HTMLInputElement>) => {
        setAptHouse(e.currentTarget.value);
    }
    const handleCityTown = (e: React.FocusEvent<HTMLInputElement>) => {
        setCityTown(e.currentTarget.value);
    }
    const handleCompany = (e: React.FocusEvent<HTMLInputElement>) => {
        setCompany(e.currentTarget.value);
    }
    const handlePostCode = (e: React.FocusEvent<HTMLInputElement>) => {
        setPostCode(e.currentTarget.value);
    }
    const handleAdditionalInfo = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setAdditionalInfo(e.currentTarget.value);
    }
    const handlePayment = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPayment(value);
    }
    interface ICheckout {
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber: string,
        addres: string,
        aptHouse: string,
        contry: string,
        cityTown: string,
        postCode: string,
        additionalInfo: string,
        payment: string,
        company: string,
        items: any[],
        cartTotal: number,
        totalItems: number,
        isApproved: boolean
    }

    const Checkout: ICheckout = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        addres: addres,
        aptHouse: aptHouse,
        contry: contry,
        cityTown: cityTown,
        postCode: postCode,
        additionalInfo: additionalInfo,
        payment: payment,
        company: company,
        items: myData.items,
        cartTotal: myData.cartTotal,
        totalItems: myData.totalItems,
        isApproved: false,
    }

    const handleCheckoutSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        fetch('http://localhost:5000/checkout/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Checkout)

        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    swal("DONE", "Product Purchase Successfully", "success");
                    emptyCart();
                }
                else {
                    swal("Oppss !!!", "Something Went Wrong", "error");
                }
                console.log(Checkout)
            })
            
        e.preventDefault();
    }

    return (
        <div className='container my-5 d-flex justify-content-between'>
            <div className="w-75 ms-2 me-5">
                <div className='h1 primaryFont fw-bolder primaryFontColor'>Checkout</div>
                <div className='h6 primaryFont mb-3'>There are {totalItems} products in your cart</div>
                <div className='h4 primaryFont fw-bolder primaryFontColor py-3'>Billing Details</div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleFirstName} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleLastName} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleEmailAddress} type="text" placeholder="Email Address" className="form-control" id="floatingInput" />
                            <label htmlFor="floatingInput">Email Address</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handlePhoneNumber} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleAddress} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleAptHouse} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Apt/House</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleCountry} type="text" disabled defaultValue="Bangladesh" placeholder="Bangladesh" className="form-control" id="floatingInput" />
                            <label htmlFor="floatingInput">Country</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleCityTown} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">City/Town</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handleCompany} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Company</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input onBlur={handlePostCode} type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Postcode / ZIP</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating">
                    <textarea onBlur={handleAdditionalInfo} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "120px" }}></textarea>
                    <label htmlFor="floatingTextarea2">Additional Information</label>
                </div>
            </div>
            <div className="w-25 mx-2">
                <div className='h1 primaryFont fw-bolder mb-3 primaryFontColor'>Payment</div>
                <div className='fw-bold h4'>Total: ${cartTotal}</div>
                <div className="form-check mt-5 mb-3">
                    <input onBlur={handlePayment} className="form-check-input" type="checkbox" defaultValue="Cash On Delivery" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Cash on delivery
                    </label>
                </div>
                <Link to="/dashboard">
                    <button onClick={handleCheckoutSubmit} type="button" className="btn primaryBgColor">
                        Place an Order <BsBoxArrowInRight />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Checkout