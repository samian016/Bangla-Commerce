import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Sellers {
    _id: string;
    name: string;
    sellerShop: string;
    number: string;
    img: string;
    address: string;
}

const SellerDetails = () => {

    let { id } = useParams();
    let [seller, setSeller] = useState<Sellers[]>([])

    useEffect(() => {
        fetch(`http://localhost:8888/seller/${id}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data)
                console.log(data);

            })
    }, [])

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={seller.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> Name: {seller.name}</h5>
                        <h5 className="card-title"> Shop Name: {seller.sellerShop}</h5>
                        <p className="card-text">Address: {seller.address} </p>
                        <p className="card-text"><small className="text-muted">Contact Number : {seller.number}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDetails;