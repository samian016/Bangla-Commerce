import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { } from 'react-router-dom'
import useAuth from "../../Hooks/useAuth"
import { Outlet } from 'react-router-dom';
import "./Dashboard.css"
const Dashboard = () => {
  const [vendor, setVendor] = useState(false);
  const {
    logOut, admin, user
  } = useAuth();
  useEffect(() => {
    fetch(`https://blooming-chamber-05072.herokuapp.com/user/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setVendor(data.vendor);
      })
  }, [])
  return (
    <div className='container my-5 py-5'>
      <div className="dashboard-nav d-flex">
        <div className="w-25">
          <div className="dashboard-mobile-nav">
            <input type="checkbox" id="overlay-input" />
            <label htmlFor="overlay-input" id="overlay-button"><span></span></label>
            <div id="overlay">
              <div className='dashboard-scroll'>
              <Link to='/dashboard'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Dashboard</div>
            </Link>
            <Link to='/dashboard/orderStatus'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Order Status</div>
            </Link>

            {vendor && <Link to='/dashboard/add-product'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Add Products</div>
            </Link>}
            {admin && <Link to='/dashboard/product-list'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Product List</div>
            </Link>}
            {admin && <Link to='/dashboard/add-category'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Add Category</div>
            </Link>}
            {admin && <Link to='/dashboard/featured-products'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Featured Products</div>
            </Link>}
            {admin && <Link to='/dashboard/category-list'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Category List</div>
            </Link>}
            {!admin && <Link to='/dashboard/write-blog'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Write Blog</div>
            </Link>}
            {admin && <Link to='/dashboard/blogList'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Blog List</div>
            </Link>}
            {admin && <Link to='/dashboard/order'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Order Process</div>
            </Link>}
            {admin && <Link to='/dashboard/product-approval'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Product Approval</div>
            </Link>}
            {admin && <Link to='/dashboard/seller-list'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Seller List</div>
            </Link>}
            {/* <Link to='/dashboard/track-order'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Track Your Order</div>
          </Link> */}
            <Link to='/dashboard/address'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                My Address</div>
            </Link>
            {admin && <Link to='/dashboard/makeAdmin'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Make Admin</div>
            </Link>}
            <Link onClick={logOut} to='/'>
              <div className='dashboardNavItem text-center mx-4 d-block py-1 rounded primaryBgColor text-white fw-bold'>
                Sing Out</div>
            </Link>
              </div>
            </div>
          </div>
          <div className="desktop-nav">
            <Link to='/dashboard'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Dashboard</div>
            </Link>
            <Link to='/dashboard/orderStatus'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Order Status</div>
            </Link>

            {vendor && <Link to='/dashboard/add-product'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Add Products</div>
            </Link>}
            {admin && <Link to='/dashboard/product-list'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Product List</div>
            </Link>}
            {admin && <Link to='/dashboard/add-category'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Add Category</div>
            </Link>}
            {admin && <Link to='/dashboard/featured-products'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Featured Products</div>
            </Link>}
            {admin && <Link to='/dashboard/category-list'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Category List</div>
            </Link>}
            {!admin && <Link to='/dashboard/write-blog'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Write Blog</div>
            </Link>}
            {admin && <Link to='/dashboard/blogList'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Blog List</div>
            </Link>}
            {admin && <Link to='/dashboard/order'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Order Process</div>
            </Link>}
            {admin && <Link to='/dashboard/product-approval'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Product Approval</div>
            </Link>}
            {admin && <Link to='/dashboard/seller-list'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Seller List</div>
            </Link>}
            {/* <Link to='/dashboard/track-order'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Track Your Order</div>
          </Link> */}
            <Link to='/dashboard/address'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                My Address</div>
            </Link>
            {admin && <Link to='/dashboard/makeAdmin'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Make Admin</div>
            </Link>}
            <Link onClick={logOut} to='/'>
              <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                Sing Out</div>
            </Link>
          </div>

        </div>
        <div className="dashboard-nav dashboard-outlet w-75 my-2 mx-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

