//1 Escriba una función que reciba un contador, y un valor y cree un arreglo con la cantidad de valores que dice el contador.
function llenarArreglo(numero, valor) {
  const arreglo1 = [];
  for (i = 0; numero; i++) {
    arreglo1.push(valor);
  }
  console.log(arreglo1);
}

llenarArreglo(3, "b");
// --------------------------------------------------

//2 Escriba una función que le dé vuelta a un arreglo.

function revertirArreglo(arreglo) {
  console.log(arreglo.reverse());
}

const arreglo2 = [1, 2, 3];
revertirArreglo(arreglo2);
// ---------------------------------------------------

//3 Escriba una función que reciba dos arreglos y diga si son iguales o no.
function revisarIgualdadArreglos(arreglo1, arreglo2) {
  let arreglo1Tamanho = arreglo1.length;
  let arreglo2Tamanho = arreglo2.length;

  if (arreglo1Tamanho != arreglo2Tamanho) {
    return false;
  }

  arreglo1.sort();
  arreglo2.sort();

  for (let i = 0; i < n; i++)
    if (arreglo1[i] != arreglo2[i]) {
      return false;
    }
  return true;
}
const revisarArr1 = [1, 2];
const revisarArr2 = [1, 2];
if (revisarIgualdadArreglos(revisarArr1, revisarArr2)) {
  console.log("Arreglos iguales");
} else {
  console.log("Arreglos diferentes");
}
// ---------------------------------------------------

// 4 Escriba una función que reciba un arreglo de pares llave/valor y devuelva un objeto.
function revertirLlaveValor(arreglo) {
  const result = Object.fromEntries(arreglo);
  console.log(result);
}

const arregloLlaveValor = [
  ["nombre", "Mauro"],
  ["apellido", "Taylor"],
];
revertirLlaveValor(arregloLlaveValor);

// -----------------------------------------------------

// 5 Escriba una función que reciba un arreglo y devuelva un arreglo sin elementos duplicados, PERO no pueden usar el new Set() de JS.
function removerDuplicados(arreglo) {
  // Escriba su código aquí
}
// Ejemplo
const arregloDuplicados = [1, 2, 3, 1, 2];
removerDuplicados(arregloDuplicados);
// Espero que retorne [1, 2, 3]

// ------------------------------------------------

// 6 Escriba una función que reciba dos arreglos y devuelva la intersección. devolver los elementos que están en los dos arreglos.

function encontrarInterseccion(arreglo1, arreglo2) {
  // Escriba su código aquí
}
// Ejemplo
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
encontrarInterseccion(arr1, arr2);
// Espero que retorne [3,4]

// ----------------------------------------

// 7 Escriba una función que reciba un variable y diga si es un arreglo.

function esArreglo(variable) {
  if (Array.isArray(variable)) {
    console.log("Es un arreglo");
  } else {
    console.log("No es un arreglo");
  }
}
const variable = [];
esArreglo(variable);

// ---------------------------------------------

// 8 Escriba una función que reciba un arreglo y lo clone, es decir, devuelva un arreglo igual.
function clonarArreglo(arreglo) {
  const arregloCLonado = arreglo.slice();
  console.log(arregloCLonado);
}
const clonArreglo = [1, 2, 3, 4];
clonarArreglo(clonArreglo);

// ----------------------------------------

// 9 Escriba una función que reciba un arreglo de strings y devuelva todos los strings concatenados.
function concatenarStrings(arreglo) {
  const result = arreglo.join(" ");
  console.log(result);
}
const concatenarArreglo = ["Hola", "Mundo", "!"];
concatenarStrings(concatenarArreglo);
// ------------------------------------

// 10 Escriba una función que reciba un número e inserte un '-' menos entre los números pares y un '*' asterico entre dos números impares.
function formatearNumero(numero) {
  // Escriba su código aquí
}
// Ejemplo
const mumero = 134245780;
formatearNumero(numero);
// Espero que retorne '1*34-2-45*78-0'
// -----------------------------------------

