import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
type category = {
    _id: string,
    categoryName: string,
}
type categoryType = {
    categoryName: string,
    img: string,
}
const Category = () => {



    const [categories, setCategories] = useState<category[]>([]);
    const [categoryInput, setCategoryInput] = useState('');
    const [categoryInputUtl, setCategoryInputUrl] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCategoryInput(e.currentTarget.value);
        // console.log(e.currentTarget.value);
    }
    const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCategoryInputUrl(e.currentTarget.value);
        // console.log(e.currentTarget.value);
    }


    useEffect(() => {
        console.log(categories);
        fetch("https://blooming-chamber-05072.herokuapp.com/categories")
            .then((result: Response): Promise<category[]> => result.json())
            .then((data: category[]): void => {
                setCategories(data);
            })
    })

    // console.log(categories);

    const submit = () => {
        const category: React.SetStateAction<string> = categoryInput;
        const categorydata: categoryType = {
            categoryName: categoryInput.toLocaleLowerCase(),
            img: categoryInputUtl,
        }

        fetch(`https://blooming-chamber-05072.herokuapp.com/category/${category}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(categorydata)
        })
    }




    return (
        <div className='d-flex justify-content-between'>
            <div className='w-75'>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Add New Category</h1>
                <div className="form-floating mb-3">
                  
                        <input type="text" onChange={onChange} className="form-control" id="floatingInput" placeholder="Category Name" />

                        <label htmlFor="floatingInput">Category Name</label>
                   
                   
                    <div className="form-floating my-3">
                        <input type="text" onChange={onChange2} className="form-control" id="Input1" placeholder="Category img url" />

                        <label htmlFor="Input1">Category img url</label>
                    </div>

                </div>

                <Link onClick={submit} to='/dashboard/category-list'>
                    <div className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                        Add Category</div>
                </Link>
            </div>
            <div className="accordion w-25 mx-4 mt-5 pt-3" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            All Category
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        {
                            categories.map((Category: category): React.ReactFragment => <div key={Category._id} className="accordion-body">{Category.categoryName}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;