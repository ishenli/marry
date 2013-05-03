define(function(require, exports, module) {
    var $=require("marry/extendJq"),Base = require('arale/base/1.0.1/base');
    var uploadImg = Base.extend({
        initialize: function(option) {
            this.fileInput = $(option.el).get(0);
            this.dragDrop=$(option.panel).get(0);
            this.url=option.url;
            var self=this;
            if (this.dragDrop) {
                this.dragDrop.addEventListener("dragover", function(e) { self.funDragHover(e); }, false);
                this.dragDrop.addEventListener("dragleave", function(e) { self.funDragHover(e); }, false);
                this.dragDrop.addEventListener("drop", function(e) { self.funGetFiles(e); }, false);
            }

            //文件选择控件选择
            if (this.fileInput) {
                this.fileInput.addEventListener("change", function(e) { self.funGetFiles(e); }, false);
            }
        },
        fileFilter: [],					//过滤后的文件数组
        filter: function(files) {		//选择文件组的过滤方法
            return files;
        },
        onSelect: function(files) {//文件选择后
            var html = '', i = 0;
            console.log("onSelect");
            $("#preview").html('<div class="upload_loading"></div>');
            var funAppendImage = function() {
                file = files[i];
                console.log("the files length is "+files.length);
                if (file) {
                    var reader = new FileReader();
                    console.log(file);
                    reader.readAsDataURL(file);
                    reader.onload = function(e) {
                        html = html + '<article id="uploadList_'+ i +'" class="note add-list-item">' + file.name+
                            '<a href="javascript:" class="close" title="删除" data-index="'+ i +'">删除</a>' +
                            '<div class="cover"><img id="uploadImage_' + i + '" src="' + e.target.result + '"/>'+
                            '<span id="uploadProgress_' + i + '" class="upload_progress"></span><div class="btn-drag"></div>' +
                            '</article>';

                        i++;
                        funAppendImage();
                    }

                } else {
                    $("#addList").append(html);
                    if (html) {
                        //删除方法
                        $(".close").click(function() {
                            this.funDeleteFile(files[parseInt($(this).attr("data-index"))]);
                            return false;
                        });
                    }
                }
            };
            funAppendImage();
        },
        onDelete: function(file) {
            $("#uploadList_" + file.index).fadeOut();
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
            console.log("dealing  file and the i is "+i);
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

        }
    });
    module.exports =uploadImg;
});

