/**
 * Created by shzpo_000 on 2017/11/19.
 */
var num = 0;
var cha = "ABCDEFGHIJKL";
var cha_num = 0;
var clear = false;

$(".number").each(function() {
    var block = $(this);
    block.text(num);
    num ++;
    if(num >= 13) {
        num = 0;
    }
});
$(".character").each(function() {
    var block = $(this);
    block.text(cha.charAt(cha_num));
    cha_num ++;
    if(cha_num >= 12) {
        cha_num = 0;
    }
});
$(".row").each(function() {
    var row = $(this);
    row.attr('rowNum', row.find(".number").eq(0).text());
});
cha_num = 0;
$(".block").each(function() {
    var block = $(this);
    block.attr('col', cha_num);
    cha_num ++;
    if(cha_num >= 12) {
        cha_num = 0;
    }
});
$(".block_self").each(function() {
    var block = $(this);
    block.attr('col', cha_num);
    cha_num ++;
    if(cha_num >= 12) {
        cha_num = 0;
    }
});
$(".row").each(function() {
    var row = $(this);
    row.find(".block_self").each(function() {
        var block = $(this);
        block.attr('row', row.attr("rownum"));
    });
    row.find(".block").each(function() {
        var block = $(this);
        block.attr('row', row.attr("rownum"));
    });
});
$("#clearYes").click(function() {
    if(clear) {
        clear = false;
        $(this).removeClass('activeYes');
        $('#clearNo').addClass('activeYes');
    }
    else {
        clear = true;
        $("#clearNo").removeClass('activeYes');
        $(this).addClass('activeYes');
    }
});
$("#clearNo").click(function() {
    if(!clear) {
        clear = true;
        $(this).removeClass('activeYes');
        $('#clearYes').addClass('activeYes');
    }
    else {
        clear = false;
        $("#clearYes").removeClass('activeYes');
        $(this).addClass('activeYes');
    }
});

$("#backupTable2 .block").each(function() {
    var block = $(this);
    block.click(function() {
        if(clear) {
            block.removeClass("active1");
            block.removeClass("active2");
            block.removeClass("active3");
            block.removeClass("active4");
        }
        else {
            if(block.hasClass("active1")) {
                block.removeClass("active1");
                block.addClass("active2");
            }
            else if(block.hasClass("active2")) {
                block.removeClass("active2");
                block.addClass("active3");
            }
            else if(block.hasClass("active3")) {
                block.removeClass("active3");
                block.addClass("active4");
            }
            else if(block.hasClass("active4")) {
                block.removeClass("active4");
            }
            else {
                block.addClass("active1");
            }
        }
    });
});