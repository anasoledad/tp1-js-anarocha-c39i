//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));

if(numero1>numero2){
    document.write(`El número ${numero1} es mayor que ${numero2}`);
}else if(numero2>numero1){
    document.write(`El número ${numero2} es mayor que ${numero1}`);
}else{
    document.write('Los números son iguales');
}

