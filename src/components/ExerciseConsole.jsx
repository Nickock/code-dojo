import { TestCard } from "./TestCard"
import { useState } from "react"
import { BsArrowBarLeft ,BsArrowBarRight, BsPatchQuestion   } from "react-icons/bs"

export function ExerciseConsole({excerciseData,logs,isError}){
    const [colapsed,setCollapse] = useState(false);
    const [hintColapsed,setHintCollapse] = useState(null);

    const collapse = ()=>{
        setCollapse(!colapsed)
    }

    const handleHintClick = ()=>{
        if(hintColapsed){
            setHintCollapse(null);
        }else{
            if(excerciseData.hints && excerciseData.hints.length>0){
                const random = Math.floor(Math.random() * excerciseData.hints.length);
                setHintCollapse(excerciseData.hints[random]);
            }
        }
    }
return(
    <aside className={`sv-console ${colapsed?'sv-collapsed' : ''} ${isError?'sv-console-error' : ''}`}>
        <h2>Consola</h2>
        
   

        <div className="sv-collapse-icon" onClick={collapse}>
            {!colapsed?<BsArrowBarRight/>:<BsArrowBarLeft />}
        </div>
        {!isError && excerciseData.tests.map((t,index)=>{
            let testStatus = (logs.length>0 && logs[index].status)?"ok":"bad";
            return <TestCard key={index}
                number={index} 
                status={logs.length>0&&testStatus}
                input={Object.keys(t.arguments).map(key=>`${key} = ${t.arguments[key]}`).join()}
                output={t.result.toString()} 
                exceptedOutput={logs.length>0 && logs[0].output?logs[index].output.toString():'_'
                }/>
        }
        )}
       {!isError && (excerciseData.hints && excerciseData.hints.length>0) &&
        <div className="sv-console-hint" onClick={handleHintClick}>
            <span><BsPatchQuestion /> Pista </span> 
            {hintColapsed && <p>{hintColapsed}</p>}
        </div>
        }


        {isError && <span>Hay errores en tu código</span>}
    </aside>

)
}