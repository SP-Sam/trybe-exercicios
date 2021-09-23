
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

/* Para os exercícios 2 e 3
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

const getUserName = (userId) => findUserById(userId).then((user) => user.name); */

/* Exercício 2
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
}); */

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
const fetch = require('node-fetch');
  
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
})