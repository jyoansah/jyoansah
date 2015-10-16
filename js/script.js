$(document).ready(function () {
    $("body").css("display", "none").fadeIn(1000);
    $(".menu").button();

    $("button.menu").click(function (event) {
        event.preventDefault();
        description = this.getAttribute('name');

        $(".selected").toggleClass("selected");

        if(description == "close"){
            $(".title").css('margin-top', '15%');
            $(".title h1").css('opacity','1');
            $(".content").fadeOut(1000);
            $(".content .desc").fadeOut(1000);
            $(".content ." + description).fadeOut(1000);
            $(".home").fadeOut(1000);

        }else{

            jQuery(this).toggleClass("selected");
            $(".title").css('margin-top', '0');
            $(".title h1").css('opacity','0');
            $(".content").fadeIn(1000);
            $(".content .desc").fadeOut(1000);
            $(".content ." + description).fadeIn(1000);
            $(".home").fadeIn(1000)

        }

    });

    function redirectPage() {
        window.location = linkLocation;
    }


});


