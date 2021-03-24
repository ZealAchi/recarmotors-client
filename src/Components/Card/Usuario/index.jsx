import React from 'react'
import { useHistory } from "react-router-dom";
import { Badge, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col } from 'reactstrap'
import "./index.module.css"
export function CardUser({ img, nombre, rol,id }) {
    let history = useHistory();
    const showUser=()=>{
        history.push(`/usuarios/show/${id}`);
    }
    
    return (
        <Col sm={3} lg={3}>
            <Card className="CardUser" onClick={()=>showUser()}>
                <CardImg top width="100%" src={'https://gravatar.com/avatar/?s12&d=retro'} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{nombre}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        <Badge color="info">
                            {rol}
                        </Badge>
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}