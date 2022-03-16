import React from 'react';
import "./Search.css";

const Search = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className='d-flex justify-content-between align-items-center border rounded py-1 px-3'>
                        <div className='image-and-title d-flex align-items-center'>
                            <img style={{ width: "50px", height: "auto", marginRight: "10px" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg" alt="" />
                            <p className='p-0 m-0'>This is the product title</p>
                        </div>
                        <p className='p-0 m-0'>$400</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;