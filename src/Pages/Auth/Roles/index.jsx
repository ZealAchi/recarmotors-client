import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row } from 'reactstrap'

export function Roles() {
    const [select, setSelect] = useState()
    const [rol,setRol]=useState()
    return (
        <>
            <h2>Roles</h2>
            <Row>

                <Col sm={12} lg={4}>

                    <Card>
                        <CardBody className="text-center">
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" name="searchText" placeholder="Buscar Rol..." />
                                    <span className="input-group-btn">
                                        <Button type="submit" className="btn btn-primary">Buscar</Button>
                                    </span>
                                </div>
                            </div>

                            <div style={{ maxHeight: '183px', overflow: 'auto' }}>
                                <ListGroup>
                                    {roles.map((item, i) => {
                                        return (<ListGroupItem key={i} tag="button" active={select === item.id} action onClick={() =>{ setSelect(item.id);setRol(item.nombre)}}>
                                            {item.nombre}
                                        </ListGroupItem>)
                                    })}
                                </ListGroup>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                {select&&
                <Col sm={12} lg={8}>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col sm={12} lg={12}>
                                        <FormGroup>
                                            <Label htmlFor="Role">Rol</Label>
                                            <Input type="text" name="rol" id="Role" value={rol} onChange={(e)=>{setRol(e.target.value)}} placeholder="Escribe el nombre del rol" />
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
                }
            </Row></>
    )
}
const roles = [
    {
        id: 1,
        nombre: 'Administrador'
    },
    {
        id: 2,
        nombre: 'Gerente'
    },
    {
        id: 3,
        nombre: 'Tecnico mecanico'
    },
    {
        id: 4,
        nombre: 'Previas'
    },
]