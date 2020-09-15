document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelectorAll('nav.lienket');

    function myFunction(x) {
        if (x.matches) { // If media query matches
            menu = menu[1];
        } else {
            menu = menu[0];
        }
    }

    var x = window.matchMedia("(max-width: 1023px)");
    myFunction(x); // Call listener function at run time

})

$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) $(".container").addClass("sukienscroll");
        else $(".container").removeClass("sukienscroll");
    });
});
/* ..............................................
  Back to top
............................................... */
$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("#go-to-top").fadeIn();
        } else {
            $("#go-to-top").fadeOut();
        }
    });
    $("#go-to-top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            2000
        );
        return false;
    });
});