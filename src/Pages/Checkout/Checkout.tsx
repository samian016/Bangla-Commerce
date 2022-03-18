import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { BsBoxArrowInRight } from "react-icons/bs";

const Checkout: React.FC = () => {
    const { cartTotal, isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem, totalItems } = useCart();
    return (
        <div className='container my-5 d-flex justify-content-between'>
            <div className="w-75 ms-2 me-5">
                <div className='h1 primaryFont fw-bolder primaryFontColor'>Checkout</div>
                <div className='h6 primaryFont mb-3'>There are {totalItems} products in your cart</div>
                <div className='h4 primaryFont fw-bolder secondaryFontColor py-3'>Billing Details</div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" placeholder="Email Address" className="form-control" id="floatingInput" />
                            <label htmlFor="floatingInput">Email Address</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Apt/House</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" disabled defaultValue="Bangladesh" placeholder="Bangladesh" className="form-control" id="floatingInput" />
                            <label htmlFor="floatingInput">Bangladesh</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">City/Town</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Company</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                            <label htmlFor="floatingInput">Postcode / ZIP</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height":"120px"}}></textarea>
                    <label htmlFor="floatingTextarea2">Additional Information</label>
                </div>
            </div>
            <div className="w-25 mx-2">
                <div className='h1 primaryFont fw-bolder mb-3 primaryFontColor'>Payment</div>
                <div className='fw-bold h4'>Total: ${cartTotal}</div>
                <div className="form-check mt-5 mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Cash on delivery
                    </label>
                </div>
                <Link to="/dashboard"><button type="button" className="btn primaryBgColor">Place an Order <BsBoxArrowInRight /> </button></Link>
            </div>
        </div>
    )
}

export default Checkout