import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, Params, useParams } from 'react-router-dom';
import './SingleVendor.css'
import { useCart } from "react-use-cart";

const SingleVendor = () => {
    const { addItem } = useCart();
    interface userD {
        _id: string;
        email: string;
        displayName: string;
        AccountType: string;
        contact: string;
        img: string;
        address: string;
    }
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
    const [vendor, setVendor] = useState<userD>({} as userD);
    const [products, setProducts] = useState<IProducts[]>([] as IProducts[]);
    const {id}: Readonly<Params<string>> = useParams(); 
    // console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/singleShop/${id}`) 
            .then((res) => res.json())
            .then((data) => {
                setVendor(data);
            });
        fetch(`http://localhost:5000/singleShopProducts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                console.log(products);
            });
    }, [])
    console.log(products);
    return (
        <div style={{ }} className='classPad'>
            <div style={{ flexDirection: "row" }}className="rowP">
                
                <div className='vendorDiv' style={{ }}>
                    <div className='vendorP'>
                        <div className='logoDiv'>
                            <img src={vendor.img} style={{borderRadius:"10px"}} alt="nanna vai" />
                        </div>
                        <div className='vendorinfo'>
                            <h4 style={{ marginBottom: "5px" }}> {vendor.displayName} </h4>
                            <div style={{ marginBottom: "30px" }}>
                                <p className='shopDes'> <img className="mr-5" style={{height:"17px",width:"17px", color:"#3BB77e"}} src="	http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-email.svg" alt="" /> {vendor.email }</p>
                                <p className='shopDes'> <img className="mr-5" style={{ height: "17px", width: "17px", color: "#3BB77e" }} src="	http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-contact.svg" alt="" /> {vendor.contact? vendor.contact:"not provided yet" }</p>
                                <p className='shopDes'> <img className="mr-5" style={{ height: "17px", width: "17px", color: "#3BB77e" }} src="	http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-location.svg" alt="" /> {vendor.address? vendor.address:"not provided yet" }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vendorsProducts' style={{ padding:"30px" }}>
                    <div className='productItem'>
                        <p>we found <span> { products.length }</span> items for this vendor</p>
                    </div>
                    <div style={{}} className='row row-cols-lg-4 row-cols-sm-2 row-cols-md-3 '>
                        
                            
                        
                        {
                            products.map((singleProduct) => <div key={singleProduct._id} className="mt-4 col">
                                <div className='product' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
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
                                        <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>{singleProduct.ProductTitle }</h6>
                                        <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                            <h6 style={{ fontSize: "6px" }}>
                                                <Rating

                                                    readonly
                                                    initialRating={singleProduct.rating}
                                                    fullSymbol="fa fa-star fa-2x filled"
                                                    emptySymbol="fa fa-star-o fa-2x notFilled"
                                                >

                                                </Rating>
                                            </h6>
                                        </div>
                                        <div>
                                            <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>{vendor.displayName }</span> </p>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                            <div style={{ paddingTop: "5px" }}>
                                                <h5 style={{ fontWeight: "bold", color: "#3BB77E", fontSize: "20px" }}>{singleProduct.discountPrice} <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through", fontSize: "18px" }} >{singleProduct.regularPrice }</span> </h5>
                                            </div>
                                            <div>
                                                <button onClick={() => addItem(singleProduct)}style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }  
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleVendor;