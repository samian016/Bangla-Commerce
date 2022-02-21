import React from 'react';
import { Link } from 'react-router-dom';

const Address = () => {
    return (
        <div>
            <div>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Your Address</h1>
                <p className='h4'>Street Address / House Number</p>
                <p className='h4'>City Name</p>
                <p className='h4'>Phone Number</p>
                <p className='h4'>Country Name</p>
                <p><Link to='/dashboard/edit-address'>Edit Your Address</Link></p>
            </div>
        </div>
    );
};

export default Address;