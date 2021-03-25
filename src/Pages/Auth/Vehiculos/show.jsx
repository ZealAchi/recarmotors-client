import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
export function ShowVehicle() {
    return (<>
        <Row>
            <Col sm={12} lg={3}>
                <CardVehicle />
            </Col>
            <Col sm={12} lg={9}>
                <InfoVehicle />
            </Col>
        </Row>
    </>)
}
const CardVehicle = () => {
    return (<Card>
        <CardBody className="text-center">
            <div className="profile-pic mb-3 mt-3">
                <img src={'https://gravatar.com/avatar/?s12&d=retro'} width="150" alt="vehicle" />
                <h4 className="mt-3 mb-0">Marca</h4>
                <a href="/">Modelo</a>
                <h5 className="mt-3 mb-0">No. Serie</h5>
            </div>
            {/* <div className="badge badge-pill badge-light font-16">Administrador</div> */}
        </CardBody>
    </Card>)
}
const InfoVehicle = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <Card>
            <CardBody className="text-left">
                <Form>
                    {!showMore && (
                        <>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Marca</Label>
                                        <Input type="text" placeholder="Marca..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Proveedor</Label>
                                        <Input type="text" placeholder="Proveedor..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Lote</Label>
                                        <Input type="text" placeholder="Lote..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Comprador</Label>
                                        <Input type="text" placeholder="Comprador..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >No de Serie</Label>
                                        <Input type="text" placeholder="No de Serie..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Marca</Label>
                                        <Input type="text" placeholder="Marca..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Versión</Label>
                                        <Input type="text" placeholder="Versión..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Modelo</Label>
                                        <Input type="text" placeholder="Modelo..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Color</Label>
                                        <Input type="text" placeholder="Color..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >MK Compra</Label>
                                        <Input type="text" placeholder="MK Compra..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Precio de Compra</Label>
                                        <Input type="text" placeholder="Precio de Compra..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Comisión de Compra</Label>
                                        <Input type="text" placeholder="Comisión de Compra..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Ubicación de Compra</Label>
                                        <Input type="text" placeholder="Ubicación de Compra..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                                <Button onClick={() => setShowMore(true)}>Ver Mas Datos</Button>
                            </div>
                        </>)}
                    {showMore && (
                        <>
                            <Row>
                            <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Marca</Label>
                                        <Input type="text" placeholder="Marca..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Transmision</Label>
                                        <Input type="text" placeholder="Transmision..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Motor</Label>
                                        <Input type="text" placeholder="Motor..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Mk Exhibición</Label>
                                        <Input type="text" placeholder="Mk Exhibición..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Número de motor</Label>
                                        <Input type="text" placeholder="Número de motor..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Repuve</Label>
                                        <Input type="text" placeholder="Repuve..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Clave vehicular</Label>
                                        <Input type="text" placeholder="Clave vehicular..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Pedimento</Label>
                                        <Input type="text" placeholder="Pedimento..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Fecha de Pedimento</Label>
                                        <Input type="text" placeholder="Fecha de Pedimento..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Aduana</Label>
                                        <Input type="text" placeholder="Aduana..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >País de Origen</Label>
                                        <Input type="text" placeholder="País de Origen..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Color Interior</Label>
                                        <Input type="text" placeholder="Color Interior..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Cilindros</Label>
                                        <Input type="text" placeholder="Cilindros..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Puertas</Label>
                                        <Input type="text" placeholder="Puertas..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Capacidad</Label>
                                        <Input type="text" placeholder="Capacidad..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Tipo de Combustible</Label>
                                        <Input type="text" placeholder="Tipo de Combustible..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Chasis</Label>
                                        <Input type="text" placeholder="Chasis..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Estatus Auto</Label>
                                        <Input type="text" placeholder="Estatus Auto..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Precio Base</Label>
                                        <Input type="text" placeholder="Precio Base..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Precio de Garantia</Label>
                                        <Input type="text" placeholder="Precio de Garantia..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label >Precio de Inventario</Label>
                                        <Input type="text" placeholder="Precio de Inventario..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                                <Button onClick={() => setShowMore(false)}>Ver Datos Anteriores</Button>
                            </div>
                        </>
                    )}
                </Form>
            </CardBody>
        </Card>
    )
}