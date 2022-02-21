import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Welcome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor'>Hello {user?.displayName}</h1>
            <p className='secondaryFontColor secondaryFont'>From your account dashboard. you can easily check & view your <Link to='/dashboard/order'> recent orders, </Link> <br />
                manage your <Link to='/dashboard/address'>shipping and billing addresses</Link> and <Link to='/dashboard/account-details'> edit your password and account details. </Link></p>
        </div>
    );
};

export default Welcome;