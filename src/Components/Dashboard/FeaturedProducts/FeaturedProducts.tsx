import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { json } from 'stream/consumers';
import "./FeaturedProducts.css";
import swal from 'sweetalert';

const FeaturedProducts: React.FC = () => {

    // Fetch Product Data
    interface IProduct {
        productID: string,
        ProductTitle: string
    }
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("https://blooming-chamber-05072.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Add Products
    interface IFeatureProduct {
        ProductName: string,
        Status: string,
        StartDate: string,
        EndDate: string
    }

    const [productName, setProductName] = useState('')
    const [status, setStatus] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


    const selectProductTitle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductName(e.currentTarget.value);
    }
    const selectStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setStatus(value);
    }
    const handleOnBlurStartDate = (e: React.FocusEvent<HTMLInputElement>) => {
        setStartDate(e.currentTarget.value);
    }
    const handleOnBlurEndDate = (e: React.FocusEvent<HTMLInputElement>) => {
        setEndDate(e.currentTarget.value);
    }

    const FeaturedProductList: IFeatureProduct = {
        ProductName: productName,
        Status: status,
        StartDate: startDate.toLocaleString(),
        EndDate: endDate.toLocaleString()
    }

    const handleProductSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        fetch("https://blooming-chamber-05072.herokuapp.com/featuredProducts/add", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(FeaturedProductList)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("New Product", "Product Added Successfully", "success");
                    setProductName("");
                    setStatus("");
                    setStartDate("");
                    setEndDate("");
                }
                else {
                    swal("Oppss !!!", "Something Went Wrong", "error");
                }
            })
        e.preventDefault();
    }

    // Get product details
    const [filterSingleData, setFilterSingleData] = useState({});
    const handleDeleteProduct = (id: string | undefined | null) => {
        fetch("https://blooming-chamber-05072.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setFilterSingleData(data))
    }

    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Add Featured Products</h1>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={selectProductTitle}>
                                <option selected>Open this select product</option>
                                {
                                    products.map(singleProduct => <option value={singleProduct.ProductTitle}>{singleProduct.ProductTitle}</option>)
                                }
                            </select>
                            <label htmlFor="floatingSelectGrid">Select Product</label>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={selectStatus}>
                            <option selected>Open this select status</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Status</label>
                    </div>
                </div>
            </div>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInput" placeholder="Product Name" onBlur={handleOnBlurStartDate} />
                            <label htmlFor="floatingInput">Start Date</label>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="date" className="form-control" id="floatingInput" placeholder="Product Name" onBlur={handleOnBlurEndDate} />
                        <label htmlFor="floatingInput">End Date</label>
                    </div>
                </div>
            </div>
            <Link to=''>
                <span onClick={handleProductSubmit} className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                    Add Product</span>
            </Link>
        </div>
    );
};

export default FeaturedProducts;


{/* <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                <label htmlFor="floatingInput">Product Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Image URL" />
                <label htmlFor="floatingInput">Product Image URL</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">Product Description</label>
            </div> */}