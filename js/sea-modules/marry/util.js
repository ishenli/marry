define(function(require, exports, module) {
    var jQuery=require("marry/extendJq");
    /**
     * 监听窗口大小的变化
     * @param window
     * @param $
     */
    (function(w, $) {
        function b() {
            var a = queue.length, b = 0;
            setTimeout(function() {
                for (; b < a; b++)
                    queue[b].call(windowSize)
            }, 20)
        }
        var $window = $(w), windowSize = {measure: function() {
            var a =$window.width(), b =  $window.height();
            windowSize.width = a;
            windowSize.height = b
        }};
        windowSize.measure();
        $(document).ready(function() {
            windowSize.measure()
        });
        var a,
            r, queue = [], windowResizeListener = {add: function(fn) {
                if (!a) {
                    $window.resize(function() {
                        clearTimeout(r);
                        r = setTimeout(b, 100)
                    });
                    a = true
                }
                a: {
                    for (var f = queue.length, g = 0; g < f; g++)
                        if (fn === queue[g])
                            break a;
                    queue.push(fn)
                }
            }};
        windowResizeListener.add(function() {
            windowSize.measure()
        });
        w.WindowResizeListener = windowResizeListener;
        w.WindowSize = windowSize
    })(window, jQuery);
    var Util={};
    module.exports = Util;
});

