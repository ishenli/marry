define(function(require, exports, module) {
    var $=require("../gallery/jquery.js");

    $.fn.slides = function() {
        function c(c, b, k, d) {
            var m = c.scrollLeft();
            m == 0 ? k.addClass("disabled") : k.removeClass("disabled");
            b.width() - m <= c.width() ? d.addClass("disabled") : d.removeClass("disabled")
        }
        return this.each(function() {
            $(this);
            var g = $(".prev", this), b = $(".next", this), k = $(".slidesBody", this), d = k.parent(), m;
            k.width($("li", k).length * 220);
            c(d, k, g, b);
            g.click(function() {
                if (!m) {
                    m = true;
                    d.animate({scrollLeft: "-=660"}, 400, function() {
                        m = false;
                        c(d, k, g, b)
                    })
                }
            });
            b.click(function() {
                if (!m) {
                    m = true;
                    d.animate({scrollLeft: "+=660"},
                        400, function() {
                            m = false;
                            c(d, k, g, b)
                        })
                }
            })
        })
    };

    module.exports=function(option){
        $(option.element).slides(option);
    }
});
