import React from "react";
import { Link } from "react-router";


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
            <div className="p-8">
                <img className="min-w-[280px] rounded-md" src={image} alt="" />
            </div>

            <div>
                <h1 className="text-center mb-6 text-3xl font-bold">{title}</h1>
                <div className="flex flex-row space-x-40">
                   <div className="text-[#00D390]   w-[100px] rounded-md  text-center font-bold bg-[#D9D9D9]"><p className="">{downloads}</p></div>
                    <div className="text-[#FF8811] rounded-md w-[40px] text-center font-bold  bg-[#D9D9D9]" ><p>{ratingAvg}</p></div>
                </div>
            </div>
           </div>
        </div>
        </Link>
    );
};

export default Apps;