import React, { useState } from 'react'

import { Col, Form, FormGroup, Label, Row, Input, CardBody, Card, Button } from 'reactstrap'
import { SerchMecanica } from './Search'
import { listaComentarios } from '../Translados/asignar'
import Switch from "react-bootstrap-switch";
import "react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css";

export function Mecanica() {
    console.log(listaComentarios, 'listaComentarios')
    const [comentarios, setComentarios] = useState(listaComentarios)
    const [data, setData] = useState(false)

    const [form2, setForm2] = useState(false)
    return (<>
        <Row>
            <SerchMecanica setSearch={setData} />
            {data && (<>
                <Card>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col sm={6} lg={3}>
                                    <FormGroup>
                                        <Label >Marca</Label>
                                        <Input type="text" placeholder="Marca..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={6} lg={3}>
                                    <FormGroup>
                                        <Label >Version</Label>
                                        <Input type="text" placeholder="Version..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={6} lg={3}>
                                    <FormGroup>
                                        <Label >Modelo</Label>
                                        <Input type="text" placeholder="Modelo..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={6} lg={3}>
                                    <FormGroup>
                                        <Label >Color</Label>
                                        <Input type="text" placeholder="Color..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Ubicacion de compra</Label>
                                        <Input type="text" placeholder="Ubicacion de compra..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Transladista</Label>
                                        <Input type="text" placeholder="Transladista..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Row>
                            {!form2 && <>
                                {comentarios && comentarios.map((item, i) => {
                                    return (
                                        <Col sm={6} lg={3}>
                                            <FormGroup key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                                                <Label >{item.nombre}</Label>
                                                <Switch onText="si" offText="no" defaultValue={item.value} onChange={() => {
                                                    for (let e = 0; e < comentarios.length; e++) {
                                                        if (e === i) {
                                                            comentarios[i].value = !item.value;
                                                            setComentarios(comentarios);
                                                            break;
                                                        }
                                                    }

                                                }} />
                                            </FormGroup>
                                        </Col>
                                    )
                                })
                                }</>}
                            {form2 && (<>
                                s
                            </>)}
                            <Col lg={12} md={12} sm={12}>
                                <Button onClick={() => {
                                    setForm2(form2 ? false : true)
                                }} >{form2 ? 'Regresar' : 'Siguiente'}</Button>
                            </Col>
                        </Row>

                    </CardBody>
                </Card>
            </>)}
        </Row>
    </>)
}