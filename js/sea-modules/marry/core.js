define(function(require, exports, module) {
    var $=require("../marry/extendJq"),
        View=require("../marry/app/view");
    var ca, ea = function() {
        var a = {visibility: "hidden",left: "-999px"};
        fa && fa.css(a);
        ga && ga.css(a)
    }, ka = function() {
        ea();
        fa && fa.css({visibility: "visible"})
    }, Ia = function(a) {
        fa && fa.css({left: a - 4})
    }, Ja, Q, ua, fa, ga, ha, da, ma;
    ca = {hideSpacer: ea,showSpacer: ka,moveSpacer: Ia,init: function(a) {
        if (!Ja) {
            Ja = true;
            Q = a;
            fa = b("#dragdrop-spacer");
            ga = b("#dragdrop-spacer-hor")
        }
    },
        reset: function() {
            da = null;
            ha && ha.hideMask();
            M.hide();
            ea()
        },clonerCopy: function(a, c) {
            var d = c.type, f = c.model;
            if (d === v.PHOTO) {
                d = f.get("photo");
                M.setContent("img", b("<img>").attr("src", c.src).data({width: d.width,height: d.height})).show()
            } else
                d === v.TEXT ? M.setContent("text", f.get("description")).show() : d == v.VIDEO && M.setContent("video", b('<img src="' + f.get("video").src + '?vframe/jpg/offset/0/w/400/h/400" data-width="400" data-height="400">')).show();
            this.moveCloner(a)
        },moveCloner: function(a) {
            M.move({x: a.pageX,
                y: a.pageY})
        },onMousedown: function(a, c) {
            function d() {
                var a = M.getPosition(), c;
                if (a) {
                    if (a.left < 0) {
                        c = true;
                        Q.slideRightScreen()
                    } else if (a.left > WindowSize.width - 200) {
                        c = true;
                        Q.slideLeftScreen()
                    }
                    if (c) {
                        b.clearTimer(ma);
                        setTimeout(function() {
                            ma = setInterval(d, 500)
                        }, 1E3)
                    }
                }
            }
            da = c;
            this.clonerCopy(a, c);
            clearInterval(ma);
            ma = setInterval(d, 500)
        },onMousemove: function(a) {
            var b = this;
            b._mousemoveEvent = a;
            b.moveCloner(a);
            ua || (ua = setInterval(function() {
                b.checkInsertable(b._mousemoveEvent, function(a, b, c, d) {
                    if (a === false && b ===
                        false)
                        ea();
                    else if (a === false) {
                        var c = d.width, f = d.group.left;
                        ea();
                        ga && ga.css({visibility: "visible",width: c,left: f});
                        ga && ga.css({top: b})
                    } else {
                        ka();
                        Ia(a)
                    }
                    if (d && a === false && b === false) {
                        ha = d;
                        d.showMask()
                    } else
                        ha && ha.hideMask()
                })
            }, 100));
            Q.textButtonsVisibility && Q.hideTextButtons()
        },onMouseup: function(a, c) {
            var d = this;
            b.clearTimer(ma);
            ua = b.clearTimer(ua);
            d.checkInsertable(a, function(a, b, f, i, l) {
                var g;
                if (a !== false || b !== false) {
                    if (f.getChildren().length === 1 && f.getFirstChild() === c)
                        return;
                    c.group.removeNote(c);
                    if (a !==
                        false) {
                        l = f.nextSibling().getFirstChild();
                        a = new m(Q);
                        a.add(c);
                        a.checkLayout();
                        i = f.getLastChild();
                        i.$el.after(c.$el);
                        Q.insertAfter(f, a);
                        k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/move",type: "put",data: {target: l.getId(),position: 0}}).run()
                    } else {
                        f = i.group;
                        a = f.getChildIndexOf(i);
                        f.add(c, l === 1 ? a : a + 1);
                        f.setLayout("equally");
                        l === 1 ? i.$el.before(c.$el) : i.$el.after(c.$el);
                        k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/move",type: "put",data: {target: i.getId(),position: l}}).run()
                    }
                    g =
                        true
                } else if (i && i != c) {
                    d.swapNote(c, i);
                    g = true;
                    k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/exchange",type: "put",data: {target: i.getId()}}).run()
                }
                if (g) {
                    Q.render();
                    Q.measureScrollLeft()
                }
            });
            d.reset();
            Q.textButtonsVisibility || Q.showTextButtons()
        },checkInsertable: function(a, c) {
            var d = a.pageX, f = a.pageY, k = Q.getScrollLeft(), i = Q.viewportTop, l = 0, g;
            ha && ha.hideMask();
            b.each(Q.getChildren(), function() {
                var a = this;
                l = l + (1 + this.width);
                var m = l - k, o = m - this.width + 30, n = m - 30, z = this.getType();
                if (d > m - 30 && d < m + 30 &&
                    f > i && f < i + Q.viewportHeight) {
                    if (z === v.TIPS)
                        return g = false;
                    g = true;
                    c && c(l, false, a);
                    return false
                }
                if (d > o && d < n) {
                    if (z === v.DAY || z === v.NODE || z === v.THEEND || z === v.TIPS)
                        return false;
                    g = true;
                    var q, E = this.numChildren(), r = f - i;
                    b.each(this.getChildren(), function(b) {
                        if (E < 3) {
                            var f = this.top + this.height;
                            if (r > -30 && r - this.top < 30) {
                                q = true;
                                da !== this && c && c(false, this.top, a, this, 1);
                                return false
                            }
                            if (b === E - 1 && r > f - 30 && r < f + 30) {
                                q = true;
                                da !== this && c && c(false, this.top + this.height - 9, a, this, 2);
                                return false
                            }
                        }
                        b = this.left - k;
                        if (d > b && d < b + this.width &&
                            r > this.top && r < this.top + this.height) {
                            da && da !== this && c && c(false, false, a, this);
                            q = true;
                            return false
                        }
                    });
                    if (q)
                        return false
                }
            });
            !g && c && c(false, false)
        },checkReplace: function(a, c, d) {
            var f = a.pageX, k = a.pageY - Q.viewportTop, i = Q.getScrollLeft();
            b.each(c.getChildren(), function() {
                var a = this.left - i;
                if (f > a && f < a + this.width && k > this.top && k < this.top + this.height) {
                    (!da || da != this) && d && d(false, false, c, this);
                    return false
                }
            })
        },swapNote: function(a, b) {
            var c = a.group, d = b.group;
            if (c === d)
                c.swap(a, b);
            else {
                c.replace(b, a);
                d.replace(a,
                    b)
            }
            c = b.$el.next();
            if (c[0] !== a.$el[0]) {
                a.$el.prev().after(b.$el);
                c.before(a.$el)
            } else {
                c = b.$el.prev();
                a.$el.next().before(b.$el);
                c.after(a.$el)
            }
        }};
    //初始化函数，绑定相应的事件
    (function(window,document,$){
        console.log("marryViewInstance start~~~~~~~~~");
        var $document=$(document);
         window.marryShowInit=function(){
            $document.ready(function(){
                $(".note").each(function(){
                    var $this=$(this),note=new View.Note($this);
                    note.canEdit();
                });

                $document.on("note:drag",function(a, b) {
                    ca.onMousedown(a, b);
                    $document.on("mousemove", O).on("mouseup", function(a) {
                        n.off("mousemove", O).off("mouseup", arguments.callee);
                        ca.onMouseup(a, b)
                    })
                });
                console.log("marryViewInstance end~~~~~~~~~");
            });
        };

    })(window,document,$);

    module.exports="";
});
