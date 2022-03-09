import React, { useEffect, useState } from 'react';
import './Seller.css';

export interface sellerD {
    _id: string;
    email: string;
    displyName: string;
    AccountType: string;
    contact: string;
    img: string;
    address: string;
}



const SellerList = () => {

    let [allseller, setAllseller] = useState<sellerD[]>([]);
    let [sellers, setSellers] = useState<sellerD[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    let sellerFil = data.filter((user: sellerD) =>
                        user.AccountType.includes("vendor")
                    );
                    setSellers(sellerFil);
                    setAllseller(sellerFil);
                }
            });
    }, []);

    let handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        let search_value = e.currentTarget.value;
        let result = sellers.filter((seller) =>
            seller.displyName.includes(search_value)
        );
        if (search_value) {
            setSellers(result);
        } else {
            setSellers(allseller);
        }
    };

    return (

        <>

            


            <div className="text-center">
                <div className="mx-auto">
                <h1 className='text-secondary'>Vendor's</h1>
                </div>
                <div
                    className=" mx-auto"
                    style={{
                        width: "80%",
                    }}
                >
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <h3 className="navbar-brand border border-success p-2 shadow text-color ">
                                {" "}
                                Total Seller : {sellers.length}
                            </h3>
                            <form className="d-flex">
                                <input
                                    onChange={handleSearch}
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="vendor Shop Name "
                                    aria-label="Search"
                                />
                                <button className="btn btn-success" type="button">
                                    Search
                                </button>
                            </form>
                        </div>
                    </nav>
                    <table className="table table-hover table-bordered ">
                        <thead>
                            <tr className="text-color table-info ">
                                <th scope="col">ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Shop Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers.map((seller) => (
                                <tr key={seller._id}>
                                    <th scope="row" className="fw-normal table-success ">
                                        {" "}
                                        <span className="id-color"> #</span>
                                        {seller._id}
                                    </th>
                                    <td>{seller.email}</td>
                                    <td className="table-warning">{seller.contact}</td>
                                    <td className="table-warning">{seller.displyName}</td>
                                    {/* <NavLink
                  as={Link}
                  to={`/seller/${seller._id}`}
                  className="text-none mx-auto border-bottom "
                >
                  <td className="btn-hover fw-bold text-center d-block my-auto ">
                    {" "}
                    More{" "}
                  </td>
                </NavLink> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="container my-5 ">
                    <div className="row">
                        {sellers.map(user => <div key={user._id} className="col-12 col-lg-3 col-md-6 " >
                            <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                                <div>
                                    <img src={user.img ? user.img : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"} alt="" className="img-fluid" />
                                </div>
                                <div className="card-header"> {user.displyName}</div>
                                <div className="card-body text-success">
                                    <h6 className="card-title">{user.email}</h6>
                                    <p className="card-text">
                                        {user.contact}
                                    </p>
                                    <p className="card-text" >
                                        Address: {user.address ? user.address.slice(0, 50) : 'Address not found'}
                                    </p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>



        </>
    );
};

export default SellerList;
