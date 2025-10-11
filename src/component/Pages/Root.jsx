import React  from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Root =()=>{

    return(
            <div className=" ">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>

                
            </div>
    );
};

export default Root;