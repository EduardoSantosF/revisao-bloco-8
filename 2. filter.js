const data = require('./data');

// - 1. encontrar pokemons por um tipo

// retorna a informação de todos pokemons de um tipo passado na função
function findAllPokemonsByType(searchType) {
  // uma forma de destructuring seria
  // const findResult = data.filter(({ type }) => {
  const findResult = data.filter((pokemon) => {
    // essa \/ é uma forma mais verbosa de destructuring porém geralmente é mais legível
    const { type } = pokemon;

    // includes retorna true caso o elemento (search) seja encontrado no array (type)
    const someResult = type.includes(searchType);
    return someResult;
  });
  return findResult;
}

// console.log(findAllPokemonsByType('grass'));

// - 1.2 encontrar por mais de um tipo

// retorna todos pokemons que possuírem todos os tipos passados para a função
function findAllPokemonsByTypes(...searchTypes) {
  const filterResult = data.filter((pokemon) => {
    const { type } = pokemon;

    // some para a iteração ao retornar true, retorna true se qualquer iteração for true
    // every para a iteração ao retornar false, só retorna true se todas iterações forem true
    const everyResult = searchTypes.every((search) => {
      // caso troque o every acima por um some a função passara a retornar
      // o pokemon que possuir um dos elementos passados
      const includesResult = type.includes(search);
      return includesResult;
    });

    return everyResult;
  });

  return filterResult;
}

// console.log(findAllPokemonsByTypes('grass', 'poison'));
