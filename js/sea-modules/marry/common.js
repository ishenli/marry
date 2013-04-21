define(function(require, exports, module) {
    var jQuery=require("../gallery/jquery.js");

    //图片渐隐
    jQuery(function () {
        jQuery('.thumbnail img').hover(
            function() {jQuery(this).fadeTo("fast", 0.5);},
            function() {jQuery(this).fadeTo("fast", 1);
            });
    });

});