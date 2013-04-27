/**
 * Created with JetBrains WebStorm.
 * User: SH201
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
      WB2.login(function(){
          alert("login");
      });
    })
})(window, jQuery);