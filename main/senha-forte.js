/**
 * Defina uma função chamada validarSenhaForte(senha).
 * 
 * A função valida se uma string representado uma senha forte.
 * Uma senha forte deve apresentar:
 * a. Entre 6 à 10 caracteres.
 * b. Deve apresentar ao menos um caracter especial  (@,#,&,$,%).
 * c. Ao menos uma letra latina maiúscula (ex. A,B,C,D,...).
 * d. Deve conter ao menos um algorismo (ex. 0,1,2,...,9).
 * O usuário não pode ter mais que 120 anos de idade.
 * EXEMPLO:
 * Entrada: "29/06/1995"
 * Saída esperada: true.
*/

function validarSenhaForte(senha) {
  // Eu verifico o comprimento da senha
  if (senha.length < 6 || senha.length > 10) {
    return false;
  }
    
  // Eu uso as expressões regulares para verificar se os requisitos atendem
  const temMaiuscula = /[A-Z]/.test(senha);
  const temNumero = /\d/.test(senha);
  const temEspecial = /[@#&$%]/.test(senha);
    
  // Ele vai me retorna true se todas as condições forem atendidas
  return temMaiuscula && temNumero && temEspecial;
}

module.exports = {validarSenhaForte};
