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
        <span data-balloon="size: 3x" data-balloon-pos="up" className="db color-inherit link hover-orange"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-visor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user-visor fa-w-14 fa-3x"><path fill="currentColor" d="M105.05859,174.653C123.72266,222.237,169.79492,256.05336,224,256.05336S324.27734,222.237,342.94141,174.653C357.168,171.401,368,159.2643,368,144.05336v-64a31.99909,31.99909,0,0,0-32-32H323.18164C299.7168,19.00649,264.25.05336,224,.05336s-75.7168,18.95313-99.18164,48H112a31.99909,31.99909,0,0,0-32,32v64C80,159.2643,90.832,171.401,105.05859,174.653ZM128,96.05336H320v32H128Zm185.59375,192h-16.6875a174.10379,174.10379,0,0,1-145.8125,0h-16.6875A134.44134,134.44134,0,0,0,0,422.45961v41.59375a48.01238,48.01238,0,0,0,48,48H400a48.01238,48.01238,0,0,0,48-48V422.45961A134.44134,134.44134,0,0,0,313.59375,288.05336Zm39.6875,159.79688A4.06431,4.06431,0,0,1,352,448.05336a4.01558,4.01558,0,0,1-3.26562-1.6875c-12.1875-17.1875-17.625-23.04687-19.85938-25.03125a5.72835,5.72835,0,0,0-1.375.375c-3.29688,1-12.1875,5.48438-37.04688,24.8125a4.1133,4.1133,0,0,1-4.39062.34375,4.03445,4.03445,0,0,1-2.04688-3.92187c3.875-36.39063,15.875-66.5,35.70313-89.5a4.30685,4.30685,0,0,1,3.14063-1.39063,3.97907,3.97907,0,0,1,3.0625,1.5625c18.8125,24.59375,28.92187,54.96875,30.07812,90.3125A3.992,3.992,0,0,1,353.28125,447.85024Z" className=""></path></svg></span>
      )
    },
    navigation: "/Usuarios"
  },
  {
    name: "Roles",
    ImageOption: () => {
      return (
        <span data-balloon="size: 7x" data-balloon-pos="up" className="db color-inherit link hover-orange"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user-tag fa-w-14 fa-7x"><g className="fa-group"><path fill="currentColor" d="M630.6 364.9l-90.3-90.2A64 64 0 0 0 495 256h-79.3a32 32 0 0 0-32 32v79.2a63.79 63.79 0 0 0 18.7 45.2l90.3 90.2a32 32 0 0 0 45.3 0l92.5-92.5a31.84 31.84 0 0 0 .1-45.2zm-182.8-21a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24z" className="fa-secondary"></path><path fill="currentColor" d="M379.9 435a95.37 95.37 0 0 1-28.1-67.9V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.58 134.58 0 0 0 0 422.3v41.6a48 48 0 0 0 48 48h352a47.78 47.78 0 0 0 37.9-18.9zM224 255.9A128 128 0 1 0 96 128a128 128 0 0 0 128 127.9z" className="fa-primary"></path></g></svg></span>)
    },
    navigation: "/Roles",
  },
  // {
  //   name: "Vehiculos",
  //   ImageOption: () => {
  //     return (
  //       <span data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-pink"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-car fa-w-16 fa-5x"><path fill="currentColor" d="M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z" class=""></path></svg></span>
  //     )
  //   },
  //   navigation: "/Vehiculos"
  // },
  {
    name:"Almacen",
    ImageOption:()=>(<span data-balloon="size: 5x" data-balloon-pos="up" class="db color-inherit link hover-lime"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="boxes-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-boxes-alt fa-w-20 fa-5x"><path fill="currentColor" d="M592 224H480V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48v176H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM208 48h80v72c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V48h80v176H208V48zm88 416H48V272h96v72c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-72h88v192zm296 0H344V272h88v72c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-72h96v192z" class=""></path></svg></span>),
    navigation: "/Almacen"
  },
  
]