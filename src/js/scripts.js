/* Képhren/Meet-jquery
*
* /src/js/scripts.js - Main scripts
*
* coded by Képhren SIMONIS
* started at 13/02/2017
*/

// TODO: with jquery
const rEmailValidation = /([\w-\.]+)@((?:[\w]+\.)+)([a-z]{2,})/i; // http://emailregex.com/ 

let $trombinoFigures,
	$commentForm,
	$emailInput,
	$nameInput,
	$commentTextarea;

const fHandleTab = function( oEvent ) {
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

const fCheckEmail = function() {
	let sEmail = ( $emailInput.val() || "" ).trim(),
		bIsValid = rEmailValidation.test( sEmail );
	
	$emailInput.parents( ".control-group" ).toggleClass( "error", !bIsValid );
	return bIsValid;
};
const fCheckName = function() {
	let sName = ( $nameInput.val() || "" ).trim(),
		bIsValid = sName.length > 4;
	
	$nameInput.parents( ".control-group" ).toggleClass( "error", !bIsValid );
	return bIsValid;
};
const fCheckComment = function() {
	let sComment = ( $commentTextarea.val() || "" ).trim(),
		bIsValid = sComment.length > 10 && sComment.length < 140;
	
	$commentTextarea.parents( ".control-group" ).toggleClass( "error", !bIsValid );
	return bIsValid;
};

const fHandleFormValidation = function() {
	let aChecks = [ fCheckEmail(), fCheckName(), fCheckComment() ],
		bAllIsOK;

	bAllIsOK = aChecks.reduce( function( bPrevious, bCurrent ) {
		return bPrevious && bCurrent;
	}, true );

	if( bAllIsOK ){
		return true;
	}

	window.alert( "Veuillez remplir correctement les champs du formulaire!" );
	return false;
};

// called when DOM is ready.
$( function() {

	// 1. link with rel=external
	$( 'a[rel*="external"]' ).attr( "target", "_new" );

	// 2. Tab
	$( "ul.nav.nav-tabs a" ).on( "click", fHandleTab );

	// 3. trombinoscope
	$trombinoFigures = $( "#trombino figure" );
	$trombinoFigures.hide().first().show();
	setInterval( fHandleTrombino, 1000 );

	// 4. handle form validation
	( $commentForm = $( "form" ) ).on( "submit", fHandleFormValidation );
	( $emailInput = $( "#inputEmail" ) ).on( "blur", fCheckEmail );
	( $nameInput = $( "#inputName" ) ).on( "blur", fCheckName );
	( $commentTextarea = $( "#inputComment" ) ).on( "blur", fCheckComment );
} );