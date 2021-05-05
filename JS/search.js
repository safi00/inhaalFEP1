console.log('script imported')

function seachFunction() {
  const x = document.getElementById("searchForm");
  console.log(x.elements[0].value);
  let pokemonName = x.elements[0].value
  let returnValue = '' + pokemonName
  return returnValue
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#generate-pokemon');
    generateBtn.addEventListener('click', renderAll)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderAll(){
    console.log('search pokemon test, debug runs')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchAllPokemon();

    getDeleteBtn().style.display = 'block'
}

function getDeleteBtn(){
    return document.querySelector('#delete-btn')
}
// https://pokeapi.co/api/v2/pokemon/ditto
function fetchAllPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/' + seachFunction())
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url // pokemon url waar we de dier uit pakt
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}

function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    //TODO find away to make this buttons work
    let pokeName = document.createElement("BUTTON")
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
   
    let pokeTypes = document.createElement('ul')
    createTypes(pokeData.types, pokeTypes) 

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function deleteEverything(event){
    event.target.style = 'none';
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""
}