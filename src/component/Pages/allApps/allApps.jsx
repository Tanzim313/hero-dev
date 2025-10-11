import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";


const allApps =()=>{


    const data = useLoaderData();
    const[searchTerm,setSearchTerm]=useState("");


    const filteredApps = data.filter(app=>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return(

    
        <div>

            <div>
                <h2>Total Apps:{filteredApps.length}</h2>

                <input 
                    type="text"
                    placeholder="Search apps..."
                    value={searchTerm}

                    onChange={e => setSearchTerm(e.target.value)}

                
                />
            </div>

             <Suspense fallback={<div>Loading Apps...</div>}>
                <div>
                    {
                        filteredApps.length > 0 ?(
                            filteredApps.map((appData)=>(
                            <Apps key={appData.id}  appData={appData}></Apps>
                        ))
                        ):(
                            <p>
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