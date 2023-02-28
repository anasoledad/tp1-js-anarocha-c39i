//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Ingrese una frase");
let vocales = [];

for (let i = 0; i < frase.length; i++) {
  let letra = frase[i].toLowerCase();
  
  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    vocales.push(' '+letra);
  }
}

document.write("Las vocales de la frase son:" + vocales);