// 11 Escriba una función que "revuelva" un arreglo. O sea, que cambie los elementos de posición al azar. Pueden usar Math.random()
function barajarArreglo(arreglo) {
  // Escriba su código aquí
}
// Ejemplo
const barajasArreglo = [1, 2, 3, 4];
barajarArreglo(barajasArreglo);
// Espero que retorne los elementos en ordenes diferentes cada vez
// ---------------------------------------

// 12 Escriba una función que encuentre los valores repetidos de un arreglo.
function econtrarDuplicados(arreglo) {
  const set = new Set(arreglo);
  const duplicados = arreglo.filter((item) => {
    if (set.has(item)) {
      set.delete(item);
    } else {
      return item;
    }
  });

  console.log(duplicados);
}

const arregloDuplicados = [1, 2, 1, 3, 4, 3, 5];
econtrarDuplicados(arregloDuplicados);
// -----------------------------------

// 13 Escriba una función que encuentre la diferencia de dos arreglos, es decir, devolver los valores que solo están en uno y no en el otro.
function encontrarDiferencia(arreglo1, arreglo2) {
  // Escriba su código aquí
}
// Ejemplo
const diferenciaAarr1 = [1, 2, 3, 4];
const diferenceiaArr2 = [3, 4, 5, 6];
revertirLlaveValor(arregloLlaveValor);
// Espero que retorne [1, 2, 5, 6]
// -----------------------------------

// 14 Escriba una función que 'aplane' un arreglo.
function aplanarArreglo(arreglo) {
  // Escriba su código aquí
}
// Ejemplo
const aplanarArr = [[1, 2], 3, 4, 5, [6, 7, 8]];
aplanarArreglo(aplanarArr);
// Espero que retorne [1, 2, 3, 4, 5, 6, 7, 8]
// -----------------------------------

// 15 Escriba una función que imprima en consola "Hola Mundo!"
function HolaMundo() {
  console.log("Hola Mundo");
}

HolaMundo();
// -----------------------------------

// 16 Escriba una función que revise si un string está vacío o no.
function StringVacio(palabra) {
  if (palabra === "") {
    console.log("String vacio");
  } else {
    console.log("String lleno");
  }
}
StringVacio("Prueba");
// -----------------------------------

// 17 Escriba una función que extraiga solo los primeros n caracteres de un string.
function ExtraerNCaracteres(palabra, numCaracteres) {
  const result = palabra.substr(numCaracteres);
  console.log(result);
}
ExtraerNCaracteres("Hola", 2);
// -----------------------------------

// 18 Escriba una función que ponga la primera letra en mayúscula y el resto minúsculas.
function primeraLetraMayuscula(palabra) {
  const result = palabra;
  console.log(result);
}
primeraLetraMayuscula("prueba");
// -----------------------------------

// 19 Escriba una función que reciba un arreglo de objetos y los ordene de mayor a menor por el atributo id.
function ordenarObjectos(arreglo) {
  const result = arreglo.sort(function (a, b) {
    return a.id - b.id;
  });
  console.log(result);
}

const arregloObjectos = [
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "Valeria" },
  { id: 1, nombre: "Maria" },
  { id: 5, nombre: "Fernando" },
];

ordenarObjectos(arregloObjectos);
// -----------------------------------

// 20 Escriba una función que reciba un número (lo reciben como string) y le dé la vuelta.

// -----------------------------------

// 21 Escriba una función que reciba un string y diga si es palíndromo o no.

// -----------------------------------

// 22 Escriba una función que reciba un string y encuentre la palabra más grande del string.

// -----------------------------------

// 23 Escriba una función que reciba un arreglo y una función y ejecute la función en cada elemento del arreglo.

// -----------------------------------

// 24 Escriba una función que reciba un arreglo y una función, si la función devuelve true agrega el elemento a un arreglo de los que pasaron y sino a un arreglo de los que NO pasaron, imprime los dos.

// -----------------------------------
