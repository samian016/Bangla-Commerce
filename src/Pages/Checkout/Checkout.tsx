import React, { useEffect, useState } from 'react'
import useFirebase from '../../firebase/useFirebase/useFirebase';

const Checkout = () => {

  return (
    <div className='container my-5 d-flex justify-content-between'>
      <div className='w-50 px-3'>
        <div className='h3'>Total Cart:  </div>
        <table className="table">
          <tbody>
            <tr className='text-center'>
                  <td><img style={{ width: '54px' }} src="/" alt="" /> </td>
                  <td>Title</td>
                  <td>$</td>
                </tr>

          </tbody>
        </table>
      </div>
      <div className='w-50 px-3'>
        <div className='p-2 h3'>Checkout</div>
      </div>
    </div>
  )
}

export default Checkout;