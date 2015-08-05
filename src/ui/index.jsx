var React = require( "react" );
var remote = require( "remote" );
var App = require( "./components/app" );

var ipc = require( "ipc" );
ipc.on( "dev-refresh", function(message) {
    if ( message ) {
        window.location.reload();
    }
} );

console.log( "app version " + remote.require( "app" ).getVersion() );

var start_app = function() {
    var mountNode = document.querySelector( "#mountNode" );
    React.render( <App repo={null} />, mountNode );
};

start_app();
