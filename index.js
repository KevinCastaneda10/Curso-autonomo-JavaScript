/*var a;
var a = 5;

console.log(a)*/

/*var cociente = (20 / 2)

console.log (cociente)*/

/*var librosComprados = 105;
console.log(librosComprados);

librosComprados = librosComprados + 1;
console.log(librosComprados); */

/*Secuencias de escape

console.log("Estoy aprendiendo: \nJavaScript") 

// entre otras
*/

/*var miCadena;
miCadena = "AB";
console.log(miCadena.length);*/

/*var lenguajeDeProgramacion = "JavaScript";
console.log(lenguajeDeProgramacion[0])*/

/*Inmutabilidad de las cadenas

var miCadena = "jola, mundo";
console.log(miCadena);

var miCadena = "Hola, mundo";
console.log(miCadena);*/

/*var miCadena = "JavaScript";
console.log(miCadena[2]);*/

/*var miCadena = "JavaScript";
console.log(miCadena[miCadena.length -5])*/

/*var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";

var plabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " "  + miVerbo + " "  + miAdverbio + " a la tienda.";

console.log(plabrasEnBlanco)*/

/*var miSustantivo = "bicicleta";
var miAdjetivo = "pequeña";
var miVerbo = "voló";
var miAdverbio = "lentamente";

var plabrasEnBlanco = "La " + miSustantivo + " " + miAdjetivo + " "  + miVerbo + " a la tienda" + " " + miAdverbio +".";

console.log(plabrasEnBlanco)*/

//Arrays
//Arreglos anidados

/*var listaDeEstudiantes =[["Nora", 97], ["Gino", 78]];
console.log(listaDeEstudiantes)*/

/*var listaDeProductos = [["Camisa", 5.67, "S134"], ["Celular", 250, "S563"], ["Zapatos", 36.7, "S357"]];
console.log(listaDeProductos);*/

/*var miArreglo = [10, 20, 30];

console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma)*/

/*var miArreglo2 = [10, 20, 30];
miArreglo2[1] = [1, 2, 3];
console.log(miArreglo2)*/

//Areglos miltidimencionales

/*var miArreglo3 = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];
console.log(miArreglo3[1] [1])*/

/*var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
console.log(estaciones);*/

/*var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7], ["pollo", 7]];
console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");*/

/*function suma(a, b) {
    suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
  }
  
  suma(5, 3);*/

/*function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
  }
  
  concatenarTresCadenas("Estoy", "aprendiendo", "a programar");
  console.log(concatenarTresCadenas)*/

//Variables con ámbito global

/*var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}
miFuncion()
console.log(miVariableGlobal);*/

//Variables con ámbito local

/*function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
  }
  
  miFuncion();*/

//Variable global vs variable local

/*var miNombre = "Kevin";

    function mostrarMiNombre() {
        var miNombre = "Andrés";
        console.log(miNombre); 
    }

    mostrarMiNombre();

    console.log(miNombre);*/

//Retornar

/*function sumar(a, b) {
  return a + b;
}

sumar(5, 3);

console.log(sumar(5, 3));*/

// Undinined

/*function suma(a, b) {
  console.log(a + b);
}

console.log(suma(5, 3));*/

// Asignar un valor retornado

/*function suma(a, b) {
    return a + b
} 

var resultado = suma (5, 3)
console.log(resultado)*/

/*function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender " + lenguajeDeProgramacion;
    }
  
var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);*/

/*function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); // Agregar al final del arreglo.
  return arreglo.shift(); // Remover el primer elemento y retornarlo.
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo, 6));
console.log("Después: " + JSON.stringify(miArreglo));*/

// Booleanos

/*console.log(true); // Correcto
console.log(True); // Error
console.log(TRUE); // Error
console.log(TrUe); // Error

console.log(false); // Correcto
console.log(False); // Error
console.log(FALSE); // Error
console.log(FaLsE); // Error*/

// operador de igualdad (==)

/*console.log(5 == 5);
console.log(6 == 5);

console.log("Hola" == "Hola");
console.log("Hola" == "JavaScript");
console.log("Hola" == "hola");

console.log([1, 2, 3] == [1, 2, 3]);
console.log([1, 2, 3] == [4, 5, 6]);*/

// Operador de igualdad estricta (===)

/*console.log(9 == 9);
console.log(9 == "9");

console.log(9 === 9);
console.log(9 === "9");*/

// Cómo comparar valores

/*var a;
var b;

a = 5;
b = 5;

console.log(a == b);  // true
console.log(a === b); // true

b = 8;

console.log(a == b);
console.log(a === b);

b = "5";

console.log(a == b);
console.log(a === b);

a = "JavaScript";
b = "Javascript";

console.log(a == b);
console.log(a === b);*/

// Operador de desigualdad

