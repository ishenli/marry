/**
 * Created with JetBrains WebStorm.
 * Date: 13-4-19
 * Time: 下午4:33
 * 添加常用的函数
 */
var HOST = "http://" + window.location.host + "/";
var SALT = "*#0621ix51y6679&";
/**
 * 微博登陆
 *
 * @param window
 * @param $
 */

(function (w, $) {
    $("#weibo_content_btn").on("click",
        function() {
            // if (!WB2.checkLogin()) {
            WB2.login(function() {
                WB2.anyWhere(function(W) {
                    weibologin(W);
                });
            });
            // } else {
            // weibologin(W);
            // }
            //
        });
    function weibologin(W) {
		W.parseCMD("/account/get_uid.json", function(sResult, bStatus) {
            if (typeof (sResult.error) ==="undefined") {
				var uid = sResult.uid;
				W.parseCMD("/users/show.json", function(sResult, bStatus) {
					var user_id = "1-" + sResult.id;
					var nick = sResult.name;
					var avatar = sResult.profile_image_url;
					var bind_type = "1";
					var info = JSON.stringify(sResult);
					var code = hex_md5(user_id + SALT).toUpperCase();
                    console.log("the weibo is "+sResult);
					$.post(HOST + "users.json", {
						"user[user_id]" : user_id,
						"user[avatar]" : avatar,
						"user[nick]" : nick,
						"user[info]" : info,
						"user[bind_type]" : bind_type,
						"code" : code
					}, function(data) {
						// 这里处理登录成功后的事情，保存到localstorage，显示用户名等等的
						data.id;
						localStorage["token"] = data.token;
						localStorage["secret"] = hex_md5(data.token + SALT);
						$.get(HOST + "users/" + data.id + ".json", {
							token : localStorage["token"],
							secret : localStorage["secret"]
						}, function(user) {
							localStorage["user"] = JSON.stringify(user);
							showUser();
						});
					});
				}, {
					uid : uid
				}, {
					method : "get"
				});
			} else {
				alert(JSON.stringify(sResult));
			}
		}, {}, {
			method : 'get'
		});
	};
	
	//分享画卷到新浪微博
	$(".ui-share-btn-list>.sina").click(function(){
		var url = "http://service.weibo.com/share/share.php?appkey=2726144177" +
		"&title=" + 
		encodeURIComponent("分享#婚礼纪# 『" + $("#montageTitle").text() + "』") + 
		"&pic=" + 
		HOST + $("#montageEnding").text() +
		"&ralateUid=3215211301";
		window.open(url, "_blank", "height=450, width=600, location=no, status=no");
		return false;
	});
	
	//分享画卷单张到新浪微博
	$("#slideBody").on("click", ".btns>.sina", function(){
		var url = "http://service.weibo.com/share/share.php?appkey=2726144177" +
		"&title=" + 
		encodeURIComponent("分享#婚礼纪# 『" + $("#montageTitle").text() + "』") + 
		"&pic=" + 
		$(this).parents(".img-wrap").find(".fancybox").attr("href") +
		"&ralateUid=3215211301";
		window.open(url, "_blank", "height=450, width=600, location=no, status=no");
		return false;
	});
	
	$(".ui-share-btn-list>.qzone").click(function(){
		var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
		encodeURIComponent(window.location) +
		"&desc=" + 
		encodeURIComponent("分享#婚礼纪# 『" + $("#montageTitle").text() + "』") + 
		"&summary=%20" +
		"&pics=" + 
		HOST + $("#montageEnding").text() + 
		"&site=" + window.location.host;
		window.open(url, "_blank", "height=450, width=600, location=no, status=no");
		return false;
	});

	$("#slideBody").on("click", ".btns>.qq", function(){
		var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
		encodeURIComponent(window.location) +
		"&desc=" + 
		encodeURIComponent("分享#婚礼纪# 『" + $("#montageTitle").text() + "』") + 
		"&summary=%20" +
		"&pics=" + 
		$(this).parents(".img-wrap").find(".fancybox").attr("href") + 
		"&site=marrymemo.com";
		window.open(url, "_blank", "height=450, width=600, location=no, status=no");
		return false;
	});
	
	$(".ui-share-btn-list>.tt").click(function(){
		var url = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" +
		encodeURIComponent(window.location) +
		"&title=" + 
		encodeURIComponent("分享#婚礼纪# 『" + $("#montageTitle").text() + "』 (来自@marry_memo)") + 
		"&pic=" + 
		HOST + $("#montageEnding").text();
		window.open(url, "_blank", "height=450, width=600, location=no, status=no");
		return false;
	});

	$("#slideBody").on("click", ".btns>.tt", function(){
		var url = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" +
		encodeURIComponent(window.location) +
		"&title=" + 
		encodeURIComponent("分享#婚礼纪# 『" + $("#montageTitle").text() + "』 (来自@marry_memo)") + 
		"&pic=" + 
		$(this).parents(".img-wrap").find(".fancybox").attr("href");
		window.open(url, "_blank", "height=450, width=600, location=no, status=no");
		return false;
	});
	
	var showUser = function() {
		if (typeof(localStorage["user"]) != "undefined") {
			var user = JSON.parse(localStorage["user"]);
			$(".avatar>img").attr("src", user.avatar);
			$(".user-panel").show();
			$(".ui-login-btn").hide();
		} else {
			$(".user-panel").hide();
			$(".ui-login-btn").show();
		}
	};

	if(localStorage["user"]) {
		showUser();
	}

	$(".logout>a").click(function(){
		localStorage.clear();
		showUser();
		return false;
	});

	/**
	 * qq登陆
	 *
	 * @param window
	 * @param $
	 */
	$("#qq_content_btn").click(function() {
		var win = QC.Login.showPopup({
			appId : "100416913",
			redirectURI: "http://www.marrymemo.com/marry/qc_back.html"
		});
		var interval;
		$.extend({
		checkQQLogin : function(){
			console.log("check");
			if (win.closed || QC.Login.check()) {
				console.log("login success");
				QC.api("get_user_info", {}).success(function(s){
					var sResult = s.data;
					var user_id = "3-" + sResult.figureurl_2.replace(/http:\/\/qzapp.qlogo.cn\/qzapp\/[^\/]+\/([^\/]+)\/100/g, "$1");;
					var nick = sResult.nickname;
					var avatar = sResult.figureurl_2 ;
					var bind_type = "3";
					var info = JSON.stringify(sResult);
					var code = hex_md5(user_id + SALT).toUpperCase();

					$.post(HOST + "users.json", {
						"user[user_id]" : user_id,
						"user[avatar]" : avatar,
						"user[nick]" : nick,
						"user[info]" : info,
						"user[bind_type]" : bind_type,
						"code" : code
					}, function(data) {
						// 这里处理登录成功后的事情，保存到localstorage，显示用户名等等的
						data.id;
						localStorage["token"] = data.token;
						localStorage["secret"] = hex_md5(data.token + SALT);
						$.get(HOST + "users/" + data.id + ".json", {
							token : localStorage["token"],
							secret : localStorage["secret"]
						}, function(user) {
							localStorage["user"] = JSON.stringify(user);
							showUser();
						});
					});
				});
				clearInterval(interval);
//			} else {
				// console.log(win);
			}
		}
		});
		interval = setInterval("$.checkQQLogin()", 500);
	});
	
})(window, jQuery);
/**
 * img uploader
 * @param window
 * @param $
 */

