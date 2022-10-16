const datos={
    nombre:"Miguel",
    apellido:"Cervantes",
    edad:29,
    eres_desarrollador:"si"
}

mi_edad=datos.edad;

const datos_array=[
    {
    nombre:"Miguel",
    apellido:"Cervantes",
    edad:29,
    eres_desarrollador:true
   },
   {
    nombre:"carlos",
    apellido:"javier",
    edad:25,
    eres_desarrollador:false
   }
]

const lista_ordena = datos_array.sort((a,b)=> b.edad - a.edad );

console.log(lista_ordena);