describe("Suite de teste de multiplicação", function() {

    var Calculadora = require('../../src/js/calculadora');

    it ('deve retornar 6 para 2 e 3', function() {
        expect(Calculadora.multiplicar(2, 3)).toEqual(6);
    });

    it ('deve retornar 6 para 2 e 3 em modo texto', function() {
        expect(Calculadora.multiplicar('2', '3')).toEqual(6);
    });

    it('deve retornar 4.5 para 1.5 e 3', function() {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 quando o numero 1 não for numérico', function() {
        expect(Calculadora.multiplicar(undefined, 3)).toEqual(0);
    });

    it('deve retornar 0 quando o numero 2 não for numérico', function() {
        expect(Calculadora.multiplicar(3, undefined)).toEqual(0);
    });
})