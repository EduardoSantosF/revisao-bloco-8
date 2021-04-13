const data = require('./data');

// - 1. encontrar pokemon pelo id

// retorna toda informação do pokemon encontra a partir de um id passado para a função
function findPokemonById(id) {
  const findResult = data.find((pokemon) => pokemon.id === id);
  return findResult;
}

console.log(findPokemonById(5));
