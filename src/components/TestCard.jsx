import { useState } from "react"
import { BsCopy } from "react-icons/bs"
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

   const copyToClipBoard = (text)=>{
         navigator.clipboard.writeText(text);
   }

   return(
     <>
        <summary className={`sv-test sv-test-${status}`} onClick={handleClick}>
            <span>
               TEST {number} 
            </span>
            <div className={`sv-test-preview ${state}`}>
               <p>Input : {input} <BsCopy onClick={()=>{copyToClipBoard(input)}}></BsCopy></p>
            </div>
            <span className={`sv-test-preview sv-test-preview-out  ${state}`}> 
               <p className={(output == exceptedOutput)?"":"sv-test-actualOutput-bad" } >Actual output : {output} <BsCopy onClick={()=>{copyToClipBoard(output)}}></BsCopy></p> 
               <p>Excepted output : {exceptedOutput}</p>
            </span>
         </summary>
    </>)
}