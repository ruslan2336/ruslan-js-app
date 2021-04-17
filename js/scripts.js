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
for (let i = 1; i < pokemonList; i++) {
  if (height <120 && height >50){
    document.write(name + " is average");
  }else if (height <50){
    document.write(name + " is small");
  }else {
    document.write(name + " is tall");
}