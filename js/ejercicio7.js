//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numero1 = parseInt(prompt('Ingrese primer número'));

if(!isNaN(numero1)){
    let numero2 = parseInt(prompt('Ingrese segundo número'));
    if(!isNaN(numero2)){
        let numero3 = parseInt(prompt('Ingrese tercer número'));
        if(!isNaN(numero3)){
            if(numero1!=numero2 || numero1!=numero3 || numero2!=numero3){
                if(numero1>numero2&&numero1>numero3){
                    document.write(`El número ${numero1} es el mayor`);
                }else if(numero2>numero3){
                    document.write(`El número ${numero2} es el mayor`);
                }else{
                    document.write(`El número ${numero3} es el mayor`);
                }
            }else{
                document.write('Los números son iguales');
            }
        }else{
            document.write(`El valor ingresado no es un número`)
        } 
    }else{
        document.write(`El valor ingresado no es un número`)
    }    
}else{
    document.write(`El valor ingresado no es un número`)
}
