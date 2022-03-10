import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {

    const [admin, setAdmin] = useState<React.SetStateAction<string>>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        setAdmin(e.currentTarget.value);
        // console.log(e.currentTarget.value);
    }
    const handelSubmit = (e: React.FormEvent) => {
        console.log("ki li ik");
        const user = { admin };
        fetch("https://blooming-chamber-05072.herokuapp.com/make/admin", {
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
            <div data-testid="thisIsDiv " className='d-flex justify-content-between'>
                <div className='w-75'>
                    <div>

                        <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Make New Admin</h1>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="admin-Email" type="text" onChange={onChange} className="form-control" id="floatingInput" placeholder="Admin Email" />
                        <label htmlFor="floatingInput">Admin Email</label>
                    </div>
                    <Button value='' className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColorBtn text-white fw-bold' type='submit'>

                        Make Admin
                    </Button>
                </div>
            </div>
        </form>
    );
};
export default MakeAdmin;


/*  */