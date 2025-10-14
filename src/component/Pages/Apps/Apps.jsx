import React from "react";
import { Link } from "react-router";
import { Download,Star,ThumbsUp  } from 'lucide-react';


const Apps =({appData})=>{
    const {
        id,
        companyName,
        description,
        downloads,
        image,
        ratingAvg,
        ratings,
        reviews,
        size,
        title}=appData;

    return(
        
        <Link to={`/appDetails/${id}`}>
        <div>
            <div className="p-4 border-2 flex flex-col justify-center items-center">
            <div className="p-6">
                <img className="w-[280px] h-[200px] rounded-md" src={image} alt="" />
            </div>

            <div>
                <h1 className="text-center mb-6 text-3xl font-bold">{title}</h1>
                <div className="flex flex-row justify-between items-center">
                   <div className="text-[#00D390]   max-w-[120px] h-[40px] rounded-md  text-center font-bold bg-[#F1F5E8] p-2 flex justify-center"><p className="flex"><Download/>{downloads}</p></div>
                    <div className="text-[#FF8811] rounded-md w-[50px] h-[40px]  font-bold   bg-[#FFF0E1] " ><p className="flex justify-around items-center p-1 mt-1"><Star/>{ratingAvg}</p></div>
                </div>
            </div>
           </div>
        </div>
        </Link>
    );
};

export default Apps;