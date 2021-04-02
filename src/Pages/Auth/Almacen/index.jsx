import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, CardImg, CardSubtitle, Badge } from 'reactstrap';
import { CardAlmacen } from '../../../Components/Card/Almacen/CardAlmacen';
export function Almacen() {
    return (
        <>
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
                            <button className="btn btn-success" onClick={() => { }}>Agregar Producto</button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <CardAlmacen/>
                </Col>
            </Row>
        </>
    )
}