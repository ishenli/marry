/**
 * Created with JetBrains WebStorm.
 * User: shenli
 * Date: 13-4-17
 * Time: 下午12:49
 */

define(function(require, exports, module) {
    var $=require("marry/extendJq"),
        util=require("marry/util"),
        Base = require('base'),
        Handlebars=require("handlebars");

    var HOST = "http://" + window.location.host + "/";

    (function(window){
        var $li,img;
        function adjustFootPos(){
            var oHeight= $("#container").offset().top+$("#container").height();
            if(oHeight+70<WindowSize.height){
                $("#foot").addClass("atFoot");
            }else{
                $("#foot").removeClass("atFoot");
            }
            if(oHeight+330<WindowSize.height){
                $("#userFoot").addClass("atFootTop");
            }else{
                $("#userFoot").removeClass("atFootTop");
            }
        }
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
    }(window));

    Handlebars.registerHelper("formatImgPath", function(imgPath) {
        imgPath = imgPath.toString();
        return HOST+imgPath;
    });
    Handlebars.registerHelper("formatAvatarPath", function(avatarPath) {
        return (avatarPath.indexOf("http") == 0 ? avatarPath : HOST +avatarPath);
    });
    var App={};
    App.Note=Base.extend({
        drag:function(){
            if( typeof window.dragFlag==="undefined"){
                $("#1stPanel").dragsort({
                    dragSelector: "#1stPanel article", dragBetween: true, dragEnd:this.afterDrag(),
                    placeHolderTemplate: "<article class='placeHolder'>放于该位置</article>"
                });
                window.dragFlag=true;
            }
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
            get:function(option){
                $.get({
                    url:HOST + 'montages/'+option.id+'/discussions.json',
                    success:function(result){
                        var data=result.discussions;
                        var htmlTep='<li class="big-avatar"> <img src="{pic}" class="fn-left"> <div class="comments-text"> <h3>{name}</h3> <p>{content}</p> <span class="date">{date}</span> </div> </li>';
                        var output='';
                        for(var i in data){
                            output+=htmlTep.replace("{pic}",data[i].user.avatar.indexOf("http") == 0 ? data[i].user.avatar : HOST + data[i].user.avatar).replace("{name}",data[i].user.nick).replace("{content}",data[i].content)
                                .replace("{date}",data[i].created_at.substring(0,10));
                        }
                        $(option.element).html(output);
                    }
                });
            },
            post:function(option){
                $.post(HOST + 'montages/'+option.id+'/discussions.json',option.data, function(data) {
                    console.log(data);
                    option.callback();
                });
        }
    });
    App.montage=Base.extend({
        get:function(options){
        var self=this;
        var option=$.extend({},options);
        switch (option.type){
            case "index": //index
                $.ajax({
                    url:HOST + 'montages.json',
                    type:"get",
                    data:option.param,
                    success:function(result){
                        var data=result.montages,templateData={montages:[]};
                        var page=0,len=(page+option.pageItems)<=data.length?page+option.pageItems:data.length;

                        for(var i=0;i<len;i++){
                            templateData.montages.push(data[i]);
                        }
                        var template = Handlebars.compile($("#montages-template").html());
                        $(option.element).html(template(templateData));

                        page=len;
                        len<data.length?$("#loadmore").removeClass("gray").addClass("ui-btn-green"):$("#loadmore").removeClass("ui-btn-green").addClass("gray").find("span").text("没有更多");
                        option.callback();
                        if(option.callback!==""){
                            setTimeout(function(){
                                option.callback();
                            },2000)
                        }
                        $("#loadmore").on("click",function(){
                            var len=(page+option.pageItems)<=data.length?page+option.pageItems:data.length;
                            for(var i=page;i<len;i++){
                                templateData.montages.push(data[i]);
                            }
                            var template = Handlebars.compile($("#montages-template").html());
                            $(option.element).html(template(templateData));
                            page=len;
                            len<data.length?$(this).removeClass("gray").addClass("ui-btn-green"):$(this).removeClass("ui-btn-green").addClass("gray").find("span").text("没有更多");
                        });
                    }
                });
                break;
            case "show":
                $.ajax({
                    url:HOST + 'montages/'+option.id+'.json',
                    type:"get",
                    data:option.param,
                    success:function(result){
                        var data=result,output="",height=WindowSize.height-160;
                        $("#introduction").text(data.introduction);
                        var htmlTem='<li><div class="img-wrap"><a class="fancybox" rel="gallery1" href="'+HOST+'{pic}" data-width="{width}" data-height="{height}" style="height:{adjustHeight}px;width:{adjustWidth}px;"></a><div class="hover-panel"> <div class="share-btn"></div> <div class="description">{des}</div> <div class="btns a-fadeinL"> <a class="sina" href="javascript:;"><span>sina</span></a> <a class="qq" href="javascript:;"><span>qq</span></a> <a class="tt" href="javascript:;"><span>tt</span></a> </div> </div></div></li>';
                        for(var i=0;i<data.photos.length;i++){
                            output+=htmlTem.replace('{pic}',data.photos[i].path).replace("{des}",data.photos[i].title)
                                .replace("{width}",data.photos[i].width).replace("{height}",data.photos[i].height)
                                .replace("{adjustWidth}",height*data.photos[i].width/data.photos[i].height)
                                .replace("{adjustHeight}",height);
                        }
                        $(option.element).after(output);
                        $(".description").each(function(){
                            if($(this).text()===""||$(this).text()==undefined){
                                $(this).addClass("fn-hide");
                            }
                        })
                        $frame.reload();
                        var isLoad=false;
                        for(var j=0;j<data.photos.length;j++){
                            var img=new Image();
                            img.src=HOST+data.photos[j].path;
                            img.index=j;
                            img.onload=function(){
                                var item= $(".fancybox").eq(this.index);
                                if(!isLoad){
                                    $("#wrap").show("fast");
                                    $("body").addClass("photo-show");
                                    $("#loadPanel").hide();
                                }
                                item.append($(this));
                                item.parent().width($(this).width());
                                item.removeAttr("style").css({"background":"#fff","display":"inline"});

                                console.log("the image is loaded");

                                isLoad=true;
                                $frame.reload();
                            };
                        }
                        $(".img-wrap").each(function(){
                            $(".img-wrap").height(WindowSize.height-160);
                        });
                        $("#montageTitle").text(data.title);
                        $("#commentBack").text(data.discussion_count);
                        $("#favBtn").text(data.collect_count);
                        $("#sAvatar").attr("src",data.user.avatar.indexOf("http") == 0 ? data.user.avatar : HOST + data.user.avatar);
                        $("#username").text(data.user.nick);
                        $("#montageEnding").text(data.ending);
                        if(!!data.collected){
                            $("#favBtn").addClass("faved");
                            option.tip.set("content","已收藏");
                        }else{
                            $("#favBtn").on("click",function(){
                                self.collect({
                                    data:{
                                        montage_id:option.id,
                                        user_id:24,
                                        japan:"nihong"
                                    },
                                    success:function(){
                                        $("#favBtn").addClass("faved").text(++data.collect_count);
                                        option.tip.set("content","已收藏");
                                        $("#favBtn").off("click");
                                    }
                                });
                            });
                        }

                    }
                });
                break;
            case "include":
                $.ajax({
                    url:HOST + 'montages.json',
                    type:"get",
                    data:option.data,
                    success:function(result){
                        var data=result.montages,templateData={montages:[]};
                        for(var i=0;i<option.data.pageNumber;i++){
                            templateData.montages.push(data[i]);
                        }
                        var template = Handlebars.compile($("#montage-template").html());
                        $(option.element).html(template(templateData));
                        var height,oWidth,oHeight;
                        for(var j=0;j<option.data.pageNumber;j++){
                            var img=new Image();
                            img.src=HOST+data[j].image_path,
                            img.index=j;
                            img.onload=function(){
                                var item= $(".ui-pic-item header").eq(this.index);
                                oWidth=this.width;
                                oHeight=this.height;
                                height=oHeight/ oWidth*300<200?200:oHeight/ oWidth*300;
                                item.after($(this));
                                $(this).css({"height":height});
                                $(this).css({"marginTop":-height/2,"top":92});
                            };
                        }
                        adjustFootPos();
                    }
                });
                break;
            case "recommend":
                $.ajax({
                    url:HOST+"montages.json?per_page="+option.itemNumber,
                    type:"get",
                    data:option.data,
                    success:function(result){
                        var data=result.montages,templateData={montages:[]};
                        var len=(data.length<option.itemNumber?data.length:option.itemNumber);
                        for(var i=0;i<len;i++)
                        {
                            templateData.montages.push(data[i]);
                        }
                        var template = Handlebars.compile($("#montage-template").html());
                        $(option.element).html(template(templateData));

//                        $('<a href="javascript:;" data-page="'+option.data.page+'" class="ui-paging-item ui-paging-current">'+option.data.page+'</a>').insertBefore("#ellipsis");
                        /*if(len<option.itemNumber){
                            $("#ellipsis").remove();
                            $("#next").remove();
                        }else{
                            $("#next").text(">").removeClass("ui-paging-current");
                        }*/
                        console.log("the total count is "+parseInt(result.total_pages)*option.itemNumber);
                        $("#pagination").pagination(parseInt(result.total_pages)*option.itemNumber, {
                            items_per_page:9,
                            prev_text:"<",
                            next_text:">",
                            current_page:0,
                            num_edge_entries:0,
                            num_display_entries:10,
                            link_to:'javascript:;',
                            callback:function(page_index){
                                console.log("the page_index is"+page_index);
                                var items_per_page = this.items_per_page,output="";
                                var max_elem = Math.min((page_index+1) * items_per_page, data.length);
                                self.get({
                                    element:"#montageList",
                                    type:"recommendPage",
                                    itemNumber:9,
                                    data:{
                                        page:parseInt(page_index)+1
                                    }
                                });
                            }
                        });

                        if($.isFunction(option.callback)){
                            option.callback();
                        }
                        $(".marry-list-item img").on("load",function(){
                            adjustFootPos();
                        });
                    }
                });

                break;
            case "recommendPage":
                $.ajax({
                    url:HOST+"montages.json?per_page="+option.itemNumber,
                    type:"get",
                    data:option.data,
                    success:function(result){
                        console.log("the recommendPage is doing");
                        var data=result.montages,templateData={montages:[]};
                        var len=(data.length<option.itemNumber?data.length:option.itemNumber);
                        for(var i=0;i<len;i++)
                        {
                            templateData.montages.push(data[i]);
                        }
                        var template = Handlebars.compile($("#montage-template").html());
                        $(option.element).html(template(templateData));

//                        $("#pages a").removeClass("ui-paging-current");

                        var height,oWidth,oHeight;
                        for(var j=0;j<data.length;j++){
                            var img=new Image();
                            img.src=HOST+data[j].image_path,
                            img.index=j;
                            img.onload=function(){
                                var item= $(".marry-list-item header").eq(this.index);
                                item.after($(this));
                                oWidth=this.width;
                                oHeight=this.height;
                                height=oHeight/ oWidth*300<200?200:oHeight/ oWidth*300;
                                item.after($(this));
                                $(this).css({"height":height});
                                $(this).css({"marginTop":-height/2,"top":92});
                            };
                        }

                        /*if(len===option.itemNumber){
                            $("#montagePage").val(parseInt(option.page)+1);
                        }*/

                        if($.isFunction(option.callback)){
                            option.callback();
                        }
                        adjustFootPos();
                    }
                });
                break;
            case "favRecommend":
                $.ajax({
                    url:HOST + 'montages.json',
                    type:"get",
                    success:function(result){
                        var data=result.montages,templateData={montages:[]};
                        for(var i=0;i<option.pageItems;i++){
                            templateData.montages.push(data[i]);
                        }
                        var template = Handlebars.compile($("#mRecommend").html());
                        $(option.element).html(template(templateData));
                        return false;
                    }
                });
                break;
            default:
                return null;
        }
    },
        collect:function(option){
            $.ajax({
                url:HOST+"collect.json",
                type:"post",
                data:option.data,
                success:function(data){
                    if(data.result=="ok"){
                       option.success();
                    }else{
                        alert("收藏失败");
                    }
                },
                error:function(){

                }
            })
        },
        delete:function(option){
            $.ajax({
                url:HOST+"montages.json",
                type:"delete",
                data:option.data,
                success:function(){
                    option.success();
                },
                error:function(){

                }
            })
        }

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
                $(this).addClass("ui-footer");
                adjustFootPos();
            });
        }
    });
    App.Invitation=Base.extend({
        getTemplate:function(option){
            $.ajax({
                url:HOST + 'themes.json',
                type:"get",
                success:function(data){
                    window.temData=data;
                    var html="",template='<li data-id={id}><a href="javascript:void(0)"> <img src="{pic}" alt="{name}"/> </a></li>';
                    var len=data.length;
                    for(var i=0;i<len;i++){
                        html+=template.replace("{pic}",HOST+data[i].thumb_path).replace("{name}",data[i].name)
                            .replace("{id}",data[i].id);
                    }
                    $(option.element).html(html);
                    $('#scrollbar1').tinyscrollbar();
                }
            })
        }
    })
module.exports = App;
});

