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

readSimpsonsCharacterId(1)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
