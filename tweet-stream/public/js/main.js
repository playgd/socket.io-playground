;(function( io ) {
  var $tweets = document.querySelector( '[data-js="tweets"]' );
  var socket = io( 'http://localhost:3000' );
  var tweet = [];
  var text = [];
  var screenName;
  socket.on( 'tweet', function( data ) {
    screenName = data.user.screen_name;
    text = '<li class="tweets-list__item">' +
        '<img src="' + data.user.profile_image_url + '" />' +
        data.text + ' via ' +
        '<strong>' +
          '<a href="https://twitter.com/' + screenName + '">@' + screenName + '</a>' +
        '</strong>' +
      '</li>';

    tweet.unshift( text );
    $tweets.innerHTML = tweet.join( '' );
  });
})( io );
