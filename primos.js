
function esprimo(numero) {
    var i = 2;
    var esprimo = true;

    while (i<numero) {
        if (numero%i==0) {
            esprimo = false;
        }
        i++ 

    }
    return esprimo;
    }
