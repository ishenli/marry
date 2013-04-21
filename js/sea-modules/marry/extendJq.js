define(function(require, exports, module) {
    var $=require("../gallery/jquery.js");
    DEBUG = !1;
    (function(c, g) {
        g.support.placeholder = false;
        test = c.createElement("input");
        if ("placeholder" in test)
            g.support.placeholder = true;
        var b = {};
        g.extend(g.support, {cssAttrCheck: function(d) {
            if (!d)
                return d;
            if (b[d])
                return b[d];
            var f = c.createElement("div"), g = ["Webkit", "Moz", "O", "ms"];
            if (f.style[d] === void 0) {
                for (var a = 0, r = g.length, p; a < r; a++) {
                    p = g[a] + d.replace(/\w/, function(a) {
                        return a.toUpperCase()
                    });
                    if (f.style[p] !== void 0) {
                        b[d] = p;
                        return b[d]
                    }
                }
                return false
            }
            b[d] = d.replace(/([A-Z])/g, "-$1");
            return d
        },positionFixed: function() {
            var b =
                true, c;
            return function() {
                if (!c) {
                    var m = g('<div style="position:fixed;left:-9999px;top:-9999px">');
                    g("body").append(m);
                    m.offset().left >= 0 && (b = false);
                    m.remove();
                    c = true
                }
                return b
            }
        }(),positionfullSize: function() {
            var b = true, c;
            return function() {
                if (!c) {
                    var m = g('<div style="position:absolute;left:-9999px;top:-9999px;width:50px;height:50px;"></div>'), a = g('<div style="position:absolute;left:0;right:0;top:0;bottom:0;"></div>');
                    m.append(a);
                    g("body").append(m);
                    a.height() != 50 && (b = false);
                    m.remove();
                    c = true
                }
                return b
            }
        }(),
            minHeight: function() {
                var b, c = true;
                return function() {
                    if (!b) {
                        var m = g("<div>").css("min-height", "50px").appendTo("body");
                        m.height() !== 50 && (c = false);
                        b = true;
                        m.remove()
                    }
                    return c
                }
            }()});
        g.extend(g.fn, {getPadding: function() {
            if (!this.length)
                return false;
            var b = this.eq(0), c = parseInt(b.css("padding-top")), g = parseInt(b.css("padding-bottom")), a = parseInt(b.css("padding-left")), b = parseInt(b.css("padding-right"));
            isNaN(c) && (c = 0);
            isNaN(g) && (g = 0);
            isNaN(a) && (a = 0);
            isNaN(b) && (b = 0);
            return {top: c,right: b,bottom: g,left: a}
        },
            lineHeight: function() {
                if (!this.length)
                    return false;
                var b = this.eq(0), c = parseInt(b.css("font-size")), b = b.css("line-height");
                isNaN(c) && (c = 14);
                return b = b.indexOf("px") != -1 ? parseInt(b) : c * (b - 0)
            },lineLimit: function(b) {
                b && this.each(function() {
                    var c = g(this), m = c.lineHeight(), a = c.height(), m = m * b;
                    a > m && c.height(Math.floor(m))
                })
            }});
        g.extend({timeParse: function(b) {
            b = Date.parse(b);
            if (!b)
                return "";
            var c = (+new Date - b) / 1E3;
            if (c < 60)
                return "\u521a\u521a";
            if (c < 3600)
                return Math.floor(c / 60) + "\u5206\u949f\u524d";
            if (c < 86400)
                return Math.floor(c /
                    3600) + "\u5c0f\u65f6\u524d";
            if (c < 1296E3)
                return Math.floor(c / 86400) + "\u5929\u524d";
            b = new Date(b);
            return b.getFullYear() + "/" + g.pad(b.getMonth() + 1, 2) + "/" + g.pad(b.getDate(), 2) + " " + g.pad(b.getHours(), 2) + ":" + g.pad(b.getMinutes(), 2)
        },clearTimer: function(b) {
            clearInterval(b);
            clearTimeout(b);
            return null
        },pad: function(b, c) {
            for (var g = b.toString().length; g < c; ) {
                b = "0" + b;
                g++
            }
            return b.toString()
        },isClickInside: function(b, f) {
            if (!b || b.nodeType !== 1 || !f || f.nodeType !== 1)
                throw Error("target or elm undefined");
            var m = g(b),
                a = false;
            if (b === f)
                a = true;
            else {
                if (this === c.body)
                    return false;
                m.parents().each(function() {
                    if (this === c.body)
                        return a = false;
                    if (this === f) {
                        a = true;
                        return false
                    }
                })
            }
            return a
        },rnd: function(b, c) {
            return Math.floor((c - b + 1) * Math.random() + b)
        },isString: function(b) {
            return typeof b === "string"
        },isNotEmptyString: function(b) {
            return g.isString(b) && b !== ""
        },getByteLen: function(b) {
            if (!b)
                return 0;
            var c = b.match(/[^\x00-\xff]/ig);
            return b.length + (c == null ? 0 : c.length)
        },getChsLen: function(b) {
            if (!b)
                return 0;
            var c = b.match(/[^\x00-\xff]/ig);
            return b.length * 0.5 + (c == null ? 0 : c.length * 0.5)
        },substr: function(b, c) {
            if (!b)
                return "";
            for (var g = /[^\x00-\xff]/ig, a = 0, r = "", p = 0; p < b.length; p++) {
                var q = b.charAt(p), a = q.match(g) ? a + 2 : a + 1;
                if (a > c)
                    break;
                r = r + q
            }
            return r
        },clonePlainObject: function() {
            function b(c) {
                if (!g.isPlainObject(c))
                    return c;
                var m = {}, a;
                for (a in c)
                    m[a] = b(c[a]);
                return m
            }
            return b
        }(),isEmail: function(b) {
            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(b)
        },Cookie: {get: function(b) {
            var f, m;
            if (g.isNotEmptyString(b) && (m = c.cookie.match("(?:^| )" +
                b + "(?:(?:=([^;]*))|;|$)")))
                f = m[1] ? decodeURIComponent(m[1]) : "";
            return f
        },set: function(b, f, m, a, r) {
            b = b + "=" + encodeURIComponent(f);
            if (typeof m === "number") {
                f = new Date;
                f.setTime(f.getTime() + m * 864E5);
                b = b + ("; expires=" + f.toUTCString())
            }
            g.isNotEmptyString(a) && (b = b + ("; domain=" + a));
            g.isNotEmptyString(r) && (b = b + ("; path=" + r));
            c.cookie = b
        }},log: function() {
            if (!DEBUG)
                return function() {
                };
            var b;
            return function() {
                if (window.console)
                    console.info(arguments);
                else {
                    b || (b = g("<textarea>").css({position: "absolute",bottom: 0,width: "100%",
                        height: 100,left: 0,overflow: "auto",margin: 0,padding: 0,border: "1px solid #DDD",background: "#f3f3f3",zIndex: 99999}).appendTo("body"));
                    for (var c = arguments, m = b.val(), a = 0, r = c.length; a < r; a++)
                        m = m + (c[a] + " , ");
                    b.val(m + "\r\n")
                }
            }
        }()});
        g.fn.moveCursorToEnd = function() {
            if (this.length === 0)
                return this;
            var b = this[0], f = b.value.length;
            this.val(this.val()).focus();
            if (c.selection) {
                b = b.createTextRange();
                b.moveStart("character", f);
                b.collapse();
                b.select()
            } else if (typeof b.selectionStart == "number" && typeof b.selectionEnd ==
                "number")
                b.selectionStart = b.selectionEnd = f;
            return this
        };
        g.fn.fixPosition = function() {
            if (!g.browser.msie || g.browser.version != "6.0")
                return this;
            this.each(function() {
                var b = g(this), c = b.css("position");
                if (c === "fixed" || c === "absolute") {
                    var m = b.parent(), c = m.width(), m = m.height(), a = parseInt(b.css("top")), r = parseInt(b.css("right")), p = parseInt(b.css("bottom")), q = parseInt(b.css("left"));
                    b.css({width: c - q - r,height: m - a - p})
                }
            })
        }
    }(document,$));
    (function(c) {
        var g = "hidden", b = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], d = c('<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;">')[0];
        d.setAttribute("oninput", "return");
        if (c.isFunction(d.oninput) || "onpropertychange" in
            d) {
            c(d).css("lineHeight", "99px");
            c(d).css("lineHeight") === "99px" && b.push("lineHeight");
            c.fn.autosize = function(d) {
                return this.each(function() {
                    function m() {
                        var b, d;
                        if (!s) {
                            s = true;
                            p.value = a.value;
                            p.style.overflowY = a.style.overflowY;
                            p.style.width = r.css("width");
                            p.scrollTop = 0;
                            p.scrollTop = 9E4;
                            b = p.scrollTop;
                            d = g;
                            if (b > n) {
                                b = n;
                                d = "scroll"
                            } else
                                b < q && (b = q);
                            a.style.overflowY = d;
                            a.style.height = b + x + "px";
                            setTimeout(function() {
                                s = false
                            }, 1)
                        }
                    }
                    var a = this, r = c(a), p, q = r.height(), n = parseInt(r.css("maxHeight"), 10), s, u = b.length,
                        v, x = 0;
                    if (r.css("box-sizing") === "border-box" || r.css("-moz-box-sizing") === "border-box" || r.css("-webkit-box-sizing") === "border-box")
                        x = r.outerHeight() - r.height();
                    if (!r.data("mirror") && !r.data("ismirror")) {
                        p = c('<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;">').data("ismirror", true).addClass(d ||
                            "autosizejs")[0];
                        v = r.css("resize") === "none" ? "none" : "horizontal";
                        r.data("mirror", c(p)).css({overflow: g,overflowY: g,wordWrap: "break-word",resize: v});
                        for (n = n && n > 0 ? n : 9E4; u--; )
                            p.style[b[u]] = r.css(b[u]);
                        c("body").append(p);
                        "onpropertychange" in a ? "oninput" in a ? a.oninput = a.onkeyup = m : a.onpropertychange = m : a.oninput = m;
                        c(window).resize(m);
                        r.bind("autosize", m);
                        r.text(r.text());
                        m()
                    }
                })
            }
        } else
            c.fn.autosize = function() {
                return this
            }
    })($);
    $.fn.hasPlaceholder = function() {
        $.support.placeholder || this.each(function() {
            var c = $(this), g = c.attr("placeholder");
            c.focus(function() {
                c.val() == g && c.val("");
                c.removeClass("has-placeholder")
            }).blur(function() {
                    c.val() == "" && c.val(g).addClass("has-placeholder")
                });
            c.blur()
        });
        return this
    };
    // License: http://dragsort.codeplex.com/license
    (function(b){b.fn.dragsort=function(k){if("destroy"==k)b(this.selector).trigger("dragsort-uninit");else{var f=b.extend({},b.fn.dragsort.defaults,k),h=[],a=null,l=null;this.each(function(k,j){b(j).is("table")&&1==b(j).children().size()&&b(j).children().is("tbody")&&(j=b(j).children().get(0));var m={draggedItem:null,placeHolderItem:null,pos:null,offset:null,offsetLimit:null,scroll:null,container:j,init:function(){var a=0==b(this.container).children().size()?"li":b(this.container).children(":first").get(0).tagName.toLowerCase(); ""==f.itemSelector&&(f.itemSelector=a);""==f.dragSelector&&(f.dragSelector=a);""==f.placeHolderTemplate&&(f.placeHolderTemplate="<"+a+">&nbsp;</"+a+">");b(this.container).attr("data-listidx",k).mousedown(this.grabItem).bind("dragsort-uninit",this.uninit);this.styleDragHandlers(!0)},uninit:function(){var a=h[b(this).attr("data-listidx")];b(a.container).unbind("mousedown",a.grabItem).unbind("dragsort-uninit");a.styleDragHandlers(!1)},getItems:function(){return b(this.container).children(f.itemSelector)}, styleDragHandlers:function(a){this.getItems().map(function(){return b(this).is(f.dragSelector)?this:b(this).find(f.dragSelector).get()}).css("cursor",a?"pointer":"")},grabItem:function(a){if(!(1!=a.which||b(a.target).is(f.dragSelectorExclude)||0<b(a.target).closest(f.dragSelectorExclude).size()||0==b(a.target).closest(f.itemSelector).size())){a.preventDefault();for(var c=a.target;!b(c).is(f.dragSelector);){if(c==this)return;c=c.parentNode}b(c).attr("data-cursor",b(c).css("cursor"));b(c).css("cursor", "move");var e=h[b(this).attr("data-listidx")],g=this,i=function(){e.dragStart.call(g,a);b(e.container).unbind("mousemove",i)};b(e.container).mousemove(i).mouseup(function(){b(e.container).unbind("mousemove",i);b(c).css("cursor",b(c).attr("data-cursor"))})}},dragStart:function(d){null!=a&&null!=a.draggedItem&&a.dropItem();a=h[b(this).attr("data-listidx")];a.draggedItem=b(d.target).closest(f.itemSelector);a.draggedItem.attr("data-origpos",b(this).attr("data-listidx")+"-"+a.getItems().index(a.draggedItem)); var c=parseInt(a.draggedItem.css("marginTop")),e=parseInt(a.draggedItem.css("marginLeft"));a.offset=a.draggedItem.offset();a.offset.top=d.pageY-a.offset.top+(isNaN(c)?0:c)-1;a.offset.left=d.pageX-a.offset.left+(isNaN(e)?0:e)-1;f.dragBetween||(c=0==b(a.container).outerHeight()?Math.max(1,Math.round(0.5+a.getItems().size()*a.draggedItem.outerWidth()/b(a.container).outerWidth()))*a.draggedItem.outerHeight():b(a.container).outerHeight(),a.offsetLimit=b(a.container).offset(),a.offsetLimit.right=a.offsetLimit.left+ b(a.container).outerWidth()-a.draggedItem.outerWidth(),a.offsetLimit.bottom=a.offsetLimit.top+c-a.draggedItem.outerHeight());c=a.draggedItem.height();e=a.draggedItem.width();"tr"==f.itemSelector?(a.draggedItem.children().each(function(){b(this).width(b(this).width())}),a.placeHolderItem=a.draggedItem.clone().attr("data-placeholder",!0),a.draggedItem.after(a.placeHolderItem),a.placeHolderItem.children().each(function(){b(this).css({borderWidth:0,width:b(this).width()+1,height:b(this).height()+1}).html("&nbsp;")})): (a.draggedItem.after(f.placeHolderTemplate),a.placeHolderItem=a.draggedItem.next().css({height:c,width:e}).attr("data-placeholder",!0));if("td"==f.itemSelector){var g=a.draggedItem.closest("table").get(0);b("<table id='"+g.id+"' style='border-width: 0px;' class='dragSortItem "+g.className+"'><tr></tr></table>").appendTo("body").children().append(a.draggedItem)}g=a.draggedItem.attr("style");a.draggedItem.attr("data-origstyle",g?g:"");a.draggedItem.css({position:"absolute",opacity:0.8,"z-index":999, height:c,width:e});a.scroll={moveX:0,moveY:0,maxX:b(document).width()-b(window).width(),maxY:b(document).height()-b(window).height()};a.scroll.scrollY=window.setInterval(function(){if(f.scrollContainer!=window)b(f.scrollContainer).scrollTop(b(f.scrollContainer).scrollTop()+a.scroll.moveY);else{var c=b(f.scrollContainer).scrollTop();if(0<a.scroll.moveY&&c<a.scroll.maxY||0>a.scroll.moveY&&0<c)b(f.scrollContainer).scrollTop(c+a.scroll.moveY),a.draggedItem.css("top",a.draggedItem.offset().top+a.scroll.moveY+ 1)}},10);a.scroll.scrollX=window.setInterval(function(){if(f.scrollContainer!=window)b(f.scrollContainer).scrollLeft(b(f.scrollContainer).scrollLeft()+a.scroll.moveX);else{var c=b(f.scrollContainer).scrollLeft();if(0<a.scroll.moveX&&c<a.scroll.maxX||0>a.scroll.moveX&&0<c)b(f.scrollContainer).scrollLeft(c+a.scroll.moveX),a.draggedItem.css("left",a.draggedItem.offset().left+a.scroll.moveX+1)}},10);b(h).each(function(a,b){b.createDropTargets();b.buildPositionTable()});a.setPos(d.pageX,d.pageY);b(document).bind("mousemove", a.swapItems);b(document).bind("mouseup",a.dropItem);f.scrollContainer!=window&&b(window).bind("DOMMouseScroll mousewheel",a.wheel)},setPos:function(d,c){var e=c-this.offset.top,g=d-this.offset.left;f.dragBetween||(e=Math.min(this.offsetLimit.bottom,Math.max(e,this.offsetLimit.top)),g=Math.min(this.offsetLimit.right,Math.max(g,this.offsetLimit.left)));this.draggedItem.parents().each(function(){if("static"!=b(this).css("position")&&(!b.browser.mozilla||"table"!=b(this).css("display"))){var a=b(this).offset(); e-=a.top;g-=a.left;return!1}});if(f.scrollContainer==window)c-=b(window).scrollTop(),d-=b(window).scrollLeft(),c=Math.max(0,c-b(window).height()+5)+Math.min(0,c-5),d=Math.max(0,d-b(window).width()+5)+Math.min(0,d-5);else var i=b(f.scrollContainer),h=i.offset(),c=Math.max(0,c-i.height()-h.top)+Math.min(0,c-h.top),d=Math.max(0,d-i.width()-h.left)+Math.min(0,d-h.left);a.scroll.moveX=0==d?0:d*f.scrollSpeed/Math.abs(d);a.scroll.moveY=0==c?0:c*f.scrollSpeed/Math.abs(c);this.draggedItem.css({top:e,left:g})}, wheel:function(d){if((b.browser.safari||b.browser.mozilla)&&a&&f.scrollContainer!=window){var c=b(f.scrollContainer),e=c.offset();d.pageX>e.left&&d.pageX<e.left+c.width()&&d.pageY>e.top&&d.pageY<e.top+c.height()&&(e=d.detail?5*d.detail:d.wheelDelta/-2,c.scrollTop(c.scrollTop()+e),d.preventDefault())}},buildPositionTable:function(){var d=[];this.getItems().not([a.draggedItem[0],a.placeHolderItem[0]]).each(function(a){var e=b(this).offset();e.right=e.left+b(this).outerWidth();e.bottom=e.top+b(this).outerHeight(); e.elm=this;d[a]=e});this.pos=d},dropItem:function(){if(null!=a.draggedItem){var d=a.draggedItem.attr("data-origstyle");a.draggedItem.attr("style",d);""==d&&a.draggedItem.removeAttr("style");a.draggedItem.removeAttr("data-origstyle");a.styleDragHandlers(!0);a.placeHolderItem.before(a.draggedItem);a.placeHolderItem.remove();b("[data-droptarget], .dragSortItem").remove();window.clearInterval(a.scroll.scrollY);window.clearInterval(a.scroll.scrollX);a.draggedItem.attr("data-origpos")!=b(h).index(a)+"-"+ a.getItems().index(a.draggedItem)&&f.dragEnd.apply(a.draggedItem);a.draggedItem.removeAttr("data-origpos");a.draggedItem=null;b(document).unbind("mousemove",a.swapItems);b(document).unbind("mouseup",a.dropItem);f.scrollContainer!=window&&b(window).unbind("DOMMouseScroll mousewheel",a.wheel);return!1}},swapItems:function(d){if(null==a.draggedItem)return!1;a.setPos(d.pageX,d.pageY);for(var c=a.findPos(d.pageX,d.pageY),e=a,g=0;-1==c&&f.dragBetween&&g<h.length;g++)c=h[g].findPos(d.pageX,d.pageY),e=h[g]; if(-1==c)return!1;var i=function(){return b(e.container).children().not(e.draggedItem)},d=i().not(f.itemSelector).each(function(){this.idx=i().index(this)});null==l||l.top>a.draggedItem.offset().top||l.left>a.draggedItem.offset().left?b(e.pos[c].elm).before(a.placeHolderItem):b(e.pos[c].elm).after(a.placeHolderItem);d.each(function(){var a=i().eq(this.idx).get(0);this!=a&&i().index(this)<this.idx?b(this).insertAfter(a):this!=a&&b(this).insertBefore(a)});b(h).each(function(a,b){b.createDropTargets(); b.buildPositionTable()});l=a.draggedItem.offset();return!1},findPos:function(a,b){for(var e=0;e<this.pos.length;e++)if(this.pos[e].left<a&&this.pos[e].right>a&&this.pos[e].top<b&&this.pos[e].bottom>b)return e;return-1},createDropTargets:function(){f.dragBetween&&b(h).each(function(){var d=b(this.container).find("[data-placeholder]"),c=b(this.container).find("[data-droptarget]");0<d.size()&&0<c.size()?c.remove():0==d.size()&&0==c.size()&&("td"==f.itemSelector?b(f.placeHolderTemplate).attr("data-droptarget", !0).appendTo(this.container):b(this.container).append(a.placeHolderItem.removeAttr("data-placeholder").clone().attr("data-droptarget",!0)),a.placeHolderItem.attr("data-placeholder",!0))})}};m.init();h.push(m)});return this}};b.fn.dragsort.defaults={itemSelector:"",dragSelector:"",dragSelectorExclude:"input, textarea",dragEnd:function(){},dragBetween:!1,placeHolderTemplate:"",scrollContainer:window,scrollSpeed:5}})($);
    module.exports=$;
});
