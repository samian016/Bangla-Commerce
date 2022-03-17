import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./SupportCenter.css"

export interface SData {
    _id: number;
    name: string;
    images: string;
    details: string;
}




const SupportCenter = () => {

    let [SupportData, setSupportData] = useState<SData[]>([])

    useEffect(() => {
        fetch(`/SupportData.json`)
            .then(res => res.json())
            .then(data => {
                setSupportData(data)
                console.log(data);

            })
    }, [])


    return (

        <div className=''>

            <h1 className='text-center fw-bold text-white m-1 bg-success p-1 rounded'>Welcome To Our <span className='text-danger'>Support</span> Section</h1>

            <div className="container">
                <div className="row g-2">
                    <div className="col-6">
                        <div className="p-3 border bg-light">

                            <Row xs={1} md={2} className="g-4">
                                {

                                    SupportData.map((sData) =>

                                        <Col>
                                            <Card className='my-1'>
                                                <Card.Img variant="top" className='img-fluid'   src={sData.images} />
                                                <Card.Body>
                                                    <Card.Title className='fw-bold text-center text-warning bg-light rounded'>{sData.name}</Card.Title>
                                                    <Card.Text className=''>
                                                       <span >
                                                       {sData.details}
                                                       </span> 
                                                    </Card.Text>

                                                        <a className='my-1 text-center' href="http://nurnafishahmednobel@gmail.com">
                                                        <button type="button" className="btn btn-info">Email</button>
                                                        </a>
                                                    
                                                    
                                                </Card.Body>
                                            </Card>
                                        </Col>



                                    )

                                }
                            </Row>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <h1>second part</h1>
                        </div>
                    </div>

                </div>
            </div>








        </div>
    );
};

export default SupportCenter;