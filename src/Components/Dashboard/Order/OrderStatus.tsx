import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const OrderStatus = () => {
    const {user} = useAuth();
    interface IPendingOrder {
        _id: any,
        ProductTitle: string,
        price: number,
        items: any,
        cartTotal: number,
        SingleItem: any,
        isApproved: boolean,
        firstName: string,
        emailAddress:any,
        isDelivered:any
    }
    const [pendingOrder, setPendingOrder] = useState<IPendingOrder[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/checkout')
            .then(res => res.json())
            .then(data => setPendingOrder(data))
    }, []);

    // console.log(pendingOrder.map((i:any)=> i?.emailAddress.toString() == user?.email), user?.email);
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Order Status</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingOrder.map(i => i?.emailAddress == user?.email &&  <tr>
                            <td>{i.items.map((t: any) => <p>{t.ProductTitle.slice(0, 36)}</p>)}</td>
                            <td>{i.items.map((t: any) => <p>${t.price}</p>)}</td>
                            <td>{i.isApproved ? "Approved" : "Pending"}</td>
                            {/* <td>{i.items.map((t: any) => <p>{t.isDelivered ? "Approved" : "Pending" }</p>)}</td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderStatus