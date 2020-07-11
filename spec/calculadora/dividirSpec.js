describe("Suite de teste divisão", function() {

    var Calculadora = require('../../src/js/calculadora');

    it('deve retornar 2 para 6 e 3', function() {
        expect(Calculadora.dividir(6, 3)).toEqual(2);
    });

    it('deve retornar 2 para 6 e 3 formato text', function() {
        expect(Calculadora.dividir('6', '3')).toEqual(2);
    });

    it('deve retornar 1.5 para 4.5 e 3', function() {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it('deve retornar "Erro" divisão por 0', function() {
        expect(Calculadora.dividir(5, 0)).toEqual('Erro');
    });

    it ('deve retornar 0 quanto o número 1 não for numérico', function() {
        expect(Calculadora.dividir(undefined, 2)).toEqual(0);
    });


    it ('deve retornar 0 quanto o número 2 não for numérico', function() {
        expect(Calculadora.dividir(2, undefined)).toEqual(0);
    });
})