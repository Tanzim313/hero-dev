import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";
import { Search } from 'lucide-react';
import spin from "../../../assets/logo.png";



const allApps =()=>{


    const data = useLoaderData();
    const[searchTerm,setSearchTerm]=useState("");


    const filteredApps = data.filter(app=>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return(

    
        <div className="mb-10 mt-10">

            <div className="text-center mt-10 mb-20">
                <h1 className="text-3xl">Our All Applications</h1>
                <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>

            </div>

            <div className="flex justify-between p-2">
                <h2 className="text-2xl">({filteredApps.length})Apps Found</h2>

                <div className="flex p-2">


                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" 
  required placeholder="Search"

  value={searchTerm}

  onChange={e => setSearchTerm(e.target.value)}
  
  />
</label>
                
                
                </div>

            </div>

             <Suspense fallback={<div>L <span><img src={spin} alt="" /></span>ading Apps...</div>}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        filteredApps.length > 0 ?(
                            filteredApps.map((appData)=>(
                            <Apps key={appData.id}  appData={appData}></Apps>
                        ))
                        ):(
                            <p className="mt-20 mb-20 text-4xl">
                                No App Found
                            </p>
                        )
                    }
                </div>

            </Suspense>

        </div>
    );
};

export default allApps;