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
]
for (let i = 1; i < personheight; i++) {
  if (person[i].height <120 && person[i].height >50){
    document.write(person[i].name + " is average");
  }else if (person[i].height <50){
    document.write(person[i].name + " is small");
  }else {
    document.write(person[i].name + " is tall");
}
let Personheight = [
	{name: "Ruslan", height: 100},
	{name: "Anar", height: 20},
	{name: "Aida", height: 130}
	];