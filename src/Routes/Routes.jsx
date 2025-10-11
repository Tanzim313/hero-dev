import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../component/Pages/Root";
import Home from "../component/Pages/Home/Home";
import allApps from "../component/Pages/allApps/allApps";
import Installation from "../component/Pages/instalation/Installation";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    
    children:[
        {
            index:true,
            loader:()=>fetch('data.json'),
            path:"/home",
            Component:Home
        },{
            index:true,
            loader:()=>fetch('data.json'),
            path:"/allapps",
            Component:allApps
        },{
            path:"/installation",
            Component:Installation
        }
    ]
  }
]);