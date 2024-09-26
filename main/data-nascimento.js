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
  // Eu vou verifica o padrão do formato dd/mm/aaaa
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = data.match(regex);

  // Faço a verificação se não corresponde ao formato
  if (!match) return false;

  const dia = parseInt(match[1], 10);
  const mes = parseInt(match[2], 10);
  const ano = parseInt(match[3], 10);

  // Faço a verificação se o mês é válido (1-12)
  if (mes < 1 || mes > 12) return false;

  // Verifica se o ano está entre 1904 e o ano atual
  const anoAtual = new Date().getFullYear();
  if (ano < 1904 || ano > anoAtual) return false;

  // Define os dias máximos de cada mês
  const diasPorMes = [
    31,
    ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  // Verifica se o dia é válido para o mês específico
  if (dia < 1 || dia > diasPorMes[mes - 1]) return false;

  return true;
}

module.exports = {validarDataNascimento};