import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";


import './Product.css'
const Products: React.FC = () => {

    interface IProducts {
        _id: string;
        ProductTitle: string,
        Category: string,
        Stock: number,
        image: string,
        rating: number,
        shortDescription: string,
        additionalInfo: string,
        regularPrice: number,
        discountPrice: number,
        discountPercentage: number,
        sku: string,
        isApproved: boolean,
        adminChecked: boolean,
        sellerID: string,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
        id: string,
        price: number,
        quantity: number,
        itemTotal: number,
        [key: string]: any
    }

    const [products, setProducts] = useState<IProducts[]>([]);
    const { addItem } = useCart();

    useEffect(() => {
        fetch('https://blooming-chamber-05072.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div className='px-5'>
            <div className="container-fluid p-5">
                <div>
                    <h2 className='best-sales'>Popular Products</h2>
                </div>
                <div className="row border-1 row-cols-lg-5 row-cols-sm-2 row-cols-md-4">
                    {
                        products.slice(0, 10).map((singleProduct) => <div key={singleProduct._id} className="mt-4 col">
                            <div className='product' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                <div style={{textAlign:"center", position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                    <div className='product-image w-100' style={{ position: "relative", overflow: "hidden", borderRadius: "15px", textAlign: "center" }}>
                                        <img className='img-fluid' src={singleProduct.image} alt="" />
                                        <Link to={`/singleProduct/${singleProduct._id}`} className='view-details-button'>View Details</Link>
                                    </div>
                                </div>
                                <div style={{ padding: "0px 20px 20px 20px" }}>
                                    <div style={{ marginBottom: "5px" }}>
                                        <p style={{ fontWeight: "bold", color: "#adadad" }} className="">{singleProduct.Category}</p>
                                    </div>
                                    <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>{singleProduct.ProductTitle}</h6>
                                    <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                        <h6 style={{ fontSize: "6px" }}>
                                            <Rating

                                                readonly
                                                initialRating={3}
                                                fullSymbol="fa fa-star fa-2x filled"
                                                emptySymbol="fa fa-star-o fa-2x notFilled"
                                            >

                                            </Rating>
                                        </h6>
                                    </div>
                                    <div>
                                        <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                        <div style={{ paddingTop: "5px" }}>
                                            <h5 style={{ fontWeight: "bold", color: "#3BB77E", fontSize: "20px" }}>${singleProduct.discountPrice} <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through", fontSize: "18px" }} >${singleProduct.regularPrice}</span> </h5>
                                        </div>
                                        <div>
                                            <button onClick={() => addItem(singleProduct)} type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;