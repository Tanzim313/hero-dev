import React from "react";
import hero from '../../../assets/hero.png';
import Tapps from "../trending/Tapps";
import { Link, useLoaderData } from "react-router";

const Home =()=>{
    
    const data = useLoaderData();
    console.log(data);


    return(
            <div>
                <div className="flex flex-col justify-center items-center p-4">
                    <h1 className="text-5xl text-center">We Build<br/><span className="text-6xl mt-1 font-bold bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text"> Productive </span> Apps</h1>
                    <p className="text-center mb-4 mt-4 ">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                    <div className="space-x-4">
                        <button className="btn btn-primary">Google Play</button>
                        <button className="btn btn-primary">App Store</button>
                    </div>
                </div>

                <div className="p-10">
                    <img className="" src={hero} alt="" />
                </div>

                <div className=" p-4 -mt-10 bg-gradient-to-l from-[#632EE3] to-[#9F62F2] ">
                    <div className="text-center font-bold text-3xl mt-10">
                        <h1>Trusted by Millions, Built for You</h1>
                    </div>
                    
                    <div className=" flex flex-row  justify-center gap-8 mt-10 mb-10 text-center">
                        <div>
                            <p>Total Downloads</p>
                            <h1 className="text-2xl font-bold">29.6M</h1>
                            <p>21% more than last month</p>
                        </div>

                        <div>
                        <p>Total Downloads</p>
                        <h1 className="text-2xl font-bold">29.6M</h1>
                        <p>21% more than last month</p>
                    </div>

                    <div>
                        <p>Total Downloads</p>
                        <h1 className="text-2xl font-bold">29.6M</h1>
                        <p>21% more than last month</p>
                    </div>

                    </div>
                </div>


                <div className="p-4 mt-10">
                    <div className="space-y-3">
                        <h1 className="text-center text-3xl">Trending Apps</h1>
                        <p className="text-center mb-10">
                            Explore All Trending Apps on the Market developed by us
                        </p>
                    </div>
                    <div>
                        <Tapps data={data} ></Tapps>
                    </div>

                    <div className="flex justify-center items-center">
                       
                            <button  className="btn btn-primary mt-10 mb-10">Show All</button>
                       
                    </div>
                </div>

            </div>
    );
};

export default Home;