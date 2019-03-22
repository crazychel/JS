window.addEventListener('DOMContentLoaded', function () {

    function classOverlay(item) {
        $(item).on('click', function () {
            $('.overlay').fadeIn(1000);
            $('.modal').animate({
                height: "show"
            }, 2000);
        });
    }
    classOverlay('.main_btna');
    classOverlay('.main_btn');
    classOverlay("[href='#sheldure']");

    $('.close').on('click', function () {
        $('.overlay').fadeOut(800);
        $('.modal').animate({
            height: "hide"
        }, 800);
    })

});