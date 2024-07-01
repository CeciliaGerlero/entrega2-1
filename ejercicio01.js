const nombre = prompt('Ingrese su nombre', '');
const distancia = parseInt(prompt('Ingrese la distancia', ''));
if (Number.isNaN(distancia)) {
    console.log('Debes ingresar un número')
} else if (distancia < 1000) {
    alert(`${nombre}, para recorrer  ${distancia} mts lo puede hacer a pie`)
    console.log(`${nombre}, para recorrer  ${distancia} mts lo puede hacer a pie`)
} else if (distancia >= 1000 && distancia < 10000) {
    alert(`${nombre}, para recorrer  ${distancia} mts lo puedes hacer en bici`)
    console.log(`${nombre}, para recorrer  ${distancia} mts lo puedes hacer en bici`)
} else if (distancia >= 10000 && distancia < 300000) {
    alert(`${nombre}, para recorrer  ${distancia} mts lo puedes hacer en colectivo`)
    console.log(`${nombre}, para recorrer  ${distancia} mts te recomiendo tomar un colectivo`)
}
else if (distancia >= 30000 && distancia < 1000000) {
    alert(`${nombre}, para recorrer  ${distancia} mts lo puedes hacer en bici`)
    console.log(`${nombre}, para recorrer  ${distancia} mts te recomiendo hacerlo en auto`)
}
else {
    alert(`${nombre}, para recorrer  ${distancia} mts lo puedes hacer en avión`)
    console.log(`${nombre}, para recorrer  ${distancia} mts es aconsejable tomar un avión`)
}

// Document.write(`${nombre}, para recorrer  ${distancia} mts lo debes hacer en avión`)
