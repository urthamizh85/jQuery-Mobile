$( document ).ready( function( ) {
	$( "body" ).on( 'pagechange', function( ) {
		var activePage = $.mobile.activePage.attr( "id" );
		var windowHeight = $(window).height();
		var headerHeight = $("#"+activePage+" [data-role='header']").height();
		var contentHeight = $("#"+activePage+" [data-role='content']").height();
		var footerHeight = $("#"+activePage+" [data-role='footer']").height();
		
		var height = (windowHeight-(headerHeight+footerHeight));
		if(height<contentHeight){
			$("#"+activePage+" [data-role='content']").css({
				"height" : height+"px",
				"overflow" : "scroll",
				"-webkit-overflow-scrolling" : "touch"
			});
		}
	} );
	
} );

