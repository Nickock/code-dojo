import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/Tutorial.css'
import { ExerciseData ,ParagraphType } from "../utils/ExerciseData";

export function TutorialPage(){

    const {id} = useParams();
    const TutorialData = ExerciseData.find(category=>category.exercises.find(ex=>ex.id==id)!= null).exercises[0];
    
    return(
        <>
        <section className="tu-container">
            <header className="tu-header">
                <h1>{TutorialData.title}</h1>
                <h4>{TutorialData.subTitle}</h4>
            </header>
            <div className="tu-description">
                {TutorialData.topics.map((topic,index)=>{return(

                <article className="tu-topic" key={index}>
                    <header><h2>{topic.title}</h2></header>
                    <div className="tu-topic-description">
                        {topic.description.map((p,index)=>{
                            switch(p[0]){
                                case ParagraphType.NORMAL : return <p className="tu-topic-paragraph" key={index}>{p[1]}</p>; 
                                case ParagraphType.SUBTITLE : return <h3 className="tu-topic-subTitle" key={index}>{p[1]}</h3>; 
                                case ParagraphType.CODE_EXAMPLE : return <div className="tu-topic-code-example"key={index}>{
                                    p[1].map((line,line_index)=><p key={`ex_${index}_line_${line_index}`}><span>{line_index} </span>{line}</p>)
                                }</div>; 
                                case ParagraphType.LIST : return <ul className="tu-topic-list"key={index}>{
                                    p[1].map((line,line_index)=><li key={`ex_${index}_li_${line_index}`}>{line}</li>)
                                }</ul>; 
                                case ParagraphType.IMAGE : return <img key={index} className="tu-topic-image" src={p[1]} alt="Ejemplo visual" />; 
                                case ParagraphType.IMAGE_LARGE : return <img key={index} className="tu-topic-image-large" src={p[1]} alt="Ejemplo visual" />; 
                                case ParagraphType.CARD : return <div  key={index} className="tu-topic-card"><strong>{p[1]}</strong><p>{p[2]}</p></div>; 
                            }
                        })}
                    </div>
                </article>
                    
                    
                )
                })}
            </div>
            <footer className="tu-footer">
                <p><strong>¿Listo para comenzar?</strong> ¡Tu primer desafío te espera! 💪</p>
                <Link to='/desafios' className="tu-goCode">¡Elige tu desafío!</Link>
            </footer>
        </section>
        </>
    )
}