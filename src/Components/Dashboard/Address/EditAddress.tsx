import React from 'react';
import { Link } from 'react-router-dom';

const EditAddress = () => {
    return (
        <div>
            <div>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Edit Your Address</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Street Address / House Number" />
                    <label htmlFor="floatingInput">Street Address / House Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Street Address / House Number" />
                    <label htmlFor="floatingInput">City / State Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Street Address / House Number" />
                    <label htmlFor="floatingInput">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Street Address / House Number" />
                    <label htmlFor="floatingInput">Country</label>
                </div>
                <Link to='/dashboard/address'>
                    <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                        Update Address</div>
                </Link>
            </div>
        </div>
    );
};

export default EditAddress;