var syncToTmp = require( "./sync-tmp" );
var transpile = require( "./transpile" );

module.exports = function() {
    return new Promise( function( fulfill, reject ) {
        console.log( "* building app...".cyan );
        syncToTmp()
            .then( function() {
                console.log( "* transpiling app...".cyan );
            } )
            .then( transpile )
            .then( function() {
                console.log( "* app ready!".green );
                fulfill( reject );
            } );
    } );
};
