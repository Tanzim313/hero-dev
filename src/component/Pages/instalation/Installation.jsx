import React,{ useEffect, useState } from "react";
import AppList from "../../app/AppList";
import { getStoredApp, removeStoredDB } from "../../../utility/addToDB";
import { useLoaderData } from "react-router";
import { toast, Toaster } from "react-hot-toast";

const Installation =()=>{

    const [installApp,setInstallApp]=useState([])
    const data = useLoaderData();

    console.log(data);

    useEffect(()=>{

        const storedInstalldData = getStoredApp();
        const Converted= storedInstalldData.map(id=>parseInt(id))

        const myAppList=data.filter(app=>Converted.includes(app.id));
        setInstallApp(myAppList);
    },[data]);

    const handleUninstall =(id)=>{

        removeStoredDB(id);

        const updatedApps = installApp.filter(app=>app.id!==id);
        setInstallApp(updatedApps);

        toast.success('Successfully UnInstalled!')
    };

    return(
        <div className="p-10">
            <div><Toaster/></div>
            {
                installApp.map(b=><AppList key={b.id} singleApp={b} handleUninstall={handleUninstall} ></AppList>)
            }
        </div>
    )


}

export default Installation;