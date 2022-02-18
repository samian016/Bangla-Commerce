import React from 'react';

const SellerList = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>All Seller</h1>
            <div className="row">
                <div className="col-md-4 my-2">
                    <Seller />
                </div>
                <div className="col-md-4 my-2">
                    <Seller />
                </div>
                <div className="col-md-4 my-2">
                    <Seller />
                </div>
            </div>
        </div>
    );
};

export default SellerList;


const Seller = () => {
    return (
        <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
            <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                    <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" alt="" />
                </div>
            </div>
            <div style={{ padding: "0px 20px 20px 20px" }}>
                <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Seller Name</h6>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                    <div>
                        <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Delete</button>
                    </div>
                    <div>
                        <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}