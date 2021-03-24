import React, { useState } from 'react';

import {
    Card,
    CardBody,
    Row,
    Col,
    Tooltip
} from 'reactstrap';

import img1 from '../../assets/images/users/2.jpg';

const UserProfile = () => {

    

    return (
        <Card>
            <CardBody className="text-center">
                <div className="profile-pic mb-3 mt-3">
                    <img src={'https://gravatar.com/avatar/?s12&d=retro'} width="150" className="rounded-circle" alt="user" />
                    <h4 className="mt-3 mb-0">Jose Antonio</h4>
                    <a href="/">jose@gmail.com</a>
                </div>
                <div className="badge badge-pill badge-light font-16">Administrador</div>
            </CardBody>
            {/* <div className="p-4 border-top mt-3">
                <Row className="text-center">
                    <Col xs="6" className="border-right">
                        <a href="/" className="link d-flex align-items-center justify-content-center font-medium"><i className="mdi mdi-message font-20 mr-1"></i>Message</a>
                    </Col>
                    <Col xs="6">
                        <a href="/" className="link d-flex align-items-center justify-content-center font-medium"><i className="mdi mdi-developer-board font-20 mr-1"></i>Portfolio</a>
                    </Col>
                </Row>
            </div> */}
        </Card>
    );
}

export default UserProfile;
