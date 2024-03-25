// Ejercicio 1: Menor de tres numeros
function ej1() {
    var num1 = parseInt(prompt("Ingrese el primer número:"));
    var num2 = parseInt(prompt("Ingrese el segundo número:"));
    var num3 = parseInt(prompt("Ingrese el tercer número:"));

    var mn
    if (num1 < num2 && num1 < num3) {
        mn = num1
    }
    else if (num2 < num3) {
        mn = num2
    }
    else {
        mn = num3
    }

    document.getElementById("resultado").innerHTML = "El menor es " + mn 
}

// Ejercicio 2: Obtener los números pares entre 1 y 100
function ej2() {
    var pares = "";
    for (var i = 2; i <= 100; i += 2) {
        pares += i + " ";
    }
    document.getElementById("resultado").innerHTML = "Números pares entre 1 y 100: " + pares;
}

// Ejercicio 3: Suma de los primeros 100 números
function ej3() {
    var suma = 0;
    for (var i = 1; i <= 100; i++) {
        suma += i;
    }
    document.getElementById("resultado").innerHTML = "La suma de los primeros 100 números es: " + suma;
}

// Ejercicio 4: Insertion Sort
function ej4() {
    let input = prompt("Ingrese los números separados por espacios:");
    let arreglo = input.split(' ').map(function(item) {
        return parseInt(item, 10);
    });
    
    let n = arreglo.length;
    for (let i = 1; i < n; i++) {
        let actual = arreglo[i];
        let j = i - 1;
        while (j > -1 && actual < arreglo[j]) {
            arreglo[j + 1] = arreglo[j];
            j--;
        }
        arreglo[j + 1] = actual;
    }
    
    document.getElementById("resultado").innerHTML = "Arreglo ordenado: " + arreglo.join(' ');
}


// Ejercicio 5: Selection Sort
function ej5() {
    let arreglo = prompt("Ingrese los números separados por comas").split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    let n = arreglo.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arreglo[j] < arreglo[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arreglo[i];
            arreglo[i] = arreglo[min];
            arreglo[min] = tmp;
        }
    }
    document.getElementById("resultado").innerHTML = "Arreglo ordenado: " + arreglo.join(' ');
}


// Ejercicio 6: Bubble Sort
function ej6() {
    let arreglo = prompt("Ingrese los números separados por comas").split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    let n = arreglo.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                let tmp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = tmp;
            }
        }
    }
    document.getElementById("resultado").innerHTML = "Arreglo ordenado: " + arreglo.join(' ');
}


// Ejercicio 7: Leer si un número es par o impar
function ej7() {
    var num = parseInt(prompt("Ingrese el número:"));

    var res = "Par"
    if (num & 1) {
        res = "Impar";
    }

    document.getElementById("resultado").innerHTML = "El numero es " + res
}

// Ejercicio 8: Tabla de multiplicar
function ej8() {
    var num = parseInt(prompt("Ingrese el número:"));
    var n = parseInt(prompt("Ingrese hasta que numero quiere: "))

    var res = ""
    for (let i = 1; i <= n; i++) {
        var actual = num + " por " + i + " es " + (i * num) + "<br>"
        res += actual
    }

    document.getElementById("resultado").innerHTML = res
}

// Ejercicio 9: Producto de dos números mediante sumas
function ej9() {
    var num1 = parseInt(prompt("Ingrese el primer número:"));
    var num2 = parseInt(prompt("Ingrese el segundo número:"));

    var res = 0;
    var r = num1 + " por " + num2 + " es ";
    for (let i = 0; i < num2; i++) {
        res += num1;
        if (i < num2 - 1) {
            r += num1 + " + ";
        } else {
            r += num1; 
        }
    }

    document.getElementById("resultado").innerHTML = r + " = " + res;
}


// Ejercicio 10: Posición del mayor valor en un arreglo
function ej10() {
    let arreglo = prompt("Ingrese los números separados por comas").split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    let n = arreglo.length;

    var idx = 0
    for (let i = 0; i < n; i++) {
        if (arreglo[i] > arreglo[idx]) {
            idx = i
        }
    }

    document.getElementById("resultado").innerHTML = "El indice del elemento mayor es " + idx
}

// Ejercicio 11: Suma de elementos de dos vectores
function ej11() {
    var arr = prompt("Ingrese los elementos del primer vector, separados por espacios:").split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    var arr2 = prompt("Ingrese los elementos del segundo vector, separados por espacios:").split(" ").map(function(item) {
        return parseInt(item, 10);
    });

    var suma = [];
    for (let i = 0; i < arr.length; i++) {
        suma.push(arr[i] + arr2[i]);
    }

    document.getElementById("resultado").innerHTML = "Suma de vectores: " + suma.join(', ');
}


// Ejercicio 12: Calcular la media de una secuencia de números
function ej12() {
    let arreglo = prompt("Ingrese los números separados por comas").split(" ").map(function(item) {
        return parseInt(item, 10);
    });
    let n = arreglo.length;

    var sum = 0
    for (let i = 0; i < n; i++) {
        sum += arreglo[i]
    }

    document.getElementById("resultado").innerHTML = "El indice del elemento mayor es " + (sum / n)
}

// Ejercicio 13: Mostrar secuencia de números en orden
function ej13() {
    let arreglo = prompt("Ingrese los números separados por comas").split(" ").map(function(item) {
        return parseInt(item, 10);
    });

    arreglo.sort()

    document.getElementById("resultado").innerHTML = "Arreglo ordenado: " + arreglo.join(' ');
}

// Ejercicio 14: Dado una secuencia de textos proporcionados por el usuario visualizar: la longitud, en mayúsculas, en minúsculas, cada uno de ellas.
function ej14() {
    var textos = prompt("Ingrese textos separados por espacios:").split(" ");
    var cantidadTextos = textos.length;
    var textoLargo = textos.reduce(function(a, b) { return a.length > b.length ? a : b; });
    var textoCorto = textos.reduce(function(a, b) { return a.length < b.length ? a : b; });

    var res = "Cantidad de textos: " + cantidadTextos + "<br>" +
              "Texto más largo: " + textoLargo + "<br>" +
              "Texto más corto: " + textoCorto;

    document.getElementById("resultado").innerHTML = res;
}

