#  React

# parcel

    -Dev Build
   -Local Server
   -HMR = Hot Module Replacement
   -File Watching Algorithm -Written in C++
   -Caching - Faster Builds
   -Image Optimization
   -Minification
   -Bundling
   -Compress
   -Consistent Hashing
   -Code Splitting
   -Differential Bundling - support older browsers
   -Diagnostic
   -Error Handling
   -Https
   -Tree Shaking - remove unused code
   -Different dev and prod builds
   
# Namaste Food 


/**
 *Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -Restaurant Container
 *   Restaurant Card
 *     -Image
 *     -Name of Restaurant,Star Rating,cuisines, Time for delivery
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */ 

 # Import/Export

 Two Types of Export/Import

  -Default Export/Import
    export default components;
    import {component} from".path";

  -Named Export/Import
   export const component;
   import {component} from "path";

   # React Hooks

   (Normal JS Utility Functions)
   -Usestate() - SuperPowerful state in React
   -UseEffect() -  call back function , depency array

    // useEffect called everytime my component renders - useEffect called.
    //if no dependency array => useEffect is called on every render.

    // if dependency array is empty = [] => useEffect is called on initial render (just once).

    // if dependency array is any [a] => it only be called dependency changes. Everytime a is updated(called).

# 2 types Routing in web apps
     - Client Side Routing
     - Server Side Routing

# Life Cycle Method

  /** Parent Constructor
     Parent Render

      - First Child Constructor
      - Second Child Render

      -Second Child Constructor
      -Srcond Child Render

      <Dom Updated - In Single Batch>

      -First Child ComponentDidMount
      -Second Child ComponentDidMount

     Parent ComponentDidMOunt
  **/  
  

# Redux Toolkit

Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector

# Types Of Testing

Unit Testing
Integration Testing
End to End Testing - e2e testing

# Setting up Testing in our app

Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom



