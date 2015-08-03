'use strict';

var React = require( "react" );

class HelloWorldComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}!</div>;
    }
};

module.exports = HelloWorldComponent;
