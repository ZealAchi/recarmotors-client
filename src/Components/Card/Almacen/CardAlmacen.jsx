import React from 'react'
import { Badge, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col } from 'reactstrap'
import './index.module.css'

import { useHistory } from "react-router-dom";
export function CardAlmacen() {
    let history = useHistory();

    function VerProducto() {
        history.push("/almacen/12");
    }
    return (
        <Col sm={3} lg={3}>
            <Card className="CardAlmacen" onClick={()=>VerProducto()}>
                <CardImg style={{ margin: 'auto' }} top width="100%" height="200px" src={'https://www.valvoline.com/es-latinamerica/-/media/LatinAmericaRegion/Images/products/LA-DIG-0370-ES_1QT_FullSynAdv_5QT_500x500.ashx?h=500&la=en&w=500&hash=1FB237F549621629D818F4769DF95E72B7574D05'} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{'Advanced Full Synthetic'}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ display: 'flex', flex: 1, justifyContent: 'space-between', marginTop: 2 }}>
                        <Badge color="info">
                            Aceites
                        </Badge>
                        <Badge color="danger">
                            Precio: $500
                        </Badge>
                    </CardSubtitle>
                </CardBody>
            </Card>

        </Col>
    )
}