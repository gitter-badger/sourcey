var packager = require( "electron-packager" );
var path = require( "path" );
var build = require( "./dev-build" );

build().then( function() {
    packager( {
        dir: path.normalize( __dirname + "/../.tmp/" ),
        name: "Sourcey",
        // platform: "darwin,linux",
        platform: "darwin",
        arch: "x64",
        version: "0.30.2",
        out: path.normalize( __dirname + "/../builds/" ),
        overwrite: true
    }, function( err, appPath ) {
        if ( err ) {
            console.error( err );
        } else {
            console.log( "Build successful!" );
        }
    } );
} );
