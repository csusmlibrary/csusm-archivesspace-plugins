jQuery(document).ready(function(){
        var pathname = window.location.pathname;
        var archive_obj = window.location.href;
        jQuery("#navigation .navbar #collapsemenu ul").append("<li class='nav-item p-2'><a class='nav-link' href='/'>New Search</a></li>");
        jQuery("#navigation .navbar #collapsemenu ul").after("<ul class='nav navbar-nav navbar-right'><li><a href='https://archives.csusm.edu'>Special Collections Home Page</a></li></ul>");
        jQuery("#header img[src='/assets/csusm.png']").closest("a").attr("href", "https://library.csusm.edu/");
        jQuery("#request_sub").replaceWith("<a href='https://archives.csusm.edu/request?ref_url=https://archivessearch.csusm.edu"+pathname+"' class='btn page_action request  btn-default' target='_blank'><i class='fa fa-bullhorn fa-3x'></i><br/>Request<span class='sr-only'>(opens in a new window)</span></a>");
	// 07/03/26 Khuong: A number of lines were deleted, because they are no longer
	// applicable; the UI element(s) have changed because of the data or because
	// we are going with Lyrasis' search bar, footer, and so on, instead of ours.
});
