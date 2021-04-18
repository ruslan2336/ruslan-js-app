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
    document.write(pokemonList[i].name + " is average");
  }else if (pokemonList[i].height <50){
    document.write(pokemonList[i].name + " is small");
  }else {
    document.write(pokemonList[i].name + " is tall");
}
}