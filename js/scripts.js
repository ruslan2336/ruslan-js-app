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
for (let i = 0; i < pokemonList.height; i++) {
  if (height <120 && height >50){
    document.write(pokemonList[i].name + " is average");
  }else if (height <50){
    document.write(pokemonList[i].name + " is small");
  }else {
    document.write(pokemonList[i].name + " is tall");
}