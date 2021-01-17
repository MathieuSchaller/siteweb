/* only execute this script when the document is ready */
$(document).ready(function () {


    function adaptNavbar() {
        // Get width and height of the window excluding scrollbars
        var w = document.documentElement.clientWidth;

        if (w >= 1200) {
            $("nav li.nav-item-center").show();
        } else {
            $("nav button").text("☰");
            $('nav button').css({
                'border-radius': '5px'
            });
            $("nav li").hide();
        }
        //get window height minus 50 pixels for the headers height
        var height = $(window).height() - 50;
        $(".main").height(height);
    }

    if (window.innerWidth < 1200) {
        $("nav button").text("☰");
        $('nav button').css({
            'border-radius': '5px'
        });
    }

    //get window height minus 50 pixels for the headers height
    var height = $(window).height() - 50;
    $(".main").height(height);

    // Attaching the event listener function to window's resize event
    window.addEventListener("resize", adaptNavbar);

    /* function called when you click of the button */
    $("nav button").click(function () {
        /* this function toggle the visibility of our "li" elements */
        $("nav li").toggle("slow");
        /* this if else to change the text in the button */
        if ($("nav button").text() == "☰") {
            $("nav button").text("✖");
            $('nav button').css({
                'border-radius': '5px 5px 0px 0px'
            });
        } else {
            $("nav button").text("☰");
            $('nav button').css({
                'border-radius': '5px'
            });
        }
    });
});

// Defining event listener function