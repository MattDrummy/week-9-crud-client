function readShowDatabase(data) {
  let source = $("#database").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#readData').empty().append(html);
}

function readShowSingleGame(event) {
  let id = $('#readSel').val();
  if (id === 'all') {
    $.get(`https://nameless-woodland-75573.herokuapp.com/api/v1/games/`)
      .then(readShowDatabase)
  } else {
    $.get(`https://nameless-woodland-75573.herokuapp.com/api/v1/games/${id}`)
      .then(readShowDatabase)
  }
}
