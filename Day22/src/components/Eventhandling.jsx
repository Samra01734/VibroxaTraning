import React from 'react'

//tradetional method
// function handleButtonClick(){
//     alert("Hey I am Sam");
// }
const handleButtonClick=()=>{
    console.log(event);
    alert("Hey I am SAM");
};

const handleWelcomeUser=()=>{
 console.log("Hey SAM Wellcome");
};
const Eventhandling = () => {
  return (
    <div> 
      <button onClick={handleButtonClick}>Click Now</button>
      <br></br>
      <button onClick={()=>handleButtonClick()}>Click Now2</button>
    {/*
    In react evevnt handle recive an obj as argument by default ,when you use arrow fun directly 
    in onClick attribute in onClick without passing explicity it does no taccept it 
    */
    }
    <br/>
          <button onClick={(event)=>console.log(event)}>Inline</button>
          {/*
          function component with inline arrow
          
          */}
          <button onClick={()=>alert("Hey IM inline")}>Inline arrow</button>
          {/*passing argument to inline handle          */}
          <button onClick={handleWelcomeUser}>Click Me</button>

    </div>
  )
}

export default Eventhandling
