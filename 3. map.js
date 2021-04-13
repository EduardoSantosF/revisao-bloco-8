const data = require('./data');

// - 1. montar array apenas com os nomes
// exemplo de retorno ['bulbasaur', 'charmander', 'squirtle', etc...]

// retorna um array dos nomes de todos pokemons
function pokemonsNames() {
  const mapResult = data.map(({ name }) => name);
  // nessa caso utilizamos direto o destructuring
  // mas poderíamos também fazer dessa forma
  // const mapResult = data.map((pokemon) => pokemon.name);
  return mapResult;
}

// console.log(pokemonsNames());

// - 2. adicionar mais informações de forma dinâmica no retorno
// exemplo de retorno
// [
//   {
//     name: 'bulbasaur',
//     type: ['poison', 'grass']
//   },
//   etc...
// ]

// retorna todas informações pedidas sobre todos pokemons de forma dinâmica
function pokemonsNamesAndInfo(...requiredInfo) {
  const mapResult = data.map((pokemon) => {
    const obj = {
      // o nome do pokemon sempre será retornado
      name: pokemon.name,
    };
    // forEach irá iterar dentro do array de informações pedidas
    requiredInfo.forEach((info) => {
      // e adicionará aquela informação na chave com o mesmo nome no nosso objeto
      obj[info] = pokemon[info];
      // exemplo se info for stats esse será o nosso objeto
      // { name: 'pokeName', stats: {atk, etc...}}
      // e assim por diante toda informação que for pedida no requiredInfo
      // será adicionada no obj
    });

    return obj;
  });

  return mapResult;
}

// console.log(pokemonsNames('type', 'id'));
// console.log(pokemonsNames('stats', 'type', 'id'));
// console.log(pokemonsNames('stats'));
