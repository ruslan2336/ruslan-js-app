let pokemonRepository = (function () {
	let pokemonList = [
		{
		name: "Ruslan", 
		types: ['grass', 'poison'], 
		height: 100
		}, 
		{
		name: "Anar", 
		types: ['water', 'honey'], 
		height: 20
		},
		{
		name: "Aida", 
		types: ['grass', 'water'], 
		height: 130
		}
	];

  return {
    add: function(pokemon) {
      pokemonList.add(item);
    },
    function: pokemonList.getAll() {
      return pokemonList;
    }
  };
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pikachu' });
document.write(pokemon.name + '- Height: ' + pokemon.height + ', Type: ' + pokemon.type + '<br>');