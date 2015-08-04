var app = require( "app" );
var BrowserWindow = require( "browser-window" );
var chokidar = require( "chokidar" );

var mainWindow = null;

app.on( "window-all-closed", function() {
    if ( process.platform != "darwin" ) {
        app.quit();
    }
} );

app.on( "ready", function() {
    mainWindow = new BrowserWindow( {
        width: 800,
        height: 600
    } );

    mainWindow.loadUrl( "file://" + __dirname + "/../ui/index.html" );

    mainWindow.on( "closed", function() {
        mainWindow = null;
    } );

    if ( process.env.SOURCEY_ENV === "dev" ) {

        mainWindow.openDevTools();

        chokidar
            .watch( `${__dirname}/../.refresh` )
            .on( "change", function() {
                console.log( "refresh signal received! pinging app..." );
                mainWindow.webContents.send( "dev-refresh", true );
            } );

    }

} );
