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

