define(function(require, exports, module) {
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
    module.exports = Util;
});

