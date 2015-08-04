var build = require( "./dev-build" );
var chokidar = require( "chokidar" );
var path = require( "path" );
var fs = require( "fs" );
var electron = require( "electron-prebuilt" );
var proc = require( "child_process" );
var colors = require( "colors" );
var moment = require( "moment" );

var electronLog = path.normalize( __dirname + "/../logs/electron.log" );

console.log( "* starting ".cyan + "Sourcey".rainbow + " in development mode...".cyan );

fs.writeFileSync( electronLog, "" );
build()
    .then( function() {
        chokidar
            .watch( path.normalize( __dirname + "/../src/" ) )
            .on( "change", function() {
                var time = new Date();
                time = moment().format( "HH:mm:ss" );
                console.log( "\n* detected change at ".green + time.green );
                build()
                    .then( function() {
                        console.log( "* sending refresh signal...".cyan );
                        var refreshFile = path.normalize( __dirname + "/../.tmp/.refresh" );
                        fs.writeFile( refreshFile, new Date().getTime() );
                    } );
            } );
        console.log( "* spawning electron...".cyan );
        console.log( "* electron output visible in `logs/electron.log`".green );
        var tmpDir = path.normalize( __dirname + "/../.tmp" );
        var electronProcess = proc.spawn( electron, [ tmpDir ] );
        electronProcess.stdout.on( "data", function( data ) {
            fs.appendFile( electronLog, data )
        } );
        electronProcess.stderr.on( "data", function( data ) {
            fs.appendFile( electronLog, data )
        } );
    } );
