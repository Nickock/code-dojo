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
            switch(ph[0]){
               case ParagraphType.NORMAL : return <p key={index}>{ph[1]}</p>
               case ParagraphType.EXAMPLE:return <div className="sv-description-example" key={index}><p>{ph[1]}</p></div>
               case ParagraphType.CODE_EXAMPLE:return <div className="sv-description-code-example" key={index}>
                     {ph[1].lines.map((line,line_index)=>{return <div key={`ex-code-line-${index}-${line}`}><span>{line_index} </span> <p key={`ex-${index}-code-example${line_index}`}>{line}</p></div>})}
                  </div>
               case ParagraphType.IMAGE : return <div className="sv-description-example" key={index}><img key={index} src={ph[1]} alt="imagen ilustrativa de un caso de ejemplo" /></div>
            }
         }
         )}
         
      </section>
    )


}