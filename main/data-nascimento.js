/**
 * Defina uma função chamada validarDataNascimento(data).
 * 
 * A função valida se uma string representado uma dada no formato dd/mm/aaaa
 * é válida para cadastro de um usuário.
 * O usuário não pode ter mais que 120 anos de idade.
 * EXEMPLO:
 * Entrada: "29/06/1995"
 * Saída esperada: true.
*/

function validarDataNascimento(data) {
// A gente tem que verificar se a data está no formato dd/mm/aaaa
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  const match = data.match(regex);

  if(!math) {
    return false;
  }
  const dia = parseInt(math[1], 10);
  const mes = parseInt(math[2], 10);
  const ano = parsetInt(math[3], 10);

  // Aqui verifica se o més é válido 
  if(mes < 1 || mes > 12) {
    return false
  }
  // aqui eu pego o ano atual usando a função getFullYear()
  const anoAtual = new Date().getFullYear();

  // verifica o ano
  if(ano < 1904 || ano > anoAtual) {
    return false;
  }

  const diasPorMes = [
    31, // Janeiro (31 dias)
    (ano % 4 == 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28, // Fevereiro,
    31, // Março
    30, // Abril
    31, // Maio
    30, // Junho
    31, // Julho
    31, // Agosto
    30, // Setembro
    31, // Outubro
    30, // Novembro
    31, // Dezembro
  ]
  
  if(dia < 1 || dia > diasPorMes[mes - 1]) {
    return false;
  }

  return true;
}

module.exports = {validarDataNascimento};