const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, chave, valor) => {
  const clone = Object.assign({}, objeto);

  clone[`${chave}`] = valor;
  Object.assign(lesson2, clone);

  return lesson2;
};

const listarChaves = (objeto) => Object.keys(objeto);

const tamanhoObjeto = (objeto) => Object.keys(objeto).length;

const listarValores = (objeto) => Object.values(objeto);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const contarEstudantes = (objeto) => {
  const alunos = objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes;

  return alunos;
};

const getValueByNumber = (objeto, index) => Object.values(objeto)[index];

const verificaPar = (objeto, chave, valor) => {
  const entradas = Object.entries(objeto);
  let igual = false;

  for (let i in entradas) {
    if (entradas[i][0] === chave && entradas[i][1] === valor) igual = true;
  }
  return igual;
};

console.log(adicionaTurno(lesson2, 'turno', 'manhã'));// Exercício 1
console.log(listarChaves(lesson3));// Exercício 2
console.log(tamanhoObjeto(lesson1));// Exercício 3
console.log(listarValores(lesson3));// Exercício 4
console.log(allLessons);// Exercício 5
console.log(contarEstudantes(allLessons));// Exercício 6
console.log(getValueByNumber(lesson3, 0));// Exercício 7
console.log(verificaPar(lesson3, 'materia', 'Maria Clara'));// Exercício 8
