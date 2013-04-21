define(function(require, exports, module) {
    var $=require("../marry/extendJq.js"),
        Base=require("../arale/base/1.0.1/base"),
        Events = require("../arale/events/1.0.0/events");
    var FX = {transitionend: "transitionend oTransitionEnd webkitTransitionEnd MSTransitionEnd"};
    var MarryShow = Base.extend({
    });
    MarryShow.View=MarryShow.extend({});
    MarryShow.View.TripShow=MarryShow.extend({
        initialize: function() {
            this.$logo = $(".logo");
            this.$topMenu = $(".show-top-menu");
            this.$moreLink = $(".more-travels");
            this.$header = $(".cover-header");
            this.$thumb = $("#open-trips")
        },openMode: function(c) {
            var g = this;
            if (g.mode !== c) {
                switch (c) {
                    case "trainView":
                        $("body").addClass("mode-train-app");
                        $.support.cssAttrCheck("transition") || g.$logo.animate({top: "-=200"}, 300, function() {
                            g.$logo.css({top: "auto",
                                bottom: 12})
                        });
                        break;
                    case "editCoverPhoto":
                        $("body").addClass("edit-cover");
                        if (!$.support.cssAttrCheck("transition")) {
                            this.$logo.animate({top: "-=200"}, 300);
                            this.$topMenu.animate({top: "-=200"}, 300);
                            this.$moreLink.animate({right: "-=500"}, 300);
                            this.$thumb.animate({left: "+=300"}, 300)
                        }
                }
                this.mode = c
            }
        },closeMode: function(c) {
            var g = this;
            switch (c) {
                case "trainView":
                    $("body").removeClass("mode-train-app");
                    $.support.cssAttrCheck("transition") || g.$logo.animate({bottom: "-=200"}, 300, function() {
                        g.$logo.css({top: 10,
                            bottom: "auto"})
                    });
                    break;
                case "editCoverPhoto":
                    $("body").removeClass("edit-cover");
                    if (!$.support.cssAttrCheck("transition")) {
                        this.$logo.animate({top: "+=200"}, 300);
                        this.$topMenu.animate({top: "+=200"}, 300);
                        this.$moreLink.animate({right: "+=500"}, 300);
                        this.$thumb.animate({left: "-=300"}, 300)
                    }
            }
            this.mode = null
        }
    });
    MarryShow.TrainView=MarryShow.extend({
        initialize:function(element){
            this.$el=$(element);
        },
        show: function() {
            $.support.cssAttrCheck("transition") ? this.$el.css("left", 0) : this.$el.animate({left: 0}, {duration: 200});
            this.visibility = true;
            this.trigger("opened");

        },
        hide: function() {
            var c = this;
            $.support.cssAttrCheck("transition") ? c.$el.on(FX.transitionend, function() {
                c.$el.off(FX.transitionend);
                c.trigger("closed")
            }).css("left", "100%") : c.$el.animate({left: "100%"}, {duration: 200,complete: function() {
                c.trigger("closed")
            }});
            c.visibility = false;
        }
    });

    (function(c, g, b) {
        function d(a) {
            this.coverPhoto = a
        }
        var f = $(g), m = Math, c = Base.extend({initialize: function(a) {
            Backbone.View.prototype.initialize.call(this, a);
            this.$loadico = this.$el.find(".load-ico");
            this.$img = this.$el.find(".img").on("mousedown", function(a) {
                a.preventDefault()
            });
            this.isCustom = !!this.$img.data("custom")
        },setSrc: function(a, b) {
            if (b != void 0) {
                this.isCustom = !b;
                console.info(this.isCustom)
            }
            var c = this, d = $('<img style="position:absolute;top:-9999px;left:-9999px;">');
            c.loaded = false;
            c.$loadico.removeClass("loaded").show();
            d.on("load", function() {
                c.loaded = true;
                c.$loadico.hide().addClass("loaded");
                c._imgWidth = d.width();
                c._imgHeight = d.height();
                c.$img.attr("src", a);
                c.resize();
                c.trigger("load");
                d.off("load error").remove()
            }).on("error", function() {
                    c.trigger("load");
                    d.off("load error").remove()
                }).appendTo("body").attr("src", a)
        },resize: function() {
            if (this.loaded) {
                var a = this.$el.width(), b = this.$el.height(), c = scaleImage(a, b, this._imgWidth, this._imgHeight);
                if (this.isCustom) {
                    var d = this.$img.position();
                    c.top = Math.max(-(c.height -
                        b), d.top);
                    c.left = Math.max(-(c.width - a), d.left)
                }
                this.$img.css(c)
            } else
                (a = this.$img.attr("src")) && this.setSrc(a, this.isCustom)
        }});
        Events.mixTo(d);
        d.prototype={checkBtnStatus: function() {
            var a = this.$listContainer.width(), a = (this.listWidth || 0) - a, b = this.$listContainer.scrollLeft();
            b == 0 ? this.$btnPrev.addClass("disable") : this.$btnPrev.removeClass("disable");
            b >= a ? this.$btnNext.addClass("disable") : this.$btnNext.removeClass("disable");
            return this
        },openGuide: function() {
            this.$guide = this.$el.find(".cover-guide").show().appendTo("body");
            return this
        },closeGuide: function() {
            this.$guide && this.$guide.hide()
        },open: function() {
            var a = this;
            if (!a.$el) {
                var b = $($("#_tpl_coverphoto_editor").html());
                a.$el = b;
                a.$listContainer = b.find(".list");
                a.$list = b.find("ul");
                $("body").append(b);
                a.$list.on("click", "li", function() {
                    a.selectedItem && a.selectedItem.removeClass("selected");
                    var b = $(this);
                    a.selectedItem = b.addClass("selected");
                    a.coverPhoto.setSrc(b.data("src"), true);
                    a.selectedId = b.data("id");
                    a.closeGuide();
                    a.$btnClose.attr("disabled", false).removeClass("btn-disable")
                });
                a.$btnNext = b.find(".next").click(function() {
                    var b = a.$listContainer.width(), b = a.listWidth - b, b = Math.min(a.$listContainer.scrollLeft() + a.$listContainer.width() - 152, b);
                    a.$listContainer.animate({scrollLeft: b}, {duration: 300,complete: function() {
                        a.checkBtnStatus()
                    }})
                });
                a.$btnPrev = b.find(".prev").click(function() {
                    a.$listContainer.width();
                    var b = Math.max(a.$listContainer.scrollLeft() - a.$listContainer.width() - 152, 0);
                    a.$listContainer.animate({scrollLeft: b}, {duration: 300,complete: function() {
                        a.checkBtnStatus()
                    }})
                });
                a.$btnClose = b.find(".btn").click(function() {
                    $.ajax({url: "/trips/" + _G_trip_id,type: "PUT",data: {"trip[front_cover_photo_id]": a.selectedId,"trip[customize]": a.getCustomPostion()}});
                    a.close()
                }).attr("disabled", true).addClass("btn-disable");
                a.height = a.$el.outerHeight();
                var c = $("#cover"), d = $("#cover-header"), b = $(".drag-handle", d), g = $("#cover-guide-line"), s, u, v, x, t, w, C;
                a.$header = d;
                a.$headerWrapper = c;
                a.$coverImg = $("#cover-img");
                b.mousedown(function(a) {
                    a.stopPropagation();
                    u = a;
                    x = c.width();
                    t = c.height();
                    w = d.outerWidth();
                    C = d.outerHeight();
                    s = d.position();
                    v = [x - w, t - C - 50];
                    g.css("visibility", "visible");
                    f.on("mousemove.cover", function(a) {
                        var b = a.pageX - u.pageX + s.left, a = a.pageY - u.pageY + s.top, b = m.ceil(m.min(m.max(b, 0), v[0])), a = m.ceil(m.min(m.max(a, 100), v[1]));
                        m.abs(a / WindowSize.height * 100 - 45) < 1 && (a = m.ceil(WindowSize.height * 0.45));
                        d.css({left: b,top: a,right: "auto",bottom: "auto"})
                    }).on("mouseup.cover", function() {
                            g.css("visibility", "hidden");
                            f.off("mousemove.cover mouseup.cover")
                        })
                })
            }
            a.$el.animate({top: 0}, {duration: 200,complete: function() {
                a.load();
                a.trigger("opened")
            }});
            var D, G, k;
            f.on("mousedown.coverimg", function(b) {
                u = b;
                D = a.$coverImg.position();
                G = a.$coverImg.width();
                k = a.$coverImg.height();
                f.on("mousemove.coverimg", function(b) {
                    var c = b.pageX - u.pageX + D.left, b = b.pageY - u.pageY + D.top, d = m.max(G - WindowSize.width, 0), f = m.max(k - WindowSize.height, 0), b = m.min(m.max(b, -f), 0), c = m.min(m.max(c, -d), 0);
                    a.$coverImg.css({top: b,left: c})
                }).on("mouseup.coverimg", function() {
                        f.off("mousemove.coverimg mouseup.coverimg")
                    })
            });
            return this
        },getPosition: function(a, b, c) {
            var d =
                a.outerWidth(), f = a.outerHeight(), g = b.outerWidth(), b = b.outerHeight(), a = a.position(), m = [], v = a.left / g * 100, x = a.top / b * 100;
            v > 50 && !c ? m.push("right:" + ((g - a.left - d) / g * 100).toFixed(1) + "%") : m.push("left:" + v.toFixed(1) + "%");
            x > 50 && !c ? m.push("bottom:" + ((b - a.top - f) / b * 100).toFixed(1) + "%") : m.push("top:" + x.toFixed(1) + "%");
            return m.join(";")
        },getCustomPostion: function() {
            return '{"cover-photo":"' + this.getPosition(this.$coverImg, this.$coverImg.parent(), true) + '", "cover-header":"' + this.getPosition(this.$header, this.$headerWrapper) +
                '"}'
        },close: function() {
            this.$el && this.$el.animate({top: -this.height}, {duration: 200});
            f.off("mousedown.coverimg");
            this.closeGuide();
            this.trigger("closed");
            return this
        },load: function() {
            var a = this;
            this.data || $.ajax({url: "/trips/" + _G_trip_id + "/photos.json",dataType: "json",type: "GET",success: function(b) {
                if (b) {
                    a.data = b;
                    a.updateList()
                }
            }});
            return this
        },updateList: function() {
            var a = this, b = "";
            $.each(this.data, function(c) {
                c = a.data[c];
                b = b + ("<li" + (c.current ? ' class="selected"' : "") + ' style="background:url(' + c.thumb +
                    ') no-repeat 0 -30px;" data-src="' + c.display + '" data-id="' + c.id + '"><i></i></li>')
            });
            a.$list.html(b);
            var c = this.data.length * 156;
            a.$list.width(c);
            a.listWidth = c;
            a.checkBtnStatus();
            a.selectedItem = a.$list.find(".selected");
            a.selectedItem.length && a.$btnClose.attr("disabled", false).removeClass("btn-disable");
            return this
        }};
        d.constructor=d;
        /*b.CoverPhoto = c;
        b.CoverPhotoEditor = d*/
    })(window, document, MarryShow.View);
    module.exports=MarryShow;
});
