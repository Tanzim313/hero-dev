import React,{ useEffect, useState } from "react";
import AppList from "../../app/AppList";
import { getStoredApp, removeStoredDB } from "../../../utility/addToDB";
import { useLoaderData } from "react-router";
import { toast, Toaster } from "react-hot-toast";

const Installation =()=>{

    const [installApp,setInstallApp]=useState([])
    const data = useLoaderData();
    const [sortOrder,setSort] = useState("");
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

        toast.success('Successfully  UnInstalled!')
    };



    const handleSort =(o)=>{
        setSort(o);
        let sortedApp = [...installApp];

        if(o === "high-low"){
            sortedApp.sort((a,b)=>b.downloads-a.downloads);
        }
        else if(o == "low-high"){
            sortedApp.sort((a,b)=>a.downloads-b.downloads);
        }
        setInstallApp(sortedApp);
    };

    return(

        <div>

        <div className="text-center mt-20 mb-20">
            <h1 className="text-4xl mb-2">Your Installed Apps</h1>
            <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="p-10">

            <select 
            
                value={sortOrder}
                onChange={(x)=>handleSort(x.target.value)}
                className="border p-2 rounded-md"
            
            >
               <div className="text-black text-xl">
                    <option value="">Set By Size</option>
                    <option value="high-low">High-Low</option>
                    <option value="low-high">Low-High</option>
                 
                </div>
            </select>



            <div><Toaster/></div>
            {installApp.length === 0?(
                <p className="text-center mt-10 mb-10 text-4xl"> No App Installed</p>
            ):(
                installApp.map(b=><AppList key={b.id} singleApp={b} handleUninstall={handleUninstall} ></AppList>)
                )}
        </div>

        </div>
    )


}

export default Installation;