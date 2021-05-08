let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
	function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
		  height: item.height
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
	function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
	loadDetails: loadDetails
  };
};

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

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
	showDetails(pokemonList);
	});
	}
	function showDetails(pokemonList){
	loadDetails(pokemonList),
	console.log(pokemonList)
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
