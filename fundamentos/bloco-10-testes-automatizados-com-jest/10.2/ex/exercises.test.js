
/* Exercício 1
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Exercício 1', () => {
  it('Verificar se a função uppercase retorna uma string maiúscula', (done) => {
    uppercase('javascript', (str) => {
      try {
        expect(str).toBe('JAVASCrIPT');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
}) */

// Para os exercícios 2 e 3
const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);
  
  if (result) {
    return resolve(result);
  }
  
  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// Exercício 2
describe('getUserName - promise', () => {
  describe('quando o usuário existe', () => {
    it('retorna o nome do usuário', () => (
      getUserName(1).then((data) => expect(data).toEqual('Mark'))
      ));
    });
    
    describe('quando o usuário não existe', () => {
      it('retorna um erro', () => {
        expect.assertions(1);
        return getUserName(3).catch((error) =>
        expect(error.message).toMatch('User with 3 not found.'));
      });
    });
});

/* Exercício 3
describe('getUserName - promise', () => {
  describe('quando o usuário existe', () => {
    it('retorna o nome do usuário', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');
    });
  });
  
  describe('quando o usuário não existe', () => {
    it('retorna um erro', async () => {
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.');
      }
    });
  });
}); */
/* return fetch(url)
.then(response => response.json())
  .then((data) => {
    return data.map((repo) => repo.name);
  }); */

/* const fetch = require('node-fetch');
  
const getRepos = async (url) => {
  const response = await fetch(url);
  const toJson = await response.json();
  return toJson.map((repo) => repo.name);
};

it('Retorn uma lista de repositorios', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  const response = await getRepos(url);

  expect(response).toContain('sd-01-week4-5-project-todo-list');
  expect(response).toContain('sd-01-week4-5-project-meme-generator');
}) */

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((animal) => animal.name === name);

      if (result) resolve(result);
      
      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.filter((animal) => animal.age === age);

      if (result.length > 0) resolve(result);
      
      return reject(new Error('Nenhum animal encontrado!'));
    }, 100);
  })
);

describe('Testando promise - findAnimalByName', () => {
  // 6.1
  describe('Quando existe o animal com o nome procurado', () => {
    it('Retorna o objeto do animal', async () => {
      const response = await findAnimalByName('Soneca');
      expect(response).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', async () => {
      try {
        await findAnimalByName('Bob');
      } catch (error) {
        expect(error.message).toEqual('Nenhum animal com esse nome!');
      }
    });
  });

  // 6.2
  describe('Quando existe o animal com a idade informada', () => {
    it('Retorna o objeto do animal', async () => {
      const response = await findAnimalByAge(5);
      expect(response).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
    })
  })

  describe('Quando não existe o animal com a idade informada', () => {
    it('Retorna um erro', async () => {
      try {
        await findAnimalByAge(9);
      } catch (error) {
        expect(error.message).toEqual('Nenhum animal encontrado!');
      }
    })
  })
});