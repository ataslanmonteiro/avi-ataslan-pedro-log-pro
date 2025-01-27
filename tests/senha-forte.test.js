const { validarSenhaForte } = require("../main/senha-forte.js");

describe("Testes para a fun. senhaForte", () => {
  test('Senha somente letras: f("senha") => false', () => {
    expect(validarSenhaForte("Senhaaaaaa")).toBeFalsy(); // Removi o .not()
  });

  test('Senha com tam. muito pequeno: f("A3&24") => false', () => {
    expect(validarSenhaForte("A3&24")).toBeFalsy(); // Removi o .not()
  });

  test('Senha apenas com números e especiais: f("34&23#") => false', () => {
    expect(validarSenhaForte("34&23#")).toBeFalsy(); // Removi o .not()
  });

  test('Testando uma senha muito longa: f("N4l@N3t983hkjh%%234jjkadfgeio1&&&") => false', () => {
    expect(validarSenhaForte("N4l@N3t983hkjh%%234jjkadfgeio1&&&")).toBeFalsy(); // Removi o .not()
  });

  test('Testando uma senha segura: f("N4l@N3t") => true', () => {
    expect(validarSenhaForte("N4l@N3t")).toBeTruthy(); // Removi o .not()
  });
});
