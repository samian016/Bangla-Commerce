import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>All Category</h1>
            <div className="row">
                <div className="col-md-4 my-2">
                    <Category />
                </div>
                <div className="col-md-4 my-2">
                    <Category />
                </div>
                <div className="col-md-4 my-2">
                    <Category />
                </div>
                <div className="col-md-4 my-2">
                    <Category />
                </div>
                <div className="col-md-4 my-2">
                    <Category />
                </div>
                <div className="col-md-4 my-2">
                    <Category />
                </div>
            </div>
        </div>
    );
};

export default CategoryList;


const Category = () => {
    return (
        <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
            <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                    <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" alt="" />
                </div>
            </div>
            <div style={{ padding: "0px 20px 20px 20px" }}>
                <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Category Name</h6>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                    <div>
                        <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Delete</button>
                    </div>
                    <div>
                       <Link to='/dashboard/edit-category'> 
                       <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}