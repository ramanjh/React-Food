import { useEffect,useState } from "react"
import {Menu_api} from "../utils/constants";


const useRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);


    useEffect (()=>{
      fetchData();
    },[]);

    const fetchData = async ()=> {

         const data = await fetch(Menu_api+resId);

         const json = await data.json () ;

         setresInfo(json.data);
      
    };
         
        return resInfo;
    };

     export default useRestaurantMenu ;