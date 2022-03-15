import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    type category = {
        _id: string,
        categoryName: string,
        img?:string
    }
    const [categories, setCategories] = useState<category[]>([]);
    useEffect(() => {
        console.log(categories);
        fetch("https://blooming-chamber-05072.herokuapp.com/categories")
            .then((result: Response): Promise<category[]> => result.json())
            .then((data: category[]): void => {
                setCategories(data);
            })
    }, [])



    const delCate = (id: string) => {
        const confirmation = window.confirm(`are you sure want to delete:${id}?`);
        if (confirmation) {
            const url = `https://blooming-chamber-05072.herokuapp.com/delete/category/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Category Deleted");
                        const remainingCate = categories.filter(
                            (category) => category._id !== id
                        );
                        setCategories(remainingCate);
                    }
                });
        } else {
            return;
        }

    }


    return (
        <div>
            <div>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Category List</h1>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category) => {
                                return (

                                    < tr key={category._id} >
                                        <th scope="row">{category._id}</th>
                                        <td>{category.categoryName}</td>
                                        <td><img style={{ width: "90px", height: 'auto' }}  src={category.img} alt="nothing" /></td>

                                        <td>
                                            <div className="btn-group">
                                                <button type="button" onClick={() => { delCate(category._id)}} className="btn btn-danger">Delete</button>
                                            </div>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryList;
