import React  from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";

const Root =()=>{

    const navigation = useNavigation();

    return(
            <div className=" ">
                <Navbar></Navbar>

                {
                    navigation.state === "loading"&&(
                        <div>
                            Loading......
                        </div>
                    )
                }

                <Outlet></Outlet>
                <Footer></Footer>

                
            </div>
    );
};

export default Root;