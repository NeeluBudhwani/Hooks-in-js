import React from "react";
import { useState } from "react";


const App = () =>{

  //const state =useState();
  const [crrTime , setCrrTime] = useState(new Date().toLocaleTimeString()); 

  //let crrTime = new Date().toLocaleTimeString();

  const changeTime = () =>{
     setCrrTime(new Date().toLocaleTimeString());
     console.log(crrTime);

  };

return(
<>
<div className="div"> 

<h1 className="h1"> {crrTime} </h1>
<button className="btn" onClick={changeTime} >Get Time</button>
</div>
</>

);



};


export default App;