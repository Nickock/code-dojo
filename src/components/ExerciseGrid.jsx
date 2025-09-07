import {ExerciseCard} from './ExerciseCard'

export function ExerciseGrid({title,exercises}){
    return (
    <section className="exercises">
        <h1 className="ex-grid-title">{title}</h1>
        <section className="ex-grid">
        {
            exercises.map(ex=> <ExerciseCard key={ex.id} id={ex.id} dificulty = {`${ex.card.dificulty}`} title={`${ex.card.title}`} image={`${ex.card.image}`}/>)
        }
        </section>
    </section>
)
}