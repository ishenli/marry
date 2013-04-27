(function($) {

    var defaults, methods,settings;


    defaults = {
        element: '#demo4',
        panels: '#demo4 .ui-switchable-content img',
        triggers: '#demo4 .ui-switchable-nav li',
        easing: 'easeOutStrong',
        step: 5,
        viewSize: [680],
        circular: true,
        prevBtn: '.prev',
        nextBtn: '.next',
        direction:'next',
        fadeSpeed: 350,
        slideSpeed: 350,
        start: 1,
        effect: 'slide',
        animating:false,
        crossfade: false,
        randomize: false,
        autoPlay:true,
        pause:0,
        interval:3000
    };


    methods = {
        init: function(options, callback) {
            options   = (typeof options === "object") ? options : {};
            callback  = ($.isFunction(callback)) ? callback : function() {};
            callback  = ($.isFunction(options)) ? options : callback;
            settings  = $.extend({}, defaults, options);

            return this.each(function() {
                var self=$(this),
                    content=settings.content?$(settings.content):self.children("[data-role='content']"),
                    panels=settings.panels?$(settings.panels):self.children("[data-role='panel']"),
                    childCount=panels.length,
                    startingChild=(settings.start&&settings.start>(childCount-1))?(childCount-1):settings.start,
                    effect= settings.effect,
                    width=settings.width?settings.width:panels.outerWidth(),
                    prev=$(settings.prev,self),
                    next=$(settings.next,self),
                    current=0;

                $.data("slide","width",width,"effect",effect);
                self.css({
                    position:"relative"
                }).data("slide",$.extend({},settings,{
                            startingChild:startingChild
                        }
                    )
                );
                if(childCount<2) return;

                if(settings.autoPlay){
                    playInterval=setInterval(function(){
                        methods.next(effect);
                    },settings.interval);
                    self.data("interval",playInterval);
                }
                if(settings.nextBtn){
                    $(settings.nextBtn).bind("click.slide",function(){
                        if(!self.data("slide").animating){
                            methods.next.apply(self,[self.data("slide").effect]);
                        }
                        return false;
                    })
                }

                if(settings.prevBtn){
                    $(settings.prevBtn).bind("click.slide",function(){
                        if(!self.data("slide").animating){
                            methods.prev.apply(self,[self.data("slide").effect]);
                        }
                        return false;
                    })
                }


            });
        },
        /**
         * 向后滑动
         * @param duration
         * @param effect
         * @returns {*}
         */
        next:function(duration,effect){
            return methods.animateToNearbyChild.apply(this,[arguments,"next"]);
        },
        prev :function(duration,effect) {
            return methods.animateToNearbyChild..apply(this,[arguments,"prev"])
        },
        /**
         *
         * @param passArgs 效果和位移
         * @param which   next或prev
         */
        animateToNearbyChild:function(passArgs,which){
            var duration=passArgs[0],
                effect=passArgs[1],
                number,currentSlide,value,next,
                self=this,data=self.data("slide"),length=self.children(data.childSelector).length;
            if(!data.animating&&number!==data.current){
                self.data("animating",true);
                currentSlide=data.current;
                if (number > -1) {
                    number = number - 1;
                    value = number > currentSlide ? 1 : -1;
                    direction = number > currentSlide ? -data.width : data.width;
                    next = number;
                } else {
                    value = data.direction === "next" ? 1 : -1;
                    direction =data.direction === "next" ? -data.width : data.width;
                    next = currentSlide + value;
                }
                if (next === -1) {
                    next = data.total - 1;
                }
                if (next === data.total) {
                    next = 0;
                }
                methods.setActive.call(self,next);
            }

        },
        setActive:function(number){
            var self=this,data=self.data("slide");
            current=number>-1?number:data.current;
            $(".ui-switchable-panel-active").removeClass("ui-switchable-panel-active");
            return self.find(data.panels).index(current).addClass("ui-switchable-panel-active");
        }

    };


    // start the plugin
    $.fn.Slide = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || $.isFunction(method) || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + "does not exist");
        }
    };
})(jQuery);