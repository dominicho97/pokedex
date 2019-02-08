$(".trueInput").keydown(function(e) {
  if (e.keyCode === 13) {
    fetch(
      "https://pokeapi.co/api/v2/pokemon/" +
        $(".trueInput")
          .val()
          .toLowerCase() +
        "/"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        displayOnScreen(myJson);
      });
    fetch(
      "https://pokeapi.co/api/v2/pokemon-species/" +
        $(".trueInput")
          .val()
          .toLowerCase() +
        "/"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(my2Json) {
        displayPrevious(my2Json);
      });
  }
});

function displayOnScreen(myJson) {
  $(".heightText").text(JSON.stringify(myJson.id));
  let moves = myJson.moves;
  //console.log(moves)
  let result = moves.map(a => a.move.name);
  $(".descriptionText").text(result);

  let pictures = myJson.sprites.front_default;
  // let resultPic = pictures.map(a => a.front_default)
  //console.log(pictures)
  $(".pokeImage").attr("src", pictures);

  //  $(".descriptionText").text(JSON.stringify(myJson.move));
}

function displayPrevious(my2Json) {
  $(".typeText").text(my2Json.evolves_from_species.name);
}

//https://codepen.io/rocherf/pen/ZvxdxR
