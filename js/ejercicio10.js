//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numeroIngresado = parseInt(prompt('Ingrese un número'));

if(!isNaN(numeroIngresado)){
    if(numeroIngresado%2===0 || numeroIngresado%3===0 || numeroIngresado%5===0 || numeroIngresado%7===0){
      if(numeroIngresado%2===0){
        document.write(`El número ${numeroIngresado} es divisible por 2`);
      }else if(numeroIngresado%3===0){
        document.write(`El número ${numeroIngresado} es divisible por 3`);
      }else if(numeroIngresado%5===0){
        document.write(`El número ${numeroIngresado} es divisible por 5`);
      }else if(numeroIngresado%7===0){
        document.write(`El número ${numeroIngresado} es divisible por 7`);
      }
    }else{
      document.write(`El número ${numeroIngresado} no es divisible por 2, 3, 5 ni 7`)
    }
  }else{
      document.write(`El valor ingresado no es un número`)
  }
