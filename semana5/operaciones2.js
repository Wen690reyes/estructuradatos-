//operadores matematicos en js
//variables contenedoras
var num1, num2;

//suma
num1=50;
console.log(50 + 5);
var num1 = 50;
console.log(num1 + 5);

//resta
var num2=20;
console.log(num1-num2);

//division
console.log(250/num1);
console.log(num1/num2);

//modulo
console.log(num1,num2);

//prueba de procedencia
console.log(3 + 5 * 2 - 8 );

console.log("");
console.log("Segundo bloque de ejercicios operadores relacionales");

//Operadores de comparación o relacionales
//Ejemplos <,>,<=,>=,== y !=
console.log ("4 es mayor que 7: " , 4 > 7); 
console.log ("4 es menor que 7: " , 4 < 7); 
console.log ("4 es mayor o igual que 7: " , 4 >= 7); 
console.log ("4 es menor o igual que 7: " , 4 <= 7); 
console.log ("4 es iguale que 7: " , 4 == 7); 
console.log ("4 es diferente que 7: " , 4 != 7); 



//Igualdad vs igualdad estricta 
console.log("Igualadad estricta");

console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");

console.log(true == 1);
console.log(false == 0);
console.log(false === 0);


//Asignación y asociatividad
console.log("");
console.log("Asociatividad");

var a = 20;
var b = 22;
var c = (a = b) + 60;

console.log("Valor de a: ", a);
console.log("Valor de b: ",b);
console.log ("Valor de c: ",c); 

console.log( 16/2/4);

// Las operaciones +,-.*,/ son de izquierda a derecha.
//Las operaciones <,>,<=,>=, son de derecha a izquierda.

//Funciones en js
//ejemplo 1 declarando una funcion sin parametros
function saludar(){
    console.log("Hola como estas,usaste la funcion saludar");

}

//ejemplo 1 usando la funcion 
saludar();

//Ejemplo 2 emcapsular los ejercicios anteriores