/*console.log(9 != 6);

console.log(9 != 9);

console.log("JavaScript" != "JavaScript");

console.log([1, 2, 3] != [1, 2, 3]);*/

// Operador de desigualdad estricta

/*console.log(1 != "1");
console.log(1 !== "1");*/

// Mayor que (>)>

/*console.log(6 > 5);
console.log(3 > 10);

console.log("B" > "A");
console.log("ACB" > "ABC");

console.log("AB" > "A");

console.log("Mundo" > "Hola");
console.log("M" > "A");

console.log("JavaScript" > "Python");
console.log("J" > "P");

var a = 15;
var b = 7;

console.log(a > b);
console.log(b > a);*/

// Mayor o igual que (>=)

/*console.log(5 > 5);
console.log(5 >= 5);*/

// Menor que (<)

/*console.log(5 < 6);
console.log(10 < 3);

console.log("A" < "B");
console.log("ABC" < "ACB");

var a = 15;
var b = 7;

console.log(a < b);
console.log(b < a);*/

// Menor o igual que (<=)

/*console.log(5 < 5);
console.log(5 <= 5);*/

// Operador lógico and

/*console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);*/

/*var a = 8;

console.log((a > 5) && (a < 10));

var a = 15;

console.log((a < 5) && (a <= 10));*/

// Operador lógico or

/*console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);*/

/*var a = 8;

console.log((a < 5) || (a > 15));

a = 2;

console.log((a < 5) || (a > 15));

a = 20;

console.log((a < 5) || (a > 15));

a = 5;

console.log((a == 5) || (a < 15));*/

// Operador lógico not

/*console.log(!true);
console.log(!false);

var a = 8;

console.log(!(a > 5));

console.log(!(a < 5));*/

// Sentencias condicionales

/*var x = 5;

if (x > 2) {
  console.log("La condición es verdadera");
}*/

/*if (x > 2 && x < 10) {
    console.log("La condición es verdadera");
  }*

var estacion = "Invierno";

if (estacion == "Invierno") {
  console.log("¡Si! Me encanta el invierno.");
}

console.log("Después del condicional...");*/

// else

/*if (false) {
  console.log("La condición es verdadera.");
} else {
  console.log("La condición es falsa.");
}*/

/*var x = 5;

if (x < 2) {
  console.log("La condición es verdadera.");
} else {
  console.log("La condición es falsa.");
}*/

// else if

/*function clasificarValor(valor) {
  if (valor % 2 == 0) {
    console.log("Divisible entre 2.");
  } else if (valor % 3 == 0) {
    console.log("Divisible entre 3.");
  } else {
    console.log("No es divisible entre las opciones.");
  }
}

clasificarValor(2);
clasificarValor(15);
clasificarValor(7);*/

// Condicionales orden lógico

/*function clasificarValor(valor) {
  if (valor < 5) {
    console.log("Menor que 5.");
  } else if (valor < 10) {
    console.log("Menor que 10.");
  } else {
    console.log("Mayor o igual que 10.");
  }
}

clasificarValor(2);
clasificarValor(7);
clasificarValor(15);*/

// Encadenar sentencias if else

/*function interpretarIMC(indiceDeMasaCorporal) {
  if (indiceDeMasaCorporal < 18.5) {
    console.log("Bajo Peso");
  } else if (indiceDeMasaCorporal <= 24.9) {
    console.log("Normal");
  } else if (indiceDeMasaCorporal <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obeso");
  }
}

interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);*/

// Código de golf

/*function puntajeDeGolf(par, golpes) {
  if (golpes == 1) {
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home!";
  }
}

console.log(puntajeDeGolf(4, 1));
console.log(puntajeDeGolf(4, 2));
console.log(puntajeDeGolf(4, 3));
console.log(puntajeDeGolf(4, 4));
console.log(puntajeDeGolf(4, 5));
console.log(puntajeDeGolf(4, 6));
console.log(puntajeDeGolf(4, 7));
console.log(puntajeDeGolf(4, 15));*/

// Sentencias switch

/*function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
  }
  return respuesta;
}

console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));*/

// Sentencias switch opción predeterminada

/*function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Francés";
      break;
    case 3:
      idioma = "Italiano";
      break;
    default:
      idioma = "Inglés";
      break;
  }
  return idioma;
}

console.log(seleccionarIdioma(3));*/

// Sentencias switch múltiples casos

/*function clasificarVolumen(valor) {
  var volumen;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;
    case 2:
    case 3:
      volumen = "intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;
  }
  return volumen;
}

console.log(clasificarVolumen(5));*/

// Retornar valores booleanos

/*function esMenorQue(a, b) {
  return a < b;
}

console.log(esMenorQue(6, 3));
console.log(esMenorQue(3, 6));*/

// Patrón de retorno anticipado

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5));
