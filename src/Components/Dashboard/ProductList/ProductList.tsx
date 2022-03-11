import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
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
        sellerID: string
    }
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(() => {
        fetch('https://blooming-chamber-05072.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDeleteProduct = (id: string) => {
        const forward = window.confirm("Are you sure? It will be deleted permanently !!!");
        if (forward) {
            fetch(`https://blooming-chamber-05072.herokuapp.com/products/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const restOfProducts = products.filter(singleProduct => singleProduct._id !== id);
                        setProducts(restOfProducts);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>All Product</h1>
            <div className="row">
                <div>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Stock</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <tr key={product._id}>
                                    <td>{product.ProductTitle}</td>
                                    <td>{product.regularPrice}</td>
                                    <td><img style={{ width: "90px", height: 'auto' }} src={product.image} alt="" /></td>
                                    <td>{product.Stock}</td>
                                    <td>{product.Category}</td>
                                    <td className='d-flex justify-content-center align-items-center'>
                                        <Link to={`/dashboard/edit-product/${product._id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                                        <button onClick={() => handleDeleteProduct(product._id.toString())} className='btn btn-danger btn-sm'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {/* <div className="col-md-4"><div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
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
                </div></div> */}
                {/* <div className="col-md-4"><div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
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
                </div> */}
            </div>
        </div>
    );
};

export default ProductList;