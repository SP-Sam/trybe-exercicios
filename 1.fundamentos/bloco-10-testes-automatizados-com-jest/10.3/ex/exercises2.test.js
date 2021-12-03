const ex = require('./exercises2');

/* describe('Exercícios 1 a 3', () => {
  it('Exercício 1', () => {
    ex.generateRandomNumber = jest.fn().mockReturnValue(10);
    
    expect(ex.generateRandomNumber()).toBe(10);
    expect(ex.generateRandomNumber).toHaveBeenCalled()
    expect(ex.generateRandomNumber).toHaveBeenCalledTimes(1);
  })

  it('Exercício 2', () => {
    ex.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
    expect(ex.generateRandomNumber(20, 10)).toBe(2);
    expect(ex.generateRandomNumber).toHaveBeenCalled();
    expect(ex.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(ex.generateRandomNumber).toHaveBeenCalledWith(20, 10);
  })
  
  it('Exercício 3', () => {
    ex.generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    
    expect(ex.generateRandomNumber(2, 3, 4)).toBe(24);
    expect(ex.generateRandomNumber).toHaveBeenCalled();
    expect(ex.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(ex.generateRandomNumber).toHaveBeenCalledWith(2, 3, 4);
    
    ex.generateRandomNumber.mockRestore();
    
    ex.generateRandomNumber = jest.fn().mockImplementation(param => param * 2);

    expect(ex.generateRandomNumber(5)).toBe(10);
    expect(ex.generateRandomNumber).toHaveBeenCalled();
    expect(ex.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(ex.generateRandomNumber).toHaveBeenCalledWith(5);
  })
}) */

// jest.mock('./exercises2');
/* describe('Exercício 4', () => {
  it('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    ex.toUpperCase.mockImplementation(a => a.toLowerCase());

    expect(ex.toUpperCase('SAMUEL')).toBe('samuel');
    expect(ex.toUpperCase).toHaveBeenCalled();
    expect(ex.toUpperCase).toHaveBeenCalledTimes(1);
    expect(ex.toUpperCase).toHaveBeenCalledWith('SAMUEL');
  })
  
  it('mockando função que recebe um parâmetro e retorna a última letra', () => {
    ex.firstLetter.mockImplementation(str => str[str.length - 1]);
    
    expect(ex.firstLetter('Samuel')).toBe('l');
    expect(ex.firstLetter).toHaveBeenCalled();
    expect(ex.firstLetter).toHaveBeenCalledTimes(1);
    expect(ex.firstLetter).toHaveBeenCalledWith('Samuel');
  })
  
  it('mockando função que recebe 3 parâmetros e os concatena', () => {
    ex.concat.mockImplementation((a, b, c) => `${a}${b}${c}`);
    
    expect(ex.concat('Sa', 'mu', 'el')).toBe('Samuel');
    expect(ex.concat).toHaveBeenCalled();
    expect(ex.concat).toHaveBeenCalledTimes(1);
    expect(ex.concat).toHaveBeenCalledWith('Sa', 'mu', 'el');
  })
}) */

/* describe('Exercício 5', () => {
  it('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const toUpperCase = jest
      .spyOn(ex, 'toUpperCase')
        .mockImplementation(str => str.toLowerCase());
    
    expect(toUpperCase('SAMUEL')).toBe('samuel');
    expect(toUpperCase).toHaveBeenCalled();
    expect(toUpperCase).toHaveBeenCalledTimes(1);
    expect(toUpperCase).toHaveBeenCalledWith('SAMUEL');

    ex.toUpperCase.mockRestore();

    expect(ex.toUpperCase('samuel')).toBe('SAMUEL');
  })
}) */

describe('Exercício 6', () => {
  ex.fetchDog = jest.fn();
  afterEach(ex.fetchDog.mockReset);

  it('testando requisição caso a promisse resolva', async () => {
    ex.fetchDog.mockResolvedValue('request success');

    ex.fetchDog();
    expect(ex.fetchDog).toHaveBeenCalled();
    expect(ex.fetchDog).toHaveBeenCalledTimes(1);
    await expect(ex.fetchDog()).resolves.toBe('request success');
    expect(ex.fetchDog).toHaveBeenCalledTimes(2);
  })

  it('testando requisição caso a promisse seja rejeitada', async () => {
    ex.fetchDog.mockRejectedValue('request failed');

    ex.fetchDog();
    expect(ex.fetchDog).toHaveBeenCalled();
    expect(ex.fetchDog).toHaveBeenCalledTimes(1);
    await expect(ex.fetchDog()).rejects.toMatch('request failed');
    expect(ex.fetchDog).toHaveBeenCalledTimes(2);
  })
})