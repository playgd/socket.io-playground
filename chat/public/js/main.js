;(function( io, undefined ) {
  function app() {
    var $public = {};
    var $private = {};

    $private.socket = io();
    $private.$form = document.querySelector( 'form' );
    $private.$messages = document.querySelector( '[data-js="messages"]' );

    $public.init = function init() {
      $private.initEvents();
      $private.socketEvents();
    };

    $private.initEvents = function initEvents() {
      $private.$form.addEventListener( 'submit', $private.handleSubmit, false );
    };

    $private.socketEvents = function socketEvents() {
      $private.socket.on( 'chat message', $private.receiveMessage );
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

    return $public;
  }

  return app().init();
})( io );
