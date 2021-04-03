import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap';
import { CardVehicle } from '../../../Components/Card/CardVehicle/CardVehicle1';
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
import Switch from "react-bootstrap-switch";
import "react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css";

export function AsignarTranslados() {
    return (<> <Row>
        <Col sm={12} lg={3}>
            <CardVehicle />
        </Col>
        <Col sm={12} lg={9}>
            <DatosParaTransladar />
        </Col>
    </Row>
    </>)

}
function DatosParaTransladar() {
    const [comentarios, setComentarios] = useState(listaComentarios)
    
    

    return (
        <>
            <Card>
                <CardBody>
                    <Form>
                        <Row>
                            <Col sm={12} lg={6}>
                                <FormGroup>
                                    <Label>Fecha de translado</Label>
                                    <Datetime
                                        locale="es-mx"
                                        timeFormat={false}
                                        initialValue={new Date()}
                                        inputProps={{ placeholder: "Fecha de translado" }}
                                    />
                                </FormGroup>
                            </Col>
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
                            })}
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}

export const listaComentarios = [
    {
        nombre: "Fallas en el estereo y/o sonido",
        value: false,
    },
    {
        nombre: "Llantas delanteras desgastadas",
        value: false,
    },
    {
        nombre: "Llantas traseras desgastadas",
        value: false,
    },
    {
        nombre: "Fascia delantera rayada y/o rota",
        value: false,
    },
    {
        nombre: "Fascia trasera rayada y/o rota",
        value: false,
    },
    {
        nombre: "Rejilla rota",
        value: false,
    },
    {
        nombre: "Parrilla rota",
        value: false,
    },
    {
        nombre: "Detalle en el clutch",
        value: false,
    },
    {
        nombre: "Require alineación",
        value: false,
    },
    {
        nombre: "Tiene rayones y detalles de hojalateria",
        value: false,
    },
    {
        nombre: "Vibraciones y ruidos anormales",
        value: false,
    },
    {
        nombre: "Revisar luces",
        value: false,
    },
    {
        nombre: "Falla en la bateria",
        value: false,
    },
    {
        nombre: "No sirven los seguros de la puerta",
        value: false,
    },

    {
        nombre: "Claxon no funciona",
        value: false,
    },
    {
        nombre: "Chapa de puerta/s no funcionan",
        value: false,
    },
    {
        nombre: "Amortiguadores desgastados",
        value: false,
    },
    {
        nombre: "Detalle de frenos",
        value: false,
    },
    {
        nombre: "Esta encendido el check engine",
        value: false,
    },
    {
        nombre: "Tapon/es de rin rotos o incompletos",
        value: false,
    },
    {
        nombre: "Tapetes incompletos y/o maltratados",
        value: false,
    },

    {
        nombre: "Empaque/s de puerta roto",
        value: false,
    },
    {
        nombre: "Sin antenas",
        value: false,
    },
    {
        nombre: "Cristal/es estrellados",
        value: false,
    },

]