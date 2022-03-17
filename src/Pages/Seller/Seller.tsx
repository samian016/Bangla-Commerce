import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./Seller.css";
import { FaStar, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Seller = () => {
    interface userD {
        _id: string;
        email: string;
        displayName: string;
        AccountType: string;
        contact: string;
        img: string;
        address: string;
    }
    let [allUser, setAllUser] = useState<userD[]>([]);
    let [user, setUser] = useState<userD[]>([]);
    useEffect(() => {
        fetch("https://blooming-chamber-05072.herokuapp.com/vendors")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setAllUser(data);
            });
    }, []);





    let handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        let search_value = e.currentTarget.value;
        let result = user.filter((user) =>
            user.displayName.toLowerCase().includes(search_value)
        );
        if (search_value) {
            setUser(result);
        } else {
            setUser(allUser);
        }
    };
    return (
        <>
            <div className='seller-section pt-5'>
                <div className="container-fluid">
                    <div className="search-and-title">
                        <div className="seller-list-title">
                            <h1 className='text-center'>Vendors List</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mx-auto">
                                <div className='vendor-search'>
                                    <input onChange={handleSearch} className='border border-2' type="text" placeholder="Search vendors (by name or ID)..." />
                                    <button type="submit"><FaSearch /></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row align-items-md-stretch my-5">
                        {
                            user.map((oneUser) => {
                                return (
                                    <>
                                        <div className="col-md-6 mt-md-0 my-4">
                                            <div className="p-2 border rounded-3 vendor-info">
                                                <div className="row p-3">
                                                    <div className="col-md-4 text-center">
                                                        <div className="vendor-image">
                                                            <img className='img-fluid' src={oneUser.img ? oneUser.img : "http://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-1.png"} alt="previous version user" />
                                                        </div>
                                                        <div className="vendor-total-products mt-3">
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 vendor-details">
                                                        <p className='since'>{ oneUser.email }</p>
                                                        <h4 className='vendor-name'>{ oneUser.displayName }</h4>
                                                        <p className='vendor-rating'><FaStar style={{ color: "fdc040" }} /></p>
                                                        <div className="row d-flex align-items-end mt-2">
                                                            <div className="col-md-8 vendor-address-location">
                                                                <p><FaMapMarkerAlt style={{ fontSize: "10px", color: "#3bb77e", marginRight: "6px" }} /><span className='fw-bold'>Address: </span>{oneUser.address ? oneUser.address : " not provided yet."}</p>
                                                                <p className="m-0 p-0"><FaPhone style={{ fontSize: "10px", color: "#3bb77e", marginRight: "6px" }} /><span className='fw-bold'>Call Us:</span> { oneUser.contact? oneUser.contact: "not provided yet." }</p>
                                                            </div>
                                                            <div className="col-md-4 pt-4">
                                                                <button className="vendor-button">Visit Store</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>



                </div>
            </div >
        </>
    );
};

export default Seller;