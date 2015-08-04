var React = require( "react" );

var ipc = require( "ipc" );
ipc.on( "dev-refresh", function(message) {
    if ( message ) {
        window.location.reload();
    }
} );

var remote = require( "remote" );
console.log( "app version " + remote.require( "app" ).getVersion() );

var start_app = function() {
    var HelloMessage = require( "./components/hello-world" );
    var mountNode = document.querySelector( "#mountNode" );
    React.render( <HelloMessage />, mountNode );
};

start_app();
