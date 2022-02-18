import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { BsTextParagraph } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth"
const Dashboard = () => {
  const {
    logOut
  } = useAuth();
  return (
    <div className='container my-5 py-5'>

      <div className="d-flex">
        <div className="w-25">
          <Link to='/dashboard'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Dashboard</div>
          </Link>
          <Link to='/dashboard/order'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Order Status</div>
          </Link>

          <Link to='/dashboard/add-product'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Add Products</div>
          </Link>
          <Link to='/dashboard/product-list'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Product List</div>
          </Link>
          <Link to='/dashboard/add-category'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Add Category</div>
          </Link>
          <Link to='/dashboard/category-list'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Category List</div>
          </Link>
          <Link to='/dashboard/product-approval'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Product Approval</div>
          </Link>
          <Link to='/dashboard/seller-list'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Seller List</div>
          </Link>
          {/* <Link to='/dashboard/track-order'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Track Your Order</div>
          </Link> */}
          <Link to='/dashboard/address'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              My Address</div>
          </Link>
          <Link to='/dashboard/account-details'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Account Details</div>
          </Link>
          <Link onClick={logOut} to='/'>
            <div className='dashboardNavItem text-center mx-4 d-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
              Sing Out</div>
          </Link>

        </div>
        <div className="w-75 my-2 mx-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard