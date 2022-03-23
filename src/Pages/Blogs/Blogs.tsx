import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Blogs.css";

const Blogs: React.FC = () => {
  interface IBlog {
    _id: string,
    title: string,
    description: string,
    image: string,
    authorName: string | null | undefined,
    postTime: string
  }
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);
  console.log(blogs);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {
            blogs.map(blog => <div key={blog._id} className="col-sm-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <img className='img-fluid' src={blog.image} alt="" />
                  <h5 className="card-title mt-3"><span>{blog.title}</span></h5>
                  <p className="card-text">By <span className='fw-bold'>{blog.authorName}</span> On <span className='fw-bold'>{blog.postTime}</span></p>
                  <Link to={`/SingleBlog/${blog._id}`} className="myBtn">Read More</Link>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default Blogs