import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";
// import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'
import FeatherIcon from "feather-icons-react";
import { AppContext } from "../../../Context/App.Context";

const Sidebar = (props) => {
  let location = useLocation();

  const { ChangeState } = useContext(AppContext)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "selected" : "";
  };
  const [state, setState] = useState({
    authentication: activeRoute("/authentication") !== "" ? true : false,
    uicomponents: activeRoute("/ui-components") !== "" ? true : false,
    samplepages: activeRoute("/sample-pages") !== "" ? true : false,
    dashboardpages: activeRoute("/dashboards") !== "" ? true : false,
    formlayoutPages: activeRoute("/form-layouts") !== "" ? true : false,
    formpickerPages: activeRoute("/form-pickers") !== "" ? true : false,
  });
  const [cstate, csetState] = useState({
    iconsPages: activeRoute("/extra/icons") !== "" ? true : false,
    //extrapages: activeRoute("/sample-pages/extra-pages") !== "" ? true : false,
  });
  //   const settings = useSelector((state) => st ate.settings);

  /*--------------------------------------------------------------------------------*/
  /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
  /*--------------------------------------------------------------------------------*/
  const expandLogo = () => {
    document.getElementById("logobg").classList.toggle("expand-logo");
  };
  /*--------------------------------------------------------------------------------*/
  /*Verifies if routeName is the one active (in browser input)                      */
  /*--------------------------------------------------------------------------------*/

  /*--------------------------------------------------------------------------------*/
  /*Its for scroll to to                    */
  /*--------------------------------------------------------------------------------*/

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showMobilemenu = () => {
    if (window.innerWidth < 800) {
      document.getElementById("main-wrapper").classList.toggle("show-sidebar");
    }
  };

  return (
    <aside
      className="left-sidebar"
      id="sidebarbg"
      data-sidebarbg={"skin6"}
      onMouseEnter={expandLogo.bind(null)}
      onMouseLeave={expandLogo.bind(null)}
    >
      <div className="scroll-sidebar">
        <div className="sidebar-nav">
          {/*--------------------------------------------------------------------------------*/}
          {/* Sidebar Menus will go here                                                */}
          {/*--------------------------------------------------------------------------------*/}
          <Nav id="sidebarnav">
            {props.routes.map((prop, key) => {
              if (prop.redirect) {
                return null;
              } else if (prop.navlabel) {
                return (
                  <li className="nav-small-cap" key={key}>
                    <i className={prop.icon}></i>
                    <span className="hide-menu">{prop.name}</span>
                  </li>
                );
                /*--------------------------------------------------------------------------------*/
                /* Child Menus wiil be goes here                                                    */
                /*--------------------------------------------------------------------------------*/
              } else if (prop.collapse) {
                let firstdd = {};
                firstdd[prop.state] = !state[prop.state];

                return (
                  <li
                    className={
                      activeRoute(prop.path) + " sidebar-item " + prop.extra
                    }
                    key={key}
                  >
                    <span
                      data-toggle="collapse"
                      className="sidebar-link has-arrow"
                      aria-expanded={state[prop.state]}
                      onClick={() => setState(firstdd)}
                    >
                      <FeatherIcon icon={prop.icon} />
                      {/* <i className={prop.icon} /> */}
                      <span className="hide-menu">{prop.name}</span>
                    </span>
                    <Collapse
                      className="first-level"
                      isOpen={state[prop.state]}
                    >
                      <ul>
                        {prop.child.map((prop, key) => {
                          if (prop.redirect) return null;

                          /*--------------------------------------------------------------------------------*/
                          /* Child Sub-Menus wiil be goes here                                                    */
                          /*--------------------------------------------------------------------------------*/

                          if (prop.collapse) {
                            let seconddd = {};
                            seconddd[prop["cstate"]] = !cstate[prop.cstate];
                            return (
                              <li
                                className={
                                  activeRoute(prop.path) + " sidebar-item"
                                }
                                key={key}
                              >
                                <span
                                  data-toggle="collapse"
                                  className="sidebar-link has-arrow"
                                  aria-expanded={cstate[prop.cstate]}
                                  onClick={() => csetState(seconddd)}
                                >
                                  <i className={prop.icon} />
                                  <span className="hide-menu">{prop.name}</span>
                                </span>
                                <Collapse
                                  className="second-level"
                                  isOpen={cstate[prop.cstate]}
                                >
                                  <ul>
                                    {prop.subchild.map((prop, key) => {
                                      if (prop.redirect) return null;
                                      return (
                                        <li
                                          className={
                                            activeRoute(prop.path) +
                                            " sidebar-item"
                                          }
                                          key={key}
                                        >
                                          {/* <NavLink
                                            to={prop.path}
                                            activeClassName="active"
                                            className="sidebar-link"
                                          >
                                            <i className={prop.icon} />
                                            <span className="hide-menu">
                                              {prop.name}
                                            </span>
                                          </NavLink> */}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </Collapse>
                              </li>
                            );
                          } else {
                            return (
                              <li
                                onClick={scrollTop}
                                className={
                                  activeRoute(prop.path) +
                                  (prop.pro ? " active active-pro" : "") +
                                  " sidebar-item"
                                }
                                key={key}
                              >
                                <NavLink
                                  to={prop.path}
                                  onClick={() => {
                                    if (prop.name == "Vehiculos") {
                                      ChangeState({ TypeLinkVehicle: 1 })
                                    }
                                    showMobilemenu()
                                  }}
                                  className="sidebar-link"
                                  activeClassName="active"
                                >
                                  <i className={prop.icon} />
                                  <span className="hide-menu">{prop.name}</span>
                                </NavLink>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </Collapse>
                  </li>
                );
              } else {
                return (
                  /*--------------------------------------------------------------------------------*/
                  /* Adding Sidebar Item                                                            */
                  /*--------------------------------------------------------------------------------*/
                  <li
                    onClick={scrollTop}
                    className={
                      activeRoute(prop.path) +
                      (prop.pro ? " active active-pro" : "") +
                      " sidebar-item"
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className="sidebar-link"
                      activeClassName="active"
                      onClick={showMobilemenu}
                    >
                      <FeatherIcon icon={prop.icon} />
                      {/* <i className={prop.icon} /> */}
                      <span className="hide-menu">{prop.name}</span>
                    </NavLink>
                  </li>
                );
              }
            })}
          </Nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
