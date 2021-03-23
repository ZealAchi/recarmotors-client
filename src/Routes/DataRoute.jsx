import React, { Children } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Auth from '../Pages/Auth';
import NoMatch from '../Pages/NoMatch';
import NoAuth from "./../Pages/NoAuth";
export const Rutas = [
    {
        exact: true,
        path: "/",
        component: () => <Auth />
    },
    
    {
        path: "/dashboard/Usuarios",
        component: () => <>Dashboard</>
    },
    
    {
        exact: true,
        path: "*",
        component: () => <NoMatch />
    }
];


export var ThemeRoutes = [
    {
        navlabel: true,
        name: "Personal",
        icon: "mdi mdi-dots-horizontal",
    },
    {
        collapse: true,
        path: "/dashboards",
        name: "Dashboards",
        state: "dashboardpages",
        icon: "home",
        extra: "",
        child: [
            {
                path: "/dashboard/Usuarios",
                name: "Usuarios",
                icon: "mdi mdi-adjust",
                component: ()=>{return<>Usuarios</>},
            },
            {
                path: "/dashboards/Ventas",
                name: "Ventas",
                icon: "mdi mdi-adjust",
                component: ()=>{return<>Ventas</>},
            },
        ],
    },
];
