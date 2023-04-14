
function calcularIva() {

    var porcentaje = document.getElementById("porcentaje").value;
      console.log(porcentaje);
    if (porcentaje == '') {
        var precio = document.getElementById("precio").value;
        porcentaje = document.getElementById("porcentaje").value;
        var iva = (precio * 19) / 100;
        var precioConIva = parseFloat(precio) + parseFloat(iva);
        document.getElementById("resultado").innerHTML = precioConIva.toFixed(2);
        document.getElementById("resultadoIVA").innerHTML = iva.toFixed(2);
    } else {
        var precio = document.getElementById("precio").value;
        porcentaje = document.getElementById("porcentaje").value;
        var iva = (precio * porcentaje) / 100;  
        var precioConIva = parseFloat(precio) + parseFloat(iva);
        document.getElementById("resultado").innerHTML = precioConIva.toFixed(2);
        document.getElementById("resultadoIVA").innerHTML = iva.toFixed(2);
    }


}

function limpiar() {
    document.getElementById("precio").value = '';
    document.getElementById("porcentaje").value = '';
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("resultadoIVA").innerHTML = '';

 }