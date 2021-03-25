import React from 'react';
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
// import 'antd/dist/antd.css';
// import { Steps, Button, message } from 'antd';
import Datetime from "react-datetime";
import Swal from 'sweetalert2'
import "react-datetime/css/react-datetime.css";
import { useHistory } from 'react-router-dom';

// const { Step } = Steps;

export function Compras() {
    let history = useHistory();
    const GuardarCompra = () => {
        Swal.fire({
            icon: 'success',
            title: 'Vehiculo Guardado',
            text: '¿Deseas asignarle sus Caracteristicas?',
            showDenyButton: true,
            showCancelButton: false,
        }).then((result) => {
            if (result.isConfirmed) {

                history.push("/vehiculos/show/12");
            } else if (result.isDenied) {

            }
        })
    }
    return (

        <Card>
            <CardBody className="border-bottom">
                <CardTitle className="mb-0"><i className="mdi mdi-border-right mr-2"></i>Registrar Vehiculo Comprado</CardTitle>
            </CardBody>
            <CardBody>
                <Row>
                    <Col sm={1} lg={1}>
                    </Col>
                    <Col sm={9} lg={9}>
                        <Form>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label htmlFor="Role">Fecha de Compra</Label>
                                        <Datetime
                                            locale="en-gb"
                                            timeFormat={false}
                                            inputProps={{ placeholder: "Fecha de compra" }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label htmlFor="Role">Proovedor</Label>
                                        <Input type="text" placeholder="Proovedor" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Lote</Label>
                                        <Input type="text" placeholder="Lote" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Comprador</Label>
                                        <Input type="text" placeholder="Comprador" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >No. de Serie</Label>
                                        <Input type="text" placeholder="NO. de Serie" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Marca</Label>
                                        <Input type="text" placeholder="Marca" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Version</Label>
                                        <Input type="text" placeholder="Version" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Modelo</Label>
                                        <Input type="text" placeholder="Modelo" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Color</Label>
                                        <Input type="text" placeholder="Color" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >KM Compra</Label>
                                        <Input type="text" placeholder="KM Compra" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Precio de Compra</Label>
                                        <Input type="text" placeholder="Precio de Compra" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Comision de Compra</Label>
                                        <Input type="text" placeholder="Comision de Compra" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Ubicacion de Compra</Label>
                                        <Input type="text" placeholder="Ubicacion de Compra" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button className="btn btn-success" onClick={() => GuardarCompra()}>Guardar</Button>
                        </Form>
                    </Col>
                    <Col sm={1} lg={1}>

                    </Col>
                </Row>
            </CardBody>
        </Card>

    )
}