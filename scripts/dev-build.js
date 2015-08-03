var syncToTmp = require( "./sync-tmp" );
var transpile = require( "./transpile" );

module.exports = function() {
    return new Promise( function( fulfill, reject ) {
        console.log( "* building app..." );
        syncToTmp()
            .then( transpile )
            .then( function() {
                fulfill( reject );
            } );
    } );
};
