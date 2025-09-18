let a = parseInt(prompt("Dimmi la base: "));
let b = parseInt(prompt("Dimmi l'altezza: "));
let area = a * b;
console.log(area);

let a = 5;  // numero diverso da zero
let b = 10; // numero diverso da zero
let c = a;
let d = b;
c = b;
d = a;

const f = 273.15;
let x = parseFloat(prompt("Inserisci la temperatura in Celsius: "));
let z = x + f;
console.log(z);

let a = 3;
let b = 4;
let c = 5;

if (a > b && c > a) {
    console.log(a);
}

if (b > a && b < c) {
    console.log(b);
}

// Esercizio 2 - Anno bisestile e selezione della casa
let anno = parseInt(prompt("Scrivi l'anno:"));

// Verifica se l'anno è bisestile
let bisestile = true;
if ((anno % 4 !== 0) || (anno % 100 === 0 && anno % 400 !== 0)) {
    bisestile = false;
}

// Stampa se l'anno è bisestile o no
if (bisestile) {
    console.log(`L'anno ${anno} è bisestile.`);
} else {
    console.log(`L'anno ${anno} non è bisestile.`);
}

// Selezione della casa
let scelta = parseInt(prompt("Seleziona un caso (1-7):\n1. Sala\n2. Cucina\n3. Camera\n4. Bagno\n5. Cameretta\n6. Cucina\n7. Bagno"));

// Gestione dei casi
switch(scelta) {
    case 1:
        console.log("Sala");
        break;
    case 2:
    case 3:
    case 5:
        console.log("Cameretta");
        break;
    case 6:
        console.log("Cucina");
        break;
    case 7:
        console.log("Bagno");
        break;
    default:
        console.log("Opzione non valida");
}

let array = [10, 3, 8, 7, 6, 5, 1, 3, 2];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let array = [10, 3, 8, 7, 6, 5, 1, 3, 2];
let minVal = Math.min(...array);
let maxVal = Math.max(...array);
console.log("Minimo:", minVal);
console.log("Massimo:", maxVal);

let array = [10, 3, 8, 7, 6, 5, 1, 3, 2];
let x = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 5) { // Se un elemento è 5
        x = i;
    }
}
console.log("Indice di 5:", x);

let array = [10, 3, 8, 7, 6, 5, 1, 3, 2];
let maxVal = Math.max(...array);
console.log("Massimo:", maxVal);

let array = [10, 3, 8, 7, 6, 5, 1, 3, 2];
let maxVal = Math.max(...array);
console.log("Massimo trovato:", maxVal);
