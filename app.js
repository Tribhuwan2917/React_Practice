 // Here we are writeing react.js code
 const heading1=React.createElement("h1",{},"This is a heading")
 const heading2=React.createElement("h2",{},"This is a heading")
 const child1=React.createElement("div",{},[heading1,heading2])
 // Thi is how can create nesting of elements for react.js
 const parent=React.createElement("div",{},[child1]) 
//  const heading=React.createElement("h1",{id:"heading"},"Hello from react.js");
//  console.log(heading)
 const root=ReactDOM.createRoot(document.getElementById("root"))
 // this is connection betwwen react and js code
//  root.render(heading)
root.render(parent)
