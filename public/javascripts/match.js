/**
 * Created by shzpo_000 on 2017/11/19.
 */
var plane_num = 3;
var plane_row = 0;
var plane_col = 0;
var direction = -1; //0 left 1 right 2 up 3 down

var block_head = null;
var block_mid_1 = null;
var block_mid_2 = null;
var block_mid_3 = null;
var block_wing_1 = null;
var block_wing_2 = null;
var block_wing_3 = null;
var block_wing_4 = null;
var block_tail_1 = null;
var block_tail_2 = null;
var cancel = false;
var waiting_direction = false;

var yes = $('#yes');
var no = $('#no');

var player = parseInt($('#title_your').text().substr(18));
var enemy = parseInt($('#title_enemy').text().substr(35));
var initData = {
    'player': player,
    'head': [],
    'body': []
};
var atkData = {
    'player': player,
    'enemy': enemy,
    'hit_col': 0,
    'hit_row': 0
};
var canAtk = player > enemy;

$("#selfField .block_self").each(function() {
    var block = $(this);
    block.click(function() {
        if(plane_num > 0 && block.attr('chosen') != 'yes' && !waiting_direction) {
            block_head = block;
            block.addClass("active2");
            $("#direction").css('display', 'block');
            $("#txt").text("Please choose plane tail direction");
            plane_row = block.attr('row');
            plane_col = block.attr('col');
            waiting_direction = true;
        }
    });
});

