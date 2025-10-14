import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB, getStoredApp } from "../../../utility/addToDB";
import Chart from "../Chart/Chart";
import { Download,Star,ThumbsUp  } from 'lucide-react';

const appDetails =()=>{

    const {id}= useParams();
    const appId = parseInt(id);


    const data = useLoaderData();

    const appD = data ? data.find(app => app.id === appId) : null;

    console.log(appD);
    
    const{
        companyName,
        description,
        downloads,
        image,
        ratingAvg,
        ratings,
        reviews,
        size,
        title
    }=appD;


    const [installed,setInstalled]=useState(false);

    useEffect(()=>{
            const installedApps = getStoredApp();

            if(installedApps.includes(appId)){
                setInstalled(true);
            }
    },[appId]);
    
    const handleInstall =()=>{
        setInstalled(true);
        toast.success('Successfully Installed!')

        addToStoredDB(appId);
       
    }

    return(
        <div>
        <div className="p-2">
            <div><Toaster/></div>
            <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-around items-center  p-4 border-2 gap-4">
                <div className="p-4">
                    <img src={image} alt="" />
                </div>

                <div className="flex flex-col items-center ">
                    <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                    <p className="mb-6 ">Developed by:<span className="text-[#9F62F2] font-bold">{companyName}</span></p>

                    <div className="flex flex-row gap-8 list-none mb-5">
                        <li className=""><Download />{downloads}</li>
                        <li><Star />{ratingAvg}</li>
                        <li><ThumbsUp />{reviews}</li>
                    </div>

                    <button 
                    onClick={()=>handleInstall(id)}
                    disabled={installed}
                    className="btn bg-[#00D390]">
                      {installed ? "Installed" : `Install Now (${size} MB)`}
                    </button>

                </div>
            </div>

            <div className="">
                <Chart></Chart>
            </div>

            <div className="mt-10 text-center mb-10">
                <p>{description}</p>
            </div>
            
        </div>

    </div>
    );
};


export default appDetails;