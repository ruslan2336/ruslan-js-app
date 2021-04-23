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
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height <120 && pokemonList[i].height >50){
    document.write(pokemonList[i].name + " is average ");
  }else if (pokemonList[i].height <50){
    document.write(pokemonList[i].name + " is small ");
  }else {
    document.write(pokemonList[i].name + " is tall ");
}
}

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
      pokemonList.push(pokemon);
    },
    function: getAll() {
      return pokemonList;
    }
  };
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]