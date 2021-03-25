import React, { useState } from 'react'
import { Row, Col, Card, CardBody, FormGroup, Form, Label, Input, Button, CardFooter } from "reactstrap";
import { SearchVehicle } from './Search';
import "./index.module.css"
export function Vehiculos() {

    return (
        <>
            <h2>Vehiculos</h2>
            <Row>
                <Col sm={12} lg={12}>
                    <SearchVehicle />
                </Col>
                <Col sm={12} lg={3}>
                    <Card className="cardVehicle">
                        <img src="https://images.kavak.services/images/38943/jeep-patriot-sport2014-frontal-lateral-piloto-cercana-1614961739215.jpg?d=540x310"></img>
                        {/* <CardBody>
                            
                        </CardBody> */}
                        <CardFooter>
                        <h5>No. Serie: a213454</h5>
                        <h5>Marca: 3fgv3</h5>
                        <h5>Version: 2012</h5>
                        <h5>Color: rojo</h5>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </>
    )
}