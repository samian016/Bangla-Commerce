import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";

const Checkout: React.FC = () => {

  const { cartTotal,isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem, totalItems } = useCart();
  return (
    <div className='container my-5 d-flex justify-content-between'>
      <div className='w-75 px-3'>
        <div className='h3 fw-bold bg-light text-center  rounded'> <span className='text-success'>Total Cart:</span>  {totalItems} </div>
        <table className="table">
          <tbody className='align-items-center'>
            {
              items.map((item):any => <tr className='text-center'>
                <td><img style={{ width: '54px' }} src={item.image} alt="Product IMG" /> </td>
                <td>{item.ProductTitle}</td>
                <td> 
                  <div className="d-flex align-items-center">
                    <div className='mx-3 fw-bold'>{item.quantity}</div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">

                      <button type="button" className="btn btn-warning btn-group-sm"
                        onClick={() => updateItemQuantity(item.id, (item.quantity ? item.quantity -1:0 ))} >
                        -
                      </button>
                      <button type="button" className="btn btn-primary btn-group-sm"
                        onClick={() => updateItemQuantity(item.id, item.quantity ? item.quantity +1:0 )} >
                        +
                      </button>
                      <button type="button" className="btn btn-danger btn-group-sm" onClick={() => removeItem(item.id)}>&times;</button>
                    </div>
                  </div>


                </td>
                <td>${(item.quantity ? item.quantity:0 ) * (item.discountPrice)} </td>
              </tr>) 
            }
          </tbody>
        </table>
      </div>
      <div className='w-25 px-3'>
        <div className='p-2 h3 fw-bold bg-success rounded text-white text-center'>Checkout</div>
        <p className='fw-bold text-center text-warning bg-dark rounded p-1'> <span className='text-white'>Total:</span> ${cartTotal}</p>
      </div>
    </div>
  )
}

export default Checkout;