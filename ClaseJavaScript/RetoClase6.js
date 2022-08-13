/*Reto: Funciones
Necesitamos crear una calculadora, y para ellos debemos hacer las siguientes funciones:
● Suma.
● Resta.
● Multiplicación.
● División (ten en cuenta que si se va a dividir por cero, imprimimos que no se puede dividir por
cero y el resultado será cero).
● Potenciación.*/

//SUMA
function suma(numero1 , numero2){
    return numero1 + numero2;
}
console.log(suma(2,3));

//RESTA
function resta(numero1 , numero2){
    return numero1 - numero2;
}
console.log(resta(15,13));

//MULTIPLICACIÓN
function producto(numero1 , numero2){
    return numero1 * numero2;
}
console.log(producto(18,14));

//DIVISIÓN
function division(numero1, numero2){
    if (typeof numero1 !=== Number || typeof numero2 !){
        console.log('error, ingrese solo valores numéricos');
        return 0;
    }
    if (numero2===0){
        console.log("no se puede dividir por cero");
        return 0;
    } else {
    return numero1 / numero2;
    }
}
console.log(division(3,0));

//POTENCIACIÓN
function potencia(numero1 , numero2){
    return numero1 ** numero2;
}
console.log(potencia(15,3));

/*
También debe ser capaz de dar soluciones a ecuaciones diferenciales (es broma )...
La función debe recibir los parámetros y entregarnos el valor de la operación aritmética.
Para probar vamos a hacer 5 operaciones por cada función.*/

//SUMA

console.log(suma(2,3));

/*Y como plus, debemos validar que los parámetros si cumplan con que sean números. Si pasa algo
diferente como un texto u otro objeto, entonces debemos imprimir el error y devolver cero en ese
caso.*/

/*Vamos a crear una arrow function para pasarla como callback a un .map() que se le aplicará a una lista de strings, está
función tendrá la capacidad de encriptar nuestro lenguaje, y lo que hará es:
1. Primero convertir todo el mensaje a mayúscula.*/

let frases=['Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.','Este es un mensaje super encriptado y solo los mejores podrán leerlo.'];

let mensajeMayusculas = frases.map(frase=>frase.toUpperCase())

/*2. Convertir los siguientes carácteres:
● A -> 4
● S -> 5
● E -> 3
● O -> 0
● G -> 6
● I -> 1
● T -> 7*/

let mensajeEncriptado = mensajeMayusculas.map(string=>string.replace(/A/g,'4'));
let mensajeEncriptado1 = mensajeEncriptado.map(string=>string.replace(/S/g,'5'));
let mensajeEncriptado2 = mensajeEncriptado1.map(string=>string.replace(/E/g,'3'));
let mensajeEncriptado3 = mensajeEncriptado2.map(string=>string.replace(/O/g,'0'));
let mensajeEncriptado4 = mensajeEncriptado3.map(string=>string.replace(/G/g,'6'));
let mensajeEncriptado5 = mensajeEncriptado4.map(string=>string.replace(/I/gi,'1'));
let mensajeEncriptado6 = mensajeEncriptado5.map(string=>string.replace(/Í/gi,'1'));
let mensajeEncriptadoFinal = mensajeEncriptado6.map(string=>string.replace(/T/g,'7'));

/*3. Imprimir en pantalla cada frase encriptada.*/

console.log(mensajeEncriptadoFinal[0]);
console.log(mensajeEncriptadoFinal[1]);

// METODO 2

let frases = ['Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.','Este es un mensaje super encriptado y solo los mejores podrán leerlo.'];

const TextoEncriptado = frases.map(frase=>frase.toUpperCase())


