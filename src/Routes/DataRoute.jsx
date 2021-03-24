import React from 'react'
import Auth from '../Pages/Auth';
import { Compras } from '../Pages/Auth/Compras';
import { Roles } from '../Pages/Auth/Roles';
import { Usuarios } from '../Pages/Auth/Usuarios';
import { CrearUsuario } from '../Pages/Auth/Usuarios/CrearUsuario';
import { DetalleUsuario } from '../Pages/Auth/Usuarios/DetalleUsuario';
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
        exact: true,
        path: "/usuarios",
        component: () => <Usuarios />
    },
    {
        exact: true,
        path: "/usuarios/show/:id",
        component: () => <DetalleUsuario />
    },
    {
        path: "/usuarios/nuevoUsuario",
        component: () => <CrearUsuario />
    },
    {
        exact: true,
        path: "/roles",
        component: () => <Roles />
    },
    
    {
        exact: true,
        path: "/compras",
        component: () => <Compras/>
    },





    {
        exact: true,
        path: "*",
        component: () => <NoMatch />
    },
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
                component: () => { return <>Usuarios</> },
            },
            {
                path: "/dashboards/Compras",
                name: "Compras",
                icon: "mdi mdi-adjust",
                component: () => { return <>Compras</> },
            },
        ],
    },
    {
        navlabel: true,
        name: "Apps",
        icon: "mdi mdi-dots-horizontal",
    },
    {
        collapse: true,
        path: "/apps",
        name: "Apps",
        state: "openApps",
        icon: "airplay",
        extra: "",
        child: [
            {
                path: "/compras",
                name: "Compras",
                icon: "mdi mdi-adjust",
                
            },
        ]
    }

];
