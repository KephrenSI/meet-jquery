/* Képhren/Meet-jquery
*
* /src/js/scripts.js - Main scripts
*
* coded by Képhren SIMONIS
* started at 13/02/2017
*/

// TODO: with jquery

let = $tabs;

const fChangeTab = function( oEvent ) {
	oEvent.preventDefault();


	$tabs.parent().filter( ".active" ).removeClass( "active" );
	$( this ).parent().addClass( "active" );
	$( ".tab-content .tab-pane.active" ).revomeClass( "active" );
	$( `#${ $( this ).data( "tab-target" ) }` ).addClass( "active" );
};

// called when DOM is ready.
$( function() {

	// 1. link with rel=external
	$( 'a[rel*="external"]' ).attr( "target", "_new" );

	// 2. Tab
	$tabs = $( "ul.nav.nav-tabs a" );
	$tabs.on( "click", fChangeTab );
	// ou
	// ( $tabs = $( "ul.nav.nav-tabs a" ) ).on( "click", fChangeTab );

} );