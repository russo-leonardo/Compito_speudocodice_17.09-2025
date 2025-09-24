let array = [10, 3, 8, 7, 6, 5, 1, 3, 2];
let x = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 5) { // Se un elemento è 5
        x = i;
    }
}
console.log("Indice di 5:", x);

