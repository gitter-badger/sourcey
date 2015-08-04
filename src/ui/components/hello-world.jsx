'use strict';

var React = require( "react" );

class HelloWorldComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { word: "World" };
        this.wordDidChange = this.wordDidChange.bind( this );
    }
    wordDidChange( e ) {
        this.setState( { word: e.target.value } );
    }
    render() {
        return <div className="jumbotron">
            <h1>Hello {this.state.word}!</h1>
            <p>This is a simple example of the Sourcey App</p>
            <form className="form-inline">
                <div className="form-group">
                    <label>Name:&nbsp;</label>
                    <input type="text" className="form-control" id="name-input" placeholder={this.state.word} onKeyUp={this.wordDidChange} />
                </div>
            </form>
        </div>
    }
};

module.exports = HelloWorldComponent;
