/* const makeObject = (object = {}, key, value) => {
  object[key] = value;

  return object;
}

console.log(makeObject(aluno = {}, 'idade', 20)); */

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


const skills = (student) => {
  const skillsArray = Object.values(student);
  for (index in skillsArray) {
    console.log(`${skillsArray[index]}, Nível: ${student[skillsArray[index]]}`);
  }
};

console.log('Estudante 1');
skills(student1);

console.log('\nEstudante 2');
skills(student2);
