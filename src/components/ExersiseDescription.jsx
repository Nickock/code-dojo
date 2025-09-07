import { ParagraphType } from "../utils/ExerciseData"
import { BsArrowBarLeft ,BsArrowBarRight } from "react-icons/bs"
import { useState } from "react"

export function ExerciseDescripion({title,paragraphs}){
      
   const [colapsed,setCollapse] = useState(false);
   
   const collapse = ()=>{
      setCollapse(!colapsed)
   }

   return(
        <section className={`sv-description ${colapsed?'sv-collapsed' : ''}`}>
         
         <div className="sv-collapse-icon" onClick={collapse}>
            {colapsed?<BsArrowBarRight/>:<BsArrowBarLeft />}
         </div>

         <h2>{title}</h2>
         {paragraphs && paragraphs.map((ph,index) => {
            if(ph[0] === ParagraphType.NORMAL){
               return <p key={index}>{ph[1]}</p>
            }else if(ph[0]=== ParagraphType.EXAMPLE){
               return <div className="sv-description-example" key={index}><p>{ph[1]}</p></div>
            }else{
               return <div className="sv-description-example" key={index}><img key={index} src={ph[1]} alt="imagen ilustrativa de un caso de ejemplo" /></div>
               // return <img key={index} src={ph[1]} alt="imagen ilustrativa de un caso de ejemplo" />
            }
         }
         )}
         
      </section>
    )


}