$('#left').click(function() {
    if(plane_col < 3 || plane_row < 3 || plane_row > 10) {
        $("#txt").text("You cannot choose this direction");
    }
    else {
        $("#direction").css('display', 'none');
        cancel = false;
        $('#selfField .block_self').each(function() {
            var block = $(this);
            if(block.attr('row') == plane_row && block.attr('col') == plane_col-1) {
                if(block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_1 = block;
                }

            }
            else if(block.attr('row') == plane_row && block.attr('col') == plane_col) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_head = block;
                }
            }
            else if(block.attr('row') == plane_row && block.attr('col') == plane_col-2) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_2 = block;
                }
            }
            else if(block.attr('row') == plane_row && block.attr('col') == plane_col-3) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_3 = block;
                }
            }
            else if(block.attr('row') == plane_row-2 && block.attr('col') == plane_col-1) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_1 = block;
                }
            }
            else if(block.attr('row') == plane_row-1 && block.attr('col') == plane_col-1) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_2 = block;
                }
            }
            else if(parseInt(block.attr('row')) === parseInt(plane_row)+1 && block.attr('col') == plane_col-1) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_3 = block;
                }
            }
            else if(parseInt(block.attr('row')) === parseInt(plane_row)+2 && block.attr('col') == plane_col-1) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_4 = block;
                }
            }
            else if(block.attr('row') == plane_row-1 && block.attr('col') == plane_col-3) {
                if(block.attr('chosen') == "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_1 = block;
                }
            }
            else if(parseInt(block.attr('row')) === parseInt(plane_row)+1 && block.attr('col') == plane_col-3) {
                if(block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_2 = block;
                }
            }

        });
        if(!cancel) {
            block_mid_1.addClass('active1');
            block_mid_2.addClass('active1');
            block_mid_3.addClass('active1');
            block_wing_1.addClass('active1');
            block_wing_2.addClass('active1');
            block_wing_3.addClass('active1');
            block_wing_4.addClass('active1');
            block_tail_1.addClass('active1');
            block_tail_2.addClass('active1');

            $("#txt").text("Are you sure this is your plane?");
            yes.css('display', 'block');
            no.css('display', 'block');
        }
    }
});
$('#right').click(function() {
    if(plane_col > 8 || plane_row < 3 || plane_row > 10) {
        $("#txt").text("You cannot choose this direction");
    }
    else {
        $("#direction").css('display', 'none');
        cancel = false;
        $('#selfField .block_self').each(function () {
            var block = $(this);
            if (parseInt(block.attr('row')) === parseInt(plane_row) && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_1 = block;
                }

            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_head = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) && parseInt(block.attr('col')) === parseInt(plane_col) + 2) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_2 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) && parseInt(block.attr('col')) === parseInt(plane_col) + 3) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_3 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 2 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_1 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_2 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_3 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 2 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_4 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 3) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_2 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 3) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_1 = block;
                }
            }

        });
        if (!cancel) {
            block_mid_1.addClass('active1');
            block_mid_2.addClass('active1');
            block_mid_3.addClass('active1');
            block_wing_1.addClass('active1');
            block_wing_2.addClass('active1');
            block_wing_3.addClass('active1');
            block_wing_4.addClass('active1');
            block_tail_1.addClass('active1');
            block_tail_2.addClass('active1');

            $("#txt").text("Are you sure this is your plane?");
            yes.css('display', 'block');
            no.css('display', 'block');
        }
    }
});
$('#up').click(function() {
    if(plane_col < 2 || plane_row < 4 || plane_col > 9) {
        $("#txt").text("You cannot choose this direction");
    }
    else {
        $("#direction").css('display', 'none');
        cancel = false;
        $('#selfField .block_self').each(function () {
            var block = $(this);
            if (parseInt(block.attr('row')) === parseInt(plane_row) - 1 && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_1 = block;
                }

            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_head = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 2 && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_2 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 3 && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_3 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 1 && parseInt(block.attr('col')) === parseInt(plane_col) - 2) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_1 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 1 && parseInt(block.attr('col')) === parseInt(plane_col) - 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_2 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_3 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 2) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_4 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 3 && parseInt(block.attr('col')) === parseInt(plane_col) - 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_1 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) - 3 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_2 = block;
                }
            }

        });
        if (!cancel) {
            block_mid_1.addClass('active1');
            block_mid_2.addClass('active1');
            block_mid_3.addClass('active1');
            block_wing_1.addClass('active1');
            block_wing_2.addClass('active1');
            block_wing_3.addClass('active1');
            block_wing_4.addClass('active1');
            block_tail_1.addClass('active1');
            block_tail_2.addClass('active1');

            $("#txt").text("Are you sure this is your plane?");
            yes.css('display', 'block');
            no.css('display', 'block');
        }
    }
});
$('#down').click(function() {
    if(plane_col < 2 || plane_col >  9 || plane_row > 9) {
        $("#txt").text("You cannot choose this direction");
    }
    else {
        $("#direction").css('display', 'none');
        cancel = false;
        $('#selfField .block_self').each(function () {
            var block = $(this);
            if (parseInt(block.attr('row')) === parseInt(plane_row) + 1 && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_1 = block;
                }

            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_head = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 2 && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_2 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 3 && parseInt(block.attr('col')) === parseInt(plane_col)) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_mid_3 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 1 && parseInt(block.attr('col')) === parseInt(plane_col) - 2) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_1 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 1 && parseInt(block.attr('col')) === parseInt(plane_col) - 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_2 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_3 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 1 && parseInt(block.attr('col')) === parseInt(plane_col) + 2) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_wing_4 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 3 && parseInt(block.attr('col')) === parseInt(plane_col) - 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_1 = block;
                }
            }
            else if (parseInt(block.attr('row')) === parseInt(plane_row) + 3 && parseInt(block.attr('col')) === parseInt(plane_col) + 1) {
                if (block.attr('chosen') === "yes") {
                    $("#txt").text("You cannot choose this direction");
                    cancel = true;
                    no.click();
                }
                else {
                    block_tail_2 = block;
                }
            }

        });
        if (!cancel) {
            block_mid_1.addClass('active1');
            block_mid_2.addClass('active1');
            block_mid_3.addClass('active1');
            block_wing_1.addClass('active1');
            block_wing_2.addClass('active1');
            block_wing_3.addClass('active1');
            block_wing_4.addClass('active1');
            block_tail_1.addClass('active1');
            block_tail_2.addClass('active1');

            $("#txt").text("Are you sure this is your plane?");
            yes.css('display', 'block');
            no.css('display', 'block');
        }
    }
});

