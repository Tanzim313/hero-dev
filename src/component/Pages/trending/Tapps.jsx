import React, { Suspense } from "react";
import Apps from "../Apps/Apps";


const Tapps=({data})=>{

    

    return(
        <div>

            <Suspense>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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

export default Tapps;