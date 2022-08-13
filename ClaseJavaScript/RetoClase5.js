/*Reto: Arreglos
1. Declara un array que vamos a llamar “estudiantes” con los siguientes
valores: Ana, Manuela, Raúl, Carolina, María, Antonio, Cristina*/

let estudiantes = [ 'Ana' , 'Manuela' , 'Raúl' , 'Carolina' , 'María' , 'Antonio' , 'Cristina' ]

/*2. Con un ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre empiece por ‘A’.*/

/*for(let i=0;i<estudiantes.length;i++){
    if(estudiantes[i][0]==='A'){
        console.log(estudiantes[i])
    }
}*/

/*3. Con otro ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre tenga más de 6 letras.*/

for(let i=0;i<estudiantes.length;i++){
    if(estudiantes[i].length>6){
        console.log(estudiantes[i])
    }
}

/*Reto: Objetos
1. Declara un objeto que represente una mascota que tenga los siguientes
atributos: nombre, tipo de animal, edad, nombre del dueño y juguetes.*/

const mascotaPreferida = {
    nombre: 'Bruno',
    animal: 'Perro',
    edad: '10 años',
    dueño: 'Ruben',

/*2. El atributo juguetes debe contener un arreglo de valores que hagan
referencia a todos los juguetes de la mascota.*/

    juguetes: ['Pelota','Hueso','Zapato']
}

/*3. Crea 2 mascotas más.*/

const mascotaNueva = {
    nombre: 'Pepe',
    animal: 'Gato',
    edad: '2 meses',
    dueño: 'Jose',
    juguetes: ['Ratón','Pluma','Láser','Cola']
}
const mascotaChiquita = {
    nombre: 'Oscar',
    animal: 'Pez',
    edad: '1 año',
    dueño: 'Juan',
    juguetes: ['Burbujas','Espejo','Aro']
}

/*4. Imprime en consola los nombres de las 3 mascotas con el nombre de su
dueño.
Ej: Ayudante de Santa es la mascota de Homero Simpson.*/

//Opción 1
/*console.log(mascotaPreferida.nombre + ' es la mascota de ' + mascotaPreferida.dueño + ', ' + mascotaNueva.nombre + ' es la mascota de ' + mascotaNueva.dueño + ', ' + mascotaChiquita.nombre + ' es la mascota de ' + mascotaChiquita.dueño)*/

let mascotas = [mascotaPreferida,mascotaNueva,mascotaChiquita];

//Opción 2
for(let i=0; i<mascotas.length; i++){
    console.log(mascotas[i].nombre + ' es la mascota de ' + mascotas[i].dueño)
}

//Opción 3
for(let mascota of mascotas){
    console.log(mascota.nombre + ' es la mascota de ' + mascota.dueño);
}


/* Reto: Métodos del Array
1. Declara un array que tenga los números del 1 al 30, utilizando un método
del array.´*/

//const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

let numeros = [];
for(let i=1; i<31; i++){
    numeros.push(i)
}
/*console.log(numeros)*/

/*2. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 3.*/


/*const multiplosDeTres = []

numeros.forEach(function(numero){
    if (numero % 3 === 0){
        multiplosDeTres.push(numero);
    }
})

console.log (multiplosDeTres);*/


/*3. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 5.*/

/*const multiplosDeCinco = [];

numeros.forEach(function(numero){
    if (numero % 5 === 0){
        multiplosDeCinco.push(numero);
    }
})

console.log (multiplosDeCinco);*/

/*4. Debes aplicar un método para crear un nuevo arreglo que contenga el
valor de cada número multiplicado por 2.*/

const resultados = numeros.map(function (numero){
    const resultado = numero * 2;
    return resultado;
})

console.log(resultados);

/*5. Declara un array que tenga valores de diferentes tipos de datos, y utiliza
un método que nos diga si todos los tipos de datos son iguales o no.*/

const datosPersonales = ['Juan', 'Gomez', 23 , true];

let igualTipo = datos.every((dato)=> typeof datos [0] === typeof dato);

console.log('El tipo de datos es igual: ' + igualTipo); 