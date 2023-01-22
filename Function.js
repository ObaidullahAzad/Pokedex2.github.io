
  function catchemall(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       getData(pokemon); 
     })
    })
   }
   function getData(pokemon){
    let url = pokemon.url
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData.name)
      document.querySelector('#search')
      .insertAdjacentHTML("beforebegin", `
      <div class="content">
      <img class="sugar"
      src="${pokeData.sprites.other.dream_world.front_default}" 
      alt="${pokeData.name}"/>
      <h1 class=Heading>${pokeData.name}</h1>
      <p class= "Weight">Weight : ${pokeData.weight}</p>
      <p class="Height">Height: ${pokeData.height}</p>
      <p class="Type">Type : ${pokeData.types[0].type.name}</p>
      <p class="Ability">Ability : ${pokeData.abilities[0].ability.name}
      
      







      </div>
      `);
      
    
      });

      
      
      

      }
 
      









