'use strict';

var React = require( "react" );

class HelloWorldComponent extends React.Component {
    render() {
        return <div className="jumbotron">
            <h1>Hello {this.props.name}!</h1>
            <p>This is a simple example of the Sourcey App</p>
            <form className="form-inline">
                <div className="form-group">
                    <label>Name:&nbsp;</label>
                    <input type="text" className="form-control" id="name-input" placeholder={this.props.name} />
                </div>
            </form>
        </div>
    }
};

module.exports = HelloWorldComponent;
