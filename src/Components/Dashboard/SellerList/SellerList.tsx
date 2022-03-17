import React, { useEffect, useState } from 'react';
import './Seller.css';

export interface userD {
    _id: string;
    email: string;
    displayName: string;
    AccountType: string;
    contact: string;
    img: string;
    address: string;
}



const SellerList = () => {

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
                                Total Vendor's: {user.length}
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
                            {user.map((user) => (
                                <tr key={user._id}>
                                    <th scope="row" className="fw-normal table-success ">
                                        {" "}
                                        <span className="id-color"> #</span>
                                        {user._id}
                                    </th>
                                    <td>{user.email}</td>
                                    <td className="table-warning">{user.contact}</td>
                                    <td className="table-warning fw-bold">{user.displayName}</td>
                                    {/* <NavLink
                  as={Link}
                  to={`/user/${user._id}`}
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
                {/* <div className="container my-5 ">
                    <div className="row">
                        {user.map(user => <div key={user._id} className="col-12 col-lg-3 col-md-6 " >
                            <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                                <div>
                                    <img src={user.img ? user.img : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"} alt="" className="img-fluid" />
                                </div>
                                <div className="card-header fw-bold bg-secondary text-white"> {user.displayName}</div>
                                <div className="card-body text-success">
                                    <h6 className="card-title">{user.email}</h6>
                                    <p className="card-text">
                                        {user.contact}
                                    </p>
                                    <p className="card-text" >
                                        <span className='fw-bold text-dark'>Address:</span>  {user.address ? user.address.slice(0, 50) : 'Address not found'}
                                    </p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div> */}
            </div>



        </>
    );
};

export default SellerList;
