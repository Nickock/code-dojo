import {Link} from 'react-router-dom'
export function ExerciseCard({id,title,dificulty,image}){
    return (
        
        <Link to={`/code/${id}`} className={`ex-card ex-card-${dificulty}`}>
           <span>{title}</span>
           <img src={image} alt="imagen-alt"/>
        </Link>
    )
}