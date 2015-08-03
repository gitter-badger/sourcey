'use strict';

var React = require( "react" );

class HelloWorldComponent extends React.Component {
    constructor() {
        super();
        this.displayName = "HelloWorld";
    }
    render() {
        return React.createElement( "div", null, `Hello ${this.props.name}` );
    }
};

module.exports = HelloWorldComponent;
