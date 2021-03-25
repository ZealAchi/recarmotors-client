import React, { useState } from "react";
import {
  Nav,
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCarousel,
  Progress,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import * as data from "./Data";

/*--------------------- -----------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from "../../../assets/images/logo-icon.png";
import logolighticon from "../../../assets/images/logo-light-icon.png";
import logodarktext from "../../../assets/images/logo-text.png";
import logolighttext from "../../../assets/images/logo-light-text.png";
import profilephoto from "../../../assets/images/users/1.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

//   const settings = useSelector((state) => state.settings);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showMobilemenu = () => {
    document.getElementById("main-wrapper").classList.toggle("show-sidebar");
  };

  return (
    <header className="topbar navbarbg" data-navbarbg={"skin1"}>
      <Navbar
        className="top-navbar navbar-dark navbar navbar-expand-md"
        expand="md"
      >
        <div
          className="navbar-header"
          id="logobg"
        //   data-logobg={settings.activeLogoBg}
        >
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <span
            className="nav-toggler d-block d-md-none"
            onClick={() => showMobilemenu()}
          >
            <i className="ti-menu ti-close" />
          </span>
          {/*--------------------------------------------------------------------------------*/}
          {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
          {/*--------------------------------------------------------------------------------*/}
          <NavbarBrand href="/">
            <b className="logo-icon">
              {/* <img src={'http://www.recarmotors.com/images/logopng.png'} height="30px" width="80px" alt="homepage" className="dark-logo" /> */}
              {/* <img src={'http://www.recarmotors.com/images/logopng.png'} height="30px" width="80px" alt="homepage" className="light-logo" /> */}
            </b>
            <span className="logo-text">
              <h4>RecarMotors</h4>
              {/* <img src={logodarktext} alt="homepage" className="dark-logo" /> */}
              {/* <img src={logolighttext} className="light-logo" alt="homepage" /> */}
            </span>
          </NavbarBrand>
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <span className="topbartoggler d-block d-md-none" onClick={toggle}>
            <i className="ti-more" />
          </span>
        </div>
        <Collapse
          className="navbarbg"
          isOpen={isOpen}
          navbar
          data-navbarbg={'skin1'}
        >
          <Nav className="float-left" navbar>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Mega Menu Dropdown                                                       */}
            {/*--------------------------------------------------------------------------------*/}
            
            {/*--------------------------------------------------------------------------------*/}
            {/* End Mega Menu Dropdown                                                         */}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Create New Dropdown                                                      */}
            {/*--------------------------------------------------------------------------------*/}
            
            {/*--------------------------------------------------------------------------------*/}
            {/* End Create New Dropdown                                                        */}
            {/*--------------------------------------------------------------------------------*/}
          </Nav>
          <Nav className="ml-auto float-right" navbar>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Notifications Dropdown                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            {/* <UncontrolledDropdown nav inNavbar> */}
              {/* <DropdownToggle nav caret>
                <i className="mdi mdi-bell font-24" />
              </DropdownToggle>
              <DropdownMenu right className="mailbox">
                <span className="with-arrow">
                  <span className="bg-primary" />
                </span>
                <div className="d-flex no-block align-items-center p-3 bg-primary text-white mb-2">
                  <div className="">
                    <h4 className="mb-0">4 New</h4>
                    <p className="mb-0">Notifications</p>
                  </div>
                </div>
                <div className="message-center notifications">
                  {/*<!-- Message -->*/}
                  {/* {data.notifications.map((notification, index) => { 
                    return (
                      <span href="" className="message-item" key={index}>
                        <span
                          className={
                            "btn btn-circle btn-" + notification.iconbg
                          }
                        >
                          <i className={notification.iconclass} />
                        </span>
                        <div className="mail-contnet">
                          <h5 className="message-title">
                            {notification.title}
                          </h5>
                          <span className="mail-desc">{notification.desc}</span>
                          <span className="time">{notification.time}</span>
                        </div>
                      </span>
                    );
                  })}
                </div>
                <a className="nav-link text-center mb-1 text-dark" href=";">
                  <strong>Check all notifications</strong>{" "}
                  <i className="fa fa-angle-right" />
                </a>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            {/*--------------------------------------------------------------------------------*/}
            {/* End Notifications Dropdown                                                     */}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Messages Dropdown                                                        */}
            {/*--------------------------------------------------------------------------------*/}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="font-24 mdi mdi-comment-processing" />
              </DropdownToggle>
              <DropdownMenu right className="mailbox">
                <span className="with-arrow">
                  <span className="bg-danger" />
                </span>
                <div className="d-flex no-block align-items-center p-3 bg-danger text-white mb-2">
                  <div className="">
                    <h4 className="mb-0">5 New</h4>
                    <p className="mb-0">Messages</p>
                  </div>
                </div>
                <div className="message-center message-body"> */}
                  {/*<!-- Message -->*/}
                  {/* {data.messages.map((message, index) => {
                    return (
                      <span href="" className="message-item" key={index}>
                        <span className="user-img">
                          <img
                            src={message.image}
                            alt="user"
                            className="rounded-circle"
                            width=""
                          />
                          <span
                            className={
                              "profile-status pull-right " + message.status
                            }
                          ></span>
                        </span>
                        <div className="mail-contnet">
                          <h5 className="message-title">{message.title}</h5>
                          <span className="mail-desc">{message.desc}</span>
                          <span className="time">{message.time}</span>
                        </div>
                      </span>
                    );
                  })}
                </div>
                <span className="nav-link text-center link text-dark" href="">
                  <b>See all e-Mails</b> <i className="fa fa-angle-right" />
                </span>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            {/*--------------------------------------------------------------------------------*/}
            {/* End Messages Dropdown                                                          */}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Profile Dropdown                                                         */}
            {/*--------------------------------------------------------------------------------*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="pro-pic">
                <img
                  src={profilephoto}
                  alt="user"
                  className="rounded-circle"
                  width="31"
                />
              </DropdownToggle>
              <DropdownMenu right className="user-dd">
                <span className="with-arrow">
                  <span className="bg-primary" />
                </span>
                <div className="d-flex no-block align-items-center p-3 bg-primary text-white mb-2">
                  <div className="">
                    <img
                      src={profilephoto}
                      alt="user"
                      className="rounded-circle"
                      width="60"
                    />
                  </div>
                  <div className="ml-2">
                    <h4 className="mb-0">Steave Jobs</h4>
                    <p className=" mb-0">varun@gmail.com</p>
                  </div>
                </div>
                {/* <DropdownItem>
                  <i className="ti-user mr-1 ml-1" /> My Account
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-wallet mr-1 ml-1" /> My Balance
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-email mr-1 ml-1" /> Inbox
                </DropdownItem> */}
                {/* <DropdownItem divider />
                <DropdownItem>
                  <i className="ti-settings mr-1 ml-1" /> Account Settings
                </DropdownItem> */}
                <DropdownItem divider />
                <DropdownItem href="/pages/login">
                  <i className="fa fa-power-off mr-1 ml-1" /> Cerrar Sesiòn
                </DropdownItem>
                <DropdownItem divider />
                <Button color="success" className="btn-rounded ml-3 mb-2 mt-2">
                Ver perfil
                </Button>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*--------------------------------------------------------------------------------*/}
            {/* End Profile Dropdown                                                           */}
            {/*--------------------------------------------------------------------------------*/}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
