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
 }
    function getAll() {
      return pokemonList;
    }
	//adding function for the list with buttons
	function addListItem(pokemonList) {
	let elementAdd = document.querySelector('ul');
	let listItem = document.createElement('li');
	let button = document.createElement('button'); //adding the button
	button.innerText = pokemonList.name;
	button.classList.add('newbutton');
	listItem.appendChild(button);
	elementAdd.appendChild(listItem);
	button.addEventListener('click', function (event) {
	let target = event.target;
	console.log(event);
	});
	}
	function showDetails(pokemonList){
	console.log()
	}
	return {
    add: add,
    getAll: getAll,
	addListItem: addListItem
  }
})();


pokemonRepository.getAll().forEach(function (pokemonList) {
	pokemonRepository.addListItem(pokemonList)
});
