import React from 'react'
import { Card, CardBody } from 'reactstrap'
export const CardVehicle = () => {
    return (<Card>
        <CardBody className="text-center">
            <div className="profile-pic mb-3 mt-3">
            <div style={{heigt:100,padding:15}}>
                        <span data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-lime"><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-car fa-w-16 fa-5x"><g class="fa-group"><path fill="currentColor" d="M319.5 128a48 48 0 0 1 44.57 30.17L384 208H128l19.93-49.83A48 48 0 0 1 192.5 128zM80 384a63.82 63.82 0 0 1-47.57-21.2A31.82 31.82 0 0 0 32 368v48a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32v-32zm352 0h-48v32a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32v-48a31.82 31.82 0 0 0-.43-5.2A63.82 63.82 0 0 1 432 384z" class="fa-secondary"></path><path fill="currentColor" d="M500 176h-59.88l-16.64-41.6A111.43 111.43 0 0 0 319.5 64h-127a111.47 111.47 0 0 0-104 70.4L71.87 176H12A12 12 0 0 0 .37 190.91l6 24A12 12 0 0 0 18 224h20.08A63.55 63.55 0 0 0 16 272v48a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-48a63.58 63.58 0 0 0-22.07-48H494a12 12 0 0 0 11.64-9.09l6-24A12 12 0 0 0 500 176zm-352.07-17.83A48 48 0 0 1 192.5 128h127a48 48 0 0 1 44.57 30.17L384 208H128zM96 256c19.2 0 48 28.71 48 47.85s-28.8 15.95-48 15.95-32-12.8-32-31.9S76.8 256 96 256zm272 47.85c0-19.14 28.8-47.85 48-47.85s32 12.76 32 31.9-12.8 31.9-32 31.9-48 3.2-48-15.95z" class="fa-primary"></path></g></svg></span>
            </div>
                <h4 className="mt-3 mb-0">Marca</h4>
                <a href="/">Modelo</a>
                <h5 className="mt-3 mb-0">No. Serie</h5>
            </div>
            {/* <div className="badge badge-pill badge-light font-16">Administrador</div> */}
        </CardBody>
    </Card>)
}