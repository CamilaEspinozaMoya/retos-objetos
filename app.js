// Ejercicio 1
/*
Escribe una función llamada "addArrayProperty(obj, key, array)".

Dado un objeto, una clave y un array, "addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada, con su valor establecido en el array dado.

Ejemplo de entrada:

var myObj = {};
var myStr = 'myProperty';
var myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); // --> [1, 3]
*/

function addArrayProperty(obj, key, arr) {
  obj[key]=arr;
}

module.exports = addArrayProperty;

//Ejercicio 2
/* Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.

Ejemplo:

const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

console.log(ouput); // -> 2 */

const objectPropertiesCounter = (obj) => {

};

module.exports = objectPropertiesCounter;