 import React from "react";
 import  ReactDOM  from "react-dom/client";
 const jsxheading=(<><h1>This is from  jax1</h1>
                    <h2>This is jsx 2</h2></>)
 const Title=()=>(<h3>This is functional components</h3>)
 const root=ReactDOM.createRoot(document.getElementById("root"));
 const Comp1=()=>(<h5>This is components1</h5>)
 const components1=<Comp1></Comp1>
//  console.log(jsxheading)
 root.render(<h4>Thi si somwethong new{jsxheading}Hi++++++++++{components1}<Title></Title></h4>)

