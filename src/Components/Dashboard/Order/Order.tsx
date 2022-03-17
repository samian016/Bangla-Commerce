import React from 'react';

const Order = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Order Status</h1>
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">#No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Clothes</td>
                        <td>$32</td>
                        <td>Pending</td>
                        <td>
                            <div className="btn-group">
                                <button type="button" className="btn btn-danger">Delete</button>
                                {/* <button type="button" className="btn btn-success">Track</button> */}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Order;