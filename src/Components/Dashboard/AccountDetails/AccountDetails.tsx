import React from 'react';
import { Link } from 'react-router-dom';

const AccountDetails = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Account Details</h1>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="First Name"/>
                        <label htmlFor="floatingInputGrid">First Name</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="Last Name" />
                        <label htmlFor="floatingInputGrid">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                <label htmlFor="floatingInput">Email Address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                <label htmlFor="floatingInput">Current Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                <label htmlFor="floatingInput">New Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                <label htmlFor="floatingInput">Confirm Password</label>
            </div>
            <Link to='/dashboard/product-list'>
                <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                   Update Account Details</div>
            </Link>
        </div>
    );
};

export default AccountDetails;