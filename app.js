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
  obj.key=arr;
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
  if ( obj[key] || obj[key].length || Array.isArray(obj[key]) || index >= 0 || index < obj[key].length || key===key){
      return undefined;
  }else{
  console.log(obj.key[index]);
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

const customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  const greeting = '';

  // your code here

  return greeting;
}

module.exports = greetCustomer;

// Ejercicio 6
/*
Escriba una función 'transformFirstAndLast' que toma un array y devuelve un objeto con:

el primer elemento del array como la clave del objeto, y
el último elemento del array como valor de esa clave.
Ejemplo de entrada:

['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
Valor de retorno de la función (salida):

{
  Queen: 'Beyonce'
}
No cambie el array de entrada. Suponga que todos los elementos del array de entrada serán del tipo string.

Tenga en cuenta que el array de entrada puede tener un número variable de elementos. Tu código debería acomodarse de manera flexible.

Ejemplo, debe manejar la entrada como:

['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']
Valor de retorno de la función (salida):

{
  Kevin: "Spacey"
}
*/

function transformFirstAndLast(array) {
  let first = [array[0]];
  let last = array.pop();
  let arr = {};
  arr[first] = last;
  return arr;
}

module.exports = transformFirstAndLast;

// Ejercicio 7
/*
Escribir una función llamada "getAllKeys" que devuelve un array de todas las claves del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Sam',
  age: 25,
  hasPets: true
}
Valor de retorno de la función (salida):

['name', 'age', 'hasPets']
Tenga en cuenta que su función debe ser capaz de manejar cualquier objeto pasado en ella.

P.ej. también debe manejar una entrada como:

{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
Valor de retorno de la función (salida):

['a', 'number', 'hungry', 'grammyWins']
*/

function getAllKeys(obj) {
  let hola =[];
  for (let key in obj){
    hola.push(key);
  }
  return hola;
}

module.exports = getAllKeys;


// Ejercicio 8
/*
Escribir una función fromListToObject que toma un array de matrices, y devuelve un objeto con cada par de elementos en la array como un par clave-valor.

Ejemplo de entrada:

[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
Valor de retorno de la función (salida):

{
  make: 'Ford'
  model: 'Mustang',
  year: 1964
}
No cambie la cadena de entrada. Suponga que todos los elementos del array serán del tipo string.

Tenga en cuenta que la entrada puede tener un número diferente de elementos que la muestra dada. Por ejemplo, si la entrada tenía 6 valores en lugar de 4, tu código debería adaptarse de manera flexible.
*/

function fromListToObject(array) {
  let arr = {};
  for(let i = 0; i < array.length; i++){

  }
}

module.exports = fromListToObject;


// Ejercicio 9
/*
Escribe una función llamada listAllValues que devuelve un array de todos los valores del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Krysten',
  age: 33,
  hasPets: false
}
Valor de retorno de la función (salida):

['Krysten', 33, false]
Tenga en cuenta que la entrada puede tener un número diferente de claves y valores que la muestra dada. Por ejemplo, también debe manejar una entrada como:

{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
Valor de retorno de la función (salida):

['a', 11, true, 1]
*/

function listAllValues(obj) {
let hola =[];
  for (let key in obj){
    hola.push(obj[key]);
  }
  return hola;
}
module.exports = listAllValues;

// Ejercicio 10
/*
Escribir una función llamada "transformEmployeeData" que transforma algunos datos de los empleados de un formato a otro.

El argumento se verá así:

[
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]
Dado que la entrada, el valor devuelto debe verse como esto:

[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
Tenga en cuenta que la entrada puede tener un número diferente de filas o claves diferentes de la muestra dada.

Por ejemplo, digamos que el departamento de recursos humanos agrega un campo "tshirtSize" a cada registro de empleado. Su código debería acomodarse de manera flexible.
*/

function transformEmployeeData(array) {
  let transform = [];
  for(let i = 0; i<array.length; i++){
    let arr = {};
    
  }
}

module.exports = transformEmployeeData;

