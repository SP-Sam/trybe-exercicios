const math = require('./math');

describe('Para fixar', () => {
  it('Testar a chamada da função subtrair', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  })

  it('Definir 10 como retorno padrão da função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  })

  it('Testar a chamada, retorno e parâmetros da função somar, passando dois valores', async () => {
    const soma = jest.spyOn(math, 'somar');
    soma.mockResolvedValue(5);

    soma(2, 3);
    expect(soma).toHaveBeenCalled();
    await expect(soma(2, 3)).resolves.toBe(5);
    expect(soma).toHaveBeenCalledWith(2, 3);
  })

  it('Testar a chamada, retorno, quantas vezes foi chamada e parâmetros da função dividir', () => {
    const dividir = jest.spyOn(math, 'dividir');
    dividir.mockReturnValue(15);
    dividir.mockReturnValueOnce(2);
    dividir.mockReturnValueOnce(5);

    expect(dividir(6, 3)).toBe(2);
    expect(dividir).toHaveBeenCalled();
    expect(dividir).toHaveBeenCalledWith(6, 3);
    expect(dividir).toHaveBeenCalledTimes(1);

    expect(dividir(10, 2)).toBe(5);
    expect(dividir).toHaveBeenCalled();
    expect(dividir).toHaveBeenCalledWith(10, 2);
    expect(dividir).toHaveBeenCalledTimes(2);

    expect(dividir(30, 2)).toBe(15);
    expect(dividir).toHaveBeenCalled();
    expect(dividir).toHaveBeenCalledWith(30, 2);
    expect(dividir).toHaveBeenCalledTimes(3);
  })

  it('Mock da função subtrair de modo que possa restaurar sua implementação original', () => {
    const subtrair = jest.spyOn(math, 'subtrair');
    subtrair.mockImplementation((a, b) => a + b);
    subtrair.mockReturnValue(20);

    expect(subtrair(10, 10)).toBe(20);
    expect(subtrair).toHaveBeenCalledTimes(1);
    
    subtrair.mockRestore();

    subtrair.mockReturnValue(10);

    expect(subtrair(12, 2)).toBe(10);
    expect(subtrair).toHaveBeenCalledTimes(1);
  })
})