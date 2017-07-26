const url = 'https://nameless-woodland-75573.herokuapp.com/api/v1/games'

function updateShowDatabase(data) {
  let source = $("#database").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#updateData').empty().append(html);
}

function updateShowSingleGame(event) {
  let id = $('#updateSel').val();
  $.get(`${url}/${id}`)
    .then(updateShowDatabase)
}
