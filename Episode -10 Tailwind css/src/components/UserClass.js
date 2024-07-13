import React from "react";

class UserClass extends React.Component {  // userclass extend react component

    constructor(props){ // constructor receive  props in class component

        super(props);

        this.state = {

            UserInfo:{
                name: "Dummy",
                location:" Default",
            },
          
           // count:0,
            //count2: 2,
        };
        console.log(this.props.name + "Child Constructor");
    }

async componentDidMount(){
    console.log(this.props.name + "ChildComponentDidMount");
    // Api call

    const data = await fetch("https://api.github.com/users/ramanjh")
    const json = await data.json();

    this.setState({

        UserInfo:json,
    });

    console.log(json); 
}

 componentDidUpdate(){
    console.log("ComponentDidUpdate");
 }

 componentWillUnmount() {
    console.log("ComponentWillUnmount");
 }


    render() { // return some piece of jsx and display on web page 
     

    //const  {name,location} = this.props;
       // const {count} = this.state;

    console.log(this.props.name + "Child Render");    

   // * always use this keyword inside class *//

   // <h1>count:{count}</h1> 
  // <button onClick={()=>{
    // Never Update State Variable Directly
    // its dont touch any count other than setState like other count in destructure.

     //this.setState({

//count : this.state.count + 1,
   //  })
 //}}>Count Increase</button>//

 const {name, location ,avatar_url} = this.state.UserInfo;

      return(

        < div className="User-card"> 
        <img src= {avatar_url}></img>
         <h2> Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:@Raman</h4>
    </div>

      );
 };

};

export default UserClass ;