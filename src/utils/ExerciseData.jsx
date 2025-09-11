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
    //Tutorial 0 Conceptos basicos
    {
        id:`grafos`,
        isTutorial : true,
        title : " Introducción a los Grafos",
        subTitle: "Aprende los conceptos fundamentales de las estructuras de grafos",
        cardImage: 'src/assets/graphs/ex_img_6.png',
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
                    [ParagraphType.IMAGE_LARGE , "/src/assets/graphs/tutorial/basics_1.png"],

                    
                ],
            },
            /*Topico*/{
                title: "Representación de grafos",
                description : [
                    [ParagraphType.SUBTITLE,'1. Matriz de Adyacencia'],
                    [ParagraphType.NORMAL,'Array bidimensional donde matriz[i][j] = true si existe arista de i a j.'],
                    [ParagraphType.CODE_EXAMPLE,[
                        ["// Grafo con 4 nodos: 0, 1, 2, 3",0],                            
                        ["const matrizAdyacencia = [",0],                            
                        ["[false, true,  true,  false ],",1],                            
                        ["[true,  false, false, true ],",1],                            
                        ["[false, false, false, true],",1],                        
                        ["[true, false, false, false] ",1],                        
                        ["];",0],
                        ["//Ver figura 1 ",0],                        
                    ]],
                    [ParagraphType.IMAGE_LARGE , "/src/assets/graphs/tutorial/figure_1.png"],
                    [ParagraphType.SUBTITLE,'2. Lista de Adyacencia'],
                    [ParagraphType.NORMAL,'Array de listas donde lista[i] contiene los nodos adyacentes a i.'],
                    [ParagraphType.CODE_EXAMPLE,[
                        ["// Mismo grafo en lista de adyacencia",0],                            
                        ["const listaAdyacencia = [",0],                            
                        ["[1, 2],",1],                            
                        ["[0,3],",1],                            
                        ["[3],",1],                        
                        ["[0] ",1],                        
                        ["];",0],
                        ["//Ver figura 1",0],                        
                    ]],
                    
                    [ParagraphType.NORMAL,"Notar que el ejemplo anterior es un grafo dirigido, se modifica el mismo para transformarlo en no dirigido"],
                    
                    [ParagraphType.CODE_EXAMPLE,[
                        ["const listaAdyacencia_2 = [",0],                            
                        ["[1, 2,3],",1],                            
                        ["[0,3],",1],                            
                        ["[0,3],",1],                        
                        ["[0,1,2] ",1],                        
                        ["];",0],
                        ["//Ver figura 2",0],                        
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
        ],
        footer:['¿Listo para comenzar? ¡Tu primer desafío te espera! 💪','/code/1']
    },

    //EsDirigido?
    {
        id:1,
        card:{
            title:"¿Es dirigido?",
            image :"src/assets/graphs/ex_img_5.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`Como primer desafío nos asignan la tarea de determinar si un grafo es dirigido o no.`],
                [ParagraphType.NORMAL,`Normalmente es un dato que viene dado, así como la estructura del grafo.`],
                [ParagraphType.NORMAL,`Esta vez, la persona encargada de crear los grafos olvidó etiquetar cuales grafos de los que creó son dirigidos y cuales no, 
                    aunque si recuerda que representó cada grafo utilizando una matriz de adyacencia.`],
                [ParagraphType.NORMAL,`Tu tarea es implementar la funcion "esDirigido(G)", que retorna un booleano que indica si el grafo G es dirigido o no.`],
                [ParagraphType.EXAMPLE,`G tiene n nodos, donde n = G.lenght, que a su vez cumple n = G[i].length para todo i=0 ... n-1.`],
                [ParagraphType.CODE_EXAMPLE,[
                    ['//Ejemplo:',0],
                    ['const G = [',0],
                    ['[false,true,false]',1],
                    ['[true,false,true]',1],
                    ['[false,true,false]',1],
                    [']',0],
                ]],
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
                ],
            solution: [
                ["function esDirigido(G){",0],
                ["for(let i = 0 ; i<G.length;i++){",1],
                ["for(let j = 0 ; j<i ; j++){",2],
                ["if(G[i][j] != G[j][i]) return false;",3],
                ["}",2],
                ["}",1],
                ["return true;",0],
                ["}",0],
            ]
        }
    },
    //Recursión, repaso
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
                [ParagraphType.CODE_EXAMPLE,[
                    ['Fibo(0) = 0',0],
                    ['Fibo(1) = 1 ',0],
                    ['Fibo(n) = Fibo(n-1) + Fibo(n-2) para n >= 2',0],
                ]],
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
    //Tutorial 1 RecorridaEnGrafos
    {
        id:`recorridaEnGrafos`,
        isTutorial : true,
        title : "Recorrida sobre grafos",
        subTitle: "Como recorrer grafos y su implementación",
        cardImage: 'src/assets/graphs/ex_img_7.png',
        topics : [
            /*Topico*/{
                title: "Introducción",
                description : [
                    [ParagraphType.NORMAL , 'Has aprendido la estructura que rige los grafos, pero ¿cómo accedemos a su información?'],
                    [ParagraphType.NORMAL , 'Existen dos maneras de recorrer un grafo: recorrida en profundidad o DFS (Depth First Search) y recorrida en amplitud o BFS (Breadth First Search). Ambas recorridas tienen sus particularidades, por lo que no hay una que sea mejor que la otra. Lo importante es entender las bases para así poder aplicar una u otra en función de nuestras necesidades.'],
                    [ParagraphType.NORMAL , 'Cabe recalcar que asumiremos que los grafos son NO dirigidos, pero los conceptos son igualmente aplicables a grafos dirigidos.'],
                ],
            },
            /*Topico*/{
                title: "Recorrida en profundidad",
                description : [
                    [ParagraphType.SUBTITLE,'Síntesis'],
                    [ParagraphType.NORMAL , 'La recorrida en profundidad se basa en tomar una rama del grafo, explorarla lo máximo posible, y una vez no se pueda avanzar más por esa rama, tomar la siguiente rama sin explorar. Esto se repite hasta haber explorado todo el grafo, aunque para ser precisos, hasta haber explorado toda la componente conexa.'],
                    [ParagraphType.NORMAL, 'Para ganar intuición sobre el algoritmo, supongamos que somos un viajante que se encuentra situado en un nodo cualquiera del grafo. Nuestro siguiente paso es decidir hacia qué nodo viajar. Dentro de nuestras posibilidades, tenemos únicamente aquellos nodos que son adyacentes al nodo en el que estamos situados. Una vez elegido el nodo destino, viajamos hasta él.'],
                    [ParagraphType.NORMAL, '¿Qué sigue? Pues elegir un nuevo nodo hacia el cual viajar, pero ¡ten cuidado! Si vuelves a elegir el mismo nodo desde el que partiste, podrías quedar atrapado en un bucle infinito, viajando desde el nodo inicial hasta otro nodo y viceversa. Entonces, ¿qué podemos hacer para evitar reelegir nodos ya visitados? ¡Fácil! Cada vez que visitemos un nodo, lo marcaremos como visitado. Así, a la hora de elegir un nuevo nodo para visitar, dentro de las posibilidades, solo tomaremos en cuenta aquellas que aún no fueron visitadas.'],
                    [ParagraphType.NORMAL , 'Para el algoritmo, nos serviremos de una lista auxiliar a la que llamaremos explorado. Inicialmente, definiremos explorado[v] = false para todo nodo v del grafo, y actualizaremos a explorado[v] = true cuando exploremos el nodo v.'],
                    [ParagraphType.NORMAL , 'Bien, repetiremos este proceso todo lo que se pueda, pero ¿qué hacer cuando se llegue a un nodo tal que no tenga nodos adyacentes excepto el nodo desde el cual llegamos a él?'],
                    [ParagraphType.NORMAL , '¿Recuerdas que solo tomamos una opción por nodo para visitar? Pues ¡es hora de ver las otras opciones! Volveremos sobre nuestros pasos hasta encontrar un nodo tal que exista un nodo adyacente a él y que aún no fue explorado, y partiremos nuestro nuevo camino desde allí.'],
                    [ParagraphType.SUBTITLE , "Algoritmo"],
                    [ParagraphType.NORMAL, 'Por la naturaleza del razonamiento, vamos a implementar el algoritmo de manera recursiva:'],
                    [ParagraphType.CODE_EXAMPLE,[
                        ["function RecorridaDFS(G,s){",0],
                        ["let explorados = new Array(G.length).fill(false);",1],
                        ["explorados[s] = true;",1],
                        ["",1],
                        ["function DFS(v){",1],
                        ["explorados[v] = true;",2],
                        ["G[v].forEach(adyacente=>{",2],
                        ["if(explorados[adyacente] == false){",3],
                        ["DFS(adyacente);",4],
                        ["}",3],
                        ["});",2],
                        ["}",1],
                        ["DFS(s);",1],
                        ["}",0],
                        
                    ]],
                    [ParagraphType.LIST , [
                        'Este algoritmo asume como precondición que G está representado por listas de adyacencias',
                        'También asume que s es un nodo válido',
                        'La recorrida DFS no es única para un grafo, depende del nodo inicial y del orden en que se eligen los nodos adyacentes (línea 6)',
                    ]],
                    [ParagraphType.EXAMPLE,'En la siguiente figura se ilustra la ejecución de RecorridaDFS(G, 0).'],
                    [ParagraphType.IMAGE_LARGE,'/src/assets/graphs/tutorial/DFS.gif'],
                ],
            },
            /*Topico*/{
                title: "Recorrida en amplitud",
                description : [
                    [ParagraphType.NORMAL,'EXPLICAR BFS'],
                ],
            },
            
            /*Topico*/{
                title: "Aplicaciones prácticas",
                description : [
                    [ParagraphType.NORMAL, "DAR APLICACIONES"]                    
                   
                ],
            },
            
        ],
        footer:['¿Listo para comenzar? ¡Tu primer próximo te espera! 💪','/code/2']
    },

    //EsConexo?
    {
        id:2,
        card:{
            title:"¿Es conexo?",
            image :"src/assets/graphs/ex_img_4.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS,
            description:[
                [ParagraphType.NORMAL,`En este desafío nos asignan la tarea de determinar si un grafo es conexo o no.`],
                [ParagraphType.NORMAL,`Decimos que un grafo es conexo, si existe al menos un camino entre dos nodos distintos cualesquiera`],
                [ParagraphType.NORMAL,`Los grafos son representados mediante listas de adyacencia, y son recibidas como un parámetro de nombre G.`],
                [ParagraphType.EXAMPLE,`G tiene n nodos, donde n = G.lenght`],
                [ParagraphType.CODE_EXAMPLE,[
                    [`//Ejemplo:`,0],
                    [`const G = [ [1] , [0] ]`,0],
                ]],
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
            hints : [
                "Si un grafo es conexo, entonces tiene una única componente conexa.",
                "Recuerda que DFS recorre una componente conexa por completo.",
                "La lista 'explorados' puede ser útil para saber si todos los nodos fueron explorados o no."],
            solution:[
                ["function esConexo(G){",0],
                ["let explorados = new Array(G.length).fill(false);",1],
                ["explorados[0] = true;",1],
                ["",1],
                ["function DFS(v){",1],
                ["explorados[v] = true;",2],
                ["G[v].forEach(adyacente=>{",2],
                ["if(explorados[adyacente] == false){",3],
                ["DFS(adyacente);",4],
                ["}",3],
                ["});",2],
                ["}",1],
                ["DFS(0);",1],
                ["return !explorados.some(v=>!v)",1],
                ["}",0],
                        
            ],
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
                [ParagraphType.CODE_EXAMPLE,[
                    //linea, index
                    [`linea`,0],
                    [`linea`,0],
                ]],
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