$(document).ready(function () {
    $("body").css("display", "none");
    $("header").fadeIn(500);
    $("body").fadeIn(700);

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
