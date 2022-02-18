import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Add New Category</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Category Name" />
                <label htmlFor="floatingInput">Category Name</label>
            </div>
            <Link to='/dashboard/category-list'>
                <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                    Add Category</div>
            </Link>
        </div>
    );
};

export default Category;



