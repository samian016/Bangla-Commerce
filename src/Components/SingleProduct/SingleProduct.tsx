import React, { useEffect, useState } from 'react';
import './SingleProduct.css';
import Rating from 'react-rating';
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useCart } from "react-use-cart";

const SingleProduct: React.FC = () => {
    const { productID } = useParams();

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
        id: string,
        price: number,
        quantity: number,
        itemTotal?: number,
        [key: string]: any,
        // target: any,
        value: number,
        // target:number
        cartQuantity:number,
        number:number
    }
    const { addItem } = useCart();

    const [products, setProducts] = useState<IProducts[]>([]);
    useEffect(() => {
        fetch(`https://blooming-chamber-05072.herokuapp.com/products/${productID}`)
            .then(res => res.json())
            .then(data => setProducts(data))
        setProducts([]);
    }, [productID])
    const [cartQuantity, setCartQuantity] = useState<IProducts[]>([]);

    const getCartQuantity = (val:any) =>{
        let q = val.target.value
        setCartQuantity(q ? q : 1)
    }

    return (
        <div className='col-md-10 mx-auto single-product-details'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pe-4">
                        <div className="product-image">
                            <img className='w-100 img-fluid' src={products[0]?.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-2 ps-4">
                        <div className="stock-tag">
                            {products[0]?.Stock > 0 ? <button className="available-button">Available</button> : <button className='sale-off-button'>Sale Off</button>}
                        </div>
                        <div className="product-info mt-3">
                            <h3 className='mb-4'>{products[0]?.ProductTitle}</h3>
                            <h6 className='mb-4' style={{ fontSize: "8px" }}>
                                <Rating
                                    readonly
                                    initialRating={products[0]?.rating}
                                    fullSymbol="fa fa-star fa-2x filled"
                                    emptySymbol="fa fa-star-o fa-2x notFilled">
                                </Rating>
                            </h6>
                            <div className='d-flex align-items-center mb-4'>
                                <p className='primaryColor fw-bold me-3 regular-price p-0 m-0'>$ {products[0]?.discountPrice}</p>
                                <div>
                                    <p className='p-0 discount-percentage'>{products[0]?.discountPercentage}% Off</p>
                                    <p className='primaryColor fw-bold m-0 p-0 discount-price'>$ <span className='text-decoration-line-through'>{products[0]?.regularPrice}</span></p>
                                </div>
                            </div>
                            <div className="product-description mb-3">
                                <p className='m-0 p-0'>{products[0]?.shortDescription}</p>
                            </div>
                            <div className="add-to-cart-info d-flex align-items-center mb-4">
                                {/* <div className="product-count">
                                    <input type="number" onChange={getCartQuantity} name="" min={1} id="" defaultValue={1} />
                                </div> */}
                                <div className="product-add-to-cart-button">
                                    <button onClick={() => addItem(products[0])} ><FaCartPlus /> Add To Cart</button>
                                    {/* <button onClick={() => addItem({...products[0],isDelivered:false})} ><FaCartPlus /> Add To Cart</button> */}
                                </div>
                                {/* <div className="product-favorite">
                                    <button><FaRegHeart /></button>
                                </div> */}
                            </div>
                            <div className="product-short-info">
                                <ul>
                                    <li>Category: {products[0]?.Category}</li>
                                    <li>SKU: {products[0]?.sku}</li>
                                    <li>Stock: {products[0]?.Stock}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="product-additional-info">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;