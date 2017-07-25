$(document).ready(function(){
  const url = 'https://nameless-woodland-75573.herokuapp.com/api/v1/games'
  // const url = 'https://localhost:8080/api/v1/games'

  $('.btn').click(function(event){
    $('.pageDisplay').css('display', 'none');
    $(`#${this.name}`).css('display', 'block');
  })

  $('#readSel').change(readSingleGame)
  $.get(url).then(readSelectBox)
  $.get(url).then(readDatabase)

});

function readDatabase(data) {
  $('#read').empty();
  let source = $("#database").html();
  let template = Handlebars.compile(source);
  let context = {
    games: data,
    name: data.name,
    developer: data.developer,
    directors: data.directors,
    year: data.year
  };
  let html = template(context);
  $('#read').append(html);
}

function readSingleGame(event) {
  let name = $('#readSel').text();
  $.get(`${url}/${name}`)
    .then(readDatabase)
}

function readSelectBox(data) {
  let source = $("#readSelectBox").html();
  let template = Handlebars.compile(source);
  let context = {
    numbers: data,
    name: data.name
  };
  let html = template(context);
  $('#readSel').append(html);
}
