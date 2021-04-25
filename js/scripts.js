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

 function add(item) {
    if (typeof item === 'object') {
      pokemonList.push(item);
    }
 },
    function getAll() {
      return pokemonList;
    }
	return {
    add: add,
    getAll: getAll,
  }
})();


pokemonRepository.getAll().forEach(function (pokemon) {
	if (pokemon.height > 80) {
document.write('${pokemon.name} (height: ${pokemon.height}) is adult <br>');
	}
	else {
		document.write(`${pokemon.name}  (height:$ {pokemon.height}) is child<br>`)
	}
)};