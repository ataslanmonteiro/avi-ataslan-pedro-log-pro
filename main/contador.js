/**
 * Defina uma função chamada contarVogais(frase).
 * 
 * A função retorna o número de vogais presentes em uma frase.
 * EXEMPLO:
 * Entrada: "Você deveria saber isso"
 * Saída esperada: 10.
*/


function contarVogais(frase) {
    
  let vogais = "aeiouáéíóúâêîôûãõAEIOUÁÉÍÓÚÂÊÎÔÛÃÕ";
  let contador = 0;

  for(let char of frase) {
    if(vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
    
}

module.exports = {contarVogais}