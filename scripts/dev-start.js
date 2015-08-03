var build = require( "./dev-build" );
var chokidar = require( "chokidar" );
var path = require( "path" );
var fs = require( "fs" );
var electron = require( "electron-prebuilt" );
var proc = require( "child_process" );

build()
    .then( function() {
        chokidar
            .watch( path.normalize( __dirname + "/../src/" ) )
            .on( "change", function() {
                console.log( "* detected change..." );
                build()
                    .then( function() {
                        var refreshFile = path.normalize( __dirname + "/../.tmp/.refresh" );
                        fs.writeFile( refreshFile, new Date().getTime() );
                    } );
            } );
        var tmpDir = path.normalize( __dirname + "/../.tmp" );
        var electronProcess = proc.spawn( electron, [ tmpDir ] );
        electronProcess.stdout.on( "data", function( data ) {
            console.log( 'electron: ' + data );
        } );
        electronProcess.stderr.on( "data", function( data ) {
            console.error( 'electron: ' + data );
        } );
    } );
