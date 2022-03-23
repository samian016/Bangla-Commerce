import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ViewCart: React.FC = () => {

  const { cartTotal,
    items,
    updateItemQuantity,
    removeItem, totalItems } = useCart();
  return (
    <div className='container my-5 d-flex justify-content-between'>
      <div className='w-75 px-3'>
        <div className='h1 primaryFont fw-bolder primaryFontColor'>Your Cart</div>
        <div className='h6 primaryFont mb-5 secondaryFontColor'>There are {totalItems} products in your cart</div>
        <table className="table">
          <tbody className='align-items-center'>
            {
              items.map((item): any => <tr className='text-center align-items-center'>
                <td><img style={{ width: '54px' }} src={item.image} alt="Product IMG" /> </td>
                <td>{item.ProductTitle}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className='mx-3 fw-bold'>{item.quantity}</div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">

                      <button type="button" className="btn btn-warning"
                        onClick={() => updateItemQuantity(item.id, (item.quantity ? item.quantity - 1 : 0))} >
                        -
                      </button>
                      <button type="button" className="btn btn-primary"
                        onClick={() => updateItemQuantity(item.id, item.quantity ? item.quantity + 1 : 0)} >
                        +
                      </button>
                      <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
                    </div>
                  </div>


                </td>
                <td>${(item.quantity ? item.quantity : 0) * (item.discountPrice)} </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <div className='w-25 px-3'>
        <div className='h1 primaryFont fw-bolder mb-5 primaryFontColor'>Your Order</div>
        <p className='fw-bold'>Subtotal: ${cartTotal}</p>
        {cartTotal == 0 ?
        <Link to="/shop"><button type="button" className="btn primaryBgColor">Go To Shopping <BsBoxArrowInRight /> </button></Link>
        :
          <Link to="/checkout"><button type="button" className="btn primaryBgColor">Proceed To Checkout <BsBoxArrowInRight /> </button></Link>
        }
      </div>
    </div>
  )
}

export default ViewCart;