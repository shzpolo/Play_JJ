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
var block_mid_4 = null;
var block_wing_1 = null;
var block_wing_2 = null;
var block_wing_3 = null;
var block_wing_4 = null;
var block_tail_1 = null;
var block_tail_2 = null;
var cancel = false;

$("#selfField .block_self").each(function() {
    var block = $(this);
    block.click(function() {
        if(plane_num > 0 && block.attr('chosen') != 'yes') {
            if(block.hasClass("active2")) {
                block.removeClass("active2");
                $("#direction").css('display', 'none');
                $("#txt").text("Please choose a point as one of your plane's head");
                plane_row = 0;
                plane_col = 0;
            }
            else {
                block.addClass("active2");
                $("#direction").css('display', 'block');
                $("#txt").text("Please choose plane tail direction");
                plane_row = block.attr('row');
                plane_col = block.attr('col');
            }
        }
    });
});
$('#left').click(function() {
    if(plane_col < 3 || plane_row < 3 || plane_row > 10) {
        $("#txt").text("You cannot choose this direction");
    }
    block_head = $(this);
    var yes = $('#yes');
    var no = $('#no');
    $('#selfField .block_self').each(function() {
        var block = $(this);
        if(block.attr('row') == plane_row && block.attr('col') == plane_col-1) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_mid_1 = block;
            }

        }
        else if(block.attr('row') == plane_row && block.attr('col') == plane_col-2) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_mid_2 = block;
            }
        }
        else if(block.attr('row') == plane_row && block.attr('col') == plane_col-3) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_mid_3 = block;
            }
        }
        else if(block.attr('row') == plane_row && block.attr('col') == plane_col-4) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_mid_4 = block;
            }
        }
        else if(block.attr('row') == plane_row-2 && block.attr('col') == plane_col-1) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_wing_1 = block;
            }
        }
        else if(block.attr('row') == plane_row-1 && block.attr('col') == plane_col-1) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_wing_2 = block;
            }
        }
        else if(parseInt(block.attr('row')) === parseInt(plane_row)+1 && block.attr('col') == plane_col-1) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_wing_3 = block;
            }
        }
        else if(parseInt(block.attr('row')) === parseInt(plane_row)+2 && block.attr('col') == plane_col-1) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_wing_4 = block;
            }
        }
        else if(block.attr('row') == plane_row-1 && block.attr('col') == plane_col-4) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
            }
            else {
                block_tail_1 = block;
            }
        }
        else if(parseInt(block.attr('row')) === parseInt(plane_row)+1 && block.attr('col') == plane_col-4) {
            if(block.attr('chosen') == "yes") {
                $("#txt").text("You cannot choose this direction");
                cancel = true;
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
        block_mid_4.addClass('active1');
        block_wing_1.addClass('active1');
        block_wing_2.addClass('active1');
        block_wing_3.addClass('active1');
        block_wing_4.addClass('active1');
        block_tail_1.addClass('active1');
        block_tail_2.addClass('active1');
        $("#txt").text("Are you sure this is your plane?");
        yes.css('display', 'block');
        no.css('display', 'block');
        no.click(function() {
            block_mid_1.removeClass('active1');
            block_mid_2.removeClass('active1');
            block_mid_3.removeClass('active1');
            block_mid_4.removeClass('active1');
            block_wing_1.removeClass('active1');
            block_wing_2.removeClass('active1');
            block_wing_3.removeClass('active1');
            block_wing_4.removeClass('active1');
            block_tail_1.removeClass('active1');
            block_tail_2.removeClass('active1');
            block_head.removeClass('active2');
            yes.css('display', 'none');
            no.css('display', 'none');

            block_head = null;
            block_mid_1 = null;
            block_mid_2 = null;
            block_mid_3 = null;
            block_mid_4 = null;
            block_wing_1 = null;
            block_wing_2 = null;
            block_wing_3 = null;
            block_wing_4 = null;
            block_tail_1 = null;
            block_tail_2 = null;
        });
        yes.click(function() {
            plane_num --;
            block_mid_1.attr('chosen', 'yes');
            block_mid_2.attr('chosen', 'yes');
            block_mid_3.attr('chosen', 'yes');
            block_mid_4.attr('chosen', 'yes');
            block_wing_1.attr('chosen', 'yes');
            block_wing_2.attr('chosen', 'yes');
            block_wing_3.attr('chosen', 'yes');
            block_wing_4.attr('chosen', 'yes');
            block_tail_1.attr('chosen', 'yes');
            block_tail_2.attr('chosen', 'yes');
            block_head.attr('chosen', 'yes');
        });
    }


});
$('#right').click(function() {
    if(plane_col > 8 || plane_row < 3 || plane_row > 10) {
        $("#txt").text("You cannot choose this direction");
    }

});
$('#up').click(function() {
    if(plane_col < 2 || plane_row < 4 || plane_col > 9) {
        $("#txt").text("You cannot choose this direction");
    }

});
$('#down').click(function() {
    if(plane_col < 2 || plane_col >  9 || plane_row > 9) {
        $("#txt").text("You cannot choose this direction");
    }

});