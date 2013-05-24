define(function (require) {
    var helpers = require('marry/template/$helpers');
    var Render = function ($data) {
            'use strict';
            var $helpers = this,
                $out = '';
            $out += '<section class="w980 foot-body"> <a href="http://weibo.com/marrymemo" target="_blank" class="foot-txt"> 婚礼纪微博 </a> <span class="line">|</span> <a href="javascript:;" id="feedback" class="foot-txt"> 反馈</a> <span class="line">|</span> <a href="/" class="foot-txt"> 联系</a> <span class="line">|</span> <a href="download.html" class="foot-txt"> 应用下载</a> <span class="copyright">浙ICP备13004478号-1 婚礼纪-杭州火烧云科技有限公司</span> </section> <div id="feedbackPanel" class="ui-dialog-container "> <div class="feedback-inner"> <form action="XX" method="post"> <h2 class="ui-dialog-title">标题</h2> <input name="X" class="ui-dialog-input"/> <h2 class="ui-dialog-title">内容</h2> <textarea class="ui-dialog-textarea"></textarea> <h2 class="ui-dialog-title">邮箱</h2> <input name="X" class="ui-dialog-input"/> <div class="ui-btn ui-btn-green middle"> <input class="ui-btn-text" type="submit" value="发送"> </div> </form> </div> </div> ';
            return new String($out)
        };
    Render.prototype = helpers;
    return function (data) {
        return new Render(data) + '';
    }
});