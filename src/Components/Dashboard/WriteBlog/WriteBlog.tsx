import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./WriteBlog.css";
import { Editor } from '@tinymce/tinymce-react';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';

const WriteBlog = () => {
    interface IBlog {
        _id?: string,
        title: string,
        description: string,
        image: string,
        authorName: string | null | undefined,
        postTime: string,
        isApproved: boolean
    }
    // Current Date
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var myTodayDate = date;

    const { user } = useAuth();
    const [blog, setBlog] = useState<IBlog>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleOnBlurTitle = (e: React.FocusEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    // const handleOnBlurDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setDescription(e.currentTarget.value);
    // }
    const handleOnBlurImage = (e: React.FocusEvent<HTMLInputElement>) => {
        setImage(e.currentTarget.value);
    }

    const blogList: IBlog = {
        title: title,
        description: description,
        image: image,
        authorName: user?.displayName,
        postTime: myTodayDate,
        isApproved: false
    }

    const handleBlogSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        fetch('https://blooming-chamber-05072.herokuapp.com/blog/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogList)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setTitle("");
                    setImage("");
                    setDescription("");
                    swal("New Product", "New Blog Added Successfully", "success");
                }
                else {
                    swal("Oppss !!!", "Something Went Wrong", "error");
                }
            })
        e.preventDefault();
    }


    return (
        <>
            <div>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>Add New Blog</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Title" onBlur={handleOnBlurTitle} />
                    <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                    {/* <textarea className="form-control" placeholder="Description" id="floatingTextarea2" style={{ "height": "100px" }}></textarea> */}
                    <Editor
                        initialValue='Blog Description'
                        onEditorChange={(newText) => setDescription(newText)}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Image URL" onBlur={handleOnBlurImage} />
                    <label htmlFor="floatingInput">Image URL</label>
                </div>
                <Link to=''>
                    <span onClick={handleBlogSubmit} className='text-center px-4 d-inline-block py-3 my-2 rounded primaryBgColor text-white fw-bold'>
                        Add Product</span>
                </Link>
            </div>
        </>
    );
};

export default WriteBlog;