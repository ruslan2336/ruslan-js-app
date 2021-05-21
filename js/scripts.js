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
      let modalContainer = document.querySelector('#modal-container');
      function showModal(title, text) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);


        modalContainer.classList.add('is-visible');
      }

      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });
      modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });

      document.querySelector('#show-modal').addEventListener('click', () => {
        showModal(pokemon.name, pokemon.height);
      });
  });
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
