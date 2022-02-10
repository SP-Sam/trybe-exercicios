const { expect } = require("chai");
const { describe } = require("mocha");
const calculaSituacao = require('../calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it ('Retorna "Reprovado"', () => {
    const situacao = calculaSituacao(5);

    expect(situacao).to.be.equals('Reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('Retorna "Aprovado"', () => {
    const situacao = calculaSituacao(9);

    expect(situacao).to.be.equals('Aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('Retorna "Aprovado"', () => {
    const situacao = calculaSituacao(7);

    expect(situacao).to.be.equals('Aprovado');
  });
});