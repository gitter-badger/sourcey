var Reflux = require( "reflux" );
var RepoActions = require( "../actions/repo-actions" );
var NodeGit = require( "nodegit" );
var path = require( "path" );

var RepoStore = Reflux.createStore( {
    listenables: [ RepoActions ],
    openRepo: function( path ) {
        var self = this;
        self.repo = require( "path" ).resolve( path );
        NodeGit.Repository.open( self.repo ).then( function( repo ) {
            repo.getReferenceNames( 3 ).then( function( references ) {
                self.trigger( references.toString() );
            } );
        } )
        .catch( function( error ) {
            console.log( error );
        } );
    }
} );

module.exports = RepoStore;
