const data = require('./data');

// 1. retornar o pokemon mais forte de todos!
// retornar apenas o nome e sua força
// { name: 'exemplo', totalStats: '+ de 8 mil' }
function getStrongestPokemon() {
  return data.reduce((acc, curr) => (acc.stats.total > curr.stats.total ? acc : curr));
  // esse ternário dentro do reduce é o mesmo que isso:
  // if (acc.stats.total > curr.stats.total) {
  //   return acc
  // } else {
  //   return curr
  // }
}
// console.log(getStrongestPokemon());

// 2. fazer a contagem dos pokemons por tipo
// retornar um objeto onde a chave será o tipo e sua contagem o valor
// { fire: 10, water: 15, etc... }
function countPokemonTypes() {
  const reduceResult = data.reduce((acc, curr) => {
    curr.type.forEach((type) => {
      if (!acc[type]) {
        acc[type] = 1;
      } else {
        acc[type] += 1;
      }
    });
    return acc;
  }, {});
  return reduceResult;
}

// console.log(countPokemonTypes());

// 3. calcular a media dos status dos pokemons e o total de todos os pokemons
// retornar um objeto onde a chave será o status e o valor será a media
// { total: 8001, atk: 205, etc... }
function averagePokeStats() {
  const pokeStats = data.reduce((acc, currPoke, index) => {
    Object.entries(currPoke.stats).forEach(([stat, value]) => {
      if (!acc[stat]) {
        acc[stat] = value;
      } else {
        acc[stat] += value;
      }

      if (data.length - 1 === index) {
        acc[stat] /= data.length;
        acc[stat] = Number(acc[stat].toFixed(2));
      }
    });
    return acc;
  }, {});
  return pokeStats;
}

console.log(averagePokeStats());
