import React from "react";
import Routes from "./../Routes";
import AuthContext from "./Auth.Context";
import LoadContext from "./Load.Context";
import NotificationContext from "./Notification.Context";
import ModalContext from './Modal.Context'
import AppContext from "./App.Context";
export default function() {
  return (
    <AppContext>
    <LoadContext>
      <NotificationContext>
        <ModalContext>
          
        <AuthContext>
          <Routes/>
          
        </AuthContext>
        </ModalContext>
      </NotificationContext>
    </LoadContext>
    </AppContext>
  );
}