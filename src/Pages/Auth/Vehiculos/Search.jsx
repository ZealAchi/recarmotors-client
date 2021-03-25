import React, { useState } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Form, Label, Input, Button } from "reactstrap";
export function SearchVehicle() {
    const [tipoBusqueda, setTipoBusqueda] = useState(false)
    return (
        <Card>
        <CardBody>
            {!tipoBusqueda && <>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" name="searchText" placeholder="Buscar..." />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </span>
                    </div>
                </div>
                <div>
                    <Button onClick={() => setTipoBusqueda(true)}>Busca avanzada</Button>
                </div></>
            }
            {tipoBusqueda &&
                <Form>
                    <Row>

                        <Col sm={6} lg={3}>
                            <FormGroup>
                                <Label >No de Serie</Label>
                                <Input type="text" placeholder="No de Serie..." />
                            </FormGroup>
                        </Col>
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
                        <Col sm={12} lg={9}>
                            <FormGroup>
                                <Label >Ubicacion de compra</Label>
                                <Input type="text" placeholder="Ubicacion de compra..." />
                            </FormGroup>
                        </Col>
                    </Row>
                    <div style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </span>
                        <Button onClick={() => setTipoBusqueda(false)}>Busqueda normal</Button>
                    </div>
                </Form>}
        </CardBody>
        </Card>
    )
}