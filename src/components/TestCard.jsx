import { useState } from "react"
const testCardState = {
   open:"",
   closed:"d-none"
}
export function TestCard({number,status,input,output,exceptedOutput}){
    
   const [state,setState]= useState(testCardState.closed);
   
   const handleClick = ()=>{
      if(state === testCardState.open){
         setState(testCardState.closed);
      }else{
         setState(testCardState.open);
      }
   };


   return(
     <>
        <summary className={`sv-test sv-test-${status}`} onClick={handleClick}>
            <span>
               TEST {number} 
            </span>
            <div className={`sv-test-preview ${state}`}>
               <p>Input : {input}</p>
            </div>
            <span className={`sv-test-preview sv-test-preview-out  ${state}`}> 
               <p className={(output == exceptedOutput)?"":"sv-test-actualOutput-bad"}>Actual output : {output}</p>
               <p>Excepted output : {exceptedOutput}</p>
            </span>
         </summary>
    </>)
}