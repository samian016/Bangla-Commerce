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
        fetch(`https://blooming-chamber-05072.herokuapp.com/seller/${id}`)
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
                    <img src={seller[0]?.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> Name: {seller[0]?.name} </h5>
                        <h5 className="card-title"> Shop Name: {seller[0]?.sellerShop} </h5>
                        <p className="card-text"> Address: {seller[0]?.address} </p>
                        <p className="card-text"><small className="text-muted"> Contact Number : {seller[0]?.number}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDetails;