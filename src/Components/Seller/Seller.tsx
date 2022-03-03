import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './seller.css';

export interface sellerD {
    _id: string;
    name: string;
    sellerShop: string;
    number: number;
    img: string;
    address: string;
}

const Seller = () => {

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
        <div>
            <div className='mx-auto' >
                <h1> ALL SELLER </h1>
            </div>
            <div className=' mx-auto' style={{
                width: '80%'
            }} >
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <h3 className="navbar-brand border border-success p-2 shadow text-color "> Total Seller : {sellers.length}</h3>
                        <form className="d-flex">
                            <input onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search With Name Or Seller Name " aria-label="Search" />
                            <button className="btn btn-outline-success" type="button">Search</button>
                        </form>
                    </div>
                </nav>
                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr className='text-color table-info ' >
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Shop Name</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => <tr key={seller._id} >
                                <th scope="row" className='fw-normal table-success ' > <span className='id-color' > #</span>{seller._id.slice(23)}</th>
                                <td>{seller.name}</td>
                                <td className='table-warning' >{seller.number}</td>
                                <td>{seller.sellerShop}</td>
                                <NavLink as={Link} to={`/seller/${seller._id}`} className='text-none mx-auto border-bottom ' >
                                    <td className='btn-hover fw-bold text-center d-block my-auto '> More </td>
                                </NavLink>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Seller;