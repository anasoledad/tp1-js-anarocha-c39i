//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numero1 = parseInt(prompt('Ingrese un número'));

if(!isNaN(numero1)){
    let numero2 = parseInt(prompt('Ingrese otro número'));
    if(!isNaN(numero2)){
        if(numero1>numero2){
            document.write(`El número ${numero1} es mayor que ${numero2}`);
        }else if(numero2>numero1){
            document.write(`El número ${numero2} es mayor que ${numero1}`);
        }else{
            document.write('Los números son iguales');
        }
    }else{
        document.write(`El valor ingresado no es un número`)
    }
}else{
    document.write(`El valor ingresado no es un número`)
}   

