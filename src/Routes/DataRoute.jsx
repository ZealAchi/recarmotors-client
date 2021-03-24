import React from 'react'
import Auth from '../Pages/Auth';
import {Usuarios} from '../Pages/Auth/Usuarios';
import NoMatch from '../Pages/NoMatch';
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
        path:"/usuarios",
        component: () => <Usuarios />
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
