import React from "react";


const AppList =({singleApp,handleUninstall})=>{

    const {id,image,title} = singleApp;

    console.log(singleApp);

    
    return(
        <div>
            <img src={image} alt="" />
            <button onClick={()=>handleUninstall(id)} className="btn btn-danger">Uninstall</button>
        </div>
    )
}

export default AppList;