import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Add New Product</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                <label htmlFor="floatingInput">Product Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Image URL" />
                <label htmlFor="floatingInput">Product Image URL</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">Product Description</label>
            </div>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingInputGrid" placeholder="Price" defaultValue={0} />
                        <label htmlFor="floatingInputGrid">Price</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Open this select category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Select Category</label>
                    </div>
                </div>
            </div>
            <Link to='/dashboard/product-list'>
            <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Add Product</div>
          </Link>
        </div>
    );
};

export default AddProduct;