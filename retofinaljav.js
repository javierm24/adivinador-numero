var numeroAdivinar = Math.floor((Math.random() * 100) + 1);
var contadorRespuestas = 1;

adivinar = () => {

    var numeroRespuestas = document.getElementById('numeroRespuestas').value;

    if (document.getElementById('numeroRespuestas').disabled == false) {
        if (isNumber(numeroRespuestas) && numeroRespuestas > 0) {
            document.getElementById('numeroRespuestas').disabled = true;
            document.getElementById('numero').disabled = false;
            document.getElementById('numero').focus();
        }
    } else {
        var respuestas = document.getElementById('respuestas').innerHTML;
        if (contadorRespuestas < numeroRespuestas) {
            var numero = document.getElementById('numero').value;
            if (isNumber(numero) && numero > 0 && numero < 100) {
                contadorRespuestas += 1;
                if (numero > numeroAdivinar) {
                    respuestas += "<br>" + numero + " - El numero que buscas es inferior"
                } else if (numero < numeroAdivinar) {
                    respuestas += "<br>" + numero + " - El numero que buscas es superior";
                } else {
                    respuestas += "<br><span class='acertado'>" + numero + " - HAS ACERTADO!!</span>";
                    fin()
                }
                document.getElementById('numero').value = ""
            } else {
                respuestas += "<br><span class='error'>" + numero + " - Tiene que ser un valor numerico comprendido entre el 1 y 100</span>";
                fin()
            }
        } else {
            respuestas += "<br><span class='fin'>NO HAS ACERTADO!! El numero era el " + numeroAdivinar + "</span>";
        }
        document.getElementById('respuestas').innerHTML = respuestas;
    }
    return false;
}
function fin() {
    document.getElementById('numero').disabled = true;
    document.getElementById('btnEnviar').disabled = true;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
