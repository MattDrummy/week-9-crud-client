$(document).ready(function(){
  // const url = 'https://nameless-woodland-75573.herokuapp.com/api/v1/games'
  const url = 'https://localhost:8080/api/v1/games'

  $('.btn').click(function(event){
    console.log(this.name);
    $('.pageDisplay').css('display', 'none');
    $(`#${this.name}`).css('display', 'block');
  })

// $.get(url)
//   .then(readDatabase)

$.get(`${url}/1`)
  .then(readDatabase)

});

function readDatabase(data) {
  console.log(data);
  var source   = $("#database").html();
  var template = Handlebars.compile(source);
  var context = {
    games: data,
    name: data.name,
    developer: data.developer,
    directors: data.directors,
    year: data.year
  };
  var html    = template(context);
  $('#read').append(html)
}
