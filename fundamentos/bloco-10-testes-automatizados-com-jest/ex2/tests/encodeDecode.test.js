const challenges = require('../challenges');

describe('9 - Crie uma função que Codifique e Decodifique', () => {
  test('Verifica se encode e decode são funções', () => {
    expect(typeof challenges.encode).toBe('function');
  });

  test('Verifica se encode("a, e, i, o, u") retorna "1, 2, 3, 4, 5"', () => {
    expect(challenges.encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  });

  test('Verifica se decode("1, 2, 3, 4, 5") retorna "a, e, i, o, u"', () => {
    expect(challenges.decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });

  test('Verifica se as funções decode e encode não convertem outras letras/números', () => {
    expect(challenges.decode('6, 7, 8, 9, 0')).toEqual('6, 7, 8, 9, 0');
    expect(challenges.encode('b, c, d, f, g')).toEqual('b, c, d, f, g');
  });

  test('Verifica se as strings retornadas tem o mesmo tamanho das strings dos parâmetros', () => {
    expect(challenges.decode('1, 2, 3, 4, 5').split(',').length).toBe(5);
    expect(challenges.encode('a, e, i, o, u').split(',').length).toBe(5);
  });
});
