const simpsonsCharacters = require('./simpsons');

// Exercício 4.1
const readSimpsonsCharacters = (characters) => {
  const promise = new Promise((resolve, reject) => {
    if (!(Array.isArray(characters))) {
      reject(new Error('ERRO: voce precisa passar um array para a funcao'));
    }

    const charactersList = characters.forEach(character => {
      console.log(`${character.id} - ${character.name}`);
    })

    resolve(charactersList);
  })

  return promise;
};

// readSimpsonsCharacters(simpsonsCharacters)
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message));

// Exercício 4.2
const readSimpsonsCharacterId = (characterId) => {
  const promise = new Promise((resolve, reject) => {
    const hasCharacterId = simpsonsCharacters
      .some(simpsonsCharacter => Number(simpsonsCharacter.id) === characterId);
    
    if (!hasCharacterId) {
      reject(new Error('ERRO: ID nao encontrado'));
    }

    const characterInfo = simpsonsCharacters.find(character => {
      return Number(character.id) === characterId;
    });

    resolve(characterInfo);
  })

  return promise;
};

// readSimpsonsCharacterId(1)
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message));

// Exercício 4.3
const { writeFile } = require('fs').promises;

const removeCharacters = (idA, idB) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof idA != 'number' || typeof idB != 'number') {
      return reject(new Error('O ID especificado deve ser um numero'));
    }

    const characterList = simpsonsCharacters
      .filter(character => Number(character.id) != idA || Number(character.id) != idB);
    
    // const characterListToString = JSON.stringify(characterList);
    resolve(characterList);
    
    // writeFile('./simpsons.json', characterListToString)
    //   .then(() => resolve("Arquivo 'simpsons.json' alterado com sucesso."))
    //   .catch(
    //     err => console.error('ERRO: Nao foi possivel alterar o arquivo: ', err.message));
  });

  return promise;
};

removeCharacters(10, 6)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));