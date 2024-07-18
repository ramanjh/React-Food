import { useEffect, useState } from "react";
const User = ()=> {

  const [count]=useState(0); // how to use useState in function component (state is created whenever class instance is created)
  const [count2]=useState(1);

  useEffect( ()=>{
    // Api call

  const timer  = setInterval (()=>{
        console.log("Namaste React");
    } ,1000 );

    console.log("useEffect")

    return ()=> {
      clearInterval(timer);
       console.log("useEffect Return")
    };

  },[]);

  console.log("Render");

  
  

    return (
      <div className="User-card">
        <h1>count = {count}</h1>
        <h1>count2 = {count2}</h1>
        <h2> Name:Raman</h2>
        <h3>Location:Darbhanga</h3>
        <h4>Contact:@Raman</h4>
    </div>

    );
};

export default User ;