function saludo(nombre) {
    let saludin = nombre;
    console.log("hola" + saludin);
}

saludo("juan");

function calcularDescuento() {
    let porcentaje1 = parseInt(document.getElementById("porcentaje").value);

    let precioEntrada = 5000;

    let precioConDescuento = precioEntrada - (precioEntrada * (porcentaje1/100));

    document.getElementById("resultado").innerText = "Precio con descuento: $" + precioConDescuento.toFixed(2) + " Puede Seguir con la compra";
}
