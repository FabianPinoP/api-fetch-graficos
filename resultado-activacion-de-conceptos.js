// ejercicio-1
const arreglo1 = [1, 2, 3, 4, 5];
arreglo1.push("hola");
// console.log(arreglo1) <= [1, 2, 3, 4, 5, 'hola']

// ejercicio-2

const arreglo1 = [1, 2, 3, 4, 5];
arreglo2 = arreglo1;
arreglo2[0] = 5;
// console.log(arreglo1) <= [5, 2, 3, 4, 5]

// Se crea una variable llamada arreglo2 y se le asigna el mismo arreglo que
// arreglo1 tiene. Esto no crea una copia del arreglo, sino que arreglo2 simplemente
// apunta a la misma ubicación de memoria que arreglo1.

// ejercicio-3

//  se considera mutable si sus propiedades pueden modificarse después de su creación.
//  En otras palabras, si un objeto es mutable, significa que puede cambiar su estado y
//  contenido a lo largo del tiempo, incluso después de haber sido creado.

const miArreglo = [1, 2, 3];
miArreglo.push(4); // Modifica el arreglo agregando un nuevo elemento

const persona = { nombre: "Juan", edad: 30 };
persona.edad = 31; // Modifica la propiedad 'edad' del objeto

persona.direccion.push("Calle 1"); // Modifica la propiedad 'direccion' del objeto
// ejercicio-4

const arreglo6 = [1, 2, 3, 4, 5];
arreglo6.splice(2, 1);
// console.log(arreglo6) <= [1, 2, 4, 5]

// La llamada al método splice(2, 1) indica que se eliminará un elemento a partir del
// índice 2 del arreglo arreglo6. El primer argumento (2) representa el índice desde el
// cual se realizará la eliminación, y el segundo argumento (1) indica cuántos elementos
// se eliminarán desde el índice especificado.

// ejercicio-5

const arr1 = [4, 1, 2, 3];
const ordenado = arr1.sort((x, y) => y - x);
// console.log(ordenado) <= [4, 3, 2, 1]

// La función de comparación (x, y) => y - x indica que los elementos se ordenarán en
// orden descendente. En este caso, se restará x de y en cada comparación, lo que provocará
// que los elementos más grandes aparezcan antes que los elementos más pequeños, y así
// obtendremos el arreglo ordenado en forma descendente.

// ejercicio-6

// forEach:
// Propósito: El método forEach se utiliza para iterar sobre cada elemento de un arreglo
// y realizar una acción o ejecutar una función proporcionada para cada elemento.
// Es útil cuando se desea realizar una tarea para cada elemento sin necesidad de
// crear un nuevo arreglo o modificar el arreglo original.

// Valor de retorno: forEach no devuelve nada explícitamente. Retorna undefined.
// Su principal objetivo es ejecutar una función para cada elemento del arreglo.

const numeros = [1, 2, 3];
numeros.forEach((numero) => console.log(numero * 2));
// Salida: 2, 4, 6

// map:
// Propósito: El método map se utiliza para iterar sobre cada elemento de un arreglo,
// ejecutar una función proporcionada para cada elemento y crear un nuevo arreglo con
// los resultados de dicha función. Es útil cuando se desea transformar o mapear los
// elementos del arreglo original en un nuevo arreglo.

// Valor de retorno: map devuelve un nuevo arreglo que contiene los valores
// resultantes de la función proporcionada para cada elemento del arreglo original.
// El nuevo arreglo tendrá la misma longitud que el arreglo original.

const numeros = [1, 2, 3];
const duplicados = numeros.map((numero) => numero * 2);
console.log(duplicados); // Salida: [2, 4, 6]

// para resumir, forEach es útil para realizar acciones o tareas para cada elemento de
// un arreglo sin generar un nuevo arreglo, mientras que map se utiliza para crear un
// nuevo arreglo a partir de la transformación de cada elemento del arreglo original
// utilizando una función dada.
