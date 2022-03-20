import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./SingleBlog.css";

const SingleBlog: React.FC = () => {
    const { blogID } = useParams();
    const [singleBlog, setSingleBlog] = useState<IBlog[]>([]);

    interface IBlog {
        _id?: string,
        title: string,
        description: string,
        image: string,
        authorName: string | null | undefined,
        postTime: string
    }

    useEffect(() => {
        fetch(`http://localhost:5000/singleBlog/${blogID}`)
            .then(res => res.json())
            .then(data => setSingleBlog(data))
    }, [])

    console.log(singleBlog);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="product-image d-flex justify-content-center">
                        <img className='w-75 img-fluid border' src={singleBlog[0]?.image} alt="" />
                    </div>
                    <div>
                        <p className="card-text">By <span className='fw-bold'>{singleBlog[0]?.authorName}</span> On <span className='fw-bold'>{singleBlog[0]?.postTime}</span></p>
                    </div>
                    <div>
                        <h1>{singleBlog[0]?.title}</h1>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: singleBlog[0]?.description }}></div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;