var glob = require( "glob" );
var path = require( "path" );
var babel = require( "babel-core" );
var fs = require( "fs" );

module.exports = function() {
    return new Promise( function( fulfill, reject ) {
        glob( path.normalize( __dirname + "/../.tmp" ) + "/**/*.jsx", {}, function(err, files) {
            if (err) {
                reject( err );
            } else {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var transformed = babel.transformFileSync( file );
                    fs.writeFileSync( file.replace( ".jsx", ".js" ), transformed.code );
                    if ( i == (files.length - 1) ) {
                        fulfill( true );
                    }
                }
            }
        } );
    } );
};
