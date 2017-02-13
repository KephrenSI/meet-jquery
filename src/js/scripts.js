/* Képhren/Meet-jquery
*
* /src/js/scripts.js - Main scripts
*
* coded by Képhren SIMONIS
* started at 13/02/2017
*/

// When page loads...
window.addEventListener( "load", function() {

	// 1. select links with rel=external attributes.
	Array.from( document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ) {
		$elt.setAttribute( "target", "_new" );
	} );

	// 2.

} );