import User from "./User";
// <User name = {"Raman Kumar(function)"}/>
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {


    constructor(props){
        super(props)

console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("ParentComponentDidMount");
    }
    


render() {

 console.log("Parent Render");

    return(

        <div>
            <h1>About Clas Component</h1>
            <h2> This is React</h2>
       <UserClass name = {"First Child(class)"}location = {"Darbhanga"}/>
            <User/>
        </div>
    );
};
}



export default About ;
