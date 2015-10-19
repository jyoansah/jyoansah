$(document).ready(function () {
    $("body").css("display", "none").fadeIn(1000);
    $(".menu").button();

    $(".item:first").toggleClass("current").show();

    $("button.menu").click(function (event) {
        event.preventDefault();
        description = this.getAttribute('name');

        if(jQuery(this).hasClass('selected')){
            return;
        }else{
            $(".selected").toggleClass("selected");
        }

        if(description == "close"){
            $(".title").css('margin-top', '15%');
            $(".title h1").css('opacity','1');
            $(".contact").css('opacity','1');
            $(".content").fadeOut(1000);
            $(".content .desc").fadeOut(1000);
            $(".content ." + description).fadeOut(1000);
            $(".home").fadeOut(1000);

        }else{
            jQuery(this).toggleClass("selected");
            $(".title").css('margin-top', '0');
            $(".title h1").css('opacity','0');
            $(".contact").css('opacity','0');
            $(".content").fadeIn(1000);
            $(".content .desc").fadeOut(1000);
            $(".content ." + description).fadeIn(1000);
            $(".home").fadeIn(1000)

        }

    });

    var pages = $('.item'), current=0;
    var currentPage,nextPage;

    $('.scroll').click(function(){
        currentPage = pages.eq(current);
        if($(this).hasClass('prevButton'))
        {
            if (current <= 0)
                current=pages.length-1;
            else
                current=current-1;
        }
        else
        {
            if (current >= pages.length-1)
                current=0;
            else
                current=current+1;
        }
        nextPage = pages.eq(current);
        currentPage.fadeOut(500);
        nextPage.fadeIn(500);
    });


    function redirectPage() {
        window.location = linkLocation;
    }


});


