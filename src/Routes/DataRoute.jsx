import React, { Children } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NoMatch from '../Pages/NoMatch';
import NoAuth from "./../Pages/NoAuth";
export const Rutas = [
    {
        exact: true,
        path: "/",
        component: () => <NoAuth />
    },
    {
        path: "*",
        component: () => <NoMatch />
    }
];

