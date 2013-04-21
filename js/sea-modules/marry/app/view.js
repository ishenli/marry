define(function(require, exports, module) {
    var $=require("marry/extendJq"),
        Base=require("arale/base/1.0.1/base"),
        Events = require("arale/events/1.0.0/events");

    var View={},$doc=$(document);

        View.Note=Base.extend({
            initialize:function(el){
                this.$el=$(el);
            },
            canEdit:function(){
                var a = this, b = this.$el;
                a._canEdit = true;
                b.find(".btn-drag").on("mousedown", function(e) { //b为e的event
                    e.type = "note:drag";
                    $doc.trigger(e, [a]);
                    e.stopPropagation()
                });
            }

        });

    module.exports = View;
});

