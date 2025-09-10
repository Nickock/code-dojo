export const ExerciseCategory = 
{
    GRAPHS :"Ejercicios sobre grafos",
    DEFAULT : "default"
}

export const ParagraphType = {
    NORMAL : "normal",
    EXAMPLE : "example",
    CODE_EXAMPLE : "code_example",
    IMAGE : "image",
    IMAGE_LARGE : "image_large",
    CARD : "card",
    SUBTITLE: "subtitle"
}


export const ExerciseData = [
{
    category:ExerciseCategory.GRAPHS ,
    exercises:[
    {
        id:`grafos`,
        isTutorial : true,
        title : " Introducción a los Grafos",
        subTitle: "Aprende los conceptos fundamentales de las estructuras de grafos",
        cardImage: 'src/assets/graphs/ex_img_1.png',
        topics : [
            /*Topico*/{
                title: "¿Qué son los Grafos?",
                description : [
                    [ParagraphType.NORMAL , `Los grafos son una herramienta matemática fundamental que permite representar diversas situaciones de la vida real donde existen conexiones entre elementos. Desde redes sociales hasta sistemas de transporte, los grafos están en todas partes.`],
                    // [ParagraphType.CARD ,"Titulo tarjeta" ,"Tarjeta de topico 1 Tarjeta de topico 1 Tarjeta de topico 1 "],
                ],
            },
            /*Topico*/{
                title: "Conceptos Básicos",
                description : [
                    [ParagraphType.SUBTITLE,'Estructura fundamental'],
                    [ParagraphType.NORMAL , "Un grafo G = (V, E) consiste en V: Conjunto de vértices o nodos (puntos) E: Conjunto de aristas o edges (conexiones entre puntos)"],
                    [ParagraphType.IMAGE , "/src/assets/graphs/tutorial/genericGraph.png"],
                    [ParagraphType.IMAGE , "/src/assets/graphs/tutorial/genericDGraph.png"],
                ],
            },
            /*Topico*/{
                title: "Tipos de aristas",
                description : [
                    [ParagraphType.CARD,'No dirigidas','Conexión bidireccional (como una carretera de doble sentido)'],
                    [ParagraphType.CARD,'Dirigidas','Conexión unidireccional (como una calle de un solo sentido)'],
                ],
            },
            /*Topico*/{
                title: "Algunos términos",
                description : [
                    
                    [ParagraphType.CARD,'Camino','Secuencia de aristas que conectan dos nodos.Ejemplo: A → B → C → D es un camino de A a D'],
                    [ParagraphType.CARD,'Grafo Conexo','Un grafo es conexo cuando existe un camino entre cualquier par de nodos.'],
                    [ParagraphType.CARD,'Componente Conexa','Subsección máxima del grafo que es conexa. Ejemplo: Un grafo con 3 islas desconectadas tiene 3 componentes conexas'],
                    // [ParagraphType.IMAGE , "src/assets/graphs/ex_img_1.png"],
                    // [ParagraphType.IMAGE , "src/assets/graphs/ex_img_1.png"],
                    [ParagraphType.IMAGE_LARGE , "/src/assets/graphs/tutorial/basics_1.png"],

                    
                ],
            },
            /*Topico*/{
                title: "Representación de grafos",
                description : [
                    [ParagraphType.SUBTITLE,'1. Matriz de Adyacencia'],
                    [ParagraphType.NORMAL,'Array bidimensional donde matriz[i][j] = true si existe arista de i a j.'],
                    [ParagraphType.CODE_EXAMPLE,[
                        "// Grafo con 4 nodos: 0, 1, 2, 3",                            
                        "const matrizAdyacencia = [",                            
                        "[false, true,  true,  false ],",                            
                        "[true,  false, false, true ],",                            
                        "[false, false, false, true],",                        
                        "[true, false, false, false] ",                        
                        "];",
                        "//Ver figura 1 "                        
                    ]],
                    [ParagraphType.IMAGE_LARGE , "/src/assets/graphs/tutorial/figure_1.png"],
                    [ParagraphType.SUBTITLE,'2. Lista de Adyacencia'],
                    [ParagraphType.NORMAL,'Array de listas donde lista[i] contiene los nodos adyacentes a i.'],
                    [ParagraphType.CODE_EXAMPLE,[
                        "// Mismo grafo en lista de adyacencia",                            
                        "const listaAdyacencia = [",                            
                        "[1, 2],",                            
                        "[0,3],",                            
                        "[3],",                        
                        "[0] ",                        
                        "];",
                        "//Ver figura 1 "                        
                    ]],
                    
                    [ParagraphType.NORMAL,"Notar que el ejemplo anterior es un grafo dirigido, se modifica el mismo para transformarlo en no dirigido"],
                    
                    [ParagraphType.CODE_EXAMPLE,[
                        "const listaAdyacencia_2 = [",                            
                        "[1, 2,3],",                            
                        "[0,3],",                            
                        "[0,3],",                        
                        "[0,1,2] ",                        
                        "];",
                        "//Ver figura 2 "                        
                    ]],
                    [ParagraphType.IMAGE_LARGE , "/src/assets/graphs/tutorial/figure_2.png"],
                    
                ],
            },
            /*Topico*/{
                title: "Aplicaciones prácticas",
                description : [
                    
                    [ParagraphType.CARD,'Red social','Podemos modelar las personas como nodos, las aristas como relaciones de amistad (no dirigidas). Un grupo de amigos sería una componente conexa.'],
                    [ParagraphType.CARD,'Sistema de Vuelos','Modelamos los aereopuertos como los nodos, y los viajes disponibles como las aristas (aristas dirigidas, pues puede existir un viaje de A hasta B pero no de B a A).'],
                   
                ],
            },

             /*Topico*/{
                title: "¿Que más podrás practicar?",
                description : [
                    [ParagraphType.LIST,[
                        'Formas de recorrida de grafos DFS, BFS',
                        'Ciclos',
                        'Grafos bipartitos',
                        'Grafos ponderados',
                        'Caminos de menor costo Dijkstra',
                        '¿Qué es un árbol?',
                        'Árboles de recubrimiento de costo minimo',
                        'Y mucho más ...',
                    ]],
                ],
            },
        ]
    },
        {
        id:1,
        card:{
            title:"¿Es dirigido?",
            image :"src/assets/graphs/ex_img_1.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`Como primer desafío nos asignan la tarea de determinar si un grafo es dirigido o no.`],
                [ParagraphType.NORMAL,`Normalmente es un dato que viene dado, así como la estructura del grafo.`],
                [ParagraphType.NORMAL,`Esta vez, la persona encargada de crear los grafos olvidó etiquetar cuales grafos de los que creó son dirigidos y cuales no, 
                    aunque si recuerda que representó cada grafo utilizando una matriz de adyacencia.`],
                [ParagraphType.NORMAL,`Tu tarea es implementar la funcion "esDirigido(G)", que retorna un booleano que indica si el grafo G es dirigido o no.`],
                [ParagraphType.EXAMPLE,`G tiene n nodos, donde n = G.lenght, que a su vez cumple n = G[i].length para todo i=0 ... n-1.`],
                [ParagraphType.CODE_EXAMPLE,{lines:[
                    `//Ejemplo:`,
                    `const G = [`,
                    `[false,true,false]`,
                    `[true,false,true]`,
                    `[false,true,false]`,
                    `]`,
                ]}],
                [ParagraphType.NORMAL,`En el ejemplo , G es un grafo dirigido , la respuesta esperada es true.`],
                [ParagraphType.NORMAL,`Además, G no tiene lazos (arista que conecta un nodo consigo mismo),y esta condición es cierta para todos los grafos en este desafío.`],
                
            ]
        },
        data:{
            signature : "esDirigido",
            initialCode : "function esDirigido(G){\n//Tu codigo aquí!\n\n}",
            arguments : ["G"],
            tests : [
                {arguments : {"G":[ [false,true],
                                    [true,false]] },result :true},
                 {arguments : {"G":[[false,true,false],
                                    [true,false,true],
                                    [false,true,false]]},result :true},
                {arguments : {"G":[
                                    [false,true,true],
                                    [true,false,true],
                                    [true,false,false],
                                    ]},result :false},
                {arguments : {"G":[
                                    [false,true,true,true],
                                    [true,false,true,true],
                                    [true,false,false,true],
                                    [true,false,true,false],
                                    ]},result :false},
                ],
            hints : [
                "Que un grafo sea dirigido, significa que para cualquier par de nodos se cumple que : se transitar desde A hasta B si y solo si se puede transitar desde B hasta A.",
                "Un grafo es dirigido, si su matriz de adyacencia es simétrica.",
                ]
        }
    },
    {
        id:2,
        card:{
            title:"¿Es conexo?",
            image :"src/assets/graphs/ex_img_1.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`En este desafío nos asignan la tarea de determinar si un grafo es conexo o no.`],
                [ParagraphType.NORMAL,`Decimos que un grafo es conexo, si existe al menos un camino entre dos nodos distintos cualesquiera`],
                [ParagraphType.NORMAL,`Los grafos son representados mediante listas de adyacencia, y son recibidas como un parámetro de nombre G.`],
                [ParagraphType.EXAMPLE,`G tiene n nodos, donde n = G.lenght`],
                [ParagraphType.CODE_EXAMPLE,{lines:[
                    `//Ejemplo:`,
                    `const G = [ [1] , [0] ]`,
                ]}],
                [ParagraphType.NORMAL,`En el ejemplo , es un grafo que contiene dos nodos, 0 y 1. Como G[0] = [1] , significa que los nodos adyacentes a 0 son [1] y los adyacentes a  1 son G[1] = [1].`],
                [ParagraphType.NORMAL,`Este ejemplo es un nodo conexo, por lo que la respuesta esperada es true`],
                
            ]
        },
        data:{
            signature : "esConexo",
            initialCode : "function esConexo(G){\n//Tu codigo aquí!\n\n}",
            arguments : ["G"],
            tests : [
                {arguments : {"G":[[]]},result :true},
                {arguments : {"G":[[],[]]},result :false},
                {arguments : {"G":[[1],[0]]},result :true},
                {arguments : {"G":[[1,2],[0,2],[0,1]]},result :true},
                {arguments : {"G":[[1,2],[0,2],[0,1,6],[4,6],[3],[6],[2,3,5]]},result :true},
                {arguments : {"G":[[1,2],[0,2],[0,1,6],[4,6],[3],[],[2,3]]},result :false},
                ],
            hints : ["Esta es una pista tipica , corta sencilla y poco util", "esta es la segunda pista, mas inutil aun"]
        }
    },
  

    {
        id:3,
        card:{
            title:"Recursión, repaso",
            image :"src/assets/graphs/ex_img_2.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`La recursión es una herramienta muy versátil y potente. Permite crear soluciones a un problema, a partir de soluciones de instancias más pequeñas del mismo problema.`],
                [ParagraphType.NORMAL,`Un ejemplo de aplicación es la sucesión de Fibonacci. Esta sucesión cumple una propiedad particular y es que un término cualquiera de la sucesión está definido en función de términos anteriores a este. Su definición es la siguiente:`],
                [ParagraphType.CODE_EXAMPLE,{lines:[
                    `Fibo(0) = 0`,
                    `Fibo(1) = 1 `,
                    `Fibo(n) = Fibo(n-1) + Fibo(n-2) para n >= 2`,
                ]}],
                [ParagraphType.NORMAL,`Supongamos que queremos el término número 3. Aplicando la definición, tenemos que:`],
                [ParagraphType.EXAMPLE,`Fibo(3) = Fibo(3-1) + Fibo(3-2) = Fibo(2) + Fibo(1)`],
                [ParagraphType.NORMAL,`Aquí es donde la recursión juega su papel, pues para calcular Fibo(3), nos basamos en la solución de una instancia menor del mismo problema. En este caso, esas soluciones serían Fibo(2) y Fibo(1).`],
                [ParagraphType.NORMAL,`¿Qué sigue? Pues calcular Fibo(1) y Fibo(2). Análogamente, aplicamos la definición:`],
                [ParagraphType.EXAMPLE,`Fibo(2) = Fibo(2-1) + Fibo(2-2) = Fibo(1) + Fibo(0)`],
                [ParagraphType.NORMAL,'¿Cuándo parar? Como cada llamada recursiva se hace con un problema de menor tamaño en cada paso, es natural llegar a un punto en donde el problema no puede reducirse más, pero al ser tan pequeño tenemos la ventaja de que su solución es trivial, o muy sencilla.'],
                [ParagraphType.NORMAL,'En este caso, Fibo(1) no se puede reducir más, pues si aplicamos la definición'],
                [ParagraphType.EXAMPLE,'Fibo(1) = Fibo(0) + Fibo(-1)'],
                [ParagraphType.NORMAL,' y esta sucesión está definida únicamente en los números naturales, por lo que Fibo(-1) no tiene sentido. Por eso, definimos: Fibo(0) = 1 y Fibo(1) = 1'],
                [ParagraphType.NORMAL,'A estas definiciones se les llaman "casos base", en cambio, Fibo(n) = Fibo(n-1) + Fibo(n-2) es llamado "paso recursivo".'],
                [ParagraphType.NORMAL,'Con esta información, implmenta la función Fibo(n), puedes asumir como precondición que n es un numero natural'],
            ]
        },
        data:{
            signature : "fibo",
            initialCode : "function fibo(n){\n//Escribe tu codigo aquí \n\nreturn 0;\n\n}",
            arguments : ["n"],
            tests : [
                {arguments : {"n":0},result :0},
                {arguments : {"n":1},result :1},
                {arguments : {"n":5},result :5},
                {arguments : {"n":8},result :21},
                {arguments : {"n":7},result :13},
                {arguments : {"n":2},result :1},
                ],
            // hints : [
            //     "Pista 1",
            //     "Piasta 2",
            //     ],
            solution : [
                ["function fibo(n){",0],
                ["if(n<2){",1],
                ["return n;",2],
                ["}else{",1],
                ["return fibo(n-1)+fibo(n-2);",2],
                ["}",1],
                ["}",0]
            ]
        }
    },
    {
        id:4,
        card:{
            title:"Recorrida DFS (recursiva)",
            image :"src/assets/graphs/ex_img_1.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },
    {
        id:5,
        card:{
            title:"Recorrida BFS (iterativa)",
            image :"src/assets/graphs/ex_img_1.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },

    ]
},


];


const ejTemplate = {
        id:'1',
        card:{
            title:"TituloCard",
            image :"src/assets/imageUrl",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`ParrafoNormal`],
                [ParagraphType.EXAMPLE,`Parrafo destacado`],
                [ParagraphType.CODE_EXAMPLE,{lines:[
                    `linea`,
                    `linea`,
                ]}],
                [ParagraphType.IMAGE,`URL IMAGE`],
                
            ]
        },
        data:{
            signature : "Nombre funcion",
            initialCode : "//function ...",
            arguments : ["a"],
            tests : [
                {arguments : {"a":3 },result :true},
                 {arguments : {"a":4},result :true},
                ],
            hints : [
                "Pista 1",
                "Piasta 2",
                ],
            solution : [
                //['lineaCoridgo', numeroIndent]
                ["linea codigo solucion del ejercicio",0],
                ["linea codigo solucion del ejercicio",0],
            ]
        }
    };