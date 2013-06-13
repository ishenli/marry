define(function(require, exports, module) {
    var jQuery=require("marry/extendJq");
    /**
     * 监听窗口大小的变化
     * @param window
     * @param $
     */
    (function(w, $) {
        function b() {
            var a = queue.length, b = 0;
            setTimeout(function() {
                for (; b < a; b++)
                    queue[b].call(windowSize)
            }, 20)
        }
        var $window = $(w), windowSize = {measure: function() {
            var a =$window.width(), b =  $window.height();
            windowSize.width = a;
            windowSize.height = b
        }};
        windowSize.measure();
        $(document).ready(function() {
            windowSize.measure()
        });
        var a,
            r, queue = [], windowResizeListener = {add: function(fn) {
                if (!a) {
                    $window.resize(function() {
                        clearTimeout(r);
                        r = setTimeout(b, 100)
                    });
                    a = true
                }
                a: {
                    for (var f = queue.length, g = 0; g < f; g++)
                        if (fn === queue[g])
                            break a;
                    queue.push(fn)
                }
            }};
        windowResizeListener.add(function() {
            windowSize.measure()
        });
        w.WindowResizeListener = windowResizeListener;
        w.WindowSize = windowSize
    })(window, jQuery);
    var Util={};
     Util.FlyJSONP=function(e){var c,l,i,j,m,g,n,o,k;l=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c};i=function(a,b){c.log("Garbage collecting!");b.parentNode.removeChild(b);e[a]=void 0;try{delete e[a]}catch(p){}};j=function(a,b){var c="",d,f;for(d in a)a.hasOwnProperty(d)&&(d=b?encodeURIComponent(d):d,f=b?encodeURIComponent(a[d]):a[d],c+=d+"="+f+"&");return c.replace(/&$/,"")};m=function(){for(var a="",a=[],b=0,b=0;b<32;b+=1)a[b]="0123456789ABCDEF".substr(Math.floor(Math.random()*
        16),1);a[12]="4";a[16]="0123456789ABCDEF".substr(a[16]&3|8,1);return a="flyjsonp_"+a.join("")};g=function(a,b){c.log(b);typeof a!=="undefined"&&a(b)};n=function(a,b){c.log("GET success");typeof a!=="undefined"&&a(b);c.log(b)};o=function(a,b){c.log("POST success");typeof a!=="undefined"&&a(b);c.log(b)};k=function(a){c.log("Request complete");typeof a!=="undefined"&&a()};c={options:{debug:!1}};c.init=function(a){var b;c.log("Initializing!");for(b in a)a.hasOwnProperty(b)&&(c.options[b]=a[b]);c.log("Initialization options");
        c.log(c.options);return!0};c.log=function(a){e.console&&c.options.debug&&e.console.log(a)};c.get=function(a){var a=a||{},b=a.url,p=a.callbackParameter||"callback",d=a.parameters||{},f=e.document.createElement("script"),h=m(),q="?";if(!b)throw Error("URL must be specified!");d[p]=h;b.indexOf("?")>=0&&(q="&");b+=q+j(d,!0);e[h]=function(b){typeof b==="undefined"?g(a.error,"Invalid JSON data returned"):a.httpMethod==="post"?(b=b.query.results,!b||!b.postresult?g(a.error,"Invalid JSON data returned"):
        (b=b.postresult.json?b.postresult.json:b.postresult,o(a.success,b))):n(a.success,b);i(h,f);k(a.complete)};c.log("Getting JSONP data");f.setAttribute("src",b);e.document.getElementsByTagName("head")[0].appendChild(f);l(f,"error",function(){i(h,f);k(a.complete);g(a.error,"Error while trying to access the URL")})};c.post=function(a){var a=a||{},b=a.url,e=a.parameters||{},d={};if(!b)throw Error("URL must be specified!");b="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from jsonpost where url="'+
        b+'" and postdata="'+j(e,!1)+'"')+"&format=json&env="+encodeURIComponent("store://datatables.org/alltableswithkeys");d.url=b;d.httpMethod="post";if(typeof a.success!=="undefined")d.success=a.success;if(typeof a.error!=="undefined")d.error=a.error;if(typeof a.complete!=="undefined")d.complete=a.complete;c.get(d)};return c}(this);
    (function(Util){
        var classof=function(o){
            return Object.prototype.toString.call(o).slice(8,-1);//return is [object XXXX]
        }
        //返回函数的名字（可能是空字符串），不是函数的返回null
        Function.prototype.getName=function(){
            if("name" in this)return this.name;
            return this.name=this.toString().match(/function\s*([^(]*)\(/)[1];
        }
        Util.type=function(o){
                var c, t,n; //class,type,name
                if(o===null) return "null";
                if(o!==o) return "NaN";

                //如果类型部位object，可是识别出原始值的类型和函数
                if((t=typeof o)!=="Object") return t;
                //返回对象的类名，除非为“Object”，可是识别大部分内置对象
                if((c=classof(o))!=="Object") return c;

                //对象构造函数存在的话，则返回它
                if(o.constructor&&typeof o.constructor==="function"&&(n= o.constructor.getName()))return n;

                //无法识别，则返回Object
                return "Object";
            }
    }(Util))
    Util.slice=Array.prototype.slice;
    Util.lunar=function(date){
        //获取当前系统时间
        curTime = new Date(date);
        var weekName = "星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(/,/g);
        var dayName = "*,初一,初二,初三,初四,初五,初六,初七,初八,初九,初十,十一,十二,十三,十四,十五,十六,十七,十八,十九,二十,廿一,廿二,廿三,廿四,廿五,廿六,廿七,廿八,廿九,三十".split(/,/g);
        var monName = "*,正,二,三,四,五,六,七,八,九,十,十一,腊".split(/,/g);
        var monthAdd = new Array(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334);
        var nongliData = new Array(2635, 333387, 1701, 1748, 267701, 694, 2391, 133423, 1175, 396438, 3402, 3749, 331177, 1453, 694, 201326, 2350, 465197, 3221, 3402, 400202, 2901, 1386, 267611, 605, 2349, 137515, 2709, 464533, 1738, 2901, 330421, 1242, 2651, 199255, 1323, 529706, 3733, 1706, 398762, 2741, 1206, 267438, 2647, 1318, 204070, 3477, 461653, 1386, 2413, 330077, 1197, 2637, 268877, 3365, 531109, 2900, 2922, 398042, 2395, 1179, 267415, 2635, 661067, 1701, 1748, 398772, 2742, 2391, 330031, 1175, 1611, 200010, 3749, 527717, 1452, 2742, 332397, 2350, 3222, 268949, 3402, 3493, 133973, 1386, 464219, 605, 2349, 334123, 2709, 2890, 267946, 2773, 592565, 1210, 2651, 395863, 1323, 2707, 265877);
        var curYear = curTime.getFullYear();
        var curMonth = curTime.getMonth() + 1;
        var curDay = curTime.getDate();
        var hours=curTime.getHours(),minutes=curTime.getMinutes(),seconds=curTime.getSeconds();
        var curWeekday = curTime.getDay();
        var weekdayStr = weekName[curWeekday];
//计算到初始时间1921年2月8日的天数：1921-2-8(正月初一)
        var theDate = (curYear - 1921) * 365 + Math.floor((curYear - 1921.0) / 4) + curDay + monthAdd[curMonth - 1] - 38;
        if ((curYear % 4) == 0 && curMonth > 2)
            theDate++;
//计算农历天干、地支、月、日
        var isEnd = 0;
        var m = 0, k, n;
        while (1) {
            if (nongliData[m] < 4095) k = 11;
            else k = 12;
            n = k;
            while (1) {
                if (n < 0) break;
//获取NongliData[m]的第n个二进制位的值
                bit = nongliData[m]
                for (var i = 0; i < n; i++)
                    bit = Math.floor(bit / 2.0);
                bit = bit % 2;
                if (theDate <= (29 + bit)) {
                    isEnd = 1
                    break;
                }
                theDate -= 29 + bit;
                n--;
            }
            if (isEnd == 1) break;
            m++;
        }
        curYear = 1921 + m;
        curMonth = k - n + 1;
        curDay = theDate;
        if (k == 12) {
            var mc = (Math.floor(nongliData[m] / 65536.0) + 1);
            if (curMonth == mc)
                curMonth = 1 - curMonth;
            else if (curMonth > mc) //NongliData(m)
                curMonth = curMonth - 1;
        }
        var o = new Object();
        o.year = new Date().getFullYear();
        o.month = new Date().getMonth() + 1;
        o.date = new Date().getDate();
        o.day = new Date().getDay();
        o.dayName = weekName[o.day];
        if (curMonth < 1)
            o.nMonth = "闰" + monName[-1 * curMonth];
        else
            o.nMonth = monName[curMonth];
        o.nMonth += "月";
        o.nDate = dayName[curDay];
//        console.log("the lunar is "+ o.nMonth+ o.nDate+ o.dayName);
        return curYear+"年"+curMonth+"月"+curDay+"日&nbsp;&nbsp;"+hours+":"+minutes+"<br/>农历："+ o.nMonth+""+ o.nDate+" "+ o.dayName;
    }
    module.exports = Util;
});

