var React = require( "react" );

var start_app = function() {
    var HelloMessage = require( "./components/hello-world" );
    var mountNode = document.querySelector( "#mountNode" );
    React.render( React.createElement( HelloMessage, { name: "World!" } ), mountNode );
};

module.exports = {
    start: start_app
};
