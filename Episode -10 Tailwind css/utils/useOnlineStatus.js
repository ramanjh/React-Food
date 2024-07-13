import { useEffect, useState } from "react";

const OnlineStatus = ()=>{
    // check if onlne 

    const [onlineStatus,setonlineStatus] = useState(true);

    useEffect(()=>{

   window.addEventListener("offline",()=>{
     setonlineStatus(false);

   });

   window.addEventListener("online",()=>{
    setonlineStatus(true);

  });


    },[]);

    // Boolean vale
    return  onlineStatus;
};

export default OnlineStatus;