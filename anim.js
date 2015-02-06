$(document).ready(function () {
    var menu = $("#menu");

    menu.children().hover(function () {
            $($(this).data("current")).css("background-color", "#000099");
        },
        function () {
            $($(this).data("current")).css("background-color", "#000066");
        });


    menu.children().click(function () {
        var contentId = $(this).data("current");
        var decallage = '';

        contentId = contentId.substring(6, 7);

        switch (contentId) {
        case "1":
            decallage = '-10px';
            break;
        case "2":
            decallage = '-200px';
            break;
        case "3":
            decallage = '-395px';
            break;
        case "4":
            decallage = '-590px';
            break;
        case "5":
            decallage = '-790px';
            break;
        case "6":
            decallage = '-990px';
            break;
        case "7":
            decallage = '-1190px';
            break;
        case "8":
            decallage = '-1380px';
            break;
        case "9":
            decallage = '-1570px';
            break;
        default:
            decallage = '0px';

        }

        var heightContent = $($(this).data("content")).css("height");

        if (heightContent == "650px") {
            $($(this).data("content")).css("visibility", "visible").animate({
                width: '180px',
                height: '90px'
            }).animate({
                    top: '0px',
                    left: '0px'
                },
                function () {
                    $(this).css("visibility", "hidden");
                });
        } else {
            $($(this).data("content")).css("visibility", "visible")
            .animate({
             top: '190px',
            left: decallage,
            }).animate({
                width: '93%',
                height: '650px'
            });
        }


        menu.children().not(".menu").css("visibility", "hidden").animate({
            top: '10px',
            left: '0px'
        }).animate({
            width: '180px',
            height: '90px'
        });
    });

});