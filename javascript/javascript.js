
      function calcularIva() {
        var precio = document.getElementById("precio").value;
        var porcentaje = document.getElementById("porcentaje").value;
        var iva = (precio * porcentaje) / 100;
        var precioConIva = parseFloat(precio) + parseFloat(iva);
        document.getElementById("resultado").innerHTML = precioConIva.toFixed(2);
      }
   