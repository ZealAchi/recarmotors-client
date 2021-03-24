import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, CardImg, CardSubtitle, Badge } from 'reactstrap';
import { CardUser } from '../../../Components/Card/Usuario';
import { useHistory } from "react-router-dom";

export function Usuarios() {
    let history = useHistory();

    function CrearUsuario() {
        history.push("/usuarios/nuevoUsuario");
    }
    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <CardBody>
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" name="searchText" placeholder="Buscar..." />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary">Buscar</button>
                                </span>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={() => CrearUsuario()}>Crear Nuevo Usuario</button>
                    </CardBody>
                </Card>
                <Row>
                    {UsuariosData.map((item, i) => {
                        return (
                            <CardUser {...item} key={i} />
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

const UsuariosData = [
    {
        id:1,
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        id:2,
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        id:3,
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
    {
        nombre: "Jose Antonio Padre Garcia",
        rol: "Administrador",
        img: "https://avatars.githubusercontent.com/u/35477074?s=400&u=ba4ea7a6ccac95dffdfc12f5e7abd3d7ddac4329&v=4"
    },
]