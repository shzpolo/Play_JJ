/**
 * Created by shzpo_000 on 2017/11/20.
 */
$("#matchButton").mouseover(function () {
    var txt = $("#enemy");
    var a = $(this);
    var player = $('#num').text();
    if(txt.val() === "" || isNaN(parseInt(txt.val())) || parseInt(txt.val()) === parseInt(player)) {
        txt.val('PLEASE ENTER A RIGHT NUMBER');
    }
    else {
        a.attr('href', '/match?player=' + player + '&enemy=' + parseInt(txt.val()));
    }
});