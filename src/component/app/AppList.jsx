import React from "react";
import down from "../../assets/icon-downloads.png";
import rat from "../../assets/icon-ratings.png";


const AppList =({singleApp,handleUninstall})=>{

    const {id,image,title,downloads,ratingAvg,size} = singleApp;

    console.log(singleApp);

    
    return(
        <div className="p-4 flex flex-col md:flex-row  border-2 mt-8">
            <div className="flex flex-col md:flex-row justify-between gap-10 ">
            
                 <img className="rounded-md" src={image} alt="" />
               

                <div className="mt-6 mb-6 p-2 flex  flex-col items-center">
                    <h1 className="text-3xl">Forest:{title}</h1>
                    <div className="mt-5 list-none flex flex-row justify-between items-center text-xl gap-8">
                        <li className="text-[#00D390] w-[20px]  flex flex-col items-center">
                            <img src={down} alt="" />
                            {downloads}
                        </li>
                        <li className="text-[#FF8811] flex flex-col items-center">
                           <img className="w-[20px]" src={rat} alt="" />
                            {ratingAvg}
                        </li>
                        <li className="text-[#627382]">{size}MB</li>
                    </div>
                </div>
            </div>

           
             <button onClick={()=>handleUninstall(id)} className="btn  bg-[#00D390]  md:mt-50 md:mr-4">Uninstall</button>
           
        </div>
    )
}

export default AppList;