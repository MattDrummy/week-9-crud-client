function deleteShowDatabase(data) {
  let source = $("#deleteThisData").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#deleteData').empty().append(html);
  $('#deleteButton').click(deleteGameData);
}

function deleteShowSingleGame(event) {
  let id = $('#deleteSel').val();
  $.get(`${url}/${id}`)
    .then(deleteShowDatabase)
}

function deleteGameData(event) {
  event.preventDefault();
  let id = $('#deleteSel').val();
  $.ajax({
    url: `${url}/${id}`,
    method: 'DELETE',
    success: function (data) {
      let source = $("#deletedDatabase").html();
      let template = Handlebars.compile(source);
      let html = template({games: data});
      $('#deleteData').empty().append(html);
      $.get(url).then(selectBoxes)
    },
    error: function (error) {
    }
  })
}
