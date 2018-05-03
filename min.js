$(window).on("load", sidenvises);

function sidenvises() {
    console.log("sidenvises");
    $("#begyndelsen").show();
    $(startknap).on("click", velkommen);
}

function velkommen() {
    console.log("velkommen");
    $(startknap).fadeOut();
    $("#begyndelsen").addClass("velkommen");
    $("#taleboble_1").show();
    setTimeout(taleboble_2, 1000);
}

function taleboble_2() {
    console.log("taleboble_2");
    $("#taleboble_1").hide();
    $("#taleboble_2").show();
    setTimeout(taleboble_3, 1000);
}

function taleboble_3() {
    console.log("taleboble_3");
    $("#taleboble_2").hide();
    $("#taleboble_3").show();
    setTimeout(nyscene, 1000);
}

function nyscene() {
    console.log("nyscene");
    $("#taleboble_3").hide();
    $(begyndelsen).fadeOut();
    setTimeout(browser, 1000);
}

function browser() {
    console.log("browser");
    $("#youtuber").addClass("vinker");
    $("#chat").addClass("chat_kf");
    $("#taleboble_4").show();

    setTimeout(samtale_1, 1000);
}

function samtale_1() {
    console.log("samtale_1");
    $("#taleboble_4").hide();
    $("#youtuber").removeClass("vinker");
    $("#pige").addClass("hejsa");
    $("#taleboble_5").show();
    setTimeout(samtale_2, 1000);
}

function samtale_2() {
    console.log("samtale_2");
    $("#taleboble_5").hide();
    $("#pige").removeClass("hejsa");
    $("#youtuber").addClass("vinker");
    $("#taleboble_6").show();
    setTimeout(samtale_3, 1000);
}

function samtale_3() {
    console.log("samtale_3");
    $("#taleboble_6").hide();
    $("#youtuber").removeClass("vinker");
    $("#pige").addClass("hejsa");
    $("#taleboble_7").show();
    setTimeout(samtale_4, 1000);
}

function samtale_4() {
    console.log("samtale_4");
    $("#taleboble_7").hide();
    $("#taleboble_8").show();
    setTimeout(samtale_5, 1000);
}

function samtale_5() {
    console.log("samtale_5");
    $("#pige").removeClass("hejsa");
    $("#taleboble_8").hide();
    $("#taenkeboble").show();
    setTimeout(valg, 1000);
}

function valg() {
    console.log("valg");
    $("#like_infoboks").show();
    $("#dislike_infoboks").show();

    $(dislike_infoboks).on("click", valg_dislike);
    $(like_infoboks).on("click", valg_like);
}

function valg_dislike() {
    console.log("valg_dislike");
    $("#dislike").fadeIn();
    $("#taenkeboble").fadeOut();
    $("#like_infoboks").fadeOut();
    $("#dislike_infoboks").fadeOut();
    setTimeout(naked, 1000);
}

function valg_like() {
    console.log("valg_like");
    $("#like").fadeIn();
    $("#taenkeboble").fadeOut();
    $("#like_infoboks").fadeOut();
    $("#dislike_infoboks").fadeOut();
    //    setTimeout(valg, 1000);
}

function naked() {
    console.log("naked");
    $("#pige").hide();
    $("#pigenaked").show();
    $("#pigenaked").addClass("naked");
    //        setTimeout(valg, 1000);
}
