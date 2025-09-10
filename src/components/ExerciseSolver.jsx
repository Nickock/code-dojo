import { useState, useRef } from 'react';
import { BsFillMoonStarsFill ,BsFillSunFill  } from "react-icons/bs";
import { Editor } from "@monaco-editor/react"
import { ExerciseConsole } from './ExerciseConsole';
import { ExerciseDescripion } from './ExersiseDescription';
import { Solver } from '../utils/solverLogic';

export function ExerciseSolver({exercise}){
const initialCode = `//Asegurate de definir tu solución dentro de la función ya definida
//de lo contrario, puede haber errores en la ejecución
//Manos a la obra! \n\n${exercise.data.initialCode}`; 

const [isRunningCode , setIsRunningCode] = useState(false);
const [solverLogs, setSolverLogs] = useState([])
const [solverError, setSolverError] = useState(false)
const [editorTheme, setEditorTheme] = useState('vs-dark')

const editorRef = useRef(null);
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  const toggleEditorTheme = ()=>{
    setEditorTheme(editorTheme==='vs-dark'?'light':'vs-dark')
  }

  async function runCode() {
    setIsRunningCode(true);
    const inputCode = editorRef.current.getValue();
    // alert(inputCode)
    try{
      const logs =  await Solver(inputCode,exercise.data);
      // console.log(logs)
      setSolverLogs(logs);
      setSolverError(false)
    }catch{
      setSolverError(true)
    }
    setIsRunningCode(false);
  }

 return (

  <main className="sv-container">
      <ExerciseDescripion title={exercise.card.title} paragraphs={exercise.card.description} />
    
      <section className="sv-editor">
        
        <div className="sv-editor-toggleTheme" onClick={toggleEditorTheme}>
          Editor:{(editorTheme=='vs-dark')?<BsFillMoonStarsFill/>:<BsFillSunFill/>}
        </div>
        
        <Editor
          defaultLanguage="javascript"
          defaultValue={initialCode}
          // theme ="vs-dark"
          theme = {editorTheme}
          height={'90%'}
          onMount={handleEditorDidMount}
          />
        <button onClick={runCode} className={isRunningCode?"sv-disabled":""} >RUN CODE</button>
      </section>

      <ExerciseConsole excerciseData={exercise.data} logs={solverLogs} isError={solverError}/>
    
    
    
    
  </main>
);
 
}


