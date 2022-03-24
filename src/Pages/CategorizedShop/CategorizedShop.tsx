import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import { useCart } from "react-use-cart";

const CategorizedShop = () => {
    const { id } = useParams();
    const { addItem } = useCart();
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
        value: number,
        cartQuantity:number,
        number:number
    }

    const [products, setProducts] = useState<IProducts[]>([]);
    // console.log("data.categoryName");
    // console.log();
    useEffect(() => {
        fetch(`https://blooming-chamber-05072.herokuapp.com/single/${id}`)
            .then((result: Response) => result.json())
            .then((data) => {
                // console.log(data.categoryName);
                fetch("https://blooming-chamber-05072.herokuapp.com/categoryWise", {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ name: data.categoryName })
                })
                    .then(res => res.json())
                    .then(data => {
                        setProducts(data)
                        // console.log(data);
                    })
            })
    }, [id])
    return (
        <div id='divTag'>
            <div style={{ marginTop: "30px", marginBottom: "50px" }}>
                <div
                    style={{}}
                    className="size"
                >
                    <div
                        className='archive-header'
                    >
                        <div className='row alignItemsCenter' >
                            <div className='col-xl-3'>
                                <h1 style={{ marginBottom: "15px", fontSize: "48px", fontFamily: "Quicksand", fontWeight: "700", color: "#253D4E" }}>See what we find for you</h1>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='size'>
                    <p style={{ marginTop: " 4%", marginBottom: "2%", fontWeight: "400", fontSize: "1.2rem" }}>we Found <span style={{ color: "#3BB77e" }} >{`${products.length}`}</span>  items for you!</p>
                    <div className="row">
                        <div style={{}} className="col-sm-12 col-lg-10">
                            <div className="row border-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
                                {
                                    products.map(singleProduct => <div key={singleProduct._id} className="mt-4 col-12">
                                        <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                            <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                                <div className='product-image' style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                    <img style={{ width: "100%" }} src={singleProduct.image} alt="" />
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
                                                            initialRating={singleProduct.rating}
                                                            fullSymbol="fa fa-star fa-2x filled"
                                                            emptySymbol="fa fa-star-o fa-2x"
                                                        >
                                                        </Rating>
                                                    </h6>
                                                </div>
                                                <div>
                                                    <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                    <div style={{ paddingTop: "5px" }}>
                                                        <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>${singleProduct.discountPrice} <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >${singleProduct.regularPrice}</span> </h6>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => addItem(singleProduct)}

                                                        type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>



                            {/* here is the pagination  */}










                            {/* Side bar is here  */}




                        </div>
                        <div style={{}} className="col-lg-2 col-sm-12" >

                            <div className='sidebar-widget mb-30' style={{ marginTop: "8%" }}>

                                <h5 className='section-title'>
                                    New Product
                                </h5>
                                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                                    {
                                        products.slice(0, 3).map(singleProduct => <li key={singleProduct._id} style={{ padding: "10px 0px" }}>
                                            <Link to={`/singleProduct/${singleProduct._id}`} className='a' style={{ display: "flex", textDecoration: "none", alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                                                <img className='img2' src={singleProduct.image} alt="" />
                                                <div style={{ display: "block" }}>
                                                    <h5 style={{ color: "#3BB77E" }}>{singleProduct.ProductTitle}</h5>
                                                    <p style={{ color: "#3BB77E" }}>${singleProduct.discountPrice}</p>
                                                </div>
                                            </Link>

                                        </li>)
                                    }


                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorizedShop;