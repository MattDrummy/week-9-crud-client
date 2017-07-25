function deleteShowDatabase(data) {
  let source = $("#database").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#deleteData').empty().append(html);
}

function deleteShowSingleGame(event) {
  let id = $('#deleteSel').val();
  $.get(`https://nameless-woodland-75573.herokuapp.com/api/v1/games/${id}`)
    .then(deleteShowDatabase)
}
