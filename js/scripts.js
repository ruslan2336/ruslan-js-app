let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

 function add(item) {
    if (typeof item === 'object') {
      pokemonList.push(item);
    }
 }
    function getAll() {
      return pokemonList;
    }

		function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
		}
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
function showDetails(pokemon) {
loadDetails(pokemon).then(function () {
  let modalBody = document.querySelector(".modal-body");
  let modalTitle = document.querySelector(".modal-title");
  let modalHeader = document.querySelector(".modal-header");

  modalBody.innerHTML= "";
  modalTitle.innerHTML = "";
 // create h1 element for our pokemon name
 let elementTitle = document.createElement("h1");
  elementTitle.innerText= capitalize(pokemon.name);
  modalTitle.appendChild(elementTitle);

  //create p element for pokemon height and type
 let elementHeightType = document.createElement("p");
  elementHeightType.innerText =` is ${pokemon.height} meter(s) tall and is a ${returnValue(pokemon.types)}`;
  modalBody.appendChild(elementHeightType);
  // create image element for pokemon image
  let imageElement = document.createElement("img");
  modalBody.appendChild(imageElement);
  imageElement.src = pokemon.imageUrl;
  imageElement.classList.add("img-element")
});

}
function addListItem(pokemon){
let listPokemon = document.querySelector(".pokemon-list");
listPokemon.classList.add()
let listItem = document.createElement("li");

listItem.classList.add("list-group-item");
listItem.classList.add("list-group-item-action");
listItem.classList.add("mb-2")
let button = document.createElement("button");
button.innerText= pokemon.name;
button.classList.add("btn");
button.classList.add("btn-dark");
button.classList.add("btn-block")
button.setAttribute("data-target","#pokemonModal")
button.setAttribute("data-toggle","modal")
listPokemon.appendChild(listItem);
listItem.appendChild(button);

//add event listener to our items button that show details
button.addEventListener("click",function(event){
showDetails(pokemon)
});
}
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
	addListItem: addListItem
  };
})();

pokemonRepository.loadList().then(function (){
  pokemonRepository.getAll().forEach(function (pokemonList) {
    pokemonRepository.addListItem(pokemonList)
  });
})


// Show modal function
// let pokemonRepository = (function() {
//   let modalContainer = document.querySelector('#modal-container');
//   function showModal(title, text) {
//     modalContainer.innerHTML = '';
//     let modal = document.createElement('div');
//     modal.classList.add('modal');
//
//     let closeButtonElement = document.createElement('button');
//     closeButtonElement.classList.add('modal-close');
//     closeButtonElement.innerText = 'Close';
//     closeButtonElement.addEventListener('click', hideModal);
//
//     let titleElement = document.createElement('h1');
//     titleElement.innerText = title;
//
//     let contentElement = document.createElement('p');
//     contentElement.innerText = text;
//
//     modal.appendChild(closeButtonElement);
//     modal.appendChild(titleElement);
//     modal.appendChild(contentElement);
//     modalContainer.appendChild(modal);
//
//
//     modalContainer.classList.add('is-visible');
//   }
//
//   function hideModal() {
//     modalContainer.classList.remove('is-visible');
//   }
//
//   window.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//       hideModal();
//     }
//   });
//   modalContainer.addEventListener('click', (e) => {
//     // Since this is also triggered when clicking INSIDE the modal
//     // We only want to close if the user clicks directly on the overlay
//     let target = e.target;
//     if (target === modalContainer) {
//       hideModal();
//     }
//   });
//
//   document.querySelector('#show-modal').addEventListener('click', () => {
//     showModal('Modal title', 'This is the modal content!');
//   });
//
// })();
