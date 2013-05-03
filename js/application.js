/**
 * Created with JetBrains WebStorm.
 * Date: 13-4-19
 * Time: 下午4:33
 * 添加常用的函数
 */

/**
 * 微博登陆
 * @param window
 * @param $
 */
(function(w, $) {
    $("#weibo_content_btn").on("click",function(){
/*      WB2.login(function(){
          alert("login");
      });*/
//        $("#formCode").val(hex_md5("296588820@qq.com" + "*#0621ix51y6679&").toUpperCase());
        $("#formCode").val("e80a8a0eaa59c6e49653f29ac934fbb1".toUpperCase());
        $("#formWeibo").submit();
    })
})(window, jQuery);
/**
 * qq登陆
 * @param window
 * @param $
 */
(function(w, $) {
    $("#qq_content_btn").on("click",function(){
        QC.Login.showPopup({
            appId:"100370679",
            redirectURI:"http://marrymemo.com/marry/qc_back.html"
        })
    })
    //调用QC.Login方法，指定btnId参数将按钮绑定在容器节点中

})(window, jQuery);
/**
 * img uploader
 * @param window
 * @param $
 */
(function($,w){
    function updateNumber(){
        $("#imgNum").html($(".note").size());
    }
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
                    if (file.size >= 512000) {
                        alert('您这张"'+ file.name +'"图片大小过大，应小于500k');
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
            var html = '', i = 0;
            var funAppendImage = function() {
                file = files[i];
                if (file) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        html = html + '<article id="uploadList_'+ i +'" class="note add-list-item">'+
                            '<div class="close" title="删除" data-index="'+ i +'">X</div>' +
                            '<div class="cover"><img id="uploadImage_' + i + '" src="' + e.target.result + '"/>'+
                            '<span id="uploadProgress_' + i + '" class="upload_progress"></span><div class="btn-drag"></div>' +
                            '</article>';

                        i++;
                        funAppendImage();
                    }
                    reader.readAsDataURL(file);
                } else {
                    $("#addList").html(html);
                    updateNumber();
                    if (html) {
                        //删除方法
                        $(".close").click(function() {
                            ImgUpload.funDeleteFile(files[parseInt($(this).attr("data-index"))]);
                            updateNumber();
                            return false;
                        });
                        //提交按钮显示
                        $("#fileSubmit").show();
                    } else {
                        //提交按钮隐藏
                        $("#fileSubmit").hide();
                    }
                }
            };
            funAppendImage();
        },
        onDelete: function(file) {
            $("#uploadList_" + file.index).remove();
        },
        onDragOver: function() {
            $(this).addClass("upload_drag_hover");
        },
        onDragLeave: function() {
            $(this).removeClass("upload_drag_hover");
        },
        onProgress: function(file, loaded, total) {
            var eleProgress = $("#uploadProgress_" + file.index), percent = (loaded / total * 100).toFixed(2) + '%';
            eleProgress.show().html(percent);
        },
        onSuccess: function(file, response) {
            $("#uploadInf").append("<p>上传成功，图片地址是：" + response + "</p>");
        },
        onFailure: function(file) {
            $("#uploadInf").append("<p>图片" + file.name + "上传失败！</p>");
            $("#uploadImage_" + file.index).css("opacity", 0.2);
        },
        onComplete: function() {
            //提交按钮隐藏
            $("#fileSubmit").hide();
            //file控件value置空
            $("#fileImage").val("");
            $("#uploadInf").append("<p>当前图片全部上传完毕，可继续添加上传。</p>");
        },


        //文件拖放
        funDragHover: function(e) {
            e.stopPropagation();
            e.preventDefault();
            this[e.type === "dragover"? "onDragOver": "onDragLeave"].call(e.target);
            return this;
        },
        //获取选择文件，file控件或拖放
        funGetFiles: function(e) {
            // 取消鼠标经过样式
            this.funDragHover(e);

            // 获取文件列表对象
            var files = e.target.files || e.dataTransfer.files;
            //继续添加文件
            this.fileFilter = this.fileFilter.concat(this.filter(files));
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

        //删除对应的文件
        funDeleteFile: function(fileDelete) {
            var arrFile = [];
            for (var i = 0, file; file = this.fileFilter[i]; i++) {
                if (file != fileDelete) {
                    arrFile.push(file);
                } else {
                    this.onDelete(fileDelete);
                }
            }
            this.fileFilter = arrFile;
            return this;
        },

        //文件上传
        funUploadFile: function() {
            var self = this;
            if (location.host.indexOf("sitepointstatic") >= 0) {
                //非站点服务器上运行
                return;
            }
            for (var i = 0, file; file = this.fileFilter[i]; i++) {
                (function(file) {
                    var xhr = new XMLHttpRequest();
                    if (xhr.upload) {
                        // 上传中
                        xhr.upload.addEventListener("progress", function(e) {
                            self.onProgress(file, e.loaded, e.total);
                        }, false);

                        // 文件上传成功或是失败
                        xhr.onreadystatechange = function(e) {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    self.onSuccess(file, xhr.responseText);
                                    self.funDeleteFile(file);
                                    if (!self.fileFilter.length) {
                                        //全部完毕
                                        self.onComplete();
                                    }
                                } else {
                                    self.onFailure(file, xhr.responseText);
                                }
                            }
                        };

                        // 开始上传
                        xhr.open("POST", self.url, true);
                        xhr.setRequestHeader("X_FILENAME", file.name);
                        xhr.send(file);
                    }
                })(file);
            }

        },

        init: function() {
            var self = this;

            if (this.dragDrop) {
                this.dragDrop.addEventListener("dragover", function(e) { self.funDragHover(e); }, false);
                this.dragDrop.addEventListener("dragleave", function(e) { self.funDragHover(e); }, false);
                this.dragDrop.addEventListener("drop", function(e) { self.funGetFiles(e); }, false);
            }

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
