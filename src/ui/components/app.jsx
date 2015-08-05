'use strict'

var React = require( "react" );
var Reflux = require( "reflux" );
var RepoActions = require( "../actions/repo-actions" );
var RepoStore = require( "../stores/repo-store" );
var remote = require( "remote" );
var dialog = remote.require( "dialog" );

var App = React.createClass( {

    mixins: [ Reflux.connect( RepoStore, 'repo' ) ],

    getInitialState: function() {

        return {
            repo: this.props.repo ? this.props.repo : null
        }

    },

    openRepo: function() {

        dialog.showOpenDialog( remote.getCurrentWindow(), {

            title: "Open Repo...",

            properties: [ "openDirectory" ]

        }, function( repoPath ) {

            RepoActions.openRepo( repoPath[ 0 ] );

        } );

    },

    render: function() {

        if (this.state.repo) {
            return (
                <div>Repo Location: {this.state.repo}</div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.openRepo}>Open Repo</button>
                </div>
            )
        }

    }

} );

module.exports = App;
