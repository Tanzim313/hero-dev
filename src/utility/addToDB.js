const getStoredApp=()=>{

    const storeAppSTR = localStorage.getItem("appList");
    console.log("Stored Apps from localStorage:", storeAppSTR);

    if(storeAppSTR){
        const storedAppData = JSON.parse(storeAppSTR);
        return storedAppData;
    }
    else{
        return [];
    }
};


const addToStoredDB=(id)=>{

    const storedAppData =getStoredApp();
    const numericId = parseInt(id);

    if(storedAppData.includes(numericId)){
        alert("bhai ei id already exist!")
    }
    else{
        storedAppData.push(numericId);
        const data=JSON.stringify(storedAppData);
        localStorage.setItem("appList",data)
    }
};


const removeStoredDB =(id)=>{

    let storedAppData = getStoredApp();
    const numId = parseInt(id);

    if(storedAppData.includes(numId)){
        storedAppData = storedAppData.filter(
            appId=>appId !== numId);

            const data = JSON.stringify(storedAppData);
            localStorage.setItem("appList",data);
            console.log(`numId : ${numId}`);

        
    }

};



export { addToStoredDB,getStoredApp,removeStoredDB };