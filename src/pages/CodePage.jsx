import { useParams } from "react-router-dom";
import { ExerciseSolver } from "../components/ExerciseSolver"
import { ExerciseData } from "../utils/ExerciseData";
export function CodePage(){
    const {id} = useParams();
    let exercise;
    ExerciseData.find(data=> { exercise =  data.exercises.find(exercise=> exercise.id == id) ; return exercise});
    return(
       <>
        {exercise && <ExerciseSolver exercise={exercise}/>}
        {!exercise && <h2>404</h2>}
       </>
);
}