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
  return Object.keys(obj).length;
};

module.exports = objectPropertiesCounter;

//Ejercicio 3
/* Escribe una función llamada "removeStringValuesLongerThan".

Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el número dado.

Ejemplo de entrada:

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }*/

function removeStringValuesLongerThan(num, obj) {
  for(var prop in obj){
    if(obj[prop].length > num){
      delete obj[prop];
    }
  }
  return obj;
}
module.exports = removeStringValuesLongerThan;

//Ejercicio 4
/* Dado un objeto, una clave y un índice numérico, getElementOfArrayProperty devuelve el valor del elemento en el índice dado del arreglo localizado dentro del objeto dado en la clave dada.

Notas:

Si el arreglo está vacío, debería devolver undefined.
Si el índice dado está fuera de rango del arreglo ubicado en la clave dada, debería devolver undefined.
Si la propiedad en la clave dada no es un arreglo, debería devolver undefined.
Si no hay ninguna propiedad en la clave, debería devolverse undefined.
Ejemplo de entrada:

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil' */

function getElementOfArrayProperty(obj, key, index) {
  if ( obj[key] && obj[key].length && Array.isArray(obj[key]) && index >= 0 && index < obj[key].length ){
    return undefined;
  }
}
module.exports = getElementOfArrayProperty;

//Ejercicio 5
/* Escribe una función llamada greetCustomer.

Dando un nombre, greetCustomer devuelve un saludo basado en cuántas veces ese cliente ha visitado el restaurante. Consulte el objeto customerData.

El saludo debe ser diferente, dependiendo del nombre de la reservación.

Caso 1 - Cliente desconocido (el nombre no está presente en los datos de cliente):

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
Caso 2 - Cliente que ha visitado sólo una vez (el valor de las visitas es 1)

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
Caso 3 - Repetir cliente: (valor de' visitas' es mayor que 1)

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
Notas:

Tu función no debe alterar el objeto customerData para actualizar el número de visitas.
No codificar los datos exactos de la muestra. Esto es una mala idea:
if (firstName === 'Joe') {
  // do something
} */
