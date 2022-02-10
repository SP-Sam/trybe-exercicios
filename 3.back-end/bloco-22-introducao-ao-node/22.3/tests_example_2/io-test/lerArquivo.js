const fs = require('fs');

const lerArquivo = (nomeDoArquivo) => {
  try {
    const conteudo = fs.readFileSync(nomeDoArquivo, 'utf8');
    
    return conteudo;
  } catch (err) {
    return null;
  }
};

module.exports = lerArquivo;