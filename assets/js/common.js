$(document).ready(function() {
    $(".sp-menu, .menu-overlay a").click(function() {
        $(".menu-overlay, .sp-menu, body").toggleClass("change");
    });
    var cHeader = document.getElementById("cHeader");
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            $(".c-header").addClass("u-addColor");
        } else {
            $(".c-header").removeClass("u-addColor");
        }
    }
    $(function() {
        var retinaCheck = window.devicePixelRatio;
        if (retinaCheck >= 2) { // Retinaディスプレイのときを分岐させている
            $('img.retina').each(function() {
                var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
                $(this).attr('srcset', retinaimg + " 2x");
            });
        }
    });
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 300);
                    return false;
                }
            }
        });
    });
    var $tablink = $(".tablink");
    var $tabcontent = $(".tabcontent");
    $tablink.click(function () {
        var id = $(this).attr("data-id");
        $tablink.removeClass("active");
        $(this).addClass("active");
        $tabcontent.removeClass("active");
        $("#"+id).addClass("active");
    });
    var $tabSelect = $(".tabSelect");
    $tabSelect.click(function () {
        var id = $(this).val();
        $tabcontent.removeClass("active");
        $("#"+id).addClass("active");
    });
});