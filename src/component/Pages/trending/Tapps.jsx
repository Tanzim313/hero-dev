import React, { Suspense } from "react";
import Apps from "../Apps/Apps";


const Tapps=({data})=>{

    

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

export default Tapps;