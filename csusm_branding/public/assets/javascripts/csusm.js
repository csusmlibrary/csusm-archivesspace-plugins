jQuery(document).ready(function(){
        var pathname = window.location.pathname;
        var archive_obj = window.location.href;
        jQuery("#navigation .navbar #collapsemenu ul").append("<li class='nav-item p-2'><a class='nav-link' href='/'>New Search</a></li>");
        jQuery("#navigation .navbar #collapsemenu ul").after("<ul class='nav navbar-nav navbar-right'><li><a href='https://archives.csusm.edu'>Special Collections Home Page</a></li></ul>");
        jQuery("input#q0").attr("placeholder", "TIP: try an * to find forms of a word. E.g. award*");
        jQuery("#header img.logo").wrap("<a href='https://library.csusm.edu/'></a>");
        jQuery("#header > .row > div.h1").wrapInner("<a href='https://archivessearch.csusm.edu/'></a>");
        jQuery("#request_sub").replaceWith("<a href='https://archives.csusm.edu/request?ref_url=https://archivessearch.csusm.edu"+pathname+"' class='btn page_action request  btn-default' target='_blank'><i class='fa fa-bullhorn fa-3x'></i><br/>Request<span class='sr-only'>(opens in a new window)</span></a>");
        jQuery("#content .row .search-results .recordrow h3 a[href='/repositories/3/classifications/2'").replaceWith('<a class="record-title" href="/repositories/3/classifications/2"> Brewchive™</a>');
        jQuery("#content .row h1:contains('Brewchive')").replaceWith('<h1>Brewchive™</h1>');
        jQuery("#content .row ul li:contains('Brewchive')").replaceWith('<li>Brewchive™</li>');
});
