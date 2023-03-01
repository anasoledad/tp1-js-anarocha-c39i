//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let numeroIngresado = parseInt(prompt('Introduce un número'));
let divisores = [];

if(!isNaN(numeroIngresado)){
  if(numeroIngresado%2===0 || numeroIngresado%3===0 || numeroIngresado%5===0 || numeroIngresado%7===0){
    if(numeroIngresado%2===0){
      divisores.push(' '+ 2);
    }
    if(numeroIngresado%3===0){
      divisores.push(' '+ 3);
    }
    if(numeroIngresado%5===0){
      divisores.push(' '+ 5);
    }
    if(numeroIngresado%7===0){
      divisores.push(' '+ 7);;
    }
    document.write(`El número ${numeroIngresado} es divisible por:  ${divisores}`);
  }else{
    document.write(`El número ${numeroIngresado} no es divisible por ninguno de estos números`)
  }
}else{
    document.write(`El valor ingresado no es un número`)
}
