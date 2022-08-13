/*Crea función que no reciba parámetros y
muestre siempre 3 mensajes con salto de
línea cada mensaje.*/

function imprimir3Mensajes(){
    console.log('mensaje1');
    console.log('mensaje2');
    console.log('mensaje3');
}

imprimir3Mensajes() 
imprimir3Mensajes()

/*Una funcion que reciba un nombre como parametro y que siempre se presente en pantalla. Ej. Hola, soy Sebas*/

function presentarse(nombre){
    console.log('Hola, soy ' + nombre);
}

presentarse('Sebas');

/*Una función que reciba dos números y que devuelva el valor del producto entre ellos.*/

function producto(numero1 , numero2){
    return numero1 * numero2;
}
const resultado = producto(4,5);
console.log(resultado);





//ARROW FUNCTION no accede a su propio contexto

let suma = (a,b) => {
    return a+b;
}

let resta = (a,b)=> a-b;

//

const numeros = [1,2,3,4];

/* const resultado = numeros.map((numero)=>{
    const prod = numero*2;
    return prod +2;
});*/

const resultado = numeros.map(multiplicador)
function multiplicador(numero){
    return numero*2;
}
console.log (resultado);

//callback: cuando una funcion recibe como parametro otra funcion
//_________________________________________________________________________________________________________

function empiezaPorVocal(palabra){
    const vocales = ['a','e','i','o','u'];
    return vocales.includes(palabra[0].toLowerCase());
}

const primeraPalabra = 'Adorno';
const segundaPalabra = 'Destornillador'
const terceraPalabra = 'Iglesia'
const cuartaPalabra = 'Aro'

const valor = empiezaPorVocal(primeraPalabra);

const no = ' no empieza por vocal';
const si = ' si empieza por vocal';

if(valor){
    console.log('La palabra ' + primeraPalabra + si);
} else{
    console.log('La palabra ' + primeraPalabra + no);
}

//__________________________________________________________________________________________________________

function categorizar(edad){
    if(edad<11){
        return 'Niñez';
    }
    if(edad>=11 && edad <=18){
        return 'Juventud';
    }
    if(edad>=19){
        return 'Adultez';
    }
} 

const categoria = categorizar(25);
console.log(categoria);