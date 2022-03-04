import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState<Array<any>>([]);
    const topSelling = products.filter(product => product.regularPrice > 100);
    const trending = products.filter(product => product.Stock >= 15);
    let myDate = new Date();
    let todayDate = myDate.getDate();
    let todayMonth = myDate.getMonth() + 1;
    let todayYear = myDate.getFullYear();
    let fullDate = todayDate + "/" + todayMonth + "/" + todayYear;
    const recent = products.filter(product => product.addDate === "11/2/2022");
    const hotDeals = products.filter(product => product.discountPercentage >= 20 && product.discountPercentage <= 30);
    const topRated = products.filter(product => product.rating >= 4);

    useEffect(() => {
        fetch('https://sleepy-beyond-70687.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(fullDate);
    return (
        <div className="container-fluid product-list-container">
            <div className="row">
                <div className="col-md-3">
                    <div className="product-list-title my-5">
                        <h2>Top Selling</h2>
                    </div>
                    {
                        topSelling.slice(0, 3).map(product => <div className="product-list row d-flex mb-4">
                            <div className="product-list-image col-4">
                                <img className="img-fluid" src={product.image} alt="" />
                            </div>
                            <div className="product-list-text col-8">
                                <h3 className="fs-5">{product.ProductTitle}</h3>
                                <h6 style={{ fontSize: "8px" }}>
                                    <Rating
                                        readonly
                                        initialRating={product.rating}
                                        fullSymbol="fa fa-star fa-2x filled"
                                        emptySymbol="fa fa-star-o fa-2x notFilled">
                                    </Rating>
                                </h6>
                                <div className='d-flex align-items-center'>
                                    <p className='primaryColor fw-bold me-3'>$ {product.discountPrice}</p>
                                    <p className='primaryColor fw-bold'>$ <span className='text-decoration-line-through'>{product.regularPrice}</span></p>
                                </div>
                                {/* <p>{product.rating}</p> */}
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-md-3">
                    <div className="product-list-title my-5">
                        <h2>Trending Products</h2>
                    </div>
                    {
                        trending.slice(0, 3).map(product => <div className="product-list row mb-4 d-flex">
                            <div className="product-list-image col-4">
                                <img className="img-fluid" src={product.image} alt="" />
                            </div>
                            <div className="product-list-text col-8">
                                <h3 className="fs-5">{product.ProductTitle}</h3>
                                <h6 style={{ fontSize: "8px" }}>
                                    <Rating
                                        readonly
                                        initialRating={product.rating}
                                        fullSymbol="fa fa-star fa-2x filled"
                                        emptySymbol="fa fa-star-o fa-2x notFilled">
                                    </Rating>
                                </h6>
                                <div className='d-flex align-items-center'>
                                    <p className='primaryColor fw-bold me-3'>$ {product.discountPrice}</p>
                                    <p className='primaryColor fw-bold'>$ <span className='text-decoration-line-through'>{product.regularPrice}</span></p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-md-3">
                    <div className="product-list-title my-5">
                        <h2>Hot Deals</h2>
                    </div>
                    {
                        hotDeals.slice(0, 3).map(product => <div className="product-list row mb-4 d-flex">
                            <div className="product-list-image col-4">
                                <img className="img-fluid" src={product.image} alt="" />
                            </div>
                            <div className="product-list-text col-8">
                                <h3 className="fs-5">{product.ProductTitle}</h3>
                                <h6 style={{ fontSize: "8px" }}>
                                    <Rating
                                        readonly
                                        initialRating={product.rating}
                                        fullSymbol="fa fa-star fa-2x filled"
                                        emptySymbol="fa fa-star-o fa-2x notFilled">
                                    </Rating>
                                </h6>
                                <div className='d-flex align-items-center'>
                                    <p className='primaryColor fw-bold me-3'>$ {product.discountPrice}</p>
                                    <p className='primaryColor fw-bold'>$ <span className='text-decoration-line-through'>{product.regularPrice}</span></p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-md-3">
                    <div className="product-list-title my-5">
                        <h2>Top Rated</h2>
                    </div>
                    {
                        topRated.slice(0, 3).map(product => <div className="product-list row mb-4 d-flex">
                            <div className="product-list-image col-4">
                                <img className="img-fluid" src={product.image} alt="" />
                            </div>
                            <div className="product-list-text col-8">
                                <h3 className="fs-5">{product.ProductTitle}</h3>
                                <h6 style={{ fontSize: "8px" }}>
                                    <Rating
                                        readonly
                                        initialRating={product.rating}
                                        fullSymbol="fa fa-star fa-2x filled"
                                        emptySymbol="fa fa-star-o fa-2x notFilled">
                                    </Rating>
                                </h6>
                                <div className='d-flex align-items-center'>
                                    <p className='primaryColor fw-bold me-3'>$ {product.discountPrice}</p>
                                    <p className='primaryColor fw-bold'>$ <span className='text-decoration-line-through'>{product.regularPrice}</span></p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductList;