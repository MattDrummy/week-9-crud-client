$(document).ready(function(){
  $('.btn').click(function(event){
    $('.pageDisplay').css('display', 'none');
    $.get(url).then(selectBoxes)
    $('#readData').empty();
    $('#deleteData').empty();
    $('#updateData').empty();
    $('#updateForm').empty();
    $('#createData').empty();
    $(`#${this.name}`).css('display', 'block');
  })
  $('#readSel').change(readShowSingleGame);
  $('#deleteSel').change(deleteShowSingleGame);
  $('#updateSel').change(updateShowSingleGame);
  $('#postButton').click(createGameData);
  $('#readSearch').submit(searchData);
  // $('#searchButton').click(searchData);
});

const url = 'https://nameless-woodland-75573.herokuapp.com/api/v1/games'
// const url = 'http://localhost:8080/api/v1/games'

function selectBoxes(data) {
  let source = $("#selectBoxes").html();
  let template = Handlebars.compile(source);
  let html = template({numbers: data});
  $('#readSel').empty()
    .append('<option disabled selected>Choose an entry by name to read</option>')
    .append('<option value="all">ALL</option>')
    .append(html);
  $('#deleteSel').empty()
  .append('<option disabled selected>Choose an entry by name to delete</option>')
  .append(html);
  $('#updateSel').empty()
  .append('<option disabled selected>Choose an entry by name to update</option>')
  .append(html);
}
