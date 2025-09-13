import '../css/Tools.css'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { GraphVisualizer } from '../components/GraphVisualizer';
export function ToolsPage(){
    const {tool} = useParams();
   
     switch(tool){
            case 'visualizadorGrafos'  :  return <GraphVisualizer/>
            default : return(
            <article className="tls-grid">
                <section className="tls-tool-card">
                    <Link to="/herramientas/visualizadorGrafos">
                        <h3>Visualizador de grafos</h3>
                        <img src="src/assets/graphs/ex_img_1.png" alt="" />
                    </Link>
                </section>
                <section className="tls-tool-card">
                    <Link to="/herramientas/visualizadorGrafos">
                        <h3>Visualizador de grafos</h3>
                        <img src="src/assets/graphs/ex_img_1.png" alt="" />
                    </Link>
                </section>
            </article>
        )
        }
    
    
}