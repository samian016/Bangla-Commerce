import React from 'react';
import { Link } from 'react-router-dom';

const EditCategory = () => {
    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Edit Category Name</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Category Name" />
                <label htmlFor="floatingInput">Edit Category Name</label>
            </div>
            <Link to='/dashboard/category-list'>
                <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                    Update Category</div>
            </Link>
        </div>
    );
};

export default EditCategory;



