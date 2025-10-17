import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../component/Pages/Root";
import Home from "../component/Pages/Home/Home";
import allApps from "../component/Pages/allApps/allApps";
import Installation from "../component/Pages/instalation/Installation";
import appDetails from "../component/Pages/appDetails/appDetails";
import ErrorPage from "../component/ErrorPages/ErrorPage";
import ErrorApp from "../component/ErrorPages/ErrorApp"
//import AppList from "../component/app/AppList";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage/>,
    
    children:[
        {
            index:true,
            loader: async () => {
                const res = await fetch('/data.json');
                const data = await res.json();
                return data; 
          },
            path:"/",
            Component:Home
        },{
            loader: async () => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data; 
        },
            path:"/allapps",
            Component:allApps
        },{
            path:"/installation",
            Component:Installation,

            loader: async () => {
              const res = await fetch('/data.json');
              const data = await res.json();
              return data; 
        }

            
        },{
          path:'/appDetails/:id',
          loader: async () => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data; 
        },
         Component:appDetails,
         errorElement:<ErrorApp/>,
      }
    ]
  }
]);