const frutas = ["manzana", "banana", "pera", "manzana", "naranja", "banana", "manzana", "pera", "naranja", "manzana"];
const contadorFrutas = {};
for (let i = 0; i < frutas.length; i++) {

let fruta = frutas[i];

if (contadorFrutas[fruta]) {

    contadorFrutas[fruta]++;

} else {

    contadorFrutas[fruta] = 1;

}

}

console.log("Conteo de frutas usando for:", contadorFrutas);