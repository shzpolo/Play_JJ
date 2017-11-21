/**
 * Created by shzpo_000 on 2017/11/19.
 */
$("#backupTable1 .block").each(function() {
    var block = $(this);
    block.click(function() {
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
    });
});
