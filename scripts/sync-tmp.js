var Rsync = require( "rsync" );
var path = require( "path" );

var rsync = new Rsync()

rsync
    .flags( "raz" )
    .source( path.normalize( __dirname + "/../src/" ) )
    .destination( path.normalize( __dirname + "/../.tmp/" ) );

module.exports = function() {

    return new Promise( function( fulfill, reject ) {

        rsync.execute( function( err, code, cmd ) {

            if ( err ) {
                reject( err );
            } else {
                fulfill( true );
            }

        } );

    } );

};
