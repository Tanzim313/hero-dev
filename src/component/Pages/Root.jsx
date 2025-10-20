import React, { useEffect, useState }  from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { useRouteError } from "react-router";
import logo from "../../assets/logo.png";

const Root =()=>{

    const navigation = useNavigation();
    const error = useRouteError();
    const isLoad =  navigation.state === "loading";

    const [sLoading,setLoading] = useState(false);

    useEffect(()=>{
        if(isLoad){
            setLoading(true);
        }else{
            const time = setTimeout(() => {
                setLoading(false);
            },1000);
            return ()=>clearTimeout(time);
        }
    },[isLoad]);


    return(
            <div className=" ">
                <Navbar></Navbar>

                {sLoading?(
                        <div className="p-12 w-60 mx-auto">
                             <p className="flex flex-row justify-center items-center text-5xl font-bold mt-40 mb-40">
                                <span>L</span><img src={logo} alt="" className="animate-spin w-[60px]"/><span>ading.....</span>
                            </p>
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