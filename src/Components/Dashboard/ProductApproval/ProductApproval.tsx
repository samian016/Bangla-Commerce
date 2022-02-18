import React from 'react';

const ProductApproval = () => {
    return (
        <div>
            <div>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Approve Product</h1>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">#No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger">Delete</button>
                                    <button type="button" className="btn btn-success">Approve</button>
                                    {/* <button type="button" className="btn btn-success">Track</button> */}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductApproval;