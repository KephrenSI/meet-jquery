/* Képhren/Meet-jquery
*
* /src/js/scripts.js - Main scripts
*
* coded by Képhren SIMONIS
* started at 13/02/2017
*/

// TODO: with jquery

let $trombinoFigures;

const fChangeTab = function( oEvent ) {
	let $this = $( this );

	oEvent.preventDefault();
	if( $this.parent().hasClass( "active" ) ) {
		return;
	}

	$( "ul.nav.nav-tabs.active" ).removeClass( "active" );
	$this.parent().addClass( "active" );
	$( ".tab-pane.active" ).revomeClass( "active" );
	$( `#${ $this.data( "tab-target" ) }` ).addClass( "active" );
};

const fHandleTrombino = function() {

	$trombinoFigures.filter( ":visible" ).fadeOut( function() {
		let $next = $( this ).next();
		if( $next.length === 0 ) {
			$next = $trombinoFigures.first();
		}
		$next.fadeIn();
	} );
	
	
};

// called when DOM is ready.
$( function() {

	// 1. link with rel=external
	$( 'a[rel*="external"]' ).attr( "target", "_new" );

	// 2. Tab
	$( "ul.nav.nav-tabs a" ).on( "click", fChangeTab );
	
	// 3. trombinoscope
	$trombinoFigures = $( "#trombino figure" );
	$trombinoFigures.hide().first().show();
	setInterval( fHandleTrombino, 1000 );


} );