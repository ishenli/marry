define(function(require, exports, module) {
    var $=require("../marry/extendJq"),
     MarryShow=require("../marry/marryShow"),
        Base=require("../arale/base/1.0.1/base"),
    Events = require("../arale/events/1.0.0/events");

    function isMobileDevice() {
        return /(mobile|iphone|ipad|android)/gi.test(navigator.appVersion);
    }
    (function(c, g) {
        function b() {
            var a = p.length, b = 0;
            setTimeout(function() {
                for (; b < a; b++)
                    p[b].call(m)
            }, 20)
        }
        var d = g(c),
            isMobile = isMobileDevice(),
            m = {measure: function() {
            var a = isMobile ? c.innerWidth : d.width(),
                b = isMobile ? c.innerHeight : d.height();
            if (isMobile)
                for (var g = document.getElementsByTagName("meta"), r = g.length, q = 0; q < r; q++) {
                    var p = g[q];
                    if (p.getAttribute("name") == "viewport") {
                        p.setAttribute("content", "width = " + a + ",maximum-scale=1,user-scalable=no");
                        break
                    }
                }
            m.width = a;
            m.height = b
        }};
        m.measure();
        g(document).ready(function() {
            m.measure()
        });
        var a,
            r,
            p = [],
            q = {add: function(c) {
                if (!a) {
                    d.resize(function() {
                        clearTimeout(r);
                        r = setTimeout(b, 100)
                    });
                    a = true
                }
                a: {
                    for (var f = p.length, g = 0; g < f; g++)
                        if (c === p[g])
                            break a;
                    p.push(c)
                }
            }};
        q.add(function() {
            m.measure()
        });
        c.WindowResizeListener = q;
        c.WindowSize = m
    })(window, $);

    function d() {  //a,t,w 为宽度和高度的数值，下方有声明
        if (a) { t = 40; w = 5 } else { t = 100; w = 50 }
    }
    function m(a) {
        this.notes = [];
        this.slider = a;
        this.left = 0
    }
    function f(a,c){//a,c is jquery selector
        var d = this;
        d.$viewport = $(c).bind("mousewheel", function(a, b) {//绑定滚轮操作
            b || (b = 1);
            b > 0 ? d.slideLeft(b) : d.slideRight(Math.abs(b))
        });
        d.groups = [];
        d.$el = $(a);
        d.left = 0;
        d._currentScrollLeft = 0;
        d.resizeViewport();
        d.addTextButtons = {};
        d.textButtonsVisibility = true;
        d.dragEvent()
    }

    Events.mixTo(f);


    var a = screen.height <= 568,p = "ontouchstart" in document.documentElement,
        $document = $(document),
        x=new MarryShow.View.TripShow(),
        t = 100, w = 50, C = ["bottomHeavy", "equally", "topHeavy"];
    d.call(WindowSize);
    WindowResizeListener.add(d);


    f.prototype={
        dragEvent:function(){
            if (p) {
                var a = this, b = p ? "touchstart" : "mousedown", c = p ? "touchmove" : "mousemove", d = p ? "touchend" : "mouseup.dragviewport", f = this.$viewport, k = f[0], i, l, g;
                if (p) {
                    k.addEventListener(b, function(a) {
                        a.preventDefault();
                        l = i = a.touches[0].pageX
                    }, false);
                    k.addEventListener(c, function(b) {
                        b.preventDefault();
                        b = b.touches[0].pageX;
                        a.scrollTo(k.scrollLeft +
                            -(b - l), true, true);
                        l = b;
                        g || (g = Date.now())
                    }, false);
                    k.addEventListener(d, function(b) {
                        b.preventDefault();
                        (b = b.touches && b.touches.length > 0 ? b.touches[0].pageX : l) && Date.now() - g < 250 && (i - b > 50 ? a.slideLeftScreen() : b - i > 50 && a.slideRightScreen());
                        g = null
                    }, false)
                } else
                    f.on(b, function(b) {
                        b.preventDefault();
                        l = i = b;
                        f.on(c, function(b) {
                            b.preventDefault();
                            a.scrollTo(f[0].scrollLeft + -(b.pageX - l.pageX), true, true);
                            l = b;
                            g || (g = Date.now())
                        });
                        n.on(d, function(b) {
                            f.off(c);
                            n.off(d);
                            Date.now() - g < 250 && (i.pageX - b.pageX > 20 ? a.slideLeftScreen() :
                                b.pageX - i.pageX > 20 && a.slideRightScreen());
                            g = null
                        })
                    })
            }
        },
        insertAfter: function(a, b) {
        var c = this.getChildIndexOf(a);
        c > -1 && this.add(b, c + 1)
    },insertBefore: function(a, b) {
        var c = this.getChildIndexOf(a);
        c > -1 && this.add(b, c)
    },remove: function(a) {
        var c = this;
        $.each(c.groups, function(b) {
            if (this === a) {
                c.groups.splice(b,
                    1);
                return false
            }
        })
    },getHeight: function() {
        return this.viewportHeight
    },getChildren: function() {
        return this.groups.concat();
    },getChildAt: function(a) {
        return this.groups[a]
    },getChildIndexOf: function(a) {
        return _.indexOf(this.groups, a)
    },findNote: function(a) {
        var c;
        $.each(this.getChildren(), function() {
            if (c = this.findChildren(a))
                return false;
        });
        return c;
    },getNextNote: function(a) {
        var c, d;
        $.each(this.getChildren(), function() {
            if (c)
                return false;
            $.each(this.getChildren(), function() {
                if (d) {
                    c = this;
                    return false
                }
                this === a &&
                (d = true)
            })
        });
        return c
    },getPrevNote: function(a) {
        var c, d;
        $.each(this.getChildren(), function() {
            if (c)
                return false;
            $.each(this.getChildren(), function() {
                if (this === a) {
                    c = d;
                    return false
                }
                d = this
            })
        });
        return c;
    },render: function() {
        Events.mixTo(this);
        var a = 0;
        $.each(this.getChildren(), function() {
            var b = this.render(a + 1);
            a = a + (1 + b)
        });
        this.$el.width(a);
        this.width = a;
        this.trigger("rendered");
       console.log("rendered!!!!!!!!!!!!!!!!!")
        this.isEditView && this.relayoutTextButton();
        this._updateNodeTitle();
    },relayoutTextButton: function() {
        var a = this, c = a.addTextButtons, d = this.getChildren(),
            f = d.length;
        a._resetTextButton();
        $.each(d, function(b) {
            if (b > 0 && b < f - 1) {
                var d = c["b" + b], k = this;
                if (!d) {
                    d = c["b" + b] = a._createAddTextButton();
                    a.$viewport.append(d)
                }
                d.css("left", k.left - 6).off("click.addtext").on("click.addtext", function(a) {
                    a.stopPropagation();
                    n.trigger("addtext", [k])
                })
            }
        })
    },showTextButtons: function() {
        $.each(this.addTextButtons, function() {
            this.css("visibility", "visible")
        });
        this.textButtonsVisibility = true
    },hideTextButtons: function() {
        $.each(this.addTextButtons, function() {
            this.css("visibility",
                "hidden")
        });
        this.textButtonsVisibility = false
    },_resetTextButton: function() {
        $.each(this.addTextButtons, function() {
            this.css("left", "-100px")
        })
    },_createAddTextButton: function() {
        return b('<div class="add-text-btn"></div>')
    },findNearestGroup: function(a) {
        var c = a.getType(), d;
        c === v.DAY || c === v.NODE ? d = a : $.each(this.getChildren(), function() {
            var b = this.getType();
            if (b === v.DAY || b === v.NODE)
                d = this;
            if (this === a)
                return false
        });
        return d
    },setPath: function(a) {
        this.nav = a;
        this.setPathCurrent(this.currentGroup)
    },setPathCurrent: function(a) {
        if (this.nav) {
            a =
                this.findNearestGroup(a);
            this.nav.setCurrent(a)
        }
    },firstVisiable: function() {
        var a = this.getScrollLeft(), c = 0, d;
        $.each(this.getChildren(), function() {
            if (c + this.width >= a) {
                d = this;
                return false
            }
            c = c + (1 + this.width)
        });
        return d
    },_findCurrentGroup: function() {
        var a, c = 0, d = this, f = WindowSize.width / 2;
        $.each(this.getChildren(), function() {
            if (c + this.width > d._currentScrollLeft + f) {
                d.currentGroup = a = this;
                return false
            }
            c = c + (1 + this.width)
        });
        return a
    },slideLeftScreen: function() {
        var a = this._currentScrollLeft + this.viewportWidth;
        if (!(this._currentScrollLeft >= this.width)) {
            var c = 0;
            $.each(this.getChildren(), function() {
                if (c >= a || c + this.width > a)
                    return false;
                c = c + (1 + this.width)
            });
            this.scrollTo(c)
        }
    },slideRightScreen: function() {
        this.getScrollLeft();
        if (!(this._currentScrollLeft <= 0)) {
            var a = this, c = 0;
            $.each(this.getChildren(), function() {
                if (c + this.width >= a._currentScrollLeft) {
                    c = c - (a.viewportWidth - this.width - 2);
                    return false
                }
                c = c + (1 + this.width)
            });
            this.scrollTo(c)
        }
    },slideLeft: function(a) {
        console.log("slideLeft---------------");
        a = Math.min(a || 1, 5);
        a = this._currentScrollLeft - 150 * a;
        a <0 && (a = 0);
        console.log("slideLeft a is"+a);
        this.scrollTo(100, true, true)
    },slideRight: function(a) {
        a = Math.min(a || 1, 5);
        this.scrollTo(this._currentScrollLeft + 150 * a, true, true)
    },scrollTo: function(a, c, d) {
        console.log("开始滚了！！！！！！！！！！！！！");
        var f = this, k = f.$viewport;
        Events.mixTo(f);
        f.trigger("slider:scroll");
        a = Math.floor(a);
        a < 0 && (a = 0);
        a > this.width - this.viewportWidth && (a = this.width - this.viewportWidth);
        if (d) {
            f._currentScrollLeft = a;
            k.scrollLeft(a);
            f.preload();
            f._updateNodeTitle();
            f.setPathCurrent(f._findCurrentGroup())
        } else {
            if (c)
                cancelFrame(f._reqId);
            else if (this._scrolling)
                return;
            this._scrolling =
                true;
            var i = Date.now(), l = 0, g = this._currentScrollLeft, m = a - this._currentScrollLeft, o = Math.min(Math.abs(m), 800), n = function(c) {
                c = Date.now();
                if (c - i >= 10) {
                    l = l + (c - i);
                    f._currentScrollLeft = Math.ceil(b.easing.swing(void 0, l, g, m, o));
                    if (l >= o) {
                        f._currentScrollLeft = a;
                        f.$viewport.scrollLeft(f._currentScrollLeft);
                        cancelFrame(f._reqId);
                        f._scrolling = false;
                        f.preload();
                        f._updateNodeTitle();
                        f.setPathCurrent(f._findCurrentGroup());
                        return
                    }
                    i = c;
                    f.$viewport.scrollLeft(f._currentScrollLeft)
                }
                return nextFrame(n)
            };
            f._reqId = nextFrame(n)
        }
    },
    isEnd: function() {
        return this._currentScrollLeft >= this.width - this.viewportWidth ? true : false
    },autoPlay: function() {
        var a = this;
        if (!a._autoPlayTimer) {
            a.slideLeftScreen();
            a._autoPlayTimer = setInterval(function() {
                a.slideLeftScreen();
                if (a.isEnd())
                    a._autoPlayTimer = b.clearTimer(a._autoPlayTimer)
            }, 5E3)
        }
    },stopPlay: function() {
        this._autoPlayTimer = $.clearTimer(this._autoPlayTimer)
    },isPlaying: function() {
        return !!this._autoPlayTimer
    },_updateNodeTitle: function() {
        var a, c, d = 0, f = this, k = WindowSize.width / 2;
        $.each(this.getChildren(),
            function() {
                if (this.layout === "full") {
                    var b = this.getFirstChild();
                    if (b.type === v.DAY) {
                        a = b;
                        c = null
                    } else
                        b.type === v.NODE && (c = b)
                }
                if (d + this.width > f._currentScrollLeft + k && a)
                    return false;
                d = d + (1 + this.width)
            });
        var i = "\u7b2c" + 1 + "\u5929";
        c && (i = i + ("\uff1a" + c.model.get("entry").name_zh_cn));
        $("#nav-board span").text(i)
    },scrollToGroup: function(a, b) {
        if (a && a.left !== void 0) {
            var c = a.left;
            b && (c = c - (WindowSize.width - a.width) / 2);
            this.scrollTo(c, true)
        }
    },getScrollLeft: function() {
        return this._currentScrollLeft
    },
    measureScrollLeft: function() {
        var a = this;
        setTimeout(function() {
            a._currentScrollLeft = a.$viewport.scrollLeft()
        }, 500)
    },resizeViewport: function(a) {
        var b = WindowSize.height, c = this.$viewport;
        this.viewportWidth = WindowSize.width;
        this.viewportHeight = a ? 300 : Math.ceil(Math.max(200, b - t - w));
        this.viewportTop = Math.ceil(Math.max(t, (b - this.viewportHeight) / 2));
        a = {height: this.viewportHeight,top: this.viewportTop};
        c.css("height", a.height).parent().css(a)
    },openEditView: function() {
        this.isEditView = true;
        this.trigger("openeditview");
        this._textButtonAdded || this.relayoutTextButton()
    },closeEditView: function() {
        this.isEditView = false;
        this.trigger("closeeditview");
        this.isZoomOut && this.restore()
    },zoomout: function() {
        var a = this, b = a.firstVisiable();
        a.isZoomOut = true;
        a.resizeViewport(true);
        a.render();
        a.trigger("zoomout");
        setTimeout(function() {
            a.scrollToGroup(b)
        }, 5);
        this.preload()
    },restore: function() {
        var a = this, b = a.firstVisiable();
        a.trigger("restore");
        a.isZoomOut = false;
        a.resizeViewport();
        a.render();
        setTimeout(function() {
                a.scrollToGroup(b)
            },
            5)
    },chkAllIsLoaded: function() {
        if (!this._allLoaded) {
            var a = true, c;
            $.each(this.getChildren(), function() {
                if (c)
                    return false;
                $.each(this.getChildren(), function() {
                    if (this.type === v.PHOTO && !this.lazyLoaded) {
                        a = false;
                        c = true;
                        return false
                    }
                })
            });
            this._allLoaded = a
        }
    },preload: function() {
        if (!this._allLoaded) {
            var a = this, c = this.firstVisiable(), d = this.getScrollLeft(), f;
            $.each(this.getChildren(), function() {
                this === c && (f = true);
                if (f) {
                    if (this.left - d >= a.viewportWidth * 2)
                        return false;
                    $.each(this.getChildren(), function() {
                        this.type ===
                            v.PHOTO && this.lazyLoad()
                    })
                }
            });
            this.chkAllIsLoaded()
        }
    }
    };

    m.prototype = {
        constructor: m,
    render: function(a) {
        var b = this.slider.getHeight(), c = this.layout;
        this.height = b;
        this.width = va[c](this, b);
        this.setPosition(a);
        return this.width
    },setPosition: function(a) {
        this.left = a;
        $.each(this.notes, function() {
            this.setPosition(a)
        })
    },getType: function() {
        return this.notes[0].type
    },isEditable: function() {
        var a = this.notes[0];
        return a.type === v.PHOTO || a.type === v.TEXT
    },add: function(a, c) {
        b.isArray(a) ||
        (a = [a]);
        var d = this;
        $.each(a, function(b) {
            var f = a[b];
            f.setGroup(d);
            c === void 0 ? d.notes.push(f) : d.notes.splice(b + c, 0, f)
        })
    },numChildren: function() {
        return this.notes.length
    },findChildren: function(a) {
        var c;
        $.each(this.notes, function() {
            if (this._id == a) {
                c = this;
                return false
            }
        });
        return c
    },getChildren: function() {
        return this.notes.concat()
    },getLastChild: function() {
        return _.last(this.notes)
    },getFirstChild: function() {
        return this.notes[0]
    },getChildIndexOf: function(a) {
        return _.indexOf(this.notes, a)
    },prevSibling: function() {
        var a =
            this.slider;
        return a.getChildAt(a.getChildIndexOf(this) - 1)
    },nextSibling: function() {
        var a = this.slider;
        return a.getChildAt(a.getChildIndexOf(this) + 1)
    },checkLayout: function() {
        var a;
        if (this.notes.length === 1)
            a = "full";
        else {
            a = this.notes[0].getGroupLayout();
            a == "full" && (a = D(a))
        }
        this.setLayout(a)
    },setLayout: function(a) {
        this.layout = a;
        $.each(this.notes, function() {
            this.setGroupLayout(a)
        })
    },swap: function(a, b) {
        if (a.group === b.group && a.group === this) {
            var c = this.getChildIndexOf(a), d = this.getChildIndexOf(b);
            this.notes[c] =
                b;
            this.notes[d] = a
        }
    },replace: function(a, b) {
        a.setGroupLayout(this.layout);
        a.setGroup(this);
        var c = this.getChildIndexOf(b);
        this.notes[c] = a
    },shift: function() {
        return this.notes.shift()
    },removeNote: function(a) {
        var b = this.getChildIndexOf(a);
        b > -1 && this.notes.splice(b, 1);
        if (this.notes.length === 0) {
            this.slider.remove(this);
            return a
        }
        this.checkLayout();
        return a
    },join: function(a) {
        if (this.isEditable()) {
            var b = a.getGroupLayout();
            this.add(a);
            this.setLayout(D(b))
        }
    },concat: function(a) {
        if (a.isEditable()) {
            var c = this, d =
                a.getChildren(), f = a.layout;
            $.each(d, function() {
                c.add(this)
            });
            this.slider.remove(a);
            this.setLayout(D(f))
        }
    },split: function(a) {
        var b = this.slider.getChildIndexOf(this) + 1;
        if (a === 0) {
            var c = this.notes.splice(1, this.notes.length - 1), a = new m(this.slider);
            a.add(c);
            a.checkLayout();
            this.slider.add(a, b)
        } else {
            c = this.notes.splice(a, this.notes.length - a);
            if (c.length > 1) {
                a = new m(this.slider);
                a.add(c.splice(1, 1));
                a.checkLayout();
                this.slider.add(a, b);
                a = new m(this.slider);
                a.add(c);
                a.checkLayout();
                this.slider.add(a, b)
            } else {
                a =
                    new m(this.slider);
                a.add(c);
                a.checkLayout();
                this.slider.add(a, this.slider.getChildIndexOf(this) + 1)
            }
        }
        this.checkLayout()
    },showLayoutToolbar: function() {
        this.slider.isEditView && this.layout !== "full" && L.show(this, this.width, this.left)
    },hideLayoutToolbar: function() {
        this.slider.isEditView && L.hide()
    }};

    //初始化函数，绑定相应的事件
    (function(window,$){
         console.log("marryViewInstance start~~~~~~~~~");

         window.marryShowInit=function(){
            $document.ready(function(){
                var renderFun = function(a) {
                    t.visibility || t.show();
                    var b = p.findNote(a);
                    if (b && b.group && b.group.left)
                        p.scrollToGroup(b.group, true);
                    else
                        p.on("rendered", function() {
                            p.scrollToGroup(b.group, true);
                            p.off("rendered", arguments.callee)
                        })
                };
                var p=new f("#slider", "#viewport"),
                    t =new MarryShow.TrainView("#viewer");
                $("#open-trips").click(function(){
                    t.show();
                });
                $("#back-cover").click(function() {
                    t.hide();
                });
                t.on("opened",function(){
                    x.openMode("trainView");
                }).on("closed", function() {
                        x.closeMode("trainView");
                        (E = p.isEditView) && p.closeEditView();
                        p.stopPlay()
                });
//                p.on("slider:scroll", function() {
//                    B.close()
//                })
                //随时修改屏幕的大小
                var N, H = function() {
                    console.log("window resize !!!!!!!");
//                   W.resize();
//                    u.resize();
                    if (t.visibility) {
                        p.resizeViewport();
                        p.render()
                    } else {
                        clearTimeout(N);
                        N = setTimeout(function() {
                            p.resizeViewport();
                            p.render()
                        }, 300)
                    }
                    p.preload()
                };
                WindowResizeListener.add(H);
                console.log("marryViewInstance init~~~~~~~~~");

            });
         }
    }(window,$))

    module.exports="";
});
