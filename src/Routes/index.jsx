import React, { memo, useEffect, useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Spinner from "../Components/spinner/Spinner";
import { AppContext } from "../Context/App.Context";
import FullLayout from "../Layout/FullLayout";
import NoAuth from "../Pages/NoAuth";
import Lockscreen from "../Pages/NoAuth/LockScreen";
// import { toast } from "react-toastify";
// import Layout from "./../Layout";

import { AuthContext } from "./../Context/Auth.Context";
import { LoadContext } from "./../Context/Load.Context";
import { NotificationContext } from "./../Context/Notification.Context";
import { Rutas } from "./DataRoute";

// import Modal from "../ComponentsGlobalUI/Modal";
const AuthValue = [];

export default function (props) {
  const { data: AuthInfo } = useContext(AuthContext);
  const { loading, changeState: changeLoad } = useContext(LoadContext);
  const { data: Notification = [] } = useContext(NotificationContext);
  const { state: stateApp } = useContext(AppContext);
  useEffect(()=>{

  },[])
  return (
    <div>
      <Router>
        {!loading ? (
          <>Loading...</>
        ) : (
          <Suspense fallback={<Spinner />}>
          <Switch>
            {Rutas.map((item, i) => {
              if (AuthInfo.token !== undefined) {
                return <Route
                  key={i}
                  path={item.path}
                  exact={item.exact}
                  children={() => {
                    if (stateApp.statusApp)
                      return <StatusApp {...stateApp}/>
                    return <FullLayout><item.component /></FullLayout>
                  }} />
              }
              return <NoAuth key={i} />;

            })}
          </Switch>
          </Suspense> 
        )}
        {/* </Layout> */}
      </Router>
      {/* <Modal/> */}
    </div>
  );
}
function StatusApp(props) {
  console.log(props)
  switch (props.statusApp) {
    case 'block':
      return <Lockscreen/>
    
    default:
  return null
  }
}