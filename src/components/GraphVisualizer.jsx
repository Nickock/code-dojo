import { useRef , useState , useEffect } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
export function GraphVisualizer(){

    const test = [
    {
        "data": {
            "id": "0",
            "label": "Nodo:0"
        }
    },
    {
        "data": {
            "id": "1",
            "label": "Nodo:1"
        }
    },
    {
        "data": {
            "id": "1_2",
            "source": "1",
            "target": "2"
        },
        "renderedPosition": {
            "x": 20,
            "y": 20
        }
    },
    {
        "data": {
            "id": "2",
            "label": "Nodo:2"
        }
    },
    {
        "data": {
            "id": "2_0",
            "source": "2",
            "target": "0"
        },
        "renderedPosition": {
            "x": 20,
            "y": 20
        }
    },
    {
        "data": {
            "id": "2_3",
            "source": "2",
            "target": "3"
        },
        "renderedPosition": {
            "x": 20,
            "y": 20
        }
    },
    {
        "data": {
            "id": "3",
            "label": "Nodo:3"
        }
    },
    {
        "data": {
            "id": "4",
            "label": "Nodo:4"
        }
    },
    {
        "data": {
            "id": "4_5",
            "source": "4",
            "target": "5"
        },
        "renderedPosition": {
            "x": 20,
            "y": 20
        }
    },
    {
        "data": {
            "id": "5",
            "label": "Nodo:5"
        }
    },
    {
        "data": {
            "id": "5_4",
            "source": "5",
            "target": "4"
        },
        "renderedPosition": {
            "x": 20,
            "y": 20
        }
    }
    ]

    const cyStyles = {
        directed :[
	    {
	      selector: 'node',
	      style: {
	        'label': 'data(id)'
	      },
	    },
		{
	      selector: 'edge',
	      style: {
	        'width': 3,
	        'line-color': '#ccc',
	        'target-arrow-color': 'black',
	        'target-arrow-shape': 'triangle',
	        'curve-style': 'bezier'
	      }
	    },
	    ],
        linear :[
	    {
	      selector: 'node',
	      style: {
	        'label': 'data(id)'
	      },
	    },
		{
	      selector: 'edge',
	      style: {
	        'width': 3,
	        'line-color': '#ccc',
	        'target-arrow-color': 'black',
	        'target-arrow-shape': 'none',
	        'curve-style': 'straight'
	      }
	    },
	]
    }

    const [cyElements , setCyElements] = useState(test);
    const [cyStyle , setCyStyle] = useState(cyStyles.linear);
    const [parserError , setParserError] = useState(false);
    const cyRef = useRef();

    const visualizeGraph = (e)=>{
        e.preventDefault();
        const graphInput = document.querySelector("#inputGraph").value;
        const isDirected = document.querySelector("#isDirected").checked;
        if(isDirected){
            setCyStyle(cyStyles.directed)
        }else{
            setCyStyle(cyStyles.linear)
        }
        try{
            const elements = parseGraphFromLists(JSON.parse(graphInput),isDirected);
            setCyElements(elements);   
            setParserError(false);
        }catch{
            setCyElements([]);   
            setParserError(true);
        }
    }

    useEffect(() => {
        if (cyRef.current) {
            cyRef.current.layout({ name: 'circle' }).run();
        }
    }, [cyElements]);


    return (
        <section className="tls-graphVisualizer-container">
            <form className="tls-graphVisualizer-options" id="pepe">
                <h2>Introduce el grafo</h2>
                <label htmlFor="inputGraph">Input</label>
                <textarea name="inputGraph" id="inputGraph" rows={5}></textarea>
                <label htmlFor="inputGraph">
                    Es dirigido?
                    <input type="checkbox" name="isDirected" id="isDirected" />
                </label>
                {parserError && <strong> ERROR AL strongARSEAR</strong>}
                <button onClick={(e)=>{ visualizeGraph(e)}}>Visualizar</button>
            </form>

            <CytoscapeComponent cy={(cy)=>cyRef.current=cy}
                layout={{name:"circle"}}
                elements ={cyElements}
                style={ { width: '600px', height: '600px',background:'white' } }
                stylesheet={cyStyle}
                />
        </section>

    )
}


function parseGraphFromLists(graphInput){
	let elements =[];

	graphInput.forEach((listaNodo,nodo_index)=>{
		elements.push({data: { id: nodo_index , label:`Nodo:${nodo_index}`}});
		
		listaNodo.forEach(ady=>{
            elements.push({
                data: { id: `${nodo_index}_${ady}`, source: nodo_index, target: ady },
                renderedPosition: { x: 20, y: 20 }
            });

		})

	})

	return elements;
}