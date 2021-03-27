import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button, CardBody, Card } from 'reactstrap'

import Select, { components } from "react-select";
import { colourOptions, transladistas } from './Data';
import { useHistory } from 'react-router-dom';
export function Translados() {
    const history=useHistory()
    const asignar=()=>{
        history.push("/translados/asignar")
    }
    return (<>
        <Row>
            <Col sm={12} lg={12}>
                <Card>
                    <CardBody>
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
                                <Col sm={12} lg={8}>
                                    <FormGroup>
                                        <Label >Transladista</Label>
                                        <Select
                                            options={transladistas}
                                            components={{ MenuList }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} lg={4} style={{alignSelf: 'center'}}>
                                        <Button  className="btn btn-lg" onClick={()=>asignar()}>Asignar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </>)
}


const menuHeaderStyle = {
    padding: "8px 12px",
    background: colourOptions[2].color,
    color: "white",
};

const MenuList = (props) => {
    return (
        <components.MenuList {...props}>
            <div style={menuHeaderStyle}>Buscar transladista</div>
            {props.children}
        </components.MenuList>
    );
};
