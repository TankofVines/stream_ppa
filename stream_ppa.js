var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'jXoqSIdop2bYKccWN0wDQ',
  consumer_secret: 'VKWMpWPvmdVFdLFzmmSfwRL6qOYMGUIPlJRqaYAuw',
  access_token_key: '275299720-xIPPoZTYrkTXjErUoA3LjAASRQ1g4EAIzjRG7vVK',
  access_token_secret: 'cEJCS2m5H7Ap87OrSShkMeTQy9oeWc6kJYdxW2fts'
});

twit.stream('statuses/filter', {'locations':'-82.662864,27.719286,-82.646416,27.719443,-82.663361,27.704752,-82.646324,27.704868'},
function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});