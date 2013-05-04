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
        var $li,img;
        function adjustFootPos(){
            if($("#container").height()<(WindowSize.height-150)){
                $("#foot").addClass("atFoot");
            }else{
                $("#foot").removeClass("atFoot");
            }}
        function adjustViewer(){
            var height=WindowSize.height-140;
            $li=$("#slideBody li");
            $("#viewer").height(height).find(".viewArrow").height(height);
            $("#viewer-wrapper").height(WindowSize.height-140);
            $("#slide").height(height);
            $(".img-wrap").each(function(){
                $(this).height(height-20);
            })
            $(".cover-content").height(height-200);
            for(var i=0;i<$li.length;i++){
               img= $(".fancybox").eq(i).find("img");
               img.parent().parent().width(img.width());
               $frame.reload();
            }
        }
        WindowResizeListener.add(adjustFootPos);
        WindowResizeListener.add(adjustViewer);
        window.adjustFootPos=adjustFootPos;
        adjustViewer();
    }(window))

    var App={};
    App.Note=Widget.extend({
        Implements: Tem,
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
        get:function(id,element,type,callback){
            var args=util.slice(arguments);
            switch (type){
                case "index": //index
                util.FlyJSONP.get({
                    url:'http://marrymemo.com:3000/montages.json',
                    success:function(result){
                        var data=result.montages;
                        /*var htmlTep='<article class="outer"> <div class="user-grid-item"> <img src="{pic}" alt="xxx"/> <h1>{title}</h1>'
                            +'<div class="btns"> <span class="trash"><a href="javasript:;">删除</a></span> <div class="fc"> <div class="ui-counter counter"> <span id="commentBack" class="comments">{comments}</span> <span class="fav">{favs}</span> </div> </div> </div> <div class="view-btn"> <a href="montage-show.html#{id}">查看画卷</a> </div>'+
                            '</div> </article>'; */
                        var htmlTep='<article class="outer"> <div class="user-grid-item"> <img src="{pic}" alt="xxx"/> <h1>{title}</h1>'
                            +'<div class="btns"><div class="fc"> <div class="ui-counter counter"> <span id="commentBack" class="comments">{comments}</span> <span class="fav">{favs}</span> </div> </div> </div> <div class="view-btn"> <a href="montage-show.html#{id}">查看画卷</a> </div>'+
                            '</div> </article>';
                        console.log(data.length);
                        console.log($("#montagePage").val());
                        var output='',page=parseInt($("#montagePage").val()),len=(page+6)<=data.length?page+6:data.length;
                        console.log(len);
                        for(var i=page;i<len;i++){
                            output+=htmlTep.replace("{pic}",'http://marrymemo.com:3000/'+data[i].image_path).replace("{id}",data[i].id).replace("{title}",data[i].title).replace("{content}",data[i].content).replace("{comments}", data[i].collection_count).replace("{favs}", data[i].share_count);
                        }
                        $(element).append(output);
                        $("#montagePage").val(len);
                        len<data.length?$("#loadmore").removeClass("gray").addClass("ui-btn-green"):$("#loadmore").removeClass("ui-btn-green").addClass("gray").find("span").text("没有更多");
                        if(callback!=="")callback();
                    }
                });
                break;
            case "show"://get
                util.FlyJSONP.get({
                    url:'http://marrymemo.com:3000/montages/'+id+'.json',
                    success:function(result){
                        var data=result,output="",$ul;
                        $("#introduction").text(data.introduction);
                        var htmlTem='<li><div class="img-wrap"><a class="fancybox" rel="gallery1" href="http://marrymemo.com:3000/{pic}"></a></div></li>';
                        for(var i=0;i<data.photos.length;i++){
                            output+=htmlTem.replace('{pic}',data.photos[i].path);
                        }
                        $(element).after(output);
                        for(var j=0;j<data.photos.length;j++){
                            var img=new Image();
                            img.src="http://marrymemo.com:3000/"+data.photos[j].path;
                            img.index=j;
                            img.onload=function(){
                                $(".fancybox").eq(this.index+1).append($(this));
                                $(".fancybox").eq(this.index+1).parent().width($(this).width());
//                                $ul= $(".fancybox").parent().parent().parent();
//                                $ul.css({width:$ul.width()+$(this).width()});
                                $frame.reload();
                            }
                        }
                        $(".img-wrap").each(function(){
                            $(".img-wrap").height(WindowSize.height-160);
                        });
                        $("#montageTitle").text(data.title);
                        $("#commentBack").text(data.discussion_count);
                        $("#favBtn").text(data.collection_count);
                        $("#sAvatar").attr("src",data.user.avatar);

                    }
                });
                break;
            case "include":
                util.FlyJSONP.get({
                    url:'http://marrymemo.com:3000/montages.json',
                    success:function(result){
                        var data=result.montages,output="";
                        var htmlTem='<li class="ui-pic-item"> <header> <h1>{title}</h1></header> <img src="{pic}" alt="xxx"/> <a class="read" href="montage-show.html#{id}"></a> </li>';
                        for(var i=0;i<9;i++){
                            output+=htmlTem.replace('{pic}',"http://marrymemo.com:3000/"+data[i].image_path).replace("{title}",data[i].title)
                                .replace("{id}",data[i].id);
                        };
                        console.log(output)
                        $(element).append(output);
                    }
                });
                break;
            case "recommend":
                    util.FlyJSONP.get({
                        url:'http://marrymemo.com:3000/montages.json',
                        success:function(result){
                            var data=result.montages;
                            var htmlTep='<article class="marry-list-item ui-shadow"> <div class="cover"> <a class="read" href="montage-show.html#{id}" target="_blank"> <header> <h1>{title}</h1> <span>{date}</span> </header> <img src="{pic}" alt="xxx"/> </a> </div> <footer class="footer"> <div class="counter"> <span class="comments"> <i class="ico"></i> <span>{comments}</span> </span> <span class="fav"> <i class="ico"></i> <span>{fav}</span> </span> <span class="share"> <i class="ico"></i> <span>{share}</span> </span> </div> <div class="user avatar"> <a href="user-index.html#{uid}"> <img src="{avatar}"> </a> <a href="user-index.html#{id}">{name}</a> </div> </footer> </article>';
                            var output='',page=parseInt($("#montagePage").val()),len=(page+18)<=data.length?page+18:data.length;
                            for(var i=0;i<data.length;i++){
                                output+=htmlTep.replace("{pic}",'http://marrymemo.com:3000/'+data[i].image_path).replace("{id}",data[i].id).replace("{title}",data[i].title).replace("{uid}",data[i].user.id).replace("{comments}", data[i].collection_count).replace("{share}", data[i].share_count)
                                    .replace("{fav}","none").replace("{avatar}",data[i].user.avatar).replace("{name}",data[i].user.nick);
                            }
                            $(element).append(output);
                        }
                    });
                break;
            default:
                return null;
        }}
    });

    App.template=Base.extend({
        loadHeader:function(id){ // the id is the element which should be added a active class
            $("#topBar").load("head.html",function(){
                $(this).addClass("bottom-shadow");
                $(id).addClass("active");
            });
        },
        loadFoot:function(){
            $("#foot").load("foot.html",function(){
            });
        }
    })
    module.exports = App;
});

