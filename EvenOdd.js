
// EJERCICIO FUNCIONES RESPUESTA PAR(EVEN) IMPAR (ODD)

function evenOdd(num){
    if(num%2==0){
        return'par';
    }
    else{
        return'impar';
    }
}

// En una línea
// function evenOdd(num){ (num%2==0)? alert('Par'): alert('Impar');}

var respUsuario=parseInt(prompt('Dime un número: '));
var resultado=evenOdd(respUsuario);
alert('El número que has introducido es ' +resultado+ '.')

