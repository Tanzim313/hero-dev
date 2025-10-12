import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB, getStoredApp } from "../../../utility/addToDB";

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
            <div><Toaster/></div>
            <div className="flex flex-row justify-between items-center p-4 border-2 ">
                <div>
                    <img src={image} alt="" />
                </div>

                <div className="flex flex-col items-center">
                    <h1>{title}</h1>
                    <p>Developed by:{companyName}</p>

                    <div className="flex flex-row gap-4">
                        <li>{downloads}</li>
                        <li>{ratingAvg}</li>
                        <li>{reviews}</li>
                    </div>

                    <button 
                    onClick={()=>handleInstall(id)}
                    disabled={installed}
                    className="btn btn-primary">
                      {installed ? "Installed" : `Install Now (${size} MB)`}
                    </button>

                </div>
            </div>

            <div>

            </div>

            <div>
                <p>{description}</p>
            </div>
            
        </div>
    );
};


export default appDetails;