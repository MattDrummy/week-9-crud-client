
function deleteShowDatabase(data) {
  let source = $("#database").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#deleteData').empty().append(html);
}

function deleteShowSingleGame(event) {
  let id = $('#deleteSel').val();
  if (id === 'all') {
    $.get(url)
      .then(deleteShowDatabase)
  } else {
    $.get(`${url}/${id}`)
      .then(deleteShowDatabase)
  }
}
