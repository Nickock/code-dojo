import { BsBack, BsXCircle }from "react-icons/bs"
import { useState } from "react";
import { CodeExample } from "./CodeExample";

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
               <CodeExample lines={exerciseSolution}/>
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