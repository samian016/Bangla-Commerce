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
                                            <Card>
                                                <Card.Img variant="top" src={sData.images} />
                                                <Card.Body>
                                                    <Card.Title>{sData.name}</Card.Title>
                                                    <Card.Text>
                                                        {sData.details}
                                                    </Card.Text>
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
                            
                        </div>
                    </div>

                </div>
            </div>








        </div>
    );
};

export default SupportCenter;