(function($,w){
    function updateNumber(){
        $("#imgNum").html($("#1stPanel article").size()-1);
    }
    function updateNextState(){
        if($("#1stPanel article").size()>1){
            $("#index1").removeClass("gray").addClass("ui-btn-green").attr("data-next","true");
        }else{
            $("#index1").removeClass("ui-btn-green").addClass("gray").attr("data-next","false");

        }
    }
    seajs.use(['marry/application'], function(App) {
        window.notes=new App.Note();
    });
    var ImgUpload = {
        fileInput: null,				//html file控件
        dragDrop: null,					//拖拽敏感区域
        upButton: null,					//提交按钮
        url: "",						//ajax地址
        fileFilter: [],					//过滤后的文件数组
        filter: function(files) {
            var arrFiles = [];
            for (var i = 0, file; file = files[i]; i++) {
                if (file.type.indexOf("image") == 0 || (!file.type && /\.(?:jpg|png|gif)$/.test(file.name) /* for IE10 */)) {
                    if (file.size < 5120) {
                        alert('您这张"'+ file.name +'"图片大小过小，应大于5k');
                    } else {
                        arrFiles.push(file);
                    }
                } else {
                    alert('文件"' + file.name + '"不是图片。');
                }
            }
            return arrFiles;
        },
        onSelect: function(files) {
            var html = '', i = 0, j,self=this;
            var funAppendImage = function() {
                file = files[i];
                if (file) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        i=parseInt($("#fileIndex").val());
                        j=i+1;
                        $("#uploadList_"+i).removeClass("fn-hide").find("img").attr("src",e.target.result);
                        html = html + '<article id="uploadList_'+ j +'" class="note add-list-item fn-hide">'+
                            '<div class="close" title="删除" data-index="'+j+'">X</div>'+
                            '<div class="cover"><img id="uploadImage_' +j+'" src=""/>'+
//                            '<span id="uploadProgress_' + i + '" class="upload_progress"></span>' +
                            '<input type="file" name="image_file'+j+'" id="file'+j+'"/></div>'+
                            '<input type="text" class="description"/>'+
                            '</article>';

                        i++;
                        funAppendImage();
                        $("#fileIndex").val(j);
                    }
                    reader.readAsDataURL(file);
                } else {
                    $("#1stPanel").append(html);
                    document.getElementById("file"+i).addEventListener("change", function(e) { self.funGetFiles(e); }, false);
                    updateNumber();
                    updateNextState();
                    notes.drag();
                    if (html) {
                        //删除方法
                        $("#1stPanel .close").click(function() {
                            $(this).parent().remove();
                            updateNumber();
                            updateNextState();
                            return false;
                        });

                        adjustFootPos();
                    }
                }
            };
            funAppendImage();
        },
        //获取选择文件，file控件或拖放
        funGetFiles: function(e) {
            // 获取文件列表对象
            var files = e.target.files || e.dataTransfer.files;
            //继续添加文件
//            this.fileFilter = this.fileFilter.concat(this.filter(files));
            this.fileFilter=this.filter(files);
            this.funDealFiles();
            return this;
        },

        //选中文件的处理与回调
        funDealFiles: function() {
            for (var i = 0, file; file = this.fileFilter[i]; i++) {
                //增加唯一索引值
                file.index = i;
            }
            //执行选择回调
            this.onSelect(this.fileFilter);
            return this;
        },


        init: function() {
            var self = this;

            //文件选择控件选择
            if (this.fileInput) {
                this.fileInput.addEventListener("change", function(e) { self.funGetFiles(e); }, false);
            }
            //上传按钮提交
            if (this.upButton) {
                this.upButton.addEventListener("click", function(e) { self.funUploadFile(e); }, false);
            }
        }
    };
    w.ImgUpload=ImgUpload;
}($,window));

(function($,w){
    function updateNextState(){
        if($("#2ndPanel article").size()>1){
            $("#2to3").removeClass("gray").addClass("ui-btn-green").attr("data-next","true");
        }else{
            $("#2to3").removeClass("ui-btn-green").addClass("gray").attr("data-next","false");
        }
    }
    function updateNumber(){
        $("#photoNum").html($("#2ndPanel article").size()-1);
    }
    var photoUpload = {
        fileInput: null,				//html file控件
        dragDrop: null,					//拖拽敏感区域
        upButton: null,					//提交按钮
        fileFilter: [],					//过滤后的文件数组
        filter: function(files) {
            var arrFiles = [];
            for (var i = 0, file; file = files[i]; i++) {
                if (file.type.indexOf("image") == 0 || (!file.type && /\.(?:jpg|png|gif)$/.test(file.name) /* for IE10 */)) {
                    if (file.size < 5120) {
                        alert('您这张"'+ file.name +'"图片大小过小，应大于5k');
                    } else {
                        arrFiles.push(file);
                    }
                } else {
                    alert('文件"' + file.name + '"不是图片。');
                }
            }
            return arrFiles;
        },
        onSelect: function(files) {
            var html = '', i = 0, j,self=this;
            var funAppendImage = function() {
                file = files[i];
                if (file) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        i=parseInt($("#fileIndex").val());
                        j=i+1;
                        $("#uploadList_"+i).removeClass("fn-hide").find("img").attr("src",e.target.result);
                        html = html + '<article id="uploadList_'+ j +'" class="note add-list-item fn-hide">'+
                            '<div class="close" title="删除">X</div>'+
                            '<div class="cover"><img id="uploadImage_' +j+'" src=""/>'+
                            '<input type="file" name="image_file'+j+'" id="file'+j+'"/></div>'+
                            '</article>';

                        i++;
                        funAppendImage();
                        $("#fileIndex").val(j);
                    }
                    reader.readAsDataURL(file);
                } else {
                    $("#2ndPanel").append(html);
                    document.getElementById("file"+i).addEventListener("change", function(e) { self.funGetFiles(e); }, false);
                    updateNextState();
                    updateNumber();
                    notes.drag();
                    if (html) {
                        //删除方法
                        $("#2ndPanel .close").click(function() {
                            $(this).parent().remove();
                            updateNumber();
                            updateNextState();
                            return false;
                        });

                        adjustFootPos();
                    }
                }
            };
            funAppendImage();
        },
        //获取选择文件，file控件或拖放
        funGetFiles: function(e) {
            // 获取文件列表对象
            var files = e.target.files || e.dataTransfer.files;
            //继续添加文件
//            this.fileFilter = this.fileFilter.concat(this.filter(files));
            this.fileFilter=this.filter(files);
            this.funDealFiles();
            return this;
        },

        //选中文件的处理与回调
        funDealFiles: function() {
            for (var i = 0, file; file = this.fileFilter[i]; i++) {
                //增加唯一索引值
                file.index = i;
            }
            //执行选择回调
            this.onSelect(this.fileFilter);
            return this;
        },


        init: function() {
            var self = this;

            //文件选择控件选择
            if (this.fileInput) {
                this.fileInput.addEventListener("change", function(e) { self.funGetFiles(e); }, false);
            }
            //上传按钮提交
            if (this.upButton) {
                this.upButton.addEventListener("click", function(e) { self.funUploadFile(e); }, false);
            }
        }
    };
    w.photoUpload=photoUpload;
}($,window));