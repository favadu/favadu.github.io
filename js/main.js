/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 function setSessionCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + "path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
 
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();


    $('span.btn-details').bind('click', function(event) {
        var detailPart = $('#' + $(this).attr('data-toggle'));
        var dataAction =  $(this).attr('data-action');
        if (dataAction == 'show') {
            detailPart.addClass("in");
			if($(this).text() == 'Plus détail')
				$(this).text('Moin détail');
			else
				$(this).text('Less Info');
            $(this).attr('data-action', 'hide');
        } else {
            detailPart.removeClass("in");
            if($(this).text() == 'Moin détail')
				$(this).text('Plus détail');
			else
				$(this).text('More Info');
            $(this).attr('data-action', 'show');

        }
        //event.preventDefault();
    });
	if(getCookie("hasVisited") == "") {
		$.getJSON('https://freegeoip.net/json/?callback=?', function(data) {
			$.ajax({
				type : "post",
				dataType : "JSON",
				url : "https://script.google.com/macros/s/AKfycbzKPd2Cb5iVpXUHIGVIOOoRpKY8VxmzoOIVDhGWQHH2vuK9RjI/exec",
				data : data,
				success : function(object) {
					setSessionCookie("hasVisited", true);
				},
				error : function(request) {
				}
			});
		});
		
	}
	


})(jQuery); // End of use strict
