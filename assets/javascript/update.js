
function updateShowDatabase(data) {
  let source = $("#database").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#updateData').empty().append(html);
}

function updateShowSingleGame(event) {
  let id = $('#updateSel').val();
  if (id === 'all') {
    $.get(url)
      .then(updateShowDatabase);
  } else {
    $.get(`${url}/${id}`)
      .then(updateShowDatabase);
  }
}
