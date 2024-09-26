const {contarVogais} = require('../main/contador');

describe('Testes para a fun. contarVogais',()=>{
    
    test('Vogais básicas: f("carioca") => 4',()=>{
        expect(contarVogais('carioca')).toEqual(4);
    });

    test('Palavra com acentos diacríticos: f("você") => 2',()=>{
        expect(contarVogais('você')).toEqual(2);
    });

    test('Palavra com acentos diacríticos: f("você") => 2',()=>{
        expect(contarVogais('você')).toEqual(2);
    });
    
    test('Vogais maiúsculas devem ser contabilizadas: f("VoCÊ Foi") => 4',()=>{
        expect(contarVogais('VoCÊ Foi')).toEqual(4);
    });
    
    test('Teste de frase longa: f("Que delícia saborear um delicioso melão!") => 19',()=>{
        expect(contarVogais('Que delícia saborear um delicioso melão!')).toEqual(19);
    });

});