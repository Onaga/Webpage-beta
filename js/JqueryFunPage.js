//zontak jquery file :)

$(document).ready(function () {
    function ShowPictures(){
        $(".big").css({ "height": $(window).height() + "px" });
        $(".big").css({ "width": $(window).width() + "px" });
        $(".big").css({ "background": "rgba(0, 0, 0, 0.8)" });
        $(".big").css({ "position": "relative" });
        $(".big").css({ "text-align": "center" });
        NapalniDiv();
        $(".big").show();
        HideTheScroll();
    }

    function HidePictures(name) {
        if(name!='funImg' &&
            name!='funImgContainer' &&
            name != 'showImg' &&
            name!= 'leftArrow' &&
            name!= 'rightArrow' &&
            name != 'image') {
            $(".big").hide();
            GiveMeBackScroll();
        }
    }

    function HideTheScroll() {
        $("body").css({"overflow": "hidden"});
    }

    function GiveMeBackScroll() {
        $("body").css({ "overflow": "auto" });
    }

    function NapalniDiv(){
        $(".image").html("<img id='1' class='showImg' src='images/FunPageImages/enhanced-buzz-17903-1374739080-12.png' />");
    }

    function Responsibility() {
        $(".big").css({
            "width": $(window).width(),
            "height": $(window).height()
        });
    }

    function TheNext(num) {
        $(".showImg").attr("src", "images/FunPageImages/" + AlteredStates(num, 'plus'));
    }

    function ThePreviews(num) {
        $(".showImg").attr("src", "images/FunPageImages/" + AlteredStates(num, 'minus'));
    }

    function AlteredStates(num, side) {
        if (side == 'plus') {
            var theName = $(".DataBase > span." + (parseInt(num) + 1)).text();
            if (theName != '') {
                $(".showImg").attr("id", parseInt(num) + 1);
                return theName;
            }
            else {
                $(".showImg").attr("id", 1);
                return $(".DataBase > span." + 1).text();
            }
        }
        if (side == 'minus') {
            var theName = $(".DataBase > span." + (parseInt(num) - 1)).text();
            if (theName != '') {
                $(".showImg").attr("id", parseInt(num) - 1);
                return theName;
            }
            else {
                $(".showImg").attr("id", FullHowse());
                return $(".DataBase > span." + FullHowse()).text();
            }
        }
    }

    function FullHowse() {
        var allOfThem = $(".db").length;
        return allOfThem;
    }

    function NumReturner() {
        var id = $(".showImg").attr("id");
        return id;
    }

    $(".big").hide();
    $(".DataBase").hide();

    $("#content").on("click", function () {
        ShowPictures();
    });
    $(document).on("click", function (event) {
        HidePictures(event.target.className);
    });
    $(window).on("resize", function () {
        Responsibility();
    });
    $(".rightArrow").on("click", function () {
        var num=NumReturner();
        TheNext(num);
    });
    $(".leftArrow").on("click", function () {
        var num = NumReturner();
        ThePreviews(num);
    });
});

