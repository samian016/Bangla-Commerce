import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditProduct: React.FC = () => {
    // Fetch Category Data Starts
    interface ICategory {
        categoryID: string,
        categoryName: string
    }
    const [category, setCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        fetch("https://sleepy-beyond-70687.herokuapp.com/categories")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);
    // Fetch Category Data Ends

    interface IProducts {
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
    }
    const [products, setProducts] = useState<IProducts[]>([]);
    const { productID } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productID}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    console.log(products);

    const [ProductTitle, setProductTitle] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [Stock, setStock] = useState(0);
    const [image, setImage] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [regularPrice, setRegularPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);

    const handleOnBlurTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductTitle(e.currentTarget.value);
    }
    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setProductCategory(value);
    }
    const handleOnBlurStock = (e: React.FocusEvent<HTMLInputElement>) => {
        setStock(parseInt(e.currentTarget.value));
    }
    const handleOnBlurImage = (e: React.FocusEvent<HTMLInputElement>) => {
        setImage(e.currentTarget.value);
    }
    const handleOnBlurDescription = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setShortDescription(e.currentTarget.value);
    }
    const handleOnBlurAdditionalInfo = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setAdditionalInfo(e.currentTarget.value);
    }
    const handleOnBlurRegularPrice = (e: React.FocusEvent<HTMLInputElement>) => {
        setRegularPrice(parseInt(e.currentTarget.value));
    }
    const handleOnBlurDiscountPrice = (e: React.FocusEvent<HTMLInputElement>) => {
        setDiscountPrice(parseInt(e.currentTarget.value));
    }

    const productList: IProducts = {
        ProductTitle: ProductTitle,
        Category: productCategory,
        Stock: Stock,
        additionalInfo: additionalInfo,
        image: image,
        adminChecked: false,
        isApproved: false,
        regularPrice: regularPrice,
        discountPrice: discountPrice,
        rating: 0,
        discountPercentage: Math.round((((regularPrice - discountPrice) / regularPrice) * 100)),
        shortDescription: shortDescription,
        sku: ''
    }

    const handleProductSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        fetch(`http://localhost:5000/products/update/${productID}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId) {
                //     alert('Product added successfully');
                // }
                // else {
                //     alert('Something is wrong');
                // }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Update Product</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" defaultValue={products[0]?.ProductTitle} onChange={handleOnBlurTitle} />
                <label htmlFor="floatingInput">Product Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Product Image URL" defaultValue={products[0]?.image} onBlur={handleOnBlurImage} />
                <label htmlFor="floatingInput">Product Image URL</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }} defaultValue={products[0]?.shortDescription} onBlur={handleOnBlurDescription}></textarea>
                <label htmlFor="floatingTextarea2">Product Description</label>
            </div>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingInputGrid" placeholder="Stock" defaultValue={products[0]?.Stock} onBlur={handleOnBlurStock} />
                        <label htmlFor="floatingInputGrid">Stock</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={selectChange}>
                            <option selected>- Select category -</option>
                            {
                                category.map(singleCategory => <option value={singleCategory.categoryName}>{singleCategory.categoryName}</option>)
                            }
                        </select>
                        <label htmlFor="floatingSelectGrid">Select Category</label>
                    </div>
                </div>
            </div>
            <div className="row g-2 mb-3">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingInputGrid" placeholder="Regular Price" defaultValue={products[0]?.regularPrice} onBlur={handleOnBlurRegularPrice} />
                        <label htmlFor="floatingInputGrid">Regular Price</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingInputGrid" placeholder="Discount Price" defaultValue={products[0]?.discountPrice} onBlur={handleOnBlurDiscountPrice} />
                        <label htmlFor="floatingInputGrid">Discount Price</label>
                    </div>
                </div>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Additional Info" id="floatingTextarea2" style={{ "height": "100px" }} defaultValue={products[0]?.additionalInfo} onBlur={handleOnBlurAdditionalInfo}></textarea>
                <label htmlFor="floatingTextarea2">Additional Information</label>
            </div>
            <Link to='/dashboard/product-list'>
                <span onClick={handleProductSubmit} className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                    Update</span>
            </Link>
        </div >


        // <div>
        //     <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Edit Product</h1>
        //     <div className="form-floating mb-3">
        //         <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
        //         <label htmlFor="floatingInput">New Product Name</label>
        //     </div>
        //     <div className="form-floating mb-3">
        //         <input type="text" className="form-control" id="floatingInput" placeholder="Product Image URL" />
        //         <label htmlFor="floatingInput">New Product Image URL</label>
        //     </div>
        //     <div className="form-floating mb-3">
        //         <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
        //         <label htmlFor="floatingTextarea2">New Product Description</label>
        //     </div>
        //     <div className="row g-2 mb-3">
        //         <div className="col-md">
        //             <div className="form-floating">
        //                 <input type="number" className="form-control" id="floatingInputGrid" placeholder="Price" defaultValue={0} />
        //                 <label htmlFor="floatingInputGrid">New Price</label>
        //             </div>
        //         </div>
        //         <div className="col-md">
        //             <div className="form-floating">
        //                 <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        //                     <option selected>Open this select category</option>
        //                     <option value="1">One</option>
        //                     <option value="2">Two</option>
        //                     <option value="3">Three</option>
        //                 </select>
        //                 <label htmlFor="floatingSelectGrid">Select New Category</label>
        //             </div>
        //         </div>
        //     </div>
        //     <Link to='/dashboard/product-list'>
        //         <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
        //             Update Product</div>
        //     </Link>
        // </div>
    );
};

export default EditProduct;