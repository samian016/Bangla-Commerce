import React, { useEffect, useState } from 'react';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState<Array<any>>([]);
    const topSelling = products.filter(product => product.price > 40);
    const tranding = products.filter(product => product.sellCount >= 25);
    let myDate = new Date();
    let todayDate = myDate.getDate();
    let todayMonth = myDate.getMonth() + 1;
    let todayYear = myDate.getFullYear();
    let fullDate = todayDate + "/" + todayMonth + "/" + todayYear;
    const recent = products.filter(product => product.addDate === "11/2/2022");
    const topRated = products.filter(product => product.rating === 5);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(fullDate);
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
                                <h3 className="fs-5">{product.title}</h3>
                                <p className='primaryColor'>{product.price}</p>
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
                        tranding.slice(0, 3).map(product => <div className="product-list row mb-4 d-flex">
                            <div className="product-list-image col-4">
                                <img className="img-fluid" src={product.image} alt="" />
                            </div>
                            <div className="product-list-text col-8">
                                <h3 className="fs-5">{product.title}</h3>
                                <p className='primaryColor'>{product.price}</p>
                                {/* <p>{product.rating}</p> */}
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-md-3">
                    <div className="product-list-title my-5">
                        <h2>Recently added</h2>
                    </div>
                    {
                        recent.slice(0, 3).map(product => <div className="product-list row mb-4 d-flex">
                            <div className="product-list-image col-4">
                                <img className="img-fluid" src={product.image} alt="" />
                            </div>
                            <div className="product-list-text col-8">
                                <h3 className="fs-5">{product.title}</h3>
                                <p className='primaryColor'>{product.price}</p>
                                {/* <p>{product.rating}</p> */}
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
                                <h3 className="fs-5">{product.title}</h3>
                                <p className='primaryColor'>{product.price}</p>
                                {/* <p>{product.rating}</p> */}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductList;