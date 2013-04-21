/**
 * Created with JetBrains WebStorm.
 * User: SH201
 * Date: 13-4-17
 * Time: 下午12:49
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module) {
    var $=require("marry/extendJq"),
        util=require("marry/util"),
        Widget = require('arale/widget/1.0.3/widget');

    (function(window){
        function adjustFootPos(){
            if($("#container").height()<(WindowSize.height-150)){
                $("#foot").css({
                    "position":"absolute",
                    "left":0,
                    "bottom":0
                });
            }}
        function adjustViewer(){
            var height=WindowSize.height-140;
            $("#viewer").height(height).find(".noteList li,.viewArrow").height(height);
            $("#slide").height(height);
            $("#viewer-wrapper").height(WindowSize.height-140);
        }
        WindowResizeListener.add(adjustFootPos);
        WindowResizeListener.add(adjustViewer);
        window.adjustFootPos=adjustFootPos;
        adjustFootPos();
        adjustViewer();
    }(window))

    var App={};
     App.Note=Widget.extend({
         events: {
             'click .close': 'remove'
         },
         /*initialize:function(){
           this.drag();
       },*/
       drag:function(){
           $("#addList").dragsort({
               dragSelector: "article", dragBetween: true, dragEnd:this.afterDrag(),
               placeHolderTemplate: "<article class='placeHolder'>放于该位置</article>"
           });
       },
       afterDrag:function(number){
           /*var number=1;
           $("#addList article").each(function(){
               $(this).find(".number").text(number);
               number++;
           });*/
       },
       remove:function(event){
           event.preventDefault();
           $(event.target).parent().remove();
           adjustFootPos();
       }
    });

    module.exports = App;
});

