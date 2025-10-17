import React  from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { useRouteError } from "react-router";
import logo from "../../assets/logo.png";

const Root =()=>{

    const navigation = useNavigation();
    const error = useRouteError();
    const isLoad =  navigation.state === "loading";


    return(
            <div className=" ">
                <Navbar></Navbar>

                {isLoad?(
                        <div className="p-12 w-60 mx-auto">
                            <img src={logo} alt="" className="animate-spin"/>
                        </div>
                    ):(
                        <Outlet></Outlet>
                    )
                }
               
                <Footer></Footer>

                
            </div>
    );
};

export default Root;