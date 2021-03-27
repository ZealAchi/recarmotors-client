import React from 'react'
import {Card, CardBody, Col} from 'reactstrap'
export function SerchMecanica({setSearch}){
    return(
        <Col xs={12}>
        <Card>
            <CardBody>
            <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" name="searchText" placeholder="Número de serie..." />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary" onClick={()=>setSearch(true)}>Buscar</button>
                                </span>
                            </div>
                        </div>
            </CardBody>
        </Card>
        </Col>
    )
}