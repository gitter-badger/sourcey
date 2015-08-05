var Reflux = require( "reflux" );
var RepoActions = require( "../actions/repo-actions" );

var RepoStore = Reflux.createStore( {
    listenables: [ RepoActions ],
    openRepo: function( path ) {
        this.repo = path;
        this.trigger( this.repo );
    }
} );

module.exports = RepoStore;
