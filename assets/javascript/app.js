const url = 'http://localhost:8080/api/v1/games'
$.get(url)
  .then((data) =>{
    console.log(data);
    $('body').append(`
      ${JSON.stringify(data)}
      `)
  })

  $.get(`${url}/1`)
    .then((data) => {
      console.log(data);
      $('body').append(`
        ${JSON.stringify(data)}
        `)
    })
