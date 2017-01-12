const API_URL = getHostUrl();

$(document).ready(function() {
  // console.log("here");
  const params = parseQuery(window.location.search);

  getAllBooks()
  // getAllBooks(params.id)
    .then(addBooksToPage);

});

function getHostUrl() {
  if(window.location.host.indexOf('localhost') != 1) {
    return 'http://localhost:3000';
  } else {
    return 'https://galvanize-reads-dph.heroku.com';
  }
}

function parseQuery(query) {
  return query.substr(1)
  .split('&')
  .reduce((params, keyValue) => {
    const parts = keyValue.split('=');
    params[parts[0]] = parts[1];
    return params;
  }, {});
}

function getAllBooks(id) {
  return $.get(`${API_URL}/books`);
}

// function addBooksToPage(books){
function addBooksToPage(books){
  let source = $('#books_template').html();
  let template = Handlebars.compile(source);
  let content = {books};
  console.log(content);
  let html = template(content);
  $('.books').html(html);
}


// function addStickers(stickers){
//   let source = $('#sticker-template').html();
//   let template = Handlebars.compile(source);
//   let context = {stickers}; // {stickers:stickers} is the same
//   let html = template(context);
//   $('.stickers').html(html);
// }
//
//
// function addUserInfoToPage(user) {
//   let source = $('#user-template').html();
//   let template = Handlebars.compile(source);
//   let context = user;
//   let html = template(context);
//   $('.user').html(html);
//   return user.id;
// }
