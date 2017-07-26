function updateShowDatabase(data) {
  let source = $("#updateBox").html();
  let template = Handlebars.compile(source);
  let html = template({games: data});
  $('#updateForm').empty().append(html);
  $('#putButton').click(updateGameData);
}

function updateShowSingleGame(event) {
  let id = $('#updateSel').val();
  $.get(`${url}/${id}`)
    .then(updateShowDatabase);
}

function updateGameData(event) {
  event.preventDefault();
  let form = this.parentNode;
  let inputs = form.getElementsByTagName('input');
  let game = {
    name: inputs[0].value === "" ? undefined : inputs[0].value,
    year: !inputs[1].value ? undefined : parseInt(inputs[1].value),
    developer: (inputs[2].value === "" ? undefined : inputs[2].value),
    directors: (inputs[3].value === "" ? undefined : inputs[3].value)
  }
  let id = $('#updateSel').val();
  $.ajax({
    url: `${url}/${id}`,
    method: 'PUT',
    data: game,
    success: function (data) {
      let source = $("#database").html();
      let template = Handlebars.compile(source);
      let html = template({games: data});
      $('#updateData').empty().append(html);
      $.get(url).then(selectBoxes)
    },
    error: function (error) {
    }
  })
}
