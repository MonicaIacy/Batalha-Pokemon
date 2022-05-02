let list = document.getElementById("list")


function consultarPokemon(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(function (response) {
    response.json().then(function (pokemon) {
      createPokemon (pokemon, num)
    })
  })
}

consultarPokemon()

function randomPokemons() {
  let fisrtId = Math.round(Math.random() * 150)
  let secondId = Math.round(Math.random() * 150)

  consultarPokemon(fisrtId, 1)
  consultarPokemon(secondId, 2)
  
}

function createPokemon (pokemon, num) {
  //converte os dados em html
  let item = list.querySelector(`#pokemon-${num}`)
  let image = item.getElementsByTagName("img")[0]
  image.setAttribute("src", pokemon.sprites.front_default)


  let name = item.getElementsByTagName("p")[0]
  name.textContent = pokemon.name

}

randomPokemons()