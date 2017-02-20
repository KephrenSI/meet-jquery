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

const fHandleFormValidation = function( oEvent ) {
	let bHasErrors = false,
		sEmail,
		sName,
		sComment;
	// 1. check email
	sEmail = ( $emailInput.val() || "" ).trim();
	if( !rEmailValidation.test(sEmail) ){
		console.error( "Email isn't valid!" );
		bHasErrors = true;
	}else{
		console.info( "Email is valid!" );
	}

	// 2. check name
	sName = ( $nameInput.val() || "" ).trim ();
	if( sName.length < 4 ) {
		console.error( "Name isn't valid!" );
		bHasErrors = true;
	}else{
		console.info( "Name is valid!" );
	}

	// 3. check comment
	sComment = ( $commentTextarea.val() || "" ).trim ();
	if( sComment.length < 10 || sComment.length > 140 ) {
		console.error( "Comment isn't valid!" );
		bHasErrors = true;
	}else{
		console.info( "Comment is valid!" );
	}

	if( bHasErrors ) {
		window.alert( "Veuillez remplir tous les champs de formulaire!" )
		return false; // évènement ne continue pas ( form non validé )
	}

	return true; 
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
	$commentForm = $( "form" );
	$emailInput = $( "#inputEmail" );
	$nameInput = $( "#inputName" );
	$commentTextarea = $( "#inputComment" );
	$commentForm.on( "submit", fHandleFormValidation );


} );