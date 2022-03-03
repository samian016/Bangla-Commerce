import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {

    const [admin, setAdmin] = useState<React.SetStateAction<string>>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setAdmin(e.currentTarget.value);
        // console.log(e.currentTarget.value);
    }
    const handelSubmit = (e: React.FormEvent) => {
        const user = { admin };
        fetch("http://localhost:5000/make/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    alert("admin created");
                } else {
                    alert("admin not created");
                }
            });
        e.preventDefault();
    };
    return (
        <form onSubmit={handelSubmit}>
            <div className='d-flex justify-content-between'>
                <div className='w-75'>
                    <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Make New Admin</h1>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={onChange} className="form-control" id="floatingInput" placeholder="Admin Email" />
                        <label htmlFor="floatingInput">Admin Email</label>
                    </div>
                    <Button className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColorBtn text-white fw-bold' type='submit'>

                        Make Admin
                    </Button>
                </div>
            </div>
        </form>
    );
};
export default MakeAdmin;