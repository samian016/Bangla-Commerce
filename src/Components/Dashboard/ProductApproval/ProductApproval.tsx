import React, { useEffect,  useState } from 'react';

const ProductApproval = () => {
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
        fetch('https://blooming-chamber-05072.herokuapp.com/productForapprove')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const delItem = (id:string) => {
        const confirmation = window.confirm(`are you sure want to delete:${id}?`);
        if (confirmation) {
            const url = `https://blooming-chamber-05072.herokuapp.com/delete/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Product Deleted");
                        const remainingProduct = products.filter(
                            (product) => product._id !== id
                        );
                        setProducts(remainingProduct);
                    }
                });
        } else {
            return;
        }
        
    }
    const approve = (id:string) => {
        fetch(`https://blooming-chamber-05072.herokuapp.com/approved/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    const remainingProduct = products.filter(
                        (product) => product._id !== id
                    );
                    setProducts(remainingProduct);
                } else {
                    alert("not updated");
                }
            });
    }
    
    return (
        <div>
            <div>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Approve Product</h1>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (

                                    < tr key={product._id} >
                                        <th scope="row">{product._id}</th>
                                        <td>{product.ProductTitle}</td>
                                        <td>{product.discountPrice}</td>
                                       
                                        <td>
                                            <div className="btn-group">
                                                <button type="button" onClick={() => delItem(product._id)} className="btn btn-danger">Delete</button>
                                                <button type="button" onClick={() => { approve(product._id)}} className="btn btn-success">Approve</button>
                                            </div>
                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductApproval;