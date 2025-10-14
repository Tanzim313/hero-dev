import React from "react";
import down from "../../assets/icon-downloads.png";
import rat from "../../assets/icon-ratings.png";


const AppList =({singleApp,handleUninstall})=>{

    const {id,image,title,downloads,ratingAvg,size} = singleApp;

    console.log(singleApp);

    
    return(
        <div className="flex justify-between">
            <div className="flex flex-row justify-between gap-10 ">
                <img src={image} alt="" />

                <div>
                    <h1 className="text-3xl">Forest:{title}</h1>
                    <div className="mt-5 list-none flex flex-row justify-between items-center text-xl gap-12">
                        <li className="text-[#00D390] w-[20px]">
                            <img src={down} alt="" />
                            {downloads}
                        </li>
                        <li className="text-[#FF8811]">
                           <img className="w-[20px]" src={rat} alt="" />
                            {ratingAvg}
                        </li>
                        <li className="text-[#627382]">{size}MB</li>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleUninstall(id)} className="btn  bg-[#00D390]">Uninstall</button>
        </div>
    )
}

export default AppList;