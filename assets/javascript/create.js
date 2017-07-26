function createGameData(event) {
  event.preventDefault();
  let form = this.parentNode;
  let inputs = form.getElementsByTagName('input');
  let game = {
    name: inputs[0].value,
    year: parseInt(inputs[1].value),
    developer: inputs[2].value,
    directors: inputs[3].value
  }
  $.post(url, game)
    .then((data) => {
      let source = $("#database").html();
      let template = Handlebars.compile(source);
      let html = template({games: data});
      $('#createData').empty().append(html);
    })
}
