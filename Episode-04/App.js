import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
  return(
    <div className="header">
    <div className="logo-container">
     <img className="logo"
     src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"/>
     </div>
<div className="nav-items">
 <ul>
  <li>Home</li>
  <li>About Us</li>
  <li>Contact Us</li>
  <li>Cart</li>
 </ul>
 </div>
</div>
   
);
};
const RestaurantCard =(props)=>{
  const {resData}=props;

const {cloudinaryImageId ,name ,cuisines ,avgRating,costForTwo,deliverytime} = resData?.data;

  return(
    <div className="res-card"style={{backgroundColor: "#f0f0f0"}}>
      <img 
        className="res-logo"
        alt="res-logo"
        src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
        cloudinaryImageId}
        />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliverytime}</h4>
    </div>
  );
};

const resList =[
  {
  data: {
  id: "255655",
  name: "Cake & Cream",
  cloudinaryImageId: "ac57cc371e73f96f812613f58457aca3",
  costForTwo: "₹200 for two",
  cuisines:["Bakery","Hot-dog","pastery","Cake","Thick-shake"],
  avgRating: 4.3,
  deliverytime:"38 minutes",
  },},

  {
  data: {
    id: "399525",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    costForTwo: "₹400 for two",
    cuisines: [
      "Burgers",
      "Snacks",
      "Fast Food"
    ],
    avgRating: 4.2,
  },
},
{
  data: {
    id: "38925",
    name: "Domino's Pizza",
    cloudinaryImageId: "mdl4tnyc8wbvysqxzhnq",
    costForTwo: "₹400 for two",
    cuisines: [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    avgRating: 4.2,
},
},
{
  data: {
    id: "253727",
    name: "McDonald's",
    cloudinaryImageId: "ecd32b841549ce6bfd993260a2086c1f",
    costForTwo: "₹400 for two",
    cuisines: [
      "American"
    ],
    avgRating: 4.2,
}},
{
  data: {
    id: "467579",
    name: "Louis Burger",
    cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
    costForTwo: "₹600 for two",
    cuisines: [
      "Burgers",
      "American",
      "Fast Food"
    ],
    avgRating: 4.2,
}},


  {
  data: {
  id: "350363",
  name: "Haldiram sweets and Namkeen",
  cloudinaryImageId: "25c3a7d394d6c5556b134385f7d665b0",
  avgRating: 4.6,
  cuisines: [
  "North Indian",
  "South Indian",
  "Chinese",
  "Pizzas",
  ],
  deliverytime:"35 minutes" ,
  },
  },

  {
  data: {
  id: "154891",
  name: "Rasraj Restaurant",
  cloudinaryImageId: "egbr63ulc8h1zgliivd8",
  costForTwo: "₹250 for two",
  cuisines: [
  "North Indian",
  "South Indian",
  "Street Food",
  "Chinese",
  ],
  avgRating: 4.2,
  deliverytime:"30 minute",
  },
  },
  {
    data: {
      id: "40414",
      name: "Bikanervala",
      cloudinaryImageId: "k1ppyflw5ypymt3rayid",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Snacks",
        "Chaat",
        "Sweets"
      ],
      avgRating: 4.2,

    },
  },

  {
  data: {
  id: "745961",
  name: "Balaji Restaurant",
  cloudinaryImageId: "b8672fe52944c3599ea324d99d608300",
  costForTwo: "₹149 for two",
  cuisines: ["South Indian", "North Indian"],
  avgRating: 4.8,
  deliverytime:"32 minute",
  }, },

  {
  data: {
  id: "798745",
  name: "Friends Restaurant",
  cloudinaryImageId: "b14cd9fc40129fcfb97aa7e621719d07",
  costForTwo: "₹150 for two",
  cuisines: ["North Indian", "Chinese", "Biryani",],
  avgRating: 4.2,
  deliverytime:"35 minute",
  },
  },

  {
  data: {
  id: "314737",
  name: "Rasoi the Kitchen",
  cloudinaryImageId: "yjymo9nhyn7rhvafsrd3",
  costForTwo: "₹200 for two",
  cuisines: ["North Indian","Chinese",
  "Thalis"],
  avgRating: 3.9,
  deliverytime:"39 minute",

  },
  },
  
  {
  data: {
  id: "201454",
  name: "Morsels restaurants",
  cloudinaryImageId: "aafe71251ef5328784652dc838cd91f3",
  costForTwo: "₹300 for two",
  cuisines: ["North Indian", "South Indian"],
  avgRating: 3.2,
  deliverytime:"31 minute",
  },
  },

  {
  data: {
  id: "266124",
  name: "Trimurti Restaurant",
  cloudinaryImageId: "8135c0066b06e2925c66930be4e9ffb5",
  costForTwo: "₹150 for two",
  cuisines: ["Desserts"],
  avgRating: 3.9,
  deliverytime:"31 minute",
  },
  },

  {
  data: {
  id: "509254",
  name: "Saha Restaurant",
  cloudinaryImageId: "z1ez4uc9idul2uj2v87g",
  costForTwo: "₹300 for two",
  cuisines: ["North Indian", "Biryani", "Thalis",],
  avgRating: 3.7,
  deliverytime:"31 minute",
  }},
  ];
 




const Body =()=>{
  return(
    <div className="body">
    <div className="Search">Search</div>
    <div className="res-container">
    
    {resList.map((restaurant) =>(
   <RestaurantCard key ={restaurant.data.id}resData={restaurant}/>
))}

    
    </div>
    </div>
  )
}

const AppLayout = ()=>{
  return( 
  <div className="App">
    
    <Header/>
    <Body/>
  </div>

  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
