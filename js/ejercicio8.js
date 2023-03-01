//8.- Escribe un programa que pida un número y diga si es divisible por 2
let numero1 = parseInt(prompt('Ingrese un número'));

if(!isNaN(numero1)){
    if (numero1 % 2 === 0){
        document.write(`El número ${numero1} es divisible por 2`);
    }else{
        document.write(`El número ${numero1} no es divisible por 2`);
    }
}else{
    document.write(`El valor ingresado no es un número`)
}
