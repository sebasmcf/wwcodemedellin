function uno(nombre,funcion){
    setTimeout(function(){
        console.log(nombre);
        funcion(dos);
    },2000)
}

function dos(){
    console.log('soy el segundo')
}

uno('Juan',dos);
