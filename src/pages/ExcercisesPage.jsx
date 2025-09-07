
import {ExerciseGrid} from '../components/ExerciseGrid'
import {ExerciseData} from '../utils/ExerciseData'

export function ExcercisePage(){
    
    return(
       <>
        {ExerciseData.map((section,index) => {
            return <ExerciseGrid key={index} title={section.category} exercises={section.exercises}/>
        })}
       
       </>
);
}