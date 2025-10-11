import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";


const allApps =()=>{

    const data = useLoaderData();
    

    return(
        <div>

             <Suspense>
                <div>
                    {
                        data.map((appData)=>(
                            <Apps key={appData.id}  appData={appData}></Apps>
                        ))
                    }
                </div>

            </Suspense>

        </div>
    );
};

export default allApps;