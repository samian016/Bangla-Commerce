import React, { useEffect, useState } from 'react';

const Order = () => {
    interface IPendingOrder {
        ProductTitle: string,
        price: number,
        items: any,
        cartTotal: number,
        SingleItem: any,
        isApproved: any,
        firstName:string
    }
    const [pendingOrder, setPendingOrder] = useState<IPendingOrder[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/pendingCheckout')
            .then(res => res.json())
            .then(data => setPendingOrder(data))
        // console.log(setPendingOrder);
    }, []);
    // let SingleData = pendingOrder.map(singleOrder => singleOrder.items)
    console.log(pendingOrder.map((i) => i.items.map((t: any) => t.ProductTitle)));

    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Order Process System</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingOrder.map(i => <tr>
                            <td>{i.firstName.slice(0,16)}</td>
                            <td>{i.items.map((t: any) => <p>{t.ProductTitle.slice(0,36)}</p>)}</td>
                            <td>{i.items.map((t: any) => <p>${t.price}</p>)}</td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option value="Pending" selected>Pending</option>
                                    <option value="Approved">Approved</option>

                                </select>
                            </td>
                            <td>
                                <div className="btn-group btn-group-sm">
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;