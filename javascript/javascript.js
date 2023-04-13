
function calcularIva() {

    var porcentaje = document.getElementById("porcentaje").value;
    if (porcentaje == 0) {
        var precio = document.getElementById("precio").value;
        var porcentaje = document.getElementById("porcentaje").value;
        var iva = (precio * 19) / 100;
        var precioConIva = parseFloat(precio) + parseFloat(iva);
        document.getElementById("resultado").innerHTML = precioConIva.toFixed(2);
        document.getElementById("resultadoIVA").innerHTML = iva.toFixed(2);
    } else {
        var precio = document.getElementById("precio").value;
        var porcentaje = document.getElementById("porcentaje").value;
        var iva = (precio * pocentaje) / 100;
        var precioConIva = parseFloat(precio) + parseFloat(iva);
        document.getElementById("resultado").innerHTML = precioConIva.toFixed(2);
        document.getElementById("resultadoIVA").innerHTML = iva.toFixed(2);
    }


}