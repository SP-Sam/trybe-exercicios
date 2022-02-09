const fs = require('fs').promises;

fs.writeFile('./my-file.txt', 'Segunda linha do meu arquivo')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });