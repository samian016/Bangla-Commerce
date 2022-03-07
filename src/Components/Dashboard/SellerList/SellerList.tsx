import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './seller.css';

export interface sellerD {
    _id: string;
    name: string;
    sellerShop: string;
    number: number;
    img: string;
    address: string;
}


const SellerList = () => {

    let [allseller, setAllseller] = useState<sellerD[]>([])
    let [sellers, setSellers] = useState<sellerD[]>([])

    useEffect(() => {
        fetch('http://localhost:8888/seller')
            .then(res => res.json())
            .then(data => {
                setSellers(data);
                setAllseller(data)
            })
    }, [])

    let handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        let search_value = e.currentTarget.value;
        let result = sellers.filter(seller => seller.name.includes(search_value) || (seller.sellerShop).includes(search_value));
        if (search_value) {
            setSellers(result)
        }
        else {
            setSellers(allseller)
        }
    }

    return (
        
        <>
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={sellers[0].img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> Name: {sellers[0].name}</h5>
                        <h5 className="card-title"> Shop Name: {sellers[0].sellerShop}</h5>
                        <p className="card-text">Address: {sellers[0].address} </p>
                        <p className="card-text"><small className="text-muted">Contact Number : {sellers[0].number}</small></p>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default SellerList;
