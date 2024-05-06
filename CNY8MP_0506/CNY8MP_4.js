function anim() {
    $(".box").animate({
        left: '300px'
    }, 1000);
    $(".box").animate({
        width: '500px',
        fontSize: '30pt',
        left: '300px'
    }, 1000);
    $('.box').animate({
        top: '100px',
        width: '400px',
        height: '140px',
        fontSize: '20pt'
    }, 1000);
    $('.box').animate({
        left: '0px',
        width: '300px',
        height: '120px',
        opacity: 0.4
    }, 1000);
    $('.box').animate({
        left: '0px',
        top: '0px',
        width: '300px',
        height: '120px',
        opacity: 1,
        fontSize: '12pt'
    }, 1000, function() {
        alert("VÉGE");
    });
}

function toggle() {
    $(".box").slideUp(1000);
    $(".box").slideDown(1000);
    $(".box").animate({
        height: '120px'
    }, 1000);
    $(".box").animate({
        left: '300px',
        fontSize: '30pt',
        width: '500px'
    }, 1000);
}

// Második feladat
$("#text").click(function () {
    alert($("div.box2").text());
});

$("#html").click(function () {
    alert($("div.box2").html());
});

let jelentkezett = false;

$("#value").click(function () {
    if (jelentkezett)
        alert("Jelenkezés");
    else
        alert($("#nev").val());
});

$("#param").click(function () {
    alert($("#param").attr("data"));
    //alert($("join").attr("type"));
    //alert($("a").attr("href"));
});

$("#join").click(function () {
    jelentkezett = true;
});