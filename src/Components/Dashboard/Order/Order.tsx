import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {
    const { user } = useAuth();
    interface IPendingOrder {
        ProductTitle: string,
        price: number,
        items: any,
        cartTotal: number,
        SingleItem: any,
        isApproved: boolean,
        firstName: string,
        _id: any,
        emailAddress: any,
        
    }
    const [pendingOrder, setPendingOrder] = useState<IPendingOrder[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/checkout')
            .then(res => res.json())
            .then(data => setPendingOrder(data))
    }, []);
    const handleDeleteProduct = (id: string | undefined | null) => {
        const forward = window.confirm("Are you sure? It will be deleted permanently !!!");
        if (forward) {
            fetch(`http://localhost:5000/checkout/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Deleted Successfully");
                        const restOfProducts = pendingOrder.filter(singleBlog => singleBlog._id !== id);
                        setPendingOrder(restOfProducts);
                    }
                    else {
                        swal("Something wrong")
                    }
                })
        }
    }
    const handleBlogConfirm = (id: string | undefined) => {
        const myId = { id }
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    swal("Order Approved");
                    fetch('http://localhost:5000/checkout/')
                        .then(res => res.json())
                        .then(data => setPendingOrder(data))
                } else {
                    swal("something went wrong");
                }
            })
        //e.preventDefault();
    }


    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Order Process System</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingOrder.map(i => <tr>
                            <td>{i.firstName.slice(0, 16)}</td>
                            <td>{i.items.map((t: any) => <p>{t.ProductTitle.slice(0, 36)}</p>)}</td>
                            <td>{i.items.map((t: any) => <p>${t.price}</p>)}</td>
                            <td className='d-flex justify-content-center align-items-center'>
                            <button onClick={() => handleDeleteProduct(i?._id)} className='btn btn-danger btn-sm me-2'>Delete</button>
                                {i.isApproved === false
                                    ?
                                    <>
                                        <button onClick={() => handleBlogConfirm(i._id)} className='btn btn-success btn-sm'>Approve</button>
                                    </>
                                    :
                                    <>

                                    </>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;