import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the js)-parcel-babel

// JSX => React.createElement => ReactElement-JS object  => HTML Element(render)

const Title =() => (
 <h1 className="head"  tabIndex="5">
    Namaste React using JSX
 </h1>
);


const HeadingComponent = () =>(
    <div id="container">
    <Title/>
 <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);