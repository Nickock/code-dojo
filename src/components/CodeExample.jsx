export function CodeExample({lines}){
    return (<>
        <div className="code-example-box">
            {lines.map((line,index)=>
                <div className="code-example-line" key={index}>
                    <span style={{'marginRight':`${20*line[1]}px`}}>{index}</span><p>{line[0]}</p>
                </div>
            )}
        
        </div>
    </>)
}