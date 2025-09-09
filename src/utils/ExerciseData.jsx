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
        cardImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png',
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
                    // [ParagraphType.IMAGE , "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png"],
                    // [ParagraphType.IMAGE , "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png"],
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
            title:"¿Es conexo?",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de 
                textos y los mezcló de tal manera que logró hacer un libro de textos especimen`],
                [ParagraphType.IMAGE,'https://www.luisllamas.es/images/20297/grafo-dirigido.webp'],
                [ParagraphType.IMAGE,'/src/assets/logo.png'],
                [ParagraphType.IMAGE,'/src/assets/logo-min.png'],
                [ParagraphType.NORMAL,`No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual
                al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`],
                [ParagraphType.EXAMPLE,`No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual
                al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`],
                [ParagraphType.NORMAL,`
                    No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual
                al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`],
                [ParagraphType.EXAMPLE,`No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual
                al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`],
                [ParagraphType.NORMAL,`No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual
                al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`],
            ]
        },
        data:{
            signature : "algo",
            initialCode : "function algo(a,b){\n    return a+b;\n}",
            arguments : ["a","b"],
            tests : [
                {arguments : {"a":1,"b":1},result :2},
                {arguments : {"a":1,"b":2},result :3},
                {arguments : {"a":1,"b":3},result :4},
                ],
            hints : ["Esta es una pista tipica , corta sencilla y poco util", "esta es la segunda pista, mas inutil aun"]
        }
    },

    {
        id:2,
        card:{
            title:"¿Es dirigido?",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`ESTE ES EL EJERCICIO 2 `],
                [ParagraphType.NORMAL,`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de 
                textos y los mezcló de tal manera que logró hacer un libro de textos especimen`],
                [ParagraphType.NORMAL,`No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual
                al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`],
                [ParagraphType.EXAMPLE,`No sólo sobrevivió 500 años,
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual
                al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`],
            ]
        },
        data:{
            signature : "algo",
            initialCode : "function algo(arr){\n    return arr.map(v=>v*v)\n}",
            arguments : ["arr"],
            tests : [
                {arguments : {"arr": [1,2,3,4] },result :[1,4,9,16]},
                {arguments : {"arr": [1,2] },result :[1,4]},
                {arguments : {"arr": [1,3] },result :[1,9]},
                ]
        }
    },
    {
        id:3,
        card:{
            title:"Recursión, repaso",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },
    {
        id:4,
        card:{
            title:"Recorrida DFS (recursiva)",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },
    {
        id:5,
        card:{
            title:"Recorrida BFS (iterativa)",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },

    ]
},


];


