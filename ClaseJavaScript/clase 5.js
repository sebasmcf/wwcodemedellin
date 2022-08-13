let animal = 'ave';
//console.log(animal);
if(animal=='perro'){
    const nombre='tito';
    console.log(animal);
} else if(animal=='gato'){
    console.log(animal);
}else{{
    console.log('el animal no puede entrar')
}}

//console.log(animal);
//

let carros = ['Renault' , 'Chevrolet' , 'Mazda'];
let modelos = [20 , 21 , 22];
const datos = ['master', 20, true];
const informacionCarros = [carros,modelos];

//console.log(carros[0][0][0]); imprime letras
for(const carro of carros){
    console.log(carro);/*escribe cada arreglo*/
}
for(let i = 0;i<carros.length;i++){
    console.log(i)
}

const estudiante = {
    nombre: 'Sebas','calle'
    edad: 24,
    //saludo: function(){
    //    console.log('Hola clase');
    //}
}

const auto = {
    modelo: 2023,
    marca: 'Mercedes',
    'costo-beneficio': true /*si caracter especial la KEY va entre comillas*/
    //encender: function(){
    //    console.log('el carro encendio')
    //},
    //apagar: function(){
    //    console.log('el carro se apago')
    //}
};

console.log(auto.modelo); /* puedo llamar atributos*/

const numeros = [1,2,3,4,5];

const resultados = numeros.map(function (numero){
    const resultado = numero ** 2;
    return resultado;
})

console.log(resultados);

//mostrar impares
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const impares = numeros.filter(function (numero){
    if (numero % 2 !== 0){
    return resultado;
    }
})

console.log(impares);