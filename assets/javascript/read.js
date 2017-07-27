function readShowDatabase(data) {
  let source = $("#database").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#readData').empty().append(html);
}

function readShowSingleGame(event) {
  let id = $('#readSel').val();
  if (id === 'all') {
    $.get(url)
      .then(readShowDatabase)
  } else {
    $.get(`${url}/${id}`)
      .then(readShowDatabase)
  }
}

function searchData(event){
  event.preventDefault();
  $.get(`${url}?search=${$('#searchInput').val()}`)
    .then(readShowDatabase)
}