function sendInit() {
    $.getJSON('match/init', initData, function(result) {
        if(result['state'] === 'OK') {
            $("#txt").text("Your initialize success!");
        }
        else {
            $("#txt").text("Your initialize failed! Please check the situation of server");
        }
    });
}

no.click(function () {
    waiting_direction = false;

    if(block_mid_1 !== null)
        block_mid_1.removeClass('active1');
    if(block_mid_2 !== null)
        block_mid_2.removeClass('active1');
    if(block_mid_3 !== null)
        block_mid_3.removeClass('active1');
    if(block_wing_1 !== null)
        block_wing_1.removeClass('active1');
    if(block_wing_2 !== null)
        block_wing_2.removeClass('active1');
    if(block_wing_3 !== null)
        block_wing_3.removeClass('active1');
    if(block_wing_4 !== null)
        block_wing_4.removeClass('active1');
    if(block_tail_1 !== null)
        block_tail_1.removeClass('active1');
    if(block_tail_2 !== null)
        block_tail_2.removeClass('active1');
    if(block_head !== null)
        block_head.removeClass('active2');

    yes.css('display', 'none');
    no.css('display', 'none');

    block_head = null;
    block_mid_1 = null;
    block_mid_2 = null;
    block_mid_3 = null;
    block_wing_1 = null;
    block_wing_2 = null;
    block_wing_3 = null;
    block_wing_4 = null;
    block_tail_1 = null;
    block_tail_2 = null;

    $("#txt").text("Please choose a point as one of your plane's head");
});
yes.click(function () {
    waiting_direction = false;

    yes.css('display', 'none');
    no.css('display', 'none');
    plane_num --;

    block_mid_1.attr('chosen', 'yes');
    block_mid_2.attr('chosen', 'yes');
    block_mid_3.attr('chosen', 'yes');
    block_wing_1.attr('chosen', 'yes');
    block_wing_2.attr('chosen', 'yes');
    block_wing_3.attr('chosen', 'yes');
    block_wing_4.attr('chosen', 'yes');
    block_tail_1.attr('chosen', 'yes');
    block_tail_2.attr('chosen', 'yes');
    block_head.attr('chosen', 'yes');

    initData['head'].push({
        'row' : block_head.attr('row')-1,
        'col' : block_head.attr('col')
    });
    initData['body'].push({
        'row' : block_mid_1.attr('row')-1,
        'col' : block_mid_1.attr('col')
    });
    initData['body'].push({
        'row' : block_mid_2.attr('row')-1,
        'col' : block_mid_2.attr('col')
    });
    initData['body'].push({
        'row' : block_mid_3.attr('row')-1,
        'col' : block_mid_3.attr('col')
    });
    initData['body'].push({
        'row' : block_wing_1.attr('row')-1,
        'col' : block_wing_1.attr('col')
    });
    initData['body'].push({
        'row' : block_wing_2.attr('row')-1,
        'col' : block_wing_2.attr('col')
    });
    initData['body'].push({
        'row' : block_wing_3.attr('row')-1,
        'col' : block_wing_3.attr('col')
    });
    initData['body'].push({
        'row' : block_wing_4.attr('row')-1,
        'col' : block_wing_4.attr('col')
    });
    initData['body'].push({
        'row' : block_tail_1.attr('row')-1,
        'col' : block_tail_1.attr('col')
    });
    initData['body'].push({
        'row' : block_tail_2.attr('row')-1,
        'col' : block_tail_2.attr('col')
    });

    $("#txt").text("Please choose a point as one of your plane's head");

    block_head = null;
    block_mid_1 = null;
    block_mid_2 = null;
    block_mid_3 = null;
    block_wing_1 = null;
    block_wing_2 = null;
    block_wing_3 = null;
    block_wing_4 = null;
    block_tail_1 = null;
    block_tail_2 = null;

    if(plane_num === 0)
        sendInit();
});

var isHitten