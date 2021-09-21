const sum = require('./sum');

describe('Parte I', () => {
  test('Verifica sem sum(4, 5) é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  test('Verifica sem sum(0, 0) é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  test('Verifica se sum(4, "5") lança um erro', () => {
    expect(() => sum(4, '5')).toThrow();
  })

  test('Verifica se sum(4, "5") lança a mensagem de erro "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })
})