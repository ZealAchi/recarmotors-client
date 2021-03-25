import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const { Step } = Steps;

const steps = [
    {
        title: 'Check 1',
        content: <Row>
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
        </Row>,
    },
    {
        title: 'Check 2',
        content: 'Second-content',
    },
    {
        title: 'Upload',
        content: 'Last-content',
    },
];

export function Compras() {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (

        <Card>
            <CardBody className="border-bottom">
                <CardTitle className="mb-0"><i className="mdi mdi-border-right mr-2"></i>Registrar Vehiculo Comprado</CardTitle>
            </CardBody>
            <CardBody>
                <Row>
                    <Col sm={1} lg={1}>
                    {/* <div style={{ width: 120 }}>
                            <span data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-pink"><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-car fa-w-16 fa-5x"><g class="fa-group"><path fill="currentColor" d="M319.5 128a48 48 0 0 1 44.57 30.17L384 208H128l19.93-49.83A48 48 0 0 1 192.5 128zM80 384a63.82 63.82 0 0 1-47.57-21.2A31.82 31.82 0 0 0 32 368v48a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32v-32zm352 0h-48v32a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32v-48a31.82 31.82 0 0 0-.43-5.2A63.82 63.82 0 0 1 432 384z" class="fa-secondary"></path><path fill="currentColor" d="M500 176h-59.88l-16.64-41.6A111.43 111.43 0 0 0 319.5 64h-127a111.47 111.47 0 0 0-104 70.4L71.87 176H12A12 12 0 0 0 .37 190.91l6 24A12 12 0 0 0 18 224h20.08A63.55 63.55 0 0 0 16 272v48a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-48a63.58 63.58 0 0 0-22.07-48H494a12 12 0 0 0 11.64-9.09l6-24A12 12 0 0 0 500 176zm-352.07-17.83A48 48 0 0 1 192.5 128h127a48 48 0 0 1 44.57 30.17L384 208H128zM96 256c19.2 0 48 28.71 48 47.85s-28.8 15.95-48 15.95-32-12.8-32-31.9S76.8 256 96 256zm272 47.85c0-19.14 28.8-47.85 48-47.85s32 12.76 32 31.9-12.8 31.9-32 31.9-48 3.2-48-15.95z" class="fa-primary"></path></g></svg></span>
                        </div>
                        <div style={{ width: 120 }}>
                        <span data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-cyan"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car-tilt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-car-tilt fa-w-20 fa-5x"><path fill="currentColor" d="M624 448H317.12l-42.1-42.1 192.33-192.33 22.63 22.63c12.5 12.5 32.76 12.5 45.25 0l22.63-22.63c12.5-12.5 12.5-32.76 0-45.26l-38.24-38.23c-1-14.91-6.93-29.56-18.33-40.96l-33.94-33.94c-19.33-19.33-47.88-23.53-71.42-12.96L368.11 30.3 318.78 9.15C276.45-9 228.04.32 195.47 32.9l-89.8 89.81c-32.57 32.57-41.89 80.97-23.75 123.31l21.14 49.33 11.92 27.82c-10.57 23.54-6.37 52.09 12.96 71.42L181.36 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM399.47 100.43c13.58-13.58 31.65-13.61 45.18-.07 13.54 13.54 13.51 31.61-.07 45.19s-31.69 36.2-45.22 22.66c-13.53-13.54-13.47-54.21.11-67.78zM140.74 220.81a48.003 48.003 0 0 1 10.18-52.85l89.8-89.8a48.003 48.003 0 0 1 52.85-10.18l49.33 21.14-181.02 181.01-21.14-49.32zm77.57 151c-13.58 13.58-31.65 13.61-45.19.07-13.53-13.53-13.51-31.61.07-45.18 13.58-13.58 54.24-13.64 67.78-.11 13.54 13.54-9.09 31.65-22.66 45.22z" class=""></path></svg></span>
                        </div>
                        <div style={{ width: 120 }}>
                        <span data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-cyan"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-car fa-w-16 fa-5x"><path fill="currentColor" d="M499.99 192.01h-52.21l-31.36-77.88C404.24 83.84 374.86 64 342.22 64H169.78c-32.64 0-62.02 19.84-74.21 50.12L64.21 192h-52.2C4.2 192-1.53 199.34.37 206.91l6 24A12.01 12.01 0 0 0 18.01 240h11.31C21.04 254.16 16 270.41 16 287.99V424c0 13.25 10.75 24 24 24h16c13.25 0 24-10.75 24-24v-24h352v24c0 13.25 10.75 24 24 24h16c13.25 0 24-10.75 24-24V288c0-17.59-5.04-33.84-13.31-47.99H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.58-3.84-14.91-11.65-14.91zM140.1 132.05C145 119.87 156.65 112 169.78 112h172.44c13.13 0 24.78 7.87 29.68 20.05l24.13 59.94H115.97l24.13-59.94zM448 336c0 8.82-7.18 16-16 16H80c-8.82 0-16-7.18-16-16v-48c0-26.47 21.53-48 48-48h288c26.47 0 48 21.53 48 48v48zm-320-72.01c-19.2 0-32 12.76-32 31.91s12.8 31.91 32 31.91 48 3.19 48-15.96c0-19.14-28.8-47.86-48-47.86zm256 0c-19.2 0-48 28.72-48 47.86 0 19.15 28.8 15.96 48 15.96s32-12.76 32-31.91c0-19.14-12.8-31.91-32-31.91z" class=""></path></svg></span>
                        </div>
                        <div style={{ width: 120 }}>
                        <span data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-grape"><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="car-side" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-car-side fa-w-20 fa-5x"><g class="fa-group"><path fill="currentColor" d="M144 320a80 80 0 1 0 80 80 80 80 0 0 0-80-80zm352 0a80 80 0 1 0 80 80 80 80 0 0 0-80-80zM369.24 96H280v96h166zm-252.31 96H232V96h-76.67z" class="fa-secondary"></path><path fill="currentColor" d="M16 384h17.14a112 112 0 0 1 221.72 0h130.28a112 112 0 0 1 221.72 0H624a16 16 0 0 0 16-16v-80a96 96 0 0 0-96-96h-16L419.22 56a64 64 0 0 0-50-24H155.33a64 64 0 0 0-59.42 40.23L48 194.26A63.85 63.85 0 0 0 0 256v112a16 16 0 0 0 16 16zM280 96h89.24L446 192H280zm-124.67 0H232v96H116.93z" class="fa-primary"></path></g></svg></span>
                        </div> */}
                    </Col>
                    <Col sm={9} lg={9}>
                        <>
                            <Steps current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Vehiculo Registrado!')}>
                                        Guardar
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </>
                    </Col>
                    <Col sm={1} lg={1}>

                    </Col>
                </Row>
            </CardBody>
        </Card>

    )
}