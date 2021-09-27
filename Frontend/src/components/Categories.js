import React, {useState, useEffect} from 'react';
import { Container, Card, CardTitle, Button, CardImg,Row,Col,CardBody } from 'reactstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Categories.css";
import getCategories from '../API/getCategories';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories);
        })

    },[]);
    return (
        <div>
            <Container className=" cardContainer">
                <Row className="smCenter justify-content-md-space-between productRow mt-3">
                    <a className="headerCategories" id="Categories"><h1>Categories</h1></a>
                    {
                        categories.map((category,i)=>
                        {
                            console.log(category)
                            return(
                                    <Col key={i} xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                                    <div className="categoryCard">
                                        <Card className="d-flex" style={{color:"black", height:"100%"}}  inverse >
                                            <CardImg  src={category.image["url"]} style={{height
                                            :"100%"}}/>
                                                <CardBody className="cardBody">
                                                    <CardTitle>
                                                        <h1>{category.name}</h1>
                                                    </CardTitle>
                                                    <Link to={`/products/${category.name.toLowerCase()}`}><Button className="categoryButton">See more</Button></Link>
                                                </CardBody>
                                        </Card>
                                        </div>
                                    </Col>
                                
                            );
                        })

                    }

                    </Row>
                    </Container>
                    </div>
                    )
}

export default Categories

                   