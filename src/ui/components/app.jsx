'use strict'

var React = require( "react" );

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { repo: this.props.repo }
        this.openRepo = this.openRepo.bind( this );
    }
    openRepo( e ) {
        this.setState( { repo: e.target.checked == false ? null : "REPO!" } );
    }
    render() {
        if ( this.state.repo === null ) {
            return <div>
                <div> No Repo Open :( </div>
                <input type="checkbox" onChange={this.openRepo} /> Open Repo?
            </div>;
        } else {
            return <div> {this.state.repo} </div>;
        };
    }
};

module.exports = App;
