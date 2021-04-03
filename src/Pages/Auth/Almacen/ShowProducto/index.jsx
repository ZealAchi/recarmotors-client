import React, { useState } from 'react'

import { useHistory } from "react-router-dom";
import { DatosAgregarProd } from '../AgregarProducto';
import { Button, Card, CardBody, CardTitle, Col, CustomInput, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
export function ShowProducto(props) {
    let history = useHistory();

    const [datos, setDatos] = useState(DatosAgregarProd)

    return (<Row>
        <Col md="3">
            <Card>
                <CardBody style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    justifyItems: "center",
                    alignContent: "center",

                }}>
                    {datos[14].value !== "" ? <img src={URL.createObjectURL(datos[14].value)} height="123" /> :
                        <span style={{ display: 'contents' }} data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-orange"><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-question fa-w-12 fa-5x"><g class="fa-group"><path fill="currentColor" d="M182.4,373.5c-38.3,0-69.3,31-69.3,69.3s31,69.3,69.3,69.3c38.3,0,69.3-31,69.3-69.3 C251.7,404.5,220.7,373.5,182.4,373.5z" class="fa-secondary"></path><path fill="currentColor" d="M367.9,153.6c0,116-125.3,117.8-125.3,160.6v5.8c0,13.3-10.7,24-24,24h-72.5c-13.3,0-24-10.7-24-24v-9.8 c0-61.8,46.9-86.5,82.3-106.4c30.4-17,49-28.6,49-51.2c0-29.8-38-49.6-68.8-49.6c-39.1,0-57.8,18.1-82.8,49.4 c-8.1,10.2-22.9,12-33.3,4.1l-43.1-32.7c-10.3-7.8-12.6-22.3-5.2-32.9C60.9,32.7,112.6,0,192.4,0C277.3,0,367.9,66.3,367.9,153.6z" class="fa-primary"></path></g></svg></span>
                    }
                </CardBody>
            </Card>
        </Col>
        <Col md="9">

            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>
                        Registrar Producto
                    </CardTitle>
                <CardBody>
                    <Form>
                        <Row>
                            {datos && datos.map((item, i) => {
                                return (
                                    <>
                                        {item.type === "input" && (
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>{item.label}</Label>
                                                    <Input type="text" value={item.value} onChange={(m) => {
                                                        for (let e = 0; e < datos.length; e++) {
                                                            if (e === i) {
                                                                datos[i].value = m.target.value;
                                                                setDatos([...datos]);
                                                                break;
                                                            }
                                                        }
                                                    }} placeholder={item.placeholder} />

                                                </FormGroup>
                                            </Col>)
                                        }
                                        {item.type === "upload" && (<Col md="6">
                                            <FormGroup className="mb-1">
                                                <Label>{item.label}</Label>
                                                <div className="custom-file">
                                                    <Input type="file" className="custom-file-input" id="customFile1" onChange={(m) => {
                                                        console.log(m.target.files)

                                                        for (let e = 0; e < datos.length; e++) {
                                                            if (e === i) {
                                                                datos[i].value = m.target.files[0];
                                                                setDatos([...datos]);
                                                                break;
                                                            }
                                                        }
                                                    }} />
                                                    <label className="custom-file-label" htmlFor="customFile1">{item.value === "" ? item.placeholder : item.value.name}</label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        )}
                                    </>
                                )
                            })}
                        </Row>
                        <Button color="danger">Cancelar</Button> {' '}
                        <Button color="primary">Actualizar</Button>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </Row>)
}
