export const ExerciseCategory = 
{
    GRAPHS :"Ejercicios sobre grafos",
    DEFAULT : "default"
}

export const ParagraphType = {
    NORMAL : "normal",
    EXAMPLE : "example",
    IMAGE : "image"
}
export const ExerciseData = [
{
    category:ExerciseCategory.GRAPHS ,
    exercises:[
    {
        id:1,
        card:{
            title:"Título del ejercicio 1",
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
            title:"Título del ejercicio 2",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"medium",
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
            title:"titulo 3",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"hard",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },
    {
        id:4,
        card:{
            title:"titulo 4",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },

    ]
},

{
    category:ExerciseCategory.DEFAULT,
    exercises:[
    {
        id:5,
        card:{
            title:"titulo 2",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"medium",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },
    {
        id:6,
        card:{
            title:"titulo 3",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"hard",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },
    {
        id:7,
        card:{
            title:"titulo 4",
            image :"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/langes-1100px-Complete_graph_K7.svg.png",
            dificulty:"easy",
            catgory : ExerciseCategory.GRAPHS
        },
        data:{}
    },

    ]
}
];

