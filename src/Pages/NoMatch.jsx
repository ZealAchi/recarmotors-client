import React from 'react';
import {
    Button
} from 'reactstrap';

import img1 from '../assets/images/logo-icon.png';

const NoMatch = () => {
    return <div className="">
        <div className="error-box">
            <div className="error-body text-center">
                <img src={img1} alt="" />
                <h4 className="text-dark font-24">RecarMotors</h4>
                <div className="mt-4">
                    <h3>Pagina no encontrada</h3>
                    <h5 className="mb-0 text-muted font-medium">Algo anda mal en esta página.</h5>
                    <h5 className="text-muted font-medium">Vuelva a comprobar la ruta.</h5>
                </div>
                <div className="mt-4 mb-4"><i className="ti-settings font-24"></i></div>
                {/* <Button color="primary">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                </Button>{' '}
                <Button color="secondary">
                    <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                </Button>{' '}
                <Button color="success">
                    <i aria-hidden="true" className="fab fa-skype"></i>
                </Button>{' '}
                <Button color="info">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                </Button>{' '} */}
            </div>
        </div>
    </div>;
}

export default NoMatch;
