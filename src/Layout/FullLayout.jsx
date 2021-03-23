import React, { useState, useEffect, Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./layout-components/footer/Footer";
import Header from "./layout-components/header/Header";
import {ThemeRoutes} from "./../Routes/DataRoute"
import Sidebar from "./layout-components/sidebar/Sidebar";

const FullLayout = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const settings =  {activeSidebarType:"full"};

  useEffect(() => { 
    const updateDimensions = () => {
      let element = document.getElementById("main-wrapper");
      setWidth(window.innerWidth);
      switch (settings.activeSidebarType) {
        case "full":
        case "iconbar":
          if (width < 4170) {
            element.setAttribute("data-sidebartype", "mini-sidebar");
            element.classList.add("mini-sidebar");
          } else {
            element.setAttribute(
              "data-sidebartype",
              settings.activeSidebarType
            );
            element.classList.remove("mini-sidebar");
          }
          break;

        case "overlay":
          if (width < 767) {
            element.setAttribute("data-sidebartype", "mini-sidebar");
          } else {
            element.setAttribute(
              "data-sidebartype",
              settings.activeSidebarType
            );
          }
          break;

        default:
      }
    };
    if (document.readyState === "complete") {
      updateDimensions();
    }
    window.addEventListener("load", updateDimensions.bind(null));
    window.addEventListener("resize", updateDimensions.bind(null));
    return () => {
      window.removeEventListener("load", updateDimensions.bind(null));
      window.removeEventListener("resize", updateDimensions.bind(null));
    };
  }, [settings.activeSidebarType, width]);

  return (
    <div
      id="main-wrapper"
      dir={"ltr"}
      data-theme={"light"}
      data-layout="horizontal"
      data-sidebartype={"mini-sidebar"}
      data-sidebar-position={"fixed"}
      data-header-position={"fixed"}
      data-boxed-layout={"boxed"}
    >
      {/*--------------------------------------------------------------------------------*/}
      {/* Header                                                                         */}
      {/*--------------------------------------------------------------------------------*/}
      <Header />
      {/*--------------------------------------------------------------------------------*/}
      {/* Sidebar                                                                        */}
      {/*--------------------------------------------------------------------------------*/}
      <Sidebar {...props} routes={ThemeRoutes} />
      
      {/*--------------------------------------------------------------------------------*/}
      {/* Page Main-Content                                                              */}
      {/*--------------------------------------------------------------------------------*/}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          {props.children}
        </div>
        <Footer/>
      </div>
      {/*--------------------------------------------------------------------------------*/}
      {/* Customizer from which you can set all the Layout Settings                      */}
      {/*--------------------------------------------------------------------------------*/}
      {/* <Customizer /> */}
    </div>
  );
};

export default FullLayout;
