import { BsBack, BsXCircle }from "react-icons/bs"
import { useState } from "react";
// import { Editor } from "@monaco-editor/react"


export function ExerciseSolution({exerciseSolution,close}){
    
    const [isShowingSolution,setIsShowinSolution] = useState(false);
    const handleConfirmClick = ()=>{
        setIsShowinSolution(true);
    }
    return (
        <section className="sv-console-solution">
            <div className="sv-console-solution-closeBtn" onClick={close}><BsXCircle/></div>
            {isShowingSolution?
            <article className="sv-console-solution-code">
                <div key={0}><span>{0}</span><p>{'//Posible solución'}</p>
                </div>
               {exerciseSolution.map((line,index)=>
               <div key={index+1}>
                    <span>{index+1}</span>
                    <p style={{"marginLeft": `${20*line[1]}px`}}>{line[0]}</p>
                </div>
               )}
            </article>
            :
            <div className="sv-console-confirmDialog">
                <p>¿Confrimas que quieres ver la solución?</p>
                <div className="sv-console-confirmDialog-btns">
                    <div onClick={close}>Cancelar</div>
                    <div onClick={handleConfirmClick}>Confirmar</div>
                </div>
            </div>
            }
        </section>
    );
}