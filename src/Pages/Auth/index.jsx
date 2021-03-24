import React from 'react'
import { UserProfile } from '../../Components'
import { Row, Col } from 'reactstrap';
import Option from '../../Components/Card/Option';
export default function Auth() {
  return (
    <div>
      <Row>
        <Col sm={12} lg={4}>
          <UserProfile />
        </Col>
        <Col sm={12} lg={8}>
          <Row>
            {optionsUser.map((item, i) => {
              return (<Col sm={6} lg={4} key={i}>
                <Option {...item} />
              </Col>)
            })}


          </Row>
        </Col>
      </Row>
    </div>
  )
}

const optionsUser = [
  {
    name: "Usuarios",
    ImageOption: () => {
      return (
        <span data-balloon="size: 3x" data-balloon-pos="up" class="db color-inherit link hover-orange"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-visor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user-visor fa-w-14 fa-3x"><path fill="currentColor" d="M105.05859,174.653C123.72266,222.237,169.79492,256.05336,224,256.05336S324.27734,222.237,342.94141,174.653C357.168,171.401,368,159.2643,368,144.05336v-64a31.99909,31.99909,0,0,0-32-32H323.18164C299.7168,19.00649,264.25.05336,224,.05336s-75.7168,18.95313-99.18164,48H112a31.99909,31.99909,0,0,0-32,32v64C80,159.2643,90.832,171.401,105.05859,174.653ZM128,96.05336H320v32H128Zm185.59375,192h-16.6875a174.10379,174.10379,0,0,1-145.8125,0h-16.6875A134.44134,134.44134,0,0,0,0,422.45961v41.59375a48.01238,48.01238,0,0,0,48,48H400a48.01238,48.01238,0,0,0,48-48V422.45961A134.44134,134.44134,0,0,0,313.59375,288.05336Zm39.6875,159.79688A4.06431,4.06431,0,0,1,352,448.05336a4.01558,4.01558,0,0,1-3.26562-1.6875c-12.1875-17.1875-17.625-23.04687-19.85938-25.03125a5.72835,5.72835,0,0,0-1.375.375c-3.29688,1-12.1875,5.48438-37.04688,24.8125a4.1133,4.1133,0,0,1-4.39062.34375,4.03445,4.03445,0,0,1-2.04688-3.92187c3.875-36.39063,15.875-66.5,35.70313-89.5a4.30685,4.30685,0,0,1,3.14063-1.39063,3.97907,3.97907,0,0,1,3.0625,1.5625c18.8125,24.59375,28.92187,54.96875,30.07812,90.3125A3.992,3.992,0,0,1,353.28125,447.85024Z" class=""></path></svg></span>
      )
    },
    navigation:"/Usuarios"
  },
  {
    name: "Roles",
    ImageOption: () => {
      return (
      <span data-balloon="size: 7x" data-balloon-pos="up" class="db color-inherit link hover-orange"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user-tag fa-w-14 fa-7x"><g class="fa-group"><path fill="currentColor" d="M630.6 364.9l-90.3-90.2A64 64 0 0 0 495 256h-79.3a32 32 0 0 0-32 32v79.2a63.79 63.79 0 0 0 18.7 45.2l90.3 90.2a32 32 0 0 0 45.3 0l92.5-92.5a31.84 31.84 0 0 0 .1-45.2zm-182.8-21a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24z" class="fa-secondary"></path><path fill="currentColor" d="M379.9 435a95.37 95.37 0 0 1-28.1-67.9V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.58 134.58 0 0 0 0 422.3v41.6a48 48 0 0 0 48 48h352a47.78 47.78 0 0 0 37.9-18.9zM224 255.9A128 128 0 1 0 96 128a128 128 0 0 0 128 127.9z" class="fa-primary"></path></g></svg></span>      )
    },
    navigation:"/Roles"
  },
]