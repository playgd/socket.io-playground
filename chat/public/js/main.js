;(function( io, undefined ) {
  function app() {
    var $public = {};
    var $private = {};

    $private.socket = io();
    $private.$form = document.querySelector( 'form' );

    $public.init = function init() {
      $private.initEvents();
    };

    $private.initEvents = function initEvents() {
      $private.$form.addEventListener( 'submit', $private.handleSubmit, false );
    };

    $private.handleSubmit = function handleSubmit( e ) {
      debugger;
      e.preventDefault();
      var $message = document.querySelector( '#m' );
      $private.socket.emit( 'chat message', $message.value );
      $message.value = '';
    };

    return $public;
  }

  return app().init();
})( io );
