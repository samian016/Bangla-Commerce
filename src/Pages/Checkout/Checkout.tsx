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
            <div className="w-75">
                <div className='h1 primaryFont fw-bolder primaryFontColor'>Checkout</div>
                <div className='h6 primaryFont mb-3'>There are {totalItems} products in your cart</div>
                <div className='h4 primaryFont fw-bolder secondaryFontColor'>Billing Details</div>
            </div>
            <div className="w-25">
                <div className='h1 primaryFont fw-bolder mb-3 primaryFontColor'>Payment</div>
                <div className="form-check mt-5 mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
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