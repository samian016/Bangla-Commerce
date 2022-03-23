import React, { useState } from 'react';
import { FaNewspaper } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

const WishList = () => {
    const [wishList, setWishList] = useState({});
    let oldData = JSON.parse(localStorage.getItem("wishList") || "");

    let newArray = [];

    for (const property in oldData) {
        newArray.push(oldData[property]);
    }

    const { addItem } = useCart();

    const combinedFunc = (product: any) => {
        addItem(product);
        //delete oldData.product._id;
        delete oldData["product._id"];
    }

    return (
        <>
            <div className="container">
                <div className="col-md-12 mx-auto">
                    <div className="row my-4">
                        {
                            newArray.map(singleOne =>
                                <div className='border rounded py-1 px-3 my-3'>
                                    <div className='image-and-title d-flex align-items-center justify-content-around mt-1'>
                                        <img style={{ width: "50px", height: "auto", marginRight: "10px" }} src={singleOne.image} alt="" />
                                        <p className='p-0 m-0'>{singleOne.ProductTitle}</p>
                                        <p className='p-0 m-0'>{singleOne.discountPrice}</p>
                                    </div>
                                    <div className='d-flex justify-content-center my-2'>
                                        <button onClick={() => combinedFunc(singleOne)} className='btn btn-success btn-sm me-3'>Add To Cart</button>
                                        <button className='btn btn-danger btn-sm'>Delete</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    );
};

export default WishList;