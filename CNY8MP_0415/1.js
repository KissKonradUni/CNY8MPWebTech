$(document).ready(() => {
   console.log('CNY8MP_0415/1.js');         
   $("span#hidden").hide();
});

$("button").click(() => {
    $("p.hide").toggle();
    $("span#hidden").toggle();
});