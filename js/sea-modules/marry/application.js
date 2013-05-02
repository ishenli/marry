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
        Base = require('arale/base/1.0.1/base'),
        Widget = require('arale/widget/1.0.2/widget'),
        Tem=require('arale/widget/1.0.2/templatable');

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
            $("#viewer").height(height).find(".node-list li,.viewArrow").height(height);
            $("#slide").height(height);
            $(".cover-content").height(height-200);
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
        Implements: Tem,
        events:{
          "change #addList":"drag"
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
        }

    });
    App.Comment=Base.extend({
        get:function(id,element){
            util.FlyJSONP.get({
                url:'http://marrymemo.com:3000/montages/'+id+'/discussions.json',
                success:function(result){
                var data=result.discussions;
                    var htmlTep='<li class="big-avatar"> <img src="{pic}" class="fn-left"> <div class="comments-text"> <h3>{name}</h3> <p>{content}</p> <span class="date">{date}</span> </div> </li>';
                    var output='';
                    for(var i in data){
                       output+=htmlTep.replace("{pic}",'http://marrymemo.com:3000/'+data[i].user.avatar).replace("{name}",data[i].user.nick).replace("{content}",data[i].content)
                           .replace("{date}",data[i].created_at.substring(0,10));
                   }
                    $(element).append(output);
                }
            });
        },
        post:function(id,userid,input,callback){
            util.FlyJSONP.post({
            url: 'http://marrymemo.com:3000/montages/'+id+'/discussions.json',
            parameters: {
                "discussion": {
                    "content" :$(input).val(),
                    "user_id" :userid
                }
            },
            error:function(){
                alert("error");
            },
            success: function(data) {
                alert(data);
            }
            })
        }
    });
    App.montage=Base.extend({
        get:function(id,element,type){
            util.FlyJSONP.get({
                url:'http://marrymemo.com:3000/montages.json',
                success:function(result){
                    var data=result.montages;
                    var htmlTep='<article class="outer"> <div class="user-grid-item"> <img src="{pic}" alt="xxx"/> <h1>{title}</h1> <p>{p}</p> </div> </article>';
                    var output='';
                    for(var i in data){
                        output+=htmlTep.replace("{pic}",'http://marrymemo.com:3000/'+data[i].image_path).replace("{title}",data[i].title).replace("{content}",data[i].content)
                    }
                    console.log(output);
                    $(element).append(output);
                }
            });
        }
    })
    module.exports = App;
});

