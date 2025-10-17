import React from "react";
import found from "../../assets/App-Error.png"
import { Link } from "react-router";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";


const ErrorPage=()=>{

    return(
        <>
       

        <div className="mt-20 mb-20 flex flex-col justify-center items-center text-center p-4">

            <img src={found} alt="" />
            
            <div className="mt-20">
                <h1 className="text-4xl sm:text-5xl mb-2">Oops!!APP NOT FOUND!</h1>
                <p className="text-[#627382] mb-2">The App you are requesting is not found on our system.  please try another apps</p>
                
                <Link to="/">
                    <button className="w-25 h-10 rounded-md bg-gradient-to-b from-[#632EE3] to-[#9F62F2]">Go Back!</button>
                </Link>
                
            </div>
            
        </div>

       
    </>
    );
};

export default ErrorPage;