import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>All Product</h1>
            <div className="row">
                <div className="col-md-4"><Product /></div>
                <div className="col-md-4"><Product /></div>
                <div className="col-md-4"><Product /></div>
            </div>
        </div>
    );
};

export default ProductList;


const Product = () => {
    return (
        <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
            <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                    <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" alt="" />
                </div>
            </div>
            <div style={{ padding: "0px 20px 20px 20px" }}>
                <div style={{ marginBottom: "5px" }}>
                    <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                </div>
                <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                <div>
                    <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                </div>
                <div style={{ paddingTop: "5px" }}>
                    <h5 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h5>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                    <div>
                        <button type="button" style={{ backgroundColor: "#DC3545", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Delete</button>
                    </div>
                    <Link to='/dashboard/edit-product'><div>
                        <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Update</button>
                    </div></Link>
                </div>
            </div>
        </div>
    )
}