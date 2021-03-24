import React from 'react'
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Jumbotron, Label, Row } from 'reactstrap'
import UserProfile from '../../../Components/user-profile/UserProfile'

export function DetalleUsuario() {
    return (
        <Row>
            <Col sm={12} lg={4}>
                <UserProfile />
            </Col>
            <Col sm={12} lg={8}>
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>
                        Luis Padre
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label htmlFor="Usuario">Usuario</Label>
                                        <Input type="text" name="nombre" id="Usuario" placeholder="Escribe un nombre de usuario..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label htmlFor="email">Dirección de correo electrónico</Label>
                                        <Input type="email" name="email" id="email" placeholder="Escriba una dirección de correo electrónico..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label htmlFor="Nombrev">Nombre</Label>
                                        <Input type="text" name="nombrev" id="Nombre" placeholder="Escribe un nombre..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label htmlFor="Apellido">Apellido</Label>
                                        <Input type="text" name="apellido" id="Apellido" placeholder="Escribe un apellido..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                    <Label htmlFor="phone">Numero Telefonico</Label>
                                        <Input type="text" name="phone" id="phone" placeholder="Escribe un numero de telefono..." />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <FormGroup>
                                        <Label htmlFor="rol">Rol</Label>
                                        <Input type="select" id="rol">
                                            <option>Eliga un rol</option>
                                            <option>Administrador</option>
                                            <option>Gerente</option>
                                            <option>Previas</option>
                                        </Input>
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Button color="primary" onClick={() => { alert(":)") }}>Guardar</Button>
                            {' '}
                            <Button color="danger" onClick={() => { alert(":)") }}>Eliminar</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}