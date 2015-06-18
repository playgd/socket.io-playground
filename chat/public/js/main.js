;(function( io, undefined ) {
  function app() {
    var $public = {};
    var $private = {};

    $private.socket = io();
    $private.$form = document.querySelector( '[data-js="form"]' );
    $private.$input = document.querySelector( '[data-js="input"]' );
    $private.$messages = document.querySelector( '[data-js="messages"]' );
    $private.$isTyping = document.querySelector( '[data-js="is-typing"]' );

    $public.init = function init() {
      $private.initEvents();
      $private.socketEvents();
    };

    $private.initEvents = function initEvents() {
      $private.$form.addEventListener( 'submit', $private.handleSubmit, false );
      $private.$input.addEventListener( 'input', $private.handleInput, false );
    };

    $private.socketEvents = function socketEvents() {
      $private.socket.on( 'chat message', $private.receiveMessage );
      $private.socket.on( 'is typing', $private.handleIsTyping );
    };

    $private.handleSubmit = function handleSubmit( e ) {
      e.preventDefault();
      var $message = document.querySelector( '#m' );
      $private.socket.emit( 'chat message', $message.value );
      $message.value = '';
    };

    $private.receiveMessage = function receiveMessage( msg ) {
      $private.$messages.innerHTML += '<li>' + msg + '</li>';
    };

    $private.handleIsTyping = function handleIsTyping( typing ) {
      console.log( typing );
      $private.$isTyping.classList[ typing ? 'remove' : 'add' ]( 'hide' );
    };

    $private.handleInput = function handleInput() {
      $private.socket.emit( 'is typing', true );
      setTimeout(function() {
        $private.socket.emit( 'is typing', false );
      }, 500);
    };

    return $public;
  }

  return app().init();
})( io );
