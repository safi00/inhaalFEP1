console.log('script imported')

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#generate-all-pokemon');
    generateBtn.addEventListener('click', renderAll)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderAll(){
    console.log('all pokemon test, debug runs')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchAllPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#alola');
    generateBtn.addEventListener('click', renderAlola)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderAlola(){
    console.log('alola test, imported')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchAlolaPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#galar');
    generateBtn.addEventListener('click', renderGalar)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderGalar(){
    console.log('galar test, debug running')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchGalarPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#hoenn');
    generateBtn.addEventListener('click', renderHoenn)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderHoenn(){
    console.log('hoenn test, debug running')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchHoennPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#johto');
    generateBtn.addEventListener('click', renderJohto)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderJohto(){
    console.log('johto test, debug run')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchJohtoPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#kalos');
    generateBtn.addEventListener('click', renderKalos)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderKalos(){
    console.log('kalos test, debug run')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKalosPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#kanto');
    generateBtn.addEventListener('click', renderKanto)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderKanto(){
    console.log('kanto test, debug running')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#sinnoh');
    generateBtn.addEventListener('click', renderSinnoh)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderSinnoh(){
    console.log('sinnoh test, debug running')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchSinnohPokemon();

    getDeleteBtn().style.display = 'block'
}

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#unova');
    generateBtn.addEventListener('click', renderUnova)

    getDeleteBtn().addEventListener('click', deleteEverything);
})

function renderUnova(){
    console.log('unova test, debug running')
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchUnovaPokemon();

    getDeleteBtn().style.display = 'block'
}

function getDeleteBtn(){
    return document.querySelector('#delete-btn')
}

function fetchAllPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchAlolaPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=721&limit=88')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchGalarPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=809&limit=79')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchHoennPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=251&limit=135')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchJohtoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=151&limit=100')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchKalosPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=649&limit=72')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchSinnohPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=386&limit=107')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchUnovaPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=493&limit=166')
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
    let pokeName = document.createElement("button")
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
   
    let pokeTypes = document.createElement('ul')
    createTypes(pokeData.types, pokeTypes) 
    

    pokeName.id = `${pokeData.id}` + `${pokeData.name}`

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

    let generateBtn = document.createElement('button')
    generateBtn.innerText = "Generate All Pokemon"
    generateBtn.id = 'generate-all-pokemon'
    generateBtn.classList.add('ui', 'secondary', 'button')
    generateBtn.addEventListener('click', renderAll);

    allPokemonContainer.append(generateBtn)
}