import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import "./BlogList.css";

const BlogList = () => {
    interface IBlog {
        _id?: string,
        title: string,
        description: string,
        image: string,
        authorName: string | null | undefined,
        postTime: string,
        isApproved: boolean
    }
    // Show Data In Table
    const [myBlogs, setMyBlogs] = useState<IBlog[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs/dashboard')
            .then(res => res.json())
            .then(data => setMyBlogs(data))
    }, []);

    // Delete Single Blog
    const handleDeleteProduct = (id: string | undefined | null) => {
        const forward = window.confirm("Are you sure? It will be deleted permanently !!!");
        if (forward) {
            fetch(`http://localhost:5000/blogs/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Deleted Successfully");
                        const restOfProducts = myBlogs.filter(singleBlog => singleBlog._id !== id);
                        setMyBlogs(restOfProducts);
                    }
                    else {
                        swal("Something wrong")
                    }
                })
        }
    }

    // Blog Confirm
    const handleBlogConfirm = (id: string | undefined) => {
        const myId = { id }

        fetch(`http://localhost:5000/blogs/dashboard/approve/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    swal("Blog Confirmed");
                    fetch('http://localhost:5000/blogs/dashboard')
                        .then(res => res.json())
                        .then(data => setMyBlogs(data))
                } else {
                    swal("something went wrong");
                }
            })
        //e.preventDefault();
    }

    return (
        <>
            {/* Posted Blog List */}
            <div className='mt-4'>
                <h1 className='primaryFont fw-bolder primaryFontColor mb-3'>All Blog Post</h1>
                <div className="row">
                    <div>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Posted Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myBlogs.map(blog => <tr key={blog._id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.authorName}</td>
                                        <td>{blog.postTime}</td>
                                        <td className='d-flex justify-content-center align-items-center'>
                                            <button onClick={() => handleDeleteProduct(blog?._id)} className='btn btn-danger btn-sm me-2'>Delete</button>
                                            {blog.isApproved === false
                                                ?
                                                <>
                                                    <button onClick={() => handleBlogConfirm(blog?._id)} className='btn btn-success btn-sm'>Approve</button>
                                                </>
                                                :
                                                <>

                                                </>
                                            }
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogList;