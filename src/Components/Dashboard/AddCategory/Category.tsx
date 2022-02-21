import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categoryInput, setCategoryInput] = useState<React.SetStateAction<string>>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCategoryInput(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }




    const submit = () => {
        const category: React.SetStateAction<string> = categoryInput;
        
        fetch(`http://localhost:5000/category/${category}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
        })
    }




    return (
        <div>
            <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Add New Category</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" onChange={onChange} placeholder="Category Name" />
                <label htmlFor="floatingInput">Category Name</label>
            </div>
            <Link onClick={submit} to='/dashboard/category-list'>
                <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                    Add Category</div>
            </Link>
        </div>
    );
};

export default Category;



