import {Link} from 'react-router-dom'

export function ExerciseTutorialCard({tutorial}){
    return (
        <Link to={`/tutorial/${tutorial.id}`} className="ex-card ex-card-tutorial">
           <span>{tutorial.title}</span>
           <img src={tutorial.cardImage} alt="imagen-alt"/>
        </Link>
    )
}