/*
 MIT License - http://www.opensource.org/licenses/mit-license.php

 For usage and examples, visit:
 http://timeago.yarp.com/

 Copyright (c) 2008-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function(c, g) {
    function b(j, A, a) {
        if (a === g && 1 === j.nodeType)
            if (a = "data-" + A.replace(bc, "-$1").toLowerCase(), a = j.getAttribute(a), "string" === typeof a) {
                try {
                    a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : i.isNumeric(a) ? +a : cc.test(a) ? i.parseJSON(a) : a
                } catch (b) {
                }
                i.data(j, A, a)
            } else
                a = g;
        return a
    }
    function d(j) {
        for (var A in j)
            if (!("data" === A && i.isEmptyObject(j[A])) && "toJSON" !== A)
                return !1;
        return !0
    }
    function f(j, A, a) {
        var b = A + "defer", c = A + "queue", d = A + "mark", f = i._data(j, b);
        f && (("queue" === a || !i._data(j, c)) && ("mark" ===
            a || !i._data(j, d))) && setTimeout(function() {
            !i._data(j, c) && !i._data(j, d) && (i.removeData(j, b, !0), f.fire())
        }, 0)
    }
    function m() {
        return !1
    }
    function a() {
        return !0
    }
    function r(j, A, a) {
        A = A || 0;
        if (i.isFunction(A))
            return i.grep(j, function(j, i) {
                return !!A.call(j, i, j) === a
            });
        if (A.nodeType)
            return i.grep(j, function(j) {
                return j === A === a
            });
        if ("string" === typeof A) {
            var b = i.grep(j, function(j) {
                return 1 === j.nodeType
            });
            if (dc.test(A))
                return i.filter(A, b, !a);
            A = i.filter(A, b)
        }
        return i.grep(j, function(j) {
            return 0 <= i.inArray(j, A) === a
        })
    }
    function p(j) {
        var A = pb.split("|"), j = j.createDocumentFragment();
        if (j.createElement)
            for (; A.length; )
                j.createElement(A.pop());
        return j
    }
    function q(j, A) {
        if (1 === A.nodeType && i.hasData(j)) {
            var a, b, c;
            b = i._data(j);
            var d = i._data(A, b), f = b.events;
            if (f)
                for (a in delete d.handle, d.events = {}, f) {
                    b = 0;
                    for (c = f[a].length; b < c; b++)
                        i.event.add(A, a, f[a][b])
                }
            d.data && (d.data = i.extend({}, d.data))
        }
    }
    function n(j, A) {
        var a;
        if (1 === A.nodeType) {
            A.clearAttributes && A.clearAttributes();
            A.mergeAttributes && A.mergeAttributes(j);
            a = A.nodeName.toLowerCase();
            if ("object" === a)
                A.outerHTML = j.outerHTML;
            else if ("input" === a && ("checkbox" === j.type || "radio" === j.type)) {
                if (j.checked && (A.defaultChecked = A.checked = j.checked), A.value !== j.value)
                    A.value = j.value
            } else
                "option" === a ? A.selected = j.defaultSelected : "input" === a || "textarea" === a ? A.defaultValue = j.defaultValue : "script" === a && A.text !== j.text && (A.text = j.text);
            A.removeAttribute(i.expando);
            A.removeAttribute("_submit_attached");
            A.removeAttribute("_change_attached")
        }
    }
    function s(j) {
        return "undefined" !== typeof j.getElementsByTagName ?
            j.getElementsByTagName("*") : "undefined" !== typeof j.querySelectorAll ? j.querySelectorAll("*") : []
    }
    function u(j) {
        if ("checkbox" === j.type || "radio" === j.type)
            j.defaultChecked = j.checked
    }
    function v(j) {
        var A = (j.nodeName || "").toLowerCase();
        "input" === A ? u(j) : "script" !== A && "undefined" !== typeof j.getElementsByTagName && i.grep(j.getElementsByTagName("input"), u)
    }
    function x(j, A, a) {
        var b = "width" === A ? j.offsetWidth : j.offsetHeight, c = "width" === A ? 1 : 0;
        if (0 < b) {
            if ("border" !== a)
                for (; 4 > c; c += 2)
                    a || (b -= parseFloat(i.css(j, "padding" +
                        la[c])) || 0), b = "margin" === a ? b + (parseFloat(i.css(j, a + la[c])) || 0) : b - (parseFloat(i.css(j, "border" + la[c] + "Width")) || 0);
            return b + "px"
        }
        b = sa(j, A);
        if (0 > b || null == b)
            b = j.style[A];
        if (Ya.test(b))
            return b;
        b = parseFloat(b) || 0;
        if (a)
            for (; 4 > c; c += 2)
                b += parseFloat(i.css(j, "padding" + la[c])) || 0, "padding" !== a && (b += parseFloat(i.css(j, "border" + la[c] + "Width")) || 0), "margin" === a && (b += parseFloat(i.css(j, a + la[c])) || 0);
        return b + "px"
    }
    function t(j) {
        return function(A, a) {
            "string" !== typeof A && (a = A, A = "*");
            if (i.isFunction(a))
                for (var b = A.toLowerCase().split(qb),
                         c = 0, d = b.length, f, k; c < d; c++)
                    f = b[c], (k = /^\+/.test(f)) && (f = f.substr(1) || "*"), f = j[f] = j[f] || [], f[k ? "unshift" : "push"](a)
        }
    }
    function w(j, A, a, i, b, c) {
        b = b || A.dataTypes[0];
        c = c || {};
        c[b] = !0;
        for (var b = j[b], d = 0, f = b ? b.length : 0, k = j === Za, l; d < f && (k || !l); d++)
            l = b[d](A, a, i), "string" === typeof l && (!k || c[l] ? l = g : (A.dataTypes.unshift(l), l = w(j, A, a, i, l, c)));
        if ((k || !l) && !c["*"])
            l = w(j, A, a, i, "*", c);
        return l
    }
    function C(j, A) {
        var a, b, c = i.ajaxSettings.flatOptions || {};
        for (a in A)
            A[a] !== g && ((c[a] ? j : b || (b = {}))[a] = A[a]);
        b && i.extend(!0, j,
            b)
    }
    function D(j, A, a, b) {
        if (i.isArray(A))
            i.each(A, function(A, i) {
                a || ec.test(j) ? b(j, i) : D(j + "[" + ("object" === typeof i ? A : "") + "]", i, a, b)
            });
        else if (!a && "object" === i.type(A))
            for (var c in A)
                D(j + "[" + c + "]", A[c], a, b);
        else
            b(j, A)
    }
    function G() {
        try {
            return new c.XMLHttpRequest
        } catch (j) {
        }
    }
    function k() {
        setTimeout(l, 0);
        return Ga = i.now()
    }
    function l() {
        Ga = g
    }
    function z(j, A) {
        var a = {};
        i.each(Ha.concat.apply([], Ha.slice(0, A)), function() {
            a[this] = j
        });
        return a
    }
    function E(j) {
        if (!$a[j]) {
            var A = o.body, a = i("<" + j + ">").appendTo(A), b =
                a.css("display");
            a.remove();
            if ("none" === b || "" === b) {
                ba || (ba = o.createElement("iframe"), ba.frameBorder = ba.width = ba.height = 0);
                A.appendChild(ba);
                if (!ta || !ba.createElement)
                    ta = (ba.contentWindow || ba.contentDocument).document, ta.write((i.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), ta.close();
                a = ta.createElement(j);
                ta.body.appendChild(a);
                b = i.css(a, "display");
                A.removeChild(ba)
            }
            $a[j] = b
        }
        return $a[j]
    }
    function L(j) {
        return i.isWindow(j) ? j : 9 === j.nodeType ? j.defaultView || j.parentWindow : !1
    }
    var o = c.document,
        B = c.location, i, H = function() {
            if (!y.isReady) {
                try {
                    o.documentElement.doScroll("left")
                } catch (j) {
                    setTimeout(H, 1);
                    return
                }
                y.ready()
            }
        }, y = function(j, a) {
            return new y.fn.init(j, a, M)
        }, N = c.jQuery, R = c.$, M, O = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, J = /\S/, P = /^\s+/, T = /\s+$/, U = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ca = /^[\],:{}\s]*$/, ea = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, ka = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Ia = /(?:^|:|,)(?:\s*\[)+/g, Ja = /(webkit)[ \/]([\w.]+)/, Q = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        ua = /(msie) ([\w.]+)/, fa = /(mozilla)(?:.*? rv:([\w.]+))?/, ga = /-([a-z]|[0-9])/ig, ha = /^-ms-/, da = function(j, a) {
            return (a + "").toUpperCase()
        }, ma = c.navigator.userAgent, va, ia, W, na = Object.prototype.toString, Ca = Object.prototype.hasOwnProperty, Z = Array.prototype.push, X = Array.prototype.slice, rb = String.prototype.trim, sb = Array.prototype.indexOf, tb = {};
    y.fn = y.prototype = {constructor: y,init: function(j, a, i) {
        var b;
        if (!j)
            return this;
        if (j.nodeType)
            return this.context = this[0] = j, this.length = 1, this;
        if ("body" === j && !a && o.body)
            return this.context =
                o, this[0] = o.body, this.selector = j, this.length = 1, this;
        if ("string" === typeof j) {
            if ((b = "<" === j.charAt(0) && ">" === j.charAt(j.length - 1) && 3 <= j.length ? [null, j, null] : O.exec(j)) && (b[1] || !a)) {
                if (b[1])
                    return i = (a = a instanceof y ? a[0] : a) ? a.ownerDocument || a : o, (j = U.exec(j)) ? y.isPlainObject(a) ? (j = [o.createElement(j[1])], y.fn.attr.call(j, a, !0)) : j = [i.createElement(j[1])] : (j = y.buildFragment([b[1]], [i]), j = (j.cacheable ? y.clone(j.fragment) : j.fragment).childNodes), y.merge(this, j);
                if ((a = o.getElementById(b[2])) && a.parentNode) {
                    if (a.id !==
                        b[2])
                        return i.find(j);
                    this.length = 1;
                    this[0] = a
                }
                this.context = o;
                this.selector = j;
                return this
            }
            return !a || a.jquery ? (a || i).find(j) : this.constructor(a).find(j)
        }
        if (y.isFunction(j))
            return i.ready(j);
        j.selector !== g && (this.selector = j.selector, this.context = j.context);
        return y.makeArray(j, this)
    },selector: "",jquery: "1.7.2",length: 0,size: function() {
        return this.length
    },toArray: function() {
        return X.call(this, 0)
    },get: function(j) {
        return null == j ? this.toArray() : 0 > j ? this[this.length + j] : this[j]
    },pushStack: function(j, a, i) {
        var b =
            this.constructor();
        y.isArray(j) ? Z.apply(b, j) : y.merge(b, j);
        b.prevObject = this;
        b.context = this.context;
        "find" === a ? b.selector = this.selector + (this.selector ? " " : "") + i : a && (b.selector = this.selector + "." + a + "(" + i + ")");
        return b
    },each: function(j, a) {
        return y.each(this, j, a)
    },ready: function(j) {
        y.bindReady();
        ia.add(j);
        return this
    },eq: function(j) {
        j = +j;
        return -1 === j ? this.slice(j) : this.slice(j, j + 1)
    },first: function() {
        return this.eq(0)
    },last: function() {
        return this.eq(-1)
    },slice: function() {
        return this.pushStack(X.apply(this,
            arguments), "slice", X.call(arguments).join(","))
    },map: function(j) {
        return this.pushStack(y.map(this, function(a, i) {
            return j.call(a, i, a)
        }))
    },end: function() {
        return this.prevObject || this.constructor(null)
    },push: Z,sort: [].sort,splice: [].splice};
    y.fn.init.prototype = y.fn;
    y.extend = y.fn.extend = function() {
        var j, a, i, b, c, d = arguments[0] || {}, f = 1, k = arguments.length, l = !1;
        "boolean" === typeof d && (l = d, d = arguments[1] || {}, f = 2);
        "object" !== typeof d && !y.isFunction(d) && (d = {});
        k === f && (d = this, --f);
        for (; f < k; f++)
            if (null != (j = arguments[f]))
                for (a in j)
                    i =
                        d[a], b = j[a], d !== b && (l && b && (y.isPlainObject(b) || (c = y.isArray(b))) ? (c ? (c = !1, i = i && y.isArray(i) ? i : []) : i = i && y.isPlainObject(i) ? i : {}, d[a] = y.extend(l, i, b)) : b !== g && (d[a] = b));
        return d
    };
    y.extend({noConflict: function(j) {
        c.$ === y && (c.$ = R);
        j && c.jQuery === y && (c.jQuery = N);
        return y
    },isReady: !1,readyWait: 1,holdReady: function(j) {
        j ? y.readyWait++ : y.ready(!0)
    },ready: function(j) {
        if (!0 === j && !--y.readyWait || !0 !== j && !y.isReady) {
            if (!o.body)
                return setTimeout(y.ready, 1);
            y.isReady = !0;
            !0 !== j && 0 < --y.readyWait || (ia.fireWith(o, [y]),
                y.fn.trigger && y(o).trigger("ready").off("ready"))
        }
    },bindReady: function() {
        if (!ia) {
            ia = y.Callbacks("once memory");
            if ("complete" === o.readyState)
                return setTimeout(y.ready, 1);
            if (o.addEventListener)
                o.addEventListener("DOMContentLoaded", W, !1), c.addEventListener("load", y.ready, !1);
            else if (o.attachEvent) {
                o.attachEvent("onreadystatechange", W);
                c.attachEvent("onload", y.ready);
                var j = !1;
                try {
                    j = null == c.frameElement
                } catch (a) {
                }
                o.documentElement.doScroll && j && H()
            }
        }
    },isFunction: function(j) {
        return "function" === y.type(j)
    },
        isArray: Array.isArray || function(j) {
            return "array" === y.type(j)
        },isWindow: function(j) {
            return null != j && j == j.window
        },isNumeric: function(j) {
            return !isNaN(parseFloat(j)) && isFinite(j)
        },type: function(j) {
            return null == j ? String(j) : tb[na.call(j)] || "object"
        },isPlainObject: function(j) {
            if (!j || "object" !== y.type(j) || j.nodeType || y.isWindow(j))
                return !1;
            try {
                if (j.constructor && !Ca.call(j, "constructor") && !Ca.call(j.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (a) {
                return !1
            }
            for (var i in j)
                ;
            return i === g || Ca.call(j, i)
        },
        isEmptyObject: function(j) {
            for (var a in j)
                return !1;
            return !0
        },error: function(j) {
            throw Error(j);
        },parseJSON: function(j) {
            if ("string" !== typeof j || !j)
                return null;
            j = y.trim(j);
            if (c.JSON && c.JSON.parse)
                return c.JSON.parse(j);
            if (ca.test(j.replace(ea, "@").replace(ka, "]").replace(Ia, "")))
                return (new Function("return " + j))();
            y.error("Invalid JSON: " + j)
        },parseXML: function(j) {
            if ("string" !== typeof j || !j)
                return null;
            var a, i;
            try {
                c.DOMParser ? (i = new DOMParser, a = i.parseFromString(j, "text/xml")) : (a = new ActiveXObject("Microsoft.XMLDOM"),
                    a.async = "false", a.loadXML(j))
            } catch (b) {
                a = g
            }
            (!a || !a.documentElement || a.getElementsByTagName("parsererror").length) && y.error("Invalid XML: " + j);
            return a
        },noop: function() {
        },globalEval: function(j) {
            j && J.test(j) && (c.execScript || function(j) {
                c.eval.call(c, j)
            })(j)
        },camelCase: function(j) {
            return j.replace(ha, "ms-").replace(ga, da)
        },nodeName: function(j, a) {
            return j.nodeName && j.nodeName.toUpperCase() === a.toUpperCase()
        },each: function(j, a, i) {
            var b, c = 0, d = j.length, f = d === g || y.isFunction(j);
            if (i)
                if (f)
                    for (b in j) {
                        if (!1 ===
                            a.apply(j[b], i))
                            break
                    }
                else
                    for (; c < d && !1 !== a.apply(j[c++], i); )
                        ;
            else if (f)
                for (b in j) {
                    if (!1 === a.call(j[b], b, j[b]))
                        break
                }
            else
                for (; c < d && !1 !== a.call(j[c], c, j[c++]); )
                    ;
            return j
        },trim: rb ? function(j) {
            return null == j ? "" : rb.call(j)
        } : function(j) {
            return null == j ? "" : j.toString().replace(P, "").replace(T, "")
        },makeArray: function(j, a) {
            var i = a || [];
            if (null != j) {
                var b = y.type(j);
                null == j.length || "string" === b || "function" === b || "regexp" === b || y.isWindow(j) ? Z.call(i, j) : y.merge(i, j)
            }
            return i
        },inArray: function(j, a, i) {
            var b;
            if (a) {
                if (sb)
                    return sb.call(a,
                        j, i);
                b = a.length;
                for (i = i ? 0 > i ? Math.max(0, b + i) : i : 0; i < b; i++)
                    if (i in a && a[i] === j)
                        return i
            }
            return -1
        },merge: function(j, a) {
            var i = j.length, b = 0;
            if ("number" === typeof a.length)
                for (var c = a.length; b < c; b++)
                    j[i++] = a[b];
            else
                for (; a[b] !== g; )
                    j[i++] = a[b++];
            j.length = i;
            return j
        },grep: function(j, a, i) {
            for (var b = [], c, i = !!i, d = 0, f = j.length; d < f; d++)
                c = !!a(j[d], d), i !== c && b.push(j[d]);
            return b
        },map: function(j, a, i) {
            var b, c, d = [], f = 0, k = j.length;
            if (j instanceof y || k !== g && "number" === typeof k && (0 < k && j[0] && j[k - 1] || 0 === k || y.isArray(j)))
                for (; f <
                           k; f++)
                    b = a(j[f], f, i), null != b && (d[d.length] = b);
            else
                for (c in j)
                    b = a(j[c], c, i), null != b && (d[d.length] = b);
            return d.concat.apply([], d)
        },guid: 1,proxy: function(j, a) {
            if ("string" === typeof a)
                var i = j[a], a = j, j = i;
            if (!y.isFunction(j))
                return g;
            var b = X.call(arguments, 2), i = function() {
                return j.apply(a, b.concat(X.call(arguments)))
            };
            i.guid = j.guid = j.guid || i.guid || y.guid++;
            return i
        },access: function(j, a, i, b, c, d, f) {
            var k, l = null == i, o = 0, n = j.length;
            if (i && "object" === typeof i) {
                for (o in i)
                    y.access(j, a, o, i[o], 1, d, b);
                c = 1
            } else if (b !==
                g) {
                k = f === g && y.isFunction(b);
                l && (k ? (k = a, a = function(j, a, i) {
                    return k.call(y(j), i)
                }) : (a.call(j, b), a = null));
                if (a)
                    for (; o < n; o++)
                        a(j[o], i, k ? b.call(j[o], o, a(j[o], i)) : b, f);
                c = 1
            }
            return c ? j : l ? a.call(j) : n ? a(j[0], i) : d
        },now: function() {
            return (new Date).getTime()
        },uaMatch: function(j) {
            j = j.toLowerCase();
            j = Ja.exec(j) || Q.exec(j) || ua.exec(j) || 0 > j.indexOf("compatible") && fa.exec(j) || [];
            return {browser: j[1] || "",version: j[2] || "0"}
        },sub: function() {
            function j(a, i) {
                return new j.fn.init(a, i)
            }
            y.extend(!0, j, this);
            j.superclass = this;
            j.fn = j.prototype = this();
            j.fn.constructor = j;
            j.sub = this.sub;
            j.fn.init = function(i, b) {
                b && (b instanceof y && !(b instanceof j)) && (b = j(b));
                return y.fn.init.call(this, i, b, a)
            };
            j.fn.init.prototype = j.fn;
            var a = j(o);
            return j
        },browser: {}});
    y.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(j, a) {
        tb["[object " + a + "]"] = a.toLowerCase()
    });
    va = y.uaMatch(ma);
    va.browser && (y.browser[va.browser] = !0, y.browser.version = va.version);
    y.browser.webkit && (y.browser.safari = !0);
    J.test("\u00a0") && (P = /^[\s\xA0]+/,
        T = /[\s\xA0]+$/);
    M = y(o);
    o.addEventListener ? W = function() {
        o.removeEventListener("DOMContentLoaded", W, false);
        y.ready()
    } : o.attachEvent && (W = function() {
        if (o.readyState === "complete") {
            o.detachEvent("onreadystatechange", W);
            y.ready()
        }
    });
    i = y;
    var ub = {};
    i.Callbacks = function(j) {
        var a;
        if (j) {
            if (!(a = ub[j])) {
                a = j;
                var b = ub[a] = {}, c, d;
                a = a.split(/\s+/);
                c = 0;
                for (d = a.length; c < d; c++)
                    b[a[c]] = true;
                a = b
            }
        } else
            a = {};
        var j = a, f = [], k = [], l, o, n, m, s, B, r = function(a) {
            var b, A, c, d;
            b = 0;
            for (A = a.length; b < A; b++) {
                c = a[b];
                d = i.type(c);
                d === "array" ?
                    r(c) : d === "function" && (!j.unique || !z.has(c)) && f.push(c)
            }
        }, J = function(a, i) {
            i = i || [];
            l = !j.memory || [a, i];
            n = o = true;
            B = m || 0;
            m = 0;
            for (s = f.length; f && B < s; B++)
                if (f[B].apply(a, i) === false && j.stopOnFalse) {
                    l = true;
                    break
                }
            n = false;
            if (f)
                if (j.once)
                    l === true ? z.disable() : f = [];
                else if (k && k.length) {
                    l = k.shift();
                    z.fireWith(l[0], l[1])
                }
        }, z = {add: function() {
            if (f) {
                var j = f.length;
                r(arguments);
                if (n)
                    s = f.length;
                else if (l && l !== true) {
                    m = j;
                    J(l[0], l[1])
                }
            }
            return this
        },remove: function() {
            if (f)
                for (var a = arguments, i = 0, b = a.length; i < b; i++)
                    for (var A =
                        0; A < f.length; A++)
                        if (a[i] === f[A]) {
                            if (n && A <= s) {
                                s--;
                                A <= B && B--
                            }
                            f.splice(A--, 1);
                            if (j.unique)
                                break
                        }
            return this
        },has: function(j) {
            if (f)
                for (var a = 0, i = f.length; a < i; a++)
                    if (j === f[a])
                        return true;
            return false
        },empty: function() {
            f = [];
            return this
        },disable: function() {
            f = k = l = g;
            return this
        },disabled: function() {
            return !f
        },lock: function() {
            k = g;
            (!l || l === true) && z.disable();
            return this
        },locked: function() {
            return !k
        },fireWith: function(a, i) {
            k && (n ? j.once || k.push([a, i]) : (!j.once || !l) && J(a, i));
            return this
        },fire: function() {
            z.fireWith(this,
                arguments);
            return this
        },fired: function() {
            return !!o
        }};
        return z
    };
    var ab = [].slice;
    i.extend({Deferred: function(j) {
        var a = i.Callbacks("once memory"), b = i.Callbacks("once memory"), c = i.Callbacks("memory"), d = "pending", f = {resolve: a,reject: b,notify: c}, k = {done: a.add,fail: b.add,progress: c.add,state: function() {
            return d
        },isResolved: a.fired,isRejected: b.fired,then: function(j, a, i) {
            l.done(j).fail(a).progress(i);
            return this
        },always: function() {
            l.done.apply(l, arguments).fail.apply(l, arguments);
            return this
        },pipe: function(j,
                         a, b) {
            return i.Deferred(function(c) {
                i.each({done: [j, "resolve"],fail: [a, "reject"],progress: [b, "notify"]}, function(j, a) {
                    var b = a[0], A = a[1], d;
                    if (i.isFunction(b))
                        l[j](function() {
                            if ((d = b.apply(this, arguments)) && i.isFunction(d.promise))
                                d.promise().then(c.resolve, c.reject, c.notify);
                            else
                                c[A + "With"](this === l ? c : this, [d])
                        });
                    else
                        l[j](c[A])
                })
            }).promise()
        },promise: function(j) {
            if (j == null)
                j = k;
            else
                for (var a in k)
                    j[a] = k[a];
            return j
        }}, l = k.promise({}), g;
        for (g in f) {
            l[g] = f[g].fire;
            l[g + "With"] = f[g].fireWith
        }
        l.done(function() {
            d =
                "resolved"
        }, b.disable, c.lock).fail(function() {
                d = "rejected"
            }, a.disable, c.lock);
        j && j.call(l, l);
        return l
    },when: function(j) {
        function a(j) {
            return function(a) {
                c[j] = arguments.length > 1 ? ab.call(arguments, 0) : a;
                --l || g.resolveWith(g, c)
            }
        }
        function b(j) {
            return function(a) {
                k[j] = arguments.length > 1 ? ab.call(arguments, 0) : a;
                g.notifyWith(o, k)
            }
        }
        var c = ab.call(arguments, 0), d = 0, f = c.length, k = Array(f), l = f, g = f <= 1 && j && i.isFunction(j.promise) ? j : i.Deferred(), o = g.promise();
        if (f > 1) {
            for (; d < f; d++)
                c[d] && c[d].promise && i.isFunction(c[d].promise) ?
                    c[d].promise().then(a(d), g.reject, b(d)) : --l;
            l || g.resolveWith(g, c)
        } else
            g !== j && g.resolveWith(g, f ? [j] : []);
        return o
    }});
    var fc = i, bb;
    var S, cb, wa, Ka, La, V, oa, Da, Ma, db, xa, I = o.createElement("div");
    I.setAttribute("className", "t");
    I.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    cb = I.getElementsByTagName("*");
    wa = I.getElementsByTagName("a")[0];
    if (!cb || !cb.length || !wa)
        bb = {};
    else {
        Ka = o.createElement("select");
        La = Ka.appendChild(o.createElement("option"));
        V = I.getElementsByTagName("input")[0];
        S = {leadingWhitespace: 3 === I.firstChild.nodeType,tbody: !I.getElementsByTagName("tbody").length,htmlSerialize: !!I.getElementsByTagName("link").length,style: /top/.test(wa.getAttribute("style")),hrefNormalized: "/a" === wa.getAttribute("href"),opacity: /^0.55/.test(wa.style.opacity),cssFloat: !!wa.style.cssFloat,checkOn: "on" === V.value,optSelected: La.selected,getSetAttribute: "t" !== I.className,enctype: !!o.createElement("form").enctype,html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,changeBubbles: !0,focusinBubbles: !1,deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0,pixelMargin: !0};
        i.boxModel = S.boxModel = "CSS1Compat" === o.compatMode;
        V.checked = !0;
        S.noCloneChecked = V.cloneNode(!0).checked;
        Ka.disabled = !0;
        S.optDisabled = !La.disabled;
        try {
            delete I.test
        } catch (Xc) {
            S.deleteExpando = !1
        }
        !I.addEventListener && (I.attachEvent && I.fireEvent) && (I.attachEvent("onclick", function() {
            S.noCloneEvent = false
        }), I.cloneNode(!0).fireEvent("onclick"));
        V = o.createElement("input");
        V.value = "t";
        V.setAttribute("type", "radio");
        S.radioValue = "t" === V.value;
        V.setAttribute("checked", "checked");
        V.setAttribute("name", "t");
        I.appendChild(V);
        oa = o.createDocumentFragment();
        oa.appendChild(I.lastChild);
        S.checkClone = oa.cloneNode(!0).cloneNode(!0).lastChild.checked;
        S.appendChecked = V.checked;
        oa.removeChild(V);
        oa.appendChild(I);
        if (I.attachEvent)
            for (db in {submit: 1,change: 1,focusin: 1})
                Ma = "on" + db, xa = Ma in I, xa || (I.setAttribute(Ma, "return;"), xa = "function" === typeof I[Ma]),
                    S[db + "Bubbles"] = xa;
        oa.removeChild(I);
        oa = Ka = La = I = V = null;
        i(function() {
            var j, a, b, d, f = o.getElementsByTagName("body")[0];
            if (f) {
                j = o.createElement("div");
                j.style.cssText = "padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px";
                f.insertBefore(j, f.firstChild);
                I = o.createElement("div");
                j.appendChild(I);
                I.innerHTML = "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>";
                Da = I.getElementsByTagName("td");
                xa = Da[0].offsetHeight ===
                    0;
                Da[0].style.display = "";
                Da[1].style.display = "none";
                S.reliableHiddenOffsets = xa && Da[0].offsetHeight === 0;
                if (c.getComputedStyle) {
                    I.innerHTML = "";
                    a = o.createElement("div");
                    a.style.width = "0";
                    a.style.marginRight = "0";
                    I.style.width = "2px";
                    I.appendChild(a);
                    S.reliableMarginRight = (parseInt((c.getComputedStyle(a, null) || {marginRight: 0}).marginRight, 10) || 0) === 0
                }
                if (typeof I.style.zoom !== "undefined") {
                    I.innerHTML = "";
                    I.style.width = I.style.padding = "1px";
                    I.style.border = 0;
                    I.style.overflow = "hidden";
                    I.style.display = "inline";
                    I.style.zoom = 1;
                    S.inlineBlockNeedsLayout = I.offsetWidth === 3;
                    I.style.display = "block";
                    I.style.overflow = "visible";
                    I.innerHTML = "<div style='width:5px;'></div>";
                    S.shrinkWrapBlocks = I.offsetWidth !== 3
                }
                I.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;";
                I.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                a = I.firstChild;
                b = a.firstChild;
                d = a.nextSibling.firstChild.firstChild;
                d = {doesNotAddBorder: b.offsetTop !== 5,doesAddBorderForTableAndCells: d.offsetTop === 5};
                b.style.position = "fixed";
                b.style.top = "20px";
                d.fixedPosition = b.offsetTop === 20 || b.offsetTop === 15;
                b.style.position = b.style.top = "";
                a.style.overflow = "hidden";
                a.style.position = "relative";
                d.subtractsBorderForOverflowNotVisible = b.offsetTop === -5;
                d.doesNotIncludeMarginInBodyOffset = f.offsetTop !== 1;
                if (c.getComputedStyle) {
                    I.style.marginTop = "1%";
                    S.pixelMargin = (c.getComputedStyle(I,
                        null) || {marginTop: 0}).marginTop !== "1%"
                }
                if (typeof j.style.zoom !== "undefined")
                    j.style.zoom = 1;
                f.removeChild(j);
                I = null;
                i.extend(S, d)
            }
        });
        bb = S
    }
    fc.support = bb;
    var cc = /^(?:\{.*\}|\[.*\])$/, bc = /([A-Z])/g;
    i.extend({cache: {},uuid: 0,expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(j) {
        j = j.nodeType ? i.cache[j[i.expando]] : j[i.expando];
        return !!j && !d(j)
    },data: function(j, a, b, c) {
        if (i.acceptData(j)) {
            var d;
            d = i.expando;
            var f = typeof a === "string", k = j.nodeType, l = k ? i.cache : j, o = k ? j[d] : j[d] && d, n = a === "events";
            if (o && l[o] && (n || c || l[o].data) || !(f && b === g)) {
                o || (k ? j[d] = o = ++i.uuid : o = d);
                if (!l[o]) {
                    l[o] = {};
                    if (!k)
                        l[o].toJSON = i.noop
                }
                if (typeof a === "object" || typeof a === "function")
                    c ? l[o] = i.extend(l[o], a) : l[o].data = i.extend(l[o].data, a);
                d = j = l[o];
                if (!c) {
                    if (!j.data)
                        j.data = {};
                    j = j.data
                }
                b !== g && (j[i.camelCase(a)] = b);
                if (n && !j[a])
                    return d.events;
                if (f) {
                    b = j[a];
                    b == null && (b = j[i.camelCase(a)])
                } else
                    b = j;
                return b
            }
        }
    },removeData: function(j, a, b) {
        if (i.acceptData(j)) {
            var c,
                f, k, l = i.expando, g = j.nodeType, o = g ? i.cache : j, n = g ? j[l] : l;
            if (o[n]) {
                if (a)
                    if (c = b ? o[n] : o[n].data) {
                        if (!i.isArray(a))
                            if (a in c)
                                a = [a];
                            else {
                                a = i.camelCase(a);
                                a = a in c ? [a] : a.split(" ")
                            }
                        f = 0;
                        for (k = a.length; f < k; f++)
                            delete c[a[f]];
                        if (!(b ? d : i.isEmptyObject)(c))
                            return
                    }
                if (!b) {
                    delete o[n].data;
                    if (!d(o[n]))
                        return
                }
                i.support.deleteExpando || !o.setInterval ? delete o[n] : o[n] = null;
                g && (i.support.deleteExpando ? delete j[l] : j.removeAttribute ? j.removeAttribute(l) : j[l] = null)
            }
        }
    },_data: function(j, a, b) {
        return i.data(j, a, b, true)
    },acceptData: function(j) {
        if (j.nodeName) {
            var a =
                i.noData[j.nodeName.toLowerCase()];
            if (a)
                return !(a === true || j.getAttribute("classid") !== a)
        }
        return true
    }});
    i.fn.extend({data: function(j, a) {
        var c, d, f, k, l, o = this[0], n = 0, m = null;
        if (j === g) {
            if (this.length) {
                m = i.data(o);
                if (o.nodeType === 1 && !i._data(o, "parsedAttrs")) {
                    f = o.attributes;
                    for (l = f.length; n < l; n++) {
                        k = f[n].name;
                        if (k.indexOf("data-") === 0) {
                            k = i.camelCase(k.substring(5));
                            b(o, k, m[k])
                        }
                    }
                    i._data(o, "parsedAttrs", true)
                }
            }
            return m
        }
        if (typeof j === "object")
            return this.each(function() {
                i.data(this, j)
            });
        c = j.split(".", 2);
        c[1] = c[1] ? "." + c[1] : "";
        d = c[1] + "!";
        return i.access(this, function(a) {
            if (a === g) {
                m = this.triggerHandler("getData" + d, [c[0]]);
                if (m === g && o) {
                    m = i.data(o, j);
                    m = b(o, j, m)
                }
                return m === g && c[1] ? this.data(c[0]) : m
            }
            c[1] = a;
            this.each(function() {
                var b = i(this);
                b.triggerHandler("setData" + d, c);
                i.data(this, j, a);
                b.triggerHandler("changeData" + d, c)
            })
        }, null, a, arguments.length > 1, null, false)
    },removeData: function(j) {
        return this.each(function() {
            i.removeData(this, j)
        })
    }});
    i.extend({_mark: function(j, a) {
        if (j) {
            a = (a || "fx") + "mark";
            i._data(j,
                a, (i._data(j, a) || 0) + 1)
        }
    },_unmark: function(j, a, b) {
        if (j !== true) {
            b = a;
            a = j;
            j = false
        }
        if (a) {
            var b = b || "fx", c = b + "mark";
            if (j = j ? 0 : (i._data(a, c) || 1) - 1)
                i._data(a, c, j);
            else {
                i.removeData(a, c, true);
                f(a, b, "mark")
            }
        }
    },queue: function(j, a, b) {
        var c;
        if (j) {
            a = (a || "fx") + "queue";
            c = i._data(j, a);
            b && (!c || i.isArray(b) ? c = i._data(j, a, i.makeArray(b)) : c.push(b));
            return c || []
        }
    },dequeue: function(j, a) {
        var a = a || "fx", b = i.queue(j, a), c = b.shift(), d = {};
        c === "inprogress" && (c = b.shift());
        if (c) {
            a === "fx" && b.unshift("inprogress");
            i._data(j, a + ".run",
                d);
            c.call(j, function() {
                i.dequeue(j, a)
            }, d)
        }
        if (!b.length) {
            i.removeData(j, a + "queue " + a + ".run", true);
            f(j, a, "queue")
        }
    }});
    i.fn.extend({queue: function(j, a) {
        var b = 2;
        if (typeof j !== "string") {
            a = j;
            j = "fx";
            b--
        }
        return arguments.length < b ? i.queue(this[0], j) : a === g ? this : this.each(function() {
            var b = i.queue(this, j, a);
            j === "fx" && b[0] !== "inprogress" && i.dequeue(this, j)
        })
    },dequeue: function(j) {
        return this.each(function() {
            i.dequeue(this, j)
        })
    },delay: function(j, a) {
        j = i.fx ? i.fx.speeds[j] || j : j;
        return this.queue(a || "fx", function(a,
                                              b) {
            var i = setTimeout(a, j);
            b.stop = function() {
                clearTimeout(i)
            }
        })
    },clearQueue: function(j) {
        return this.queue(j || "fx", [])
    },promise: function(j, a) {
        function b() {
            --k || c.resolveWith(d, [d])
        }
        if (typeof j !== "string") {
            a = j;
            j = g
        }
        for (var j = j || "fx", c = i.Deferred(), d = this, f = d.length, k = 1, l = j + "defer", o = j + "queue", n = j + "mark", m; f--; )
            if (m = i.data(d[f], l, g, true) || (i.data(d[f], o, g, true) || i.data(d[f], n, g, true)) && i.data(d[f], l, i.Callbacks("once memory"), true)) {
                k++;
                m.add(b)
            }
        b();
        return c.promise(a)
    }});
    var vb = /[\n\t\r]/g, Na = /\s+/, gc =
        /\r/g, hc = /^(?:button|input)$/i, ic = /^(?:button|input|object|select|textarea)$/i, jc = /^a(?:rea)?$/i, wb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, xb = i.support.getSetAttribute, ja, yb, zb;
    i.fn.extend({attr: function(j, a) {
        return i.access(this, i.attr, j, a, arguments.length > 1)
    },removeAttr: function(j) {
        return this.each(function() {
            i.removeAttr(this, j)
        })
    },prop: function(j, a) {
        return i.access(this, i.prop, j, a, arguments.length > 1)
    },removeProp: function(j) {
        j =
            i.propFix[j] || j;
        return this.each(function() {
            try {
                this[j] = g;
                delete this[j]
            } catch (a) {
            }
        })
    },addClass: function(j) {
        var a, b, c, d, f, k, l;
        if (i.isFunction(j))
            return this.each(function(a) {
                i(this).addClass(j.call(this, a, this.className))
            });
        if (j && typeof j === "string") {
            a = j.split(Na);
            b = 0;
            for (c = this.length; b < c; b++) {
                d = this[b];
                if (d.nodeType === 1)
                    if (!d.className && a.length === 1)
                        d.className = j;
                    else {
                        f = " " + d.className + " ";
                        k = 0;
                        for (l = a.length; k < l; k++)
                            ~f.indexOf(" " + a[k] + " ") || (f = f + (a[k] + " "));
                        d.className = i.trim(f)
                    }
            }
        }
        return this
    },
        removeClass: function(j) {
            var a, b, c, d, f, k, l;
            if (i.isFunction(j))
                return this.each(function(a) {
                    i(this).removeClass(j.call(this, a, this.className))
                });
            if (j && typeof j === "string" || j === g) {
                a = (j || "").split(Na);
                b = 0;
                for (c = this.length; b < c; b++) {
                    d = this[b];
                    if (d.nodeType === 1 && d.className)
                        if (j) {
                            f = (" " + d.className + " ").replace(vb, " ");
                            k = 0;
                            for (l = a.length; k < l; k++)
                                f = f.replace(" " + a[k] + " ", " ");
                            d.className = i.trim(f)
                        } else
                            d.className = ""
                }
            }
            return this
        },toggleClass: function(j, a) {
            var b = typeof j, c = typeof a === "boolean";
            return i.isFunction(j) ?
                this.each(function(b) {
                    i(this).toggleClass(j.call(this, b, this.className, a), a)
                }) : this.each(function() {
                if (b === "string")
                    for (var d, f = 0, k = i(this), l = a, g = j.split(Na); d = g[f++]; ) {
                        l = c ? l : !k.hasClass(d);
                        k[l ? "addClass" : "removeClass"](d)
                    }
                else if (b === "undefined" || b === "boolean") {
                    this.className && i._data(this, "__className__", this.className);
                    this.className = this.className || j === false ? "" : i._data(this, "__className__") || ""
                }
            })
        },hasClass: function(j) {
            for (var j = " " + j + " ", a = 0, b = this.length; a < b; a++)
                if (this[a].nodeType === 1 && (" " +
                    this[a].className + " ").replace(vb, " ").indexOf(j) > -1)
                    return true;
            return false
        },val: function(j) {
            var a, b, c, d = this[0];
            if (arguments.length) {
                c = i.isFunction(j);
                return this.each(function(b) {
                    var d = i(this);
                    if (this.nodeType === 1) {
                        b = c ? j.call(this, b, d.val()) : j;
                        b == null ? b = "" : typeof b === "number" ? b = b + "" : i.isArray(b) && (b = i.map(b, function(j) {
                            return j == null ? "" : j + ""
                        }));
                        a = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()];
                        if (!a || !("set" in a) || a.set(this, b, "value") === g)
                            this.value = b
                    }
                })
            }
            if (d) {
                if ((a = i.valHooks[d.type] ||
                    i.valHooks[d.nodeName.toLowerCase()]) && "get" in a && (b = a.get(d, "value")) !== g)
                    return b;
                b = d.value;
                return typeof b === "string" ? b.replace(gc, "") : b == null ? "" : b
            }
        }});
    i.extend({valHooks: {option: {get: function(j) {
        var a = j.attributes.value;
        return !a || a.specified ? j.value : j.text
    }},select: {get: function(j) {
        var a, b, c = j.selectedIndex, d = [], f = j.options, k = j.type === "select-one";
        if (c < 0)
            return null;
        j = k ? c : 0;
        for (b = k ? c + 1 : f.length; j < b; j++) {
            a = f[j];
            if (a.selected && (i.support.optDisabled ? !a.disabled : a.getAttribute("disabled") === null) &&
                (!a.parentNode.disabled || !i.nodeName(a.parentNode, "optgroup"))) {
                a = i(a).val();
                if (k)
                    return a;
                d.push(a)
            }
        }
        return k && !d.length && f.length ? i(f[c]).val() : d
    },set: function(j, a) {
        var b = i.makeArray(a);
        i(j).find("option").each(function() {
            this.selected = i.inArray(i(this).val(), b) >= 0
        });
        if (!b.length)
            j.selectedIndex = -1;
        return b
    }}},attrFn: {val: !0,css: !0,html: !0,text: !0,data: !0,width: !0,height: !0,offset: !0},attr: function(j, a, b, c) {
        var d, f, k = j.nodeType;
        if (j && !(k === 3 || k === 8 || k === 2)) {
            if (c && a in i.attrFn)
                return i(j)[a](b);
            if (typeof j.getAttribute === "undefined")
                return i.prop(j, a, b);
            if (c = k !== 1 || !i.isXMLDoc(j)) {
                a = a.toLowerCase();
                f = i.attrHooks[a] || (wb.test(a) ? yb : ja)
            }
            if (b !== g)
                if (b === null)
                    i.removeAttr(j, a);
                else {
                    if (f && "set" in f && c && (d = f.set(j, b, a)) !== g)
                        return d;
                    j.setAttribute(a, "" + b);
                    return b
                }
            else {
                if (f && "get" in f && c && (d = f.get(j, a)) !== null)
                    return d;
                d = j.getAttribute(a);
                return d === null ? g : d
            }
        }
    },removeAttr: function(j, a) {
        var b, c, d, f, k, l = 0;
        if (a && j.nodeType === 1) {
            c = a.toLowerCase().split(Na);
            for (f = c.length; l < f; l++)
                if (d = c[l]) {
                    b = i.propFix[d] ||
                        d;
                    (k = wb.test(d)) || i.attr(j, d, "");
                    j.removeAttribute(xb ? d : b);
                    k && b in j && (j[b] = false)
                }
        }
    },attrHooks: {type: {set: function(j, a) {
        if (hc.test(j.nodeName) && j.parentNode)
            i.error("type property can't be changed");
        else if (!i.support.radioValue && a === "radio" && i.nodeName(j, "input")) {
            var b = j.value;
            j.setAttribute("type", a);
            if (b)
                j.value = b;
            return a
        }
    }},value: {get: function(j, a) {
        return ja && i.nodeName(j, "button") ? ja.get(j, a) : a in j ? j.value : null
    },set: function(j, a, b) {
        if (ja && i.nodeName(j, "button"))
            return ja.set(j, a, b);
        j.value =
            a
    }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(j, a, b) {
        var c, d, f;
        f = j.nodeType;
        if (j && !(f === 3 || f === 8 || f === 2)) {
            if (f = f !== 1 || !i.isXMLDoc(j)) {
                a = i.propFix[a] || a;
                d = i.propHooks[a]
            }
            return b !== g ? d && "set" in d && (c = d.set(j, b, a)) !== g ? c : j[a] = b : d && "get" in d && (c = d.get(j, a)) !==
                null ? c : j[a]
        }
    },propHooks: {tabIndex: {get: function(j) {
        var a = j.getAttributeNode("tabindex");
        return a && a.specified ? parseInt(a.value, 10) : ic.test(j.nodeName) || jc.test(j.nodeName) && j.href ? 0 : g
    }}}});
    i.attrHooks.tabindex = i.propHooks.tabIndex;
    yb = {get: function(j, a) {
        var b, c = i.prop(j, a);
        return c === true || typeof c !== "boolean" && (b = j.getAttributeNode(a)) && b.nodeValue !== false ? a.toLowerCase() : g
    },set: function(j, a, b) {
        if (a === false)
            i.removeAttr(j, b);
        else {
            a = i.propFix[b] || b;
            a in j && (j[a] = true);
            j.setAttribute(b, b.toLowerCase())
        }
        return b
    }};
    xb || (zb = {name: !0,id: !0,coords: !0}, ja = i.valHooks.button = {get: function(j, a) {
        var b;
        return (b = j.getAttributeNode(a)) && (zb[a] ? b.nodeValue !== "" : b.specified) ? b.nodeValue : g
    },set: function(j, a, b) {
        var i = j.getAttributeNode(b);
        if (!i) {
            i = o.createAttribute(b);
            j.setAttributeNode(i)
        }
        return i.nodeValue = a + ""
    }}, i.attrHooks.tabindex.set = ja.set, i.each(["width", "height"], function(j, a) {
        i.attrHooks[a] = i.extend(i.attrHooks[a], {set: function(j, b) {
            if (b === "") {
                j.setAttribute(a, "auto");
                return b
            }
        }})
    }), i.attrHooks.contenteditable = {get: ja.get,
        set: function(j, a, b) {
            a === "" && (a = "false");
            ja.set(j, a, b)
        }});
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(j, a) {
        i.attrHooks[a] = i.extend(i.attrHooks[a], {get: function(j) {
            j = j.getAttribute(a, 2);
            return j === null ? g : j
        }})
    });
    i.support.style || (i.attrHooks.style = {get: function(j) {
        return j.style.cssText.toLowerCase() || g
    },set: function(j, a) {
        return j.style.cssText = "" + a
    }});
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {get: function(j) {
        if (j = j.parentNode) {
            j.selectedIndex;
            j.parentNode && j.parentNode.selectedIndex
        }
        return null
    }}));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {get: function(j) {
            return j.getAttribute("value") === null ? "on" : j.value
        }}
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {set: function(j, a) {
            if (i.isArray(a))
                return j.checked = i.inArray(i(j).val(), a) >= 0
        }})
    });
    var eb = /^(?:textarea|input|select)$/i, Ab = /^([^\.]*)?(?:\.(.+))?$/, kc = /(?:^|\s)hover(\.\S+)?\b/,
        lc = /^key/, mc = /^(?:mouse|contextmenu)|click/, Bb = /^(?:focusinfocus|focusoutblur)$/, nc = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, oc = function(j) {
            if (j = nc.exec(j)) {
                j[1] = (j[1] || "").toLowerCase();
                j[3] = j[3] && RegExp("(?:^|\\s)" + j[3] + "(?:\\s|$)")
            }
            return j
        }, Cb = function(j) {
            return i.event.special.hover ? j : j.replace(kc, "mouseenter$1 mouseleave$1")
        };
    i.event = {add: function(j, a, b, c, d) {
        var f, k, l, o, n, m, s, B, r;
        if (!(j.nodeType === 3 || j.nodeType === 8 || !a || !b || !(f = i._data(j)))) {
            if (b.handler) {
                s = b;
                b = s.handler;
                d = s.selector
            }
            if (!b.guid)
                b.guid =
                    i.guid++;
            l = f.events;
            if (!l)
                f.events = l = {};
            k = f.handle;
            if (!k) {
                f.handle = k = function(j) {
                    return typeof i !== "undefined" && (!j || i.event.triggered !== j.type) ? i.event.dispatch.apply(k.elem, arguments) : g
                };
                k.elem = j
            }
            a = i.trim(Cb(a)).split(" ");
            for (f = 0; f < a.length; f++) {
                o = Ab.exec(a[f]) || [];
                n = o[1];
                m = (o[2] || "").split(".").sort();
                r = i.event.special[n] || {};
                n = (d ? r.delegateType : r.bindType) || n;
                r = i.event.special[n] || {};
                o = i.extend({type: n,origType: o[1],data: c,handler: b,guid: b.guid,selector: d,quick: d && oc(d),namespace: m.join(".")},
                    s);
                B = l[n];
                if (!B) {
                    B = l[n] = [];
                    B.delegateCount = 0;
                    if (!r.setup || r.setup.call(j, c, m, k) === false)
                        j.addEventListener ? j.addEventListener(n, k, false) : j.attachEvent && j.attachEvent("on" + n, k)
                }
                if (r.add) {
                    r.add.call(j, o);
                    if (!o.handler.guid)
                        o.handler.guid = b.guid
                }
                d ? B.splice(B.delegateCount++, 0, o) : B.push(o);
                i.event.global[n] = true
            }
            j = null
        }
    },global: {},remove: function(j, a, b, c, d) {
        var f = i.hasData(j) && i._data(j), k, l, o, g, n, m, s, B, r, J;
        if (f && (s = f.events)) {
            a = i.trim(Cb(a || "")).split(" ");
            for (k = 0; k < a.length; k++) {
                l = Ab.exec(a[k]) || [];
                o = g = l[1];
                l = l[2];
                if (o) {
                    B = i.event.special[o] || {};
                    o = (c ? B.delegateType : B.bindType) || o;
                    r = s[o] || [];
                    n = r.length;
                    l = l ? RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (m = 0; m < r.length; m++) {
                        J = r[m];
                        if ((d || g === J.origType) && (!b || b.guid === J.guid) && (!l || l.test(J.namespace)) && (!c || c === J.selector || c === "**" && J.selector)) {
                            r.splice(m--, 1);
                            J.selector && r.delegateCount--;
                            B.remove && B.remove.call(j, J)
                        }
                    }
                    if (r.length === 0 && n !== r.length) {
                        (!B.teardown || B.teardown.call(j, l) === false) && i.removeEvent(j, o,
                            f.handle);
                        delete s[o]
                    }
                } else
                    for (o in s)
                        i.event.remove(j, o + a[k], b, c, true)
            }
            if (i.isEmptyObject(s)) {
                if (a = f.handle)
                    a.elem = null;
                i.removeData(j, ["events", "handle"], true)
            }
        }
    },customEvent: {getData: !0,setData: !0,changeData: !0},trigger: function(j, a, b, d) {
        if (!b || !(b.nodeType === 3 || b.nodeType === 8)) {
            var f = j.type || j, k = [], l, o, n, m, s;
            if (!Bb.test(f + i.event.triggered)) {
                if (f.indexOf("!") >= 0) {
                    f = f.slice(0, -1);
                    l = true
                }
                if (f.indexOf(".") >= 0) {
                    k = f.split(".");
                    f = k.shift();
                    k.sort()
                }
                if (b && !i.event.customEvent[f] || i.event.global[f]) {
                    j =
                        typeof j === "object" ? j[i.expando] ? j : new i.Event(f, j) : new i.Event(f);
                    j.type = f;
                    j.isTrigger = true;
                    j.exclusive = l;
                    j.namespace = k.join(".");
                    j.namespace_re = j.namespace ? RegExp("(^|\\.)" + k.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    l = f.indexOf(":") < 0 ? "on" + f : "";
                    if (b) {
                        j.result = g;
                        if (!j.target)
                            j.target = b;
                        a = a != null ? i.makeArray(a) : [];
                        a.unshift(j);
                        n = i.event.special[f] || {};
                        if (!(n.trigger && n.trigger.apply(b, a) === false)) {
                            s = [[b, n.bindType || f]];
                            if (!d && !n.noBubble && !i.isWindow(b)) {
                                m = n.delegateType || f;
                                k = Bb.test(m + f) ? b : b.parentNode;
                                for (o = null; k; k = k.parentNode) {
                                    s.push([k, m]);
                                    o = k
                                }
                                o && o === b.ownerDocument && s.push([o.defaultView || o.parentWindow || c, m])
                            }
                            for (o = 0; o < s.length && !j.isPropagationStopped(); o++) {
                                k = s[o][0];
                                j.type = s[o][1];
                                (m = (i._data(k, "events") || {})[j.type] && i._data(k, "handle")) && m.apply(k, a);
                                (m = l && k[l]) && (i.acceptData(k) && m.apply(k, a) === false) && j.preventDefault()
                            }
                            j.type = f;
                            if (!d && !j.isDefaultPrevented() && (!n._default || n._default.apply(b.ownerDocument, a) === false) && !(f === "click" && i.nodeName(b, "a")) && i.acceptData(b))
                                if (l && b[f] &&
                                    (f !== "focus" && f !== "blur" || j.target.offsetWidth !== 0) && !i.isWindow(b)) {
                                    (o = b[l]) && (b[l] = null);
                                    i.event.triggered = f;
                                    b[f]();
                                    i.event.triggered = g;
                                    o && (b[l] = o)
                                }
                            return j.result
                        }
                    } else {
                        b = i.cache;
                        for (o in b)
                            b[o].events && b[o].events[f] && i.event.trigger(j, a, b[o].handle.elem, true)
                    }
                }
            }
        }
    },dispatch: function(j) {
        var j = i.event.fix(j || c.event), a = (i._data(this, "events") || {})[j.type] || [], b = a.delegateCount, d = [].slice.call(arguments, 0), f = !j.exclusive && !j.namespace, k = i.event.special[j.type] || {}, l = [], o, n, m, s, B, r, J;
        d[0] = j;
        j.delegateTarget =
            this;
        if (!(k.preDispatch && k.preDispatch.call(this, j) === false)) {
            if (b && !(j.button && j.type === "click")) {
                m = i(this);
                m.context = this.ownerDocument || this;
                for (n = j.target; n != this; n = n.parentNode || this)
                    if (n.disabled !== true) {
                        B = {};
                        r = [];
                        m[0] = n;
                        for (o = 0; o < b; o++) {
                            s = a[o];
                            J = s.selector;
                            if (B[J] === g) {
                                var z = B, u = J, q;
                                if (s.quick) {
                                    q = s.quick;
                                    var p = n.attributes || {};
                                    q = (!q[1] || n.nodeName.toLowerCase() === q[1]) && (!q[2] || (p.id || {}).value === q[2]) && (!q[3] || q[3].test((p["class"] || {}).value))
                                } else
                                    q = m.is(J);
                                z[u] = q
                            }
                            B[J] && r.push(s)
                        }
                        r.length &&
                        l.push({elem: n,matches: r})
                    }
            }
            a.length > b && l.push({elem: this,matches: a.slice(b)});
            for (o = 0; o < l.length && !j.isPropagationStopped(); o++) {
                b = l[o];
                j.currentTarget = b.elem;
                for (a = 0; a < b.matches.length && !j.isImmediatePropagationStopped(); a++) {
                    s = b.matches[a];
                    if (f || !j.namespace && !s.namespace || j.namespace_re && j.namespace_re.test(s.namespace)) {
                        j.data = s.data;
                        j.handleObj = s;
                        s = ((i.event.special[s.origType] || {}).handle || s.handler).apply(b.elem, d);
                        if (s !== g) {
                            j.result = s;
                            if (s === false) {
                                j.preventDefault();
                                j.stopPropagation()
                            }
                        }
                    }
                }
            }
            k.postDispatch &&
            k.postDispatch.call(this, j);
            return j.result
        }
    },props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp app which".split(" "),fixHooks: {},keyHooks: {props: ["char", "charCode", "key", "keyCode"],filter: function(j, a) {
        if (j.which == null)
            j.which = a.charCode != null ? a.charCode : a.keyCode;
        return j
    }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(j, a) {
            var b, i, c = a.button, d = a.fromElement;
            if (j.pageX == null && a.clientX != null) {
                b = j.target.ownerDocument || o;
                i = b.documentElement;
                b = b.body;
                j.pageX = a.clientX + (i && i.scrollLeft || b && b.scrollLeft || 0) - (i && i.clientLeft || b && b.clientLeft || 0);
                j.pageY = a.clientY + (i && i.scrollTop || b && b.scrollTop || 0) - (i && i.clientTop || b && b.clientTop || 0)
            }
            if (!j.relatedTarget && d)
                j.relatedTarget = d === j.target ? a.toElement : d;
            if (!j.which && c !== g)
                j.which = c & 1 ? 1 : c & 2 ? 3 : c & 4 ? 2 : 0;
            return j
        }},fix: function(j) {
        if (j[i.expando])
            return j;
        var a,
            b, c = j, d = i.event.fixHooks[j.type] || {}, f = d.props ? this.props.concat(d.props) : this.props, j = i.Event(c);
        for (a = f.length; a; ) {
            b = f[--a];
            j[b] = c[b]
        }
        if (!j.target)
            j.target = c.srcElement || o;
        if (j.target.nodeType === 3)
            j.target = j.target.parentNode;
        if (j.metaKey === g)
            j.metaKey = j.ctrlKey;
        return d.filter ? d.filter(j, c) : j
    },special: {ready: {setup: i.bindReady},load: {noBubble: !0},focus: {delegateType: "focusin"},blur: {delegateType: "focusout"},beforeunload: {setup: function(j, a, b) {
        if (i.isWindow(this))
            this.onbeforeunload = b
    },teardown: function(j,
                         a) {
        if (this.onbeforeunload === a)
            this.onbeforeunload = null
    }}},simulate: function(j, a, b, c) {
        j = i.extend(new i.Event, b, {type: j,isSimulated: true,originalEvent: {}});
        c ? i.event.trigger(j, null, a) : i.event.dispatch.call(a, j);
        j.isDefaultPrevented() && b.preventDefault()
    }};
    i.event.handle = i.event.dispatch;
    i.removeEvent = o.removeEventListener ? function(j, a, b) {
        j.removeEventListener && j.removeEventListener(a, b, false)
    } : function(j, a, b) {
        j.detachEvent && j.detachEvent("on" + a, b)
    };
    i.Event = function(j, b) {
        if (!(this instanceof i.Event))
            return new i.Event(j,
                b);
        if (j && j.type) {
            this.originalEvent = j;
            this.type = j.type;
            this.isDefaultPrevented = j.defaultPrevented || j.returnValue === false || j.getPreventDefault && j.getPreventDefault() ? a : m
        } else
            this.type = j;
        b && i.extend(this, b);
        this.timeStamp = j && j.timeStamp || i.now();
        this[i.expando] = true
    };
    i.Event.prototype = {preventDefault: function() {
        this.isDefaultPrevented = a;
        var j = this.originalEvent;
        if (j)
            j.preventDefault ? j.preventDefault() : j.returnValue = false
    },stopPropagation: function() {
        this.isPropagationStopped = a;
        var j = this.originalEvent;
        if (j) {
            j.stopPropagation && j.stopPropagation();
            j.cancelBubble = true
        }
    },stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = a;
        this.stopPropagation()
    },isDefaultPrevented: m,isPropagationStopped: m,isImmediatePropagationStopped: m};
    i.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(j, a) {
        i.event.special[j] = {delegateType: a,bindType: a,handle: function(j) {
            var b = j.relatedTarget, c = j.handleObj, d;
            if (!b || b !== this && !i.contains(this, b)) {
                j.type = c.origType;
                d = c.handler.apply(this, arguments);
                j.type = a
            }
            return d
        }}
    });
    i.support.submitBubbles || (i.event.special.submit = {setup: function() {
        if (i.nodeName(this, "form"))
            return false;
        i.event.add(this, "click._submit keypress._submit", function(j) {
            j = j.target;
            if ((j = i.nodeName(j, "input") || i.nodeName(j, "button") ? j.form : g) && !j._submit_attached) {
                i.event.add(j, "submit._submit", function(j) {
                    j._submit_bubble = true
                });
                j._submit_attached = true
            }
        })
    },postDispatch: function(j) {
        if (j._submit_bubble) {
            delete j._submit_bubble;
            this.parentNode && !j.isTrigger && i.event.simulate("submit",
                this.parentNode, j, true)
        }
    },teardown: function() {
        if (i.nodeName(this, "form"))
            return false;
        i.event.remove(this, "._submit")
    }});
    i.support.changeBubbles || (i.event.special.change = {setup: function() {
        if (eb.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio") {
                i.event.add(this, "propertychange._change", function(j) {
                    if (j.originalEvent.propertyName === "checked")
                        this._just_changed = true
                });
                i.event.add(this, "click._change", function(j) {
                    if (this._just_changed && !j.isTrigger) {
                        this._just_changed = false;
                        i.event.simulate("change",
                            this, j, true)
                    }
                })
            }
            return false
        }
        i.event.add(this, "beforeactivate._change", function(j) {
            j = j.target;
            if (eb.test(j.nodeName) && !j._change_attached) {
                i.event.add(j, "change._change", function(j) {
                    this.parentNode && (!j.isSimulated && !j.isTrigger) && i.event.simulate("change", this.parentNode, j, true)
                });
                j._change_attached = true
            }
        })
    },handle: function(j) {
        var a = j.target;
        if (this !== a || j.isSimulated || j.isTrigger || a.type !== "radio" && a.type !== "checkbox")
            return j.handleObj.handler.apply(this, arguments)
    },teardown: function() {
        i.event.remove(this,
            "._change");
        return eb.test(this.nodeName)
    }});
    i.support.focusinBubbles || i.each({focus: "focusin",blur: "focusout"}, function(j, a) {
        var b = 0, c = function(j) {
            i.event.simulate(a, j.target, i.event.fix(j), true)
        };
        i.event.special[a] = {setup: function() {
            b++ === 0 && o.addEventListener(j, c, true)
        },teardown: function() {
            --b === 0 && o.removeEventListener(j, c, true)
        }}
    });
    i.fn.extend({on: function(j, a, b, c, d) {
        var f, k;
        if (typeof j === "object") {
            if (typeof a !== "string") {
                b = b || a;
                a = g
            }
            for (k in j)
                this.on(k, a, b, j[k], d);
            return this
        }
        if (b == null && c ==
            null) {
            c = a;
            b = a = g
        } else if (c == null)
            if (typeof a === "string") {
                c = b;
                b = g
            } else {
                c = b;
                b = a;
                a = g
            }
        if (c === false)
            c = m;
        else if (!c)
            return this;
        if (d === 1) {
            f = c;
            c = function(j) {
                i().off(j);
                return f.apply(this, arguments)
            };
            c.guid = f.guid || (f.guid = i.guid++)
        }
        return this.each(function() {
            i.event.add(this, j, c, b, a)
        })
    },one: function(j, a, b, i) {
        return this.on(j, a, b, i, 1)
    },off: function(j, a, b) {
        if (j && j.preventDefault && j.handleObj) {
            var c = j.handleObj;
            i(j.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler);
            return this
        }
        if (typeof j === "object") {
            for (c in j)
                this.off(c, a, j[c]);
            return this
        }
        if (a === false || typeof a === "function") {
            b = a;
            a = g
        }
        b === false && (b = m);
        return this.each(function() {
            i.event.remove(this, j, b, a)
        })
    },bind: function(j, a, b) {
        return this.on(j, null, a, b)
    },unbind: function(j, a) {
        return this.off(j, null, a)
    },live: function(j, a, b) {
        i(this.context).on(j, this.selector, a, b);
        return this
    },die: function(j, a) {
        i(this.context).off(j, this.selector || "**", a);
        return this
    },delegate: function(j, a, b, i) {
        return this.on(a, j, b, i)
    },undelegate: function(j,
                           a, b) {
        return arguments.length == 1 ? this.off(j, "**") : this.off(a, j, b)
    },trigger: function(j, a) {
        return this.each(function() {
            i.event.trigger(j, a, this)
        })
    },triggerHandler: function(j, a) {
        if (this[0])
            return i.event.trigger(j, a, this[0], true)
    },toggle: function(j) {
        var a = arguments, b = j.guid || i.guid++, c = 0, d = function(b) {
            var d = (i._data(this, "lastToggle" + j.guid) || 0) % c;
            i._data(this, "lastToggle" + j.guid, d + 1);
            b.preventDefault();
            return a[d].apply(this, arguments) || false
        };
        for (d.guid = b; c < a.length; )
            a[c++].guid = b;
        return this.click(d)
    },
        hover: function(j, a) {
            return this.mouseenter(j).mouseleave(a || j)
        }});
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(j, a) {
        i.fn[a] = function(j, b) {
            if (b == null) {
                b = j;
                j = null
            }
            return arguments.length > 0 ? this.on(a, null, j, b) : this.trigger(a)
        };
        i.attrFn && (i.attrFn[a] = true);
        if (lc.test(a))
            i.event.fixHooks[a] = i.event.keyHooks;
        if (mc.test(a))
            i.event.fixHooks[a] =
                i.event.mouseHooks
    });
    var Db = function(j, a, b, i, c, d) {
        for (var c = 0, f = i.length; c < f; c++) {
            var k = i[c];
            if (k) {
                for (var l = false, k = k[j]; k; ) {
                    if (k[ya] === b) {
                        l = i[k.sizset];
                        break
                    }
                    if (k.nodeType === 1 && !d) {
                        k[ya] = b;
                        k.sizset = c
                    }
                    if (k.nodeName.toLowerCase() === a) {
                        l = k;
                        break
                    }
                    k = k[j]
                }
                i[c] = l
            }
        }
    }, Eb = function(j, a, b, i, c, d) {
        for (var c = 0, f = i.length; c < f; c++) {
            var k = i[c];
            if (k) {
                for (var l = false, k = k[j]; k; ) {
                    if (k[ya] === b) {
                        l = i[k.sizset];
                        break
                    }
                    if (k.nodeType === 1) {
                        if (!d) {
                            k[ya] = b;
                            k.sizset = c
                        }
                        if (typeof a !== "string") {
                            if (k === a) {
                                l = true;
                                break
                            }
                        } else if (F.filter(a,
                            [k]).length > 0) {
                            l = k;
                            break
                        }
                    }
                    k = k[j]
                }
                i[c] = l
            }
        }
    }, fb = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, ya = "sizcache" + (Math.random() + "").replace(".", ""), gb = 0, Fb = Object.prototype.toString, Oa = !1, Gb = !0, za = /\\/g, pc = /\r\n/g, Pa = /\W/;
    [0, 0].sort(function() {
        Gb = false;
        return 0
    });
    var F = function(j, a, b, i) {
        var b = b || [], c = a = a || o;
        if (a.nodeType !== 1 && a.nodeType !== 9)
            return [];
        if (!j || typeof j !== "string")
            return b;
        var d, f, k, l, g, n = true, m = F.isXML(a),
            s = [], B = j;
        do {
            fb.exec("");
            if (d = fb.exec(B)) {
                B = d[3];
                s.push(d[1]);
                if (d[2]) {
                    l = d[3];
                    break
                }
            }
        } while (d);
        if (s.length > 1 && Hb.exec(j))
            if (s.length === 2 && K.relative[s[0]])
                f = Ib(s[0] + s[1], a, i);
            else
                for (f = K.relative[s[0]] ? [a] : F(s.shift(), a); s.length; ) {
                    j = s.shift();
                    K.relative[j] && (j = j + s.shift());
                    f = Ib(j, f, i)
                }
        else {
            if (!i && s.length > 1 && a.nodeType === 9 && !m && K.match.ID.test(s[0]) && !K.match.ID.test(s[s.length - 1])) {
                d = F.find(s.shift(), a, m);
                a = d.expr ? F.filter(d.expr, d.set)[0] : d.set[0]
            }
            if (a) {
                d = i ? {expr: s.pop(),set: aa(i)} : F.find(s.pop(),
                    s.length === 1 && (s[0] === "~" || s[0] === "+") && a.parentNode ? a.parentNode : a, m);
                f = d.expr ? F.filter(d.expr, d.set) : d.set;
                for (s.length > 0 ? k = aa(f) : n = false; s.length; ) {
                    d = g = s.pop();
                    K.relative[g] ? d = s.pop() : g = "";
                    d == null && (d = a);
                    K.relative[g](k, d, m)
                }
            } else
                k = []
        }
        k || (k = f);
        k || F.error(g || j);
        if (Fb.call(k) === "[object Array]")
            if (n)
                if (a && a.nodeType === 1)
                    for (j = 0; k[j] != null; j++)
                        k[j] && (k[j] === true || k[j].nodeType === 1 && F.contains(a, k[j])) && b.push(f[j]);
                else
                    for (j = 0; k[j] != null; j++)
                        k[j] && k[j].nodeType === 1 && b.push(f[j]);
            else
                b.push.apply(b,
                    k);
        else
            aa(k, b);
        if (l) {
            F(l, c, b, i);
            F.uniqueSort(b)
        }
        return b
    };
    F.uniqueSort = function(j) {
        if (Qa) {
            Oa = Gb;
            j.sort(Qa);
            if (Oa)
                for (var a = 1; a < j.length; a++)
                    j[a] === j[a - 1] && j.splice(a--, 1)
        }
        return j
    };
    F.matches = function(j, a) {
        return F(j, null, null, a)
    };
    F.matchesSelector = function(j, a) {
        return F(a, null, null, [j]).length > 0
    };
    F.find = function(j, a, b) {
        var i, c, d, f, k, l;
        if (!j)
            return [];
        c = 0;
        for (d = K.order.length; c < d; c++) {
            k = K.order[c];
            if (f = K.leftMatch[k].exec(j)) {
                l = f[1];
                f.splice(1, 1);
                if (l.substr(l.length - 1) !== "\\") {
                    f[1] = (f[1] || "").replace(za,
                        "");
                    i = K.find[k](f, a, b);
                    if (i != null) {
                        j = j.replace(K.match[k], "");
                        break
                    }
                }
            }
        }
        i || (i = typeof a.getElementsByTagName !== "undefined" ? a.getElementsByTagName("*") : []);
        return {set: i,expr: j}
    };
    F.filter = function(j, a, b, i) {
        for (var c, d, f, k, l, o, n, m, s = j, B = [], r = a, J = a && a[0] && F.isXML(a[0]); j && a.length; ) {
            for (f in K.filter)
                if ((c = K.leftMatch[f].exec(j)) != null && c[2]) {
                    o = K.filter[f];
                    l = c[1];
                    d = false;
                    c.splice(1, 1);
                    if (l.substr(l.length - 1) !== "\\") {
                        r === B && (B = []);
                        if (K.preFilter[f])
                            if (c = K.preFilter[f](c, r, b, B, i, J)) {
                                if (c === true)
                                    continue
                            } else
                                d =
                                    k = true;
                        if (c)
                            for (n = 0; (l = r[n]) != null; n++)
                                if (l) {
                                    k = o(l, c, n, r);
                                    m = i ^ k;
                                    if (b && k != null)
                                        m ? d = true : r[n] = false;
                                    else if (m) {
                                        B.push(l);
                                        d = true
                                    }
                                }
                        if (k !== g) {
                            b || (r = B);
                            j = j.replace(K.match[f], "");
                            if (!d)
                                return [];
                            break
                        }
                    }
                }
            if (j === s)
                if (d == null)
                    F.error(j);
                else
                    break;
            s = j
        }
        return r
    };
    F.error = function(j) {
        throw Error("Syntax error, unrecognized expression: " + j);
    };
    var hb = F.getText = function(j) {
        var a, b;
        a = j.nodeType;
        var i = "";
        if (a)
            if (a === 1 || a === 9 || a === 11) {
                if (typeof j.textContent === "string")
                    return j.textContent;
                if (typeof j.innerText === "string")
                    return j.innerText.replace(pc,
                        "");
                for (j = j.firstChild; j; j = j.nextSibling)
                    i = i + hb(j)
            } else {
                if (a === 3 || a === 4)
                    return j.nodeValue
            }
        else
            for (a = 0; b = j[a]; a++)
                b.nodeType !== 8 && (i = i + hb(b));
        return i
    }, K = F.selectors = {order: ["ID", "NAME", "TAG"],match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch: {},attrMap: {"class": "className","for": "htmlFor"},attrHandle: {href: function(j) {
        return j.getAttribute("href")
    },type: function(j) {
        return j.getAttribute("type")
    }},relative: {"+": function(j, a) {
        var b = typeof a === "string", i = b && !Pa.test(a), b = b && !i;
        i && (a = a.toLowerCase());
        for (var i = 0, c = j.length, d; i < c; i++)
            if (d = j[i]) {
                for (; (d = d.previousSibling) && d.nodeType !==
                    1; )
                    ;
                j[i] = b || d && d.nodeName.toLowerCase() === a ? d || false : d === a
            }
        b && F.filter(a, j, true)
    },">": function(j, a) {
        var b, i = typeof a === "string", c = 0, d = j.length;
        if (i && !Pa.test(a))
            for (a = a.toLowerCase(); c < d; c++) {
                if (b = j[c]) {
                    b = b.parentNode;
                    j[c] = b.nodeName.toLowerCase() === a ? b : false
                }
            }
        else {
            for (; c < d; c++)
                (b = j[c]) && (j[c] = i ? b.parentNode : b.parentNode === a);
            i && F.filter(a, j, true)
        }
    },"": function(j, a, b) {
        var i, c = gb++, d = Eb;
        if (typeof a === "string" && !Pa.test(a)) {
            i = a = a.toLowerCase();
            d = Db
        }
        d("parentNode", a, c, j, i, b)
    },"~": function(j, a, b) {
        var i,
            c = gb++, d = Eb;
        if (typeof a === "string" && !Pa.test(a)) {
            i = a = a.toLowerCase();
            d = Db
        }
        d("previousSibling", a, c, j, i, b)
    }},find: {ID: function(j, a, b) {
        if (typeof a.getElementById !== "undefined" && !b)
            return (j = a.getElementById(j[1])) && j.parentNode ? [j] : []
    },NAME: function(j, a) {
        if (typeof a.getElementsByName !== "undefined") {
            for (var b = [], i = a.getElementsByName(j[1]), c = 0, d = i.length; c < d; c++)
                i[c].getAttribute("name") === j[1] && b.push(i[c]);
            return b.length === 0 ? null : b
        }
    },TAG: function(j, a) {
        if (typeof a.getElementsByTagName !== "undefined")
            return a.getElementsByTagName(j[1])
    }},
        preFilter: {CLASS: function(j, a, b, i, c, d) {
            j = " " + j[1].replace(za, "") + " ";
            if (d)
                return j;
            for (var d = 0, f; (f = a[d]) != null; d++)
                f && (c ^ (f.className && (" " + f.className + " ").replace(/[\t\n\r]/g, " ").indexOf(j) >= 0) ? b || i.push(f) : b && (a[d] = false));
            return false
        },ID: function(j) {
            return j[1].replace(za, "")
        },TAG: function(j) {
            return j[1].replace(za, "").toLowerCase()
        },CHILD: function(j) {
            if (j[1] === "nth") {
                j[2] || F.error(j[0]);
                j[2] = j[2].replace(/^\+|\s*/g, "");
                var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(j[2] === "even" && "2n" || j[2] === "odd" &&
                    "2n+1" || !/\D/.test(j[2]) && "0n+" + j[2] || j[2]);
                j[2] = a[1] + (a[2] || 1) - 0;
                j[3] = a[3] - 0
            } else
                j[2] && F.error(j[0]);
            j[0] = gb++;
            return j
        },ATTR: function(j, a, b, i, c, d) {
            a = j[1] = j[1].replace(za, "");
            !d && K.attrMap[a] && (j[1] = K.attrMap[a]);
            j[4] = (j[4] || j[5] || "").replace(za, "");
            j[2] === "~=" && (j[4] = " " + j[4] + " ");
            return j
        },PSEUDO: function(j, a, b, i, c) {
            if (j[1] === "not")
                if ((fb.exec(j[3]) || "").length > 1 || /^\w/.test(j[3]))
                    j[3] = F(j[3], null, null, a);
                else {
                    j = F.filter(j[3], a, b, 1 ^ c);
                    b || i.push.apply(i, j);
                    return false
                }
            else if (K.match.POS.test(j[0]) ||
                K.match.CHILD.test(j[0]))
                return true;
            return j
        },POS: function(j) {
            j.unshift(true);
            return j
        }},filters: {enabled: function(j) {
            return j.disabled === false && j.type !== "hidden"
        },disabled: function(j) {
            return j.disabled === true
        },checked: function(j) {
            return j.checked === true
        },selected: function(j) {
            j.parentNode && j.parentNode.selectedIndex;
            return j.selected === true
        },parent: function(j) {
            return !!j.firstChild
        },empty: function(j) {
            return !j.firstChild
        },has: function(j, a, b) {
            return !!F(b[3], j).length
        },header: function(j) {
            return /h\d/i.test(j.nodeName)
        },
            text: function(j) {
                var a = j.getAttribute("type"), b = j.type;
                return j.nodeName.toLowerCase() === "input" && "text" === b && (a === b || a === null)
            },radio: function(j) {
                return j.nodeName.toLowerCase() === "input" && "radio" === j.type
            },checkbox: function(j) {
                return j.nodeName.toLowerCase() === "input" && "checkbox" === j.type
            },file: function(j) {
                return j.nodeName.toLowerCase() === "input" && "file" === j.type
            },password: function(j) {
                return j.nodeName.toLowerCase() === "input" && "password" === j.type
            },submit: function(j) {
                var a = j.nodeName.toLowerCase();
                return (a === "input" || a === "button") && "submit" === j.type
            },image: function(j) {
                return j.nodeName.toLowerCase() === "input" && "image" === j.type
            },reset: function(j) {
                var a = j.nodeName.toLowerCase();
                return (a === "input" || a === "button") && "reset" === j.type
            },button: function(j) {
                var a = j.nodeName.toLowerCase();
                return a === "input" && "button" === j.type || a === "button"
            },input: function(j) {
                return /input|select|textarea|button/i.test(j.nodeName)
            },focus: function(j) {
                return j === j.ownerDocument.activeElement
            }},setFilters: {first: function(j,
                                            a) {
            return a === 0
        },last: function(j, a, b, i) {
            return a === i.length - 1
        },even: function(j, a) {
            return a % 2 === 0
        },odd: function(a, b) {
            return b % 2 === 1
        },lt: function(a, b, i) {
            return b < i[3] - 0
        },gt: function(a, b, i) {
            return b > i[3] - 0
        },nth: function(a, b, i) {
            return i[3] - 0 === b
        },eq: function(a, b, i) {
            return i[3] - 0 === b
        }},filter: {PSEUDO: function(a, b, i, c) {
            var d = b[1], f = K.filters[d];
            if (f)
                return f(a, i, b, c);
            if (d === "contains")
                return (a.textContent || a.innerText || hb([a]) || "").indexOf(b[3]) >= 0;
            if (d === "not") {
                b = b[3];
                i = 0;
                for (c = b.length; i < c; i++)
                    if (b[i] ===
                        a)
                        return false;
                return true
            }
            F.error(d)
        },CHILD: function(a, b) {
            var i, c, d, f, k, l;
            i = b[1];
            l = a;
            switch (i) {
                case "only":
                case "first":
                    for (; l = l.previousSibling; )
                        if (l.nodeType === 1)
                            return false;
                    if (i === "first")
                        return true;
                    l = a;
                case "last":
                    for (; l = l.nextSibling; )
                        if (l.nodeType === 1)
                            return false;
                    return true;
                case "nth":
                    i = b[2];
                    c = b[3];
                    if (i === 1 && c === 0)
                        return true;
                    d = b[0];
                    if ((f = a.parentNode) && (f[ya] !== d || !a.nodeIndex)) {
                        k = 0;
                        for (l = f.firstChild; l; l = l.nextSibling)
                            if (l.nodeType === 1)
                                l.nodeIndex = ++k;
                        f[ya] = d
                    }
                    l = a.nodeIndex - c;
                    return i ===
                        0 ? l === 0 : l % i === 0 && l / i >= 0
            }
        },ID: function(a, b) {
            return a.nodeType === 1 && a.getAttribute("id") === b
        },TAG: function(a, b) {
            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
        },CLASS: function(a, b) {
            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
        },ATTR: function(a, b) {
            var i = b[1], i = F.attr ? F.attr(a, i) : K.attrHandle[i] ? K.attrHandle[i](a) : a[i] != null ? a[i] : a.getAttribute(i), c = i + "", d = b[2], f = b[4];
            return i == null ? d === "!=" : !d && F.attr ? i != null : d === "=" ? c === f : d === "*=" ? c.indexOf(f) >= 0 : d ===
                "~=" ? (" " + c + " ").indexOf(f) >= 0 : !f ? c && i !== false : d === "!=" ? c !== f : d === "^=" ? c.indexOf(f) === 0 : d === "$=" ? c.substr(c.length - f.length) === f : d === "|=" ? c === f || c.substr(0, f.length + 1) === f + "-" : false
        },POS: function(a, b, i, c) {
            var d = K.setFilters[b[2]];
            if (d)
                return d(a, i, b, c)
        }}}, Hb = K.match.POS, qc = function(a, b) {
        return "\\" + (b - 0 + 1)
    }, Ea;
    for (Ea in K.match)
        K.match[Ea] = RegExp(K.match[Ea].source + /(?![^\[]*\])(?![^\(]*\))/.source), K.leftMatch[Ea] = RegExp(/(^(?:.|\r|\n)*?)/.source + K.match[Ea].source.replace(/\\(\d+)/g, qc));
    K.match.globalPOS =
        Hb;
    var aa = function(a, b) {
        a = Array.prototype.slice.call(a, 0);
        if (b) {
            b.push.apply(b, a);
            return b
        }
        return a
    };
    try {
        Array.prototype.slice.call(o.documentElement.childNodes, 0)[0].nodeType
    } catch (Yc) {
        aa = function(a, b) {
            var i = 0, c = b || [];
            if (Fb.call(a) === "[object Array]")
                Array.prototype.push.apply(c, a);
            else if (typeof a.length === "number")
                for (var d = a.length; i < d; i++)
                    c.push(a[i]);
            else
                for (; a[i]; i++)
                    c.push(a[i]);
            return c
        }
    }
    var Qa, Fa;
    o.documentElement.compareDocumentPosition ? Qa = function(a, b) {
        if (a === b) {
            Oa = true;
            return 0
        }
        return !a.compareDocumentPosition ||
            !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
    } : (Qa = function(a, b) {
        if (a === b) {
            Oa = true;
            return 0
        }
        if (a.sourceIndex && b.sourceIndex)
            return a.sourceIndex - b.sourceIndex;
        var i, c, d = [], f = [];
        i = a.parentNode;
        c = b.parentNode;
        var k = i;
        if (i === c)
            return Fa(a, b);
        if (i) {
            if (!c)
                return 1
        } else
            return -1;
        for (; k; ) {
            d.unshift(k);
            k = k.parentNode
        }
        for (k = c; k; ) {
            f.unshift(k);
            k = k.parentNode
        }
        i = d.length;
        c = f.length;
        for (k = 0; k < i && k < c; k++)
            if (d[k] !== f[k])
                return Fa(d[k], f[k]);
        return k === i ? Fa(a, f[k],
            -1) : Fa(d[k], b, 1)
    }, Fa = function(a, b, i) {
        if (a === b)
            return i;
        for (a = a.nextSibling; a; ) {
            if (a === b)
                return -1;
            a = a.nextSibling
        }
        return 1
    });
    var Ra = o.createElement("div"), Jb = "script" + (new Date).getTime(), Sa = o.documentElement;
    Ra.innerHTML = "<a name='" + Jb + "'/>";
    Sa.insertBefore(Ra, Sa.firstChild);
    o.getElementById(Jb) && (K.find.ID = function(a, b, i) {
        if (typeof b.getElementById !== "undefined" && !i)
            return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] :
                g : []
    }, K.filter.ID = function(a, b) {
        var i = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
        return a.nodeType === 1 && i && i.nodeValue === b
    });
    Sa.removeChild(Ra);
    var Sa = Ra = null, pa = o.createElement("div");
    pa.appendChild(o.createComment(""));
    0 < pa.getElementsByTagName("*").length && (K.find.TAG = function(a, b) {
        var i = b.getElementsByTagName(a[1]);
        if (a[1] === "*") {
            for (var c = [], d = 0; i[d]; d++)
                i[d].nodeType === 1 && c.push(i[d]);
            i = c
        }
        return i
    });
    pa.innerHTML = "<a href='#'></a>";
    pa.firstChild && ("undefined" !== typeof pa.firstChild.getAttribute &&
        "#" !== pa.firstChild.getAttribute("href")) && (K.attrHandle.href = function(a) {
        return a.getAttribute("href", 2)
    });
    pa = null;
    if (o.querySelectorAll) {
        var ib = F, Ta = o.createElement("div");
        Ta.innerHTML = "<p class='TEST'></p>";
        if (!(Ta.querySelectorAll && 0 === Ta.querySelectorAll(".TEST").length)) {
            var F = function(a, b, i, c) {
                b = b || o;
                if (!c && !F.isXML(b)) {
                    var d = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                    if (d && (b.nodeType === 1 || b.nodeType === 9)) {
                        if (d[1])
                            return aa(b.getElementsByTagName(a), i);
                        if (d[2] && K.find.CLASS && b.getElementsByClassName)
                            return aa(b.getElementsByClassName(d[2]),
                                i)
                    }
                    if (b.nodeType === 9) {
                        if (a === "body" && b.body)
                            return aa([b.body], i);
                        if (d && d[3]) {
                            var f = b.getElementById(d[3]);
                            if (f && f.parentNode) {
                                if (f.id === d[3])
                                    return aa([f], i)
                            } else
                                return aa([], i)
                        }
                        try {
                            return aa(b.querySelectorAll(a), i)
                        } catch (k) {
                        }
                    } else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                        var d = b, l = (f = b.getAttribute("id")) || "__sizzle__", g = b.parentNode, n = /^\s*[+~]/.test(a);
                        f ? l = l.replace(/'/g, "\\$&") : b.setAttribute("id", l);
                        if (n && g)
                            b = b.parentNode;
                        try {
                            if (!n || g)
                                return aa(b.querySelectorAll("[id='" + l +
                                    "'] " + a), i)
                        } catch (m) {
                        }finally {
                            f || d.removeAttribute("id")
                        }
                    }
                }
                return ib(a, b, i, c)
            }, jb;
            for (jb in ib)
                F[jb] = ib[jb];
            Ta = null
        }
    }
    var Ua = o.documentElement, Va = Ua.matchesSelector || Ua.mozMatchesSelector || Ua.webkitMatchesSelector || Ua.msMatchesSelector;
    if (Va) {
        var rc = !Va.call(o.createElement("div"), "div"), Kb = !1;
        try {
            Va.call(o.documentElement, "[test!='']:sizzle")
        } catch (Zc) {
            Kb = !0
        }
        F.matchesSelector = function(a, b) {
            b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!F.isXML(a))
                try {
                    if (Kb || !K.match.PSEUDO.test(b) && !/!=/.test(b)) {
                        var i =
                            Va.call(a, b);
                        if (i || !rc || a.document && a.document.nodeType !== 11)
                            return i
                    }
                } catch (c) {
                }
            return F(b, null, null, [a]).length > 0
        }
    }
    var Aa = o.createElement("div");
    Aa.innerHTML = "<div class='test e'></div><div class='test'></div>";
    Aa.getElementsByClassName && 0 !== Aa.getElementsByClassName("e").length && (Aa.lastChild.className = "e", 1 !== Aa.getElementsByClassName("e").length && (K.order.splice(1, 0, "CLASS"), K.find.CLASS = function(a, b, i) {
        if (typeof b.getElementsByClassName !== "undefined" && !i)
            return b.getElementsByClassName(a[1])
    },
        Aa = null));
    F.contains = o.documentElement.contains ? function(a, b) {
        return a !== b && (a.contains ? a.contains(b) : true)
    } : o.documentElement.compareDocumentPosition ? function(a, b) {
        return !!(a.compareDocumentPosition(b) & 16)
    } : function() {
        return false
    };
    F.isXML = function(a) {
        return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : false
    };
    var Ib = function(a, b, i) {
        for (var c, d = [], f = "", b = b.nodeType ? [b] : b; c = K.match.PSEUDO.exec(a); ) {
            f = f + c[0];
            a = a.replace(K.match.PSEUDO, "")
        }
        a = K.relative[a] ? a + "*" : a;
        c = 0;
        for (var k = b.length; c <
            k; c++)
            F(a, b[c], d, i);
        return F.filter(f, d)
    };
    F.attr = i.attr;
    F.selectors.attrMap = {};
    i.find = F;
    i.expr = F.selectors;
    i.expr[":"] = i.expr.filters;
    i.unique = F.uniqueSort;
    i.text = F.getText;
    i.isXMLDoc = F.isXML;
    i.contains = F.contains;
    var sc = /Until$/, tc = /^(?:parents|prevUntil|prevAll)/, uc = /,/, dc = /^.[^:#\[\.,]*$/, vc = Array.prototype.slice, Lb = i.expr.match.globalPOS, wc = {children: !0,contents: !0,next: !0,prev: !0};
    i.fn.extend({find: function(a) {
        var b = this, c, d;
        if (typeof a !== "string")
            return i(a).filter(function() {
                c = 0;
                for (d = b.length; c <
                    d; c++)
                    if (i.contains(b[c], this))
                        return true
            });
        var f = this.pushStack("", "find", a), k, l, o;
        c = 0;
        for (d = this.length; c < d; c++) {
            k = f.length;
            i.find(a, this[c], f);
            if (c > 0)
                for (l = k; l < f.length; l++)
                    for (o = 0; o < k; o++)
                        if (f[o] === f[l]) {
                            f.splice(l--, 1);
                            break
                        }
        }
        return f
    },has: function(a) {
        var b = i(a);
        return this.filter(function() {
            for (var a = 0, j = b.length; a < j; a++)
                if (i.contains(this, b[a]))
                    return true
        })
    },not: function(a) {
        return this.pushStack(r(this, a, false), "not", a)
    },filter: function(a) {
        return this.pushStack(r(this, a, true), "filter", a)
    },
        is: function(a) {
            return !!a && (typeof a === "string" ? Lb.test(a) ? i(a, this.context).index(this[0]) >= 0 : i.filter(a, this).length > 0 : this.filter(a).length > 0)
        },closest: function(a, b) {
            var c = [], d, f, k = this[0];
            if (i.isArray(a)) {
                for (f = 1; k && k.ownerDocument && k !== b; ) {
                    for (d = 0; d < a.length; d++)
                        i(k).is(a[d]) && c.push({selector: a[d],elem: k,level: f});
                    k = k.parentNode;
                    f++
                }
                return c
            }
            var l = Lb.test(a) || typeof a !== "string" ? i(a, b || this.context) : 0;
            d = 0;
            for (f = this.length; d < f; d++)
                for (k = this[d]; k; )
                    if (l ? l.index(k) > -1 : i.find.matchesSelector(k,
                        a)) {
                        c.push(k);
                        break
                    } else {
                        k = k.parentNode;
                        if (!k || !k.ownerDocument || k === b || k.nodeType === 11)
                            break
                    }
            c = c.length > 1 ? i.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },index: function(a) {
            return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a === "string" ? i.inArray(this[0], i(a)) : i.inArray(a.jquery ? a[0] : a, this)
        },add: function(a, b) {
            var c = typeof a === "string" ? i(a, b) : i.makeArray(a && a.nodeType ? [a] : a), d = i.merge(this.get(), c);
            return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 ||
                !d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 ? d : i.unique(d))
        },andSelf: function() {
            return this.add(this.prevObject)
        }});
    i.each({parent: function(a) {
        return (a = a.parentNode) && a.nodeType !== 11 ? a : null
    },parents: function(a) {
        return i.dir(a, "parentNode")
    },parentsUntil: function(a, b, c) {
        return i.dir(a, "parentNode", c)
    },next: function(a) {
        return i.nth(a, 2, "nextSibling")
    },prev: function(a) {
        return i.nth(a, 2, "previousSibling")
    },nextAll: function(a) {
        return i.dir(a, "nextSibling")
    },prevAll: function(a) {
        return i.dir(a,
            "previousSibling")
    },nextUntil: function(a, b, c) {
        return i.dir(a, "nextSibling", c)
    },prevUntil: function(a, b, c) {
        return i.dir(a, "previousSibling", c)
    },siblings: function(a) {
        return i.sibling((a.parentNode || {}).firstChild, a)
    },children: function(a) {
        return i.sibling(a.firstChild)
    },contents: function(a) {
        return i.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : i.makeArray(a.childNodes)
    }}, function(a, b) {
        i.fn[a] = function(c, d) {
            var f = i.map(this, b, c);
            sc.test(a) || (d = c);
            d && typeof d === "string" && (f = i.filter(d,
                f));
            f = this.length > 1 && !wc[a] ? i.unique(f) : f;
            if ((this.length > 1 || uc.test(d)) && tc.test(a))
                f = f.reverse();
            return this.pushStack(f, a, vc.call(arguments).join(","))
        }
    });
    i.extend({filter: function(a, b, c) {
        c && (a = ":not(" + a + ")");
        return b.length === 1 ? i.find.matchesSelector(b[0], a) ? [b[0]] : [] : i.find.matches(a, b)
    },dir: function(a, b, c) {
        for (var d = [], a = a[b]; a && a.nodeType !== 9 && (c === g || a.nodeType !== 1 || !i(a).is(c)); ) {
            a.nodeType === 1 && d.push(a);
            a = a[b]
        }
        return d
    },nth: function(a, b, i) {
        for (var b = b || 1, c = 0; a; a = a[i])
            if (a.nodeType === 1 &&
                ++c === b)
                break;
        return a
    },sibling: function(a, b) {
        for (var i = []; a; a = a.nextSibling)
            a.nodeType === 1 && a !== b && i.push(a);
        return i
    }});
    var pb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", xc = / jQuery\d+="(?:\d+|null)"/g, kb = /^\s+/, Mb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Nb = /<([\w:]+)/, yc = /<tbody/i, zc = /<|&#?\w+;/, Ac = /<(?:script|style)/i, Bc = /<(?:script|object|embed|option|style)/i,
        Ob = RegExp("<(?:" + pb + ")[\\s/>]", "i"), Pb = /checked\s*(?:[^=]|=\s*.checked.)/i, Qb = /\/(java|ecma)script/i, Cc = /^\s*<!(?:\[CDATA\[|\-\-)/, Y = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],area: [1, "<map>", "</map>"],_default: [0, "", ""]}, lb = p(o);
    Y.optgroup = Y.option;
    Y.tbody = Y.tfoot =
        Y.colgroup = Y.caption = Y.thead;
    Y.th = Y.td;
    i.support.htmlSerialize || (Y._default = [1, "div<div>", "</div>"]);
    i.fn.extend({text: function(a) {
        return i.access(this, function(a) {
            return a === g ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(a))
        }, null, a, arguments.length)
    },wrapAll: function(a) {
        if (i.isFunction(a))
            return this.each(function(b) {
                i(this).wrapAll(a.call(this, b))
            });
        if (this[0]) {
            var b = i(a, this[0].ownerDocument).eq(0).clone(true);
            this[0].parentNode && b.insertBefore(this[0]);
            b.map(function() {
                for (var a = this; a.firstChild && a.firstChild.nodeType === 1; )
                    a = a.firstChild;
                return a
            }).append(this)
        }
        return this
    },wrapInner: function(a) {
        return i.isFunction(a) ? this.each(function(b) {
            i(this).wrapInner(a.call(this, b))
        }) : this.each(function() {
            var b = i(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    },wrap: function(a) {
        var b = i.isFunction(a);
        return this.each(function(c) {
            i(this).wrapAll(b ? a.call(this, c) : a)
        })
    },unwrap: function() {
        return this.parent().each(function() {
            i.nodeName(this, "body") ||
            i(this).replaceWith(this.childNodes)
        }).end()
    },append: function() {
        return this.domManip(arguments, true, function(a) {
            this.nodeType === 1 && this.appendChild(a)
        })
    },prepend: function() {
        return this.domManip(arguments, true, function(a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild)
        })
    },before: function() {
        if (this[0] && this[0].parentNode)
            return this.domManip(arguments, false, function(a) {
                this.parentNode.insertBefore(a, this)
            });
        if (arguments.length) {
            var a = i.clean(arguments);
            a.push.apply(a, this.toArray());
            return this.pushStack(a,
                "before", arguments)
        }
    },after: function() {
        if (this[0] && this[0].parentNode)
            return this.domManip(arguments, false, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
        if (arguments.length) {
            var a = this.pushStack(this, "after", arguments);
            a.push.apply(a, i.clean(arguments));
            return a
        }
    },remove: function(a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)
            if (!a || i.filter(a, [d]).length) {
                if (!b && d.nodeType === 1) {
                    i.cleanData(d.getElementsByTagName("*"));
                    i.cleanData([d])
                }
                d.parentNode && d.parentNode.removeChild(d)
            }
        return this
    },
        empty: function() {
            for (var a = 0, b; (b = this[a]) != null; a++)
                for (b.nodeType === 1 && i.cleanData(b.getElementsByTagName("*")); b.firstChild; )
                    b.removeChild(b.firstChild);
            return this
        },clone: function(a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function() {
                return i.clone(this, a, b)
            })
        },html: function(a) {
            return i.access(this, function(a) {
                var b = this[0] || {}, j = 0, c = this.length;
                if (a === g)
                    return b.nodeType === 1 ? b.innerHTML.replace(xc, "") : null;
                if (typeof a === "string" && !Ac.test(a) && (i.support.leadingWhitespace || !kb.test(a)) &&
                    !Y[(Nb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Mb, "<$1></$2>");
                    try {
                        for (; j < c; j++) {
                            b = this[j] || {};
                            if (b.nodeType === 1) {
                                i.cleanData(b.getElementsByTagName("*"));
                                b.innerHTML = a
                            }
                        }
                        b = 0
                    } catch (d) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (i.isFunction(a))
                    return this.each(function(b) {
                        var c = i(this), d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    });
                typeof a !== "string" && (a = i(a).detach());
                return this.each(function() {
                    var b = this.nextSibling, c =
                        this.parentNode;
                    i(this).remove();
                    b ? i(b).before(a) : i(c).append(a)
                })
            }
            return this.length ? this.pushStack(i(i.isFunction(a) ? a() : a), "replaceWith", a) : this
        },detach: function(a) {
            return this.remove(a, true)
        },domManip: function(a, b, c) {
            var d, f, k, l = a[0], o = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof l === "string" && Pb.test(l))
                return this.each(function() {
                    i(this).domManip(a, b, c, true)
                });
            if (i.isFunction(l))
                return this.each(function(d) {
                    var f = i(this);
                    a[0] = l.call(this, d, b ? f.html() : g);
                    f.domManip(a, b, c)
                });
            if (this[0]) {
                d =
                    l && l.parentNode;
                d = i.support.parentNode && d && d.nodeType === 11 && d.childNodes.length === this.length ? {fragment: d} : i.buildFragment(a, this, o);
                k = d.fragment;
                if (f = k.childNodes.length === 1 ? k = k.firstChild : k.firstChild) {
                    b = b && i.nodeName(f, "tr");
                    f = 0;
                    for (var n = this.length, m = n - 1; f < n; f++)
                        c.call(b ? i.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f], d.cacheable || n > 1 && f < m ? i.clone(k, true, true) : k)
                }
                o.length && i.each(o, function(a,
                                               b) {
                    b.src ? i.ajax({type: "GET",global: false,url: b.src,async: false,dataType: "script"}) : i.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Cc, "/*$0*/"));
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }});
    i.buildFragment = function(a, b, c) {
        var d, f, k, l, g = a[0];
        b && b[0] && (l = b[0].ownerDocument || b[0]);
        l.createDocumentFragment || (l = o);
        if (a.length === 1 && typeof g === "string" && g.length < 512 && l === o && g.charAt(0) === "<" && !Bc.test(g) && (i.support.checkClone || !Pb.test(g)) && (i.support.html5Clone || !Ob.test(g))) {
            f =
                true;
            (k = i.fragments[g]) && k !== 1 && (d = k)
        }
        if (!d) {
            d = l.createDocumentFragment();
            i.clean(a, l, d, c)
        }
        f && (i.fragments[g] = k ? d : 1);
        return {fragment: d,cacheable: f}
    };
    i.fragments = {};
    i.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        i.fn[a] = function(c) {
            var d = [], c = i(c), f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && c.length === 1) {
                c[b](this[0]);
                return this
            }
            for (var f = 0, k = c.length; f < k; f++) {
                var l = (f > 0 ? this.clone(true) :
                    this).get();
                i(c[f])[b](l);
                d = d.concat(l)
            }
            return this.pushStack(d, a, c.selector)
        }
    });
    i.extend({clone: function(a, b, c) {
        var d, f, k;
        if (i.support.html5Clone || i.isXMLDoc(a) || !Ob.test("<" + a.nodeName + ">"))
            d = a.cloneNode(true);
        else {
            d = o.createElement("div");
            lb.appendChild(d);
            d.innerHTML = a.outerHTML;
            d = d.firstChild
        }
        var l = d;
        if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !i.isXMLDoc(a)) {
            n(a, l);
            d = s(a);
            f = s(l);
            for (k = 0; d[k]; ++k)
                f[k] && n(d[k], f[k])
        }
        if (b) {
            q(a, l);
            if (c) {
                d = s(a);
                f = s(l);
                for (k = 0; d[k]; ++k)
                    q(d[k], f[k])
            }
        }
        return l
    },clean: function(a, b, c, d) {
        var f, k = [], b = b || o;
        typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || o);
        for (var l = 0, g; (g = a[l]) != null; l++) {
            typeof g === "number" && (g = g + "");
            if (g) {
                if (typeof g === "string")
                    if (zc.test(g)) {
                        g = g.replace(Mb, "<$1></$2>");
                        f = (Nb.exec(g) || ["", ""])[1].toLowerCase();
                        var n = Y[f] || Y._default, m = n[0], s = b.createElement("div"), B = lb.childNodes;
                        b === o ? lb.appendChild(s) : p(b).appendChild(s);
                        for (s.innerHTML = n[1] + g + n[2]; m--; )
                            s = s.lastChild;
                        if (!i.support.tbody) {
                            m = yc.test(g);
                            n = f === "table" && !m ? s.firstChild && s.firstChild.childNodes : n[1] === "<table>" && !m ? s.childNodes : [];
                            for (f = n.length - 1; f >= 0; --f)
                                i.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f])
                        }
                        !i.support.leadingWhitespace && kb.test(g) && s.insertBefore(b.createTextNode(kb.exec(g)[0]), s.firstChild);
                        g = s.childNodes;
                        if (s) {
                            s.parentNode.removeChild(s);
                            if (B.length > 0)
                                (s = B[B.length - 1]) && s.parentNode && s.parentNode.removeChild(s)
                        }
                    } else
                        g = b.createTextNode(g);
                var r;
                if (!i.support.appendChecked)
                    if (g[0] &&
                        typeof (r = g.length) === "number")
                        for (f = 0; f < r; f++)
                            v(g[f]);
                    else
                        v(g);
                g.nodeType ? k.push(g) : k = i.merge(k, g)
            }
        }
        if (c) {
            a = function(a) {
                return !a.type || Qb.test(a.type)
            };
            for (l = 0; k[l]; l++) {
                b = k[l];
                if (d && i.nodeName(b, "script") && (!b.type || Qb.test(b.type)))
                    d.push(b.parentNode ? b.parentNode.removeChild(b) : b);
                else {
                    if (b.nodeType === 1) {
                        g = i.grep(b.getElementsByTagName("script"), a);
                        k.splice.apply(k, [l + 1, 0].concat(g))
                    }
                    c.appendChild(b)
                }
            }
        }
        return k
    },cleanData: function(a) {
        for (var b, c, d = i.cache, f = i.event.special, k = i.support.deleteExpando,
                 l = 0, o; (o = a[l]) != null; l++)
            if (!o.nodeName || !i.noData[o.nodeName.toLowerCase()])
                if (c = o[i.expando]) {
                    if ((b = d[c]) && b.events) {
                        for (var g in b.events)
                            f[g] ? i.event.remove(o, g) : i.removeEvent(o, g, b.handle);
                        if (b.handle)
                            b.handle.elem = null
                    }
                    k ? delete o[i.expando] : o.removeAttribute && o.removeAttribute(i.expando);
                    delete d[c]
                }
    }});
    var mb = /alpha\([^)]*\)/i, Dc = /opacity=([^)]*)/, Ec = /([A-Z]|^ms)/g, Fc = /^[\-+]?(?:\d*\.)?\d+$/i, Ya = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Gc = /^([\-+])=([\-+.\de]+)/, Hc = /^margin/, Ic = {position: "absolute",
        visibility: "hidden",display: "block"}, la = ["Top", "Right", "Bottom", "Left"], sa, Rb, Sb;
    i.fn.css = function(a, b) {
        return i.access(this, function(a, b, j) {
            return j !== g ? i.style(a, b, j) : i.css(a, b)
        }, a, b, arguments.length > 1)
    };
    i.extend({cssHooks: {opacity: {get: function(a, b) {
        if (b) {
            var i = sa(a, "opacity");
            return i === "" ? "1" : i
        }
        return a.style.opacity
    }}},cssNumber: {fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": i.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(a,
                                                                                                                                                                                                              b, c, d) {
        if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
            var f, k = i.camelCase(b), l = a.style, o = i.cssHooks[k], b = i.cssProps[k] || k;
            if (c !== g) {
                d = typeof c;
                if (d === "string" && (f = Gc.exec(c))) {
                    c = +(f[1] + 1) * +f[2] + parseFloat(i.css(a, b));
                    d = "number"
                }
                if (!(c == null || d === "number" && isNaN(c))) {
                    d === "number" && !i.cssNumber[k] && (c = c + "px");
                    if (!o || !("set" in o) || (c = o.set(a, c)) !== g)
                        try {
                            l[b] = c
                        } catch (n) {
                        }
                }
            } else
                return o && "get" in o && (f = o.get(a, false, d)) !== g ? f : l[b]
        }
    },css: function(a, b, c) {
        var d, f, b = i.camelCase(b);
        f = i.cssHooks[b];
        b = i.cssProps[b] ||
            b;
        b === "cssFloat" && (b = "float");
        if (f && "get" in f && (d = f.get(a, true, c)) !== g)
            return d;
        if (sa)
            return sa(a, b)
    },swap: function(a, b, i) {
        var c = {}, d;
        for (d in b) {
            c[d] = a.style[d];
            a.style[d] = b[d]
        }
        i = i.call(a);
        for (d in b)
            a.style[d] = c[d];
        return i
    }});
    i.curCSS = i.css;
    o.defaultView && o.defaultView.getComputedStyle && (Rb = function(a, b) {
        var c, d, f, k = a.style, b = b.replace(Ec, "-$1").toLowerCase();
        if ((d = a.ownerDocument.defaultView) && (f = d.getComputedStyle(a, null))) {
            c = f.getPropertyValue(b);
            c === "" && !i.contains(a.ownerDocument.documentElement,
                a) && (c = i.style(a, b))
        }
        if (!i.support.pixelMargin && f && Hc.test(b) && Ya.test(c)) {
            d = k.width;
            k.width = c;
            c = f.width;
            k.width = d
        }
        return c
    });
    o.documentElement.currentStyle && (Sb = function(a, b) {
        var i, c, d = a.currentStyle && a.currentStyle[b], f = a.style;
        if (d == null && f && (i = f[b]))
            d = i;
        if (Ya.test(d)) {
            i = f.left;
            if (c = a.runtimeStyle && a.runtimeStyle.left)
                a.runtimeStyle.left = a.currentStyle.left;
            f.left = b === "fontSize" ? "1em" : d;
            d = f.pixelLeft + "px";
            f.left = i;
            if (c)
                a.runtimeStyle.left = c
        }
        return d === "" ? "auto" : d
    });
    sa = Rb || Sb;
    i.each(["height", "width"],
        function(a, b) {
            i.cssHooks[b] = {get: function(a, j, c) {
                if (j)
                    return a.offsetWidth !== 0 ? x(a, b, c) : i.swap(a, Ic, function() {
                        return x(a, b, c)
                    })
            },set: function(a, b) {
                return Fc.test(b) ? b + "px" : b
            }}
        });
    i.support.opacity || (i.cssHooks.opacity = {get: function(a, b) {
        return Dc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    },set: function(a, b) {
        var c = a.style, d = a.currentStyle, f = i.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", k = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && i.trim(k.replace(mb,
            "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter)
                return
        }
        c.filter = mb.test(k) ? k.replace(mb, f) : k + " " + f
    }});
    i(function() {
        if (!i.support.reliableMarginRight)
            i.cssHooks.marginRight = {get: function(a, b) {
                return i.swap(a, {display: "inline-block"}, function() {
                    return b ? sa(a, "margin-right") : a.style.marginRight
                })
            }}
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(a) {
        var b = a.offsetHeight;
        return a.offsetWidth === 0 && b === 0 || !i.support.reliableHiddenOffsets && (a.style && a.style.display || i.css(a, "display")) ===
            "none"
    }, i.expr.filters.visible = function(a) {
        return !i.expr.filters.hidden(a)
    });
    i.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        i.cssHooks[a + b] = {expand: function(i) {
            for (var c = typeof i === "string" ? i.split(" ") : [i], d = {}, i = 0; i < 4; i++)
                d[a + la[i] + b] = c[i] || c[i - 2] || c[0];
            return d
        }}
    });
    var Jc = /%20/g, ec = /\[\]$/, Tb = /\r?\n/g, Kc = /#.*$/, Lc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Mc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Nc = /^(?:GET|HEAD)$/,
        Oc = /^\/\//, Ub = /\?/, Pc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Qc = /^(?:select|textarea)/i, qb = /\s+/, Rc = /([?&])_=[^&]*/, Vb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Wb = i.fn.load, Za = {}, Xb = {}, qa, ra, Yb = ["*/"] + ["*"];
    try {
        qa = B.href
    } catch ($c) {
        qa = o.createElement("a"), qa.href = "", qa = qa.href
    }
    ra = Vb.exec(qa.toLowerCase()) || [];
    i.fn.extend({load: function(a, b, c) {
        if (typeof a !== "string" && Wb)
            return Wb.apply(this, arguments);
        if (!this.length)
            return this;
        var d = a.indexOf(" ");
        if (d >= 0)
            var f = a.slice(d, a.length),
                a = a.slice(0, d);
        d = "GET";
        if (b)
            if (i.isFunction(b)) {
                c = b;
                b = g
            } else if (typeof b === "object") {
                b = i.param(b, i.ajaxSettings.traditional);
                d = "POST"
            }
        var k = this;
        i.ajax({url: a,type: d,dataType: "html",data: b,complete: function(a, b, d) {
            d = a.responseText;
            if (a.isResolved()) {
                a.done(function(a) {
                    d = a
                });
                k.html(f ? i("<div>").append(d.replace(Pc, "")).find(f) : d)
            }
            c && k.each(c, [d, b, a])
        }});
        return this
    },serialize: function() {
        return i.param(this.serializeArray())
    },serializeArray: function() {
        return this.map(function() {
            return this.elements ?
                i.makeArray(this.elements) : this
        }).filter(function() {
                return this.name && !this.disabled && (this.checked || Qc.test(this.nodeName) || Mc.test(this.type))
            }).map(function(a, b) {
                var c = i(this).val();
                return c == null ? null : i.isArray(c) ? i.map(c, function(a) {
                    return {name: b.name,value: a.replace(Tb, "\r\n")}
                }) : {name: b.name,value: c.replace(Tb, "\r\n")}
            }).get()
    }});
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        i.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    i.each(["get", "post"],
        function(a, b) {
            i[b] = function(a, c, d, j) {
                if (i.isFunction(c)) {
                    j = j || d;
                    d = c;
                    c = g
                }
                return i.ajax({type: b,url: a,data: c,success: d,dataType: j})
            }
        });
    i.extend({getScript: function(a, b) {
        return i.get(a, g, b, "script")
    },getJSON: function(a, b, c) {
        return i.get(a, b, c, "json")
    },ajaxSetup: function(a, b) {
        if (b)
            C(a, i.ajaxSettings);
        else {
            b = a;
            a = i.ajaxSettings
        }
        C(a, b);
        return a
    },ajaxSettings: {url: qa,isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ra[1]),global: !0,type: "GET",contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,async: !0,accepts: {xml: "application/xml, text/xml",html: "text/html",text: "text/plain",json: "application/json, text/javascript","*": Yb},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": c.String,"text html": !0,"text json": i.parseJSON,"text xml": i.parseXML},flatOptions: {context: !0,url: !0}},ajaxPrefilter: t(Za),ajaxTransport: t(Xb),ajax: function(a, b) {
        function c(a, b, j, s) {
            if (p !== 2) {
                p = 2;
                u && clearTimeout(u);
                z = g;
                r = s || "";
                t.readyState =
                    a > 0 ? 4 : 0;
                var B, J, q, s = b;
                if (j) {
                    var E = d, na = t, v = E.contents, C = E.dataTypes, G = E.responseFields, y, H, P, A;
                    for (H in G)
                        H in j && (na[G[H]] = j[H]);
                    for (; C[0] === "*"; ) {
                        C.shift();
                        y === g && (y = E.mimeType || na.getResponseHeader("content-type"))
                    }
                    if (y)
                        for (H in v)
                            if (v[H] && v[H].test(y)) {
                                C.unshift(H);
                                break
                            }
                    if (C[0] in j)
                        P = C[0];
                    else {
                        for (H in j) {
                            if (!C[0] || E.converters[H + " " + C[0]]) {
                                P = H;
                                break
                            }
                            A || (A = H)
                        }
                        P = P || A
                    }
                    if (P) {
                        P !== C[0] && C.unshift(P);
                        j = j[P]
                    } else
                        j = void 0
                } else
                    j = g;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = t.getResponseHeader("Last-Modified"))
                            i.lastModified[m] =
                                y;
                        if (y = t.getResponseHeader("Etag"))
                            i.etag[m] = y
                    }
                    if (a === 304) {
                        s = "notmodified";
                        B = true
                    } else
                        try {
                            y = d;
                            y.dataFilter && (j = y.dataFilter(j, y.dataType));
                            var x = y.dataTypes;
                            H = {};
                            var w, T, Ca = x.length, D, Z = x[0], U, ka, M, X, N;
                            for (w = 1; w < Ca; w++) {
                                if (w === 1)
                                    for (T in y.converters)
                                        typeof T === "string" && (H[T.toLowerCase()] = y.converters[T]);
                                U = Z;
                                Z = x[w];
                                if (Z === "*")
                                    Z = U;
                                else if (U !== "*" && U !== Z) {
                                    ka = U + " " + Z;
                                    M = H[ka] || H["* " + Z];
                                    if (!M) {
                                        N = g;
                                        for (X in H) {
                                            D = X.split(" ");
                                            if (D[0] === U || D[0] === "*")
                                                if (N = H[D[1] + " " + Z]) {
                                                    X = H[X];
                                                    X === true ? M = N : N === true &&
                                                        (M = X);
                                                    break
                                                }
                                        }
                                    }
                                    !M && !N && i.error("No conversion from " + ka.replace(" ", " to "));
                                    M !== true && (j = M ? M(j) : N(X(j)))
                                }
                            }
                            J = j;
                            s = "success";
                            B = true
                        } catch (ac) {
                            s = "parsererror";
                            q = ac
                        }
                } else {
                    q = s;
                    if (!s || a) {
                        s = "error";
                        a < 0 && (a = 0)
                    }
                }
                t.status = a;
                t.statusText = "" + (b || s);
                B ? l.resolveWith(f, [J, s, t]) : l.rejectWith(f, [t, s, q]);
                t.statusCode(n);
                n = g;
                L && k.trigger("ajax" + (B ? "Success" : "Error"), [t, d, B ? J : q]);
                o.fireWith(f, [t, s]);
                if (L) {
                    k.trigger("ajaxComplete", [t, d]);
                    --i.active || i.event.trigger("ajaxStop")
                }
            }
        }
        if (typeof a === "object") {
            b = a;
            a = g
        }
        var b = b ||
        {}, d = i.ajaxSetup({}, b), f = d.context || d, k = f !== d && (f.nodeType || f instanceof i) ? i(f) : i.event, l = i.Deferred(), o = i.Callbacks("once memory"), n = d.statusCode || {}, m, s = {}, B = {}, r, J, z, u, q, p = 0, L, E, t = {readyState: 0,setRequestHeader: function(a, b) {
            if (!p) {
                var d = a.toLowerCase(), a = B[d] = B[d] || a;
                s[a] = b
            }
            return this
        },getAllResponseHeaders: function() {
            return p === 2 ? r : null
        },getResponseHeader: function(a) {
            var b;
            if (p === 2) {
                if (!J)
                    for (J = {}; b = Lc.exec(r); )
                        J[b[1].toLowerCase()] = b[2];
                b = J[a.toLowerCase()]
            }
            return b === g ? null : b
        },overrideMimeType: function(a) {
            if (!p)
                d.mimeType =
                    a;
            return this
        },abort: function(a) {
            a = a || "abort";
            z && z.abort(a);
            c(0, a);
            return this
        }};
        l.promise(t);
        t.success = t.done;
        t.error = t.fail;
        t.complete = o.add;
        t.statusCode = function(a) {
            if (a) {
                var b;
                if (p < 2)
                    for (b in a)
                        n[b] = [n[b], a[b]];
                else {
                    b = a[t.status];
                    t.then(b, b)
                }
            }
            return this
        };
        d.url = ((a || d.url) + "").replace(Kc, "").replace(Oc, ra[1] + "//");
        d.dataTypes = i.trim(d.dataType || "*").toLowerCase().split(qb);
        if (d.crossDomain == null) {
            q = Vb.exec(d.url.toLowerCase());
            d.crossDomain = !(!q || !(q[1] != ra[1] || q[2] != ra[2] || (q[3] || (q[1] === "http:" ?
                80 : 443)) != (ra[3] || (ra[1] === "http:" ? 80 : 443))))
        }
        if (d.data && d.processData && typeof d.data !== "string")
            d.data = i.param(d.data, d.traditional);
        w(Za, d, b, t);
        if (p === 2)
            return false;
        L = d.global;
        d.type = d.type.toUpperCase();
        d.hasContent = !Nc.test(d.type);
        L && i.active++ === 0 && i.event.trigger("ajaxStart");
        if (!d.hasContent) {
            if (d.data) {
                d.url = d.url + ((Ub.test(d.url) ? "&" : "?") + d.data);
                delete d.data
            }
            m = d.url;
            if (d.cache === false) {
                q = i.now();
                var na = d.url.replace(Rc, "$1_=" + q);
                d.url = na + (na === d.url ? (Ub.test(d.url) ? "&" : "?") + "_=" + q : "")
            }
        }
        (d.data &&
            d.hasContent && d.contentType !== false || b.contentType) && t.setRequestHeader("Content-Type", d.contentType);
        if (d.ifModified) {
            m = m || d.url;
            i.lastModified[m] && t.setRequestHeader("If-Modified-Since", i.lastModified[m]);
            i.etag[m] && t.setRequestHeader("If-None-Match", i.etag[m])
        }
        t.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + Yb + "; q=0.01" : "") : d.accepts["*"]);
        for (E in d.headers)
            t.setRequestHeader(E, d.headers[E]);
        if (d.beforeSend && (d.beforeSend.call(f,
            t, d) === false || p === 2)) {
            t.abort();
            return false
        }
        for (E in {success: 1,error: 1,complete: 1})
            t[E](d[E]);
        if (z = w(Xb, d, b, t)) {
            t.readyState = 1;
            L && k.trigger("ajaxSend", [t, d]);
            d.async && d.timeout > 0 && (u = setTimeout(function() {
                t.abort("timeout")
            }, d.timeout));
            try {
                p = 1;
                z.send(s, c)
            } catch (v) {
                if (p < 2)
                    c(-1, v);
                else
                    throw v;
            }
        } else
            c(-1, "No Transport");
        return t
    },param: function(a, b) {
        var d = [], c = function(a, b) {
            b = i.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (b === g)
            b = i.ajaxSettings.traditional;
        if (i.isArray(a) || a.jquery && !i.isPlainObject(a))
            i.each(a, function() {
                c(this.name, this.value)
            });
        else
            for (var f in a)
                D(f, a[f], b, c);
        return d.join("&").replace(Jc, "+")
    }});
    i.extend({active: 0,lastModified: {},etag: {}});
    var Sc = i.now(), Wa = /(\=)\?(&|$)|\?\?/i;
    i.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
        return i.expando + "_" + Sc++
    }});
    i.ajaxPrefilter("json jsonp", function(a, b, d) {
        b = typeof a.data === "string" && /^application\/x\-www\-form\-urlencoded/.test(a.contentType);
        if (a.dataTypes[0] === "jsonp" || a.jsonp !==
            false && (Wa.test(a.url) || b && Wa.test(a.data))) {
            var f, k = a.jsonpCallback = i.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, l = c[k], o = a.url, g = a.data, n = "$1" + k + "$2";
            if (a.jsonp !== false) {
                o = o.replace(Wa, n);
                if (a.url === o) {
                    b && (g = g.replace(Wa, n));
                    a.data === g && (o = o + ((/\?/.test(o) ? "&" : "?") + a.jsonp + "=" + k))
                }
            }
            a.url = o;
            a.data = g;
            c[k] = function(a) {
                f = [a]
            };
            d.always(function() {
                c[k] = l;
                if (f && i.isFunction(l))
                    c[k](f[0])
            });
            a.converters["script json"] = function() {
                f || i.error(k + " was not called");
                return f[0]
            };
            a.dataTypes[0] =
                "json";
            return "script"
        }
    });
    i.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /javascript|ecmascript/},converters: {"text script": function(a) {
        i.globalEval(a);
        return a
    }}});
    i.ajaxPrefilter("script", function(a) {
        if (a.cache === g)
            a.cache = false;
        if (a.crossDomain) {
            a.type = "GET";
            a.global = false
        }
    });
    i.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, d = o.head || o.getElementsByTagName("head")[0] || o.documentElement;
            return {send: function(c,
                                   i) {
                b = o.createElement("script");
                b.async = "async";
                if (a.scriptCharset)
                    b.charset = a.scriptCharset;
                b.src = a.url;
                b.onload = b.onreadystatechange = function(a, c) {
                    if (c || !b.readyState || /loaded|complete/.test(b.readyState)) {
                        b.onload = b.onreadystatechange = null;
                        d && b.parentNode && d.removeChild(b);
                        b = g;
                        c || i(200, "success")
                    }
                };
                d.insertBefore(b, d.firstChild)
            },abort: function() {
                if (b)
                    b.onload(0, 1)
            }}
        }
    });
    var nb = c.ActiveXObject ? function() {
        for (var a in Ba)
            Ba[a](0, 1)
    } : !1, Tc = 0, Ba;
    i.ajaxSettings.xhr = c.ActiveXObject ? function() {
        var a;
        if (!(a =
            !this.isLocal && G()))
            a: {
                try {
                    a = new c.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (b) {
                }
                a = void 0
            }
        return a
    } : G;
    var ob = i.ajaxSettings.xhr();
    i.extend(i.support, {ajax: !!ob,cors: !!ob && "withCredentials" in ob});
    i.support.ajax && i.ajaxTransport(function(a) {
        if (!a.crossDomain || i.support.cors) {
            var b;
            return {send: function(d, f) {
                var k = a.xhr(), l, o;
                a.username ? k.open(a.type, a.url, a.async, a.username, a.password) : k.open(a.type, a.url, a.async);
                if (a.xhrFields)
                    for (o in a.xhrFields)
                        k[o] = a.xhrFields[o];
                a.mimeType && k.overrideMimeType &&
                k.overrideMimeType(a.mimeType);
                !a.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (o in d)
                        k.setRequestHeader(o, d[o])
                } catch (n) {
                }
                k.send(a.hasContent && a.data || null);
                b = function(d, c) {
                    var o, n, m, s, B;
                    try {
                        if (b && (c || k.readyState === 4)) {
                            b = g;
                            if (l) {
                                k.onreadystatechange = i.noop;
                                nb && delete Ba[l]
                            }
                            if (c)
                                k.readyState !== 4 && k.abort();
                            else {
                                o = k.status;
                                m = k.getAllResponseHeaders();
                                s = {};
                                if ((B = k.responseXML) && B.documentElement)
                                    s.xml = B;
                                try {
                                    s.text = k.responseText
                                } catch (r) {
                                }
                                try {
                                    n = k.statusText
                                } catch (J) {
                                    n =
                                        ""
                                }
                                !o && a.isLocal && !a.crossDomain ? o = s.text ? 200 : 404 : o === 1223 && (o = 204)
                            }
                        }
                    } catch (z) {
                        c || f(-1, z)
                    }
                    s && f(o, n, s, m)
                };
                if (!a.async || k.readyState === 4)
                    b();
                else {
                    l = ++Tc;
                    if (nb) {
                        if (!Ba) {
                            Ba = {};
                            i(c).unload(nb)
                        }
                        Ba[l] = b
                    }
                    k.onreadystatechange = b
                }
            },abort: function() {
                b && b(0, 1)
            }}
        }
    });
    var $a = {}, ba, ta, Uc = /^(?:toggle|show|hide)$/, Vc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, Xa, Ha = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], Ga;
    i.fn.extend({show: function(a,
                                b, d) {
        if (a || a === 0)
            return this.animate(z("show", 3), a, b, d);
        for (var d = 0, c = this.length; d < c; d++) {
            a = this[d];
            if (a.style) {
                b = a.style.display;
                if (!i._data(a, "olddisplay") && b === "none")
                    b = a.style.display = "";
                (b === "" && i.css(a, "display") === "none" || !i.contains(a.ownerDocument.documentElement, a)) && i._data(a, "olddisplay", E(a.nodeName))
            }
        }
        for (d = 0; d < c; d++) {
            a = this[d];
            if (a.style) {
                b = a.style.display;
                if (b === "" || b === "none")
                    a.style.display = i._data(a, "olddisplay") || ""
            }
        }
        return this
    },hide: function(a, b, d) {
        if (a || a === 0)
            return this.animate(z("hide",
                3), a, b, d);
        for (var d = 0, c = this.length; d < c; d++) {
            a = this[d];
            if (a.style) {
                b = i.css(a, "display");
                b !== "none" && !i._data(a, "olddisplay") && i._data(a, "olddisplay", b)
            }
        }
        for (d = 0; d < c; d++)
            if (this[d].style)
                this[d].style.display = "none";
        return this
    },_toggle: i.fn.toggle,toggle: function(a, b, d) {
        var c = typeof a === "boolean";
        i.isFunction(a) && i.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || c ? this.each(function() {
            var b = c ? a : i(this).is(":hidden");
            i(this)[b ? "show" : "hide"]()
        }) : this.animate(z("toggle", 3), a, b, d);
        return this
    },
        fadeTo: function(a, b, d, c) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, d, c)
        },animate: function(a, b, d, c) {
            function f() {
                k.queue === false && i._mark(this);
                var b = i.extend({}, k), d = this.nodeType === 1, c = d && i(this).is(":hidden"), l, o, g, n, m;
                b.animatedProperties = {};
                for (g in a) {
                    l = i.camelCase(g);
                    if (g !== l) {
                        a[l] = a[g];
                        delete a[g]
                    }
                    if ((o = i.cssHooks[l]) && "expand" in o) {
                        n = o.expand(a[l]);
                        delete a[l];
                        for (g in n)
                            g in a || (a[g] = n[g])
                    }
                }
                for (l in a) {
                    o = a[l];
                    if (i.isArray(o)) {
                        b.animatedProperties[l] =
                            o[1];
                        o = a[l] = o[0]
                    } else
                        b.animatedProperties[l] = b.specialEasing && b.specialEasing[l] || b.easing || "swing";
                    if (o === "hide" && c || o === "show" && !c)
                        return b.complete.call(this);
                    if (d && (l === "height" || l === "width")) {
                        b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (i.css(this, "display") === "inline" && i.css(this, "float") === "none")
                            !i.support.inlineBlockNeedsLayout || E(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1
                    }
                }
                if (b.overflow != null)
                    this.style.overflow = "hidden";
                for (g in a) {
                    d = new i.fx(this, b, g);
                    o = a[g];
                    if (Uc.test(o))
                        if (l = i._data(this, "toggle" + g) || (o === "toggle" ? c ? "show" : "hide" : 0)) {
                            i._data(this, "toggle" + g, l === "show" ? "hide" : "show");
                            d[l]()
                        } else
                            d[o]();
                    else {
                        l = Vc.exec(o);
                        n = d.cur();
                        if (l) {
                            o = parseFloat(l[2]);
                            m = l[3] || (i.cssNumber[g] ? "" : "px");
                            if (m !== "px") {
                                i.style(this, g, (o || 1) + m);
                                n = (o || 1) / d.cur() * n;
                                i.style(this, g, n + m)
                            }
                            l[1] && (o = (l[1] === "-=" ? -1 : 1) * o + n);
                            d.custom(n, o, m)
                        } else
                            d.custom(n, o, "")
                    }
                }
                return true
            }
            var k = i.speed(b, d, c);
            if (i.isEmptyObject(a))
                return this.each(k.complete,
                    [false]);
            a = i.extend({}, a);
            return k.queue === false ? this.each(f) : this.queue(k.queue, f)
        },stop: function(a, b, d) {
            if (typeof a !== "string") {
                d = b;
                b = a;
                a = g
            }
            b && a !== false && this.queue(a || "fx", []);
            return this.each(function() {
                var b, c = false, f = i.timers, k = i._data(this);
                d || i._unmark(true, this);
                if (a == null)
                    for (b in k) {
                        if (k[b] && k[b].stop && b.indexOf(".run") === b.length - 4) {
                            var l = k[b];
                            i.removeData(this, b, true);
                            l.stop(d)
                        }
                    }
                else if (k[b = a + ".run"] && k[b].stop) {
                    k = k[b];
                    i.removeData(this, b, true);
                    k.stop(d)
                }
                for (b = f.length; b--; )
                    if (f[b].elem ===
                        this && (a == null || f[b].queue === a)) {
                        if (d)
                            f[b](true);
                        else
                            f[b].saveState();
                        c = true;
                        f.splice(b, 1)
                    }
                (!d || !c) && i.dequeue(this, a)
            })
        }});
    i.each({slideDown: z("show", 1),slideUp: z("hide", 1),slideToggle: z("toggle", 1),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        i.fn[a] = function(a, d, c) {
            return this.animate(b, a, d, c)
        }
    });
    i.extend({speed: function(a, b, d) {
        var c = a && typeof a === "object" ? i.extend({}, a) : {complete: d || !d && b || i.isFunction(a) && a,duration: a,easing: d && b || b && !i.isFunction(b) &&
            b};
        c.duration = i.fx.off ? 0 : typeof c.duration === "number" ? c.duration : c.duration in i.fx.speeds ? i.fx.speeds[c.duration] : i.fx.speeds._default;
        if (c.queue == null || c.queue === true)
            c.queue = "fx";
        c.old = c.complete;
        c.complete = function(a) {
            i.isFunction(c.old) && c.old.call(this);
            c.queue ? i.dequeue(this, c.queue) : a !== false && i._unmark(this)
        };
        return c
    },easing: {linear: function(a) {
        return a
    },swing: function(a) {
        return -Math.cos(a * Math.PI) / 2 + 0.5
    }},timers: [],fx: function(a, b, d) {
        this.options = b;
        this.elem = a;
        this.prop = d;
        b.orig = b.orig ||
        {}
    }});
    i.fx.prototype = {update: function() {
        this.options.step && this.options.step.call(this.elem, this.now, this);
        (i.fx.step[this.prop] || i.fx.step._default)(this)
    },cur: function() {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
            return this.elem[this.prop];
        var a, b = i.css(this.elem, this.prop);
        return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
    },custom: function(a, b, d) {
        function c(a) {
            return f.step(a)
        }
        var f = this, l = i.fx;
        this.startTime = Ga || k();
        this.end = b;
        this.now = this.start = a;
        this.pos =
            this.state = 0;
        this.unit = d || this.unit || (i.cssNumber[this.prop] ? "" : "px");
        c.queue = this.options.queue;
        c.elem = this.elem;
        c.saveState = function() {
            i._data(f.elem, "fxshow" + f.prop) === g && (f.options.hide ? i._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && i._data(f.elem, "fxshow" + f.prop, f.end))
        };
        c() && (i.timers.push(c) && !Xa) && (Xa = setInterval(l.tick, l.interval))
    },show: function() {
        var a = i._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = a || i.style(this.elem, this.prop);
        this.options.show = true;
        a !==
            g ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
        i(this.elem).show()
    },hide: function() {
        this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop);
        this.options.hide = true;
        this.custom(this.cur(), 0)
    },step: function(a) {
        var b, d = Ga || k(), c = true, f = this.elem, l = this.options;
        if (a || d >= l.duration + this.startTime) {
            this.now = this.end;
            this.pos = this.state = 1;
            this.update();
            l.animatedProperties[this.prop] = true;
            for (b in l.animatedProperties)
                l.animatedProperties[b] !==
                    true && (c = false);
            if (c) {
                l.overflow != null && !i.support.shrinkWrapBlocks && i.each(["", "X", "Y"], function(a, b) {
                    f.style["overflow" + b] = l.overflow[a]
                });
                l.hide && i(f).hide();
                if (l.hide || l.show)
                    for (b in l.animatedProperties) {
                        i.style(f, b, l.orig[b]);
                        i.removeData(f, "fxshow" + b, true);
                        i.removeData(f, "toggle" + b, true)
                    }
                if (a = l.complete) {
                    l.complete = false;
                    a.call(f)
                }
            }
            return false
        }
        if (l.duration == Infinity)
            this.now = d;
        else {
            a = d - this.startTime;
            this.state = a / l.duration;
            this.pos = i.easing[l.animatedProperties[this.prop]](this.state, a,
                0, 1, l.duration);
            this.now = this.start + (this.end - this.start) * this.pos
        }
        this.update();
        return true
    }};
    i.extend(i.fx, {tick: function() {
        for (var a, b = i.timers, d = 0; d < b.length; d++) {
            a = b[d];
            !a() && b[d] === a && b.splice(d--, 1)
        }
        b.length || i.fx.stop()
    },interval: 13,stop: function() {
        clearInterval(Xa);
        Xa = null
    },speeds: {slow: 600,fast: 200,_default: 400},step: {opacity: function(a) {
        i.style(a.elem, "opacity", a.now)
    },_default: function(a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
    }}});
    i.each(Ha.concat.apply([], Ha), function(a, b) {
        b.indexOf("margin") && (i.fx.step[b] = function(a) {
            i.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.animated = function(a) {
        return i.grep(i.timers, function(b) {
            return a === b.elem
        }).length
    });
    var Zb, Wc = /^t(?:able|d|h)$/i, $b = /^(?:body|html)$/i;
    Zb = "getBoundingClientRect" in o.documentElement ? function(a, b, d, c) {
        try {
            c = a.getBoundingClientRect()
        } catch (f) {
        }
        if (!c || !i.contains(d, a))
            return c ? {top: c.top,left: c.left} : {top: 0,left: 0};
        a = b.body;
        b = L(b);
        return {top: c.top + (b.pageYOffset || i.support.boxModel && d.scrollTop || a.scrollTop) - (d.clientTop || a.clientTop || 0),left: c.left + (b.pageXOffset || i.support.boxModel && d.scrollLeft || a.scrollLeft) - (d.clientLeft || a.clientLeft || 0)}
    } : function(a, b, d) {
        var c, f = a.offsetParent, k = b.body;
        c = (b = b.defaultView) ? b.getComputedStyle(a, null) : a.currentStyle;
        for (var l = a.offsetTop, o = a.offsetLeft; (a = a.parentNode) && a !== k && a !== d; ) {
            if (i.support.fixedPosition && c.position === "fixed")
                break;
            c = b ? b.getComputedStyle(a, null) : a.currentStyle;
            l = l - a.scrollTop;
            o = o - a.scrollLeft;
            if (a === f) {
                l = l + a.offsetTop;
                o = o + a.offsetLeft;
                if (i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !Wc.test(a.nodeName))) {
                    l = l + (parseFloat(c.borderTopWidth) || 0);
                    o = o + (parseFloat(c.borderLeftWidth) || 0)
                }
                f = a.offsetParent
            }
            if (i.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible") {
                l = l + (parseFloat(c.borderTopWidth) || 0);
                o = o + (parseFloat(c.borderLeftWidth) || 0)
            }
        }
        if (c.position === "relative" || c.position === "static") {
            l = l + k.offsetTop;
            o = o + k.offsetLeft
        }
        if (i.support.fixedPosition &&
            c.position === "fixed") {
            l = l + Math.max(d.scrollTop, k.scrollTop);
            o = o + Math.max(d.scrollLeft, k.scrollLeft)
        }
        return {top: l,left: o}
    };
    i.fn.offset = function(a) {
        if (arguments.length)
            return a === g ? this : this.each(function(b) {
                i.offset.setOffset(this, a, b)
            });
        var b = this[0], d = b && b.ownerDocument;
        return !d ? null : b === d.body ? i.offset.bodyOffset(b) : Zb(b, d, d.documentElement)
    };
    i.offset = {bodyOffset: function(a) {
        var b = a.offsetTop, d = a.offsetLeft;
        if (i.support.doesNotIncludeMarginInBodyOffset) {
            b = b + (parseFloat(i.css(a, "marginTop")) || 0);
            d = d + (parseFloat(i.css(a, "marginLeft")) || 0)
        }
        return {top: b,left: d}
    },setOffset: function(a, b, d) {
        var c = i.css(a, "position");
        if (c === "static")
            a.style.position = "relative";
        var f = i(a), k = f.offset(), l = i.css(a, "top"), o = i.css(a, "left"), g = {}, n = {};
        if ((c === "absolute" || c === "fixed") && i.inArray("auto", [l, o]) > -1) {
            n = f.position();
            c = n.top;
            o = n.left
        } else {
            c = parseFloat(l) || 0;
            o = parseFloat(o) || 0
        }
        i.isFunction(b) && (b = b.call(a, d, k));
        if (b.top != null)
            g.top = b.top - k.top + c;
        if (b.left != null)
            g.left = b.left - k.left + o;
        "using" in b ? b.using.call(a,
            g) : f.css(g)
    }};
    i.fn.extend({position: function() {
        if (!this[0])
            return null;
        var a = this[0], b = this.offsetParent(), d = this.offset(), c = $b.test(b[0].nodeName) ? {top: 0,left: 0} : b.offset();
        d.top = d.top - (parseFloat(i.css(a, "marginTop")) || 0);
        d.left = d.left - (parseFloat(i.css(a, "marginLeft")) || 0);
        c.top = c.top + (parseFloat(i.css(b[0], "borderTopWidth")) || 0);
        c.left = c.left + (parseFloat(i.css(b[0], "borderLeftWidth")) || 0);
        return {top: d.top - c.top,left: d.left - c.left}
    },offsetParent: function() {
        return this.map(function() {
            for (var a =
                this.offsetParent || o.body; a && !$b.test(a.nodeName) && i.css(a, "position") === "static"; )
                a = a.offsetParent;
            return a
        })
    }});
    i.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(a, b) {
        var d = /Y/.test(b);
        i.fn[a] = function(c) {
            return i.access(this, function(a, c, f) {
                var k = L(a);
                if (f === g)
                    return k ? b in k ? k[b] : i.support.boxModel && k.document.documentElement[c] || k.document.body[c] : a[c];
                k ? k.scrollTo(!d ? f : i(k).scrollLeft(), d ? f : i(k).scrollTop()) : a[c] = f
            }, a, c, arguments.length, null)
        }
    });
    i.each({Height: "height",Width: "width"},
        function(a, b) {
            var d = "client" + a, c = "scroll" + a, f = "offset" + a;
            i.fn["inner" + a] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(i.css(a, b, "padding")) : this[b]() : null
            };
            i.fn["outer" + a] = function(a) {
                var d = this[0];
                return d ? d.style ? parseFloat(i.css(d, b, a ? "margin" : "border")) : this[b]() : null
            };
            i.fn[b] = function(a) {
                return i.access(this, function(a, b, k) {
                    if (i.isWindow(a)) {
                        b = a.document;
                        a = b.documentElement[d];
                        return i.support.boxModel && a || b.body && b.body[d] || a
                    }
                    if (a.nodeType === 9) {
                        b = a.documentElement;
                        return b[d] >= b[c] ?
                            b[d] : Math.max(a.body[c], b[c], a.body[f], b[f])
                    }
                    if (k === g) {
                        a = i.css(a, b);
                        b = parseFloat(a);
                        return i.isNumeric(b) ? b : a
                    }
                    i(a).css(b, k)
                }, b, a, arguments.length, null)
            }
        });
    c.jQuery = c.$ = i;
    "function" === typeof define && (define.amd && define.amd.jQuery) && define("jquery", [], function() {
        return i
    })
})(window);
(function(c) {
    function g(b) {
        var d = b || window.event, a = [].slice.call(arguments, 1), g = 0, p = 0, q = 0, b = c.event.fix(d);
        b.type = "mousewheel";
        d.wheelDelta && (g = d.wheelDelta / 120);
        d.detail && (g = -d.detail / 3);
        q = g;
        void 0 !== d.axis && d.axis === d.HORIZONTAL_AXIS && (q = 0, p = -1 * g);
        void 0 !== d.wheelDeltaY && (q = d.wheelDeltaY / 120);
        void 0 !== d.wheelDeltaX && (p = -1 * d.wheelDeltaX / 120);
        a.unshift(b, g, p, q);
        return (c.event.dispatch || c.event.handle).apply(this, a)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (c.event.fixHooks)
        for (var d = b.length; d; )
            c.event.fixHooks[b[--d]] =
                c.event.mouseHooks;
    c.event.special.mousewheel = {setup: function() {
        if (this.addEventListener)
            for (var d = b.length; d; )
                this.addEventListener(b[--d], g, !1);
        else
            this.onmousewheel = g
    },teardown: function() {
        if (this.removeEventListener)
            for (var d = b.length; d; )
                this.removeEventListener(b[--d], g, !1);
        else
            this.onmousewheel = null
    }};
    c.fn.extend({mousewheel: function(b) {
        return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
    },unmousewheel: function(b) {
        return this.unbind("mousewheel", b)
    }})
})(jQuery);
(function() {
    function c(a, b, d) {
        if (a === b)
            return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)
            return a === b;
        a._chain && (a = a._wrapped);
        b._chain && (b = b._wrapped);
        if (a.isEqual && l.isFunction(a.isEqual))
            return a.isEqual(b);
        if (b.isEqual && l.isFunction(b.isEqual))
            return b.isEqual(a);
        var i = p.call(a);
        if (i != p.call(b))
            return !1;
        switch (i) {
            case "[object String]":
                return a == "" + b;
            case "[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source ==
                    b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)
            return !1;
        for (var f = d.length; f--; )
            if (d[f] == a)
                return !0;
        d.push(a);
        var f = 0, k = !0;
        if ("[object Array]" == i) {
            if (f = a.length, k = f == b.length)
                for (; f-- && (k = f in a == f in b && c(a[f], b[f], d)); )
                    ;
        } else {
            if ("constructor" in a != "constructor" in b || a.constructor != b.constructor)
                return !1;
            for (var o in a)
                if (l.has(a, o) && (f++, !(k = l.has(b, o) && c(a[o], b[o], d))))
                    break;
            if (k) {
                for (o in b)
                    if (l.has(b, o) && !f--)
                        break;
                k = !f
            }
        }
        d.pop();
        return k
    }
    var g = this, b = g._, d = {}, f = Array.prototype, m = Object.prototype, a = f.slice, r = f.unshift, p = m.toString, q = m.hasOwnProperty, n = f.forEach, s = f.map, u = f.reduce, v = f.reduceRight, x = f.filter, t = f.every, w = f.some, C = f.indexOf, D = f.lastIndexOf, m = Array.isArray, G = Object.keys, k = Function.prototype.bind, l = function(a) {
        return new M(a)
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = l), exports._ = l) : g._ = l;
    l.VERSION = "1.3.3";
    var z = l.each = l.forEach = function(a,
                                          b, c) {
        if (null != a)
            if (n && a.forEach === n)
                a.forEach(b, c);
            else if (a.length === +a.length)
                for (var i = 0, f = a.length; i < f && !(i in a && b.call(c, a[i], i, a) === d); i++)
                    ;
            else
                for (i in a)
                    if (l.has(a, i) && b.call(c, a[i], i, a) === d)
                        break
    };
    l.map = l.collect = function(a, b, d) {
        var c = [];
        if (null == a)
            return c;
        if (s && a.map === s)
            return a.map(b, d);
        z(a, function(a, i, f) {
            c[c.length] = b.call(d, a, i, f)
        });
        a.length === +a.length && (c.length = a.length);
        return c
    };
    l.reduce = l.foldl = l.inject = function(a, b, d, c) {
        var i = 2 < arguments.length;
        null == a && (a = []);
        if (u && a.reduce ===
            u)
            return c && (b = l.bind(b, c)), i ? a.reduce(b, d) : a.reduce(b);
        z(a, function(a, f, k) {
            i ? d = b.call(c, d, a, f, k) : (d = a, i = !0)
        });
        if (!i)
            throw new TypeError("Reduce of empty array with no initial value");
        return d
    };
    l.reduceRight = l.foldr = function(a, b, d, c) {
        var i = 2 < arguments.length;
        null == a && (a = []);
        if (v && a.reduceRight === v)
            return c && (b = l.bind(b, c)), i ? a.reduceRight(b, d) : a.reduceRight(b);
        var f = l.toArray(a).reverse();
        c && !i && (b = l.bind(b, c));
        return i ? l.reduce(f, b, d, c) : l.reduce(f, b)
    };
    l.find = l.detect = function(a, b, d) {
        var c;
        E(a, function(a,
                      i, f) {
            if (b.call(d, a, i, f))
                return c = a, !0
        });
        return c
    };
    l.filter = l.select = function(a, b, d) {
        var c = [];
        if (null == a)
            return c;
        if (x && a.filter === x)
            return a.filter(b, d);
        z(a, function(a, i, f) {
            b.call(d, a, i, f) && (c[c.length] = a)
        });
        return c
    };
    l.reject = function(a, b, d) {
        var c = [];
        if (null == a)
            return c;
        z(a, function(a, i, f) {
            b.call(d, a, i, f) || (c[c.length] = a)
        });
        return c
    };
    l.every = l.all = function(a, b, c) {
        var i = !0;
        if (null == a)
            return i;
        if (t && a.every === t)
            return a.every(b, c);
        z(a, function(a, f, k) {
            if (!(i = i && b.call(c, a, f, k)))
                return d
        });
        return !!i
    };
    var E = l.some = l.any = function(a, b, c) {
        b || (b = l.identity);
        var i = !1;
        if (null == a)
            return i;
        if (w && a.some === w)
            return a.some(b, c);
        z(a, function(a, f, k) {
            if (i || (i = b.call(c, a, f, k)))
                return d
        });
        return !!i
    };
    l.include = l.contains = function(a, b) {
        return null == a ? !1 : C && a.indexOf === C ? -1 != a.indexOf(b) : E(a, function(a) {
            return a === b
        })
    };
    l.invoke = function(b, d) {
        var c = a.call(arguments, 2);
        return l.map(b, function(a) {
            return (l.isFunction(d) ? d || a : a[d]).apply(a, c)
        })
    };
    l.pluck = function(a, b) {
        return l.map(a, function(a) {
            return a[b]
        })
    };
    l.max = function(a,
                     b, d) {
        if (!b && l.isArray(a) && a[0] === +a[0])
            return Math.max.apply(Math, a);
        if (!b && l.isEmpty(a))
            return -Infinity;
        var c = {computed: -Infinity};
        z(a, function(a, i, f) {
            i = b ? b.call(d, a, i, f) : a;
            i >= c.computed && (c = {value: a,computed: i})
        });
        return c.value
    };
    l.min = function(a, b, d) {
        if (!b && l.isArray(a) && a[0] === +a[0])
            return Math.min.apply(Math, a);
        if (!b && l.isEmpty(a))
            return Infinity;
        var c = {computed: Infinity};
        z(a, function(a, i, f) {
            i = b ? b.call(d, a, i, f) : a;
            i < c.computed && (c = {value: a,computed: i})
        });
        return c.value
    };
    l.shuffle = function(a) {
        var b =
            [], d;
        z(a, function(a, c) {
            d = Math.floor(Math.random() * (c + 1));
            b[c] = b[d];
            b[d] = a
        });
        return b
    };
    l.sortBy = function(a, b, d) {
        var c = l.isFunction(b) ? b : function(a) {
            return a[b]
        };
        return l.pluck(l.map(a, function(a, b, i) {
            return {value: a,criteria: c.call(d, a, b, i)}
        }).sort(function(a, b) {
                var d = a.criteria, c = b.criteria;
                return void 0 === d ? 1 : void 0 === c ? -1 : d < c ? -1 : d > c ? 1 : 0
            }), "value")
    };
    l.groupBy = function(a, b) {
        var d = {}, c = l.isFunction(b) ? b : function(a) {
            return a[b]
        };
        z(a, function(a, b) {
            var i = c(a, b);
            (d[i] || (d[i] = [])).push(a)
        });
        return d
    };
    l.sortedIndex =
        function(a, b, d) {
            d || (d = l.identity);
            for (var c = 0, i = a.length; c < i; ) {
                var f = c + i >> 1;
                d(a[f]) < d(b) ? c = f + 1 : i = f
            }
            return c
        };
    l.toArray = function(b) {
        return !b ? [] : l.isArray(b) || l.isArguments(b) ? a.call(b) : b.toArray && l.isFunction(b.toArray) ? b.toArray() : l.values(b)
    };
    l.size = function(a) {
        return l.isArray(a) ? a.length : l.keys(a).length
    };
    l.first = l.head = l.take = function(b, d, c) {
        return null != d && !c ? a.call(b, 0, d) : b[0]
    };
    l.initial = function(b, d, c) {
        return a.call(b, 0, b.length - (null == d || c ? 1 : d))
    };
    l.last = function(b, d, c) {
        return null != d && !c ?
            a.call(b, Math.max(b.length - d, 0)) : b[b.length - 1]
    };
    l.rest = l.tail = function(b, d, c) {
        return a.call(b, null == d || c ? 1 : d)
    };
    l.compact = function(a) {
        return l.filter(a, function(a) {
            return !!a
        })
    };
    l.flatten = function(a, b) {
        return l.reduce(a, function(a, d) {
            if (l.isArray(d))
                return a.concat(b ? d : l.flatten(d));
            a[a.length] = d;
            return a
        }, [])
    };
    l.without = function(b) {
        return l.difference(b, a.call(arguments, 1))
    };
    l.uniq = l.unique = function(a, b, d) {
        var d = d ? l.map(a, d) : a, c = [];
        3 > a.length && (b = !0);
        l.reduce(d, function(d, i, f) {
            if (b ? l.last(d) !== i ||
                !d.length : !l.include(d, i))
                d.push(i), c.push(a[f]);
            return d
        }, []);
        return c
    };
    l.union = function() {
        return l.uniq(l.flatten(arguments, !0))
    };
    l.intersection = l.intersect = function(b) {
        var d = a.call(arguments, 1);
        return l.filter(l.uniq(b), function(a) {
            return l.every(d, function(b) {
                return 0 <= l.indexOf(b, a)
            })
        })
    };
    l.difference = function(b) {
        var d = l.flatten(a.call(arguments, 1), !0);
        return l.filter(b, function(a) {
            return !l.include(d, a)
        })
    };
    l.zip = function() {
        for (var b = a.call(arguments), d = l.max(l.pluck(b, "length")), c = Array(d), i =
            0; i < d; i++)
            c[i] = l.pluck(b, "" + i);
        return c
    };
    l.indexOf = function(a, b, d) {
        if (null == a)
            return -1;
        var c;
        if (d)
            return d = l.sortedIndex(a, b), a[d] === b ? d : -1;
        if (C && a.indexOf === C)
            return a.indexOf(b);
        d = 0;
        for (c = a.length; d < c; d++)
            if (d in a && a[d] === b)
                return d;
        return -1
    };
    l.lastIndexOf = function(a, b) {
        if (null == a)
            return -1;
        if (D && a.lastIndexOf === D)
            return a.lastIndexOf(b);
        for (var d = a.length; d--; )
            if (d in a && a[d] === b)
                return d;
        return -1
    };
    l.range = function(a, b, d) {
        1 >= arguments.length && (b = a || 0, a = 0);
        for (var d = arguments[2] || 1, c = Math.max(Math.ceil((b -
            a) / d), 0), i = 0, f = Array(c); i < c; )
            f[i++] = a, a += d;
        return f
    };
    var L = function() {
    };
    l.bind = function(b, d) {
        var c, i;
        if (b.bind === k && k)
            return k.apply(b, a.call(arguments, 1));
        if (!l.isFunction(b))
            throw new TypeError;
        i = a.call(arguments, 2);
        return c = function() {
            if (!(this instanceof c))
                return b.apply(d, i.concat(a.call(arguments)));
            L.prototype = b.prototype;
            var f = new L, k = b.apply(f, i.concat(a.call(arguments)));
            return Object(k) === k ? k : f
        }
    };
    l.bindAll = function(b) {
        var d = a.call(arguments, 1);
        0 == d.length && (d = l.functions(b));
        z(d, function(a) {
            b[a] =
                l.bind(b[a], b)
        });
        return b
    };
    l.memoize = function(a, b) {
        var d = {};
        b || (b = l.identity);
        return function() {
            var c = b.apply(this, arguments);
            return l.has(d, c) ? d[c] : d[c] = a.apply(this, arguments)
        }
    };
    l.delay = function(b, d) {
        var c = a.call(arguments, 2);
        return setTimeout(function() {
            return b.apply(null, c)
        }, d)
    };
    l.defer = function(b) {
        return l.delay.apply(l, [b, 1].concat(a.call(arguments, 1)))
    };
    l.throttle = function(a, b) {
        var d, c, i, f, k, o, g = l.debounce(function() {
            k = f = !1
        }, b);
        return function() {
            d = this;
            c = arguments;
            i || (i = setTimeout(function() {
                i =
                    null;
                k && a.apply(d, c);
                g()
            }, b));
            f ? k = !0 : o = a.apply(d, c);
            g();
            f = !0;
            return o
        }
    };
    l.debounce = function(a, b, d) {
        var c;
        return function() {
            var i = this, f = arguments;
            d && !c && a.apply(i, f);
            clearTimeout(c);
            c = setTimeout(function() {
                c = null;
                d || a.apply(i, f)
            }, b)
        }
    };
    l.once = function(a) {
        var b = !1, d;
        return function() {
            if (b)
                return d;
            b = !0;
            return d = a.apply(this, arguments)
        }
    };
    l.wrap = function(b, d) {
        return function() {
            var c = [b].concat(a.call(arguments, 0));
            return d.apply(this, c)
        }
    };
    l.compose = function() {
        var a = arguments;
        return function() {
            for (var b =
                arguments, d = a.length - 1; 0 <= d; d--)
                b = [a[d].apply(this, b)];
            return b[0]
        }
    };
    l.after = function(a, b) {
        return 0 >= a ? b() : function() {
            if (1 > --a)
                return b.apply(this, arguments)
        }
    };
    l.keys = G || function(a) {
        if (a !== Object(a))
            throw new TypeError("Invalid object");
        var b = [], d;
        for (d in a)
            l.has(a, d) && (b[b.length] = d);
        return b
    };
    l.values = function(a) {
        return l.map(a, l.identity)
    };
    l.functions = l.methods = function(a) {
        var b = [], d;
        for (d in a)
            l.isFunction(a[d]) && b.push(d);
        return b.sort()
    };
    l.extend = function(b) {
        z(a.call(arguments, 1), function(a) {
            for (var d in a)
                b[d] =
                    a[d]
        });
        return b
    };
    l.pick = function(b) {
        var d = {};
        z(l.flatten(a.call(arguments, 1)), function(a) {
           (d[a] = b[a])
        });
        return d
    };
    l.defaults = function(b) {
        z(a.call(arguments, 1), function(a) {
            for (var d in a)
                null == b[d] && (b[d] = a[d])
        });
        return b
    };
    l.clone = function(a) {
        return !l.isObject(a) ? a : l.isArray(a) ? a.slice() : l.extend({}, a)
    };
    l.tap = function(a, b) {
        b(a);
        return a
    };
    l.isEqual = function(a, b) {
        return c(a, b, [])
    };
    l.isEmpty = function(a) {
        if (null == a)
            return !0;
        if (l.isArray(a) || l.isString(a))
            return 0 === a.length;
        for (var b in a)
            if (l.has(a,
                b))
                return !1;
        return !0
    };
    l.isElement = function(a) {
        return !!(a && 1 == a.nodeType)
    };
    l.isArray = m || function(a) {
        return "[object Array]" == p.call(a)
    };
    l.isObject = function(a) {
        return a === Object(a)
    };
    l.isArguments = function(a) {
        return "[object Arguments]" == p.call(a)
    };
    l.isArguments(arguments) || (l.isArguments = function(a) {
        return !(!a || !l.has(a, "callee"))
    });
    l.isFunction = function(a) {
        return "[object Function]" == p.call(a)
    };
    l.isString = function(a) {
        return "[object String]" == p.call(a)
    };
    l.isNumber = function(a) {
        return "[object Number]" ==
            p.call(a)
    };
    l.isFinite = function(a) {
        return l.isNumber(a) && isFinite(a)
    };
    l.isNaN = function(a) {
        return a !== a
    };
    l.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" == p.call(a)
    };
    l.isDate = function(a) {
        return "[object Date]" == p.call(a)
    };
    l.isRegExp = function(a) {
        return "[object RegExp]" == p.call(a)
    };
    l.isNull = function(a) {
        return null === a
    };
    l.isUndefined = function(a) {
        return void 0 === a
    };
    l.has = function(a, b) {
        return q.call(a, b)
    };
    l.noConflict = function() {
        g._ = b;
        return this
    };
    l.identity = function(a) {
        return a
    };
    l.times =
        function(a, b, d) {
            for (var c = 0; c < a; c++)
                b.call(d, c)
        };
    l.escape = function(a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    l.result = function(a, b) {
        if (null == a)
            return null;
        var d = a[b];
        return l.isFunction(d) ? d.call(a) : d
    };
    l.mixin = function(b) {
        z(l.functions(b), function(d) {
            var c = l[d] = b[d];
            M.prototype[d] = function() {
                var b = a.call(arguments);
                r.call(b, this._wrapped);
                return O(c.apply(l, b), this._chain)
            }
        })
    };
    var o = 0;
    l.uniqueId =
        function(a) {
            var b = o++;
            return a ? a + b : b
        };
    l.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g};
    var B = /.^/, i = {"\\": "\\","'": "'",r: "\r",n: "\n",t: "\t",u2028: "\u2028",u2029: "\u2029"}, H;
    for (H in i)
        i[i[H]] = H;
    var y = /\\|'|\r|\n|\t|\u2028|\u2029/g, N = /\\(\\|'|r|n|t|u2028|u2029)/g, R = function(a) {
        return a.replace(N, function(a, b) {
            return i[b]
        })
    };
    l.template = function(a, b, d) {
        d = l.defaults(d || {}, l.templateSettings);
        a = "__p+='" + a.replace(y, function(a) {
            return "\\" + i[a]
        }).replace(d.escape ||
            B, function(a, b) {
                return "'+\n_.escape(" + R(b) + ")+\n'"
            }).replace(d.interpolate || B, function(a, b) {
                return "'+\n(" + R(b) + ")+\n'"
            }).replace(d.evaluate || B, function(a, b) {
                return "';\n" + R(b) + "\n;__p+='"
            }) + "';\n";
        d.variable || (a = "with(obj||{}){\n" + a + "}\n");
        var a = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + a + "return __p;\n", c = new Function(d.variable || "obj", "_", a);
        if (b)
            return c(b, l);
        b = function(a) {
            return c.call(this, a, l)
        };
        b.source = "function(" + (d.variable || "obj") + "){\n" + a + "}";
        return b
    };
    l.chain = function(a) {
        return l(a).chain()
    };
    var M = function(a) {
        this._wrapped = a
    };
    l.prototype = M.prototype;
    var O = function(a, b) {
        return b ? l(a).chain() : a
    };
    l.mixin(l);
    z("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var b = f[a];
        M.prototype[a] = function() {
            var d = this._wrapped;
            b.apply(d, arguments);
            var c = d.length;
            (a == "shift" || a == "splice") && c === 0 && delete d[0];
            return O(d, this._chain)
        }
    });
    z(["concat", "join", "slice"], function(a) {
        var b = f[a];
        M.prototype[a] = function() {
            return O(b.apply(this._wrapped, arguments),
                this._chain)
        }
    });
    M.prototype.chain = function() {
        this._chain = !0;
        return this
    };
    M.prototype.value = function() {
        return this._wrapped
    }
}).call(this);
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
 //@ sourceMappingURL=backbone-min.map
 */
DEBUG = !1;
window.console || (window.console = {info: function() {
}});
function isMobileDevice() {
    return /(mobile|iphone|ipad|android)/gi.test(navigator.appVersion)
}
function setElementUnselectable(c, g) {
    if (c.nodeType == 1) {
        var b = c.tagName.toUpperCase();
        b !== "TEXTAREA" && b !== "INPUT" && c.setAttribute("unselectable", g)
    }
    for (b = c.firstChild; b; ) {
        setElementUnselectable(b, g);
        b = b.nextSibling
    }
}
function setUnselectable(c, g) {
    var b = $(c), d = b[0], f = {}, m = $.support.cssAttrCheck("userSelect");
    if (m) {
        f[m] = g == "on" ? "none" : "text";
        b.css(f)
    } else
        setElementUnselectable(d, g)
}
function scaleImage(c, g, b, d) {
    return d > b ? scaleHeight(c, g, b, d) : d / b < g / c ? scaleWidth(c, g, b, d) : scaleHeight(c, g, b, d)
}
function scaleHeight(c, g, b, d) {
    b = Math.ceil(c / b * d);
    if (b < g) {
        b = g;
        c = "auto"
    }
    return {top: -parseInt((b - g) / 5 * 2),left: 0,height: b,width: c}
}
function scaleWidth(c, g, b, d) {
    b = Math.ceil(g / d * b);
    if (b < c) {
        b = c;
        g = "auto"
    }
    return {top: 0,left: -parseInt((b - c) / 2),width: b,height: g}
}
Date.now || (Date.now = function() {
    return +new Date
});
(function(c, g) {
    g.support.placeholder = false;
    test = c.createElement("input");
    if ("placeholder" in test)
        g.support.placeholder = true;
    var b = {};
    g.extend(g.support, {cssAttrCheck: function(d) {
        if (!d)
            return d;
        if (b[d])
            return b[d];
        var f = c.createElement("div"), g = ["Webkit", "Moz", "O", "ms"];
        if (f.style[d] === void 0) {
            for (var a = 0, r = g.length, p; a < r; a++) {
                p = g[a] + d.replace(/\w/, function(a) {
                    return a.toUpperCase()
                });
                if (f.style[p] !== void 0) {
                    b[d] = p;
                    return b[d]
                }
            }
            return false
        }
        b[d] = d.replace(/([A-Z])/g, "-$1");
        return d
    },positionFixed: function() {
        var b =
            true, c;
        return function() {
            if (!c) {
                var m = g('<div style="position:fixed;left:-9999px;top:-9999px">');
                g("body").append(m);
                m.offset().left >= 0 && (b = false);
                m.remove();
                c = true
            }
            return b
        }
    }(),positionfullSize: function() {
        var b = true, c;
        return function() {
            if (!c) {
                var m = g('<div style="position:absolute;left:-9999px;top:-9999px;width:50px;height:50px;"></div>'), a = g('<div style="position:absolute;left:0;right:0;top:0;bottom:0;"></div>');
                m.append(a);
                g("body").append(m);
                a.height() != 50 && (b = false);
                m.remove();
                c = true
            }
            return b
        }
    }(),
        minHeight: function() {
            var b, c = true;
            return function() {
                if (!b) {
                    var m = g("<div>").css("min-height", "50px").appendTo("body");
                    m.height() !== 50 && (c = false);
                    b = true;
                    m.remove()
                }
                return c
            }
        }()});
    g.extend(g.fn, {getPadding: function() {
        if (!this.length)
            return false;
        var b = this.eq(0), c = parseInt(b.css("padding-top")), g = parseInt(b.css("padding-bottom")), a = parseInt(b.css("padding-left")), b = parseInt(b.css("padding-right"));
        isNaN(c) && (c = 0);
        isNaN(g) && (g = 0);
        isNaN(a) && (a = 0);
        isNaN(b) && (b = 0);
        return {top: c,right: b,bottom: g,left: a}
    },
        lineHeight: function() {
            if (!this.length)
                return false;
            var b = this.eq(0), c = parseInt(b.css("font-size")), b = b.css("line-height");
            isNaN(c) && (c = 14);
            return b = b.indexOf("px") != -1 ? parseInt(b) : c * (b - 0)
        },lineLimit: function(b) {
            b && this.each(function() {
                var c = g(this), m = c.lineHeight(), a = c.height(), m = m * b;
                a > m && c.height(Math.floor(m))
            })
        }});
    g.extend({timeParse: function(b) {
        b = Date.parse(b);
        if (!b)
            return "";
        var c = (+new Date - b) / 1E3;
        if (c < 60)
            return "\u521a\u521a";
        if (c < 3600)
            return Math.floor(c / 60) + "\u5206\u949f\u524d";
        if (c < 86400)
            return Math.floor(c /
                3600) + "\u5c0f\u65f6\u524d";
        if (c < 1296E3)
            return Math.floor(c / 86400) + "\u5929\u524d";
        b = new Date(b);
        return b.getFullYear() + "/" + g.pad(b.getMonth() + 1, 2) + "/" + g.pad(b.getDate(), 2) + " " + g.pad(b.getHours(), 2) + ":" + g.pad(b.getMinutes(), 2)
    },clearTimer: function(b) {
        clearInterval(b);
        clearTimeout(b);
        return null
    },pad: function(b, c) {
        for (var g = b.toString().length; g < c; ) {
            b = "0" + b;
            g++
        }
        return b.toString()
    },isClickInside: function(b, f) {
        if (!b || b.nodeType !== 1 || !f || f.nodeType !== 1)
            throw Error("target or elm undefined");
        var m = g(b),
            a = false;
        if (b === f)
            a = true;
        else {
            if (this === c.body)
                return false;
            m.parents().each(function() {
                if (this === c.body)
                    return a = false;
                if (this === f) {
                    a = true;
                    return false
                }
            })
        }
        return a
    },rnd: function(b, c) {
        return Math.floor((c - b + 1) * Math.random() + b)
    },isString: function(b) {
        return typeof b === "string"
    },isNotEmptyString: function(b) {
        return g.isString(b) && b !== ""
    },getByteLen: function(b) {
        if (!b)
            return 0;
        var c = b.match(/[^\x00-\xff]/ig);
        return b.length + (c == null ? 0 : c.length)
    },getChsLen: function(b) {
        if (!b)
            return 0;
        var c = b.match(/[^\x00-\xff]/ig);
        return b.length * 0.5 + (c == null ? 0 : c.length * 0.5)
    },substr: function(b, c) {
        if (!b)
            return "";
        for (var g = /[^\x00-\xff]/ig, a = 0, r = "", p = 0; p < b.length; p++) {
            var q = b.charAt(p), a = q.match(g) ? a + 2 : a + 1;
            if (a > c)
                break;
            r = r + q
        }
        return r
    },clonePlainObject: function() {
        function b(c) {
            if (!g.isPlainObject(c))
                return c;
            var m = {}, a;
            for (a in c)
                m[a] = b(c[a]);
            return m
        }
        return b
    }(),isEmail: function(b) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(b)
    },Cookie: {get: function(b) {
        var f, m;
        if (g.isNotEmptyString(b) && (m = c.cookie.match("(?:^| )" +
            b + "(?:(?:=([^;]*))|;|$)")))
            f = m[1] ? decodeURIComponent(m[1]) : "";
        return f
    },set: function(b, f, m, a, r) {
        b = b + "=" + encodeURIComponent(f);
        if (typeof m === "number") {
            f = new Date;
            f.setTime(f.getTime() + m * 864E5);
            b = b + ("; expires=" + f.toUTCString())
        }
        g.isNotEmptyString(a) && (b = b + ("; domain=" + a));
        g.isNotEmptyString(r) && (b = b + ("; path=" + r));
        c.cookie = b
    }},log: function() {
        if (!DEBUG)
            return function() {
            };
        var b;
        return function() {
            if (window.console)
                console.info(arguments);
            else {
                b || (b = g("<textarea>").css({position: "absolute",bottom: 0,width: "100%",
                    height: 100,left: 0,overflow: "auto",margin: 0,padding: 0,border: "1px solid #DDD",background: "#f3f3f3",zIndex: 99999}).appendTo("body"));
                for (var c = arguments, m = b.val(), a = 0, r = c.length; a < r; a++)
                    m = m + (c[a] + " , ");
                b.val(m + "\r\n")
            }
        }
    }()});
    g.fn.moveCursorToEnd = function() {
        if (this.length === 0)
            return this;
        var b = this[0], f = b.value.length;
        this.val(this.val()).focus();
        if (c.selection) {
            b = b.createTextRange();
            b.moveStart("character", f);
            b.collapse();
            b.select()
        } else if (typeof b.selectionStart == "number" && typeof b.selectionEnd ==
            "number")
            b.selectionStart = b.selectionEnd = f;
        return this
    };
    g.fn.fixPosition = function() {
        if (!g.browser.msie || g.browser.version != "6.0")
            return this;
        this.each(function() {
            var b = g(this), c = b.css("position");
            if (c === "fixed" || c === "absolute") {
                var m = b.parent(), c = m.width(), m = m.height(), a = parseInt(b.css("top")), r = parseInt(b.css("right")), p = parseInt(b.css("bottom")), q = parseInt(b.css("left"));
                b.css({width: c - q - r,height: m - a - p})
            }
        })
    }
})(document, jQuery);
(function() {
    var c = isMobileDevice();
    $.fn.touchClick = function(g, b) {
        if (typeof g !== "string") {
            b = g;
            g = null
        }
        var d = null, f = null, m = null, a = null;
        if (c) {
            this.on("touchstart", g, function(a) {
                a = a.originalEvent.touches[0];
                d = a.pageX;
                f = a.pageY
            });
            this.on("touchmove", g, function(b) {
                b = b.originalEvent.touches[0];
                m = b.pageX;
                a = b.pageY
            });
            this.on("touchend", g, function(c) {
                m === null && (m = d);
                a === null && (a = f);
                d !== null && (f !== null && d === m && f === a) && b.call(this, c);
                d = f = m = a = null
            })
        } else
            this.on("click", g, b);
        return this
    }
})();
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {def: "easeOutQuad",swing: function(c, g, b, d, f) {
    return jQuery.easing[jQuery.easing.def](c, g, b, d, f)
},easeInQuad: function(c, g, b, d, f) {
    return d * (g = g / f) * g + b
},easeOutQuad: function(c, g, b, d, f) {
    return -d * (g = g / f) * (g - 2) + b
},easeInOutQuad: function(c, g, b, d, f) {
    return (g = g / (f / 2)) < 1 ? d / 2 * g * g + b : -d / 2 * (--g * (g - 2) - 1) + b
},easeInCubic: function(c, g, b, d, f) {
    return d * (g = g / f) * g * g + b
},easeOutCubic: function(c, g, b, d, f) {
    return d * ((g = g / f - 1) * g * g + 1) + b
},easeInOutCubic: function(c, g, b, d, f) {
    return (g = g / (f / 2)) < 1 ? d / 2 * g *
        g * g + b : d / 2 * ((g = g - 2) * g * g + 2) + b
},easeInQuart: function(c, g, b, d, f) {
    return d * (g = g / f) * g * g * g + b
},easeOutQuart: function(c, g, b, d, f) {
    return -d * ((g = g / f - 1) * g * g * g - 1) + b
},easeInOutQuart: function(c, g, b, d, f) {
    return (g = g / (f / 2)) < 1 ? d / 2 * g * g * g * g + b : -d / 2 * ((g = g - 2) * g * g * g - 2) + b
},easeInQuint: function(c, g, b, d, f) {
    return d * (g = g / f) * g * g * g * g + b
},easeOutQuint: function(c, g, b, d, f) {
    return d * ((g = g / f - 1) * g * g * g * g + 1) + b
},easeInOutQuint: function(c, g, b, d, f) {
    return (g = g / (f / 2)) < 1 ? d / 2 * g * g * g * g * g + b : d / 2 * ((g = g - 2) * g * g * g * g + 2) + b
},easeInSine: function(c, g, b, d, f) {
    return -d *
        Math.cos(g / f * (Math.PI / 2)) + d + b
},easeOutSine: function(c, g, b, d, f) {
    return d * Math.sin(g / f * (Math.PI / 2)) + b
},easeInOutSine: function(c, g, b, d, f) {
    return -d / 2 * (Math.cos(Math.PI * g / f) - 1) + b
},easeInExpo: function(c, g, b, d, f) {
    return g == 0 ? b : d * Math.pow(2, 10 * (g / f - 1)) + b
},easeOutExpo: function(c, g, b, d, f) {
    return g == f ? b + d : d * (-Math.pow(2, -10 * g / f) + 1) + b
},easeInOutExpo: function(c, g, b, d, f) {
    return g == 0 ? b : g == f ? b + d : (g = g / (f / 2)) < 1 ? d / 2 * Math.pow(2, 10 * (g - 1)) + b : d / 2 * (-Math.pow(2, -10 * --g) + 2) + b
},easeInCirc: function(c, g, b, d, f) {
    return -d * (Math.sqrt(1 -
        (g = g / f) * g) - 1) + b
},easeOutCirc: function(c, g, b, d, f) {
    return d * Math.sqrt(1 - (g = g / f - 1) * g) + b
},easeInOutCirc: function(c, g, b, d, f) {
    return (g = g / (f / 2)) < 1 ? -d / 2 * (Math.sqrt(1 - g * g) - 1) + b : d / 2 * (Math.sqrt(1 - (g = g - 2) * g) + 1) + b
},easeInElastic: function(c, g, b, d, f) {
    var c = 1.70158, m = 0, a = d;
    if (g == 0)
        return b;
    if ((g = g / f) == 1)
        return b + d;
    m || (m = f * 0.3);
    if (a < Math.abs(d)) {
        a = d;
        c = m / 4
    } else
        c = m / (2 * Math.PI) * Math.asin(d / a);
    return -(a * Math.pow(2, 10 * (g = g - 1)) * Math.sin((g * f - c) * 2 * Math.PI / m)) + b
},easeOutElastic: function(c, g, b, d, f) {
    var c = 1.70158, m = 0, a = d;
    if (g == 0)
        return b;
    if ((g = g / f) == 1)
        return b + d;
    m || (m = f * 0.3);
    if (a < Math.abs(d)) {
        a = d;
        c = m / 4
    } else
        c = m / (2 * Math.PI) * Math.asin(d / a);
    return a * Math.pow(2, -10 * g) * Math.sin((g * f - c) * 2 * Math.PI / m) + d + b
},easeInOutElastic: function(c, g, b, d, f) {
    var c = 1.70158, m = 0, a = d;
    if (g == 0)
        return b;
    if ((g = g / (f / 2)) == 2)
        return b + d;
    m || (m = f * 0.3 * 1.5);
    if (a < Math.abs(d)) {
        a = d;
        c = m / 4
    } else
        c = m / (2 * Math.PI) * Math.asin(d / a);
    return g < 1 ? -0.5 * a * Math.pow(2, 10 * (g = g - 1)) * Math.sin((g * f - c) * 2 * Math.PI / m) + b : a * Math.pow(2, -10 * (g = g - 1)) * Math.sin((g * f - c) * 2 * Math.PI / m) * 0.5 + d +
        b
},easeInBack: function(c, g, b, d, f, m) {
    m == void 0 && (m = 1.70158);
    return d * (g = g / f) * g * ((m + 1) * g - m) + b
},easeOutBack: function(c, g, b, d, f, m) {
    m == void 0 && (m = 1.70158);
    return d * ((g = g / f - 1) * g * ((m + 1) * g + m) + 1) + b
},easeInOutBack: function(c, g, b, d, f, m) {
    m == void 0 && (m = 1.70158);
    return (g = g / (f / 2)) < 1 ? d / 2 * g * g * (((m = m * 1.525) + 1) * g - m) + b : d / 2 * ((g = g - 2) * g * (((m = m * 1.525) + 1) * g + m) + 2) + b
},easeInBounce: function(c, g, b, d, f) {
    return d - jQuery.easing.easeOutBounce(c, f - g, 0, d, f) + b
},easeOutBounce: function(c, g, b, d, f) {
    return (g = g / f) < 1 / 2.75 ? d * 7.5625 * g * g + b : g <
        2 / 2.75 ? d * (7.5625 * (g = g - 1.5 / 2.75) * g + 0.75) + b : g < 2.5 / 2.75 ? d * (7.5625 * (g = g - 2.25 / 2.75) * g + 0.9375) + b : d * (7.5625 * (g = g - 2.625 / 2.75) * g + 0.984375) + b
},easeInOutBounce: function(c, g, b, d, f) {
    return g < f / 2 ? jQuery.easing.easeInBounce(c, g * 2, 0, d, f) * 0.5 + b : jQuery.easing.easeOutBounce(c, g * 2 - f, 0, d, f) * 0.5 + d * 0.5 + b
}});
var KeyEventListener = function() {
    var c, g = {}, b = [], d;
    return {bind: function(f, m) {
        if (!d) {
            $(document).keydown(function(a) {
                clearTimeout(c);
                b.push(a.keyCode);
                if (a = g[b.join(",")]) {
                    a();
                    b = []
                } else
                    c = setTimeout(function() {
                        b = []
                    }, 500)
            });
            d = true
        }
        g[f] = m
    }}
}();
(function(c, g) {
    var b = g(c), d, f;
    g("*").on("mousemove keydown scroll", function() {
        clearTimeout(d);
        d = setTimeout(function() {
            b.trigger("useridle");
            f = true
        }, 6E4);
        if (f) {
            f = false;
            b.trigger("userpresent")
        }
    })
})(window, jQuery);
(function(c, g) {
    function b() {
        var a = p.length, b = 0;
        setTimeout(function() {
            for (; b < a; b++)
                p[b].call(m)
        }, 20)
    }
    var d = g(c), f = isMobileDevice(), m = {measure: function() {
        var a = f ? c.innerWidth : d.width(), b = f ? c.innerHeight : d.height();
        if (f)
            for (var g = document.getElementsByTagName("meta"), r = g.length, q = 0; q < r; q++) {
                var p = g[q];
                if (p.getAttribute("name") == "viewport") {
                    p.setAttribute("content", "width = " + a + ",maximum-scale=1,user-scalable=no");
                    break
                }
            }
        m.width = a;
        m.height = b
    }};
    m.measure();
    g(document).ready(function() {
        m.measure()
    });
    var a,
        r, p = [], q = {add: function(c) {
            if (!a) {
                d.resize(function() {
                    clearTimeout(r);
                    r = setTimeout(b, 100)
                });
                a = true
            }
            a: {
                for (var f = p.length, g = 0; g < f; g++)
                    if (c === p[g])
                        break a;
                p.push(c)
            }
        }};
    q.add(function() {
        m.measure()
    });
    c.WindowResizeListener = q;
    c.WindowSize = m
})(window, jQuery);
(function(c) {
    function g() {
        var f;
        f = c(this);
        if (!f.data("timeago")) {
            var g = d.datetime(f);
            f.data("timeago", {datetime: g});
            c.trim(f.text()).length > 0 && (!d.isTime(f) || f.attr("title"))
        }
        f = f.data("timeago");
        isNaN(f.datetime) || c(this).text(b(f.datetime));
        return this
    }
    function b(b) {
        return d.inWords((new Date).getTime() - b.getTime())
    }
    c.timeago = function(d) {
        return d instanceof Date ? b(d) : typeof d === "string" ? b(c.timeago.parse(d)) : typeof d === "number" ? b(new Date(d)) : b(c.timeago.datetime(d))
    };
    var d = c.timeago;
    c.extend(c.timeago,
        {settings: {refreshMillis: 6E4,allowFuture: true,strings: {prefixAgo: null,prefixFromNow: null,suffixAgo: "\u524d",suffixFromNow: "",seconds: "\u521a\u521a",minute: "1\u5206\u949f",minutes: "%d\u5206\u949f",hour: "1\u5c0f\u65f6",hours: "%d\u5c0f\u65f6",day: "1\u5929",days: "%d\u5929",month: "1\u4e2a\u6708",months: "%d\u6708",year: "1\u5e74",years: "%d\u5e74",wordSeparator: "",numbers: []}},inWords: function(b) {
            function d(g, n) {
                return (c.isFunction(g) ? g(n, b) : g).replace(/%d/i, a.numbers && a.numbers[n] || n || 1)
            }
            var a = this.settings.strings,
                g = a.prefixAgo, p = a.suffixAgo;
            if (this.settings.allowFuture && b < 0) {
                g = a.prefixFromNow;
                p = a.suffixFromNow
            }
            var q = Math.abs(b) / 1E3, n = q / 60, s = n / 60, u = s / 24, v = u / 365, q = q < 45 && d(a.seconds, Math.round(q)) || q < 90 && d(a.minute, 1) || n < 45 && d(a.minutes, Math.round(n)) || n < 90 && d(a.hour, 1) || s < 24 && d(a.hours, Math.round(s)) || s < 42 && d(a.day, 1) || u < 30 && d(a.days, Math.round(u)) || u < 45 && d(a.month, 1) || u < 365 && d(a.months, Math.round(u / 30)) || v < 1.5 && d(a.year, 1) || d(a.years, Math.round(v));
            return q === a.seconds ? a.seconds : c.trim([g, q, p].join(a.wordSeparator ===
                void 0 ? " " : a.wordSeparator))
        },parse: function(b) {
            b = c.trim(b);
            b = b.replace(/\.\d\d\d+/, "");
            b = b.replace(/-/, "/").replace(/-/, "/");
            b = b.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
            return new Date(b)
        },datetime: function(b) {
            b = d.isTime(b) ? c(b).attr("datetime") : c(b).attr("rel");
            return d.parse(b)
        },isTime: function(b) {
            return c(b).get(0).tagName.toLowerCase() === "time"
        }});
    c.fn.timeago = function() {
        this.each(g);
        return this
    };
    document.createElement("abbr");
    document.createElement("time")
})(jQuery);
(function(c) {
    var g = "hidden", b = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], d = c('<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;">')[0];
    d.setAttribute("oninput", "return");
    if (c.isFunction(d.oninput) || "onpropertychange" in
        d) {
        c(d).css("lineHeight", "99px");
        c(d).css("lineHeight") === "99px" && b.push("lineHeight");
        c.fn.autosize = function(d) {
            return this.each(function() {
                function m() {
                    var b, d;
                    if (!s) {
                        s = true;
                        p.value = a.value;
                        p.style.overflowY = a.style.overflowY;
                        p.style.width = r.css("width");
                        p.scrollTop = 0;
                        p.scrollTop = 9E4;
                        b = p.scrollTop;
                        d = g;
                        if (b > n) {
                            b = n;
                            d = "scroll"
                        } else
                            b < q && (b = q);
                        a.style.overflowY = d;
                        a.style.height = b + x + "px";
                        setTimeout(function() {
                            s = false
                        }, 1)
                    }
                }
                var a = this, r = c(a), p, q = r.height(), n = parseInt(r.css("maxHeight"), 10), s, u = b.length,
                    v, x = 0;
                if (r.css("box-sizing") === "border-box" || r.css("-moz-box-sizing") === "border-box" || r.css("-webkit-box-sizing") === "border-box")
                    x = r.outerHeight() - r.height();
                if (!r.data("mirror") && !r.data("ismirror")) {
                    p = c('<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;">').data("ismirror", true).addClass(d ||
                        "autosizejs")[0];
                    v = r.css("resize") === "none" ? "none" : "horizontal";
                    r.data("mirror", c(p)).css({overflow: g,overflowY: g,wordWrap: "break-word",resize: v});
                    for (n = n && n > 0 ? n : 9E4; u--; )
                        p.style[b[u]] = r.css(b[u]);
                    c("body").append(p);
                    "onpropertychange" in a ? "oninput" in a ? a.oninput = a.onkeyup = m : a.onpropertychange = m : a.oninput = m;
                    c(window).resize(m);
                    r.bind("autosize", m);
                    r.text(r.text());
                    m()
                }
            })
        }
    } else
        c.fn.autosize = function() {
            return this
        }
})(jQuery);
(function(c, g) {
    var b;
    c.rails = b = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector: "form",formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector: "input:file",linkDisableSelector: "a[data-disable-with]",CSRFProtection: function(b) {
            var f = c('meta[name="csrf-token"]').attr("content");
            f && b.setRequestHeader("X-CSRF-Token", f)
        },fire: function(b, f, g) {
            f = c.Event(f);
            b.trigger(f, g);
            return f.result !== false
        },confirm: function(b) {
            return confirm(b)
        },ajax: function(b) {
            return c.ajax(b)
        },href: function(b) {
            return b.attr("href")
        },handleRemote: function(d) {
            var f,
                m, a, r, p;
            if (b.fire(d, "ajax:before")) {
                r = d.data("cross-domain") || null;
                p = d.data("type") || c.ajaxSettings && c.ajaxSettings.dataType;
                if (d.is("form")) {
                    f = d.attr("method");
                    m = d.attr("action");
                    a = d.serializeArray();
                    var q = d.data("ujs:submit-button");
                    if (q) {
                        a.push(q);
                        d.data("ujs:submit-button", null)
                    }
                } else if (d.is(b.inputChangeSelector)) {
                    f = d.data("method");
                    m = d.data("url");
                    a = d.serialize();
                    d.data("params") && (a = a + "&" + d.data("params"))
                } else {
                    f = d.data("method");
                    m = b.href(d);
                    a = d.data("params") || null
                }
                f = {type: f || "GET",data: a,
                    dataType: p,crossDomain: r,beforeSend: function(a, c) {
                        c.dataType === g && a.setRequestHeader("accept", "*/*;q=0.5, " + c.accepts.script);
                        return b.fire(d, "ajax:beforeSend", [a, c])
                    },success: function(a, b, c) {
                        d.trigger("ajax:success", [a, b, c])
                    },complete: function(a, b) {
                        d.trigger("ajax:complete", [a, b])
                    },error: function(a, b, c) {
                        d.trigger("ajax:error", [a, b, c])
                    }};
                if (m)
                    f.url = m;
                return b.ajax(f)
            }
            return false
        },handleMethod: function(d) {
            var f = b.href(d), m = d.data("method"), d = d.attr("target"), a = c("meta[name=csrf-token]").attr("content"),
                r = c("meta[name=csrf-param]").attr("content"), f = c('<form method="post" action="' + f + '"></form>'), m = '<input name="_method" value="' + m + '" type="hidden" />';
            r !== g && a !== g && (m = m + ('<input name="' + r + '" value="' + a + '" type="hidden" />'));
            d && f.attr("target", d);
            f.hide().append(m).appendTo("body");
            f.submit()
        },disableFormElements: function(d) {
            d.find(b.disableSelector).each(function() {
                var b = c(this), d = b.is("button") ? "html" : "val";
                b.data("ujs:enable-with", b[d]());
                b[d](b.data("disable-with"));
                b.prop("disabled", true)
            })
        },
        enableFormElements: function(d) {
            d.find(b.enableSelector).each(function() {
                var b = c(this), d = b.is("button") ? "html" : "val";
                if (b.data("ujs:enable-with"))
                    b[d](b.data("ujs:enable-with"));
                b.prop("disabled", false)
            })
        },allowAction: function(d) {
            var c = d.data("confirm"), g = false, a;
            if (!c)
                return true;
            if (b.fire(d, "confirm")) {
                g = b.confirm(c);
                a = b.fire(d, "confirm:complete", [g])
            }
            return g && a
        },blankInputs: function(b, f, g) {
            var a = c(), r;
            b.find(f || "input,textarea").each(function() {
                r = c(this);
                if (g ? r.val() : !r.val())
                    a = a.add(r)
            });
            return a.length ?
                a : false
        },nonBlankInputs: function(d, c) {
            return b.blankInputs(d, c, true)
        },stopEverything: function(b) {
            c(b.target).trigger("ujs:everythingStopped");
            b.stopImmediatePropagation();
            return false
        },callFormSubmitBindings: function(b, f) {
            var m = b.data("events"), a = true;
            m !== g && m.submit !== g && c.each(m.submit, function(b, d) {
                if (typeof d.handler === "function")
                    return a = d.handler(f)
            });
            return a
        },disableElement: function(d) {
            d.data("ujs:enable-with", d.html());
            d.html(d.data("disable-with"));
            d.bind("click.railsDisable", function(d) {
                return b.stopEverything(d)
            })
        },
        enableElement: function(b) {
            if (b.data("ujs:enable-with") !== g) {
                b.html(b.data("ujs:enable-with"));
                b.data("ujs:enable-with", false)
            }
            b.unbind("click.railsDisable")
        }};
    c.ajaxPrefilter(function(c, f, g) {
        c.crossDomain || b.CSRFProtection(g)
    });
    c(document).delegate(b.linkDisableSelector, "ajax:complete", function() {
        b.enableElement(c(this))
    });
    c(document).delegate(b.linkClickSelector, "click.rails", function(d) {
        var f = c(this), m = f.data("method"), a = f.data("params");
        if (!b.allowAction(f))
            return b.stopEverything(d);
        f.is(b.linkDisableSelector) &&
        b.disableElement(f);
        if (f.data("remote") !== g) {
            if ((d.metaKey || d.ctrlKey) && (!m || m === "GET") && !a)
                return true;
            b.handleRemote(f) === false && b.enableElement(f);
            return false
        }
        if (f.data("method")) {
            b.handleMethod(f);
            return false
        }
    });
    c(document).delegate(b.inputChangeSelector, "change.rails", function(d) {
        var f = c(this);
        if (!b.allowAction(f))
            return b.stopEverything(d);
        b.handleRemote(f);
        return false
    });
    c(document).delegate(b.formSubmitSelector, "submit.rails", function(d) {
        var f = c(this), m = f.data("remote") !== g, a = b.blankInputs(f,
            b.requiredInputSelector), r = b.nonBlankInputs(f, b.fileInputSelector);
        if (!b.allowAction(f) || a && f.attr("novalidate") == g && b.fire(f, "ajax:aborted:required", [a]))
            return b.stopEverything(d);
        if (m) {
            if (r)
                return b.fire(f, "ajax:aborted:file", [r]);
            if (!c.support.submitBubbles && c().jquery < "1.7" && b.callFormSubmitBindings(f, d) === false)
                return b.stopEverything(d);
            b.handleRemote(f);
            return false
        }
        setTimeout(function() {
            b.disableFormElements(f)
        }, 13)
    });
    c(document).delegate(b.formInputClickSelector, "click.rails", function(d) {
        var f =
            c(this);
        if (!b.allowAction(f))
            return b.stopEverything(d);
        d = (d = f.attr("name")) ? {name: d,value: f.val()} : null;
        f.closest("form").data("ujs:submit-button", d)
    });
    c(document).delegate(b.formSubmitSelector, "ajax:beforeSend.rails", function(d) {
        this == d.target && b.disableFormElements(c(this))
    });
    c(document).delegate(b.formSubmitSelector, "ajax:complete.rails", function(d) {
        this == d.target && b.enableFormElements(c(this))
    })
})(jQuery);
(function() {
    function c() {
        this.returnValue = false
    }
    function g() {
        this.cancelBubble = true
    }
    var b = 0, d = [], f = {}, m = {}, a = {"<": "lt",">": "gt","&": "amp",'"': "quot","'": "#39"}, r = /[<>&\"\']/g, p = window.setTimeout, q = {}, n, s = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe".split(/,/),
        u, v, x;
    for (u = 0; u < s.length; u = u + 2) {
        x = s[u + 1].split(/ /);
        for (v = 0; v < x.length; v++)
            m[x[v]] = s[u]
    }
    s = navigator;
    u = s.userAgent;
    x = s.vendor;
    var t;
    t = (v = /WebKit/.test(u)) && x.indexOf("Apple") !== -1;
    x = window.opera && window.opera.buildNumber;
    var s = {windows: navigator.platform.indexOf("Win") !== -1,ie: !v && !x && /MSIE/gi.test(u) && /Explorer/gi.test(s.appName),webkit: v,gecko: !v && /Gecko/.test(u),safari: t,opera: !!x}, w = {VERSION: "@@version@@",STOPPED: 1,STARTED: 2,QUEUED: 1,UPLOADING: 2,FAILED: 4,DONE: 5,GENERIC_ERROR: -100,HTTP_ERROR: -200,
        IO_ERROR: -300,SECURITY_ERROR: -400,INIT_ERROR: -500,FILE_SIZE_ERROR: -600,FILE_EXTENSION_ERROR: -601,IMAGE_FORMAT_ERROR: -700,IMAGE_MEMORY_ERROR: -701,IMAGE_DIMENSIONS_ERROR: -702,mimeTypes: m,ua: s,typeOf: function(a) {
            return {}.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
        },extend: function(a) {
            w.each(arguments, function(b, c) {
                c > 0 && w.each(b, function(b, c) {
                    a[c] = b
                })
            });
            return a
        },cleanName: function(a) {
            var b, c;
            c = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g,
                "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
            for (b = 0; b < c.length; b = b + 2)
                a = a.replace(c[b], c[b + 1]);
            a = a.replace(/\s+/g, "_");
            return a = a.replace(/[^a-z0-9_\-\.]+/gi, "")
        },addRuntime: function(a, b) {
            b.name = a;
            d[a] = b;
            d.push(b);
            return b
        },guid: function() {
            var a = (new Date).getTime().toString(32), c;
            for (c = 0; c < 5; c++)
                a = a + Math.floor(Math.random() * 65535).toString(32);
            return (w.guidPrefix || "p") + a + (b++).toString(32)
        },buildUrl: function(a,
                             b) {
            var c = "";
            w.each(b, function(a, b) {
                c = c + ((c ? "&" : "") + encodeURIComponent(b) + "=" + encodeURIComponent(a))
            });
            c && (a = a + ((a.indexOf("?") > 0 ? "&" : "?") + c));
            return a
        },each: function(a, b) {
            var c, d;
            if (a) {
                c = a.length;
                if (c === void 0)
                    for (d in a) {
                        if (a.hasOwnProperty(d) && b(a[d], d) === false)
                            break
                    }
                else
                    for (d = 0; d < c; d++)
                        if (b(a[d], d) === false)
                            break
            }
        },formatSize: function(a) {
            return a === void 0 || /\D/.test(a) ? w.translate("N/A") : a > 1073741824 ? Math.round(a / 1073741824, 1) + " GB" : a > 1048576 ? Math.round(a / 1048576, 1) + " MB" : a > 1024 ? Math.round(a / 1024,
                1) + " KB" : a + " b"
        },getPos: function(a, b) {
            function c(a) {
                var b, d = 0;
                b = 0;
                if (a) {
                    b = a.getBoundingClientRect();
                    a = n.compatMode === "CSS1Compat" ? n.documentElement : n.body;
                    d = b.left + a.scrollLeft;
                    b = b.top + a.scrollTop
                }
                return {x: d,y: b}
            }
            var d = 0, f = 0, g, n = document, b = b || n.body;
            if (a && a.getBoundingClientRect && navigator.userAgent.indexOf("MSIE") > 0 && n.documentMode < 8) {
                d = c(a);
                f = c(b);
                return {x: d.x - f.x,y: d.y - f.y}
            }
            for (g = a; g && g != b && g.nodeType; ) {
                d = d + (g.offsetLeft || 0);
                f = f + (g.offsetTop || 0);
                g = g.offsetParent
            }
            for (g = a.parentNode; g && g != b && g.nodeType; ) {
                d =
                    d - (g.scrollLeft || 0);
                f = f - (g.scrollTop || 0);
                g = g.parentNode
            }
            return {x: d,y: f}
        },getSize: function(a) {
            return {w: a.offsetWidth || a.clientWidth,h: a.offsetHeight || a.clientHeight}
        },parseSize: function(a) {
            var b;
            if (typeof a == "string") {
                a = /^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g, ""));
                b = a[2];
                a = +a[1];
                b == "g" && (a = a * 1073741824);
                b == "m" && (a = a * 1048576);
                b == "k" && (a = a * 1024)
            }
            return a
        },xmlEncode: function(b) {
            return b ? ("" + b).replace(r, function(b) {
                return a[b] ? "&" + a[b] + ";" : b
            }) : b
        },toArray: function(a) {
            var b, c = [];
            for (b = 0; b < a.length; b++)
                c[b] = a[b];
            return c
        },inArray: function(a, b) {
            if (b) {
                if (Array.prototype.indexOf)
                    return Array.prototype.indexOf.call(b, a);
                for (var c = 0, d = b.length; c < d; c++)
                    if (b[c] === a)
                        return c
            }
            return -1
        },addI18n: function(a) {
            return w.extend(f, a)
        },translate: function(a) {
            return f[a] || a
        },isEmptyObj: function(a) {
            if (a === void 0)
                return true;
            for (var b in a)
                return false;
            return true
        },hasClass: function(a, b) {
            return a.className == "" ? false : RegExp("(^|\\s+)" + b + "(\\s+|$)").test(a.className)
        },addClass: function(a, b) {
            if (!w.hasClass(a,
                b))
                a.className = a.className == "" ? b : a.className.replace(/\s+$/, "") + " " + b
        },removeClass: function(a, b) {
            a.className = a.className.replace(RegExp("(^|\\s+)" + b + "(\\s+|$)"), function(a, b, c) {
                return b === " " && c === " " ? " " : ""
            })
        },getStyle: function(a, b) {
            if (a.currentStyle)
                return a.currentStyle[b];
            if (window.getComputedStyle)
                return window.getComputedStyle(a, null)[b]
        },addEvent: function(a, b, d, f) {
            var l, b = b.toLowerCase();
            n === void 0 && (n = "Plupload_" + w.guid());
            if (a.addEventListener) {
                l = d;
                a.addEventListener(b, l, false)
            } else if (a.attachEvent) {
                l =
                    function() {
                        var a = window.event;
                        if (!a.target)
                            a.target = a.srcElement;
                        a.preventDefault = c;
                        a.stopPropagation = g;
                        d(a)
                    };
                a.attachEvent("on" + b, l)
            }
            a[n] === void 0 && (a[n] = w.guid());
            q.hasOwnProperty(a[n]) || (q[a[n]] = {});
            a = q[a[n]];
            a.hasOwnProperty(b) || (a[b] = []);
            a[b].push({func: l,orig: d,key: f})
        },removeEvent: function(a, b, c) {
            var d, f;
            typeof c == "function" ? d = c : f = c;
            b = b.toLowerCase();
            if (a[n] && q[a[n]] && q[a[n]][b]) {
                for (var c = q[a[n]][b], g = c.length - 1; g >= 0; g--)
                    if (c[g].key === f || c[g].orig === d) {
                        a.removeEventListener ? a.removeEventListener(b,
                            c[g].func, false) : a.detachEvent && a.detachEvent("on" + b, c[g].func);
                        c[g].orig = null;
                        c[g].func = null;
                        c.splice(g, 1);
                        if (d !== void 0)
                            break
                    }
                c.length || delete q[a[n]][b];
                if (w.isEmptyObj(q[a[n]])) {
                    delete q[a[n]];
                    try {
                        delete a[n]
                    } catch (m) {
                        a[n] = void 0
                    }
                }
            }
        },removeAllEvents: function(a, b) {
            a[n] !== void 0 && a[n] && w.each(q[a[n]], function(c, d) {
                w.removeEvent(a, d, b)
            })
        },Uploader: function(a) {
            function b() {
                var a, c = 0, d;
                if (this.state == w.STARTED) {
                    for (d = 0; d < g.length; d++)
                        if (!a && g[d].status == w.QUEUED) {
                            a = g[d];
                            a.status = w.UPLOADING;
                            this.trigger("BeforeUpload",
                                a) && this.trigger("UploadFile", a)
                        } else
                            c++;
                    if (c == g.length) {
                        this.stop();
                        this.trigger("UploadComplete", g)
                    }
                }
            }
            function c() {
                var a, b;
                l.reset();
                for (a = 0; a < g.length; a++) {
                    b = g[a];
                    if (b.size !== void 0) {
                        l.size = l.size + b.size;
                        l.loaded = l.loaded + b.loaded
                    } else
                        l.size = void 0;
                    b.status == w.DONE ? l.uploaded++ : b.status == w.FAILED ? l.failed++ : l.queued++
                }
                if (l.size === void 0)
                    l.percent = g.length > 0 ? Math.ceil(l.uploaded / g.length * 100) : 0;
                else {
                    l.bytesPerSec = Math.ceil(l.loaded / ((+new Date - n || 1) / 1E3));
                    l.percent = l.size > 0 ? Math.ceil(l.loaded /
                        l.size * 100) : 0
                }
            }
            var f = {}, l, g = [], n, m = false;
            l = new w.QueueProgress;
            a = w.extend({chunk_size: 0,multipart: true,multi_selection: true,file_data_name: "file",filters: []}, a);
            w.extend(this, {state: w.STOPPED,runtime: "",features: {},files: g,settings: a,total: l,id: w.guid(),init: function() {
                function f() {
                    var a = l[m++], b, c, d;
                    if (a) {
                        b = a.getFeatures();
                        if (c = k.settings.required_features) {
                            c = c.split(",");
                            for (d = 0; d < c.length; d++)
                                if (!b[c[d]]) {
                                    f();
                                    return
                                }
                        }
                        a.init(k, function(c) {
                            if (c && c.success) {
                                k.features = b;
                                k.runtime = a.name;
                                k.trigger("Init",
                                    {runtime: a.name});
                                k.trigger("PostInit");
                                k.refresh()
                            } else
                                f()
                        })
                    } else
                        k.trigger("Error", {code: w.INIT_ERROR,message: w.translate("Init error.")})
                }
                var k = this, i, l, m = 0, s;
                typeof a.preinit == "function" ? a.preinit(k) : w.each(a.preinit, function(a, b) {
                    k.bind(b, a)
                });
                a.page_url = a.page_url || document.location.pathname.replace(/\/[^\/]+$/g, "/");
                if (!/^(\w+:\/\/|\/)/.test(a.url))
                    a.url = a.page_url + a.url;
                a.chunk_size = w.parseSize(a.chunk_size);
                a.max_file_size = w.parseSize(a.max_file_size);
                k.bind("FilesAdded", function(b, c) {
                    var d,
                        f, i = 0, l;
                    if ((d = a.filters) && d.length) {
                        l = [];
                        w.each(d, function(a) {
                            w.each(a.extensions.split(/,/), function(a) {
                                /^\s*\*\s*$/.test(a) ? l.push("\\.*") : l.push("\\." + a.replace(RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
                            })
                        });
                        l = RegExp(l.join("|") + "$", "i")
                    }
                    for (d = 0; d < c.length; d++) {
                        f = c[d];
                        f.loaded = 0;
                        f.percent = 0;
                        f.status = w.QUEUED;
                        if (l && !l.test(f.name))
                            b.trigger("Error", {code: w.FILE_EXTENSION_ERROR,message: w.translate("File extension error."),file: f});
                        else if (f.size !== void 0 && f.size > a.max_file_size)
                            b.trigger("Error",
                                {code: w.FILE_SIZE_ERROR,message: w.translate("File size error."),file: f});
                        else {
                            g.push(f);
                            i++
                        }
                    }
                    if (i)
                        p(function() {
                            k.trigger("QueueChanged");
                            k.refresh()
                        }, 1);
                    else
                        return false
                });
                a.unique_names && k.bind("UploadFile", function(a, b) {
                    var c = b.name.match(/\.([^.]+)$/), d = "tmp";
                    c && (d = c[1]);
                    b.target_name = b.id + "." + d
                });
                k.bind("UploadProgress", function(a, b) {
                    b.percent = b.size > 0 ? Math.ceil(b.loaded / b.size * 100) : 100;
                    c()
                });
                k.bind("StateChanged", function(a) {
                    if (a.state == w.STARTED)
                        n = +new Date;
                    else if (a.state == w.STOPPED)
                        for (i =
                                 a.files.length - 1; i >= 0; i--)
                            if (a.files[i].status == w.UPLOADING) {
                                a.files[i].status = w.QUEUED;
                                c()
                            }
                });
                k.bind("QueueChanged", c);
                k.bind("Error", function(a, d) {
                    if (d.file) {
                        d.file.status = w.FAILED;
                        c();
                        a.state == w.STARTED && p(function() {
                            b.call(k)
                        }, 1)
                    }
                });
                k.bind("FileUploaded", function(a, c) {
                    c.status = w.DONE;
                    c.loaded = c.size;
                    a.trigger("UploadProgress", c);
                    p(function() {
                        b.call(k)
                    }, 1)
                });
                if (a.runtimes) {
                    l = [];
                    s = a.runtimes.split(/\s?,\s?/);
                    for (i = 0; i < s.length; i++)
                        d[s[i]] && l.push(d[s[i]])
                } else
                    l = d;
                f();
                typeof a.init == "function" ?
                    a.init(k) : w.each(a.init, function(a, b) {
                    k.bind(b, a)
                })
            },refresh: function() {
                this.trigger("Refresh")
            },start: function() {
                if (g.length && this.state != w.STARTED) {
                    this.state = w.STARTED;
                    this.trigger("StateChanged");
                    b.call(this)
                }
            },stop: function() {
                if (this.state != w.STOPPED) {
                    this.state = w.STOPPED;
                    this.trigger("CancelUpload");
                    this.trigger("StateChanged")
                }
            },disableBrowse: function(a) {
                m = a !== void 0 ? a : true;
                this.trigger("DisableBrowse", m)
            },getFile: function(a) {
                var b;
                for (b = g.length - 1; b >= 0; b--)
                    if (g[b].id === a)
                        return g[b]
            },removeFile: function(a) {
                var b;
                for (b = g.length - 1; b >= 0; b--)
                    if (g[b].id === a.id)
                        return this.splice(b, 1)[0]
            },splice: function(a, b) {
                var c;
                c = g.splice(a === void 0 ? 0 : a, b === void 0 ? g.length : b);
                this.trigger("FilesRemoved", c);
                this.trigger("QueueChanged");
                return c
            },trigger: function(a) {
                var b = f[a.toLowerCase()], c, d;
                if (b) {
                    d = Array.prototype.slice.call(arguments);
                    d[0] = this;
                    for (c = 0; c < b.length; c++)
                        if (b[c].func.apply(b[c].scope, d) === false)
                            return false
                }
                return true
            },hasEventListener: function(a) {
                return !!f[a.toLowerCase()]
            },bind: function(a, b, c) {
                var d, a = a.toLowerCase();
                d = f[a] || [];
                d.push({func: b,scope: c || this});
                f[a] = d
            },unbind: function(a, b) {
                var a = a.toLowerCase(), c = f[a], d;
                if (c) {
                    if (b !== void 0)
                        for (d = c.length - 1; d >= 0; d--) {
                            if (c[d].func === b) {
                                c.splice(d, 1);
                                break
                            }
                        }
                    else
                        c = [];
                    c.length || delete f[a]
                }
            },unbindAll: function() {
                var a = this;
                w.each(f, function(b, c) {
                    a.unbind(c)
                })
            },destroy: function() {
                this.stop();
                this.trigger("Destroy");
                this.unbindAll()
            }})
        },File: function(a, b, c) {
            this.id = a;
            this.name = b;
            this.size = c;
            this.status = this.percent = this.loaded = 0
        },Runtime: function() {
            this.getFeatures = function() {
            };
            this.init = function() {
            }
        },QueueProgress: function() {
            var a = this;
            a.size = 0;
            a.loaded = 0;
            a.uploaded = 0;
            a.failed = 0;
            a.queued = 0;
            a.percent = 0;
            a.bytesPerSec = 0;
            a.reset = function() {
                a.size = a.loaded = a.uploaded = a.failed = a.queued = a.percent = a.bytesPerSec = 0
            }
        },runtimes: {}};
    window.plupload = w
})();
(function(c, g, b) {
    var d = {}, f = {};
    b.flash = {trigger: function(b, a, c) {
        setTimeout(function() {
            var f = d[b];
            f && f.trigger("Flash:" + a, c)
        }, 0)
    }};
    b.runtimes.Flash = b.addRuntime("flash", {getFeatures: function() {
        return {jpgresize: true,pngresize: true,maxWidth: 8091,maxHeight: 8091,chunks: true,progress: true,multipart: true,multi_selection: true}
    },init: function(c, a) {
        function r() {
            return g.getElementById(c.id + "_flash")
        }
        function p() {
            n++ > 5E3 ? a({success: false}) : f[c.id] === false && setTimeout(p, 1)
        }
        var q, n = 0, s = g.body;
        try {
            q = navigator.plugins["Shockwave Flash"];
            q = q.description
        } catch (u) {
            try {
                q = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
            } catch (v) {
                q = "0.0"
            }
        }
        q = q.match(/\d+/g);
        if (parseFloat(q[0] + "." + q[1]) < 10)
            a({success: false});
        else {
            f[c.id] = false;
            d[c.id] = c;
            g.getElementById(c.settings.browse_button);
            q = g.createElement("div");
            q.id = c.id + "_flash_container";
            b.extend(q.style, {position: "absolute",top: "0px",background: c.settings.shim_bgcolor || "transparent",zIndex: 99,width: "100%",height: "100%"});
            q.className = "plupload flash";
            if (c.settings.container) {
                s =
                    g.getElementById(c.settings.container);
                if (b.getStyle(s, "position") === "static")
                    s.style.position = "relative"
            }
            s.appendChild(q);
            var x, t;
            x = '<object id="' + c.id + '_flash" type="application/x-shockwave-flash" data="' + c.settings.flash_swf_url + '" ';
            b.ua.ie && (x = x + 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ');
            x = x + ('width="100%" height="100%" style="outline:0"><param name="movie" value="' + c.settings.flash_swf_url + '" /><param name="flashvars" value="id=' + escape(c.id) + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>');
            if (b.ua.ie) {
                t = g.createElement("div");
                q.appendChild(t);
                t.outerHTML = x
            } else
                q.innerHTML = x;
            p();
            q = null;
            c.bind("Destroy", function(a) {
                b.removeAllEvents(g.body, a.id);
                delete f[a.id];
                delete d[a.id];
                (a = g.getElementById(a.id + "_flash_container")) && s.removeChild(a)
            });
            c.bind("Flash:Init", function() {
                var d = {};
                try {
                    r().setFileFilters(c.settings.filters, c.settings.multi_selection)
                } catch (n) {
                    a({success: false});
                    return
                }
                if (!f[c.id]) {
                    f[c.id] = true;
                    c.bind("UploadFile", function(a, f) {
                        var k = a.settings, l = c.settings.resize || {};
                        r().uploadFile(d[f.id],
                            k.url, {name: f.target_name || f.name,mime: b.mimeTypes[f.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream",chunk_size: k.chunk_size,width: l.width,height: l.height,quality: l.quality,multipart: k.multipart,multipart_params: k.multipart_params || {},file_data_name: k.file_data_name,format: /\.(jpg|jpeg)$/i.test(f.name) ? "jpg" : "png",headers: k.headers,urlstream_upload: k.urlstream_upload})
                    });
                    c.bind("CancelUpload", function() {
                        r().cancelUpload()
                    });
                    c.bind("Flash:UploadProcess", function(a, c) {
                        var f =
                            a.getFile(d[c.id]);
                        if (f.status != b.FAILED) {
                            f.loaded = c.loaded;
                            f.size = c.size;
                            a.trigger("UploadProgress", f)
                        }
                    });
                    c.bind("Flash:UploadChunkComplete", function(a, c) {
                        var f = a.getFile(d[c.id]);
                        a.trigger("ChunkUploaded", f, {chunk: c.chunk,chunks: c.chunks,response: c.text});
                        f.status !== b.FAILED && a.state !== b.STOPPED && r().uploadNextChunk();
                        if (c.chunk == c.chunks - 1) {
                            f.status = b.DONE;
                            a.trigger("FileUploaded", f, {response: c.text})
                        }
                    });
                    c.bind("Flash:SelectFiles", function(a, f) {
                        var k, l, g = [], n;
                        for (l = 0; l < f.length; l++) {
                            k = f[l];
                            n = b.guid();
                            d[n] = k.id;
                            d[k.id] = n;
                            g.push(new b.File(n, k.name, k.size))
                        }
                        g.length && c.trigger("FilesAdded", g)
                    });
                    c.bind("Flash:SecurityError", function(a, f) {
                        c.trigger("Error", {code: b.SECURITY_ERROR,message: b.translate("Security error."),details: f.message,file: c.getFile(d[f.id])})
                    });
                    c.bind("Flash:GenericError", function(a, f) {
                        c.trigger("Error", {code: b.GENERIC_ERROR,message: b.translate("Generic error."),details: f.message,file: c.getFile(d[f.id])})
                    });
                    c.bind("Flash:IOError", function(a, f) {
                        c.trigger("Error", {code: b.IO_ERROR,
                            message: b.translate("IO error."),details: f.message,file: c.getFile(d[f.id])})
                    });
                    c.bind("Flash:HttpStatus", function(a, b) {
                        c.trigger("HttpStatus", {code: -1024,message: "http status",details: b.status,file: c.getFile(d[b.id])})
                    });
                    c.bind("Flash:ImageError", function(a, f) {
                        c.trigger("Error", {code: parseInt(f.code, 10),message: b.translate("Image error."),file: c.getFile(d[f.id])})
                    });
                    c.bind("Flash:StageEvent:rollOver", function(a) {
                        var d;
                        d = g.getElementById(c.settings.browse_button);
                        a = a.settings.browse_button_hover;
                        d &&
                            a && b.addClass(d, a)
                    });
                    c.bind("Flash:StageEvent:rollOut", function(a) {
                        var d;
                        d = g.getElementById(c.settings.browse_button);
                        a = a.settings.browse_button_hover;
                        d && a && b.removeClass(d, a)
                    });
                    c.bind("Flash:StageEvent:mouseDown", function(a) {
                        var d, f;
                        d = g.getElementById(c.settings.browse_button);
                        f = a.settings.browse_button_active;
                        if (d && f) {
                            b.addClass(d, f);
                            b.addEvent(g.body, "mouseup", function() {
                                b.removeClass(d, f)
                            }, a.id)
                        }
                    });
                    c.bind("Flash:StageEvent:mouseUp", function(a) {
                        var d;
                        d = g.getElementById(c.settings.browse_button);
                        a = a.settings.browse_button_active;
                        d && a && b.removeClass(d, a)
                    });
                    c.bind("Flash:ExifData", function(a, b) {
                        c.trigger("ExifData", c.getFile(d[b.id]), b.data)
                    });
                    c.bind("Flash:GpsData", function(a, b) {
                        c.trigger("GpsData", c.getFile(d[b.id]), b.data)
                    });
                    c.bind("QueueChanged", function() {
                        c.refresh()
                    });
                    c.bind("FilesRemoved", function(a, b) {
                        var c;
                        for (c = 0; c < b.length; c++)
                            r().removeFile(d[b[c].id])
                    });
                    c.bind("StateChanged", function() {
                        c.refresh()
                    });
                    c.bind("Refresh", function(a) {
                        var d, f;
                        r().setFileFilters(c.settings.filters, c.settings.multi_selection);
                        if (d = g.getElementById(a.settings.browse_button)) {
                            f = b.getPos(d, g.getElementById(a.settings.container));
                            d = b.getSize(d);
                            b.extend(g.getElementById(a.id + "_flash_container").style, {top: f.y + "px",left: f.x + "px",width: d.w + "px",height: d.h + "px"})
                        }
                    });
                    c.bind("DisableBrowse", function(a, b) {
                        r().disableBrowse(b)
                    });
                    a({success: true})
                }
            })
        }
    }})
})(window, document, plupload);
(function(c) {
    var g, b, d, f, m, a, r, p, q, n, s = 0, u = {}, v = [], x = 0, t = {}, w = [], C = null, D = new Image, G = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, k = /[^\.]\.(swf)\s*$/i, l, z = 1, E = 0, L = "", o, B, i = false, H = c.extend(c("<div/>")[0], {prop: 0}), y = c.browser.msie && c.browser.version < 7 && !window.XMLHttpRequest, N = function() {
            b.hide();
            D.onerror = D.onload = null;
            C && C.abort();
            g.empty()
        }, R = function() {
            if (false === u.onError(v, s, u)) {
                b.hide();
                i = false
            } else {
                u.titleShow = false;
                u.width = "auto";
                u.height = "auto";
                g.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
                O()
            }
        }, M = function() {
            var d = v[s], f, l, n, o, r, q;
            N();
            u = c.extend({}, c.fn.fancybox.defaults, typeof c(d).data("fancybox") == "undefined" ? u : c(d).data("fancybox"));
            q = u.onStart(v, s, u);
            if (q === false)
                i = false;
            else {
                typeof q == "object" && (u = c.extend(u, q));
                n = u.title || (d.nodeName ? c(d).attr("title") : d.title) || "";
                if (d.nodeName && !u.orig)
                    u.orig = c(d).children("img:first").length ? c(d).children("img:first") : c(d);
                n === "" && (u.orig && u.titleFromAlt) && (n = u.orig.attr("alt"));
                f = u.href || (d.nodeName ? c(d).attr("href") : d.href) || null;
                if (/^(?:javascript)/i.test(f) ||
                    f == "#")
                    f = null;
                if (u.type) {
                    l = u.type;
                    if (!f)
                        f = u.content
                } else
                    u.content ? l = "html" : f && (l = f.match(G) ? "image" : f.match(k) ? "swf" : c(d).hasClass("iframe") ? "iframe" : f.indexOf("#") === 0 ? "inline" : "ajax");
                if (l) {
                    if (l == "inline") {
                        d = f.substr(f.indexOf("#"));
                        l = c(d).length > 0 ? "inline" : "ajax"
                    }
                    u.extraClass ? m.addClass(u.extraClass) : m.removeAttr("class");
                    u.type = l;
                    u.href = f;
                    u.title = n;
                    if (u.autoDimensions)
                        if (u.type == "html" || u.type == "inline" || u.type == "ajax") {
                            u.width = "auto";
                            u.height = "auto"
                        } else
                            u.autoDimensions = false;
                    if (u.modal) {
                        u.overlayShow =
                            true;
                        u.hideOnOverlayClick = false;
                        u.hideOnContentClick = false;
                        u.enableEscapeButton = false;
                        u.showCloseButton = false
                    }
                    u.padding = parseInt(u.padding, 10);
                    u.margin = parseInt(u.margin, 10);
                    g.css("padding", u.padding + u.margin);
                    c(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
                        c(this).replaceWith(a.children())
                    });
                    switch (l) {
                        case "html":
                            g.html(u.content);
                            O();
                            break;
                        case "inline":
                            if (c(d).parent().is("#fancybox-content") === true) {
                                i = false;
                                break
                            }
                            c('<div class="fancybox-inline-tmp" />').hide().insertBefore(c(d)).bind("fancybox-cleanup",
                                function() {
                                    c(this).replaceWith(a.children())
                                }).bind("fancybox-cancel", function() {
                                    c(this).replaceWith(g.children())
                                });
                            c(d).appendTo(g);
                            O();
                            break;
                        case "image":
                            i = false;
                            c.fancybox.showActivity();
                            D = new Image;
                            D.onerror = function() {
                                R()
                            };
                            D.onload = function() {
                                i = true;
                                D.onerror = D.onload = null;
                                u.width = D.width;
                                u.height = D.height;
                                c("<img />").attr({id: "fancybox-img",src: D.src,alt: u.title}).appendTo(g);
                                J()
                            };
                            D.src = f;
                            break;
                        case "swf":
                            u.scrolling = "no";
                            o = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' +
                                u.width + '" height="' + u.height + '"><param name="movie" value="' + f + '"></param>';
                            r = "";
                            c.each(u.swf, function(a, b) {
                                o = o + ('<param name="' + a + '" value="' + b + '"></param>');
                                r = r + (" " + a + '="' + b + '"')
                            });
                            o = o + ('<embed src="' + f + '" type="application/x-shockwave-flash" width="' + u.width + '" height="' + u.height + '"' + r + "></embed></object>");
                            g.html(o);
                            O();
                            break;
                        case "ajax":
                            i = false;
                            c.fancybox.showActivity();
                            u.ajax.win = u.ajax.success;
                            C = c.ajax(c.extend({}, u.ajax, {url: f,data: u.ajax.data || {},error: function(a) {
                                a.status > 0 && R()
                            },success: function(a,
                                                c, d) {
                                if ((typeof d == "object" ? d : C).status == 200) {
                                    if (typeof u.ajax.win == "function") {
                                        q = u.ajax.win(f, a, c, d);
                                        if (q === false) {
                                            b.hide();
                                            return
                                        }
                                        if (typeof q == "string" || typeof q == "object")
                                            a = q
                                    }
                                    g.html(a);
                                    O()
                                }
                            }}));
                            break;
                        case "iframe":
                            J()
                    }
                } else
                    R()
            }
        }, O = function() {
            var a = u.width, b = u.height, a = a.toString().indexOf("%") > -1 ? parseInt((c(window).width() - u.margin * 2) * parseFloat(a) / 100, 10) + "px" : a == "auto" ? "auto" : a + "px", b = b.toString().indexOf("%") > -1 ? parseInt((c(window).height() - u.margin * 2) * parseFloat(b) / 100, 10) + "px" : b == "auto" ?
                "auto" : b + "px";
            g.wrapInner('<div style="width:' + a + ";height:" + b + ";overflow: " + (u.scrolling == "auto" ? "auto" : u.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
            u.width = g.width();
            u.height = g.height();
            J()
        }, J = function() {
            var k, l;
            b.hide();
            if (f.is(":visible") && false === t.onCleanup(w, x, t)) {
                c.event.trigger("fancybox-cancel");
                i = false
            } else {
                i = true;
                c(a.add(d)).unbind();
                c(window).unbind("resize.fb scroll.fb");
                c(document).unbind("keydown.fb");
                f.is(":visible") && t.titlePosition !== "outside" && f.css("height",
                    f.height());
                w = v;
                x = s;
                t = u;
                if (t.overlayShow) {
                    d.css({"background-color": t.overlayColor,opacity: t.overlayOpacity,cursor: t.hideOnOverlayClick ? "pointer" : "auto",height: c(document).height()}).on("mousemove", function(a) {
                        a.stopPropagation();
                        a.preventDefault()
                    });
                    if (!d.is(":visible")) {
                        if (y)
                            c("select:not(#fancybox-tmp select)").filter(function() {
                                return this.style.visibility !== "hidden"
                            }).css({visibility: "hidden"}).one("fancybox-cleanup", function() {
                                    this.style.visibility = "inherit"
                                });
                        d.show()
                    }
                } else
                    d.hide();
                k = U();
                var z = {}, G = t.autoScale, C = t.padding * 2;
                z.width = t.width.toString().indexOf("%") > -1 ? parseInt(k[0] * parseFloat(t.width) / 100, 10) : t.width + C;
                z.height = t.height.toString().indexOf("%") > -1 ? parseInt(k[1] * parseFloat(t.height) / 100, 10) : t.height + C;
                if (G && (z.width > k[0] || z.height > k[1]))
                    if (u.type == "image" || u.type == "swf") {
                        G = t.width / t.height;
                        if (z.width > k[0]) {
                            z.width = k[0];
                            z.height = parseInt((z.width - C) / G + C, 10)
                        }
                        if (z.height > k[1]) {
                            z.height = k[1];
                            z.width = parseInt((z.height - C) * G + C, 10)
                        }
                    } else {
                        z.width = Math.min(z.width, k[0]);
                        z.height =
                            Math.min(z.height, k[1])
                    }
                z.top = parseInt(Math.max(k[3] - 20, k[3] + (k[1] - z.height - 40) * 0.5), 10);
                z.left = parseInt(Math.max(k[2] - 20, k[2] + (k[0] - z.width - 40) * 0.5), 10);
                B = z;
                L = t.title || "";
                E = 0;
                p.empty().removeAttr("style").removeClass();
                if (t.titleShow !== false)
                    if ((L = c.isFunction(t.titleFormat) ? t.titleFormat(L, w, x, t) : L && L.length ? t.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + L + '</td><td id="fancybox-title-float-right"></td></tr></table>' :
                        '<div id="fancybox-title-' + t.titlePosition + '">' + L + "</div>" : false) && L !== "") {
                        p.addClass("fancybox-title-" + t.titlePosition).html(L).appendTo("body").show();
                        switch (t.titlePosition) {
                            case "inside":
                                p.css({width: B.width - t.padding * 2,marginLeft: t.padding,marginRight: t.padding});
                                E = p.outerHeight(true);
                                p.appendTo(m);
                                B.height = B.height + E;
                                break;
                            case "over":
                                p.css({marginLeft: t.padding,width: B.width - t.padding * 2,bottom: t.padding}).appendTo(m);
                                break;
                            case "float":
                                p.css("left", parseInt((p.width() - B.width - 40) / 2, 10) * -1).appendTo(f);
                                break;
                            default:
                                p.css({width: B.width - t.padding * 2,paddingLeft: t.padding,paddingRight: t.padding}).appendTo(f)
                        }
                    }
                p.hide();
                if (f.is(":visible")) {
                    c(r.add(q).add(n)).hide();
                    k = f.position();
                    o = {top: k.top,left: k.left,width: f.width(),height: f.height()};
                    l = o.width == B.width && o.height == B.height;
                    a.fadeTo(t.changeFade, 0.3, function() {
                        var b = function() {
                            a.html(g.contents()).fadeTo(t.changeFade, 1, P)
                        };
                        c.event.trigger("fancybox-change");
                        a.empty().removeAttr("filter").css({"border-width": t.padding,width: B.width - t.padding * 2,height: u.autoDimensions ?
                            "auto" : B.height - E - t.padding * 2});
                        if (l)
                            b();
                        else {
                            H.prop = 0;
                            c(H).animate({prop: 1}, {duration: t.changeSpeed,easing: t.easingChange,step: T,complete: b})
                        }
                    })
                } else {
                    f.removeAttr("style");
                    a.css("border-width", t.padding);
                    if (t.transitionIn == "elastic") {
                        o = ca();
                        a.html(g.contents());
                        f.show();
                        if (t.opacity)
                            B.opacity = 0;
                        H.prop = 0;
                        c(H).animate({prop: 1}, {duration: t.speedIn,easing: t.easingIn,step: T,complete: P})
                    } else {
                        t.titlePosition == "inside" && E > 0 && p.show();
                        a.css({width: B.width - t.padding * 2,height: u.autoDimensions ? "auto" : B.height -
                            E - t.padding * 2}).html(g.contents());
                        f.css(B).fadeIn(t.transitionIn == "none" ? 0 : t.speedIn, P)
                    }
                }
            }
        }, P = function() {
            if (!c.support.opacity) {
                a.get(0).style.removeAttribute("filter");
                f.get(0).style.removeAttribute("filter")
            }
            u.autoDimensions && a.css("height", "auto");
            f.css("height", "auto");
            L && L.length && p.show();
            t.showCloseButton && r.show();
            (t.enableEscapeButton || t.enableKeyboardNav) && c(document).bind("keydown.fb", function(a) {
                if (a.keyCode == 27 && t.enableEscapeButton) {
                    a.preventDefault();
                    c.fancybox.close()
                } else if ((a.keyCode ==
                    37 || a.keyCode == 39) && t.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") {
                    a.preventDefault();
                    c.fancybox[a.keyCode == 37 ? "prev" : "next"]()
                }
            });
            if (t.showNavArrows) {
                (t.cyclic && w.length > 1 || x !== 0) && q.show();
                (t.cyclic && w.length > 1 || x != w.length - 1) && n.show()
            } else {
                q.hide();
                n.hide()
            }
            t.hideOnContentClick && a.bind("click", c.fancybox.close);
            t.hideOnOverlayClick && d.bind("click", c.fancybox.close);
            c(window).bind("resize.fb", c.fancybox.resize);
            t.centerOnScroll && c(window).bind("scroll.fb",
                c.fancybox.center);
            t.type == "iframe" && c('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (c.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + u.scrolling + '" src="' + t.href + '"></iframe>').appendTo(a);
            f.show();
            i = false;
            c.fancybox.center();
            t.onComplete(w, x, t);
            var b, k;
            if (w.length - 1 > x) {
                b = w[x + 1].href;
                if (typeof b !== "undefined" && b.match(G)) {
                    k = new Image;
                    k.src = b
                }
            }
            if (x > 0) {
                b = w[x - 1].href;
                if (typeof b !== "undefined" && b.match(G)) {
                    k = new Image;
                    k.src = b
                }
            }
        },
        T = function(b) {
            var c = {width: parseInt(o.width + (B.width - o.width) * b, 10),height: parseInt(o.height + (B.height - o.height) * b, 10),top: parseInt(o.top + (B.top - o.top) * b, 10),left: parseInt(o.left + (B.left - o.left) * b, 10)};
            if (typeof B.opacity !== "undefined")
                c.opacity = b < 0.5 ? 0.5 : b;
            f.css(c);
            a.css({width: c.width - t.padding * 2,height: c.height - E * b - t.padding * 2})
        }, U = function() {
            return [c(window).width() - t.margin * 2, c(window).height() - t.margin * 2, c(document).scrollLeft() + t.margin, c(document).scrollTop() + t.margin]
        }, ca = function() {
            var a =
                u.orig ? c(u.orig) : false, b = {};
            if (a && a.length) {
                b = a.offset();
                b.top = b.top + (parseInt(a.css("paddingTop"), 10) || 0);
                b.left = b.left + (parseInt(a.css("paddingLeft"), 10) || 0);
                b.top = b.top + (parseInt(a.css("border-top-width"), 10) || 0);
                b.left = b.left + (parseInt(a.css("border-left-width"), 10) || 0);
                b.width = a.width();
                b.height = a.height();
                b = {width: b.width + t.padding * 2,height: b.height + t.padding * 2,top: b.top - t.padding - 20,left: b.left - t.padding - 20}
            } else {
                a = U();
                b = {width: t.padding * 2,height: t.padding * 2,top: parseInt(a[3] + a[1] * 0.5, 10),
                    left: parseInt(a[2] + a[0] * 0.5, 10)}
            }
            return b
        }, ea = function() {
            if (b.is(":visible")) {
                c("div", b).css("top", z * -40 + "px");
                z = (z + 1) % 12
            } else
                clearInterval(l)
        };
    c.fn.fancybox = function(a) {
        if (!c(this).length)
            return this;
        c(this).data("fancybox", c.extend({}, a, c.metadata ? c(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(a) {
            a.preventDefault();
            if (!i) {
                i = true;
                c(this).blur();
                v = [];
                s = 0;
                a = c(this).attr("rel") || "";
                if (!a || a == "" || a === "nofollow")
                    v.push(this);
                else {
                    v = c("a[rel=" + a + "], area[rel=" + a + "]");
                    s = v.index(this)
                }
                M()
            }
        });
        return this
    };
    c.fancybox = function(a, b) {
        var d;
        if (!i) {
            i = true;
            d = typeof b !== "undefined" ? b : {};
            v = [];
            s = parseInt(d.index, 10) || 0;
            if (c.isArray(a)) {
                for (var f = 0, k = a.length; f < k; f++)
                    typeof a[f] == "object" ? c(a[f]).data("fancybox", c.extend({}, d, a[f])) : a[f] = c({}).data("fancybox", c.extend({content: a[f]}, d));
                v = jQuery.merge(v, a)
            } else {
                typeof a == "object" ? c(a).data("fancybox", c.extend({}, d, a)) : a = c({}).data("fancybox", c.extend({content: a}, d));
                v.push(a)
            }
            if (s > v.length || s < 0)
                s = 0;
            M()
        }
    };
    c.fancybox.showActivity = function() {
        clearInterval(l);
        b.show();
        l = setInterval(ea, 66)
    };
    c.fancybox.hideActivity = function() {
        b.hide()
    };
    c.fancybox.next = function() {
        return c.fancybox.pos(x + 1)
    };
    c.fancybox.prev = function() {
        return c.fancybox.pos(x - 1)
    };
    c.fancybox.pos = function(a) {
        if (!i) {
            a = parseInt(a);
            v = w;
            if (a > -1 && a < w.length) {
                s = a;
                M()
            } else if (t.cyclic && w.length > 1) {
                s = a >= w.length ? 0 : w.length - 1;
                M()
            }
        }
    };
    c.fancybox.cancel = function() {
        if (!i) {
            i = true;
            c.event.trigger("fancybox-cancel");
            N();
            u.onCancel(v, s, u);
            i = false
        }
    };
    c.fancybox.close = function() {
        function b() {
            d.hide();
            p.empty().hide();
            f.hide();
            c.event.trigger("fancybox-cleanup");
            a.empty();
            t.onClosed(w, x, t);
            w = u = [];
            x = s = 0;
            t = u = {};
            i = false
        }
        if (!i && !f.is(":hidden")) {
            i = true;
            if (t && false === t.onCleanup(w, x, t))
                i = false;
            else {
                N();
                c(r.add(q).add(n)).hide();
                c(a.add(d)).unbind();
                c(window).unbind("resize.fb scroll.fb");
                c(document).unbind("keydown.fb");
                a.find("iframe").attr("src", y && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
                t.titlePosition !== "inside" && p.empty();
                f.stop();
                if (t.transitionOut == "elastic") {
                    o = ca();
                    var k =
                        f.position();
                    B = {top: k.top,left: k.left,width: f.width(),height: f.height()};
                    if (t.opacity)
                        B.opacity = 1;
                    p.empty().hide();
                    H.prop = 1;
                    c(H).animate({prop: 0}, {duration: t.speedOut,easing: t.easingOut,step: T,complete: b})
                } else
                    f.fadeOut(t.transitionOut == "none" ? 0 : t.speedOut, b)
            }
        }
    };
    c.fancybox.resize = function() {
        d.is(":visible") && d.css("height", c(document).height());
        c.fancybox.center(true)
    };
    c.fancybox.center = function(b) {
        var c, d;
        if (!i) {
            d = b === true ? 1 : 0;
            c = U();
            if (d || !(f.width() > c[0] || f.height() > c[1]))
                f.stop().animate({top: parseInt(Math.max(c[3] -
                    20, c[3] + (c[1] - a.height() - 40) * 0.5 - t.padding)),left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - a.width() - 40) * 0.5 - t.padding))}, typeof b == "number" ? b : 200)
        }
    };
    c.fancybox.init = function() {
        if (!c("#fancybox-wrap").length) {
            c("body").append(g = c('<div id="fancybox-tmp"></div>'), b = c('<div id="fancybox-loading"><div></div></div>'), d = c('<div id="fancybox-overlay"></div>'), f = c('<div id="fancybox-wrap"></div>'));
            m = c('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
            m.append(a = c('<div id="fancybox-content"></div>'), r = c('<a id="fancybox-close"></a>'), p = c('<div id="fancybox-title"></div>'), q = c('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), n = c('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
            r.click(c.fancybox.close);
            b.click(c.fancybox.cancel);
            q.click(function(a) {
                a.preventDefault();
                c.fancybox.prev()
            });
            n.click(function(a) {
                a.preventDefault();
                c.fancybox.next()
            });
            c.support.opacity || f.addClass("fancybox-ie");
            if (y) {
                b.addClass("fancybox-ie6");
                f.addClass("fancybox-ie6");
                c('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(m)
            }
        }
    };
    c.fn.fancybox.defaults = {padding: 10,margin: 40,opacity: false,modal: false,cyclic: false,scrolling: "auto",width: 560,height: 340,autoScale: true,autoDimensions: true,centerOnScroll: false,ajax: {},
        swf: {wmode: "transparent"},hideOnOverlayClick: true,hideOnContentClick: false,overlayShow: true,overlayOpacity: 0.7,overlayColor: "#000",titleShow: true,titlePosition: "float",titleFormat: null,titleFromAlt: false,transitionIn: "none",transitionOut: "none",speedIn: 300,speedOut: 300,changeSpeed: 100,changeFade: "fast",easingIn: "swing",easingOut: "swing",showCloseButton: true,showNavArrows: true,enableEscapeButton: false,enableKeyboardNav: true,extraClass: "",onStart: function() {
        },onCancel: function() {
        },onComplete: function() {
        },
        onCleanup: function() {
        },onClosed: function() {
        },onError: function() {
        }};
    c(document).ready(function() {
        c.fancybox.init()
    })
})(jQuery);
$.fn.valid = function() {
    if (!this.length)
        return true;
    var c = ["minlen", "maxlen"], g = {minlen: function(a, b) {
        if (!b)
            return true;
        var c = $.getByteLen(a);
        return !c && b || c < b ? false : true
    },maxlen: function(a, b) {
        var c = $.getByteLen(a);
        return !b || !c ? true : c > b ? false : true
    }}, b = this.eq(0), d = b.val(), f = true, m = {};
    $.each(c, function(a) {
        a = c[a];
        m[a] = b.attr(a)
    });
    $.each(m, function(a, b) {
        var c = g[a];
        if (c && !c(d, b))
            return f = false
    });
    return f
};
(function() {
    var c = {}, g = $(window);
    $.fn.showErrorTips = function(b) {
        this.each(function() {
            var d = $(this), f = b || d.data("error-tip"), m;
            if (f) {
                var a = d.data("form-error-id");
                if (!a || a < 1) {
                    a = 1;
                    m = $('<div class="form-tips-error">').text(f).appendTo("body");
                    d.data("form-error-id", a).on("keyup", function() {
                    });
                    c[a] = m
                } else
                    m = c[a];
                m.outerWidth();
                f = m.outerHeight();
                d = d.offset();
                g.scrollLeft();
                g.scrollTop();
                m.css({position: "absolute",left: d.left,top: d.top - f}).show();
                setTimeout(function() {
                    m.fadeOut(300)
                }, 3E3)
            }
        });
        return this
    };
    $.fn.textCounter = function() {
        if (!this.length)
            return this;
        this.each(function() {
            var b = $(this), c = parseInt(b.attr("maxlen")), f, m, a;
            if (!(isNaN(c) || c <= 0)) {
                var c = Math.ceil(c / 2), r = b.data("form-info-id");
                if (!r) {
                    f = $('<div class="form-tips-info" style="width:60px;text-align:center"><span></span>/' + c + "</div>").appendTo("body").data("form-info-id", 1);
                    m = f.find("span");
                    b.on("focus blur", function(r) {
                        clearInterval(a);
                        if (r.type == "focus") {
                            var r = f.outerHeight(), q = f.outerWidth(), n = b.offset(), s = b.outerWidth();
                            g.scrollLeft();
                            g.scrollTop();
                            f.css({position: "absolute",left: n.left + s - q,top: n.top - r}).show();
                            a = setInterval(function() {
                                var a = b.val(), a = Math.ceil($.getChsLen(a));
                                m.text(a);
                                a > c ? f.addClass("form-tips-error") : f.removeClass("form-tips-error")
                            }, 20)
                        } else
                            f.hide()
                    })
                }
            }
        });
        return this
    }
})();
(function(c, g, b) {
    var d = Math, f = g.createElement("div").style, m = "ontouchstart" in c, a, r = b(g);
    "webkitTransform" in f && (a = true);
    c.ScrollbarBase = Backbone.View.extend({initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        this._scrollPosition = 0;
        this._init()
    },_init: function() {
        var a = this, c, d = a.$el.css({overflow: "hidden","overflow-y": "hidden"});
        a.$content = b(".scroller", d);
        c = a.$bar = b('<div class="scrollbar" unselectable="on"><div class="track" unselectable="on"></div><div class="thumb" unselectable="on"></div></div>');
        var f = d.css("position");
        (!f || f === "static") && d.css("position", "relative");
        f = a.$content.css("position");
        (!f || f === "static") && a.$content.css("position", "relative");
        a._onMouseWheel = function(b, c) {
            a._scroll(c)
        };
        d.append(c).bind("mousewheel", a._onMouseWheel);
        if (m) {
            var g = null, q = null;
            a._onTouchMove = function(b) {
                b.preventDefault();
                b = b.originalEvent.touches[0];
                if (g === null) {
                    g = b.pageY;
                    q = b.pageX
                }
                a._moveThumb({pageY: g,pageX: q}, {pageY: b.pageY,pageX: b.pageX});
                g = b.pageY;
                q = b.pageX
            };
            a._onTouchStart = function(a) {
                a.preventDefault()
            };
            a._onTouchEnd = function() {
                q = g = null
            };
            a.$content.on("touchstart", a._onTouchStart).on("touchmove", a._onTouchMove).on("touchend", a._onTouchEnd)
        }
        a.$track = b(".track", c).on("click", function(b) {
            a._onClickTrack(b)
        });
        var p;
        a.$thumb = b(".thumb", c).on("mousedown", function(b) {
            b.stopPropagation();
            b.preventDefault();
            p = b;
            r.on("mousemove.scroll", function(b) {
                b.preventDefault();
                a._moveThumb(b, p);
                p = b
            }).on("mouseup.scroll", function() {
                    r.off("mousemove.scroll mouseup.scroll");
                    p = null
                })
        });
        a.refresh()
    },disable: function() {
        this.disabled =
            true;
        this.scrollTo(0);
        this.$bar.hide();
        this.$el.unbind("mousewheel", this._onMouseWheel);
        this.$content.off("touchstart", this._onTouchStart).off("touchmove", this._onTouchMove).off("touchend", this._onTouchEnd);
        return this
    },_enable: function() {
        if (this.disabled) {
            this.disabled = false;
            this.$bar.show();
            this.$el.bind("mousewheel", this._onMouseWheel);
            this.$content.on("touchstart", this._onTouchStart).on("touchmove", this._onTouchMove).on("touchend", this._onTouchEnd)
        }
    },isActive: function() {
        return this._contentWidth >
            this._wrapperWidth ? true : false
    },refresh: function(a) {
        a || (this._contentWidth > this._wrapperWidth ? this._enable() : this.disable());
        this._maxPosition = this._contentWidth - this._wrapperWidth + this._wrapperPadding;
        this._thumbWidth = d.floor(this._wrapperWidth / this._contentWidth * this._wrapperWidth);
        this._maxThumbPosition = this._wrapperWidth - this._thumbWidth;
        this._positionThumb()
    },scrollTo: function(a) {
        var b = this._maxPosition;
        a <= 0 ? a = 0 : a >= b && (a = b);
        this._scrollContent(-a);
        this._positionThumb();
        return this
    },_onClickTrack: function() {
    },
        _moveThumb: function() {
        },_scroll: function(a, b) {
            var c;
            c = b ? this._wrapperWidth : 50;
            c = a < 0 ? this._scrollPosition - c : this._scrollPosition + c;
            c >= 0 && (c = 0);
            this.scrollTo(d.abs(c))
        },_scrollContent: function() {
        },_positionContent: function() {
        },_positionThumb: function() {
        }});
    ScrollbarBase.need = function() {
        return !a
    };
    var p = ScrollbarBase.extend({initialize: function(a) {
        ScrollbarBase.prototype.initialize.call(this, a);
        this.$bar.addClass("scrollbar-h")
    },_onClickTrack: function(a) {
        var b = this.$thumb.offset();
        a.pageX < b.left ? this._scroll(1,
            true) : this._scroll(-1, true)
    },_scrollContent: function(a) {
        this._scrollPosition = a;
        this.$content.css("left", a)
    },_moveThumb: function(a, b) {
        var c = a.pageX - b.pageX, f = this.$thumb.position(), c = d.ceil(d.max(d.min(f.left + c, this._maxThumbPosition), 0));
        this.$thumb.css("left", c);
        this._positionContent(c)
    },_positionContent: function(a) {
        if (a === void 0)
            a = this.$thumb.position().left;
        a = -d.ceil(a / this._maxThumbPosition * this._maxPosition);
        this._scrollContent(a)
    },_positionThumb: function() {
        var a = d.abs(d.min(d.ceil(this._scrollPosition /
            this._maxPosition * this._maxThumbPosition), this._maxThumbPosition));
        this.$thumb.css("left", a)
    },refresh: function(a) {
        this._wrapperWidth = this.$el.innerWidth();
        this._wrapperPadding = this._wrapperWidth - this.$el.width();
        this._contentWidth = this.$content.outerWidth();
        ScrollbarBase.prototype.refresh.call(this, a);
        this.$thumb.width(this._thumbWidth);
        return this
    }}), q = ScrollbarBase.extend({initialize: function(a) {
        ScrollbarBase.prototype.initialize.call(this, a);
        this.$bar.addClass("scrollbar-v")
    },refresh: function(a) {
        this._wrapperWidth =
            this.$el.innerHeight();
        this._wrapperPadding = this._wrapperWidth - this.$el.height();
        this._contentWidth = this.$content.height();
        ScrollbarBase.prototype.refresh.call(this, a);
        this.$bar.height(this._wrapperWidth);
        this.$thumb.height(this._thumbWidth);
        return this
    },_onClickTrack: function(a) {
        var b = this.$thumb.offset();
        a.pageY < b.top ? this._scroll(1, true) : this._scroll(-1, true)
    },_scrollContent: function(a) {
        this._scrollPosition = a;
        this.$content.css("top", a)
    },_moveThumb: function(a, b) {
        var c = a.pageY - b.pageY, f = this.$thumb.position(),
            c = d.ceil(d.max(d.min(f.top + c, this._maxThumbPosition), 0));
        this.$thumb.css("top", c);
        this._positionContent(c)
    },_positionContent: function(a) {
        if (a === void 0)
            a = this.$thumb.position().top;
        a = -d.ceil(a / this._maxThumbPosition * this._maxPosition);
        this._scrollContent(a)
    },_positionThumb: function() {
        var a = d.abs(d.min(d.ceil(this._scrollPosition / this._maxPosition * this._maxThumbPosition), this._maxThumbPosition));
        this.$thumb.css("top", a)
    }});
    b.fn.scrollbar = function(a) {
        if (!this.length)
            return this;
        var a = a || {}, a = a.type ||
            "ver", b = this[0];
        if (b.scrollbar)
            return b.scrollbar;
        a === "hor" ? b.scrollbar = new p({el: b}) : a === "ver" && (b.scrollbar = new q({el: b}));
        return this
    }
})(window, document, jQuery);
(function(c) {
    var g;
    c.fn.textareaAutosize = function(b) {
        b = b || {};
        return this.each(function() {
            var d, f, m, a = c(this);
            a.focus(function() {
                g || (g = c('<pre style="position:absolute;left:-9999px;top:0;word-wrap:break-word;height:auto;">').appendTo("body"));
                d = g.removeAttr("class");
                b.className && d.addClass(b.className);
                d.width(a.width());
                f = setInterval(function() {
                    d.html(a.val());
                    var b = d.height();
                    if (m !== b) {
                        m = b;
                        a.height(m)
                    }
                }, 30)
            }).blur(function() {
                    clearInterval(f)
                })
        })
    }
})(jQuery);
(function(c) {
    var g = 0;
    c.fn.extend({bubbletip: function(b, d) {
        function f() {
            var b;
            if (!v) {
                v = true;
                x && t.stop(true, false);
                q.calculateOnShow && a();
                if (q.positionAt.match(/^element|body$/i))
                    if (q.deltaDirection.match(/^up|down$/i)) {
                        x || t.css("top", parseInt(n.top + n.delta) + "px");
                        b = {top: n.top + "px"}
                    } else {
                        x || t.css("left", parseInt(n.left + n.delta) + "px");
                        b = {left: n.left + "px"}
                    }
                else if (q.deltaDirection.match(/^up|down$/i)) {
                    if (!x) {
                        n.mouseTop = e.pageY + n.top;
                        t.css({top: parseInt(n.mouseTop + n.delta) + "px",left: parseInt(e.pageX - t.width() /
                            2) + "px"})
                    }
                    b = {top: n.mouseTop + "px"}
                } else {
                    if (!x) {
                        n.mouseLeft = e.pageX + n.left;
                        t.css({left: parseInt(n.mouseLeft + n.delta) + "px",top: parseInt(e.pageY - t.height() / 2) + "px"})
                    }
                    b = {left: n.left + "px"}
                }
                x = false;
                t.show();
                t.animate(b, q.animationDuration, q.animationEasing, function() {
                    v = true
                })
            }
        }
        function m() {
            var a;
            v = false;
            x = true;
            a = q.positionAt.match(/^element|body$/i) ? q.deltaDirection.match(/^up|down$/i) ? {top: parseInt(n.top - n.delta) + "px"} : {left: parseInt(n.left - n.delta) + "px"} : q.deltaDirection.match(/^up|down$/i) ? {top: parseInt(n.mouseTop -
                n.delta) + "px"} : {left: parseInt(n.mouseLeft - n.delta) + "px"};
            t.animate(a, q.animationDuration, q.animationEasing, function() {
                t.hide();
                x = false
            })
        }
        function a() {
            if (q.positionAt.match(/^element$/i)) {
                var a = q.positionAtElement.offset();
                if (q.deltaDirection.match(/^up$/i)) {
                    n.top = a.top + q.offsetTop - t.outerHeight();
                    n.left = a.left + q.offsetLeft + (q.positionAtElement.outerWidth() - t.outerWidth()) / 2;
                    n.delta = q.deltaPosition
                } else if (q.deltaDirection.match(/^down$/i)) {
                    n.top = a.top + q.positionAtElement.outerHeight() + q.offsetTop;
                    n.left = a.left + q.offsetLeft + (q.positionAtElement.outerWidth() - t.outerWidth()) / 2;
                    n.delta = -q.deltaPosition
                } else if (q.deltaDirection.match(/^left$/i)) {
                    n.top = a.top + q.offsetTop + (q.positionAtElement.outerHeight() - t.outerHeight()) / 2;
                    n.left = a.left + q.offsetLeft - t.outerWidth();
                    n.delta = q.deltaPosition
                } else if (q.deltaDirection.match(/^right$/i)) {
                    n.top = a.top + q.offsetTop + (q.positionAtElement.outerHeight() - t.outerHeight()) / 2;
                    n.left = a.left + q.positionAtElement.outerWidth() + q.offsetLeft;
                    n.delta = -q.deltaPosition
                }
            } else if (q.positionAt.match(/^body$/i))
                if (q.deltaDirection.match(/^up|left$/i)) {
                    n.top =
                        q.offsetTop;
                    n.left = q.offsetLeft;
                    n.delta = q.deltaPosition
                } else {
                    if (q.deltaDirection.match(/^down$/i)) {
                        n.top = parseInt(q.offsetTop + t.outerHeight());
                        n.left = q.offsetLeft
                    } else {
                        n.top = q.offsetTop;
                        n.left = parseInt(q.offsetLeft + t.outerWidth())
                    }
                    n.delta = -q.deltaPosition
                }
            else if (q.positionAt.match(/^mouse$/i))
                if (q.deltaDirection.match(/^up|left$/i)) {
                    if (q.deltaDirection.match(/^up$/i)) {
                        n.top = -(q.offsetTop + t.outerHeight());
                        n.left = q.offsetLeft
                    } else if (q.deltaDirection.match(/^left$/i)) {
                        n.top = q.offsetTop;
                        n.left = -(q.offsetLeft +
                            t.outerWidth())
                    }
                    n.delta = q.deltaPosition
                } else {
                    n.top = q.offsetTop;
                    n.left = q.offsetLeft;
                    n.delta = -q.deltaPosition
                }
            q.positionAt.match(/^element|body$/i) && t.css({position: "absolute",top: n.top + "px",left: n.left + "px"})
        }
        if (c("table.bubbletip #" + c(b).get(0).id).length > 0)
            return this;
        var r, p, q, n, s, u, v, x, t, w, C, D;
        r = c(this);
        p = c(b);
        w = g++;
        q = {positionAt: "element",positionAtElement: r,offsetTop: 0,offsetLeft: 0,deltaPosition: 30,deltaDirection: "up",animationDuration: 250,animationEasing: "swing",bindShow: "mouseover",bindHide: "mouseout",
            delayShow: 0,delayHide: 500,calculateOnShow: false};
        d && (q = c.extend(q, d));
        n = {top: 0,left: 0,delta: 0,mouseTop: 0,mouseLeft: 0,tipHeight: 0,bindShow: (q.bindShow + " ").replace(/ +/g, ".bubbletip" + w),bindHide: (q.bindHide + " ").replace(/ +/g, ".bubbletip" + w),alwayShow: q.alwayShow || false};
        u = s = null;
        x = v = false;
        r.data("bubbletip_tips") ? r.data("bubbletip_tips", c.merge(r.data("bubbletip_tips"), [[p.get(0).id, w]])) : r.data("bubbletip_tips", [[p.get(0).id, w]]);
        if (!q.positionAt.match(/^element|body|mouse$/i))
            q.positionAt = "element";
        if (!q.deltaDirection.match(/^up|down|left|right$/i))
            q.deltaDirection = "up";
        q.deltaDirection.match(/^up$/i) ? t = c('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td><table class="bt-bottom" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-bottomright"></td></tr></tbody></table>') :
            q.deltaDirection.match(/^down$/i) ? t = c('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td><table class="bt-top" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>') : q.deltaDirection.match(/^left$/i) ?
                t = c('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right-tail"><div class="bt-right"></div><div class="bt-right-tail"></div><div class="bt-right"></div></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>') : q.deltaDirection.match(/^right$/i) && (t = c('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left-tail"><div class="bt-left"></div><div class="bt-left-tail"></div><div class="bt-left"></div></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>'));
        t.appendTo("body");
        c(".bt-content", t).append(p);
        p.show();
        if (q.deltaDirection.match(/^left|right$/i)) {
            n.tipHeight = parseInt(p.height() / 2);
            p.height() % 2 == 1 && n.tipHeight++;
            n.tipHeight = n.tipHeight < 20 ? 1 : n.tipHeight - 20;
            q.deltaDirection.match(/^left$/i) ? c("div.bt-right", t).css("height", n.tipHeight + "px") : c("div.bt-left", t).css("height", n.tipHeight + "px")
        }
        t.css({width: t.width(),height: t.height()});
        a();
        t.hide();
        c(window).bind("resize.bubbletip" + w, function() {
            var b = c(window).width(), d = c(window).height();
            if (!(b ===
                C && d === D)) {
                C = b;
                D = d;
                u && clearTimeout(u);
                u = setTimeout(function() {
                    a()
                }, 250)
            }
        });
        n.alwayShow ? f() : c([t.get(0), this.get(0)]).bind(n.bindShow, function() {
            s && clearTimeout(s);
            q.delayShow === 0 ? f() : s = setTimeout(function() {
                f()
            }, q.delayShow);
            return false
        }).bind(n.bindHide, function() {
                s && clearTimeout(s);
                q.delayHide === 0 ? m() : s = setTimeout(function() {
                    m()
                }, q.delayHide);
                return false
            });
        return this
    },removeBubbletip: function(b) {
        var d, f = [], g = [], a;
        d = c.makeArray(c(this).data("bubbletip_tips"));
        a = c.makeArray(b);
        for (b = 0; b < a.length; b++)
            f.push(c(a[b]).get(0).id);
        for (b = 0; b < d.length; b++)
            if (f.length == 0 || c.inArray(d[b][0], f) >= 0) {
                for (a = c("#" + d[b][0]).get(0).parentNode; a.tagName.toLowerCase() != "table"; )
                    a = a.parentNode;
                c("#" + d[b][0]).appendTo("body").hide();
                c(a).remove();
                c(this).unbind(".bubbletip" + d[b][1]);
                c(window).unbind(".bubbletip" + d[b][1])
            } else
                g.push(d[b]);
        c(this).data("bubbletip_tips", g);
        return this
    }})
})(jQuery);
var FX = {transitionend: "transitionend oTransitionEnd webkitTransitionEnd MSTransitionEnd"}, nextFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(c) {
        return setTimeout(function() {
            c(Date.now())
        }, 5)
    }
}(),

    cancelFrame = function() {
    return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}();
$.fn.hasPlaceholder = function() {
    $.support.placeholder || this.each(function() {
        var c = $(this), g = c.attr("placeholder");
        c.focus(function() {
            c.val() == g && c.val("");
            c.removeClass("has-placeholder")
        }).blur(function() {
                c.val() == "" && c.val(g).addClass("has-placeholder")
            });
        c.blur()
    });
    return this
};
$.fn.iPhoneSimulator = function() {
    if (!this.length)
        return this;
    var c = $(".app-content", this), g = c.width(), b = $(".app-slider", c).width() - g, d = $(".app-scroller", this), f = $(".s-thumb", this);
    d.width();
    var d = f.width(), m = g - d, a = 1, r = c.scrollLeft(), p = function() {
        if (r >= b) {
            r = c.scrollLeft();
            clearInterval(q)
        } else {
            c.scrollLeft(r = r + a);
            f.css({left: Math.min(Math.ceil(r / b * m), m)})
        }
    }, q = setInterval(p, 25);
    c.on("mouseover", function() {
        clearInterval(q)
    }).on("mouseout", function() {
            if (r == b) {
                a = -1;
                c.scrollLeft(r = r + a)
            } else
                a = 1;
            q = setInterval(p,
                25)
        });
    return this
};
var getHidder = function() {
    var c;
    return function() {
        if (!c) {
            c = $("#hider");
            c.length || (c = $('<div id="hider" style="position:absolute;left:-9999px;top:-9999px;"/>').appendTo("body"))
        }
        return c
    }
}();
(function() {
    function c() {
        $(document).off("keydown.confirm");
        $.fancybox.close()
    }
    var g, b, d, f, m;
    $.extend({confirm: function(a, r, p) {
        d = p || {};
        f = r || null;
        if (!g) {
            g = $('<div id="_dialog-confirm" class="dialog-confirm"><div class="message"></div><div class="action"><button class="ok">\u786e\u8ba4</button><button class="cancel">\u53d6\u6d88</button></div></div>').click(function(a) {
                a.stopPropagation()
            });
            getHidder().append(g);
            b = g.find(".message");
            m = g.find(".cancel").click(c);
            g.find(".ok").click(function() {
                f && f(true);
                c()
            });
            d.btnCancel === false ? m.hide() : m.show()
        }
        $(document).on("keydown.confirm", function(a) {
            a.preventDefault();
            a.stopPropagation();
            if (a.keyCode == 13) {
                f && f(true);
                $.fancybox.close();
                $(document).off("keydown.confirm")
            }
        });
        b.html(a);
        $.fancybox({padding: 0,showCloseButton: false,hideOnOverlayClick: false,transitionIn: "none",transitionOut: "none",extraClass: "fancybox-confirm",href: "#_dialog-confirm",onClose: function() {
            f && f(false)
        }})
    }})
})();
function checkButtonStatus(c, g) {
    this.val() != "" ? c.removeClass(g).prop("disabled", false) : c.addClass(g).prop("disabled", true)
}
$.fn.dropMenu = function() {
    return this.each(function() {
        var c = $(this);
        c.find(".ico-arr").mouseenter(function() {
            c.addClass("open")
        });
        c.mouseleave(function() {
            c.removeClass("open")
        })
    })
};
$.rails.allowAction = function(c) {
    var g = c.data("confirm"), b;
    if (!g)
        return true;
    $.rails.fire(c, "confirm") && $.confirm(g, function(d) {
        if (b = $.rails.fire(c, "confirm:complete", [d])) {
            d = $.rails.allowAction;
            $.rails.allowAction = function() {
                return true
            };
            c.trigger("click");
            $.rails.allowAction = d
        }
    });
    return false
};
$.fn.sideTips = function(c) {
    var c = $.extend({useAjax: true}, c), g = c.direction || "right";
    return this.each(function() {
        var b = $(this), d = b.data("id"), f, m = {}, a = {};
        f = g === "right" ? b.outerWidth() : b.outerHeight();
        m[g] = -(f + 15);
        a[g] = parseInt(b.css(g));
        b.css(g, m[g]).find(".close").click(function() {
            b.animate(m, 300);
            c.useAjax && $.ajax({type: "POST",url: "/util/cookie/" + d})
        });
        c.handle && $(c.handle).click(function() {
            b.animate(a, 300)
        });
        c.useAjax && !userCookie(d) && b.animate(a, 300)
    })
};
var open_map_info_window = function() {
    var c = {};
    return function(g, b) {
        if (g) {
            var d = b.data("user-entry-index"), f = c[d];
            if (!f) {
                f = $('<div class="map-info-window">' + $.map(g, function(b) {
                    return b ? "<div>" + b + "</div>" : ""
                }).join("") + '<i class="close"></i></div>');
                $(".close", f).click(function() {
                    f.hide()
                });
                c[d] = f;
                $("body").append(f)
            }
            d = b.offset().left < WindowSize.width / 2 ? {left: 40,right: "auto"} : {left: "auto",right: 40};
            f.css(d).show();
            return f
        }
    }
}(), trip_thumb_gmap_callback = function(c) {
    return function() {
        var g, b;
        $(".trip-node[data-poi-entry-index]").on("click",
            function() {
                var c = $(this), c = Gmaps.map.markers[c.data("poi-entry-index")], f = c.infowindow;
                g && g.close();
                b && b.hide();
                f.open(Gmaps.map.map, c.serviceObject);
                g = f
            });
        $(".trip-node").click(function() {
            window.parent && parent.$(parent).trigger("dochaschanged", [$(this).data("hash")])
        });
        $(".trip-node[data-user-entry-index]").on("click", function() {
            var d = $(this);
            g && g.close();
            b && b.hide();
            b = open_map_info_window(c[d.data("user-entry-index")], d)
        })
    }
};
function trip_map_init(c) {
    var g = $(".thumb-list"), b = $("ul", g);
    b.width(b.find("li").length * 130);
    g.scrollbar({type: "hor"});
    Gmaps.map.callback = trip_thumb_gmap_callback(c);
    c = location.hash.replace("#", "");
    b = $('li[data-hash="' + c + '"]', b).offset();
    b.left && g.scrollbar().scrollTo(b.left - 300)
}
function userCookie(c) {
    var g = window._G_current_user_cookie ? window._G_current_user_cookie.split(",") : [];
    return _.indexOf(g, c) != -1
}
function likesZoomIn(c) {
    $(window).on("note:like", function(b, d) {
        var f = d.model, g;
        g = f.get("likes_count") || 0;
        if (f.get("current_user_like")) {
            g = {likes_count: Math.max(g - 1, 0),current_user_like: false};
            var a = c.indexOf(f);
            $('#my-likes li[data-index="' + a + '"]').remove()
        } else
            g = {likes_count: g + 1,current_user_like: true};
        f.set(g);
        $.ajax({url: "/trips/" + f.get("trip_id") + "/like",type: "POST",data: {likeable_id: f.get("sid"),likeable_type: TripUtils.noteServerType(d.type)}})
    });
    var g = tripshow.View.FullScreenViewer;
    g.setCollection(c);
    $("#my-likes a").click(function(b) {
        b.stopPropagation()
    });
    $("#my-likes li").click(function() {
        var b = $(this).data("index"), b = c.at(b);
        g.open(b)
    });
    $(document).keydown(function(b) {
        var c = b.keyCode;
        if (g.isOpened())
            switch (c) {
                case 37:
                    g.prev();
                    break;
                case 39:
                    g.next();
                    break;
                case 27:
                    b.preventDefault();
                    g.close();
                    break;
                case 80:
                    g.isPlaying() ? g.stopPlay() : g.autoPlay();
                    break;
                case 32:
                    b.preventDefault();
                    g.next()
            }
    })
}
function destinationNoteZoom(c) {
    var g = tripshow.View.FullScreenViewer;
    $(".photos .clickable").click(function(b) {
        b.preventDefault();
        var d = $(this), b = d.parent().data("id"), d = d.data("id"), f = c[b];
        void 0 != b && g.setCollection(f);
        b = f.get(d);
        console.info(d);
        g.open(b)
    })
}
$.fn.indexCover = function(c) {
    function g() {
        var b = {display: "block"};
        WindowSize.width > r ? $.extend(b, {width: WindowSize.width,height: "auto",marginLeft: -Math.floor(WindowSize.width / 2) + "px"}) : $.extend(b, {width: r,height: p,marginLeft: "-800px",marginTop: 0});
        a.css(b);
        if (WindowSize.width > 1024) {
            q.removeClass("hidden");
            n.removeClass("hidden")
        } else {
            q.addClass("hidden");
            n.addClass("hidden")
        }
    }
    function b(b) {
        b < 0 ? b = f - 1 : b > f - 1 && (b = 0);
        var c = d[b];
        a.attr("src", c[2]);
        s.text("\u56fe\u7247\u6765\u81ea\u300a" + c[3] + "\u300b").attr("href",
            "/trips/" + c[0] + "/#nt/" + c[1]);
        m = b
    }
    var c = c || {}, d = c.data || [], f = d.length, m = 0, a = $(".index-banner", this), r = 1600, p = 385, q = $(".prev", this), n = $(".next", this), s = $(".cover-info a", this);
    g();
    b($.rnd(0, f - 1));
    WindowResizeListener.add(g);
    q.on("click", function() {
        b(m - 1)
    });
    n.on("click", function() {
        b(m + 1)
    });
    return this
};
$.fn.indexAlbums = function() {
    function c(c, b, d, f) {
        var m = c.scrollLeft();
        m == 0 ? d.addClass("disabled") : d.removeClass("disabled");
        b.width() - m <= c.width() ? f.addClass("disabled") : f.removeClass("disabled")
    }
    return this.each(function() {
        $(this);
        var g = $(".prev", this), b = $(".next", this), d = $(".scroller", this), f = d.parent(), m;
        d.width($("article", d).length * 220);
        c(f, d, g, b);
        g.click(function() {
            if (!m) {
                m = true;
                f.animate({scrollLeft: "-=660"}, 400, function() {
                    m = false;
                    c(f, d, g, b)
                })
            }
        });
        b.click(function() {
            if (!m) {
                m = true;
                f.animate({scrollLeft: "+=660"},
                    400, function() {
                        m = false;
                        c(f, d, g, b)
                    })
            }
        })
    })
};
$.fn.tripManager = function() {
    $(".trip-item", this).each(function() {
        var c = $(this).data("id"), g = $(".modify-privacy", this), b = g.parent();
        g.click(function() {
            var d;
            if (b.hasClass("public")) {
                b.removeClass("public").addClass("private");
                $("span", b).text("\u79c1\u4eba");
                d = true
            } else {
                b.removeClass("private").addClass("public");
                $("span", b).text("\u516c\u5f00");
                d = false
            }
            $.ajax({url: "/trips/" + c,type: "put",data: {"trip[privacy]": d}})
        })
    })
};
(function() {
    var c = true;
    try {
        document.createElement("canvas").getContext("2d")
    } catch (g) {
        c = false
    }
    $.fn.clock = function() {
        function b(b, c, g, a) {
            this.beginPath();
            this.lineWidth = c;
            b = b * Math.PI * 2 - Math.PI / 2;
            this.moveTo(a, a);
            this.lineTo(a + g * Math.cos(b), a + g * Math.sin(b));
            this.closePath();
            this.stroke()
        }
        if (!c)
            return this;
        this.each(function() {
            var c = $(this), f = c.text();
            if (f)
                try {
                    var f = f.split(":"), g = parseInt(f[0], 10), a = parseInt(f[1], 10), g = ((g > 12 ? g - 12 : g) + a / 60) / 12, a = a / 60, r = document.createElement("canvas"), p = r.getContext("2d");
                    $(r).attr({width: 20,height: 20}).appendTo(c.addClass("has-clock"));
                    p.beginPath();
                    p.lineWidth = 2;
                    p.strokeStyle = "#a8a8a8";
                    p.arc(10, 10, 7, 0, Math.PI * 2, true);
                    p.closePath();
                    p.stroke();
                    b.call(p, g, 2, 4, 10);
                    b.call(p, a, 2, 5, 10)
                } catch (q) {
                }
        });
        return this
    }
})();
(function(c, g) {
    var b, d;
    function f(b, c) {
        var c = c || {}, d = this, f = $(b), k = $('<div class="dummy">');
        this.data = c.data || {};
        this.$dummy = k.appendTo(f);
        this.options = c;
        f.on("mousedown", ".ico-remove", function(a) {
            a.stopPropagation()
        });
        f.on("mousedown", ".dbox-item", function(b) {
            var c = $(this);
            if (!c.hasClass("is-clone")) {
                n.onMousedown(d);
                d.$items = f.find(".dbox-item");
                c.on("mousemove", function() {
                    d.offset = a(b, c);
                    d.elOffset = f.offset();
                    d.limitMax = {x: f.width() - c.outerWidth(),y: f.height() - c.outerHeight()};
                    d.createDummy(b,
                        c);
                    c.off("mousemove").off("mouseup")
                }).on("mouseup", function() {
                        c.off("mousemove").off("mouseup")
                    })
            }
        });
        this.$el = f
    }
    function m() {
        function a() {
            $.each(b.days, function() {
                this.photos.reLayout()
            })
        }
        var b = this;
        b.days = {};
        $(".day:not(.add-day)").each(function() {
            b.days[this.id] = new l({el: this})
        });
        WindowResizeListener.add(a);
        a()
    }
    function a(a, b) {
        var c = $(b).offset();
        return {x: a.pageX - c.left,y: a.pageY - c.top}
    }
    function r(a, b) {
        var b = $(b), c = b.outerWidth(), d = b.outerHeight(), f = b.offset();
        return a.x >= f.left && a.x <= f.left +
            c && a.y >= f.top && a.y <= f.top + d ? {left: a.x - f.left < c / 2} : false
    }
    var p = $(g), q = $(c);
    f.prototype = {createDummy: function(a, b) {
        this.clean();
        var c = b.clone().css("margin", "0").addClass(".is-clone");
        this.$dummy.empty().append(c).show();
        this.clickItem = b.css("visibility", "hidden");
        this.clickItemIndex = this.$items.index(b);
        this.moveDummy(a)
    },clean: function() {
        this.$dummy.hide();
        if (this.clickItem && this.clickItem.length) {
            this.clickItem.css("visibility", "visible");
            this.clickItem = null
        }
    },moveDummy: function(a) {
        var b = a.pageY -
            this.elOffset.top - this.offset.y, b = {left: Math.min(Math.max(a.pageX - this.elOffset.left - this.offset.x, 0), this.limitMax.x),top: Math.min(Math.max(b, 0), this.limitMax.y)};
        this.$dummy.css(b);
        var c = {x: a.pageX,y: a.pageY}, d = this;
        d.$items.each(function() {
            var a = $(this), b = r(c, this);
            if (b) {
                if (d.clickItem[0] !== this) {
                    b.left ? a.before(d.clickItem) : a.after(d.clickItem);
                    d.$items = d.$el.find(">.dbox-item")
                }
                return false
            }
        })
    },onMouseup: function() {
        if (this.clickItem && this.clickItem.length) {
            var a = this.$items.index(this.clickItem);
            this.clickItemIndex != a && this.trigger("statuschange", this, this.clickItem.data("id"), a)
        }
        this.clean()
    }};
    _.extend(f.prototype, Backbone.Events);
    var n, s;
    n = {onMousedown: function(a) {
        s = a;
        $(g).on("mousemove", this.onMousemove).on("mouseup", this.onMouseup)
    },onMouseup: function(a) {
        $(g).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
        s && s.onMouseup(a)
    },onMousemove: function(a) {
        s && s.moveDummy(a)
    }};
    var u, v, x, t, w, C, D, G, k;
    u = {init: function(a) {
        v = a;
        p.on("photos:mousedown", function(a, b) {
            x = b
        })
    },onMousedown: function(a) {
        b =
            a.clientX;
        d = a.clientY;
        p.on("mousemove", this.onMousemove).on("mouseup", this.onMouseup)
    },onMouseup: function(a) {
        $(g).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
        $.clearTimer(C);
        D = false;
        $.clearTimer(G);
        k = false;
        v.clearActive();
        if (x && x.isMousedown) {
            v.checkDropInside(a, x);
            t && t.remove();
            t = null;
            x.stopDrag();
            x.isMousedown = false
        }
    },onMousemove: function(a) {
        if (x && x.isMousedown) {
            var f = this;
            Date.now();
            f.mousemoveEvent = a;
            if (!t) {
                if (x) {
                    w = x.clickPos;
                    var l = x.getSelected(), i = x.clickItem, g = [];
                    t = $('<div class="dragger" unselectable="on"><div class="photos-count"></div><div class="mask"></div></div>');
                    t.find(".photos-count").text(l.length + "\u5f20");
                    $.each(l, function(a) {
                        var f, k, n = $('<div class="clone-photo">'), m = $(l[a]).offset();
                        k = $(c);
                        f = m.left - k.scrollLeft();
                        k = m.top - k.scrollTop();
                        m = i[0] === l[a];
                        f = {left: f - b + w.x,top: k - d + w.y,zIndex: m ? 1 : 0};
                        a = $(l[a]).find("img").clone();
                        n.append(a);
                        n.css(f);
                        m ? g.unshift(n) : g.push(n)
                    });
                    $.each(g, function(a) {
                        t.append(g[a])
                    });
                    $("body").append(t);
                    setTimeout(function() {
                        $.each(g, function(a) {
                            var b = {left: 0,top: 0};
                            $.support.cssAttrCheck("transform") ? g[a].css(b) : g[a].animate(b,
                                200)
                        });
                        setTimeout(function() {
                            t && t.addClass("dragger-bundled")
                        }, 100)
                    }, 0)
                }
                x.startDrag()
            }
            t.css({left: a.pageX - w.x,top: a.pageY - w.y});
            if (!k) {
                k = true;
                $.clearTimer(G);
                G = setTimeout(function() {
                    G = setInterval(function() {
                        v.insideTest(f.mousemoveEvent)
                    }, 100)
                }, 1E3)
            }
            if (!D) {
                D = true;
                $.clearTimer(C);
                var n = function() {
                    if (t) {
                        var a = WindowSize.height, b = q.scrollTop(), c = t.offset(), d;
                        if (c.top - b < 0) {
                            d = true;
                            $("html,body").animate({scrollTop: "-=" + Math.ceil(a * 0.7)}, {duration: 500})
                        } else if (b + a - c.top < 80) {
                            d = true;
                            $("html,body").animate({scrollTop: "+=" +
                                Math.ceil(a * 0.7)}, {duration: 500})
                        }
                        if (d) {
                            $.clearTimer(C);
                            setTimeout(function() {
                                C = setInterval(n, 1E3)
                            }, 1500)
                        }
                    }
                };
                C = setInterval(n, 1E3)
            }
        }
    }};
    var l = Backbone.View.extend({initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        var b = this;
        b.defaultNodeId = b.$el.data("default-node-id");
        b.dayId = b.$el.data("id");
        b.photos = new z({el: b.$el.find(".photo-list")});
        b.nodes = new E({el: b.$el.find(".nodes"),dayId: b.dayId});
        b.nodes.on("node:deleted", function(a, c) {
            b.photos.unbindNode(c)
        });
        b.$body = b.$el.find(".container");
        b.$el.on("mousedown.dotted", function(a) {
            var c = $(a.target).parents();
            if (!c.hasClass("photo") && !c.hasClass("trip-node") && !c.hasClass("header")) {
                b._photoState = {};
                $.each(b.photos.children(), function() {
                    var a = $(this);
                    b._photoState[a.data("note-id")] = {$el: a,selected: a.hasClass("selected"),pos: $.extend(a.offset(), {width: a.width(),height: a.height()})}
                });
                p.on("mousemove.dotted", function(a) {
                    b._moveDotted(a);
                    b._selectPhoto(a)
                }).on("mouseup.dotted", function(a) {
                        p.off("mousemove.dotted mousedown.dotted mouseup.dotted");
                        b._hideDotted(a);
                        b._photoState = null
                    });
                b._showDotted(a)
            }
        });
        b.updateNodeCount()
    },_rect: function(a, b) {
        var c = Math.abs(a.x - b.x), d = Math.abs(a.y - b.y);
        return {left: Math.min(a.x, b.x),top: Math.min(a.y, b.y),width: c,height: d}
    },_selectPhoto: function(a) {
        var b = this._rect({x: a.pageX,y: a.pageY}, this._dottedStartPoint);
        $.each(this._photoState, function() {
            var a = this.$el, c = this.pos, d;
            $.each([{x: c.left,y: c.top}, {x: c.left + c.width,y: c.top}, {x: c.left,y: c.top + c.height}, {x: c.left + c.width,y: c.top + c.height}], function() {
                var a;
                a = this.x > b.left && this.x < b.left + b.width && this.y > b.top && this.y < b.top + b.height ? true : false;
                if (a) {
                    d = true;
                    return false
                }
            });
            d ? a.addClass("selected") : a.removeClass("selected")
        })
    },_moveDotted: function(a) {
        a = {x: a.pageX,y: a.pageY};
        $("#dotted-frame").css(this._rect(a, this._dottedStartPoint))
    },_hideDotted: function() {
        $("#dotted-frame").hide().css({top: 0,left: 0,width: 0,height: 0})
    },_showDotted: function(a) {
        this._dottedStartPoint = {x: a.pageX,y: a.pageY};
        $("#dotted-frame").css({left: a.pageX,top: a.pageY}).show()
    },clearActive: function() {
        this.$body.removeClass("day-active");
        this.nodes.clearActive()
    },insideTest: function(a) {
        var b = {x: a.pageX,y: a.pageY}, a = this.$body;
        if (r(b, a)) {
            b = this.nodes.insideTest(b);
            b === false ? a.addClass("day-active") : b.addClass("trip-node-active");
            return true
        }
        return false
    },dropInside: function(a, b) {
        var c = this.$body, d = {x: a.pageX,y: a.pageY}, f = b.getSelected(), k = b.getSelectedIds();
        if (r(d, c)) {
            var l, d = this.nodes.insideTest(d);
            if (d !== false) {
                l = true;
                c = d.data("id");
                d = d.data("name");
                if (!c)
                    return false;
                b.bindNode(c, d) && this.photos.trigger("note:bound", this.dayId,
                    c, k);
                this.updateNodeCount(true)
            }
            if (b !== this.photos) {
                l || b.unbindNode();
                this.photos.$el.prepend(f);
                this.photos.chkPhotos();
                b.chkPhotos();
                l || this.photos.trigger("note:bound", this.dayId, this.defaultNodeId, k);
                this.photos.clearSelected()
            }
            l && this.photos.clearSelected();
            this.photos.stopDrag();
            return true
        }
        return false
    },updateNodeCount: function(a) {
        var b = this;
        this.nodes.getChildren().each(function() {
            var c = $(this), d = c.data("id"), d = b.photos.photosCount(d), f = c.find(".count"), k = parseInt(f.text());
            isNaN(k) && (k = 0);
            d > 0 ? f.text(d + " \u5f20").show() : f.html('<span style="color:#F7002F">\u672a\u5173\u8054\u76f8\u7247</span>').show();
            if (a) {
                d = d - k;
                if (d > 0) {
                    var l = $('<div class="bubble">' + (d > 0 ? "+" : "") + d + "</div>").appendTo(c);
                    d > 0 && l.addClass("bubble-add");
                    l.animate({top: -40}, 500, function() {
                        setTimeout(function() {
                            l.fadeOut(500, function() {
                                l.remove()
                            })
                        }, 1E3)
                    })
                }
            }
        })
    }}), z = Backbone.View.extend({initialize: function(b) {
        Backbone.View.prototype.initialize.call(this, b);
        var c = this;
        c.$el.on("mousedown mouseup", ".photo .unbind-note, .photo .ico-remove",
            function(a) {
                a.stopPropagation()
            });
        c.$el.find(".photo").on("click", ".unbind-note", function(a) {
            a.stopPropagation();
            var a = $(a.delegateTarget), b = a.data("note-id");
            a.find(".node-name span").empty();
            a.find(".node-name").addClass("hidden");
            c.trigger("note:unbound", b)
        }).on("click", ".ico-remove", function(a) {
                a.stopPropagation();
                var b = $(a.delegateTarget);
                $.confirm("\u786e\u8ba4\u5220\u9664\u8fd9\u5f20\u76f8\u7247\uff1f", function(a) {
                    if (a) {
                        a = b.data("note-id");
                        b.remove();
                        c.trigger("note:deleted", a);
                        var a = $("#photo-action .photo-num"),
                            d = a.text() - 0 || 0;
                        a.text(d - 1);
                        $("#photo-action .link-upload").show();
                        $("#photo-action .overload").hide()
                    }
                })
            });
        var d;
        this.$el.on("mousedown", ".photo", function(b) {
            var f = $(this), k = b.shiftKey;
            p.trigger("photos:mousedown", c);
            c.isMousedown = true;
            c.clickItem = f;
            c.clickPos = a(b, f);
            f.on("mouseup", function() {
                clearTimeout(d);
                f.off("mousemove").off("mouseup");
                c.isMousedown = false;
                var a = f.data("note-id"), b, i;
                if (k && c.lastSelectPhotoId > 0)
                    c.$el.find(".photo").removeClass("selected").each(function() {
                        var d = $(this), f = d.data("note-id");
                        if (!b && (f === c.lastSelectPhotoId || f === a) && !(f === c.lastSelectPhotoId && f === a)) {
                            b = true;
                            i = f
                        }
                        if (b) {
                            d.addClass("selected");
                            if (f !== i && (f === c.lastSelectPhotoId || f === a))
                                return false
                        }
                    });
                else if (f.hasClass("selected")) {
                    f.removeClass("selected");
                    c.lastSelectPhotoId = 0
                } else {
                    f.addClass("selected");
                    c.lastSelectPhotoId = a
                }
            });
            clearTimeout(d);
            d = setTimeout(function() {
                u.onMousedown(b);
                f.on("mousemove", function() {
                    f.off("mousemove").off("mouseup");
                    f.hasClass("selected") || f.addClass("selected")
                })
            }, 30)
        })
    },children: function() {
        return this.$(".photo")
    },
        photosCount: function(a) {
            return this.$el.find('.photo[data-node-id="' + a + '"]').length
        },chkPhotos: function() {
            this.$el.find(".photo").length ? this.$el.find(".no-photo").hide() : this.$el.find(".no-photo").show()
        },unbindNode: function(a) {
            var a = a ? this.$el.find('.photo[data-node-id="' + a + '"]') : this.getSelected(), b = a.length;
            a.find(".node-name").addClass("hidden").find("span").text("");
            return b
        },bindNode: function(a, b) {
            var c = this.getSelected().attr("data-node-id", a);
            c.find(".node-name").removeClass("hidden").find("span").text(b);
            return c.length
        },clearSelected: function() {
            this.getSelected().removeClass("selected")
        },getSelected: function() {
            return this.$el.find(".selected")
        },getSelectedIds: function() {
            var a = [];
            this.getSelected().each(function() {
                a.push($(this).data("note-id"))
            });
            return a
        },startDrag: function() {
            this.isDragging = true;
            this.getSelected().addClass("mv")
        },stopDrag: function() {
            this.isDragging = false;
            this.$el.find(".photo").removeClass("mv")
        },reLayout: function() {
            var a = this.$el.find(".photo");
            if (a.length) {
                var b = this.$el.width(),
                    c = a.eq(0).width() + 20, d = Math.floor(b / c);
                a.css({"margin-left": Math.floor((b - (c - 20) * d) / (d + 1))})
            }
        }}), E = Backbone.View.extend({initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        var b = this;
        this.$addBtn = this.$el.find(".add-node");
        this.$addBtn.find(".iframe").fancybox({scrolling: "no",padding: 0,width: 700,height: 440,hideOnOverlayClick: false,transitionIn: "none",transitionOut: "none"});
        this.$el.on("click", ".ico-remove", function() {
            var a = $(this).parent(".trip-node");
            $.confirm("\u786e\u8ba4\u5220\u9664\u8fd9\u4e2a\u62cd\u6444\u5730\u70b9\uff1f",
                function(c) {
                    if (c) {
                        c = a.data("id");
                        b.trigger("node:deleted", b.options.dayId, c);
                        a.remove()
                    }
                })
        })
    },getChildren: function() {
        return this.$el.find(".trip-node:not(.add-node)")
    },insideTest: function(a) {
        var b = false;
        this.$el.find(".trip-node").each(function() {
            if (r(a, this)) {
                b = $(this);
                return false
            }
        });
        return b
    },clearActive: function() {
        this.$el.find(".trip-node").removeClass("trip-node-active")
    },addNode: function(a) {
        if (!a || this.$el.find('.trip-node[data-id="' + a.id + '"]').length)
            return false;
        this.$addBtn.before('<div class="dbox-item trip-node" unselectable="on" data-id="' +
            a.id + '" data-name="' + a.name + '"><div class="ico ' + a.type + '"></div><div class="name" unselectable="on">' + a.name + '</div><div class="count" unselectable="on"><span style="color:#F7002F">\u672a\u5173\u8054\u76f8\u7247</span></div><i class="ico-remove"></i><i class="ico-arrow"></i></div>');
        if (_G_guide) {
            $(".add-node:first").removeBubbletip([$("#no-node")]);
            setTimeout(function() {
                $(".trip-node:not(.add-node):first").bubbletip($("#first-add-node"), {alwayShow: true,deltaDirection: "top"})
            }, 500);
            _G_guide = false
        }
    }});
    m.prototype = {checkDropInside: function(a, b) {
        $.each(this.days, function() {
            if (this.dropInside(a, b))
                return false
        })
    },insideTest: function(a) {
        this.clearActive();
        $.each(this.days, function() {
            if (this.insideTest(a))
                return false
        })
    },clearActive: function() {
        $.each(this.days, function() {
            this.clearActive()
        })
    },getDay: function(a) {
        return this.days[a]
    }};
    c.tripDaysInit = function(a) {
        function b() {
            $(".trip-node:not(.add-node):first").removeBubbletip([$("#first-add-node")])
        }
        setUnselectable($("body"), "on");
        $("body").on("mousedown",
            "img", function(a) {
                a.preventDefault()
            });
        $("#photo-action").on("mouseover", ".serial-tip", function() {
            $("#photo-action .serial-tip-detail").show()
        }).on("mouseout", ".serial-tip", function() {
                $("#photo-action .serial-tip-detail").hide()
            });
        var c = new m;
        u.init(c);
        $.each(c.days, function() {
            this.photos.on("note:unbound", function(b) {
                $.ajax({type: "PUT",url: "/trips/" + a + "/notes/" + b + "/unbind"})
            });
            this.photos.on("note:deleted", function(b) {
                $.ajax({type: "DELETE",url: "/trips/" + a + "/notes/" + b})
            });
            this.photos.on("note:bound",
                function(c, d, f) {
                    b();
                    $.ajax({type: "PUT",url: "/trips/" + a + "/trip_days/" + c + "/nodes/" + d + "/bind_notes",data: {note_ids: f}})
                });
            this.nodes.on("node:deleted", function(c, d) {
                b();
                $.ajax({type: "DELETE",url: "/trips/" + a + "/trip_days/" + c + "/nodes/" + d})
            })
        });
        $(".dbox").each(function() {
            var b = new f(this), c = $(this).data("id");
            b.on("statuschange", function(b, d, f) {
                $.ajax({type: "PUT",url: "/trips/" + a + "/trip_days/" + c + "/nodes/" + d,data: {position: f}})
            })
        });
        $(window).on("node:added", function(a, b, d) {
            var f = c.getDay("day-" + b);
            f && $.each(d,
                function(a) {
                    f.nodes.addNode(d[a])
                })
        })
    }
})(window, document);
$.fn.tabable = function(c) {
    c = c || {};
    this.each(function() {
        function g(b) {
            d.removeClass(c.currentClass).eq(b).addClass(c.currentClass);
            f.hide().eq(b).show()
        }
        var b = $(this), d = b.find(c.nav), f = b.find(c.contents);
        d.each(function(b) {
            $(this).click(function() {
                g(b);
                return false
            })
        });
        g(0)
    })
};
var NodeAddManager;
(function(c, g) {
    $(c);
    $(g);
    var b, d, f = [];
    NodeAdderManager = {add: function(a) {
        f.push(a)
    },getSelected: function() {
        var a = [];
        $.each(f, function() {
            a = a.concat(this.getSelected())
        });
        return a
    }};
    $.fn.isNodeAdder = function() {
        this.each(function() {
            var b = $(this), c = b.find(".search-panel"), d = !!c.length, f, g = new a({el: b.find(".add-panel"),searchBar: d});
            if (d) {
                f = new m({el: c});
                f.on("node:createnew", function(a) {
                    g.$key.val(a).focus();
                    g.$el.show();
                    c.hide()
                }).on("node:remove", function(a, b) {
                        g.del(b)
                    });
                NodeAdderManager.add(f)
            }
            NodeAdderManager.add(g);
            g.on("node:created node:createcancel", function(a) {
                if (d) {
                    c.show();
                    g.$el.hide();
                    f.hideResult();
                    a && f.insert(0, a)
                }
            })
        });
        return this
    };
    var m = Backbone.View.extend({initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        var c = this, a = this.$el, f = this.$key = a.find(".key"), g = this.$results = a.find(".search-results");
        this.$searchBar = a.find(".search-bar");
        this.$nearby = a.find(".nearby");
        this.$nearbyList = this.$nearby.find(".nearby-list");
        this.type = a.find('input[name="type"]').val();
        this.repository = {};
        this.selected = [];
        var m = {}, u, v;
        this.$nearbyList.on("click", ".trip-node", function() {
            c.add($(this).data("id"))
        });
        a.find(".inputer").click(function() {
            f.focus()
        });
        a.on("click", ".added .ico", function() {
            var a = $(this).parent(), b = a.data("id");
            b > 0 ? c.del(b) : c.trigger("node:remove", 0, a.data("name"));
            a.remove()
        });
        g.on("click", ".item", function() {
            $(this).addClass("current");
            c.selectCurrent()
        }).on("click", ".create", function() {
                c.trigger("node:createnew", v);
                f.val("")
            });
        f.keydown(function(a) {
            switch (a.keyCode) {
                case 38:
                    c.prevItem();
                    break;
                case 40:
                    c.nextItem();
                    break;
                case 13:
                    a.preventDefault();
                    c.selectCurrent();
                    break;
                case 27:
                    a.preventDefault();
                    a.stopPropagation();
                    f.val("")
            }
        }).focus(function() {
                clearInterval(u);
                u = setInterval(function() {
                    var a = $.trim(f.val());
                    if (v != a)
                        if ((v = a) && v.length > 1) {
                            c.currentKey = v;
                            if (m[v]) {
                                c.parseData(m[v]);
                                c.positionResults()
                            } else {
                                a = {q: v,entry_type: c.type};
                                if (d && b) {
                                    a.last_entry_type = b;
                                    a.last_entry_id = d
                                }
                                $.ajax({url: _G_search_url,type: "GET",dataType: "json",data: a,success: function(a) {
                                    if (a && a.q) {
                                        m[a.q] = a.entries;
                                        if (a.q == v) {
                                            c.parseData(a.entries);
                                            c.positionResults()
                                        }
                                    }
                                }})
                            }
                        } else
                            c.parseData(null)
                }, 20)
            }).blur(function() {
                clearInterval(u)
            })
    },getSelected: function() {
        var a = [], b = this;
        $.each(this.selected, function(c) {
            a.push({entry_type: b.type,entry_id: b.selected[c]})
        });
        return a
    },selectCurrent: function() {
        var a = this.$results.find(".current");
        if (a.length)
            if (a.hasClass("create")) {
                this.trigger("node:createnew", this.$key.val());
                this.$key.val("")
            } else {
                a = a.data("id");
                this.add(a);
                this.hideResult();
                this.$key.val("");
                d = a;
                b = this.type;
                this.getNearby(a)
            }
    },prevItem: function() {
        var a = this.$results.find("li");
        if (this.$currentItem) {
            this.$currentItem.removeClass("current");
            var b = this.$currentItem.prev();
            this.$currentItem = b.length ? b.addClass("current") : a.last().addClass("current")
        } else
            this.$currentItem = a.last().addClass("current");
        this._autoScroll()
    },nextItem: function() {
        var a = this.$results.find("li");
        if (this.$currentItem) {
            this.$currentItem.removeClass("current");
            var b = this.$currentItem.next();
            this.$currentItem = b.length ? b.addClass("current") :
                a.eq(0).addClass("current")
        } else
            this.$currentItem = a.eq(0).addClass("current");
        this._autoScroll()
    },_autoScroll: function() {
        var a = this.$currentItem.parent(), b = this.$currentItem.position(), c = a.height(), d = a.scrollTop(), f = this.$currentItem.outerHeight();
        (b.top < 0 || b.top + f >= c) && a.animate({scrollTop: d + (b.top - c + f)}, {duration: 100})
    },hideResult: function() {
        this.$results.hide().find("ul").html("")
    },add: function(a) {
        if ((a = this.repository[a]) && _.indexOf(this.selected, a.id) < 0) {
            this.selected.push(a.id);
            this.insert(a.id,
                a.name_zh_cn)
        }
    },del: function(a) {
        this.selected = _.without(this.selected, a)
    },insert: function(a, b) {
        this.$key.before('<span data-id="' + (a || 0) + '" data-name="' + b + '" class="added"><span>' + b + '</span><i class="ico"></i></span>')
    },positionResults: function() {
        var a = this.$searchBar.outerHeight();
        this.$results.css({top: a})
    },parseData: function(a) {
        if (a) {
            var b = "", c = this;
            $.each(a, function() {
                b = b + ('<li class="item" data-id="' + this.id + '">' + this.name_zh_cn + (this.name_alias ? "(" + this.name_alias + ")" : "") + ", " + this.destination +
                    "</li>");
                c.repository[this.id] || (c.repository[this.id] = this)
            });
            b = b + ('<li class="create">+ \u521b\u5efa \u201c' + this.currentKey + "\u201d</li>");
            this.$results.show().find("ul").html(b).scrollTop(0)
        } else
            this.hideResult()
    },getNearby: function(a) {
        var b = this;
        b.$nearbyList.html("").addClass("loading");
        b.$nearby.show();
        $.ajax({url: _G_nearby_url,type: "GET",data: {entry_type: this.type,q: a},success: function(a) {
            b.parseNearby(a)
        }})
    },parseNearby: function(a) {
        if (a && a.length) {
            var b = "", c = this;
            $.each(a, function() {
                b = b +
                    ('<li class="trip-node" data-id="' + this.id + '"><i class="ico attraction"></i><span class="name">' + this.name_zh_cn + "</span></li>");
                c.repository[this.id] || (c.repository[this.id] = this)
            });
            this.$nearbyList.removeClass("loading").html(b)
        } else
            this.$nearby.hide()
    }}), a = Backbone.View.extend({initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        var b = this, c = this.$el, d = this.$key = c.find("input.key"), f = this.$btnOk = c.find(".ok"), g = this.$btnCancel = c.find(".cancel");
        this.type = c.find('input[name="type"]').val();
        this.added = [];
        if (!a.searchBar)
            c.on("click", ".added .ico", function() {
                var a = $(this).parent();
                a.remove();
                b.del(a.data("name"))
            });
        c.find(".inputer").click(function() {
            d.focus()
        });
        g.click(function() {
            b.trigger("node:createcancel");
            d.val("");
            return false
        });
        d.keydown(function(a) {
            a.keyCode === 13 && b._enter()
        });
        f.click(function() {
            b._enter()
        })
    },_enter: function() {
        var a = this.$key.val();
        if (a != this.$key.attr("placeholder")) {
            if ($.getByteLen(a) > 28) {
                this.$key.showErrorTips();
                return false
            }
            if (a) {
                this.add(a);
                this.trigger("node:created",
                    a, this.type)
            }
            this.$key.val("")
        }
    },getSelected: function() {
        this._enter();
        var a = [], b = this;
        $.each(this.added, function(c) {
            a.push({user_entry: true,entry_type: b.type,name: b.added[c]})
        });
        return a
    },add: function(a) {
        if (_.indexOf(this.added, a) < 0) {
            this.added.push(a);
            this.options.searchBar || this.$key.before('<span class="added" data-name="' + a + '"><span>' + a + '</span><i class="ico"></i></span>')
        }
    },del: function(a) {
        this.added = _.without(this.added, a)
    }})
})(window, document);
$.fn.score = function(c) {
    c = c || {};
    this.each(function() {
        var g = $(this), b = g.find("a.checked"), d = g.find("a");
        d.removeClass("checked");
        c.score > 0 && (b = d.eq(c.score - 1).addClass("checked"));
        c.receiver && $(c.receiver).val(c.score || 0);
        if (g.data("score-inited"))
            return false;
        d.each(function(d) {
            var g = $(this);
            g.on("click", function() {
                b && b.removeClass("checked");
                b = g.addClass("checked");
                c.receiver && $(c.receiver).val(d + 1);
                return false
            })
        });
        g.data("score-inited", true)
    });
    return this
};
var TripUnitTest = {validsize: function(c) {
    return "width" in c && "height" in c && "left" in c && "top" in c
}}, 
    tripshow = {View: {TripShow: function() {
    return {init: function() {
        this.$logo = $(".logo");
        this.$topMenu = $(".show-top-menu");
        this.$moreLink = $(".more-travels");
        this.$header = $(".cover-header");
        this.$thumb = $("#open-trips")
    },openMode: function(c) {
        var g = this;
        if (g.mode !== c) {
            switch (c) {
                case "trainView":
                    $("body").addClass("mode-train-app");
                    $.support.cssAttrCheck("transition") || g.$logo.animate({top: "-=200"}, 300, function() {
                        g.$logo.css({top: "auto",
                            bottom: 12})
                    });
                    break;
                case "editCoverPhoto":
                    $("body").addClass("edit-cover");
                    if (!$.support.cssAttrCheck("transition")) {
                        this.$logo.animate({top: "-=200"}, 300);
                        this.$topMenu.animate({top: "-=200"}, 300);
                        this.$moreLink.animate({right: "-=500"}, 300);
                        this.$thumb.animate({left: "+=300"}, 300)
                    }
            }
            this.mode = c
        }
    },closeMode: function(c) {
        var g = this;
        switch (c) {
            case "trainView":
                $("body").removeClass("mode-train-app");
                $.support.cssAttrCheck("transition") || g.$logo.animate({bottom: "-=200"}, 300, function() {
                    g.$logo.css({top: 10,
                        bottom: "auto"})
                });
                break;
            case "editCoverPhoto":
                $("body").removeClass("edit-cover");
                if (!$.support.cssAttrCheck("transition")) {
                    this.$logo.animate({top: "+=200"}, 300);
                    this.$topMenu.animate({top: "+=200"}, 300);
                    this.$moreLink.animate({right: "+=500"}, 300);
                    this.$thumb.animate({left: "-=300"}, 300)
                }
        }
        this.mode = null
    }}
}()}};
(function(c) {
    var g = [["\u4eba\u6c11\u5e01", "CNY", "\u5143"], ["\u7f8e\u5143", "USD", "\u7f8e\u5143"], ["\u6b27\u5143", "EUR", "\u6b27\u5143"], ["\u82f1\u9551", "GBP", "\u82f1\u9551"], ["\u65e5\u5143", "JPY", "\u65e5\u5143"], ["\u6e2f\u5e01", "HKD", "\u6e2f\u5e01"], ["\u6cf0\u94e2", "THB", "\u6cf0\u94e2"], ["\u97e9\u5143", "KRW", "\u97e9\u5143"], ["\u65b0\u53f0\u5e01", "TWD", "\u53f0\u5e01"], ["\u65b0\u52a0\u5761\u5143", "SGD", "\u65b0\u5e01"], ["\u5362\u5e03", "RUB", "\u5362\u5e03"], ["\u6fb3\u5143", "AUD", "\u6fb3\u5143"], ["\u65b0\u897f\u5170\u5143",
            "NZD", "\u7ebd\u5e01"], ["\u5370\u5c3c\u76fe", "IDR", "\u5362\u6bd4"], ["\u9a6c\u6765\u897f\u4e9a\u5143", "MYR", "MYR"], ["\u6fb3\u95e8\u5143", "MOP", "\u8461\u5e01"], ["\u745e\u58eb\u6cd5\u90ce", "CHF", "\u745e\u90ce"], ["\u5370\u5ea6\u5362\u6bd4", "INR", "\u5362\u6bd4"], ["\u5357\u975e\u5170\u7279", "ZAR", "\u5170\u7279"], ["\u57c3\u53ca\u9551", "EGP", "\u57c3\u9551"], ["\u83f2\u5f8b\u5bbe\u6bd4\u7d22", "PHP", "\u6bd4\u7d22"], ["\u963f\u6839\u5ef7\u6bd4\u7d22", "ARS", "\u6bd4\u7d22"], ["\u51b0\u5c9b\u514b\u6717", "ISK", "\u514b\u6717"],
            ["\u4e39\u9ea6\u514b\u6717", "DKK", "\u514b\u6717"], ["\u798f\u6797", "HUF", "\u798f\u6797"], ["\u54e5\u4f26\u6bd4\u4e9a\u6bd4\u7d22", "COP", "\u6bd4\u7d22"], ["\u6377\u514b\u514b\u6717", "CZK", "\u514b\u6717"], ["\u52a0\u5143", "CAD", "\u52a0\u5143"], ["\u80af\u5c3c\u4e9a\u5148\u4ee4", "KES", "\u5148\u4ee4"], ["\u96f7\u4e9a\u5c14", "BRL", "BRL"], ["\u62c9\u83f2\u4e9a", "MVR", "MVR"], ["\u58a8\u897f\u54e5\u6bd4\u7d22", "MXN", "\u6bd4\u7d22"], ["\u6bdb\u91cc\u6c42\u65af\u5362\u6bd4", "MUR", "\u5362\u6bd4"], ["\u5c3c\u6cca\u5c14\u5362\u6bd4",
                "NPR", "\u5362\u6bd4"], ["\u632a\u5a01\u514b\u6717", "NOK", "\u514b\u6717"], ["\u745e\u5178\u514b\u6717", "SEK", "\u514b\u6717"], ["\u745e\u5c14", "KHR", "\u745e\u5c14"], ["\u65af\u91cc\u5170\u5361\u5362\u6bd4", "LKR", "\u5362\u6bd4"], ["\u571f\u8033\u5176\u65b0\u91cc\u62c9", "TRY", "\u91cc\u62c9"], ["\u65b0\u7d22\u5c14", "PEN", "\u7d22\u5c14"], ["\u8d8a\u5357\u76fe", "VND", "\u76fe"], ["\u667a\u5229\u6bd4\u7d22", "CLP", "\u6bd4\u7d22"], ["\u5179\u7f57\u63d0", "PLN", "PLN"], ["\u8001\u631d\u57fa\u666e", "LAK", "\u57fa\u666e"]],
        b;
    c.TripUtils = {resizeCount: 0,getNoteHash: function(b) {
        var c = tripshow.View.Note.NOTE_TYPE, g = false;
        if (b) {
            var a = b.model.get("sid");
            switch (b.type) {
                case c.DAY:
                    g = "day/" + a;
                    break;
                case c.NODE:
                    g = "nd/" + a;
                    break;
                case c.VIDEO:
                case c.TEXT:
                case c.PHOTO:
                    g = "nt/" + a;
                    break;
                case c.THEEND:
                case c.TIPS:
                    g = "end"
            }
        }
        return g
    },getPriceLabel: function(b) {
        switch (b) {
            case "Attraction":
                return "\u95e8\u7968";
            case "Restaurant":
                return "\u4eba\u5747";
            case "Hotel":
                return "\u623f\u95f4"
        }
    },PriceCurrencyManager: {lastPriceCurrency: "CNY",optionString: function() {
        if (!b) {
            var c =
                "";
            $.each(g, function(b) {
                c = c + ('<option value="' + g[b][1] + '">' + g[b][0] + "</option>")
            });
            b = c
        }
        return b
    },getName: function(b) {
        var c = "";
        $.each(g, function(m) {
            m = g[m];
            if (m[1] === b) {
                c = m[2] || m[1];
                return false
            }
        });
        return c
    }},noteServerType: function(b) {
        var c = tripshow.View.Note.NOTE_TYPE;
        switch (b) {
            case c.VIDEO:
            case c.PHOTO:
            case c.TEXT:
                return "note";
            case c.NODE:
                return "node";
            case c.TIPS:
                return "tip"
        }
        return b
    }}
})(window);
(function(c, g, b) {
    var d = b(g), f = b(c);
    b.support.cssAttrCheck("transition");
    var m = TripUtils.PriceCurrencyManager, a = "ontouchstart" in document.documentElement, r = isMobileDevice(), p = window.devicePixelRatio && window.devicePixelRatio > 1;
    NO_PHOTO_NOTE_WIDTH_RATIO = 12 / 17;
    NO_PHOTO_FULL_NOTE_MAX_WIDTH = 500;
    FONT_SIZE_MAX = 36;
    FONT_SIZE_MIN = 14;
    textNoteFontSize = screen.width < 1440 ? 14 : screen.width <= 1680 ? 16 : 18;
    MEMO_TEMPLATE = {price_amount: "<span>{label}{price_amount}{price_currency}</span>",food: "<span>\u63a8\u8350\u7f8e\u98df\uff1a{food}</span>",
        time: "<span>\u6e38\u89c8{time}{time_unit}</span>"};
    windowMaxHeight = screen.height - (screen.height - WindowSize.height);
    View = {};
    var q = {DAY: "day",NODE: "node",TEXT: "text",PHOTO: "photo",VIDEO: "video",THEEND: "theend",TIPS: "tips",ACCOUNTBOOK: "accountbook"};
    View.FullNote = Backbone.View.extend({initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        var b = this;
        this.$content = this.$el.find(".note-content");
        this._findFooter();
        this.model.on("change", function(a) {
            a.hasChanged("likes_count") || a.hasChanged("comments_count") ?
                b.renderMeta() : b.render()
        })
    },_findFooter: function() {
        var a = this;
        a.$footer = a.$el.find(".note-footer");
        a.$like = a.$footer.find(".like").touchClick(function() {
            f.trigger("note:like", [a])
        });
        a.$comment = a.$footer.find(".comment").touchClick(function(b) {
            var c = a.$comment[0];
            b.type = "note:comments";
            b.srcElement = c;
            f.trigger(b, [a, a.type]);
            b.stopPropagation()
        });
        var b = a.$footer.find("time");/*c = a.model.get("datetime")*/
        if (c)
            b.text(c).clock();
        else {
            b.hide();
            a.$footer.addClass("no-date")
        }
    },render: function() {
        this.renderMeta()
    },
        renderMeta: function() {
            if (this.$like.length) {
                this.$like.find("span").text(this.model.get("likes_count"));
                this.$comment.find("span").text(this.model.get("comments_count"));
                this.model.get("current_user_like") ? this.$like.addClass("liked") : this.$like.removeClass("liked");
                this.model.get("current_user_comment") ? this.$comment.addClass("commented") : this.$comment.removeClass("commented")
            }
        },position: function() {
        },close: function() {
            this.$el.hide()
        }});
    View.FullDay = View.FullNote.extend({initialize: function(a) {
        this.$el =
            b(b("#_tpl_full_note_day").html());
        this.type = q.DAY;
        View.FullNote.prototype.initialize.call(this, a)
    },render: function() {
        var a = this.$el;
        b(".day-index", a).text("\u7b2c" + this.model.get("day") + "\u5929");
        b(".day-date", a).text(this.model.get("trip_date") || "");
        var c = this.model.get("day_of_week"), a = b(".day-week", a).text(c ? "\u661f\u671f" + c : ""), c = this.model.get("weather");
        c != void 0 && a.after('<div class="day-weather"><div class="ico-weather-' + c + '"></div>' + this.model.get("temperature") + "</div>")
    },position: function() {
        var a =
            WindowSize.height - 40, b = a / 7 * 5;
        this.$el.css({left: Math.ceil((WindowSize.width - b) / 2),top: 20,width: b,height: a})
    }});
    View.FullTheEnd = View.FullNote.extend({initialize: function(a) {
        this.$el = b(b("#_tpl_full_theend").html());
        this.type = q.THEEND;
        View.FullNote.prototype.initialize.call(this, a)
    },render: function() {
    },position: function() {
        var a = WindowSize.height - 40, b = a / 7 * 5;
        this.$el.css({left: Math.ceil((WindowSize.width - b) / 2),top: 20,width: b,height: a})
    }});
    View.FullPhotoNote = View.FullNote.extend({initialize: function(a) {
        var c =
            this;
        c.type = q.PHOTO;
        c.$el = b(b("#_tpl_full_note_photo").html());
        c.$photo = c.$el.find(".photo");
        c.$description = c.$el.find(".desc");
        c.$btnSlide = c.$el.find(".slide-up").click(function() {
            var a = b(this);
            if (a.hasClass("slide-down")) {
                c._closeDescription();
                a.removeClass("slide-down")
            } else {
                c._openDescription();
                a.addClass("slide-down")
            }
        });
        c.photoSrc();
        c.descriptionFullDisplayed = true;
        var d = c.model;
        d.on("change", function() {
            if (d.hasChanged("photo")) {
                c.photoSrc();
                c.$photo.attr("src", c.src)
            }
        });
        View.FullNote.prototype.initialize.call(this,
            a)
    },_findFooter: function() {
        View.FullNote.prototype._findFooter.call(this);
        var a = this, c = a.$footer, d = b(".exif", c), f = b(".exif-info", c), g = b("ul", f), m = this.model;
        m.get("trip_id");
        d.on("mouseover", function() {
            f.show();
            b.ajax({url: "/trips/" + m.get("trip_id") + "/notes/" + m.get("sid") + "/exif",dataType: "json",success: function(b) {
                b ? g.html(a._parseExif(b)) : g.html("<li>\u65e0 exif \u4fe1\u606f</li>")
            },error: function() {
                g.html("<li>\u65e0 exif \u4fe1\u606f</li>")
            }})
        }).on("mouseout", function() {
                f.hide()
            });
        var d = "http://chanyouji.com/trips/" +
            m.get("trip_id") + "#" + TripUtils.getNoteHash(this), q = "\u5206\u4eab\u4e00\u5f20\u597d\u56fe\uff0c\u6765\u81ea#\u8749\u6e38\u8bb0#\u7684\u300a" + m.get("trip_name") + "\u300b";
        b(".weibo", c).attr("href", "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(d) + "&pic=" + encodeURIComponent(m.get("photo").src) + "&title=" + encodeURIComponent(q) + "&content=utf-8");
        b(".qzone", c).attr("href", "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(d) + "&pics=" + encodeURIComponent(m.get("photo").src) +
            "&title=" + encodeURIComponent(q));
        b(".douban", c).attr("href", "http://shuo.douban.com/!service/share?href=" + encodeURIComponent(d) + "&image=" + encodeURIComponent(m.get("photo").src) + "&name=" + encodeURIComponent(q))
    },_parseExif: function(a) {
        var a = a || {}, b = "";
        a.Make && (b = b + ("<li>\u5382\u5546: " + a.Make.val + "</li>"));
        a.Model && (b = b + ("<li>\u578b\u53f7: " + a.Model.val + "</li>"));
        a.FNumber && (b = b + ("<li>\u5149\u5708: " + a.FNumber.val + "</li>"));
        a.ExposureTime && (b = b + ("<li>\u5feb\u95e8: " + a.ExposureTime.val + "</li>"));
        a.ISOSpeedRatings &&
        (b = b + ("<li>ISO : " + a.ISOSpeedRatings.val + "</li>"));
        a.ExposureBiasValue && (b = b + ("<li>\u66dd\u5149\u8865\u507f: " + a.ExposureBiasValue.val + "</li>"));
        a.FocalLength && (b = b + ("<li>\u7126\u8ddd: " + a.FocalLength.val + "</li>"));
        b || (b = "<li> \u65e0exif\u4fe1\u606f </li>");
        return b
    },photoSrc: function() {
        var a = this.model.get("photo"), c = a.src, d = a.width / a.height, f, g = Math.max(WindowSize.height, windowMaxHeight);
        p && (g = g * 2);
        b.each([{size: 800,alias: "-display"}, {size: 1024,alias: "-display_g"}, {size: 1280,alias: "-display_gg"},
            {size: 1600,alias: ""}], function(a, b) {
            if ((d < 1 ? b.size : b.size / d) - g > -20) {
                f = b.size;
                c = c + b.alias;
                return false
            }
        });
        if (f)
            if (d > 1) {
                this.photoWidth = f;
                this.photoHeight = f / d
            } else {
                this.photoWidth = f * d;
                this.photoHeight = f
            }
        else {
            this.photoWidth = a.width;
            this.photoHeight = a.height
        }
        this.src = c
    },render: function() {
        var a = this;
        a.$photo.load(function() {
            a.$photo.addClass("noloading").off("load")
        }).attr("src", this.src);
        var b = this.model.get("description");
        if (b) {
            this.$description.find("p").html(b);
            this.$description.show()
        } else
            this.$description.hide();
        View.FullNote.prototype.render.call(a)
    },position: function() {
        var a = WindowSize.width, c = WindowSize.height, d = this.$footer.outerHeight(), f = this.photoWidth, g = this.photoHeight, m = Math.max(a - (r ? 40 : 300), 300), q = c - d - 40;
        if (f < m && g < q)
            f = {width: f,height: g};
        else
            var p = Math.max(g / q, f / m), f = {width: f / p,height: g / p};
        f.width = Math.floor(Math.min(f.width, m));
        f.height = Math.floor(Math.min(f.height, q));
        this.$photo.css(f);
        f.height = f.height + d;
        this.$el.css(b.extend(f, {left: Math.floor((a - f.width) / 2),top: Math.floor((c - f.height) / 2)}));
        this.descriptionEvent()
    },descriptionEvent: function() {
        var a = this, c = this.$description;
        if (!this._descEventListened && c.is(":visible")) {
            var d = c.find("p").height(), f = b(".slide-down", c).show();
            c.addClass("slidable").touchClick(function() {
                if (a.descriptionFullDisplayed) {
                    c.animate({bottom: 35 - d - 4}, 200, function() {
                        f.addClass("slide-up")
                    });
                    a.descriptionFullDisplayed = false
                } else {
                    c.animate({bottom: 35}, 200, function() {
                        f.removeClass("slide-up")
                    });
                    a.descriptionFullDisplayed = true
                }
            });
            this._descEventListened = true
        } else if (!c.is(":visible")) {
            c.off("click").removeClass("slidable");
            this._descEventListened = false
        }
    }});
    View.FullVideoNote = View.FullNote.extend({initialize: function(a) {
        var c = this;
        c.type = q.VIDEO;
        c.$el = b(b("#_tpl_full_note_video").html());
        c.$description = c.$el.find(".desc");
        c.$btnSlide = c.$el.find(".slide-up").click(function() {
            var a = b(this);
            if (a.hasClass("slide-down")) {
                c._closeDescription();
                a.removeClass("slide-down")
            } else {
                c._openDescription();
                a.addClass("slide-down")
            }
        });
        c.descriptionFullDisplayed = true;
        var d = c.model.get("video").src, f = c.$(".flowplayer video");
        this.player =
            _V_(f[0], {controls: true,autoplay: false,preload: "auto",poster: d + "?vframe/jpg/offset/0/w/400/h/400"});
        this.player.src({type: "video/mp4",src: d});
        View.FullNote.prototype.initialize.call(this, a)
    },render: function() {
        var a = this.model.get("description");
        if (a) {
            this.$description.find("p").html(a);
            this.$description.show()
        } else
            this.$description.hide();
        View.FullNote.prototype.render.call(this)
    },position: function() {
        var a = WindowSize.width, c = WindowSize.height, d = this.$footer.outerHeight(), f;
        f = {width: 400,height: 400};
        f.height = f.height + (d + (this.model.get("description") ? 20 : 0));
        this.$el.css(b.extend(f, {left: Math.floor((a - f.width) / 2),top: Math.floor((c - f.height) / 2)}));
        this.descriptionEvent();
        this.player.play()
    },descriptionEvent: function() {
        var a = this, c = this.$description;
        if (!this._descEventListened && c.is(":visible")) {
            var d = c.find("p").height(), f = b(".slide-down", c).show();
            c.addClass("slidable").touchClick(function() {
                if (a.descriptionFullDisplayed) {
                    c.animate({bottom: 35 - d - 4}, 200, function() {
                        f.addClass("slide-up")
                    });
                    a.descriptionFullDisplayed =
                        false
                } else {
                    c.animate({bottom: 35}, 200, function() {
                        f.removeClass("slide-up")
                    });
                    a.descriptionFullDisplayed = true
                }
            });
            this._descEventListened = true
        } else if (!c.is(":visible")) {
            c.off("click").removeClass("slidable");
            this._descEventListened = false
        }
    },close: function() {
        View.FullNote.prototype.close.call(this);
        this.player.pause()
    }});
    View.FullTextNote = View.FullNote.extend({initialize: function(a) {
        this.type = q.TEXT;
        this.$el = b(b("#_tpl_full_note_text").html());
        this.$text = this.$el.find(".note-text");
        this.$textWrapper =
            this.$text.parent();
        this.$textWrapper.scrollbar({type: "ver"});
        View.FullNote.prototype.initialize.call(this, a)
    },render: function() {
        var a = this.model.get("description_display") || this.model.get("description");
        this.$text.html(a);
        View.FullNote.prototype.render.call(this)
    },position: function() {
        var a = WindowSize.width, b = WindowSize.height, c = this.$footer.outerHeight(), b = b - 40, d = Math.ceil(b / 7 * 6), c = b - c;
        this.$el.css({left: Math.ceil((a - d) / 2),top: 20,width: d,height: b});
        this.$textWrapper.css({width: d,height: c});
        var a =
            this.$text.outerWidth(), f = this.$text.outerHeight();
        f > c && this.$textWrapper.scrollbar().refresh();
        this.$text.css({marginLeft: Math.ceil((d - a) * 0.5),marginTop: Math.ceil(Math.max(b - f, 0) * 0.5)})
    }});
    View.FullTips = View.FullNote.extend({initialize: function(a) {
        this.type = q.TIPS;
        var c = this.$el = b(b("#_tpl_full_tips").html());
        this.$items = b(".tip-items", c);
        this.$itemsWrapper = b(".tip-items-wrapper", c);
        this.$tipsContent = b(".tips-content", c);
        this.$tipsHeader = b(".tips-header", c);
        this.$itemsWrapper.scrollbar({type: "ver"});
        View.FullNote.prototype.initialize.call(this, a)
    },render: function() {
        var a = this.model.get("tips") || [], c = "";
        if (a.length) {
            b.each(a, function(b) {
                c = c + ("<li>" + a[b] + "</li>")
            });
            this.$items.html(c).show()
        } else
            this.$items.hide();
        View.FullNote.prototype.render.call(this)
    },position: function() {
        var a = WindowSize.width, b = WindowSize.height - 40, c = Math.ceil(b * 0.7), d = this.$tipsHeader.height(), f = b - d - 40, g = 0;
        this.$el.css({left: Math.ceil((a - c) * 0.5),top: 20,width: c,height: b});
        if (this.$items.is(":visible")) {
            g = this.$items.height();
            if (g > f) {
                this.$itemsWrapper.css({height: f});
                this.$itemsWrapper.scrollbar().refresh()
            }
        }
        a = Math.min(g, f) + d;
        this.$tipsContent.css("margin-top", (b - a) * 0.33)
    }});
    View.FullNode = View.FullNote.extend({initialize: function(a) {
        this.type = q.NODE;
        this.$el = b(b("#_tpl_full_node").html());
        this.$nodeContent = this.$el.find(".node-content");
        View.FullNote.prototype.initialize.call(this, a)
    },render: function() {
        View.FullNote.prototype.render.call(this);
        var a = this.model, b = "", c = a.get("entry"), d = a.get("memo");
        this.$el.find(".ico").addClass("ico-" +
            c.type.toLowerCase());
        this.$el.find(".node-name").html(c.name_zh_cn);
        this.$el.find(".node-name-en").html(c.name_en || "");
        if (d.price_amount || d.time) {
            var c = '<div class="memo"><span class="memo-inner">', f = a.get("entry").type;
            if (d.price_amount) {
                c = c + MEMO_TEMPLATE.price_amount;
                c = c.replace("{price_amount}", d.price_amount).replace("{price_currency}", m.getName(d.price_currency)).replace("{label}", TripUtils.getPriceLabel(f))
            }
            d.price_amount && d.time && (c = c + '<span class="space">|</span>');
            if (d.time) {
                c = c + MEMO_TEMPLATE.time;
                c = c.replace("{time}", d.time).replace("{time_unit}", d.time_unit && d.time_unit == "day" ? "\u5929" : "\u5c0f\u65f6")
            }
            b = b + (c + "</span></div>")
        }
        a.get("score") > 0 && (b = b + ('<div class="single-row"><span class="attr">\u6211\u7684\u8bc4\u4ef7\uff1a</span><span class="val"><span class="star-score"><i class="star-score-' + a.get("score") + '"></i></span></span></div>'));
        a.get("comment") && (b = b + ('<div class="node-description">' + a.get("comment") + "</div>"));
        this.$nodeContent.css({height: "auto"}).find(".node-info").html(b)
    },
        position: function() {
            var a = WindowSize.width, b = WindowSize.height - 40, c = Math.ceil(b / 7 * 5);
            this.$el.css({left: Math.ceil((a - c) / 2),top: 20,width: c,height: b});
            this.$nodeContent.css({width: "auto",height: "auto",marginTop: 0,marginLeft: 0,overflow: "visible"});
            var d = this.$nodeContent.outerWidth(), a = this.$nodeContent.outerHeight(), d = Math.min(d, c), f = Math.min(a, b), d = Math.min(d, 500), c = {width: d - 40,height: f - 40,marginLeft: Math.ceil((c - d) / 2),marginTop: Math.ceil((b - f) * 0.33)};
            if (a > b) {
                c.overflow = "hidden";
                c.overflowY = "auto"
            }
            this.$nodeContent.css(c)
        }});
    View.Note = Backbone.View.extend(
        {initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        var b = this, c = this.$el;
        b._isAuthor = !!a.isAuthor;
        b._contentPadding = [70, 70];
        b.top = 0;
        b.iLeft = 0;
        b.iTop = 0;
        b.group = a.group;
        b.$mask = c.find(".replace-layer");
        b.$content = c.find(".note-content");
        b._id = c.attr("id");
        c.mouseenter(function() {
            c.addClass("note-hover")
        }).mouseleave(function() {
                c.removeClass("note-hover")
            });
        b._findFooter();
    },needZoomin: function() {
        var a = this;
        this.$content.touchClick(function() {
            d.trigger("note:zoomin", [a])
        })
    },_findFooter: View.FullNote.prototype._findFooter,renderMeta: View.FullNote.prototype.renderMeta,
        canEdit: function() {
        var a = this, b = this.$el;
        a._canEdit = true;
        b.find(".edit, .delete, .js-edit, .rotate").on("mousedown, mouseup", function(a) {
            a.stopPropagation()
        });
        b.find(".btn-drag").on("mousedown", function(b) { //b为e的event
            b.type = "note:drag";
            d.trigger(b, [a]);
            b.stopPropagation()
        });
        b.find(".edit, .js-edit").on("click", function(b) {
            b.stopPropagation();
            d.trigger("note:edit", [a])
        });
        b.find(".delete").on("click", function() {
            d.trigger("note:delete", [a])
        })
    },showMask: function() {
        this.$mask && this.$mask.show()
    },hideMask: function() {
        this.$mask && this.$mask.hide()
    },remove: function() {
        this.group && this.group.removeNote(this);
        Backbone.View.prototype.remove.call(this)
    },setGroup: function(a) {
        this.group = a
    },getId: function(a) {
        var b = this._id;
        a === "int" && (b = b.split("-")[1]);
        return b
    },setPosition: function(a) {
        var b =
            this.$el, c = this._sizeCss || {}, a = a + this.iLeft;
        if (a !== this.left)
            this.left = c.left = a;
        b.css(c)
    },setGroupLayout: function(a) {
        this._groupLayout = a;
        this.$el.data("layout", a)
    },getGroupLayout: function() {
        if (!this._groupLayout)
            this._groupLayout = this.$el.data("layout");
        return this._groupLayout
    },resizeContent: function() {
    },resize: function(a) {
        return this._resize(a)
    },_resize: function(a) {
        var c = this, d = a.width, f = a.height || this.$el.height(), g = {}, m;
        if (this.width !== d) {
            m = true;
            this.width = g.width = d
        }
        if (this.height !== f) {
            m = true;
            this.height = g.height = f
        }
        if (this.iTop !== a.top)
            this.iTop = this.top = g.top = a.top;
        if (this.iLeft !== a.left)
            this.iLeft = a.left;
        if (m) {
            this.contentHeight = f - this._contentPadding[0];
            this.contentWidth = d - this._contentPadding[1];
            this.$content.css({width: this.contentWidth,height: this.contentHeight});
            setTimeout(function() {
                c.resizeContent()
            }, 30)
        }
        this._sizeCss = b.isEmptyObject(g) ? null : g;
        return d
    },lazyLoad: function() {
    }});
    View.Note.NOTE_TYPE = q;
    View.Note.isNode = function(a) {
        var b = View.Note.NOTE_TYPE;
        return a.type === b.DAY ||
            a.type === b.NODE || a.type === b.TIPS || a.type === b.THEEND
    };
    View.TheEnd = View.Note.extend({initialize: function(a) {
        View.Note.prototype.initialize.call(this, a);
        this.type = q.THEEND
    },resize: function(a) {
        if (!a.width)
            a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
        return View.Note.prototype.resize.call(this, a)
    }});
    View.Tips = View.Note.extend({initialize: function(c) {
        View.Note.prototype.initialize.call(this, c);
        var d = this, c = d.$el;
        d.type = "tips";
        d._contentPadding = [70, 0];
        d.type =
            q.TIPS;
        d.$itemsWrapper = b(".tip-items-wrapper", c).scrollbar({type: "ver"});
        d.$items = b(".tip-items", c);
        d.$tipsContent = b(".tips-content", c);
        d.$header = b(".tips-header", c);
        if (!a) {
            var f = d.$itemsWrapper.scrollbar().disable(), g, m = function(a) {
                a.stopPropagation()
            };
            d.$content.mouseenter(function() {
                clearTimeout(g);
                g = setTimeout(function() {
                    f.refresh();
                    f.isActive() && d.$itemsWrapper.bind("mousewheel", m)
                }, 500)
            }).mouseleave(function() {
                    clearTimeout(g);
                    f.disable();
                    d.$itemsWrapper.unbind("mousewheel", m)
                })
        }
    },getId: function() {
        return "theend"
    },
        resize: function(a) {
            if (a.height)
                a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
            return View.Note.prototype.resize.call(this, a)
        },resizeContent: function() {
            var b = this, c = b.$itemsWrapper, d, f, g;
            setTimeout(function() {
                d = b.$header.height();
                g = b.$items.height();
                f = b.contentHeight - d;
                g > f ? c.css("height", f) : c.css("height", "auto");
                b.$tipsContent.css("margin-top", Math.floor((f - Math.min(f, g)) * 0.5));
                b.$itemsWrapper.scrollbar().refresh(!a)
            }, 300)
        },render: function() {
            var a = this.model.get("tips") ||
                [], c = "";
            b.each(a, function(b) {
                c = c + ("<li>" + a[b] + "</li>")
            });
            this.$items.html(c)
        }});
    View.Day = View.Note.extend({initialize: function(a) {
        View.Note.prototype.initialize.call(this, a);
        this.type = q.DAY;
        this.$daycontent = this.$el.find(".day-content");
        this.$(".day-weather").length || this.$daycontent.addClass("no-weather")
    },resize: function(a) {
        if (!a.width)
            a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
        View.Note.prototype.resize.call(this, a);
        return this.width
    }});
    View.Node =
        View.Note.extend({initialize: function(a) {
            this.type = "node";
            View.Note.prototype.initialize.call(this, a);
            this.type = q.NODE;
            this.$nodeContent = this.$el.find(".node-content")
        },resizeContent: function() {
            this.$nodeContent.css("height", "auto");
            var a = Math.min(this.contentHeight, this.$nodeContent.innerHeight());
            this.$nodeContent.css({marginTop: Math.ceil((this.contentHeight - a) / 2),height: a});
            this.height < 465 ? this.$el.addClass("node-s") : this.$el.removeClass("node-s")
        },resize: View.Day.prototype.resize,render: function() {
            var a =
                this.model, b = "", c = a.get("score"), d = a.get("memo"), f = a.get("comment");
            this.$(".node-name").text(a.get("entry").name_zh_cn);
            if (d.price_amount || d.time) {
                var g = '<div class="memo"><span class="memo-inner">', a = a.get("entry").type;
                if (d.price_amount) {
                    g = g + MEMO_TEMPLATE.price_amount;
                    g = g.replace("{price_amount}", d.price_amount).replace("{price_currency}", m.getName(d.price_currency)).replace("{label}", TripUtils.getPriceLabel(a))
                }
                d.price_amount && d.time && (g = g + '<span class="space">|</span>');
                if (d.time) {
                    g = g + MEMO_TEMPLATE.time;
                    g = g.replace("{time}", d.time).replace("{time_unit}", d.time_unit && d.time_unit == "day" ? "\u5929" : "\u5c0f\u65f6")
                }
                b = b + (g + "</span></div>")
            }
            if (f || c > 0) {
                b = b + '<div class="single-row"><span class="attr">\u6211\u7684\u8bc4\u4ef7\uff1a</span>';
                c > 0 && (b = b + ('<span class="val"><span class="star-score"><i class="star-score-' + c + '"></i></span></span>'));
                b = b + "</div>"
            }
            f && (b = b + ('<div class="desc">' + f + "</div>"));
            this.$el.find(".node-info").html(b)
        }});
    View.TextNote = View.Note.extend({initialize: function(c) {
        View.Note.prototype.initialize.call(this,
            c);
        var d = this, c = d.$el;
        d.type = q.TEXT;
        d._contentPadding = [70, 25];
        d.type = q.TEXT;
        d.$textContent = b(".text-content", c);
        d.$textWrapper = b(".text-wrapper", c).scrollbar({type: "ver"});
        c.mouseenter(function() {
            d.group.showLayoutToolbar()
        }).mouseleave(function() {
                d.group.hideLayoutToolbar()
            });
        if (!a) {
            var f = d.$textWrapper.scrollbar().disable(), g, m = function(a) {
                a.stopPropagation()
            };
            d.$content.mouseenter(function() {
                clearTimeout(g);
                g = setTimeout(function() {
                        f.refresh();
                        f.isActive() && d.$textWrapper.bind("mousewheel", m)
                    },
                    500)
            }).mouseleave(function() {
                    clearTimeout(g);
                    f.disable();
                    d.$textWrapper.unbind("mousewheel", m)
                })
        }
        d.$textContent.css("font-size", textNoteFontSize)
    },resizeContent: function() {
        this.$textWrapper.scrollbar().refresh(!a);
        var b = this.$textContent.height();
        b <= this.contentHeight ? this.$textContent.css({"margin-top": (this.contentHeight - b) / 2,"margin-left": Math.max((this.contentWidth - this.$textContent.width()) / 2 - 15, 0)}) : this.$textContent.css("margin", 0)
    },resize: function(a) {
        if (!a.width)
            a.width = Math.min(Math.ceil(a.height *
                NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
        return View.Note.prototype.resize.call(this, a)
    },setGroupLayout: function(a) {
        View.Note.prototype.setGroupLayout.call(this, a);
        var b = this.$el;
        a === "full" ? b.addClass("text-full") : b.removeClass("text-full")
    },render: function() {
        this.$textContent.html(this.model.get("description_display")).show();
        this.renderMeta()
    }});
    View.PhotoNote = View.Note.extend({initialize: function(a) {
        View.Note.prototype.initialize.call(this, a);
        var c = this, a = this.$el;
        c.type = q.PHOTO;
        c._contentPadding = [44, 20];
        c.type = q.PHOTO;
        c.$description = b("figcaption", a).on("mousedown", function(a) {
            a.stopPropagation()
        });
        c.$photo = b(".photo", a).on("mousedown mousemove", function(a) {
            a.preventDefault()
        });
        b(".rotate", a).click(function() {
            d.trigger("photo:rotate", [c])
        });
        c.$el.mouseenter(function() {
            c.group.showLayoutToolbar()
        }).mouseleave(function() {
                c.group.hideLayoutToolbar()
            });
        c.photoSize();
        c.needZoomin();
        var f = c.model;
        f.on("change", function() {
            if (f.hasChanged("photo")) {
                c.src = null;
                c.photoSize();
                c.resizeContent();
                var a = c.$photo.css("visibility", "hidden"), b = a.parent().addClass("pl");
                a.on("load", function() {
                    a.off("load");
                    b.removeClass("pl");
                    a.css("visibility", "visible")
                }).attr("src", c.src)
            }
        })
    },photoSize: function() {
        var a = this.model.get("photo");
        this.picNaturalWidth = a.width;
        this.picNaturalHeight = a.height
    },photoSrc: function(a) {
        var a = Math.max(a.width, a.height), b = "-display";
        p && (a = a * 2);
        a > 1024 ? b = "-display_gg" : a > 800 ? b = "-display_g" : this._isAuthor || (a <= 500 ? b = "-display_ll" : a <= 625 && (b = "-display_l"));
        this.src = this.model.get("photo").src +
            b
    },resizeContent: function() {
        this.$photo.parent().css({width: this.contentWidth,height: this.contentHeight});
        var a = scaleImage(this.contentWidth, this.contentHeight, this.picNaturalWidth, this.picNaturalHeight);
        this.$photo.css(a);
        this.src || this.photoSrc(a)
    },setGroupLayout: function(a) {
        View.Note.prototype.setGroupLayout.call(this, a);
        var b = this.$el;
        a === "full" ? b.addClass("photo-full") : b.removeClass("photo-full")
    },resize: function(a, b) {
        var c = WindowSize.width;
        if (b) {
            var d = a.height / this.picNaturalHeight * this.picNaturalWidth;
            a.width = a.width ? a.width > d ? a.width : d : d
        }
        if (a.width && a.width >= c)
            a.width = c * 0.7;
        a.width = Math.ceil(a.width);
        return View.Note.prototype.resize.call(this, a)
    },canEdit: function() {
        View.Note.prototype.canEdit.call(this);
        var a = this, c;
        a.$description.addClass("canedit").on("click", function(f) {
            function g() {
                if (!q.valid()) {
                    q.showErrorTips();
                    return false
                }
                c = false;
                var b = q.val();
                if (b != m) {
                    a.model.set("description", b);
                    d.trigger("note:edit", [a, b])
                } else
                    a.render()
            }
            if (b("body").hasClass("edit-app") && !c) {
                c = true;
                f.stopPropagation();
                var m = a.model.get("description") || "", q = a.$description.html('<div class="edit-wrapper textarea inset-shadow clearfix"><textarea maxlen="300" data-error-tip="\u6700\u591a150\u5b57">' + m + "</textarea></div>").find("textarea");
                q.on("click", function(a) {
                    a.stopPropagation()
                }).autosize("photo-description-measure").blur(g).on("keydown", function(b) {
                        switch (b.keyCode) {
                            case 13:
                                b.preventDefault();
                                g();
                                break;
                            case 27:
                                c = false;
                                b.preventDefault();
                                a.render()
                        }
                    }).moveCursorToEnd()
            }
        })
    },render: function() {
        var a = this.model.get("description"),
            b = this.$description;
        a ? b.removeClass("nocaption").html("<p>" + a + "</p>") : b.addClass("nocaption").html("<p>\u6dfb\u52a0\u76f8\u7247\u8bf4\u660e</p>");
        this.renderMeta()
    },lazyLoad: function() {
        if (!this.lazyLoaded) {
            var a = this.$photo, b = this.$(".pic-loading").show();
            a.on("load", function() {
                a.off("load");
                a.css("visibility", "visible");
                b.hide()
            }).attr("src", this.src);
            this.lazyLoaded = true
        }
    }});
    View.VideoNote = View.Note.extend({initialize: function(a) {
        View.Note.prototype.initialize.call(this, a);
        var c = this, a = c.$el;
        c.type =
            q.VIDEO;
        c._contentPadding = [44, 20];
        c.$video = c.$(".flowplayer");
        c.$description = b(".caption", a).on("mousedown", function(a) {
            a.stopPropagation()
        });
        c.$(".play-button").touchClick(function() {
            d.trigger("note:zoomin", [c])
        });
        a.mouseenter(function() {
            c.group.showLayoutToolbar()
        }).mouseleave(function() {
                c.group.hideLayoutToolbar()
            })
    },canEdit: View.PhotoNote.prototype.canEdit,resize: function(a) {
        if (!a.width)
            a.width = a.height;
        return View.Note.prototype.resize.call(this, a)
    },setGroupLayout: function(a) {
        View.Note.prototype.setGroupLayout.call(this,
            a)
    },render: function() {
        var a = this.model.get("description"), b = this.$description;
        a ? b.removeClass("nocaption").html("<p>" + a + "</p>") : b.addClass("nocaption").html("<p>\u6dfb\u52a0\u89c6\u9891\u8bf4\u660e</p>");
        this.renderMeta()
    }});
    View.ABChart = View.Note.extend({initialize: function(a) {
        View.Note.prototype.initialize.call(this, a);
        this.type = q.ABCHART;
        this._contentPadding = [44, 20]
    },canEdit: function() {
    },resize: function(a) {
        if (!a.width)
            a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
        return View.Note.prototype.resize.call(this, a)
    },setGroupLayout: function(a) {
        View.Note.prototype.setGroupLayout.call(this, a)
    },render: function() {
        var a = this.model.get("description"), b = this.$description;
        a ? b.removeClass("nocaption").html("<p>" + a + "</p>") : b.addClass("nocaption").html("<p>\u6dfb\u52a0\u89c6\u9891\u8bf4\u660e</p>");
        this.renderMeta()
    }});
    c = Backbone.Model.extend({parse: function(a) {
        a.type = a.day ? "day" : a.memo ? "node" : a.video ? "video" : a.photo ? "photo" : "description" in a ? "text" : a.tips ? "tips" : a.summary ?
            "accountbook" : "theend";
        return a
    }});
    tripshow = b.extend(true, tripshow, {NOTE_CLASSES: {photo: View.PhotoNote,text: View.TextNote,video: View.VideoNote,node: View.Node,day: View.Day,theend: View.TheEnd,tips: View.Tips,accountbook: View.ABChart},FULL_NOTE_CLASSES: {text: View.FullTextNote,photo: View.FullPhotoNote,video: View.FullVideoNote,node: View.FullNode,day: View.FullDay,theend: View.FullTheEnd,tips: View.FullTips},View: View,TripsCollection: Backbone.Collection.extend({model: c,prev: function(a) {
        a = this.indexOf(a);
        return a ===
            0 ? false : this.models[a - 1]
    },next: function(a) {
        a = this.indexOf(a);
        return a === this.length - 1 ? false : this.models[a + 1]
    }})})
})(window, document, jQuery);
(function(c) {
    c.MiniComments = Backbone.View.extend({initialize: function(c) {
        Backbone.View.prototype.initialize.call(this, c);
        var b = this, d = b.$el, f = d.find('input[name="reply_to_id"]'), m = $('input[name="reply_prefix"]', d);
        $(".close", d).click(function() {
            b.close();
            return false
        });
        $(".need-login", d).click(function() {
            open_sign_in_window();
            b.note && $(window).trigger("dochaschanged", ["nt/" + b.note.model.get("sid"), true]);
            return false
        });
        b.$replay_prefix = m;
        b.$reply_to_id = f;
        b.$posting = b.$(".posting");
        b.$text = b.$("textarea").autosize("textarea").on("keydown",
            function(a) {
                a.stopPropagation();
                setTimeout(function() {
                    if (!b.$text.val()) {
                        f.val("");
                        m.val("")
                    }
                }, 5);
                if (a.keyCode === 13) {
                    a.preventDefault();
                    if (!b.$text.valid()) {
                        b.$text.showErrorTips();
                        return false
                    }
                    var a = f.val(), c = b.$text.val();
                    if (c == m.val()) {
                        b.$text.showErrorTips("\u8bf7\u8f93\u5165\u5185\u5bb9");
                        return false
                    }
                    if (!b.posting) {
                        b.posting = true;
                        b.$posting.show();
                        c = {text: c,commentable_id: b.noteId,commentable_type: TripUtils.noteServerType(b.type),popup: true};
                        if (a)
                            c.reply_to_id = a;
                        $.ajax({url: "/trips/" + b.options.tripId +
                            "/comments",type: "POST",data: c,dataType: "html",success: function(a) {
                            b.$list.find("ul").prepend(a);
                            b.$list.find(".nocomment").remove();
                            b.$text.val("");
                            f.val("");
                            m.val("");
                            b.resize();
                            $(window).trigger("note:commented");
                            a = b.note.model;
                            a.set({current_user_comment: true,comments_count: (a.get("comments_count") || 0) + 1});
                            b.$list.scrollTop(0).find(".time").timeago()
                        },complete: function() {
                            b.posting = false;
                            b.$posting.hide()
                        }})
                    }
                }
            }).hasPlaceholder();
        b.$list = $(".list", d);
        b.$listWrapper = b.$list.parent().scrollbar({type: "ver"});
        b.$list.on("click", ".btn-more", function() {
            b.load();
            return false
        }).on("ajax:success", ".delete", function(a, c) {
                $(this).parent().parent().remove();
                $(window).trigger("note:commentdeleted");
                var d = b.note.model, f = {comments_count: d.get("comments_count") - 1};
                c && !c.current_user_comment && (f.current_user_comment = false);
                d.set(f);
                b.$listWrapper.scrollbar().refresh()
            }).on("click", ".reply", function() {
                var a = $(this).parents("li");
                f.val(a.data("id"));
                a = "\u56de\u590d " + a.data("username") + "\uff1a";
                b.$text.val(a).moveCursorToEnd();
                m.val(a)
            });
        b.width = d.outerWidth();
        b.url = "/trips/" + c.tripId + "/comments?commentable_id="
    },empty: function() {
        this.$text.val("").css("height", 15);
        this.$reply_to_id.val("");
        this.$replay_prefix.val("");
        this.$list.empty();
        this.$listWrapper.css({height: "auto"}).scrollbar().scrollTo(0).refresh();
        this.$el.hide();
        this.nextId = this.noteId = 0;
        this.note = this.$src = null;
        $(document).off("click.comments", this.onClickHandle)
    },open: function(c, b, d) {
        this.empty();
        this.type = d;
        this.note = b;
        this.noteId = b.model.get("sid");
        this._position(c);
        this.$el.show();
        this.load();
        this.$text.focus();
        this.displayed = true;
        var f = this;
        $(document).on("click.comments", function(b) {
            f.displayed && !$.isClickInside(b.target, f.el) && f.close()
        })
    },close: function() {
        if (this.displayed) {
            this.displayed = false;
            this.empty()
        }
    },_position: function(c) {
        if (this.$src || c) {
            var b;
            this.$src = b = c ? $(c.srcElement) : this.$src;
            var c = b.outerWidth(true), d = b.height();
            b = b.offset();
            var f = {};
            f.left = WindowSize.width - b.left < this.width ? b.left - this.width : b.left + c;
            if (b.top < WindowSize.height / 2) {
                f.bottom =
                    "auto";
                f.top = b.top
            } else {
                f.top = "auto";
                f.bottom = WindowSize.height - b.top - d
            }
            this.heightLimit = WindowSize.height - 60;
            this.$el.css(f)
        }
    },resize: function() {
        var c = this.$el.height();
        c > this.heightLimit && this.$listWrapper.css({height: this.heightLimit - 84}).scrollbar().refresh();
        var b = this.$el.offset();
        parseInt(this.$el.css("top")) ? WindowSize.height - (b.top + c) < 20 && this.$el.css({top: "auto",bottom: 20}) : b.top < 40 && this.$el.css({top: 40,bottom: "auto"})
    },load: function() {
        if (!this.loading) {
            this.loading = true;
            var c = this, b = this.url +
                this.noteId + "&commentable_type=" + TripUtils.noteServerType(this.type);
            c.nextId && (b = b + ("&next_id=" + c.nextId));
            this.$list.addClass("loading");
            $.ajax({url: b,dataType: "html",success: function(b) {
                if (c.nextId) {
                    var b = $("<div>" + b + "</div>"), f = b.find("li");
                    c.$list.find("ul").append(f);
                    b.find(".btn-more").length < 1 && c.$list.find(".btn-more").remove()
                } else
                    c.$list.html(b);
                c.nextId = c.$list.find("li:last").data("id");
                c.$list.find(".time").timeago();
                c.resize()
            },complete: function() {
                c.$list.removeClass("loading");
                c.loading =
                    false
            }})
        }
    }})
})(tripshow.View);
(function(c, g, b) {
    function d(a) {
        this.coverPhoto = a
    }
    var f = $(g), m = Math, c = Backbone.View.extend({initialize: function(a) {
        Backbone.View.prototype.initialize.call(this, a);
        this.$loadico = this.$el.find(".load-ico");
        this.$img = this.$el.find(".img").on("mousedown", function(a) {
            a.preventDefault()
        });
        this.isCustom = !!this.$img.data("custom")
    },setSrc: function(a, b) {
        if (b != void 0) {
            this.isCustom = !b;
            console.info(this.isCustom)
        }
        var c = this, d = $('<img style="position:absolute;top:-9999px;left:-9999px;">');
        c.loaded = false;
        c.$loadico.removeClass("loaded").show();
        d.on("load", function() {
            c.loaded = true;
            c.$loadico.hide().addClass("loaded");
            c._imgWidth = d.width();
            c._imgHeight = d.height();
            c.$img.attr("src", a);
            c.resize();
            c.trigger("load");
            d.off("load error").remove()
        }).on("error", function() {
                c.trigger("load");
                d.off("load error").remove()
            }).appendTo("body").attr("src", a)
    },resize: function() {
        if (this.loaded) {
            var a = this.$el.width(), b = this.$el.height(), c = scaleImage(a, b, this._imgWidth, this._imgHeight);
            if (this.isCustom) {
                var d = this.$img.position();
                c.top = Math.max(-(c.height -
                    b), d.top);
                c.left = Math.max(-(c.width - a), d.left)
            }
            this.$img.css(c)
        } else
            (a = this.$img.attr("src")) && this.setSrc(a, this.isCustom)
    }});
    _.extend(d.prototype, Backbone.Events, {checkBtnStatus: function() {
        var a = this.$listContainer.width(), a = (this.listWidth || 0) - a, b = this.$listContainer.scrollLeft();
        b == 0 ? this.$btnPrev.addClass("disable") : this.$btnPrev.removeClass("disable");
        b >= a ? this.$btnNext.addClass("disable") : this.$btnNext.removeClass("disable");
        return this
    },openGuide: function() {
        this.$guide = this.$el.find(".cover-guide").show().appendTo("body");
        return this
    },closeGuide: function() {
        this.$guide && this.$guide.hide()
    },open: function() {
        var a = this;
        if (!a.$el) {
            var b = $($("#_tpl_coverphoto_editor").html());
            a.$el = b;
            a.$listContainer = b.find(".list");
            a.$list = b.find("ul");
            $("body").append(b);
            a.$list.on("click", "li", function() {
                a.selectedItem && a.selectedItem.removeClass("selected");
                var b = $(this);
                a.selectedItem = b.addClass("selected");
                a.coverPhoto.setSrc(b.data("src"), true);
                a.selectedId = b.data("id");
                a.closeGuide();
                a.$btnClose.attr("disabled", false).removeClass("btn-disable")
            });
            a.$btnNext = b.find(".next").click(function() {
                var b = a.$listContainer.width(), b = a.listWidth - b, b = Math.min(a.$listContainer.scrollLeft() + a.$listContainer.width() - 152, b);
                a.$listContainer.animate({scrollLeft: b}, {duration: 300,complete: function() {
                    a.checkBtnStatus()
                }})
            });
            a.$btnPrev = b.find(".prev").click(function() {
                a.$listContainer.width();
                var b = Math.max(a.$listContainer.scrollLeft() - a.$listContainer.width() - 152, 0);
                a.$listContainer.animate({scrollLeft: b}, {duration: 300,complete: function() {
                    a.checkBtnStatus()
                }})
            });
            a.$btnClose = b.find(".btn").click(function() {
                $.ajax({url: "/trips/" + _G_trip_id,type: "PUT",data: {"trip[front_cover_photo_id]": a.selectedId,"trip[customize]": a.getCustomPostion()}});
                a.close()
            }).attr("disabled", true).addClass("btn-disable");
            a.height = a.$el.outerHeight();
            var c = $("#cover"), d = $("#cover-header"), b = $(".drag-handle", d), g = $("#cover-guide-line"), s, u, v, x, t, w, C;
            a.$header = d;
            a.$headerWrapper = c;
            a.$coverImg = $("#cover-img");
            b.mousedown(function(a) {
                a.stopPropagation();
                u = a;
                x = c.width();
                t = c.height();
                w = d.outerWidth();
                C = d.outerHeight();
                s = d.position();
                v = [x - w, t - C - 50];
                g.css("visibility", "visible");
                f.on("mousemove.cover", function(a) {
                    var b = a.pageX - u.pageX + s.left, a = a.pageY - u.pageY + s.top, b = m.ceil(m.min(m.max(b, 0), v[0])), a = m.ceil(m.min(m.max(a, 100), v[1]));
                    m.abs(a / WindowSize.height * 100 - 45) < 1 && (a = m.ceil(WindowSize.height * 0.45));
                    d.css({left: b,top: a,right: "auto",bottom: "auto"})
                }).on("mouseup.cover", function() {
                        g.css("visibility", "hidden");
                        f.off("mousemove.cover mouseup.cover")
                    })
            })
        }
        a.$el.animate({top: 0}, {duration: 200,complete: function() {
            a.load();
            a.trigger("opened")
        }});
        var D, G, k;
        f.on("mousedown.coverimg", function(b) {
            u = b;
            D = a.$coverImg.position();
            G = a.$coverImg.width();
            k = a.$coverImg.height();
            f.on("mousemove.coverimg", function(b) {
                var c = b.pageX - u.pageX + D.left, b = b.pageY - u.pageY + D.top, d = m.max(G - WindowSize.width, 0), f = m.max(k - WindowSize.height, 0), b = m.min(m.max(b, -f), 0), c = m.min(m.max(c, -d), 0);
                a.$coverImg.css({top: b,left: c})
            }).on("mouseup.coverimg", function() {
                    f.off("mousemove.coverimg mouseup.coverimg")
                })
        });
        return this
    },getPosition: function(a, b, c) {
        var d =
            a.outerWidth(), f = a.outerHeight(), g = b.outerWidth(), b = b.outerHeight(), a = a.position(), m = [], v = a.left / g * 100, x = a.top / b * 100;
        v > 50 && !c ? m.push("right:" + ((g - a.left - d) / g * 100).toFixed(1) + "%") : m.push("left:" + v.toFixed(1) + "%");
        x > 50 && !c ? m.push("bottom:" + ((b - a.top - f) / b * 100).toFixed(1) + "%") : m.push("top:" + x.toFixed(1) + "%");
        return m.join(";")
    },getCustomPostion: function() {
        return '{"cover-photo":"' + this.getPosition(this.$coverImg, this.$coverImg.parent(), true) + '", "cover-header":"' + this.getPosition(this.$header, this.$headerWrapper) +
            '"}'
    },close: function() {
        this.$el && this.$el.animate({top: -this.height}, {duration: 200});
        f.off("mousedown.coverimg");
        this.closeGuide();
        this.trigger("closed");
        return this
    },load: function() {
        var a = this;
        this.data || $.ajax({url: "/trips/" + _G_trip_id + "/photos.json",dataType: "json",type: "GET",success: function(b) {
            if (b) {
                a.data = b;
                a.updateList()
            }
        }});
        return this
    },updateList: function() {
        var a = this, b = "";
        $.each(this.data, function(c) {
            c = a.data[c];
            b = b + ("<li" + (c.current ? ' class="selected"' : "") + ' style="background:url(' + c.thumb +
                ') no-repeat 0 -30px;" data-src="' + c.display + '" data-id="' + c.id + '"><i></i></li>')
        });
        a.$list.html(b);
        var c = this.data.length * 156;
        a.$list.width(c);
        a.listWidth = c;
        a.checkBtnStatus();
        a.selectedItem = a.$list.find(".selected");
        a.selectedItem.length && a.$btnClose.attr("disabled", false).removeClass("btn-disable");
        return this
    }});
    b.CoverPhoto = c;
    b.CoverPhotoEditor = d
})(window, document, tripshow.View);
(function() {
    function c(b, c) {
        var f = this;
        f.slider = c;
        f.$el = $(b);
        f.nav = new g(f.$el.find(".trips-nav-wrapper"), c);
        WindowResizeListener.add(function() {
            f.resize()
        });
        f.resize()
    }
    function g(b, c) {
        var f = this, g = $(b);
        this.$el = g;
        this.$nav = g.find(".trips-nav");
        this.$list = g.find(".trips");
        this.$listWrapper = g.find(".trip-nodes");
        this.$control = g.find(".trips-cont");
        this.$controlLeft = g.find(".left").click(function() {
            f.$listWrapper.animate({scrollLeft: "-=50"}, 200, function() {
                f._checkControlStatus()
            })
        });
        this.$controlRight =
            g.find(".right").click(function() {
                f.$listWrapper.animate({scrollLeft: "+=50"}, 200, function() {
                    f._checkControlStatus()
                })
            });
        this.slider = c;
        this.children = [];
        this._createMeasureBox();
        $.each(c.getChildren(), function() {
            f.add(this)
        });
        this.measure()
    }
    c.prototype = {resize: function() {
        var b = WindowSize.width, c = this.$el, f = b - c.find(".trips-thumb").width() - c.find(".trips-comments").width() - 500;
        this.nav.resize(f);
        c.css("left", Math.ceil((b - c.outerWidth()) / 2))
    }};
    g.prototype = {_createNode: function(b, c, f) {
        return $("<a>").text(c).attr({href: b,
            title: f})
    },add: function(b) {
        if (b.layout === "full") {
            var c = b.getFirstChild(), f = c.type, c = c.model;
            if (f === tripshow.View.Note.NOTE_TYPE.DAY || f === tripshow.View.Note.NOTE_TYPE.NODE || f === tripshow.View.Note.NOTE_TYPE.THEEND) {
                var g = $("<div>").addClass("d-" + f), a = this.children[this.children.length - 1];
                if (f === tripshow.View.Note.NOTE_TYPE.DAY) {
                    this.children.push([g, b, []]);
                    b = c.get("day");
                    g.append(this._createNode("#day/" + c.get("sid"), "D" + b, "\u7b2c" + b + "\u5929"))
                } else if (f === tripshow.View.Note.NOTE_TYPE.NODE) {
                    a[2].push([g,
                        b]);
//                    g.append(this._createNode("#nd/" + c.get("sid"), c.get("entry").name_zh_cn, c.get("entry").name_zh_cn))
                } else if (f === tripshow.View.Note.NOTE_TYPE.THEEND) {
                    this.children.push([g, b, []]);
                    g.html('<a href="#end" title="\u65c5\u7a0b\u7ed3\u675f">End</a>')
                }
                this.$list.append(g);
                this.$measureBoxContent.append(g.clone())
            }
        }
    },_createMeasureBox: function() {
        this.$measureBox = $('<div class="trips-measure">');
        this.$measureBoxContent = $('<div class="inner clearfix">').appendTo(this.$measureBox);
        $("body").append(this.$measureBox)
    },
        measure: function() {
            this.$list.css("width", this.listWidth = this.$measureBoxContent.outerWidth() + 6);
            this.$measureBox.remove()
        },setCurrentStyle: function(b) {
            var c = this;
            if (!(this.current && this.current[0] === b[0])) {
                this.current && this.current.removeClass("current");
                this.current = b.addClass("current");
                var b = b.position(), f = this.$listWrapper.scrollLeft(), g = this.listWrapperWidth / 2, a = f + g;
                if (b.left >= a && f < this.listWidth - this.listWrapperWidth || b.left <= a && f > 0) {
                    b = {scrollLeft: "+=" + (b.left - g)};
                    this.$listWrapper.animate(b,
                        200, function() {
                            c._checkControlStatus()
                        })
                }
            }
        },setCurrent: function(b) {
            var c = this, f;
            $.each(c.children, function(g) {
                var g = c.children[g], a = g[2];
                if (g[1] === b) {
                    f = g[0];
                    return false
                }
                $.each(a, function(c) {
                    if (a[c][1] === b) {
                        f = a[c][0];
                        return false
                    }
                })
            });
            f && c.setCurrentStyle(f)
        },_disableControl: function() {
            this.controlEnable = false;
            this.$nav.addClass("disable-control")
        },_enableControl: function() {
            this.controlEnable = true;
            this.$nav.removeClass("disable-control")
        },_checkControlStatus: function() {
            if (this.controlEnable) {
                var b =
                    this.$listWrapper.scrollLeft();
                b == 0 ? this.$controlLeft.addClass("left-disable") : this.$controlLeft.removeClass("left-disable");
                b >= this.listWidth - this.listWrapperWidth ? this.$controlRight.addClass("right-disable") : this.$controlRight.removeClass("right-disable")
            }
        },resize: function(b) {
            if (this.listWidth <= b) {
                b = this.listWidth;
                this._disableControl()
            } else {
                this._enableControl();
                this._checkControlStatus()
            }
            this.$listWrapper.width(b);
            this.listWrapperWidth = b
        }};
    tripshow.View.TripNav = c
})();
var TripEditor = {};
(function() {
    var c = TripUtils.PriceCurrencyManager, g, b, d, f;
    TripEditor.photoRotate = {success: function(a) {
        b.model.set("photo", a);
        $.fancybox.close()
    },open: function(a) {
        if (!g) {
            g = $($("#_tpl_photo_rotate").html());
            f = $('input[name="rotate_type"]', g);
            d = $("form", g).on("ajax:before", function() {
                var a = f.val();
                if (a < 1 || a > 3) {
                    $.fancybox.close();
                    return false
                }
            });
            var c = $(".img", g);
            c.each(function(a) {
                var b = $(this);
                b.click(function() {
                    c.removeClass("selected");
                    b.addClass("selected");
                    f.val(a + 1)
                })
            });
            getHidder().append(g)
        }
        b =
            a;
        d.attr("action", "/trips/" + _G_trip_id + "/notes/" + b.model.get("sid") + "/rotate");
        var a = b.model.get("photo"), a = a.width / a.height, k, i;
        if (a > 1) {
            k = 140;
            i = Math.ceil(140 / a)
        } else {
            k = Math.ceil(140 * a);
            i = 140
        }
        $(".img", g).removeClass("selected");
        f.val(0);
        g.find("img").attr("src", b.src).css({width: k,height: i,margin: 0}).each(function(a) {
            var b = {};
            if ($.support.cssAttrCheck("transform"))
                if (a % 2 === 1) {
                    b["margin-top"] = Math.ceil((140 - i) * 0.5);
                    b["margin-left"] = Math.ceil((140 - k) * 0.5)
                } else {
                    b["margin-top"] = Math.ceil((140 - k) * 0.5 +
                        (k - i) * 0.5);
                    b["margin-left"] = Math.ceil((140 - i) * 0.5 + (i - k) * 0.5)
                }
            else {
                b["margin-top"] = Math.ceil((140 - (a % 2 === 0 ? k : i)) * 0.5);
                b["margin-left"] = Math.ceil((140 - (a % 2 === 0 ? i : k)) * 0.5)
            }
            $(this).css(b)
        });
        $.fancybox({width: 546,padding: 0,href: "#photo-rotate"})
    }};
    var m, a, r, p, q;
    TripEditor.photoEditor = {open: function(b) {
        if (!m) {
            m = $($("#_tpl_photo_edit").html());
            a = m.find(".photo img");
            r = m.find("textarea").textCounter();
            p = m.find("form");
            getHidder().append(m)
        }
        q = b;
        b = q.model;
        p.attr("action", "/trips/" + _G_trip_id + "/notes/" + b.get("sid"));
        a.attr("src", q.src);
        r.val(b.get("description") || "");
        $.fancybox({padding: 0,autoDimensions: true,href: "#edit-photo",hideOnOverlayClick: false,onComplete: function() {
            r.focus()
        }})
    },success: function(a) {
        q.model.set({description: a.description});
        $.fancybox.close()
    }};
    var n, s, u, v, x;
    TripEditor.textEditor = {open: function(a, b) {
        if (!n) {
            n = $($("#_tpl_text_edit").html());
            v = n.find('input[name="target"]');
            u = n.find("form");
            method = n.find('input[name="_method"]');
            x = n.find(".btn-submit");
            s = n.find("textarea").on("keydown", function() {
                setTimeout(function() {
                    checkButtonStatus.call(s,
                        x, "btn-submit-disable")
                }, 30)
            }).textCounter();
            WindowSize.height < 600 && s.css("height", WindowSize.height - 170);
            getHidder().append(n)
        }
        if (b) {
            u.attr({action: "/trips/" + _G_trip_id + "/notes"});
            method.val("POST");
            v.val(b);
            s.val("")
        } else {
            var c = a.model;
            u.attr({action: "/trips/" + _G_trip_id + "/notes/" + c.get("sid")});
            method.val("PUT");
            s.val(c.get("description"))
        }
        checkButtonStatus.call(s, x, "btn-submit-disable");
        $.fancybox({padding: 0,autoDimensions: true,href: "#edit-text",hideOnOverlayClick: false,onComplete: function() {
            s.focus()
        }})
    }};
    var t, w, C;
    TripEditor.titleEditor = {open: function() {
        if (!t) {
            t = $($("#_tpl_change_title").html());
            w = t.find('input[name="trip[name]"]');
            t.find("form");
            C = w.val();
            getHidder().append(t)
        }
        w.val(C);
        $.fancybox({padding: 0,scrolling: "no",href: "#edit-title",width: 460,height: 155,hideOnOverlayClick: false,onComplete: function() {
            w.focus()
        }})
    },success: function() {
        C = w.val();
        $("#js-cover-title").css("font-size", Math.floor(Math.max(Math.min(360 / $.getChsLen(C), 48), 36)));
        $("#js-cover-title .inner-text").text(C);
        $("#back-cover h1 .inner-text").text(C);
        $.fancybox.close();
        $(".form-tips-error").hide()
    }};
    var D = function() {
        k.remove();
        k = l = z = E = null;
        L = {};
        $(".form-tips-error").hide()
    }, G = {Attraction: ["price_amount", "price_currency", "time", "time_unit"],Hotel: ["price_amount", "price_currency"],Restaurant: ["price_amount", "price_currency"],Activity: []}, k, l, z, E, L = {}, o;
    TripEditor.nodeEditor = {open: function(a) {
        o = a;
        var b = o.model;
        if (!k) {
            k = $($("#_tpl_edit_node").html());
            getHidder().append(k);
            var d = $(".entry-name", k);
            d.on("click", ".change", function(a) {
                a.preventDefault();
                $("h3, span", d).hide();
                d.append('<input class="input-txt" data-error-tip="\u6700\u591a14\u5b57" minlen="1" maxlen="28" name="name" value="' + o.model.get("entry").name_zh_cn + '" > <a href="#" class="cancel">\u53d6\u6d88</a>')
            }).on("click", ".cancel", function(a) {
                    a.preventDefault();
                    $("input, .cancel", d).remove();
                    $("h3, span", d).show()
                })
        }
        k.find(".star").score({receiver: k.find('input[name="score"]'),score: b.get("score")});
        k.find("form").attr({action: "/trips/" + _G_trip_id + "/trip_days/" + b.get("trip_day_id") +
            "/nodes/" + b.get("sid")});
        z = k.find('textarea[name="comment"]').textCounter().val(b.get("comment"));
        E = k.find('textarea[name="tips"]').textCounter().val(b.get("tips"));
        l = k.find('input[name="score"]');
        a = b.get("entry");
        k.find("h3").text(a.name_zh_cn);
        k.find("h4").text(a.name_en || "");
        k.find(".address").text(a.address || "");
        a.user_entry ? $(".entry-name", k).append('<span><a href="#" class="change">\u6539\u540d</a></span>') : $(".entry-name span", k).remove();
        var f = G[a.type];
        if (f.length) {
            k.find(".memo").html($("#_tpl_edit_node_" +
                a.type.toLowerCase()).html());
            $.each(f, function(a, d) {
                L[d] = k.find('[name="memo[' + d + ']"]');
                d === "price_currency" ? k.find('select[name="memo[price_currency]"]').append(c.optionString()).val(b.get("memo")[d] || c.lastPriceCurrency) : L[d].val(b.get("memo")[d] || "")
            })
        }
        k.find('input[name="memo[price_amount]"],input[name="memo[time]"]').keydown(function() {
            var a = $(this), b = /[^\d\.]/g;
            setTimeout(function() {
                var c = a.val();
                b.test(c) && a.val(c.replace(b, ""))
            }, 10)
        });
        $.fancybox({padding: 0,autoDimensions: true,href: "#edit-node",
            hideOnOverlayClick: false,onClosed: D})
    },success: function() {
        var a = l.val(), b = z.val(), d = E.val(), f = {};
        L && $.each(L, function(a, b) {
            f[a] = b.val();
            if (a == "price_currency")
                c.lastPriceCurrency = b.val()
        });
        a = {score: a,comment: b,tips: d,memo: f};
        b = $(".entry-name input", k);
        if (b.length) {
            a.entry = o.model.get("entry");
            a.entry.name_zh_cn = b.val()
        }
        o.model.set(a);
        $.fancybox.close()
    }};
    var B = function(a) {
        return '<div class="item"><label>' + (R + 1) + '\u3001</label><textarea class="textarea" name="trip[tip_attributes][texts][]" maxlen="300" data-error-tip="\u6700\u591a150\u5b57">' +
            (a ? a : "") + "</textarea></div>"
    }, i = function(a) {
        for (var b = "", c = 0; c < a; c++) {
            b = b + B();
            R++
        }
        return b
    }, H, y, N, R;
    TripEditor.tipsEditor = {open: function(a) {
        if (!H) {
            H = $($("#_tpl_edit_tips").html());
            H.find("form");
            y = H.find(".list");
            getHidder().append(H)
        }
        N = a;
        var a = N.model, b = a.get("tips") || [];
        $('input[name="trip[tip_attributes][id]"]', H).val(a.get("sid") || "");
        var c = "", a = b.length;
        R = 0;
        $.each(b, function(a) {
            c = c + B(b[a]);
            R++
        });
        (a = 5 - a) && (c = c + i(a));
        c = c + '<div class="item-add">\u589e\u52a05\u6761</div>';
        y.html(c);
        $("textarea",
            y).autosize("textarea");
        $(".item-add", y).click(function() {
            $(this).before(i(5));
            $("textarea", y).autosize("textarea")
        });
        $.fancybox({padding: 0,autoDimensions: true,href: "#edit-tips",height: 540,width: 480,scrolling: "no",hideOnOverlayClick: false})
    },success: function(a) {
        a && a.tip && N.model.set({sid: a.tip.id,tips: a.tip.texts});
        $.fancybox.close()
    }}
})();
(function(c, g) {
    function b(b) {
        var c = b.id;
        if (a[c])
            b = a[c];
        else {
            b = new (s[b.get("type")])({model: b});
            b.render();
            p.append(b.$el.hide());
            a[c] = b
        }
        return b
    }
    var d, f, m, a = {}, r, p, q, n, s = tripshow.FULL_NOTE_CLASSES, u = "ontouchstart" in c, v, x,
        t = {setCollection: function(a) {
        v = a;
        x = null
    },isOpened: function() {
        return m
    },autoPlay: function() {
        var a = this;
        if (!a._autoPlayTimer) {
            a.next();
            a._autoPlayTimer = setInterval(function() {
                if (a.next() === false)
                    a._autoPlayTimer = g.clearTimer(a._autoPlayTimer)
            }, 5E3)
        }
    },stopPlay: function() {
        this._autoPlayTimer =
            g.clearTimer(this._autoPlayTimer)
    },isPlaying: function() {
        return !!this._autoPlayTimer
    },next: function() {
        var a = v.next(x);
        if (!a)
            return false;
        this.open(a);
        q.removeClass("left-disable");
        if (!v.next(a)) {
            n.addClass("right-disable");
            return false
        }
    },prev: function() {
        var a = v.prev(x);
        if (!a)
            return false;
        this.open(a);
        n.removeClass("right-disable");
        if (!v.prev(a)) {
            q.addClass("left-disable");
            return false
        }
    },open: function(a) {
        if (a) {
            if (!f) {
                r = g("#full-viewer-overlay");
                p = g("#full-viewer").touchClick(function(a) {
                    a && a.target ===
                        this && t.close()
                });
                g(".close", p).touchClick(function() {
                    t.close();
                    return false
                });
                q = g(".left", p).click(function() {
                    t.prev();
                    return false
                });
                n = g(".right", p).click(function() {
                    t.next();
                    return false
                });
                if (u) {
                    q.hide();
                    n.hide();
                    var c = null, s = null;
                    p.on("touchstart", function(a) {
                        a.preventDefault();
                        c = a.originalEvent.touches[0].pageX
                    }).on("touchmove", function(a) {
                            a.preventDefault();
                            s = a.originalEvent.touches[0].pageX
                        }).on("touchend", function(a) {
                            a.preventDefault();
                            s === null && (s = c);
                            s - c > 80 ? t.prev() : s - c < -80 && t.next();
                            c = s =
                                null
                        })
                }
                f = true
            }
            if (!m) {
                r.show();
                p.css({height: WindowSize.height,top: g(window).scrollTop()}).show();
                m = true
            }
            d && d.close();
            var G = b(a);
            G.$el.show();
            G.position();
            d && t.trigger("noteshow", a.id);
            d = G;
            x = a;
            this.trigger("open", TripUtils.getNoteHash(G));
            (a = v.next(a)) && b(a)
        }
    },resize: function() {
        d && d.position()
    },close: function() {
        this.stopPlay();
        if (m) {
            r.hide();
            p.hide();
            d && d.close();
            d = null;
            m = false
        }
        this.trigger("close")
    }};
    _.extend(t, Backbone.Events);
    tripshow.View.FullScreenViewer = t
})(window, jQuery);
(function(c) {
    c.TrainView = Backbone.View.extend({show: function() {
        $.support.cssAttrCheck("transition") ? this.$el.css("left", 0) : this.$el.animate({left: 0}, {duration: 200});
        this.visibility = true;
        this.trigger("opened");//触发openMode
    },hide: function() {
        var c = this;
        $.support.cssAttrCheck("transition") ? c.$el.on(FX.transitionend, function() {
            c.$el.off(FX.transitionend);
            c.trigger("closed")
        }).css("left", "100%") : c.$el.animate({left: "100%"}, {duration: 200,complete: function() {
            c.trigger("closed")
        }});
        c.visibility = false
    }})
})(tripshow.View);
(function(c, g, b) {
    function d() {
        if (a) {
            t = 40;
            w = 5
        } else {
            t = 100;
            w = 50
        }
    }
    function f(a, c) {
        var d = this;
        d.$viewport = b(c).bind("mousewheel", function(a, b) {
            b || (b = 1);
            b > 0 ? d.slideLeft(b) : d.slideRight(Math.abs(b))
        });
        d.groups = [];
        d.$el = b(a);
        d.left = 0;
        d._currentScrollLeft = 0;
        d.resizeViewport();
        d.addTextButtons = {};
        d.textButtonsVisibility = true;
        d.dragEvent()
    }
    function m(a) {
        this.notes = [];
        this.slider = a;
        this.left = 0
    }
    var a = screen.height <= 568, r = isMobileDevice(), p = "ontouchstart" in document.documentElement, q = b(c), n = b(g), s = tripshow.View,
        u = s.FullScreenViewer, v = s.Note.NOTE_TYPE, x = s.TripShow, t = 100, w = 50, C = ["bottomHeavy", "equally", "topHeavy"];
    d.call(WindowSize);
    WindowResizeListener.add(d);
    var D, G = C[b.rnd(0, 2)];
    D = function(a) {
        var c, d = C.length, f;
        if (a === "full" || !a) {
            a = G;
            f = true
        }
        b.each(C, function(b, k) {
            if (a === k) {
                c = C[b === d - 1 ? 0 : b + 1];
                f && (G = c);
                return false
            }
        });
        return c
    };
    var k, l = function() {
        if (!E) {
            E = true;
            if (z.length) {
                var a = z.shift();
                if (a.complete) {
                    var c = a.complete;
                    a.complete = function() {
                        c();
                        E = false;
                        l()
                    }
                } else
                    a.complete = function() {
                        E = false;
                        l()
                    };
                var d =
                    a.error;
                a.error = function() {
                    d && d();
                    b.confirm("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5\u3002", function() {
                        location.reload()
                    }, {btnCancel: false})
                };
                a = b.extend({timeout: 1E4}, a);
                b.ajax(a)
            } else
                E = false
        }
    }, z = [], E;
    k = {add: function(a) {
        if (a && a.url) {
            z.push(a);
            return this
        }
    },run: function() {
        l();
        return this
    }};
    var L, o = function() {
        if (i) {
            N = setTimeout(function() {
                i.css("left", "-3000px");
                y = null
            }, 100);
            clearTimeout(R)
        }
    }, B = function(a) {
        i.find("span").removeClass("selected");
        i.find('[data-layout="' +
            a + '"]').addClass("selected")
    }, i, H, y, N, R;
    L = {init: function(a) {
        H = a;
        i = b("#layout-toolbar").mouseenter(function() {
            clearTimeout(N)
        }).mouseleave(o);
        b("span", i).click(function() {
            if (y) {
                var a = b(this).data("layout");
                B(a);
                y.setLayout(a);
                H.render();
                var c = y.getFirstChild();
                k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int"),type: "PUT",data: {new_layout: a}}).run()
            }
        })
    },show: function(a, b, c) {
        y !== a && i.css("left", "-3000px");
        clearTimeout(N);
        R = setTimeout(function() {
            y = a;
            i.find("span").removeClass("selected");
            i.css({top: H.viewportTop -
                40,left: c - H.getScrollLeft(),width: b});
            B(y.layout);
            y.getChildren().length > 2 ? i.addClass("layout-toolbar-3") : i.removeClass("layout-toolbar-3")
        }, 500)
    },hide: o};
    var M, O, J, P, T, U = false;
    M = {init: function() {
        O = b("#dragdrop-box");
        J = O.find(".cloner-content");
        return this
    },move: function(a) {
        O.css({left: a.x - P / 2,top: a.y - T / 2});
        return this
    },setContent: function(a, b) {
        if (a === "img" || a === "video") {
            P = 100;
            T = Math.ceil(100 / b.data("width") * b.data("height"))
        } else {
            P = 100;
            T = 80
        }
        J.html(b).css({width: P,height: T});
        return this
    },show: function() {
        O.css({visibility: "visible",
            left: 0});
        U = true;
        return this
    },hide: function() {
        O.css({visibility: "hidden",left: "-999px"});
        U = false;
        return this
    },getPosition: function() {
        return U ? O.position() : false
    }};
    var ca, ea = function() {
        var a = {visibility: "hidden",left: "-999px"};
        fa && fa.css(a);
        ga && ga.css(a)
    }, ka = function() {
        ea();
        fa && fa.css({visibility: "visible"})
    }, Ia = function(a) {
        fa && fa.css({left: a - 4})
    }, Ja, Q, ua, fa, ga, ha, da, ma;
    ca = {hideSpacer: ea,showSpacer: ka,moveSpacer: Ia,init: function(a) {
        if (!Ja) {
            Ja = true;
            Q = a;
            fa = b("#dragdrop-spacer");
            ga = b("#dragdrop-spacer-hor")
        }
    },
        reset: function() {
            da = null;
            ha && ha.hideMask();
            M.hide();
            ea()
        },clonerCopy: function(a, c) {
            var d = c.type, f = c.model;
            if (d === v.PHOTO) {
                d = f.get("photo");
                M.setContent("img", b("<img>").attr("src", c.src).data({width: d.width,height: d.height})).show()
            } else
                d === v.TEXT ? M.setContent("text", f.get("description")).show() : d == v.VIDEO && M.setContent("video", b('<img src="' + f.get("video").src + '?vframe/jpg/offset/0/w/400/h/400" data-width="400" data-height="400">')).show();
            this.moveCloner(a)
        },moveCloner: function(a) {
            M.move({x: a.pageX,
                y: a.pageY})
        },onMousedown: function(a, c) {
            function d() {
                var a = M.getPosition(), c;
                if (a) {
                    if (a.left < 0) {
                        c = true;
                        Q.slideRightScreen()
                    } else if (a.left > WindowSize.width - 200) {
                        c = true;
                        Q.slideLeftScreen()
                    }
                    if (c) {
                        b.clearTimer(ma);
                        setTimeout(function() {
                            ma = setInterval(d, 500)
                        }, 1E3)
                    }
                }
            }
            da = c;
            this.clonerCopy(a, c);
            clearInterval(ma);
            ma = setInterval(d, 500)
        },onMousemove: function(a) {
            var b = this;
            b._mousemoveEvent = a;
            b.moveCloner(a);
            ua || (ua = setInterval(function() {
                b.checkInsertable(b._mousemoveEvent, function(a, b, c, d) {
                    if (a === false && b ===
                        false)
                        ea();
                    else if (a === false) {
                        var c = d.width, f = d.group.left;
                        ea();
                        ga && ga.css({visibility: "visible",width: c,left: f});
                        ga && ga.css({top: b})
                    } else {
                        ka();
                        Ia(a)
                    }
                    if (d && a === false && b === false) {
                        ha = d;
                        d.showMask()
                    } else
                        ha && ha.hideMask()
                })
            }, 100));
            Q.textButtonsVisibility && Q.hideTextButtons()
        },onMouseup: function(a, c) {
            var d = this;
            b.clearTimer(ma);
            ua = b.clearTimer(ua);
            d.checkInsertable(a, function(a, b, f, i, l) {
                var g;
                if (a !== false || b !== false) {
                    if (f.getChildren().length === 1 && f.getFirstChild() === c)
                        return;
                    c.group.removeNote(c);
                    if (a !==
                        false) {
                        l = f.nextSibling().getFirstChild();
                        a = new m(Q);
                        a.add(c);
                        a.checkLayout();
                        i = f.getLastChild();
                        i.$el.after(c.$el);
                        Q.insertAfter(f, a);
                        k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/move",type: "put",data: {target: l.getId(),position: 0}}).run()
                    } else {
                        f = i.group;
                        a = f.getChildIndexOf(i);
                        f.add(c, l === 1 ? a : a + 1);
                        f.setLayout("equally");
                        l === 1 ? i.$el.before(c.$el) : i.$el.after(c.$el);
                        k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/move",type: "put",data: {target: i.getId(),position: l}}).run()
                    }
                    g =
                        true
                } else if (i && i != c) {
                    d.swapNote(c, i);
                    g = true;
                    k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/exchange",type: "put",data: {target: i.getId()}}).run()
                }
                if (g) {
                    Q.render();
                    Q.measureScrollLeft()
                }
            });
            d.reset();
            Q.textButtonsVisibility || Q.showTextButtons()
        },checkInsertable: function(a, c) {
            var d = a.pageX, f = a.pageY, k = Q.getScrollLeft(), i = Q.viewportTop, l = 0, g;
            ha && ha.hideMask();
            b.each(Q.getChildren(), function() {
                var a = this;
                l = l + (1 + this.width);
                var m = l - k, o = m - this.width + 30, n = m - 30, z = this.getType();
                if (d > m - 30 && d < m + 30 &&
                    f > i && f < i + Q.viewportHeight) {
                    if (z === v.TIPS)
                        return g = false;
                    g = true;
                    c && c(l, false, a);
                    return false
                }
                if (d > o && d < n) {
                    if (z === v.DAY || z === v.NODE || z === v.THEEND || z === v.TIPS)
                        return false;
                    g = true;
                    var q, E = this.numChildren(), r = f - i;
                    b.each(this.getChildren(), function(b) {
                        if (E < 3) {
                            var f = this.top + this.height;
                            if (r > -30 && r - this.top < 30) {
                                q = true;
                                da !== this && c && c(false, this.top, a, this, 1);
                                return false
                            }
                            if (b === E - 1 && r > f - 30 && r < f + 30) {
                                q = true;
                                da !== this && c && c(false, this.top + this.height - 9, a, this, 2);
                                return false
                            }
                        }
                        b = this.left - k;
                        if (d > b && d < b + this.width &&
                            r > this.top && r < this.top + this.height) {
                            da && da !== this && c && c(false, false, a, this);
                            q = true;
                            return false
                        }
                    });
                    if (q)
                        return false
                }
            });
            !g && c && c(false, false)
        },checkReplace: function(a, c, d) {
            var f = a.pageX, k = a.pageY - Q.viewportTop, i = Q.getScrollLeft();
            b.each(c.getChildren(), function() {
                var a = this.left - i;
                if (f > a && f < a + this.width && k > this.top && k < this.top + this.height) {
                    (!da || da != this) && d && d(false, false, c, this);
                    return false
                }
            })
        },swapNote: function(a, b) {
            var c = a.group, d = b.group;
            if (c === d)
                c.swap(a, b);
            else {
                c.replace(b, a);
                d.replace(a,
                    b)
            }
            c = b.$el.next();
            if (c[0] !== a.$el[0]) {
                a.$el.prev().after(b.$el);
                c.before(a.$el)
            } else {
                c = b.$el.prev();
                a.$el.next().before(b.$el);
                c.after(a.$el)
            }
        }};
    var va = {measureHeavy: function(a, b) {
        var c = Math.ceil(b / 5 * 3), d = {height: c};
        d.width = a.type === v.TEXT ? c / 3 * 4 : b / 7 * 5;
        d.width = Math.ceil(d.width);
        return d
    },measureLight: function(a, b) {
        var c = b - Math.ceil(b / 5 * 3) - 1, d = {height: c};
        d.width = a.type === v.TEXT ? c / 3 * 4 : b / 7 * 5;
        d.width = Math.ceil(d.width);
        return d
    },full: function(a, b) {
        return a.getChildren()[0].resize({height: b,top: 0,left: 0},
            true)
    },bottomHeavySplit: function(a, c, d) {
        var a = a.getChildren(), f = a.shift(), k = a.length, i = this.measureLight(f, c), l = b.extend(i, {top: 0,left: 0}), f = f.resize(l, true), g = c - i.height - 1, m, o;
        if (k > 1) {
            m = f - 1 * (k - 1);
            o = Math.floor(m / k)
        } else
            o = f;
        d = 0;
        b.each(a, function(a) {
            a = k > 1 ? a == k - 1 ? m - o * (k - 1) : o : o;
            this.resize({top: c - g,left: d,height: g,width: a});
            d = d + (1 + a)
        });
        return f
    },topHeavySplit: function(a, c, d) {
        var a = a.getChildren(), f = a.pop(), k = a.length, i = this.measureLight(f, c), l = c - i.height - 1, c = b.extend(i, {top: c - i.height,left: 0}), c = f.resize(c,
            true), g, m;
        if (k > 1) {
            g = c - 1 * (k - 1);
            m = Math.floor(g / k)
        } else
            m = c;
        d = 0;
        b.each(a, function(a) {
            a = k > 1 ? a == k - 1 ? g - m * (k - 1) : m : m;
            this.resize({top: 0,left: d,height: l,width: a});
            d = d + (1 + a)
        });
        return c
    },topHeavy: function(a, c, d) {
        var a = a.getChildren(), f = a.shift(), k = a.length, i = this.measureHeavy(f, c), l = b.extend(i, {top: 0,left: 0}), f = f.resize(l, true), g = c - i.height - 1, m, o;
        if (k > 1) {
            o = f - 1 * (k - 1);
            m = Math.floor(o / k)
        } else
            m = f;
        d = 0;
        b.each(a, function(a) {
            a = k > 1 ? a == k - 1 ? o - m * (k - 1) : m : m;
            this.resize({top: c - g,left: d,height: g,width: a});
            d = d + (1 + a)
        });
        return f
    },
        bottomHeavy: function(a, c) {
            var d = a.getChildren(), f = d.pop(), k = d.length, i = this.measureHeavy(f, c), l = b.extend(i, {top: c - i.height,left: 0}), f = f.resize(l, true), g = c - i.height - 1, m;
            if (k > 1) {
                var i = 1 * (k - 1), o = Math.floor((f - i) / k);
                m = f - o * (k - 1) - i
            } else
                o = f;
            b.each(d, function(a) {
                this.resize({top: 0,left: (1 + o) * a,height: g,width: a === k - 1 && m ? m : o})
            });
            return f
        },equally: function(a, c) {
            var d = a.getChildren();
            len = d.length;
            width = 0;
            h = Math.ceil(c / len);
            used = 0;
            width = c / 7 * 5;
            width = Math.ceil(width);
            b.each(d, function(a) {
                var b = {left: 0,height: h,
                    top: (1 + h) * a,width: width};
                if (a == len - 1)
                    b.height = c - used - 1;
                used = used + (b.height + 1 * a);
                a === 0 ? width = this.resize(b, true) : this.resize(b)
            });
            return width
        }};
    f.prototype = {dragEvent: function() {
        if (p) {
            var a = this, b = p ? "touchstart" : "mousedown", c = p ? "touchmove" : "mousemove", d = p ? "touchend" : "mouseup.dragviewport", f = this.$viewport, k = f[0], i, l, g;
            if (p) {
                k.addEventListener(b, function(a) {
                    a.preventDefault();
                    l = i = a.touches[0].pageX
                }, false);
                k.addEventListener(c, function(b) {
                    b.preventDefault();
                    b = b.touches[0].pageX;
                    a.scrollTo(k.scrollLeft +
                        -(b - l), true, true);
                    l = b;
                    g || (g = Date.now())
                }, false);
                k.addEventListener(d, function(b) {
                    b.preventDefault();
                    (b = b.touches && b.touches.length > 0 ? b.touches[0].pageX : l) && Date.now() - g < 250 && (i - b > 50 ? a.slideLeftScreen() : b - i > 50 && a.slideRightScreen());
                    g = null
                }, false)
            } else
                f.on(b, function(b) {
                    b.preventDefault();
                    l = i = b;
                    f.on(c, function(b) {
                        b.preventDefault();
                        a.scrollTo(f[0].scrollLeft + -(b.pageX - l.pageX), true, true);
                        l = b;
                        g || (g = Date.now())
                    });
                    n.on(d, function(b) {
                        f.off(c);
                        n.off(d);
                        Date.now() - g < 250 && (i.pageX - b.pageX > 20 ? a.slideLeftScreen() :
                            b.pageX - i.pageX > 20 && a.slideRightScreen());
                        g = null
                    })
                })
        }
    },add: function(a, c) {
        b.isArray(a) || (a = [a]);
        var d = this;
        c === void 0 ? this.groups = this.groups.concat(a) : b.each(a, function(b) {
            d.groups.splice(c, 0, a[b])
        });
        if (!this.currentGroup)
            this.currentGroup = this.groups[0]
    },insertAfter: function(a, b) {
        var c = this.getChildIndexOf(a);
        c > -1 && this.add(b, c + 1)
    },insertBefore: function(a, b) {
        var c = this.getChildIndexOf(a);
        c > -1 && this.add(b, c)
    },remove: function(a) {
        var c = this;
        b.each(c.groups, function(b) {
            if (this === a) {
                c.groups.splice(b,
                    1);
                return false
            }
        })
    },getHeight: function() {
        return this.viewportHeight
    },getChildren: function() {
        return this.groups.concat()
    },getChildAt: function(a) {
        return this.groups[a]
    },getChildIndexOf: function(a) {
        return _.indexOf(this.groups, a)
    },findNote: function(a) {
        var c;
        b.each(this.getChildren(), function() {
            if (c = this.findChildren(a))
                return false
        });
        return c
    },getNextNote: function(a) {
        var c, d;
        b.each(this.getChildren(), function() {
            if (c)
                return false;
            b.each(this.getChildren(), function() {
                if (d) {
                    c = this;
                    return false
                }
                this === a &&
                (d = true)
            })
        });
        return c
    },getPrevNote: function(a) {
        var c, d;
        b.each(this.getChildren(), function() {
            if (c)
                return false;
            b.each(this.getChildren(), function() {
                if (this === a) {
                    c = d;
                    return false
                }
                d = this
            })
        });
        return c
    },render: function() {
        var a = 0;
        b.each(this.getChildren(), function() {
            var b = this.render(a + 1);
            a = a + (1 + b)
        });
        this.$el.width(a);
        this.width = a;
        this.trigger("rendered");
        this.isEditView && this.relayoutTextButton();
        this._updateNodeTitle()
    },relayoutTextButton: function() {
        var a = this, c = a.addTextButtons, d = this.getChildren(),
            f = d.length;
        a._resetTextButton();
        b.each(d, function(b) {
            if (b > 0 && b < f - 1) {
                var d = c["b" + b], k = this;
                if (!d) {
                    d = c["b" + b] = a._createAddTextButton();
                    a.$viewport.append(d)
                }
                d.css("left", k.left - 6).off("click.addtext").on("click.addtext", function(a) {
                    a.stopPropagation();
                    n.trigger("addtext", [k])
                })
            }
        })
    },showTextButtons: function() {
        b.each(this.addTextButtons, function() {
            this.css("visibility", "visible")
        });
        this.textButtonsVisibility = true
    },hideTextButtons: function() {
        b.each(this.addTextButtons, function() {
            this.css("visibility",
                "hidden")
        });
        this.textButtonsVisibility = false
    },_resetTextButton: function() {
        b.each(this.addTextButtons, function() {
            this.css("left", "-100px")
        })
    },_createAddTextButton: function() {
        return b('<div class="add-text-btn"></div>')
    },findNearestGroup: function(a) {
        var c = a.getType(), d;
        c === v.DAY || c === v.NODE ? d = a : b.each(this.getChildren(), function() {
            var b = this.getType();
            if (b === v.DAY || b === v.NODE)
                d = this;
            if (this === a)
                return false
        });
        return d
    },setPath: function(a) {
        this.nav = a;
        this.setPathCurrent(this.currentGroup)
    },setPathCurrent: function(a) {
        if (this.nav) {
            a =
                this.findNearestGroup(a);
            this.nav.setCurrent(a)
        }
    },firstVisiable: function() {
        var a = this.getScrollLeft(), c = 0, d;
        b.each(this.getChildren(), function() {
            if (c + this.width >= a) {
                d = this;
                return false
            }
            c = c + (1 + this.width)
        });
        return d
    },_findCurrentGroup: function() {
        var a, c = 0, d = this, f = WindowSize.width / 2;
        b.each(this.getChildren(), function() {
            if (c + this.width > d._currentScrollLeft + f) {
                d.currentGroup = a = this;
                return false
            }
            c = c + (1 + this.width)
        });
        return a
    },slideLeftScreen: function() {
        var a = this._currentScrollLeft + this.viewportWidth;
        if (!(this._currentScrollLeft >= this.width)) {
            var c = 0;
            b.each(this.getChildren(), function() {
                if (c >= a || c + this.width > a)
                    return false;
                c = c + (1 + this.width)
            });
            this.scrollTo(c)
        }
    },slideRightScreen: function() {
        this.getScrollLeft();
        if (!(this._currentScrollLeft <= 0)) {
            var a = this, c = 0;
            b.each(this.getChildren(), function() {
                if (c + this.width >= a._currentScrollLeft) {
                    c = c - (a.viewportWidth - this.width - 2);
                    return false
                }
                c = c + (1 + this.width)
            });
            this.scrollTo(c)
        }
    },slideLeft: function(a) {
        a = Math.min(a || 1, 5);
        a = this._currentScrollLeft - 150 * a;
//        a <
//            0 && (a = 0);
        this.scrollTo(a, true, true);
    },slideRight: function(a) {
        a = Math.min(a || 1, 5);
        this.scrollTo(this._currentScrollLeft + 150 * a, true, true)
    },scrollTo: function(a, c, d) {
        console.log("scroll to ");
        var f = this, k = f.$viewport;
        f.trigger("slider:scroll");
        a = Math.floor(a);
        a < 0 && (a = 0);
        a > this.width - this.viewportWidth && (a = this.width - this.viewportWidth);
        if (d) {
            f._currentScrollLeft = a;
            k.scrollLeft(a);
            f.preload();
            f._updateNodeTitle();
            f.setPathCurrent(f._findCurrentGroup())
        } else {
            if (c)
                cancelFrame(f._reqId);
            else if (this._scrolling)
                return;
            this._scrolling =
                true;
            var i = Date.now(), l = 0, g = this._currentScrollLeft, m = a - this._currentScrollLeft, o = Math.min(Math.abs(m), 800), n = function(c) {
                c = Date.now();
                if (c - i >= 10) {
                    l = l + (c - i);
                    f._currentScrollLeft = Math.ceil(b.easing.swing(void 0, l, g, m, o));
                    if (l >= o) {
                        f._currentScrollLeft = a;
                        f.$viewport.scrollLeft(f._currentScrollLeft);
                        cancelFrame(f._reqId);
                        f._scrolling = false;
                        f.preload();
                        f._updateNodeTitle();
                        f.setPathCurrent(f._findCurrentGroup());
                        return
                    }
                    i = c;
                    f.$viewport.scrollLeft(f._currentScrollLeft)
                }
                return nextFrame(n)
            };
            f._reqId = nextFrame(n)
        }
    },
        isEnd: function() {
            return this._currentScrollLeft >= this.width - this.viewportWidth ? true : false
        },autoPlay: function() {
            var a = this;
            if (!a._autoPlayTimer) {
                a.slideLeftScreen();
                a._autoPlayTimer = setInterval(function() {
                    a.slideLeftScreen();
                    if (a.isEnd())
                        a._autoPlayTimer = b.clearTimer(a._autoPlayTimer)
                }, 5E3)
            }
        },stopPlay: function() {
            this._autoPlayTimer = b.clearTimer(this._autoPlayTimer)
        },isPlaying: function() {
            return !!this._autoPlayTimer
        },_updateNodeTitle: function() {
            var a, c, d = 0, f = this, k = WindowSize.width / 2;
            b.each(this.getChildren(),
                function() {
                    if (this.layout === "full") {
                        var b = this.getFirstChild();
                        if (b.type === v.DAY) {
                            a = b;
                            c = null
                        } else
                            b.type === v.NODE && (c = b)
                    }
                    if (d + this.width > f._currentScrollLeft + k && a)
                        return false;
                    d = d + (1 + this.width)
                });
            var i = "\u7b2c" + a.model.get("day") + "\u5929";
            c && (i = i + ("\uff1a" + c.model.get("entry").name_zh_cn));
            b("#nav-board span").text(i)
        },scrollToGroup: function(a, b) {
            if (a && a.left !== void 0) {
                var c = a.left;
                b && (c = c - (WindowSize.width - a.width) / 2);
                this.scrollTo(c, true)
            }
        },getScrollLeft: function() {
            return this._currentScrollLeft
        },
        measureScrollLeft: function() {
            var a = this;
            setTimeout(function() {
                a._currentScrollLeft = a.$viewport.scrollLeft()
            }, 500)
        },resizeViewport: function(a) {
            var b = WindowSize.height, c = this.$viewport;
            this.viewportWidth = WindowSize.width;
            this.viewportHeight = a ? 300 : Math.ceil(Math.max(200, b - t - w));
            this.viewportTop = Math.ceil(Math.max(t, (b - this.viewportHeight) / 2));
            a = {height: this.viewportHeight,top: this.viewportTop};
            c.css("height", a.height).parent().css(a)
        },openEditView: function() {
            this.isEditView = true;
            this.trigger("openeditview");
            this._textButtonAdded || this.relayoutTextButton()
        },closeEditView: function() {
            this.isEditView = false;
            this.trigger("closeeditview");
            this.isZoomOut && this.restore()
        },zoomout: function() {
            var a = this, b = a.firstVisiable();
            a.isZoomOut = true;
            a.resizeViewport(true);
            a.render();
            a.trigger("zoomout");
            setTimeout(function() {
                a.scrollToGroup(b)
            }, 5);
            this.preload()
        },restore: function() {
            var a = this, b = a.firstVisiable();
            a.trigger("restore");
            a.isZoomOut = false;
            a.resizeViewport();
            a.render();
            setTimeout(function() {
                    a.scrollToGroup(b)
                },
                5)
        },chkAllIsLoaded: function() {
            if (!this._allLoaded) {
                var a = true, c;
                b.each(this.getChildren(), function() {
                    if (c)
                        return false;
                    b.each(this.getChildren(), function() {
                        if (this.type === v.PHOTO && !this.lazyLoaded) {
                            a = false;
                            c = true;
                            return false
                        }
                    })
                });
                this._allLoaded = a
            }
        },preload: function() {
            if (!this._allLoaded) {
                var a = this, c = this.firstVisiable(), d = this.getScrollLeft(), f;
                b.each(this.getChildren(), function() {
                    this === c && (f = true);
                    if (f) {
                        if (this.left - d >= a.viewportWidth * 2)
                            return false;
                        b.each(this.getChildren(), function() {
                            this.type ===
                                v.PHOTO && this.lazyLoad()
                        })
                    }
                });
                this.chkAllIsLoaded()
            }
        }};
    _.extend(f.prototype, Backbone.Events);
    m.prototype = {constructor: m,render: function(a) {
        var b = this.slider.getHeight(), c = this.layout;
        this.height = b;
        this.width = va[c](this, b);
        this.setPosition(a);
        return this.width
    },setPosition: function(a) {
        this.left = a;
        b.each(this.notes, function() {
            this.setPosition(a)
        })
    },getType: function() {
        return this.notes[0].type
    },isEditable: function() {
        var a = this.notes[0];
        return a.type === v.PHOTO || a.type === v.TEXT
    },add: function(a, c) {
        b.isArray(a) ||
        (a = [a]);
        var d = this;
        b.each(a, function(b) {
            var f = a[b];
            f.setGroup(d);
            c === void 0 ? d.notes.push(f) : d.notes.splice(b + c, 0, f)
        })
    },numChildren: function() {
        return this.notes.length
    },findChildren: function(a) {
        var c;
        b.each(this.notes, function() {
            if (this._id == a) {
                c = this;
                return false
            }
        });
        return c
    },getChildren: function() {
        return this.notes.concat()
    },getLastChild: function() {
        return _.last(this.notes)
    },getFirstChild: function() {
        return this.notes[0]
    },getChildIndexOf: function(a) {
        return _.indexOf(this.notes, a)
    },prevSibling: function() {
        var a =
            this.slider;
        return a.getChildAt(a.getChildIndexOf(this) - 1)
    },nextSibling: function() {
        var a = this.slider;
        return a.getChildAt(a.getChildIndexOf(this) + 1)
    },checkLayout: function() {
        var a;
        if (this.notes.length === 1)
            a = "full";
        else {
            a = this.notes[0].getGroupLayout();
            a == "full" && (a = D(a))
        }
        this.setLayout(a)
    },setLayout: function(a) {
        this.layout = a;
        b.each(this.notes, function() {
            this.setGroupLayout(a)
        })
    },swap: function(a, b) {
        if (a.group === b.group && a.group === this) {
            var c = this.getChildIndexOf(a), d = this.getChildIndexOf(b);
            this.notes[c] =
                b;
            this.notes[d] = a
        }
    },replace: function(a, b) {
        a.setGroupLayout(this.layout);
        a.setGroup(this);
        var c = this.getChildIndexOf(b);
        this.notes[c] = a
    },shift: function() {
        return this.notes.shift()
    },removeNote: function(a) {
        var b = this.getChildIndexOf(a);
        b > -1 && this.notes.splice(b, 1);
        if (this.notes.length === 0) {
            this.slider.remove(this);
            return a
        }
        this.checkLayout();
        return a
    },join: function(a) {
        if (this.isEditable()) {
            var b = a.getGroupLayout();
            this.add(a);
            this.setLayout(D(b))
        }
    },concat: function(a) {
        if (a.isEditable()) {
            var c = this, d =
                a.getChildren(), f = a.layout;
            b.each(d, function() {
                c.add(this)
            });
            this.slider.remove(a);
            this.setLayout(D(f))
        }
    },split: function(a) {
        var b = this.slider.getChildIndexOf(this) + 1;
        if (a === 0) {
            var c = this.notes.splice(1, this.notes.length - 1), a = new m(this.slider);
            a.add(c);
            a.checkLayout();
            this.slider.add(a, b)
        } else {
            c = this.notes.splice(a, this.notes.length - a);
            if (c.length > 1) {
                a = new m(this.slider);
                a.add(c.splice(1, 1));
                a.checkLayout();
                this.slider.add(a, b);
                a = new m(this.slider);
                a.add(c);
                a.checkLayout();
                this.slider.add(a, b)
            } else {
                a =
                    new m(this.slider);
                a.add(c);
                a.checkLayout();
                this.slider.add(a, this.slider.getChildIndexOf(this) + 1)
            }
        }
        this.checkLayout()
    },showLayoutToolbar: function() {
        this.slider.isEditView && this.layout !== "full" && L.show(this, this.width, this.left)
    },hideLayoutToolbar: function() {
        this.slider.isEditView && L.hide()
    }};
    var ia, W;
    c.tripShowInit = function() {
        _G_trip_collection.each(function(a) {
            a.set({trip_id: _G_trip_id,trip_name: _G_trip_name}, {silent: true})
        });
        var d = !!c._G_is_trip_author;
        W = new s.CoverPhoto({el: b("#cover-photo")});
        if (d) {
            ia = new s.CoverPhotoEditor(W);
            ia.on("opened", function() {
                x.openMode("editCoverPhoto")
            }).on("closed", function() {
                    x.closeMode("editCoverPhoto");
                    b("body").removeClass("first-app")
                });
            b("#set-cover").click(function() {
                ia.open();
                return false
            });
            b("body").on("ajax:success", "form", function(a, d) {
                var f = b(this).data("callback");
                if (c[f])
                    c[f](d)
            }).on("ajax:before", "form", function() {
                    var a;
                    b(this).find("input, textarea").each(function() {
                        var c = b(this);
                        if (!c.valid()) {
                            a = false;
                            c.showErrorTips()
                        }
                    });
                    return a
                }).on("ajax:beforeSend",
                "form", function() {
                    b.fancybox.showActivity()
                }).on("ajax:complete", "form", function() {
                    b.fancybox.hideActivity()
                })
        }
        n.ready(function() {
            var d = document.title;
            try {
                document.attachEvent("onpropertychange", function() {
                    if (document.title != d)
                        document.title = d
                })
            } catch (i) {
            }
            x.init();
            var l = b("html,body");
            WindowResizeListener.add(function() {
                l.css({width: WindowSize.width,height: WindowSize.height})
            });
            q.on("orientationchange", function() {
                l.css({width: WindowSize.width,height: WindowSize.height})
            }, false);
            b("#trip-comments").fancybox({margin: 0,
                padding: 0,width: 490,height: 540,type: "iframe",href: "/trips/" + _G_trip_id + "/comments",scrolling: "no",hideOnOverlayClick: false});
            l.on("keydown keyup", "input, textarea", function(a) {
                a.keyCode != 27 && a.stopPropagation()
            });
            b("#trip-thumb").on("click", function(a) {
                a.preventDefault();
                q.trigger("open_trip_thumb", [b(this).attr("href")])
            });
            b("#link-favorite").on("ajax:success", function() {
                var a = b(this);
                a.hasClass("favorited") ? a.attr("title", "\u6536\u85cf").removeClass("favorited") : a.attr("title", "\u53d6\u6d88\u6536\u85cf").addClass("favorited")
            });
            if (a) {
                b("#share-bar").hide();
                b("#top-menu").hide();
                b("#trips-header").hide()
            }
            r && b("#edit-menu").hide();
            l.css({width: WindowSize.width,height: WindowSize.height,overflow: "hidden"});
            var renderFun = function(a) {
                t.visibility || t.show();
                var b = p.findNote(a);
                if (b && b.group && b.group.left)
                    p.scrollToGroup(b.group, true);
                else
                    p.on("rendered", function() {
                        p.scrollToGroup(b.group, true);
                        p.off("rendered", arguments.callee)
                    })
            }, o = !!c._G_is_trip_author, z = b("body");
            z.hasClass("js-is-draft");
            var E, p = new f("#slider", "#viewport"), t = new s.TrainView({el: b("#viewer")}),
                B = new s.MiniComments({el: b("#comments-mini"),tripId: _G_trip_id}), y = new Backbone.Router({routes: {"nt/:id": "note","nd/:id": "node","day/:id": "day",end: "end"}});
            if (o && !userCookie("tips-ew")) {
                var w = b('<div id="tips-edit-app" class="tips-edit-app">\u7f16\u8f91\u6a21\u5f0f\u4e0b\u4fee\u6539\u6e38\u8bb0\u8d85\u65b9\u4fbf\u54e6</div>'), G = b("#edit-menu"), H = G.height(), G = G.offset();
                w.css({top: G.top + H + 8,left: G.left});
                b("#viewer").append(w);
                p.on("openeditview", function() {
                    w.remove();
                    b.ajax({type: "POST",url: "/util/cookie/tips-ew"});
                    p.off("openeditview", arguments.callee)
                })
            }
            u.setCollection(_G_trip_collection);
            W.on("load", function() {
                W.off("load");
                b("#trip-loading").remove();
                b("#js-trip").addClass("trips-wrapper-visible");
                if (c._G_is_trip_first_view && c._G_is_trip_author) {
                    ia.open().openGuide();
                    b("body").addClass("first-app")
                }
                p.render()
            });
            var C, D, J;
            b("#slider .note").each(function() {
                var $this = b(this), c = $this.data("group"), d = $this.data("type");
                d === v.THEEND && _G_trip_collection.add({id: "theend",sid: 0,type: "theend"});
                $this = new tripshow.NOTE_CLASSES[d]({el: $this,
                    model: _G_trip_collection.get(
                        $this.attr("id")),inited: true,isAuthor: o});
                o && $this.canEdit();
                if (s.Note.isNode($this) || c != C) {
                    J && J.checkLayout();
                    D = new m(p);
                    D.add($this);
                    p.add(D);
                    J = D
                } else
                    D.add($this);
                C = c
            });
            J && J.checkLayout();
            C = D = J = null;
            t.on("opened", function() {
                x.openMode("trainView");
                p.preload();
                E && p.openEditView()
            }).on("closed", function() {
                    x.closeMode("trainView");
                    (E = p.isEditView) && p.closeEditView();
                    p.stopPlay()
                });
            p.on("slider:scroll", function() {
                B.close()
            }).on("openeditview", function() {
                    z.addClass("edit-app");
                    setUnselectable(p.$viewport,
                        "on");
                    b("#tips-edit-app").remove()
                }).on("closeeditview", function() {
                    z.removeClass("edit-app");
                    setUnselectable(p.$viewport, "off")
                }).on("zoomout", function() {
                    z.addClass("slider-zoom-out")
                }).on("restore", function() {
                    z.removeClass("slider-zoom-out")
                });
            var N, H = function() {
                W.resize();
                u.resize();
                if (t.visibility) {
                    p.resizeViewport();
                    p.render()
                } else {
                    clearTimeout(N);
                    N = setTimeout(function() {
                        p.resizeViewport();
                        p.render()
                    }, 300)
                }
                p.preload()
            };
            WindowResizeListener.add(H);
            q.on("orientationchange", H).on("open_trip_thumb",
                function(a, c) {
                    var d = p.findNearestGroup(p.firstVisiable()).getFirstChild();
                    b.fancybox({href: c + "#" + TripUtils.getNoteHash(d),margin: 0,padding: 0,width: 720,height: 540,scrolling: "no",type: "iframe",onClosed: function() {
                        q.trigger("dochaschanged", ["", true])
                    }})
                });
            H = new s.TripNav("#trips-header", p);
            p.setPath(H.nav);
            n.on("keydown", function(a) {
                var b = a.keyCode;
                if (u.isOpened())
                    switch (b) {
                        case 37:
                            u.prev();
                            break;
                        case 39:
                            u.next();
                            break;
                        case 27:
                            u.close();
                            break;
                        case 80:
                            u.isPlaying() ? u.stopPlay() : u.autoPlay();
                            break;
                        case 32:
                            u.next()
                    }
                else if (t.visibility) {
                    p.isEditView &&
                    (b === 90 && !p.isZoomOut ? p.zoomout() : b === 27 && p.isZoomOut && p.restore());
                    if (a.shiftKey && b === 32)
                        p.slideRightScreen();
                    else
                        switch (b) {
                            case 38:
                                p.slideLeft();
                                a.stopPropagation();
                                a.preventDefault();
                                break;
                            case 40:
                                p.slideRight();
                                a.stopPropagation();
                                a.preventDefault();
                                break;
                            case 37:
                            case 33:
                                a.stopPropagation();
                                a.preventDefault();
                                p.slideRightScreen();
                                break;
                            case 39:
                            case 34:
                            case 32:
                                a.stopPropagation();
                                a.preventDefault();
                                p.slideLeftScreen();
                                break;
                            case 80:
                                p.isPlaying() ? p.stopPlay() : p.autoPlay()
                        }
                }
            }).on("note:zoomin",
                function(a, b) {
                    var c = b.model;
                    c && u.open(c)
                });
            b("#js-cover-title, #open-trips").click(function() {
                t.show()
            });
            b("#open-layout").click(function() {
                p.openEditView()
            });
            b("#quit-layout").click(function() {
                p.closeEditView()
            });
            b("#back-cover").click(function() {
                t.hide();
                y.navigate("")
            });
            b("#slider-zoom").click(function() {
                p.restore()
            });
            q.on("dochaschanged", function(a, b, c) {
                y.navigate(b, {trigger: !c})
            }).on("note:commented", function() {
                    var a = b("#cover-header .comments-num span"), c = a.text() - 0 + 1;
                    a.text(c);
                    b("#trip-comments span").text(c)
                }).on("note:commentdeleted",
                function() {
                    var a = b("#cover-header .comments-num span"), c = a.text() - 0 - 1;
                    a.text(c);
                    b("#trip-comments span").text(c)
                });
            u.on("open", function(a) {
                p.stopPlay();
                a !== false && y.navigate(a)
            }).on("close", function() {
                    y.navigate("");
                    p.stopPlay()
                }).on("noteshow", function(a) {
                    (a = p.findNote(a)) && p.scrollToGroup(a.group, true)
                });
            q.on("note:like", function(a, d) {
                var f = d.model, k;
                k = f.get("likes_count") || 0;
                var i = b("#cover-header .liked-num span").text() - 0 || 0;
                if (f.get("current_user_like")) {
                    k = {likes_count: Math.max(k - 1, 0),current_user_like: false};
                    i = i - 1
                } else {
                    k = {likes_count: k + 1,current_user_like: true};
                    i = i + 1
                }
                if (c._G_user_signed_in) {
                    f.set(k);
                    b("#cover-header .liked-num span").text(Math.max(i, 0));
                    b.ajax({url: "/trips/" + _G_trip_id + "/like",type: "POST",data: {likeable_id: f.get("sid"),likeable_type: TripUtils.noteServerType(d.type)}})
                } else {
                    y.navigate("nt/" + f.get("sid"));
                    open_sign_in_window()
                }
            }).on("note:comments", function(a, b, c) {
                    B.open(a, b, c)
                });
            if (o) {
                L.init(p);
                _G_trip_collection.every(function(a) {
                    if ((a = a.get("memo")) && a.price_currency) {
                        TripUtils.PriceCurrencyManager.lastPriceCurrency =
                            a.price_currency;
                        return false
                    }
                    return true
                });
                M.init();
                ca.init(p);
                c.editTitleCallback = function() {
                    TripEditor.titleEditor.success()
                };
                c.editPhotoCallback = function(a) {
                    TripEditor.photoEditor.success(a)
                };
                c.editNodeCallback = function() {
                    TripEditor.nodeEditor.success()
                };
                c.editTipsCallback = function(a) {
                    TripEditor.tipsEditor.success(a)
                };
                c.photoRotateCallback = function(a) {
                    TripEditor.photoRotate.success(a);
                    p.render()
                };
                b("#edit-trip-name").click(function(a) {
                    a.stopPropagation();
                    TripEditor.titleEditor.open()
                });
                var O =
                    function(a) {
                        ca.onMousemove(a)
                    };
                n.on("addtext", function(a, d) {
                    var f = d.getFirstChild(), k = f.getId();
                    c.textNoteCallback = function(a) {
                        if (a) {
                            a.sid = a.id;
                            a.id = "nt-" + a.id;
                            _G_trip_collection.add(a);
                            var c = b(b("#_tpl_note_text").html()).attr({id: a.id}), a = new tripshow.View.TextNote({el: c,model: _G_trip_collection.get(a.id),isAuthor: true});
                            a.render();
                            a.canEdit();
                            c = new m(p);
                            c.add(a);
                            c.checkLayout();
                            p.insertBefore(d, c);
                            f.$el.before(a.$el);
                            p.render();
                            b.fancybox.close()
                        }
                    };
                    TripEditor.textEditor.open(null, k)
                }).on("note:drag",
                    function(a, b) {
                        ca.onMousedown(a, b);
                        n.on("mousemove", O).on("mouseup", function(a) {
                            n.off("mousemove", O).off("mouseup", arguments.callee);
                            ca.onMouseup(a, b)
                        })
                    }).on("note:edit", function(a, d, f) { //tudong
                        if (z.hasClass("edit-app")) {
                            a = d.model;
                            switch (d.type) {
                                case v.VIDEO:
                                case v.PHOTO:
                                    k.add({url: "/trips/" + _G_trip_id + "/notes/" + d.model.get("sid"),type: "PUT",data: {description: f || ""}}).run();
                                    break;
                                case v.TEXT:
                                    c.textNoteCallback = function(a) {
                                        if (a) {
                                            _G_trip_collection.get("nt-" + a.id).set({description: a.description,description_display: a.description_display});
                                            b.fancybox.close()
                                        }
                                    };
                                    TripEditor.textEditor.open(d);
                                    break;
                                case v.NODE:
                                    TripEditor.nodeEditor.open(d, a);
                                    break;
                                case v.TIPS:
                                    TripEditor.tipsEditor.open(d)
                            }
                        }
                    }).on("note:delete", function(a, c) {
                        b.confirm("\u786e\u8ba4\u5220\u9664\u6b64\u5185\u5bb9\uff1f", function(a) {
                            if (a) {
                                k.add({url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int"),type: "DELETE"}).run();
                                if (c.type === v.PHOTO) {
                                    var a = b("#open-trips .photo-count"), d = parseInt(a.text(), 10) || 0;
                                    a.text(d - 1 + "\u56fe")
                                }
                                c.remove();
                                p.render()
                            }
                        })
                    }).on("photo:rotate", function(a,
                                                   b) {
                        TripEditor.photoRotate.open(b)
                    })
            }
            y.on("route:note", function(a) {
                renderFun("nt-" + a)
            }).on("route:node", function(a) {
                    renderFun("nd-" + a)
                }).on("route:day", function(a) {
                    renderFun("d-" + a)
                }).on("route:end", function() {
                    renderFun("theend")
                });
            Backbone.history.start();
            setTimeout(function() {
                var a = c._G_trip_front_cover_photo;
                WindowSize.height < 500 && /\.jpg$/.test(a) && (a = a + "-display");
                W.setSrc(a)
            }, 50)
        })
    }
})(window, document, jQuery);
function utf8_encode(c) {
    if (c === null || typeof c === "undefined")
        return "";
    var c = c + "", g = "", b, d, f = 0;
    b = d = 0;
    for (var f = c.length, m = 0; m < f; m++) {
        var a = c.charCodeAt(m), r = null;
        a < 128 ? d++ : r = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192) + String.fromCharCode(a & 63 | 128) : String.fromCharCode(a >> 12 | 224) + String.fromCharCode(a >> 6 & 63 | 128) + String.fromCharCode(a & 63 | 128);
        if (r !== null) {
            d > b && (g = g + c.slice(b, d));
            g = g + r;
            b = d = m + 1
        }
    }
    d > b && (g = g + c.slice(b, f));
    return g
}
function base64_encode(c) {
    var g, b, d, f, m = 0, a = 0, r = "", r = [];
    if (!c)
        return c;
    c = utf8_encode(c + "");
    do {
        g = c.charCodeAt(m++);
        b = c.charCodeAt(m++);
        d = c.charCodeAt(m++);
        f = g << 16 | b << 8 | d;
        g = f >> 18 & 63;
        b = f >> 12 & 63;
        d = f >> 6 & 63;
        f = f & 63;
        r[a++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)
    } while (m <
        c.length);
    r = r.join("");
    switch (c.length % 3) {
        case 1:
            r = r.slice(0, -2) + "==";
            break;
        case 2:
            r = r.slice(0, -1) + "="
    }
    return r
}
function urlsafe_base64_encode(c) {
    return base64_encode(c).replace(/\+/g, "-").replace(/\//g, "_")
}
function generate_rs_put_path(c, g, b) {
    b = b || "image/jpeg";
    return "/rs-put/" + urlsafe_base64_encode(c + ":" + g) + "/mimeType/" + urlsafe_base64_encode(b) + "/rotate/0"
}
var NodesEditor;
(function(c, g, b) {
    var d, f;
    function m(a, c) {
        var c = c || {}, d = this, f = b(a), g = b('<div class="dummy">');
        this.data = c.data || {};
        this.$dummy = g.appendTo(f);
        this.options = c;
        f.on("mousedown", ".ico-remove", function(a) {
            a.stopPropagation()
        });
        f.on("mousedown", ".dbox-item", function(a) {
            C.onMousedown(d);
            d.$items = f.find(".dbox-item");
            var c = b(this);
            c.on("mousemove", function() {
                d.offset = p(a, c);
                d.elOffset = f.offset();
                d.limitMax = {x: f.width() - c.outerWidth(),y: f.height() - c.outerHeight()};
                d.createDummy(a, c);
                c.off("mousemove").off("mouseup")
            }).on("mouseup",
                function() {
                    c.off("mousemove").off("mouseup")
                })
        });
        this.$el = f
    }
    function a(a, c) {
        this.$el = b("#" + a);
        this.$photoList = this.$el.find(".photo-list");
        this.$nodes = this.$el.find(".nodes .trip-node");
        this.dayId = this.$el.data("id");
        this.options = c;
        this.resize();
        this.updateNodeCount();
        var d = this;
        this.dbox = new m(this.$el.find(".dbox"), b.extend(c, {data: {dayId: this.dayId}}));
        this.$el.on("mousedown mouseup", ".photo .unbind-note, .photo .ico-remove", function(a) {
            a.stopPropagation()
        });
        this.$el.on("click", ".photo .unbind-note",
            function(a) {
                a.stopPropagation();
                var a = b(this).parent().parent(".photo"), c = a.data("note-id"), f = d.options.callback.onPhotoUnbindNode;
                a.find(".node-name span").empty();
                a.find(".node-name").hide();
                f && f(c || 0)
            }).on("click", ".photo .ico-remove", function(a) {
                a.stopPropagation();
                var c = b(this).parent(".photo");
                b.confirm("\u786e\u8ba4\u5220\u9664\u8fd9\u5f20\u76f8\u7247\uff1f", function(a) {
                    if (a) {
                        var a = c.data("note-id"), f = d.options.callback.onRemovePhoto;
                        f && f(a || 0);
                        c.remove();
                        a = b(".photo-list .photo").length;
                        b(".photo-num").text(a);
                        a || b(".btn-gen-trip").addClass("btn-submit-disable")
                    }
                })
            }).on("click", ".trip-node .ico-remove", function() {
                var a = b(this).parent(".trip-node");
                b.confirm("\u786e\u8ba4\u5220\u9664\u884c\u7a0b\u4e2d\u7684\u8fd9\u4e2a\u4e8b\u4ef6\uff1f", function(b) {
                    if (b) {
                        var b = a.data("id"), c = d.options.callback.onRemoveNode;
                        c && c(d.dayId, b || 0);
                        a.remove();
                        d.nodeDeleted(b)
                    }
                })
            }).on("click", ".trip-node", function() {
                var a = b(this), c = a.data("id"), a = a.data("name");
                if (c && d.bindNode(c, a)) {
                    (a = d.options.callback.onPhotoBindNode) && a(d.dayId,
                        c, d.getSelectedIds());
                    d.clearSelected()
                }
            });
        this.$el.on("mousedown", ".photo", function(a) {
            var c = b(this), f = a.shiftKey;
            b(g).trigger("photogroup:mousedown", d);
            d.isMousedown = true;
            d.clickItem = c;
            d.clickPos = p(a, c);
            c.on("mouseup", function() {
                c.off("mousemove").off("mouseup");
                d.isMousedown = false;
                var a = c.data("note-id"), k, i;
                if (f && d.lastSelectPhotoId > 0)
                    d.$photoList.find(".photo").removeClass("selected").each(function() {
                        var c = b(this), f = c.data("note-id");
                        if (!k && (f === d.lastSelectPhotoId || f === a) && !(f === d.lastSelectPhotoId &&
                            f === a)) {
                            k = true;
                            i = f
                        }
                        if (k) {
                            c.addClass("selected");
                            if (f !== i && (f === d.lastSelectPhotoId || f === a))
                                return false
                        }
                    });
                else if (c.hasClass("selected")) {
                    c.removeClass("selected");
                    d.lastSelectPhotoId = 0
                } else {
                    c.addClass("selected");
                    d.lastSelectPhotoId = a
                }
            }).on("mousemove", function() {
                    c.off("mousemove").off("mouseup");
                    c.hasClass("selected") || c.addClass("selected")
                });
            n.onMousedown(a)
        })
    }
    function r(a, c) {
        var c = b(c), d = c.outerWidth(), f = c.outerHeight(), g = c.offset();
        return a.x >= g.left && a.x <= g.left + d && a.y >= g.top && a.y <= g.top +
            f ? {left: a.x - g.left < d / 2} : false
    }
    function p(a, c) {
        var d = b(c).offset();
        return {x: a.pageX - d.left,y: a.pageY - d.top}
    }
    var q = b(c), n, s, u, v, x, t, w;
    n = {init: function(a) {
        s = a;
        b(g).on("photogroup:mousedown", function(a, b) {
            u = b
        })
    },onMousedown: function(a) {
        d = a.clientX;
        f = a.clientY;
        b(g).on("mousemove", this.onMousemove).on("mouseup", this.onMouseup)
    },onMouseup: function(a) {
        b(g).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
        clearInterval(t);
        w = false;
        if (u && u.isMousedown) {
            s.checkDropInside(a, u);
            v && v.remove();
            v = null;
            u.stopDrag();
            u.isMousedown = false
        }
    },onMousemove: function(a) {
        if (u && u.isMousedown) {
            Date.now();
            if (!v) {
                if (u) {
                    x = u.clickPos;
                    var k = u.getSelected(), g = u.clickItem, m = [];
                    v = b('<div class="dragger" unselectable="on"><div class="photos-count"></div><div class="mask"></div></div>');
                    v.find(".photos-count").text(k.length + "\u5f20");
                    b.each(k, function(a) {
                        var o, n, i = b('<div class="clone-photo">'), q = b(k[a]).offset();
                        n = b(c);
                        o = q.left - n.scrollLeft();
                        n = q.top - n.scrollTop();
                        q = g === k[a];
                        o = {left: o - d + x.x,top: n - f + x.y,zIndex: q ? 1 : 0};
                        a = b(k[a]).find("img").clone();
                        i.append(a);
                        i.css(o);
                        q ? m.unshift(i) : m.push(i)
                    });
                    b.each(m, function(a) {
                        v.append(m[a])
                    });
                    b("body").append(v);
                    setTimeout(function() {
                        b.each(m, function(a) {
                            var c = {left: 0,top: 0};
                            b.support.cssAttrCheck("transform") ? m[a].css(c) : m[a].animate(c, {duration: 200})
                        });
                        setTimeout(function() {
                            v && v.addClass("dragger-bundled")
                        }, 100)
                    }, 25)
                }
                u.startDrag()
            }
            v.css({left: a.pageX - x.x,top: a.pageY - x.y});
            if (!w) {
                w = true;
                clearInterval(t);
                var n = function() {
                    if (v) {
                        var a = q.height(), c = q.scrollTop(), d = v.offset(),
                            f;
                        if (d.top - c < 0) {
                            f = true;
                            b("html,body").animate({scrollTop: "-=" + Math.ceil(a * 0.7)}, {duration: 500})
                        } else if (c + a - d.top < 80) {
                            f = true;
                            b("html,body").animate({scrollTop: "+=" + Math.ceil(a * 0.7)}, {duration: 500})
                        }
                        if (f) {
                            clearInterval(t);
                            setTimeout(function() {
                                t = setInterval(n, 1E3)
                            }, 1500)
                        }
                    }
                };
                t = setInterval(n, 1E3)
            }
        }
    }};
    NodesEditor = function(c, d) {
        var f = this, d = b.extend({callback: {}}, d);
        this.photoGroups = {};
        c.each(function() {
            var b = new a(this.id, d);
            f.photoGroups[this.id] = b
        });
        n.init(this);
        WindowResizeListener.add(function() {
            b.each(f.photoGroups,
                function() {
                    this.resize()
                })
        });
        b(window).on("node:added", function(a, c, d) {
            b.each(d, function(a) {
                f.addNodeToDay(c, d[a])
            })
        })
    };
    NodesEditor.prototype = {checkDropInside: function(a, c) {
        b.each(this.photoGroups, function() {
            if (this.dropInside(a, c))
                return false
        })
    },addNodeToDay: function(a, b) {
        a = "day-" + a;
        this.photoGroups[a] && this.photoGroups[a].addNode(b)
    },removeNode: function(a, b) {
        a = "day-" + a;
        this.photoGroups[a] && this.photoGroups[a].removeNode(b)
    }};
    var C, D;
    C = {onMousedown: function(a) {
        D = a;
        b(g).on("mousemove", this.onMousemove).on("mouseup",
            this.onMouseup)
    },onMouseup: function(a) {
        b(g).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
        D && D.onMouseup(a)
    },onMousemove: function(a) {
        D && D.moveDummy(a)
    }};
    m.prototype = {createDummy: function(a, b) {
        var c = b.clone();
        this.$dummy.empty().append(c.css("margin", "0")).show();
        this.clickItem = b.css("visibility", "hidden");
        this.clickItemIndex = this.$items.index(b);
        this.moveDummy(a)
    },moveDummy: function(a) {
        var c = a.pageY - this.elOffset.top - this.offset.y, c = {left: Math.min(Math.max(a.pageX - this.elOffset.left -
            this.offset.x, 0), this.limitMax.x),top: Math.min(Math.max(c, 0), this.limitMax.y)};
        this.$dummy.css(c);
        var d = {x: a.pageX,y: a.pageY}, f = this;
        f.$items.each(function() {
            var a = b(this), c = r(d, this);
            if (c) {
                if (f.clickItem[0] !== this) {
                    c.left ? a.before(f.clickItem) : a.after(f.clickItem);
                    f.$items = f.$el.find(">.dbox-item")
                }
                return false
            }
        })
    },onMouseup: function() {
        this.$dummy.hide();
        if (this.clickItem && this.clickItem.length) {
            this.clickItem.css("visibility", "visible");
            var a = this.$items.index(this.clickItem);
            if (this.clickItemIndex !=
                a) {
                var b = this.options.callback.onNodeStatusChange;
                b && b.call(this, this.clickItem.data("id"), a)
            }
        }
        this.clickItem = null
    }};
    a.prototype.nodeDeleted = function(a) {
        this.$photoList.find('.photo[data-node-id="' + a + '"]').find(".node-name").hide().find("span").text("")
    };
    a.prototype.updateNodeCount = function(a) {
        var c = this;
        this.$nodes.each(function() {
            var d = b(this), f = d.data("id"), f = c.$photoList.find('.photo[data-node-id="' + f + '"]').length, g = d.find(".count"), m = parseInt(g.text());
            isNaN(m) && (m = 0);
            f > 0 ? g.text(f + " \u5f20").show() :
                g.hide();
            if (a) {
                f = f - m;
                if (f > 0) {
                    var n = b('<div class="bubble">' + (f > 0 ? "+" : "") + f + "</div>").appendTo(d);
                    f > 0 && n.addClass("bubble-add");
                    n.animate({fontSize: "50px",opacity: 1}, 400).animate({top: "-25px",fontSize: "12px"}, {duration: 300,complete: function() {
                        n.remove()
                    }})
                }
            }
        })
    };
    a.prototype.resize = function() {
        var a = this.$photoList.find(".photo"), b = this.$photoList.width(), c = a.eq(0).width() + 20;
        if (a.length) {
            var d = Math.floor(b / c);
            a.css({"margin-left": Math.floor((b - (c - 20) * d) / (d + 1))})
        }
    };
    a.prototype.chkPhotos = function() {
        this.$el.find(".photo").length ?
            this.$el.find(".no-photo").hide() : this.$el.find(".no-photo").show()
    };
    a.prototype.dropInside = function(a, c) {
        var d = this, f = this.$el, g = {x: a.pageX,y: a.pageY}, m = c.getSelected(), n = c.getSelectedIds(), q = d.options.callback.onPhotoBindNode;
        if (r(g, f)) {
            var i;
            this.$nodes.each(function() {
                var f = b(this);
                if (r({x: a.pageX,y: a.pageY}, f)) {
                    var g = f.data("id"), m = f.data("name");
                    if (!g) {
                        f.find(".iframe").click();
                        return false
                    }
                    c.bindNode(g, m) && q && q(d.dayId, g, n);
                    i = true;
                    d.updateNodeCount(true);
                    return false
                }
            });
            if (c !== d) {
                i || c.unbindNode();
                d.$photoList.prepend(m);
                d.chkPhotos();
                c.chkPhotos();
                i || q && q(d.dayId, d.$el.data("default-node-id"), n);
                d.clearSelected()
            }
            i && d.clearSelected();
            d.stopDrag();
            return true
        }
        return false
    };
    a.prototype.startDrag = function() {
        this.isDragging = true;
        this.getSelected().addClass("mv")
    };
    a.prototype.stopDrag = function() {
        this.isDragging = false;
        this.$el.find(".photo").removeClass("mv")
    };
    a.prototype.getSelected = function() {
        return this.$el.find(".photo.selected")
    };
    a.prototype.getSelectedIds = function() {
        var a = [];
        this.getSelected().each(function() {
            a.push(b(this).data("note-id"))
        });
        return a
    };
    a.prototype.unbindNode = function() {
        var a = this.getSelected(), b = a.length;
        a.find(".node-name").addClass("hidden").find("span").text("");
        return b
    };
    a.prototype.bindNode = function(a, b) {
        var c = this.getSelected().attr("data-node-id", a);
        c.find(".node-name").removeClass("hidden").find("span").text(b);
        return c.length
    };
    a.prototype.clearSelected = function() {
        this.getSelected().removeClass("selected")
    };
    a.prototype.addNode = function(a) {
        if (this.$el.find('.nodes .trip-node[data-id="' + a.id + '"]').length)
            return false;
        a = '<div unselectable="on" class="dbox-item trip-node" data-id="' + a.id + '" data-name="' + a.name + '"><div class="ico ' + a.type + '"></div><div class="name">' + a.name + '</div><div class="count"></div><i class="ico-remove"></i><i class="ico-arrow"></i></div>';
        this.$el.find(".nodes .add-node").before(a);
        this.$nodes = this.$el.find(".nodes .trip-node")
    };
    a.prototype.removeNode = function(a) {
        this.$el.find('.nodes .trip-node[data-id="' + a + '"]').remove()
    }
})(window, document, jQuery);
$.fn.uploader = function(c, g) {
    function b(a, b) {
        this.file = a;
        this.callback = b || {};
        this._createEl()
    }
    function d(a) {
        var b = a.files.length, c = Date.now(), d = 12;
        a.total.uploaded && (d = (c - l) / 1E3 / a.total.uploaded);
        return b * d
    }
    function f(a) {
        return a && a > 60 ? Math.floor(a / 60) + "\u5206\u949f" + a % 60 + "\u79d2" : "\u4e0d\u52301\u5206\u949f"
    }
    function m() {
        var a = s.find(".timeleft"), b = a.attr("time") - 0, b = b - 1;
        a.text(f(b)).attr("time", b)
    }
    function a(a) {
        if (plupload.STOPPED != a.state) {
            var b = Math.floor(d(a) - (Date.now() - l) / 1E3);
            s.html("\u5df2\u4e0a\u4f20 <i>" +
                a.total.uploaded + "/" + a.files.length + '</i> \u5f20\u76f8\u7247\uff0c\u9884\u8ba1\u8fd8\u9700 <i class="timeleft" time="' + b + '">' + f(b) + "</i> \u4e0a\u4f20\u5b8c\u6210")
        }
    }
    var r = g.formUrl, p = g.photosCount;
    b.prototype._createEl = function() {
        var a = this.file, b = this;
        if (!this.$el) {
            var c = $('<li class="clearfix"><div class="filename">' + a.name + '</div><div class="progress-bar"><div class="bar"><span></span></div><div class="status">\u7b49\u5f85\u4e0a\u4f20</div></div></li>');
            this.$btnDel = c.find(".delete").click(function() {
                b.callback.delFun &&
                b.callback.delFun(a);
                c.remove();
                return false
            });
            this.$el = c;
            this.$progressBar = c.find(".bar");
            this.$text = this.$progressBar.find("span");
            this.$status = c.find(".status")
        }
        return this.$el
    };
    b.prototype.setError = function(a) {
        this.error = true;
        this.$progressBar.stop().addClass("error").width("100%");
        this.$text.text(a)
    };
    b.prototype.startUpload = function(a) {
        this.$status.addClass("hidden");
        this.$progressBar.addClass("uploading");
        this.percent = a;
        this.ani(1E4)
    };
    b.prototype.ani = function(a) {
        var b = this;
        this.$progressBar.stop().animate({width: this.percent +
            "%"}, {duration: a,step: function(a) {
            b.$text.text(a.toFixed(1) + "%")
        },complete: function() {
            b.percent == 100 && b.$text.text("\u5df2\u4e0a\u4f20")
        }})
    };
    b.prototype.setProgress = function(a) {
        if (!this.error)
            if (a === 0)
                this.ani(3E4);
            else if (a === 100) {
                this.percent = 100;
                this.ani(200)
            }
    };
    b.prototype.reset = function() {
        this.error = false;
        this.$progressBar.stop().removeClass("error").width("0");
        this.$status.removeClass("hidden")
    };
    b.prototype.remove = function() {
        this.$el && this.$el.remove()
    };
    $("#uploader .js-uploader-box").html('<div class="filelist-wrapper"><ul id="uploader-filelist" class="filelist"></ul>');
    var q = $("#uploader-filelist"), n = this.attr("id"), s = $("#upload-status .status"), u = $("#upload-status .btn-next-step"), v = $("#upload-status .try-again"), x = $("#upload-status .try-again .btn"), t = {};
    q.height();
    var w = 0, C = 0, D = 0, G, k, l;
    if (!n) {
        n = plupload.guid();
        this.attr("id", n)
    }
    var z = new plupload.Uploader($.extend({browse_button: "btn-upload",container: n,drop_element: n + "-filelist"}, c));
    x.click(function(a) {
        a.preventDefault();
        for (var a = z.files.concat(), b = a.length, c = 0, d; c < b; c++)
            if (d = a[c]) {
                var f = t[d.id];
                if (d.status ===
                    plupload.FAILED) {
                    d.status = plupload.QUEUED;
                    f && f.reset()
                }
            }
        z.start()
    });
    z.bind("FilesAdded", function(a, c) {
        var d = $();
        $.each(c, function(f, k) {
            var g = new b(k, {delFun: function(b) {
                a.removeFile(b);
                delete c[b.id]
            }});
            t[k.id] = g;
            d = d.add(g.$el)
        });
        q.append(d);
        $("#upload-guide").remove()
    });
    z.bind("Init", function() {
        p >= 128 && $.confirm("\u8be5\u6e38\u8bb0\u5df2\u8fbe\u5230128\u5f20\u76f8\u7247\u4e0a\u9650", function() {
            window.location.href = r
        }, {btnCancel: false})
    });
    z.bind("Refresh", function(b) {
        a(b);
        if (!k && b.total.queued) {
            b.start();
            l = Date.now();
            $.clearTimer(G);
            G = setInterval(m, 1E3)
        }
    });
    z.bind("Error", function(a, b) {
        try {
            _gaq.push(["_trackEvent", "upload_error", "trip_" + _G_trip_id, "error" + b.code + ":" + b.details])
        } catch (c) {
        }
        if (b && b.file) {
            var d = t[b.file.id];
            if (d)
                switch (b.code) {
                    case -702:
                        d.setError("\u76f8\u7247\u5bbd\u9ad8\u5927\u4e8e8100px");
                        C++;
                        break;
                    default:
                        w++;
                        d.setError("\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u72b6\u6001")
                }
        } else
            w++
    });
    z.bind("BeforeUpload", function(a, b) {
        if (p >= 128) {
            k = true;
            D = a.files.length - a.total.uploaded;
            $.confirm("\u8be5\u6e38\u8bb0\u5df2\u8fbe\u5230128\u5f20\u76f8\u7247\u4e0a\u9650", null, {btnCancel: false});
            a.stop();
            return false
        }
        var c = t[b.id], d = $.rnd(75, 99);
        c && c.startUpload(d);
        _G_qiniu_key = _G_trip_id + "/" + Date.now() + b.id;
        z.settings.multipart_params.action = generate_rs_put_path(_G_qiniu_production ? "TripPhoto" : "DevTripPhoto", _G_qiniu_key + ".jpg");
        z.settings.multipart_params.params = "key=" + _G_qiniu_key + "&width=$(imageInfo.width)&height=$(imageInfo.height)&hash=$(etag)&fsize=$(fsize)&exif=$(exif)"
    });
    z.bind("QueueChanged",
        function(b) {
            s.removeClass("hidden");
            a(b)
        });
    z.bind("FileUploaded", function(a, b, c) {
        var a = t[b.id], d;
        c && (d = $.parseJSON(c.response));
        if (d && d.result)
            switch (d.result) {
                case 1:
                    a && a.setError("\u76f8\u7247\u5bbd\u9ad8\u5c0f\u4e8e400px");
                    C++;
                    break;
                case 2:
                    a && a.setError("\u8d85\u8fc7128\u5f20");
                    D++;
                    break;
                case 0:
                    p = p + 1
            }
        else
            p = p + 1;
        c = $("#uploader");
        d = c.scrollTop();
        b = c.height();
        a = a.$el.position().top;
        d = d + b / 2;
        a > d && c.animate({scrollTop: d}, 200)
    });
    z.bind("StateChanged", function(a) {
        if (plupload.STOPPED == a.state)
            if (w || C ||
                D) {
                var b = "\u4e0a\u4f20\u4e0d\u6210\u529f";
                w ? b = w + "\u5f20\u76f8\u7247\u56e0\u7f51\u7edc\u5835\u585e\uff0c" + b : C && (b = C + "\u5f20\u76f8\u7247\u5c3a\u5bf8\u4e0d\u5408\u89c4\u8303\uff0c" + b);
                D && (b = D + "\u5f20\u76f8\u7247\u8d85\u51fa128\u5f20\u76f8\u7247\u4e0a\u9650\uff0c" + b + '<a href="#" class="serial-tip">\u6e38\u8bb0\u8fde\u8f7d\u8bf4\u660e</a><div id="serial-tip-detail" class="serial-tip-detail clearfix" style="display:none;"><p>\u6bcf\u7bc7\u6e38\u8bb0128\u5f20\u76f8\u7247\uff0c\u662f\u5236\u4f5c\u548c\u6d4f\u89c8\u6e38\u8bb0\u7684\u6700\u4f73\u8282\u594f\u3002</p><p>\u5982\u679c\u76f8\u7247\u592a\u591a\uff0c\u53ef\u5c06\u6e38\u8bb0\u5206\u6210\u591a\u7bc7\u53d1\u5e03\uff0c\u7136\u540e\u5728\u9876\u680f\u53f3\u4fa7\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u6e38\u8bb0\u8bbe\u7f6e\u2192\u6e38\u8bb0\u8fde\u8f7d\u3002</p><p>\u201c\u8fde\u8f7d\u201d\u5c06\u5efa\u7acb\u591a\u7bc7\u6e38\u8bb0\u7684\u524d\u540e\u5173\u8054\u3002</p></div>');
                s.html(b);
                D && $(".serial-tip", s).bubbletip($("#serial-tip-detail"), {deltaDirection: "top"});
                if (w) {
                    D = C = w = 0;
                    for (var a = z.files.concat(), b = a.length, c = 0, d; c < b; c++)
                        if (d = a[c]) {
                            var f = t[d.id];
                            if (d.status === plupload.DONE && f) {
                                f.remove();
                                delete t[d.id];
                                z.removeFile(d)
                            }
                        }
                    v.show();
                    u.hide()
                } else if (a.total.uploaded > 0 && (C || D)) {
                    u.show();
                    v.hide()
                }
            } else
                window.location.href = r
    });
    z.bind("UploadProgress", function(b, c) {
        var d = t[c.id];
        d && d.setProgress(c.percent);
        a(b)
    });
    z.init();
    u.click(function() {
        window.location.href = r;
        return false
    });
    return z
};
function swfuploadInit(c, g, b, d) {
    var c = c - 0, g = {runtimes: "flash",max_file_size: "30mb",url: "http://up.qbox.me/upload",flash_swf_url: b,filters: [{title: "\u76f8\u7247",extensions: "jpg,JPG,jpeg,JPEG"}],resize: {width: 1600,height: 1600,quality: 80},multipart_params: {auth: g}}, f = $(".add-trip-upload");
    f.uploader(g, {photosCount: c,formUrl: d});
    screen.height < 801 && $("#upload-guide").addClass("upload-guide-small");
    WindowResizeListener.add(function() {
        var b = $("#btn-upload")[0], a = plupload.getPos(b, f[0]), b = plupload.getSize(b);
        $(".plupload").css({top: a.y +
            "px",left: a.x + "px",width: b.w + "px",height: b.h + "px"})
    })
}
(function() {
    $.fn.isCommentsPopup = function(c) {
        var c = c || {}, g = window.parent ? parent.document.location.href : "";
        if (!c.tripId)
            return this;
        this.each(function() {
            var b = $(this), d = $(".textarea", b).textCounter().hasPlaceholder(), f = $(".loading", b), m = $('input[name="reply_to_id"]', b), a = $('input[name="reply_prefix"]', b), r = $('input[name="commentable_type"]', b), p = $('input[name="commentable_id"]', b), q = $(".comment-list", b).scrollbar({type: "ver"});
            $(".success", b);
            var n;
            $(".time", b).timeago();
            var s, u = q.find("li:last").data("id"),
                v = b.find(".btn-more").on("click", function() {
                    u && $.ajax({url: "/trips/" + c.tripId + "/comments?next_id=" + u,dataType: "html",success: function(a) {
                        var a = $("<div>" + a + "</div>"), c = a.find("li");
                        q.find("ul").append(c);
                        a.find(".btn-more").length || v.remove();
                        u = q.find("li:last").data("id");
                        b.find(".time").timeago();
                        q.scrollbar().refresh()
                    }});
                    return false
                });
            b.on("click", ".reply-image a, .reply-text a", function() {
                var a = $(this).attr("href").split("#");
                if (g && g.indexOf(a[0]) > -1) {
                    parent.$(parent).trigger("dochaschanged",
                        [a[1]]);
                    return false
                }
                return true
            });
            d.focus(function() {
                clearInterval(s);
                s = setInterval(function() {
                    if (d.val() === "") {
                        m.val("");
                        a.val("");
                        p.val("");
                        r.val("")
                    }
                }, 30)
            }).blur(function() {
                    clearInterval(s)
                }).keydown(function(g) {
                    if (g.keyCode === 13) {
                        g.preventDefault();
                        g = d.val();
                        if (g == a.val()) {
                            d.showErrorTips("\u8bf7\u8f93\u5165\u5185\u5bb9");
                            return false
                        }
                        if (!n) {
                            n = true;
                            if (!d.valid()) {
                                n = false;
                                d.showErrorTips();
                                return false
                            }
                            var s = m.val(), u = p.val(), v = r.val(), g = {text: g};
                            if (s)
                                g.reply_to_id = s;
                            if (u && v) {
                                g.commentable_id =
                                    u;
                                g.commentable_type = v
                            }
                            s = function(a) {
                                n = false;
                                d.val("").focus();
                                q.find("ul").prepend(a).find(".nocomment").remove();
                                b.find(".time").timeago();
                                q.scrollbar().refresh().scrollTo(0);
                                a = $("#comments-popup h1 span");
                                a.text(a.text() - 0 + 1);
                                window.parent && parent.$(parent).trigger("note:commented")
                            };
                            u = function() {
                                f.hide()
                            };
                            g = {url: "/trips/" + c.tripId + "/comments",type: "POST",data: g};
                            if (s)
                                g.success = s;
                            if (u)
                                g.complete = u;
                            $.ajax(g)
                        }
                    }
                });
            q.on("click", ".reply", function() {
                var b = $(this).parents("li");
                m.val(b.data("id"));
                p.val(b.data("commentable-id"));
                r.val(b.data("commentable-type"));
                b = "\u56de\u590d " + b.data("username") + "\uff1a";
                d.val(b).moveCursorToEnd();
                a.val(b)
            })
        });
        return this
    }
})();
var noticePopup = function() {
    function c() {
        $.ajax({url: "/notifications",data: {last_id: x},success: function(a) {
            var a = $("<div>" + a + "</div>"), b = a.find("li"), f;
            !x && (f = b.filter(".unread").length) > 0 && s.addClass("unread");
            if (b.length) {
                s.append(b);
                $("time", b).timeago()
            } else
                x || s.append('<li class="nonotice">\u76ee\u524d\u6ca1\u6709\u6d88\u606f</li>');
            if (a.find(".btn-more").length) {
                x = s.find("li:last").data("id");
                n.css("visibility", "visible").off("click");
                f ? n.click(function() {
                    g();
                    n.click(c);
                    return false
                }) : n.click(c)
            } else
                !f ||
                    f === b.length ? n.css("visibility", "hidden") : n.css("visibility", "visible").off("click").click(function() {
                    g();
                    n.css("visibility", "hidden")
                });
            setTimeout(d, 5)
        },complete: function() {
            s.removeClass("loading")
        }});
        return false
    }
    function g() {
        s.removeClass("unread");
        d();
        return false
    }
    function b() {
        u.find("textarea").val("").blur();
        u.slideUp(function() {
            v.scrollbar().refresh()
        });
        var a = $('<div class="success">\u56de\u590d\u6210\u529f</div>');
        u.before(a);
        setTimeout(function() {
            a.remove()
        }, 1E3)
    }
    function d() {
        var a = WindowSize.height -
            w - 52;
        if (q.height() > a) {
            p.css("height", a);
            v.css("height", a - 40).scrollbar().refresh()
        } else {
            p.css("height", "auto");
            v.scrollbar().refresh()
        }
    }
    function f() {
        $(document).off("click.notice");
        x = 0;
        $("body").removeClass("notice-open");
        r.hide();
        p.hide();
        getHidder().append(u);
        u.find("textarea").val("");
        s.empty().removeClass("unread");
        D && C.css("overflow", "auto")
    }
    var m, a, r, p, q, n, s, u, v, x, t, w, C = $("html"), D, G, k;
    return {open: function(g, z) {
        a || (a = $(g));
        G || (G = z ? $(z) : $("body"));
        if (!m) {
            var E = a.find(".js-n-offset");
            w = E.offset().top +
                E.height();
            r = $('<div class="notice-overlay"></div>');
            p = $('<div class="notice-popup"><i class="close"></i><div class="notice-inner"><h3>\u6d88\u606f\u4e2d\u5fc3</h3><div class="scroller-wrapper"><div class="comment-list scroller clearfix" id="notice"><ul class="clearfix loading"></ul><div class="btn-more" style="visibility:hidden;">\u52a0\u8f7d\u66f4\u591a\u6d88\u606f...</div></div></div></div></div>').css("top", w);
            v = $(".scroller-wrapper", p);
            n = p.find(".btn-more");
            s = p.find("ul");
            q = p.find(".notice-inner");
            u = $('<div class="replyform"><textarea name="text" class="textarea inset-shadow" minlen="1" maxlen="300" data-error-tip="\u6700\u591a150\u5b57"></textarea><div class="c-tip">\u56de\u8f66\u53d1\u8868\u8bc4\u8bba</div><input type="hidden" name="note_id" value=""><input type="hidden" name="reply_to_id" value=""></div>');
            s.on("ajax:success", 'a[data-method="delete"]', function() {
                $(this).parents("li").remove()
            });
            $(".close", p).click(f);
            $("textarea", u).autosize().keydown(function(a) {
                if (a.keyCode === 13) {
                    var b =
                        $(this);
                    a.stopPropagation();
                    a.preventDefault();
                    if (!k) {
                        k = true;
                        if (!b.valid()) {
                            k = false;
                            b.showErrorTips();
                            return false
                        }
                        var a = b.val(), c = t.complete;
                        if (a != "") {
                            t.data.text = a;
                            t.complete = function() {
                                c && c();
                                k = false
                            };
                            $.ajax(t)
                        }
                    }
                } else if (a.keyCode === 27) {
                    a.stopPropagation();
                    u.find("textarea").val("");
                    u.slideUp()
                }
            });
            s.touchClick(".reply", function() {
                var a = $(this).parents("li"), c = a.data("trip-id"), f = a.data("comment-id"), k = a.data("commentable-id"), g = a.data("commentable-type"), f = {reply_to_id: f};
                if (k) {
                    f.commentable_id =
                        k;
                    f.commentable_type = g
                }
                t = {url: "/trips/" + c + "/comments",type: "POST",data: f,success: b};
                u.appendTo(a).slideDown(200, function() {
                    u.find("textarea").val("").focus();
                    d();
                    v.scrollbar().refresh()
                })
            }).touchClick(".reply-image a, .reply-text a", function() {
                    var a = $(this).attr("href").split("#"), b = document.location.href;
                    if (b && b.indexOf(a[0]) > -1) {
                        $(window).trigger("dochaschanged", [a[1]]);
                        return false
                    }
                    return true
                });
            G.append(r, p);
            v.scrollbar({type: "ver"});
            m = 1
        }
        s.addClass("loading");
        c();
        $("body").addClass("notice-open");
        r.show();
        p.show();
        a.find(".n-count").hide();
        if (C.css("overflow") != "hidden") {
            D = true;
            C.css("overflow", "hidden")
        }
        $(document).on("click.notice", function(a) {
            $.isClickInside(a.target, p[0]) || f()
        })
    }}
}();
function destinationMapInit() {
    function c(b) {
        return function() {
            var c = a[b.id];
            if (c) {
                if (c.page == -1 && c.index == c.list.length - 1)
                    c.index = -1;
                d(b)
            } else
                g(b)
        }
    }
    function g(c) {
        b('<div class="dest-infowindow loading"></div>', c);
        var f = a[c.id];
        if (!f) {
            f = {page: 1,index: -1,list: []};
            a[c.id] = f
        }
        $.get(c.data.src + "?page=" + f.page, function(a) {
            if (a && a.length) {
                f.list = f.list.concat(a);
                f.page = a.length < 10 ? -1 : f.page + 1
            } else
                f.page = -1;
            d(c)
        })
    }
    function b(a, b) {
        var c = Gmaps.map, d = c.visibleInfoWindow;
        if (r == b.id && d !== null)
            d.setContent(a);
        else {
            r = b.id;
            d && d.close();
            d = new google.maps.InfoWindow({content: a});
            d.open(c.map, b.serviceObject);
            c.visibleInfoWindow = d
        }
    }
    function d(c) {
        var m = a[c.id];
        if (m) {
            m.index = m.index + 1;
            var p = m.list[m.index];
            if (p)
                b(f(p, c), c);
            else if (m.page == -1) {
                m.index = -1;
                d(c)
            } else
                g(c)
        }
    }
    function f(c, g) {
        var m = '<div class="dest-infowindow"><h3>' + g.title + "</h3>";
        c.comment && (m = m + ('<div class="comment">' + c.comment + "</div>"));
        m = m + '<div class="star-level">';
        if (c.score) {
            for (var p = "", r = "", x = 1; x <= 5; x++)
                x > c.score ? r = r + "\u2606" : p = p + "\u2605";
            m = m + ('<span class="score">' + p + "</span><span>" + r + "</span>")
        }
        m = m + (c.photos_count + "[\u56fe]</div>");
        if (c.photos && c.photos.length) {
            m = m + '<div class="photos clearfix">';
            x = 0;
            for (p = c.photos.length; x < p; x++)
                m = m + ('<img src="' + c.photos[x] + '" />');
            m = m + "</div>"
        }
        m = m + ('<div class="trip-name"><a href="/trips/' + c.trip_id + '" target="_blank">\u300a' + c.trip_name + "\u300b</a></div>");
        x = a[g.id];
        m = m + ('<div class="prev' + (x.index <= 0 ? " disable" : "") + '"></div>');
        m = m + ('<div class="next' + (x.page == -1 && x.index == x.list.length - 1 ? "disable" :
            "") + '"></div>');
        m = $(m + "</div>");
        $(".next", m).click(function() {
            d(g)
        });
        $(".prev", m).click(function() {
            var c = a[g.id], d = c.index - 1;
            if (!(d < 0)) {
                c.index = c.index - 1;
                (c = c.list[d]) && b(f(c, g), g)
            }
        });
        return m[0]
    }
    function m(a) {
        for (var b = Gmaps.map.markers, d = 0; d < b.length; d++)
            if (b[d].id == a) {
                c(b[d])();
                return false
            }
    }
    for (var a = {}, r, p = 0; p < this.markers.length; ++p)
        google.maps.event.addListener(Gmaps.map.markers[p].serviceObject, "click", c(Gmaps.map.markers[p]));
    $("#page-body").height(WindowSize.height - 85);
    $("html,body").css({overflow: "hidden"});
    $("#user-destination").scrollbar({type: "ver"});
    $(".user-nodes li").click(function() {
        var a = $(this).data("id");
        m(a);
        return false
    });
    (new Backbone.Router({routes: {"attractions/:id": "attractions"}})).on("route:attractions", function(a) {
        m(a)
    });
    Backbone.history.start()
}
(function() {
    var c;
    c = {triggerOldOnload: function() {
        if (typeof c.oldOnload === "function")
            return c.oldOnload()
    },loadMaps: function() {
        var b, d, f;
        f = [];
        for (b in c) {
            d = b.search(/load/);
            if (d === -1) {
                d = "load_" + b;
                f.push(c[d]())
            } else
                f.push(void 0)
        }
        return f
    }};
    window.Gmaps = c;
    var g = function() {
        this.userLocation = this.visibleInfoWindow = this.serviceObject = this.map = null;
        this.geolocationFailure = function() {
            return false
        };
        this.callback = function() {
            return false
        };
        this.customClusterer = function() {
            return false
        };
        this.infobox = function() {
            return false
        };
        this.jsTemplate = false;
        this.default_map_options = {id: "map",draggable: true,detect_location: false,center_on_user: false,center_latitude: 0,center_longitude: 0,zoom: 7,maxZoom: null,minZoom: null,auto_adjust: true,auto_zoom: true,bounds: [],raw: {}};
        this.default_markers_conf = {title: "",picture: "",width: 22,length: 32,draggable: false,do_clustering: false,randomize: false,max_random_distance: 100,list_container: null,offset: 0,raw: {}};
        this.markers = [];
        this.boundsObject = null;
        this.polygons = [];
        this.polylines = [];
        this.circles =
            [];
        this.markerClusterer = null;
        this.markerImages = []
    };
    g.prototype.initialize = function() {
        this.map = this.serviceObject = this.createMap();
        (this.map_options.detect_location === true || this.map_options.center_on_user === true) && this.findUserLocation(this);
        return this.resetSidebarContent()
    };
    g.prototype.findUserLocation = function(b) {
        var c;
        if (navigator.geolocation) {
            c = function(c) {
                b.userLocation = b.createLatLng(c.coords.latitude, c.coords.longitude);
                if (b.map_options.center_on_user === true)
                    return b.centerMapOnUser()
            };
            return navigator.geolocation.getCurrentPosition(c,
                function() {
                    return b.geolocationFailure(true)
                })
        }
        return b.geolocationFailure(false)
    };
    g.prototype.create_direction = function() {
        var b, c;
        b = new google.maps.DirectionsRenderer;
        c = new google.maps.DirectionsService;
        b.setMap(this.serviceObject);
        this.direction_conf.display_panel && b.setPanel(document.getElementById(this.direction_conf.panel_id));
        b.setOptions({suppressMarkers: false,suppressInfoWindows: false,suppressPolylines: false});
        return c.route({origin: this.direction_conf.origin,destination: this.direction_conf.destination,
            waypoints: this.direction_conf.waypoints,optimizeWaypoints: this.direction_conf.optimizeWaypoints,unitSystem: google.maps.DirectionsUnitSystem[this.direction_conf.unitSystem],avoidHighways: this.direction_conf.avoidHighways,avoidTolls: this.direction_conf.avoidTolls,region: this.direction_conf.region,travelMode: google.maps.DirectionsTravelMode[this.direction_conf.travelMode],language: "en"}, function(c, d) {
            if (d === google.maps.DirectionsStatus.OK)
                return b.setDirections(c)
        })
    };
    g.prototype.create_circles = function() {
        var b,
            c, f, g, a;
        g = this.circles;
        a = [];
        c = 0;
        for (f = g.length; c < f; c++) {
            b = g[c];
            a.push(this.create_circle(b))
        }
        return a
    };
    g.prototype.create_circle = function(b) {
        var c;
        if (b === this.circles[0]) {
            if (b.strokeColor != null)
                this.circles_conf.strokeColor = b.strokeColor;
            if (b.strokeOpacity != null)
                this.circles_conf.strokeOpacity = b.strokeOpacity;
            if (b.strokeWeight != null)
                this.circles_conf.strokeWeight = b.strokeWeight;
            if (b.fillColor != null)
                this.circles_conf.fillColor = b.fillColor;
            if (b.fillOpacity != null)
                this.circles_conf.fillOpacity = b.fillOpacity
        }
        if (b.lat !=
            null && b.lng != null) {
            c = new google.maps.Circle({center: this.createLatLng(b.lat, b.lng),strokeColor: b.strokeColor || this.circles_conf.strokeColor,strokeOpacity: b.strokeOpacity || this.circles_conf.strokeOpacity,strokeWeight: b.strokeWeight || this.circles_conf.strokeWeight,fillOpacity: b.fillOpacity || this.circles_conf.fillOpacity,fillColor: b.fillColor || this.circles_conf.fillColor,clickable: b.clickable || this.circles_conf.clickable,zIndex: b.zIndex || this.circles_conf.zIndex,radius: b.radius});
            b.serviceObject = c;
            return c.setMap(this.serviceObject)
        }
    };
    g.prototype.clear_circles = function() {
        var b, c, f, g, a;
        g = this.circles;
        a = [];
        c = 0;
        for (f = g.length; c < f; c++) {
            b = g[c];
            a.push(this.clear_circle(b))
        }
        return a
    };
    g.prototype.clear_circle = function(b) {
        return b.serviceObject.setMap(null)
    };
    g.prototype.hide_circles = function() {
        var b, c, f, g, a;
        g = this.circles;
        a = [];
        c = 0;
        for (f = g.length; c < f; c++) {
            b = g[c];
            a.push(this.hide_circle(b))
        }
        return a
    };
    g.prototype.hide_circle = function(b) {
        return b.serviceObject.setMap(null)
    };
    g.prototype.show_circles = function() {
        var b, c, f;
        c = this.circles;
        f = [];
        b = 0;
        for (c = c.length; b < c; b++)
            f.push(this.show_circle(this.circle));
        return f
    };
    g.prototype.show_circle = function(b) {
        return b.serviceObject.setMap(this.serviceObject)
    };
    g.prototype.create_polygons = function() {
        var b, c, f, g, a;
        g = this.polygons;
        a = [];
        c = 0;
        for (f = g.length; c < f; c++) {
            b = g[c];
            a.push(this.create_polygon(b))
        }
        return a
    };
    g.prototype.create_polygon = function(b) {
        var c, f, g, a, r, p, q, n, s, u, v;
        p = [];
        u = 0;
        for (v = b.length; u < v; u++) {
            r = b[u];
            a = this.createLatLng(r.lat, r.lng);
            p.push(a);
            if (r === b[0]) {
                q = r.strokeColor || this.polygons_conf.strokeColor;
                n = r.strokeOpacity || this.polygons_conf.strokeOpacity;
                s = r.strokeWeight || this.polygons_conf.strokeWeight;
                f = r.fillColor || this.polygons_conf.fillColor;
                g = r.fillOpacity || this.polygons_conf.fillOpacity;
                c = r.clickable || this.polygons_conf.clickable
            }
        }
        c = new google.maps.Polygon({paths: p,strokeColor: q,strokeOpacity: n,strokeWeight: s,fillColor: f,fillOpacity: g,clickable: c,map: this.serviceObject});
        return b.serviceObject = c
    };
    g.prototype.replacePolylines = function(b) {
        this.destroy_polylines();
        this.polylines = b;
        this.create_polylines();
        return this.adjustMapToBounds()
    };
    g.prototype.destroy_polylines = function() {
        var b, c, f, g;
        g = this.polylines;
        c = 0;
        for (f = g.length; c < f; c++) {
            b = g[c];
            b.serviceObject.setMap(null)
        }
        return this.polylines = []
    };
    g.prototype.create_polylines = function() {
        var b, c, f, g, a;
        g = this.polylines;
        a = [];
        c = 0;
        for (f = g.length; c < f; c++) {
            b = g[c];
            a.push(this.create_polyline(b))
        }
        return a
    };
    g.prototype.create_polyline = function(b) {
        var c, f, g, a, r, p, q, n, s, u, v, x;
        a = [];
        s = 0;
        for (v = b.length; s < v; s++) {
            f = b[s];
            if (f.coded_array != null) {
                f = new google.maps.geometry.encoding.decodePath(f.coded_array);
                u = 0;
                for (x = f.length; u < x; u++) {
                    g = f[u];
                    a.push(g)
                }
            } else {
                if (f === b[0]) {
                    r = f.strokeColor || this.polylines_conf.strokeColor;
                    p = f.strokeOpacity || this.polylines_conf.strokeOpacity;
                    q = f.strokeWeight || this.polylines_conf.strokeWeight;
                    c = f.clickable || this.polylines_conf.clickable;
                    n = f.zIndex || this.polylines_conf.zIndex
                }
                if (f.lat != null && f.lng != null) {
                    f = this.createLatLng(f.lat, f.lng);
                    a.push(f)
                }
            }
        }
        c = new google.maps.Polyline({path: a,strokeColor: r,strokeOpacity: p,strokeWeight: q,clickable: c,zIndex: n});
        b.serviceObject = c;
        return c.setMap(this.serviceObject)
    };
    g.prototype.create_markers = function() {
        this.createServiceMarkersFromMarkers();
        return this.clusterize()
    };
    g.prototype.createServiceMarkersFromMarkers = function() {
        var b, c, f, g, a;
        b = this.markers;
        f = g = 0;
        for (a = b.length; g < a; f = ++g)
            if (this.markers[f].serviceObject == null) {
                b = this.markers[f].lat;
                c = this.markers[f].lng;
                if (this.markers_conf.randomize) {
                    c = this.randomize(b, c);
                    b = c[0];
                    c = c[1]
                }
                this.markers[f].serviceObject = this.createMarker({marker_picture: this.markers[f].picture ? this.markers[f].picture : this.markers_conf.picture,
                    marker_width: this.markers[f].width ? this.markers[f].width : this.markers_conf.width,marker_height: this.markers[f].height ? this.markers[f].height : this.markers_conf.length,marker_title: this.markers[f].title ? this.markers[f].title : null,marker_anchor: this.markers[f].marker_anchor ? this.markers[f].marker_anchor : null,shadow_anchor: this.markers[f].shadow_anchor ? this.markers[f].shadow_anchor : null,shadow_picture: this.markers[f].shadow_picture ? this.markers[f].shadow_picture : null,shadow_width: this.markers[f].shadow_width ?
                        this.markers[f].shadow_width : null,shadow_height: this.markers[f].shadow_height ? this.markers[f].shadow_height : null,marker_draggable: this.markers[f].draggable ? this.markers[f].draggable : this.markers_conf.draggable,rich_marker: this.markers[f].rich_marker ? this.markers[f].rich_marker : null,zindex: this.markers[f].zindex ? this.markers[f].zindex : null,Lat: b,Lng: c,index: f});
                this.createInfoWindow(this.markers[f]);
                this.createSidebar(this.markers[f])
            }
        return this.markers_conf.offset = this.markers.length
    };
    g.prototype.createImageAnchorPosition =
        function(b) {
            return b === null ? null : this.createPoint(b[0], b[1])
        };
    g.prototype.replaceMarkers = function(b) {
        this.clearMarkers();
        this.markers = [];
        this.boundsObject = this.createLatLngBounds();
        this.resetSidebarContent();
        this.markers_conf.offset = 0;
        return this.addMarkers(b)
    };
    g.prototype.addMarkers = function(b) {
        this.markers = this.markers.concat(b);
        this.create_markers();
        return this.adjustMapToBounds()
    };
    g.prototype.createSidebar = function(b) {
        var c, f, g, a;
        if (this.markers_conf.list_container) {
            a = document.getElementById(this.markers_conf.list_container);
            g = document.createElement("li");
            c = document.createElement("a");
            c.href = "javascript:void(0);";
            f = b.sidebar != null ? b.sidebar : "Marker";
            c.innerHTML = f;
            c.onclick = this.sidebar_element_handler(this, b.serviceObject, "click");
            g.appendChild(c);
            return a.appendChild(g)
        }
    };
    g.prototype.sidebar_element_handler = function(b, c, f) {
        return function() {
            b.map.panTo(c.position);
            return google.maps.event.trigger(c, f)
        }
    };
    g.prototype.resetSidebarContent = function() {
        var b;
        if (this.markers_conf.list_container !== null) {
            b = document.getElementById(this.markers_conf.list_container);
            return b.innerHTML = ""
        }
    };
    g.prototype.adjustMapToBounds = function() {
        var b, c, f, g, a, r, p;
        if (this.map_options.auto_adjust || this.map_options.bounds !== null)
            this.boundsObject = this.createLatLngBounds();
        if (this.map_options.auto_adjust) {
            this.extendBoundsWithMarkers();
            p = this.polylines;
            f = 0;
            for (a = p.length; f < a; f++) {
                b = p[f];
                c = b.serviceObject.latLngs.getArray()[0].getArray();
                g = 0;
                for (r = c.length; g < r; g++) {
                    b = c[g];
                    this.boundsObject.extend(b)
                }
            }
            p = this.polygons;
            f = 0;
            for (a = p.length; f < a; f++) {
                b = p[f];
                c = b.serviceObject.latLngs.getArray()[0].getArray();
                g = 0;
                for (r = c.length; g < r; g++) {
                    b = c[g];
                    this.boundsObject.extend(b)
                }
            }
            p = this.circles;
            a = 0;
            for (f = p.length; a < f; a++) {
                b = p[a];
                this.boundsObject.extend(b.serviceObject.getBounds().getNorthEast());
                this.boundsObject.extend(b.serviceObject.getBounds().getSouthWest())
            }
        }
        p = this.map_options.bounds;
        a = 0;
        for (f = p.length; a < f; a++) {
            b = p[a];
            b = this.createLatLng(b.lat, b.lng);
            this.boundsObject.extend(b)
        }
        if (this.map_options.auto_adjust || this.map_options.bounds.length > 0) {
            if (this.map_options.auto_zoom)
                return this.fitBounds();
            b = this.boundsObject.getCenter();
            this.map_options.center_latitude = b.lat();
            this.map_options.center_longitude = b.lng();
            return this.serviceObject.setCenter(b)
        }
    };
    g.prototype.create_kml = function() {
        var b, c, f, g, a;
        g = this.kml;
        a = [];
        c = 0;
        for (f = g.length; c < f; c++) {
            b = g[c];
            a.push(b.serviceObject = this.createKmlLayer(b))
        }
        return a
    };
    g.prototype.exists = function(b) {
        return b !== "" && typeof b !== "undefined"
    };
    g.prototype.randomize = function(b, c) {
        var f, g;
        g = this.markers_conf.max_random_distance * this.random();
        f = this.markers_conf.max_random_distance * this.random();
        f = parseFloat(b) + 180 / Math.PI * (f / 6378137);
        g = parseFloat(c) + 90 / Math.PI * (g / 6378137) / Math.cos(b);
        return [f, g]
    };
    g.prototype.mergeObjectWithDefault = function(b, c) {
        var f, g, a;
        f = {};
        for (g in b) {
            a = b[g];
            f[g] = a
        }
        for (g in c) {
            a = c[g];
            f[g] == null && (f[g] = a)
        }
        return f
    };
    g.prototype.mergeWithDefault = function(b) {
        this[b] = this.mergeObjectWithDefault(this[b], this["default_" + b]);
        return true
    };
    g.prototype.random = function() {
        return Math.random() * 2 - 1
    };
    this.Gmaps4Rails = g
}).call(this);
(function() {
    var c = {}.hasOwnProperty, g = function() {
        g.__super__.constructor.apply(this, arguments);
        this.map_options = {disableDefaultUI: false,disableDoubleClickZoom: false,type: "ROADMAP"};
        this.markers_conf = {clusterer_gridSize: 50,clusterer_maxZoom: 5,custom_cluster_pictures: null,custom_infowindow_class: null};
        this.mergeWithDefault("map_options");
        this.mergeWithDefault("markers_conf");
        this.kml_options = {clickable: true,preserveViewport: false,suppressInfoWindows: false};
        this.polygons_conf = {strokeColor: "#FFAA00",
            strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#000000",fillOpacity: 0.35,clickable: false};
        this.polylines_conf = {strokeColor: "#FF0000",strokeOpacity: 1,strokeWeight: 2,clickable: false,zIndex: null};
        this.circles_conf = {fillColor: "#00AAFF",fillOpacity: 0.35,strokeColor: "#FFAA00",strokeOpacity: 0.8,strokeWeight: 2,clickable: false,zIndex: null};
        this.direction_conf = {panel_id: null,display_panel: false,origin: null,destination: null,waypoints: [],optimizeWaypoints: false,unitSystem: "METRIC",avoidHighways: false,avoidTolls: false,
            region: null,travelMode: "DRIVING"}
    }, b = g, d = Gmaps4Rails, f = function() {
        this.constructor = b
    }, m;
    for (m in d)
        c.call(d, m) && (b[m] = d[m]);
    f.prototype = d.prototype;
    b.prototype = new f;
    b.__super__ = d.prototype;
    g.prototype.createPoint = function(a, b) {
        return new google.maps.Point(a, b)
    };
    g.prototype.createLatLng = function(a, b) {
        return new google.maps.LatLng(a, b)
    };
    g.prototype.createLatLngBounds = function() {
        return new google.maps.LatLngBounds
    };
    g.prototype.createMap = function() {
        var a;
        a = {maxZoom: this.map_options.maxZoom,minZoom: this.map_options.minZoom,
            zoom: this.map_options.zoom,center: this.createLatLng(this.map_options.center_latitude, this.map_options.center_longitude),mapTypeId: google.maps.MapTypeId[this.map_options.type],mapTypeControl: this.map_options.mapTypeControl,disableDefaultUI: this.map_options.disableDefaultUI,disableDoubleClickZoom: this.map_options.disableDoubleClickZoom,draggable: this.map_options.draggable};
        a = this.mergeObjectWithDefault(this.map_options.raw, a);
        return new google.maps.Map(document.getElementById(this.map_options.id), a)
    };
    g.prototype.createMarkerImage = function(a, b, c, d, f) {
        return new google.maps.MarkerImage(a, b, c, d, f)
    };
    g.prototype.createSize = function(a, b) {
        return new google.maps.Size(a, b)
    };
    g.prototype.createMarker = function(a) {
        var b, c, d;
        c = this.createLatLng(a.Lat, a.Lng);
        if (a.marker_picture === "" && a.rich_marker === null) {
            a = {position: c,map: this.serviceObject,title: a.marker_title,draggable: a.marker_draggable,zIndex: a.zindex};
            a = this.mergeObjectWithDefault(this.markers_conf.raw, a);
            return new google.maps.Marker(a)
        }
        if (a.rich_marker !==
            null)
            return new RichMarker({position: c,map: this.serviceObject,draggable: a.marker_draggable,content: a.rich_marker,flat: a.marker_anchor === null ? false : a.marker_anchor[1],anchor: a.marker_anchor === null ? 0 : a.marker_anchor[0],zIndex: a.zindex});
        b = this.createImageAnchorPosition(a.marker_anchor);
        d = this.createImageAnchorPosition(a.shadow_anchor);
        b = this.createOrRetrieveImage(a.marker_picture, a.marker_width, a.marker_height, b);
        d = this.createOrRetrieveImage(a.shadow_picture, a.shadow_width, a.shadow_height, d);
        a = {position: c,
            map: this.serviceObject,icon: b,title: a.marker_title,draggable: a.marker_draggable,shadow: d,zIndex: a.zindex};
        a = this.mergeObjectWithDefault(this.markers_conf.raw, a);
        return new google.maps.Marker(a)
    };
    g.prototype.includeMarkerImage = function(a, b) {
        var c, d, f, g;
        c = f = 0;
        for (g = a.length; f < g; c = ++f) {
            d = a[c];
            if (d.url === b)
                return c
        }
        return false
    };
    g.prototype.createOrRetrieveImage = function(a, b, c, d) {
        var f;
        if (a === "" || a === null)
            return null;
        f = this.includeMarkerImage(this.markerImages, a);
        switch (f) {
            case false:
                a = this.createMarkerImage(a,
                    this.createSize(b, c), null, d, null);
                this.markerImages.push(a);
                return a;
            default:
                return typeof f === "number" ? this.markerImages[f] : false
        }
    };
    g.prototype.clearMarkers = function() {
        var a, b, c, d, f;
        d = this.markers;
        f = [];
        b = 0;
        for (c = d.length; b < c; b++) {
            a = d[b];
            f.push(this.clearMarker(a))
        }
        return f
    };
    g.prototype.showMarkers = function() {
        var a, b, c, d, f;
        d = this.markers;
        f = [];
        b = 0;
        for (c = d.length; b < c; b++) {
            a = d[b];
            f.push(this.showMarker(a))
        }
        return f
    };
    g.prototype.hideMarkers = function() {
        var a, b, c, d, f;
        d = this.markers;
        f = [];
        b = 0;
        for (c = d.length; b <
            c; b++) {
            a = d[b];
            f.push(this.hideMarker(a))
        }
        return f
    };
    g.prototype.clearMarker = function(a) {
        return a.serviceObject.setMap(null)
    };
    g.prototype.showMarker = function(a) {
        return a.serviceObject.setVisible(true)
    };
    g.prototype.hideMarker = function(a) {
        return a.serviceObject.setVisible(false)
    };
    g.prototype.extendBoundsWithMarkers = function() {
        var a, b, c, d, f;
        d = this.markers;
        f = [];
        b = 0;
        for (c = d.length; b < c; b++) {
            a = d[b];
            f.push(this.boundsObject.extend(a.serviceObject.position))
        }
        return f
    };
    g.prototype.createClusterer = function(a) {
        return new MarkerClusterer(this.serviceObject,
            a, {maxZoom: this.markers_conf.clusterer_maxZoom,gridSize: this.markers_conf.clusterer_gridSize,styles: this.customClusterer()})
    };
    g.prototype.clearClusterer = function() {
        return this.markerClusterer.clearMarkers()
    };
    g.prototype.clusterize = function() {
        var a, b, c, d, f;
        if (this.markers_conf.do_clustering === true) {
            this.markerClusterer !== null && this.clearClusterer();
            b = [];
            f = this.markers;
            c = 0;
            for (d = f.length; c < d; c++) {
                a = f[c];
                b.push(a.serviceObject)
            }
            return this.markerClusterer = this.createClusterer(b)
        }
    };
    g.prototype.createInfoWindow =
        function(a) {
            var b;
            if (typeof this.jsTemplate === "function" || a.description != null) {
                if (typeof this.jsTemplate === "function")
                    a.description = this.jsTemplate(a);
                if (this.markers_conf.custom_infowindow_class !== null) {
                    b = document.createElement("div");
                    b.setAttribute("class", this.markers_conf.custom_infowindow_class);
                    b.innerHTML = a.description;
                    a.infowindow = new InfoBox(this.infobox(b))
                } else
                    a.infowindow = new google.maps.InfoWindow({content: a.description});
                return google.maps.event.addListener(a.serviceObject, "click",
                    this.openInfoWindow(this, a.infowindow, a.serviceObject))
            }
        };
    g.prototype.openInfoWindow = function(a, b, c) {
        return function() {
            a.visibleInfoWindow !== null && a.visibleInfoWindow.close();
            b.open(a.serviceObject, c);
            return a.visibleInfoWindow = b
        }
    };
    g.prototype.createKmlLayer = function(a) {
        var b;
        b = a.options || {};
        b = this.mergeObjectWithDefault(b, this.kml_options);
        a = new google.maps.KmlLayer(a.url, b);
        a.setMap(this.serviceObject);
        return a
    };
    g.prototype.fitBounds = function() {
        if (!this.boundsObject.isEmpty())
            return this.serviceObject.fitBounds(this.boundsObject)
    };
    g.prototype.centerMapOnUser = function() {
        return this.serviceObject.setCenter(this.userLocation)
    };
    this.Gmaps4RailsGoogle = g
}).call(this);
(function() {
    window.SocialShareButton = {openUrl: function(c) {
        window.open(c);
        return false
    },share: function(c) {
        var g, b, d;
        g = $(c).data("site");
        b = encodeURIComponent($(c).parent().data("title").replace("|SUB|", $(c).data("substitute")));
        c = encodeURIComponent($(c).parent().data("img"));
        d = encodeURIComponent(location.href);
        switch (g) {
            case "weibo":
                SocialShareButton.openUrl("http://v.t.sina.com.cn/share/share.php?url=" + d + "&pic=" + c + "&title=" + b + "&content=utf-8");
                break;
            case "twitter":
                SocialShareButton.openUrl("https://twitter.com/home?status=" +
                    b + ": " + d);
                break;
            case "douban":
                SocialShareButton.openUrl("http://www.douban.com/recommend/?url=" + d + "&title=" + b + "&image=" + c);
                break;
            case "facebook":
                SocialShareButton.openUrl("http://www.facebook.com/sharer.php?t=" + b + "&u=" + d);
                break;
            case "qq":
                SocialShareButton.openUrl("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + d + "&title=" + b + "&pics=" + c);
                break;
            case "tqq":
                SocialShareButton.openUrl("http://share.v.t.qq.com/index.php?c=share&a=index&url=" + d + "&title=" + b + "&pic=" + c);
                break;
            case "baidu":
                SocialShareButton.openUrl("http://apps.hi.baidu.com/share/?url=" +
                    d + "&title=" + b + "&content=");
                break;
            case "kaixin001":
                SocialShareButton.openUrl("http://www.kaixin001.com/rest/records.php?url=" + d + "&content=" + b + "&style=11&pic=" + c);
                break;
            case "renren":
                SocialShareButton.openUrl("http://widget.renren.com/dialog/share?resourceUrl=" + d + "&title=" + b + "&description=");
                break;
            case "google_plus":
                SocialShareButton.openUrl("https://plus.google.com/share?url=" + d + "&t=" + b)
        }
        return false
    }}
}).call(this);
function BestInPlaceEditor(c) {
    this.element = c;
    this.initOptions();
    this.bindForm();
    this.initNil();
    jQuery(this.activator).bind("click", {editor: this}, this.clickHandler)
}
BestInPlaceEditor.prototype = {activate: function() {
    var c = "", c = this.isNil ? "" : this.original_content ? this.original_content : this.element.html();
    this.oldValue = this.isNil ? "-" : this.element.html();
    this.display_value = c;
    jQuery(this.activator).unbind("click", this.clickHandler);
    this.activateForm();
    this.element.trigger(jQuery.Event("best_in_place:activate"))
},abort: function() {
    this.isNil ? this.element.html(this.nil) : this.element.html(this.oldValue);
    jQuery(this.activator).bind("click", {editor: this}, this.clickHandler);
    this.element.trigger(jQuery.Event("best_in_place:abort"));
    this.element.trigger(jQuery.Event("best_in_place:deactivate"))
},abortIfConfirm: function() {
    confirm("Are you sure you want to discard your changes?") && this.abort()
},update: function() {
    var c = this;
    if (this.formType in {input: 1,textarea: 1} && this.getValue() == this.oldValue) {
        this.abort();
        return true
    }
    this.isNil = false;
    c.ajax({type: "post",dataType: "text",data: c.requestData(),success: function(b) {
        c.loadSuccessCallback(b)
    },error: function(b, d) {
        c.loadErrorCallback(b,
            d)
    }});
    if (this.formType == "select") {
        var g = this.getValue();
        jQuery.each(this.values, function(b, d) {
            g == d[0] && c.element.html(d[1])
        })
    } else
        this.formType == "checkbox" ? c.element.html(this.getValue() ? this.values[1] : this.values[0]) : c.element.html(this.getValue() != "" ? this.getValue() : this.nil);
    c.element.trigger(jQuery.Event("best_in_place:update"))
},activateForm: function() {
    alert("The form was not properly initialized. activateForm is unbound")
},initOptions: function() {
    var c = this;
    c.element.parents().each(function() {
        c.url =
            c.url || jQuery(this).attr("data-url");
        c.collection = c.collection || jQuery(this).attr("data-collection");
        c.formType = c.formType || jQuery(this).attr("data-type");
        c.objectName = c.objectName || jQuery(this).attr("data-object");
        c.attributeName = c.attributeName || jQuery(this).attr("data-attribute");
        c.activator = c.activator || jQuery(this).attr("data-activator");
        c.okButton = c.okButton || jQuery(this).attr("data-ok-button");
        c.cancelButton = c.cancelButton || jQuery(this).attr("data-cancel-button");
        c.nil = c.nil || jQuery(this).attr("data-nil");
        c.inner_class = c.inner_class || jQuery(this).attr("data-inner-class");
        c.html_attrs = c.html_attrs || jQuery(this).attr("data-html-attrs");
        c.original_content = c.original_content || jQuery(this).attr("data-original-content")
    });
    c.element.parents().each(function() {
        var g = this.id.match(/^(\w+)_(\d+)$/i);
        if (g)
            c.objectName = c.objectName || g[1]
    });
    c.url = c.element.attr("data-url") || c.url || document.location.pathname;
    c.collection = c.element.attr("data-collection") || c.collection;
    c.formType = c.element.attr("data-type") || c.formtype ||
        "input";
    c.objectName = c.element.attr("data-object") || c.objectName;
    c.attributeName = c.element.attr("data-attribute") || c.attributeName;
    c.activator = c.element.attr("data-activator") || c.element;
    c.okButton = c.element.attr("data-ok-button") || c.okButton;
    c.cancelButton = c.element.attr("data-cancel-button") || c.cancelButton;
    c.nil = c.element.attr("data-nil") || c.nil || "-";
    c.inner_class = c.element.attr("data-inner-class") || c.inner_class || null;
    c.html_attrs = c.element.attr("data-html-attrs") || c.html_attrs;
    c.original_content =
        c.element.attr("data-original-content") || c.original_content;
    c.sanitize = c.element.attr("data-sanitize") ? c.element.attr("data-sanitize") == "true" : true;
    if ((c.formType == "select" || c.formType == "checkbox") && c.collection !== null)
        c.values = jQuery.parseJSON(c.collection)
},bindForm: function() {
    this.activateForm = BestInPlaceEditor.forms[this.formType].activateForm;
    this.getValue = BestInPlaceEditor.forms[this.formType].getValue
},initNil: function() {
    if (this.element.html() == "") {
        this.isNil = true;
        this.element.html(this.nil)
    }
},
    getValue: function() {
        alert("The form was not properly initialized. getValue is unbound")
    },sanitizeValue: function(c) {
        if (this.sanitize) {
            var g = document.createElement("DIV");
            g.innerHTML = c;
            c = jQuery.trim(g.textContent || g.innerText).replace(/"/g, "&quot;")
        }
        return jQuery.trim(c)
    },requestData: function() {
        csrf_token = jQuery("meta[name=csrf-token]").attr("content");
        csrf_param = jQuery("meta[name=csrf-param]").attr("content");
        var c;
        c = "_method=put" + ("&" + this.objectName + "[" + this.attributeName + "]=" + encodeURIComponent(this.getValue()));
        csrf_param !== void 0 && csrf_token !== void 0 && (c = c + ("&" + csrf_param + "=" + encodeURIComponent(csrf_token)));
        return c
    },ajax: function(c) {
        c.url = this.url;
        c.beforeSend = function(c) {
            c.setRequestHeader("Accept", "application/json")
        };
        return jQuery.ajax(c)
    },loadSuccessCallback: function(c) {
        var g = jQuery.parseJSON(jQuery.trim(c));
        if (g != null && g.hasOwnProperty("display_as")) {
            this.element.attr("data-original-content", this.element.html());
            this.original_content = this.element.html();
            this.element.html(g.display_as)
        }
        this.element.trigger(jQuery.Event("ajax:success"),
            c);
        jQuery(this.activator).bind("click", {editor: this}, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"))
    },loadErrorCallback: function(c) {
        this.element.html(this.oldValue);
        jQuery.each(jQuery.parseJSON(c.responseText), function(c, b) {
            typeof b == "object" && (b = c + " " + b.toString());
            jQuery("<span class='flash-error'></span>").html(b).purr()
        });
        this.element.trigger(jQuery.Event("ajax:error"));
        jQuery(this.activator).bind("click", {editor: this}, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"))
    },
    clickHandler: function(c) {
        c.preventDefault();
        c.data.editor.activate()
    },setHtmlAttributes: function() {
        var c = this.element.find(this.formType), g = jQuery.parseJSON(this.html_attrs), b;
        for (b in g)
            c.attr(b, g[b])
    }};
BestInPlaceEditor.forms = {input: {activateForm: function() {
    var c;
    c = '<form class="form_in_place" action="javascript:void(0)" style="display:inline;">' + ('<input type="text" name="' + this.attributeName + '" value="' + this.sanitizeValue(this.display_value) + '"');
    this.inner_class != null && (c = c + (' class="' + this.inner_class + '"'));
    c = c + ">";
    this.okButton && (c = c + ('<input type="submit" value="' + this.okButton + '" />'));
    this.cancelButton && (c = c + ('<input type="button" value="' + this.cancelButton + '" />'));
    this.element.html(c +
        "</form>");
    this.setHtmlAttributes();
    this.element.find("input[type='text']")[0].select();
    this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
    this.cancelButton && this.element.find("input[type='button']").bind("click", {editor: this}, BestInPlaceEditor.forms.input.cancelButtonHandler);
    this.element.find("input[type='text']").bind("blur", {editor: this}, BestInPlaceEditor.forms.input.inputBlurHandler);
    this.element.find("input[type='text']").bind("keyup", {editor: this},
        BestInPlaceEditor.forms.input.keyupHandler);
    this.blurTimer = null;
    this.userClicked = false
},getValue: function() {
    return this.sanitizeValue(this.element.find("input").val())
},inputBlurHandler: function(c) {
    c.data.editor.okButton ? c.data.editor.blurTimer = setTimeout(function() {
        c.data.editor.userClicked || c.data.editor.abort()
    }, 500) : c.data.editor.cancelButton ? c.data.editor.blurTimer = setTimeout(function() {
        c.data.editor.userClicked || c.data.editor.update()
    }, 500) : c.data.editor.update()
},submitHandler: function(c) {
    c.data.editor.userClicked =
        true;
    clearTimeout(c.data.editor.blurTimer);
    c.data.editor.update()
},cancelButtonHandler: function(c) {
    c.data.editor.userClicked = true;
    clearTimeout(c.data.editor.blurTimer);
    c.data.editor.abort();
    c.stopPropagation()
},keyupHandler: function(c) {
    c.keyCode == 27 && c.data.editor.abort()
}},date: {activateForm: function() {
    var c = this, g;
    g = '<form class="form_in_place" action="javascript:void(0)" style="display:inline;">' + ('<input type="text" name="' + this.attributeName + '" value="' + this.sanitizeValue(this.display_value) +
        '"');
    this.inner_class != null && (g = g + (' class="' + this.inner_class + '"'));
    this.element.html(g + "></form>");
    this.setHtmlAttributes();
    this.element.find("input")[0].select();
    this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
    this.element.find("input").bind("keyup", {editor: this}, BestInPlaceEditor.forms.input.keyupHandler);
    this.element.find("input").datepicker({onClose: function() {
        c.update()
    }}).datepicker("show")
},getValue: function() {
    return this.sanitizeValue(this.element.find("input").val())
},
    submitHandler: function(c) {
        c.data.editor.update()
    },keyupHandler: function(c) {
        c.keyCode == 27 && c.data.editor.abort()
    }},select: {activateForm: function() {
    var c = "<form action='javascript:void(0)' style='display:inline;'><select>", g = "", b = this.oldValue;
    jQuery.each(this.values, function(d, f) {
        g = f[1] == b ? "selected='selected'" : "";
        c = c + ("<option value='" + f[0] + "' " + g + ">" + f[1] + "</option>")
    });
    c = c + "</select></form>";
    this.element.html(c);
    this.setHtmlAttributes();
    this.element.find("select").bind("change", {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
    this.element.find("select").bind("blur", {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
    this.element.find("select").bind("keyup", {editor: this}, BestInPlaceEditor.forms.select.keyupHandler);
    this.element.find("select")[0].focus()
},getValue: function() {
    return this.sanitizeValue(this.element.find("select").val())
},blurHandler: function(c) {
    c.data.editor.update()
},keyupHandler: function(c) {
    c.keyCode == 27 && c.data.editor.abort()
}},checkbox: {activateForm: function() {
    this.element.html(Boolean(this.oldValue !=
        this.values[1]) ? this.values[1] : this.values[0]);
    this.setHtmlAttributes();
    this.update()
},getValue: function() {
    return Boolean(this.element.html() == this.values[1])
}},textarea: {activateForm: function() {
    width = this.element.css("width");
    height = this.element.css("height");
    var c;
    c = '<form action="javascript:void(0)" style="display:inline;"><textarea>' + this.sanitizeValue(this.display_value);
    c = c + "</textarea>";
    this.okButton && (c = c + ('<input type="submit" value="' + this.okButton + '" />'));
    this.cancelButton && (c = c + ('<input type="button" value="' +
        this.cancelButton + '" />'));
    this.element.html(c + "</form>");
    this.setHtmlAttributes();
    jQuery(this.element.find("textarea")[0]).css({"min-width": width,"min-height": height});
    jQuery(this.element.find("textarea")[0]).elastic();
    this.element.find("textarea")[0].focus();
    this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.textarea.submitHandler);
    this.cancelButton && this.element.find("input[type='button']").bind("click", {editor: this}, BestInPlaceEditor.forms.textarea.cancelButtonHandler);
    this.element.find("textarea").bind("blur", {editor: this}, BestInPlaceEditor.forms.textarea.blurHandler);
    this.element.find("textarea").bind("keyup", {editor: this}, BestInPlaceEditor.forms.textarea.keyupHandler);
    this.blurTimer = null;
    this.userClicked = false
},getValue: function() {
    return this.sanitizeValue(this.element.find("textarea").val())
},blurHandler: function(c) {
    c.data.editor.okButton ? c.data.editor.blurTimer = setTimeout(function() {
        c.data.editor.userClicked || c.data.editor.abortIfConfirm()
    }, 500) : c.data.editor.cancelButton ?
        c.data.editor.blurTimer = setTimeout(function() {
            c.data.editor.userClicked || c.data.editor.update()
        }, 500) : c.data.editor.update()
},submitHandler: function(c) {
    c.data.editor.userClicked = true;
    clearTimeout(c.data.editor.blurTimer);
    c.data.editor.update()
},cancelButtonHandler: function(c) {
    c.data.editor.userClicked = true;
    clearTimeout(c.data.editor.blurTimer);
    c.data.editor.abortIfConfirm();
    c.stopPropagation()
},keyupHandler: function(c) {
    c.keyCode == 27 && c.data.editor.abortIfConfirm()
}}};
jQuery.fn.best_in_place = function() {
    function c(c) {
        if (!c.data("bestInPlaceEditor")) {
            c.data("bestInPlaceEditor", new BestInPlaceEditor(c));
            return true
        }
    }
    jQuery(this.context).delegate(this.selector, "click", function() {
        var g = jQuery(this);
        c(g) && g.click()
    });
    this.each(function() {
        c(jQuery(this))
    });
    return this
};
(function(c) {
    c.fn.extend({elastic: function() {
        var g = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontSize", "lineHeight", "fontFamily", "width", "fontWeight"];
        return this.each(function() {
            function b(a, b) {
                curratedHeight = Math.floor(parseInt(a, 10));
                f.height() != curratedHeight && f.css({height: curratedHeight + "px",overflow: b})
            }
            function d() {
                var c = f.val().replace(/&/g, "&amp;").replace(/  /g, "&nbsp;").replace(/<|>/g, "&gt;").replace(/\n/g, "<br />"), d = m.html().replace(/<br>/ig, "<br />");
                if (c + "&nbsp;" !=
                    d) {
                    m.html(c + "&nbsp;");
                    if (Math.abs(m.height() + a - f.height()) > 3) {
                        c = m.height() + a;
                        c >= p ? b(p, "auto") : c <= r ? b(r, "hidden") : b(c, "hidden")
                    }
                }
            }
            if (this.type != "textarea")
                return false;
            var f = c(this), m = c("<div />").css({position: "absolute",display: "none","word-wrap": "break-word"}), a = parseInt(f.css("line-height"), 10) || parseInt(f.css("font-size"), "10"), r = parseInt(f.css("height"), 10) || a * 3, p = parseInt(f.css("max-height"), 10) || Number.MAX_VALUE, q = 0;
            if (p < 0)
                p = Number.MAX_VALUE;
            m.appendTo(f.parent());
            for (q = g.length; q--; )
                m.css(g[q].toString(),
                    f.css(g[q].toString()));
            f.css({overflow: "hidden"});
            f.bind("keyup change cut paste", function() {
                d()
            });
            f.bind("blur", function() {
                m.height() < p && (m.height() > r ? f.height(m.height()) : f.height(r))
            });
            f.live("input paste", function() {
                setTimeout(d, 250)
            });
            d()
        })
    }})
})(jQuery);
(function(c, g) {
    function b() {
        return true
    }
    function d() {
        return false
    }
    var f = c.document;
    f.createElement("video");
    f.createElement("audio");
    var m = function(b, c, d) {
        if (typeof b == "string") {
            b.indexOf("#") === 0 && (b = b.slice(1));
            if (a.players[b])
                return a.players[b];
            b = a.el(b)
        }
        if (!b || !b.nodeName)
            throw new TypeError("The element or ID supplied is not valid. (VideoJS)");
        return b.player || new a.Player(b, c, d)
    }, a = m;
    m.players = {};
    m.options = {techOrder: ["html5", "flash"],html5: {},flash: {swf: "http://vjs.zencdn.net/c/video-js.swf"},
        width: "auto",height: "auto",defaultVolume: 0,components: {posterImage: {},textTrackDisplay: {},loadingSpinner: {},bigPlayButton: {},controlBar: {}}};
    a.options.flash.swf = "http://vjs.zencdn.net/3.2/video-js.swf";
    a.merge = function(a, b, c) {
        b || (b = {});
        for (var d in b)
            if (b.hasOwnProperty(d) && (!c || !a.hasOwnProperty(d)))
                a[d] = b[d];
        return a
    };
    a.extend = function(a) {
        this.merge(this, a, true)
    };
    a.extend({tech: {},controlSets: {},isIE: function() {
        return !+"\v1"
    },isFF: function() {
        return !!a.ua.match("Firefox")
    },isIPad: function() {
        return navigator.userAgent.match(/iPad/i) !==
            null
    },isIPhone: function() {
        return navigator.userAgent.match(/iPhone/i) !== null
    },isIOS: function() {
        return m.isIPhone() || m.isIPad()
    },iOSVersion: function() {
        var a = navigator.userAgent.match(/OS (\d+)_/i);
        if (a && a[1])
            return a[1]
    },isAndroid: function() {
        return navigator.userAgent.match(/Android.*AppleWebKit/i) !== null
    },androidVersion: function() {
        var a = navigator.userAgent.match(/Android (\d+)\./i);
        if (a && a[1])
            return a[1]
    },testVid: f.createElement("video"),ua: navigator.userAgent,support: {},each: function(a, b) {
        if (a &&
            a.length !== 0)
            for (var c = 0, d = a.length; c < d; c++)
                b.call(this, a[c], c)
    },eachProp: function(a, b) {
        if (a)
            for (var c in a)
                a.hasOwnProperty(c) && b.call(this, c, a[c])
    },el: function(a) {
        return f.getElementById(a)
    },createElement: function(a, b) {
        var c = f.createElement(a), d;
        for (d in b)
            b.hasOwnProperty(d) && (d.indexOf("-") !== -1 ? c.setAttribute(d, b[d]) : c[d] = b[d]);
        return c
    },insertFirst: function(a, b) {
        b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a)
    },addClass: function(a, b) {
        if ((" " + a.className + " ").indexOf(" " + b + " ") ==
            -1)
            a.className = a.className === "" ? b : a.className + " " + b
    },removeClass: function(a, b) {
        if (a.className.indexOf(b) != -1) {
            var c = a.className.split(" ");
            c.splice(c.indexOf(b), 1);
            a.className = c.join(" ")
        }
    },remove: function(a, b) {
        if (b) {
            var c = b.indexOf(a);
            if (c != -1)
                return b.splice(c, 1)
        }
    },blockTextSelection: function() {
        f.body.focus();
        f.onselectstart = function() {
            return false
        }
    },unblockTextSelection: function() {
        f.onselectstart = function() {
            return true
        }
    },formatTime: function(a, b) {
        var b = b || a, c = Math.floor(a % 60), d = Math.floor(a / 60 %
            60), f = Math.floor(a / 3600), g = Math.floor(b / 60 % 60), m = Math.floor(b / 3600), f = f > 0 || m > 0 ? f + ":" : "";
        return f + (((f || g >= 10) && d < 10 ? "0" + d : d) + ":") + (c < 10 ? "0" + c : c)
    },uc: function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    },getRelativePosition: function(b, c) {
        return Math.max(0, Math.min(1, (b - a.findPosX(c)) / c.offsetWidth))
    },getComputedStyleValue: function(a, b) {
        return c.getComputedStyle(a, null).getPropertyValue(b)
    },trim: function(a) {
        return a.toString().replace(/^\s+/, "").replace(/\s+$/, "")
    },round: function(a, b) {
        b || (b = 0);
        return Math.round(a *
            Math.pow(10, b)) / Math.pow(10, b)
    },isEmpty: function(a) {
        for (var b in a)
            return false;
        return true
    },createTimeRange: function(a, b) {
        return {length: 1,start: function() {
            return a
        },end: function() {
            return b
        }}
    },cache: {},guid: 1,expando: "vdata" + (new Date).getTime(),getData: function(b) {
        var c = b[a.expando];
        if (!c) {
            c = b[a.expando] = a.guid++;
            a.cache[c] = {}
        }
        return a.cache[c]
    },removeData: function(b) {
        var c = b[a.expando];
        if (c) {
            delete a.cache[c];
            try {
                delete b[a.expando]
            } catch (d) {
                b.removeAttribute ? b.removeAttribute(a.expando) : b[a.expando] =
                    null
            }
        }
    },proxy: function(b, c, d) {
        if (!c.guid)
            c.guid = a.guid++;
        var f = function() {
            return c.apply(b, arguments)
        };
        f.guid = d ? d + "_" + c.guid : c.guid;
        return f
    },get: function(b, d, f) {
        var g = b.indexOf("file:") == 0 || c.location.href.indexOf("file:") == 0 && b.indexOf("http:") == -1;
        typeof XMLHttpRequest == "undefined" && (XMLHttpRequest = function() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (b) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (c) {
            }
            throw Error("This browser does not support XMLHttpRequest.");
        });
        var m = new XMLHttpRequest;
        try {
            m.open("GET", b)
        } catch (o) {
            a.log("VideoJS XMLHttpRequest (open)", o);
            return false
        }
        m.onreadystatechange = a.proxy(this, function() {
            m.readyState == 4 && (m.status == 200 || g && m.status == 0 ? d(m.responseText) : f && f())
        });
        try {
            m.send()
        } catch (n) {
            a.log("VideoJS XMLHttpRequest (send)", n);
            f && f(n)
        }
    },setLocalStorage: function(b, d) {
        var f = c.localStorage || false;
        if (f)
            try {
                f[b] = d
            } catch (g) {
                g.code == 22 || g.code == 1014 ? a.log("LocalStorage Full (VideoJS)", g) : a.log("LocalStorage Error (VideoJS)", g)
            }
    },getAbsoluteURL: function(b) {
        if (!b.match(/^https?:\/\//))
            b =
                a.createElement("div", {innerHTML: '<a href="' + b + '">x</a>'}).firstChild.href;
        return b
    }});
    a.log = function() {
        a.log.history = a.log.history || [];
        a.log.history.push(arguments);
        if (c.console) {
            arguments.callee = arguments.callee.caller;
            var b = [].slice.call(arguments);
            typeof console.log === "object" ? a.log.apply.call(console.log, console, b) : console.log.apply(console, b)
        }
    };
    var r;
    try {
        console.log();
        r = c.console
    } catch (p) {
        r = c.console = {}
    }
    for (var q = function() {
    }, n = ["assert", "count", "debug", "dir", "dirxml", "error", "exception", "group",
        "groupCollapsed", "groupEnd", "info", "log", "timeStamp", "profile", "profileEnd", "time", "timeEnd", "trace", "warn"], s; s = n.pop(); )
        r[s] = r[s] || q;
    a.findPosX = "getBoundingClientRect" in f.documentElement ? function(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (d) {
        }
        if (!b)
            return 0;
        a = f.body;
        return b.left + (c.pageXOffset || a.scrollLeft) - (f.documentElement.clientLeft || a.clientLeft || 0)
    } : function(a) {
        for (var b = a.offsetLeft; a = obj.offsetParent; ) {
            a.className.indexOf("video-js");
            b = b + a.offsetLeft
        }
        return b
    };
    var u = false, v = /xyz/.test(function() {
        xyz
    }) ?
        /\b_super\b/ : /.*/;
    a.Class = function() {
    };
    a.Class.extend = function(a) {
        function b() {
            if (!u && this.init)
                return this.init.apply(this, arguments);
            if (!u)
                return arguments.callee.prototype.init()
        }
        var c = this.prototype;
        u = true;
        var d = new this;
        u = false;
        for (var f in a)
            d[f] = typeof a[f] == "function" && typeof c[f] == "function" && v.test(a[f]) ? function(a, b) {
                return function() {
                    var d = this._super;
                    this._super = c[a];
                    var f = b.apply(this, arguments);
                    this._super = d;
                    return f
                }
            }(f, a[f]) : a[f];
        b.prototype = d;
        b.constructor = b;
        b.extend = arguments.callee;
        return b
    };
    a.Component = a.Class.extend({init: function(b, c) {
        this.player = b;
        c = this.options = a.merge(this.options || {}, c);
        this.el = c.el ? c.el : this.createElement();
        this.initComponents()
    },destroy: function() {
    },createElement: function(b, c) {
        return a.createElement(b || "div", c)
    },buildCSSClass: function() {
        return ""
    },initComponents: function() {
        var a = this.options;
        a && a.components && this.eachProp(a.components, function(a, b) {
            var c = this.proxy(function() {
                this[a] = this.addComponent(a, b)
            });
            if (b.loadEvent)
                this.one(b.loadEvent, c);
            else
                c()
        })
    },
        addComponent: function(b, c) {
            var d;
            if (typeof b == "string") {
                c = c || {};
                d = c.componentClass || a.uc(b);
                d = new a[d](this.player || this, c)
            } else
                d = b;
            this.el.appendChild(d.el);
            return d
        },removeComponent: function(a) {
            this.el.removeChild(a.el)
        },show: function() {
            this.el.style.display = "block"
        },hide: function() {
            this.el.style.display = "none"
        },fadeIn: function() {
            this.removeClass("vjs-fade-out");
            this.addClass("vjs-fade-in")
        },fadeOut: function() {
            this.removeClass("vjs-fade-in");
            this.addClass("vjs-fade-out")
        },lockShowing: function() {
            var a =
                this.el.style;
            a.display = "block";
            a.opacity = 1;
            a.visiblity = "visible"
        },unlockShowing: function() {
            var a = this.el.style;
            a.display = "";
            a.opacity = "";
            a.visiblity = ""
        },addClass: function(b) {
            a.addClass(this.el, b)
        },removeClass: function(b) {
            a.removeClass(this.el, b)
        },addEvent: function(b, c) {
            return a.addEvent(this.el, b, a.proxy(this, c))
        },removeEvent: function(b, c) {
            return a.removeEvent(this.el, b, c)
        },triggerEvent: function(b, c) {
            return a.triggerEvent(this.el, b, c)
        },one: function(b, c) {
            a.one(this.el, b, a.proxy(this, c))
        },ready: function(a) {
            if (!a)
                return this;
            if (this.isReady)
                a.call(this);
            else {
                if (this.readyQueue === g)
                    this.readyQueue = [];
                this.readyQueue.push(a)
            }
            return this
        },triggerReady: function() {
            this.isReady = true;
            if (this.readyQueue && this.readyQueue.length > 0) {
                this.each(this.readyQueue, function(a) {
                    a.call(this)
                });
                this.readyQueue = [];
                this.triggerEvent("ready")
            }
        },each: function(b, c) {
            a.each.call(this, b, c)
        },eachProp: function(b, c) {
            a.eachProp.call(this, b, c)
        },extend: function(b) {
            a.merge(this, b)
        },proxy: function(b, c) {
            return a.proxy(this, b, c)
        }});
    a.Control = a.Component.extend({buildCSSClass: function() {
        return "vjs-control " +
            this._super()
    }});
    a.ControlBar = a.Component.extend({options: {loadEvent: "play",components: {playToggle: {},fullscreenToggle: {},currentTimeDisplay: {},timeDivider: {},durationDisplay: {},remainingTimeDisplay: {},progressControl: {},volumeControl: {},muteToggle: {}}},init: function(a, b) {
        this._super(a, b);
        a.addEvent("play", this.proxy(function() {
            this.fadeIn();
            this.player.addEvent("mouseover", this.proxy(this.fadeIn));
            this.player.addEvent("mouseout", this.proxy(this.fadeOut))
        }))
    },createElement: function() {
        return a.createElement("div",
            {className: "vjs-controls"})
    },fadeIn: function() {
        this._super();
        this.player.triggerEvent("controlsvisible")
    },fadeOut: function() {
        this._super();
        this.player.triggerEvent("controlshidden")
    },lockShowing: function() {
        this.el.style.opacity = "1"
    }});
    a.Button = a.Control.extend({init: function(a, b) {
        this._super(a, b);
        this.addEvent("click", this.onClick);
        this.addEvent("focus", this.onFocus);
        this.addEvent("blur", this.onBlur)
    },createElement: function(b, c) {
        c = a.merge({className: this.buildCSSClass(),innerHTML: '<div><span class="vjs-control-text">' +
            (this.buttonText || "Need Text") + "</span></div>",role: "button",tabIndex: 0}, c);
        return this._super(b, c)
    },onClick: function() {
    },onFocus: function() {
        a.addEvent(f, "keyup", a.proxy(this, this.onKeyPress))
    },onKeyPress: function(a) {
        if (a.which == 32 || a.which == 13) {
            a.preventDefault();
            this.onClick()
        }
    },onBlur: function() {
        a.removeEvent(f, "keyup", a.proxy(this, this.onKeyPress))
    }});
    a.PlayButton = a.Button.extend({buttonText: "Play",buildCSSClass: function() {
        return "vjs-play-button " + this._super()
    },onClick: function() {
        this.player.play()
    }});
    a.PauseButton = a.Button.extend({buttonText: "Pause",buildCSSClass: function() {
        return "vjs-pause-button " + this._super()
    },onClick: function() {
        this.player.pause()
    }});
    a.PlayToggle = a.Button.extend({buttonText: "Play",init: function(b, c) {
        this._super(b, c);
        b.addEvent("play", a.proxy(this, this.onPlay));
        b.addEvent("pause", a.proxy(this, this.onPause))
    },buildCSSClass: function() {
        return "vjs-play-control " + this._super()
    },onClick: function() {
        this.player.paused() ? this.player.play() : this.player.pause()
    },onPlay: function() {
        a.removeClass(this.el,
            "vjs-paused");
        a.addClass(this.el, "vjs-playing")
    },onPause: function() {
        a.removeClass(this.el, "vjs-playing");
        a.addClass(this.el, "vjs-paused")
    }});
    a.FullscreenToggle = a.Button.extend({buttonText: "Fullscreen",buildCSSClass: function() {
        return "vjs-fullscreen-control " + this._super()
    },onClick: function() {
        this.player.isFullScreen ? this.player.cancelFullScreen() : this.player.requestFullScreen()
    }});
    a.BigPlayButton = a.Button.extend({init: function(b, c) {
        this._super(b, c);
        b.addEvent("play", a.proxy(this, this.hide));
        b.addEvent("ended",
            a.proxy(this, this.show))
    },createElement: function() {
        return this._super("div", {className: "vjs-big-play-button",innerHTML: "<span></span>"})
    },onClick: function() {
        this.player.currentTime() && this.player.currentTime(0);
        this.player.play()
    }});
    a.LoadingSpinner = a.Component.extend({init: function(b, c) {
        this._super(b, c);
        b.addEvent("canplay", a.proxy(this, this.hide));
        b.addEvent("canplaythrough", a.proxy(this, this.hide));
        b.addEvent("playing", a.proxy(this, this.hide));
        b.addEvent("seeking", a.proxy(this, this.show));
        b.addEvent("error",
            a.proxy(this, this.show));
        b.addEvent("waiting", a.proxy(this, this.show))
    },createElement: function() {
        var a, b;
        if (typeof this.player.el.style.WebkitBorderRadius == "string" || typeof this.player.el.style.MozBorderRadius == "string" || typeof this.player.el.style.KhtmlBorderRadius == "string" || typeof this.player.el.style.borderRadius == "string") {
            a = "vjs-loading-spinner";
            b = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>"
        } else {
            a =
                "vjs-loading-spinner-fallback";
            b = ""
        }
        return this._super("div", {className: a,innerHTML: b})
    }});
    a.CurrentTimeDisplay = a.Component.extend({init: function(b, c) {
        this._super(b, c);
        b.addEvent("timeupdate", a.proxy(this, this.updateContent))
    },createElement: function() {
        var b = this._super("div", {className: "vjs-current-time vjs-time-controls vjs-control"});
        this.content = a.createElement("div", {className: "vjs-current-time-display",innerHTML: "0:00"});
        b.appendChild(a.createElement("div").appendChild(this.content));
        return b
    },
        updateContent: function() {
            var b = this.player.scrubbing ? this.player.values.currentTime : this.player.currentTime();
            this.content.innerHTML = a.formatTime(b, this.player.duration())
        }});
    a.DurationDisplay = a.Component.extend({init: function(b, c) {
        this._super(b, c);
        b.addEvent("timeupdate", a.proxy(this, this.updateContent))
    },createElement: function() {
        var b = this._super("div", {className: "vjs-duration vjs-time-controls vjs-control"});
        this.content = a.createElement("div", {className: "vjs-duration-display",innerHTML: "0:00"});
        b.appendChild(a.createElement("div").appendChild(this.content));
        return b
    },updateContent: function() {
        if (this.player.duration())
            this.content.innerHTML = a.formatTime(this.player.duration())
    }});
    a.TimeDivider = a.Component.extend({createElement: function() {
        return this._super("div", {className: "vjs-time-divider",innerHTML: "<div><span>/</span></div>"})
    }});
    a.RemainingTimeDisplay = a.Component.extend({init: function(b, c) {
        this._super(b, c);
        b.addEvent("timeupdate", a.proxy(this, this.updateContent))
    },createElement: function() {
        var b =
            this._super("div", {className: "vjs-remaining-time vjs-time-controls vjs-control"});
        this.content = a.createElement("div", {className: "vjs-remaining-time-display",innerHTML: "-0:00"});
        b.appendChild(a.createElement("div").appendChild(this.content));
        return b
    },updateContent: function() {
        if (this.player.duration())
            this.content.innerHTML = "-" + a.formatTime(this.player.remainingTime())
    }});
    a.Slider = a.Component.extend({init: function(b, c) {
        this._super(b, c);
        b.addEvent(this.playerEvent, a.proxy(this, this.update));
        this.addEvent("mousedown",
            this.onMouseDown);
        this.addEvent("focus", this.onFocus);
        this.addEvent("blur", this.onBlur);
        this.player.addEvent("controlsvisible", this.proxy(this.update));
        this.update()
    },createElement: function(b, c) {
        c = a.merge({role: "slider","aria-valuenow": 0,"aria-valuemin": 0,"aria-valuemax": 100,tabIndex: 0}, c);
        return this._super(b, c)
    },onMouseDown: function(b) {
        b.preventDefault();
        a.blockTextSelection();
        a.addEvent(f, "mousemove", a.proxy(this, this.onMouseMove));
        a.addEvent(f, "mouseup", a.proxy(this, this.onMouseUp));
        this.onMouseMove(b)
    },
        onMouseUp: function() {
            a.unblockTextSelection();
            a.removeEvent(f, "mousemove", this.onMouseMove, false);
            a.removeEvent(f, "mouseup", this.onMouseUp, false);
            this.update()
        },update: function() {
            var b, c = this.getPercent();
            handle = this.handle;
            bar = this.bar;
            isNaN(c) && (c = 0);
            b = c;
            if (handle) {
                b = this.el.offsetWidth;
                var d = handle.el.offsetWidth;
                b = d ? d / b : 0;
                adjustedProgress = c * (1 - b);
                b = adjustedProgress + b / 2;
                handle.el.style.left = a.round(adjustedProgress * 100, 2) + "%"
            }
            bar.el.style.width = a.round(b * 100, 2) + "%"
        },calculateDistance: function(b) {
            var c =
                this.el, d = a.findPosX(c), c = c.offsetWidth, f = this.handle;
            if (f) {
                f = f.el.offsetWidth;
                d = d + f / 2;
                c = c - f
            }
            return Math.max(0, Math.min(1, (b.pageX - d) / c))
        },onFocus: function() {
            a.addEvent(f, "keyup", a.proxy(this, this.onKeyPress))
        },onKeyPress: function(a) {
            if (a.which == 37) {
                a.preventDefault();
                this.stepBack()
            } else if (a.which == 39) {
                a.preventDefault();
                this.stepForward()
            }
        },onBlur: function() {
            a.removeEvent(f, "keyup", a.proxy(this, this.onKeyPress))
        }});
    a.ProgressControl = a.Component.extend({options: {components: {seekBar: {}}},createElement: function() {
        return this._super("div",
            {className: "vjs-progress-control vjs-control"})
    }});
    a.SeekBar = a.Slider.extend({options: {components: {loadProgressBar: {},bar: {componentClass: "PlayProgressBar"},handle: {componentClass: "SeekHandle"}}},playerEvent: "timeupdate",init: function(a, b) {
        this._super(a, b)
    },createElement: function() {
        return this._super("div", {className: "vjs-progress-holder"})
    },getPercent: function() {
        return this.player.currentTime() / this.player.duration()
    },onMouseDown: function(a) {
        this._super(a);
        this.player.scrubbing = true;
        this.videoWasPlaying =
            !this.player.paused();
        this.player.pause()
    },onMouseMove: function(a) {
        a = this.calculateDistance(a) * this.player.duration();
        a == this.player.duration() && (a = a - 0.1);
        this.player.currentTime(a)
    },onMouseUp: function(a) {
        this._super(a);
        this.player.scrubbing = false;
        this.videoWasPlaying && this.player.play()
    },stepForward: function() {
        this.player.currentTime(this.player.currentTime() + 1)
    },stepBack: function() {
        this.player.currentTime(this.player.currentTime() - 1)
    }});
    a.LoadProgressBar = a.Component.extend({init: function(b, c) {
        this._super(b,
            c);
        b.addEvent("progress", a.proxy(this, this.update))
    },createElement: function() {
        return this._super("div", {className: "vjs-load-progress",innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'})
    },update: function() {
        if (this.el.style)
            this.el.style.width = a.round(this.player.bufferedPercent() * 100, 2) + "%"
    }});
    a.PlayProgressBar = a.Component.extend({createElement: function() {
        return this._super("div", {className: "vjs-play-progress",innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'})
    }});
    a.SeekHandle =
        a.Component.extend({createElement: function() {
            return this._super("div", {className: "vjs-seek-handle",innerHTML: '<span class="vjs-control-text">00:00</span>'})
        }});
    a.VolumeControl = a.Component.extend({options: {components: {volumeBar: {}}},createElement: function() {
        return this._super("div", {className: "vjs-volume-control vjs-control"})
    }});
    a.VolumeBar = a.Slider.extend({options: {components: {bar: {componentClass: "VolumeLevel"},handle: {componentClass: "VolumeHandle"}}},playerEvent: "volumechange",createElement: function() {
        return this._super("div",
            {className: "vjs-volume-bar"})
    },onMouseMove: function(a) {
        this.player.volume(this.calculateDistance(a))
    },getPercent: function() {
        return this.player.volume()
    },stepForward: function() {
        this.player.volume(this.player.volume() + 0.1)
    },stepBack: function() {
        this.player.volume(this.player.volume() - 0.1)
    }});
    a.VolumeLevel = a.Component.extend({createElement: function() {
        return this._super("div", {className: "vjs-volume-level",innerHTML: '<span class="vjs-control-text"></span>'})
    }});
    a.VolumeHandle = a.Component.extend({createElement: function() {
        return this._super("div",
            {className: "vjs-volume-handle",innerHTML: '<span class="vjs-control-text"></span>'})
    }});
    a.MuteToggle = a.Button.extend({init: function(b, c) {
        this._super(b, c);
        b.addEvent("volumechange", a.proxy(this, this.update))
    },createElement: function() {
        return this._super("div", {className: "vjs-mute-control vjs-control",innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'})
    },onClick: function() {
        this.player.muted(this.player.muted() ? false : true)
    },update: function() {
        var b = this.player.volume(), c = 3;
        b == 0 || this.player.muted() ?
            c = 0 : b < 0.33 ? c = 1 : b < 0.67 && (c = 2);
        a.each.call(this, [0, 1, 2, 3], function(b) {
            a.removeClass(this.el, "vjs-vol-" + b)
        });
        a.addClass(this.el, "vjs-vol-" + c)
    }});
    a.PosterImage = a.Button.extend({init: function(b, c) {
        this._super(b, c);
        this.player.options.poster || this.hide();
        b.addEvent("play", a.proxy(this, this.hide))
    },createElement: function() {
        return a.createElement("img", {className: "vjs-poster",src: this.player.options.poster,tabIndex: -1})
    },onClick: function() {
        this.player.play()
    }});
    a.Menu = a.Component.extend({init: function(a,
                                                b) {
        this._super(a, b)
    },addItem: function(a) {
        this.addComponent(a);
        a.addEvent("click", this.proxy(function() {
            this.unlockShowing()
        }))
    },createElement: function() {
        return this._super("ul", {className: "vjs-menu"})
    }});
    a.MenuItem = a.Button.extend({init: function(a, b) {
        this._super(a, b);
        b.selected && this.addClass("vjs-selected")
    },createElement: function(b, c) {
        return this._super("li", a.merge({className: "vjs-menu-item",innerHTML: this.options.label}, c))
    },onClick: function() {
        this.selected(true)
    },selected: function(a) {
        a ? this.addClass("vjs-selected") :
            this.removeClass("vjs-selected")
    }});
    if (!Array.prototype.indexOf)
        Array.prototype.indexOf = function(a) {
            if (this === void 0 || this === null)
                throw new TypeError;
            var b = Object(this), c = b.length >>> 0;
            if (c === 0)
                return -1;
            var d = 0;
            if (arguments.length > 0) {
                d = Number(arguments[1]);
                d !== d ? d = 0 : d !== 0 && (d !== 1 / 0 && d !== -(1 / 0)) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))
            }
            if (d >= c)
                return -1;
            for (d = d >= 0 ? d : Math.max(c - Math.abs(d), 0); d < c; d++)
                if (d in b && b[d] === a)
                    return d;
            return -1
        };
    a.extend({addEvent: function(b, c, d) {
        var g = a.getData(b), m;
        if (g && !g.handler)
            g.handler =
                function(c) {
                    var c = a.fixEvent(c), d = a.getData(b).events[c.type];
                    if (d) {
                        var f = [];
                        a.each(d, function(a, b) {
                            f[b] = a
                        });
                        for (var d = 0, g = f.length; d < g; d++)
                            f[d].call(b, c)
                    }
                };
        if (!g.events)
            g.events = {};
        m = g.events[c];
        if (!m) {
            m = g.events[c] = [];
            f.addEventListener ? b.addEventListener(c, g.handler, false) : f.attachEvent && b.attachEvent("on" + c, g.handler)
        }
        if (!d.guid)
            d.guid = a.guid++;
        m.push(d)
    },removeEvent: function(b, c, d) {
        var f = a.getData(b);
        if (f.events)
            if (c) {
                if (f = f.events[c]) {
                    if (d && d.guid)
                        for (var g = 0; g < f.length; g++)
                            f[g].guid === d.guid &&
                            f.splice(g--, 1);
                    a.cleanUpEvents(b, c)
                }
            } else
                for (c in f.events)
                    a.cleanUpEvents(b, c)
    },cleanUpEvents: function(b, c) {
        var d = a.getData(b);
        if (d.events[c].length === 0) {
            delete d.events[c];
            f.removeEventListener ? b.removeEventListener(c, d.handler, false) : f.detachEvent && b.detachEvent("on" + c, d.handler)
        }
        if (a.isEmpty(d.events)) {
            delete d.events;
            delete d.handler
        }
        a.isEmpty(d) && a.removeData(b)
    },fixEvent: function(b) {
        if (b[a.expando])
            return b;
        for (var c = b, b = new a.Event(c), d = a.Event.props.length, m; d; ) {
            m = a.Event.props[--d];
            b[m] =
                c[m]
        }
        if (!b.target)
            b.target = b.srcElement || f;
        if (b.target.nodeType === 3)
            b.target = b.target.parentNode;
        if (!b.relatedTarget && b.fromElement)
            b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement;
        if (b.pageX == null && b.clientX != null) {
            d = b.target.ownerDocument || f;
            c = d.documentElement;
            d = d.body;
            b.pageX = b.clientX + (c && c.scrollLeft || d && d.scrollLeft || 0) - (c && c.clientLeft || d && d.clientLeft || 0);
            b.pageY = b.clientY + (c && c.scrollTop || d && d.scrollTop || 0) - (c && c.clientTop || d && d.clientTop || 0)
        }
        if (b.which == null && (b.charCode !=
            null || b.keyCode != null))
            b.which = b.charCode != null ? b.charCode : b.keyCode;
        if (!b.metaKey && b.ctrlKey)
            b.metaKey = b.ctrlKey;
        if (!b.which && b.button !== g)
            b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0;
        return b
    },triggerEvent: function(b, c) {
        var d = a.getData(b), f = c.type || c, m;
        if (d)
            m = d.handler;
        c = typeof c === "object" ? c[a.expando] ? c : new a.Event(f, c) : new a.Event(f);
        c.type = f;
        m && m.call(b, c);
        c.result = g;
        c.target = b
    },one: function(b, c, d) {
        a.addEvent(b, c, function() {
            a.removeEvent(b, c, arguments.callee);
            d.apply(this, arguments)
        })
    }});
    a.Event = function(c, f) {
        if (c && c.type) {
            this.originalEvent = c;
            this.type = c.type;
            this.isDefaultPrevented = c.defaultPrevented || c.returnValue === false || c.getPreventDefault && c.getPreventDefault() ? b : d
        } else
            this.type = c;
        f && a.merge(this, f);
        this.timeStamp = (new Date).getTime();
        this[a.expando] = true
    };
    a.Event.prototype = {preventDefault: function() {
        this.isDefaultPrevented = b;
        var a = this.originalEvent;
        if (a)
            a.preventDefault ? a.preventDefault() : a.returnValue = false
    },stopPropagation: function() {
        this.isPropagationStopped = b;
        var a =
            this.originalEvent;
        if (a) {
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = true
        }
    },stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = b;
        this.stopPropagation()
    },isDefaultPrevented: d,isPropagationStopped: d,isImmediatePropagationStopped: d};
    a.Event.props = ["altKey", "attrChange", "attrName", "bubbles", "button", "cancelable", "charCode", "clientX", "clientY", "ctrlKey", "currentTarget", "data", "detail", "eventPhase", "fromElement", "handler", "keyCode", "metaKey", "newValue", "offsetX", "offsetY",
        "pageX", "pageY", "prevValue", "relatedNode", "relatedTarget", "screenX", "screenY", "shiftKey", "srcElement", "target", "toElement", "view", "wheelDelta", "which"];
    var x;
    x || (x = {});
    (function() {
        var a = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        if (typeof x.parse !== "function")
            x.parse = function(b, c) {
                function d(a, b) {
                    var f, k, l = a[b];
                    if (l && typeof l === "object")
                        for (f in l)
                            if (Object.prototype.hasOwnProperty.call(l, f)) {
                                k = d(l, f);
                                k !== g ? l[f] = k : delete l[f]
                            }
                    return c.call(a,
                        b, l)
                }
                var f, b = String(b);
                a.lastIndex = 0;
                a.test(b) && (b = b.replace(a, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }));
                if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    f = eval("(" + b + ")");
                    return typeof c === "function" ? d({"": f}, "") : f
                }
                throw new SyntaxError("JSON.parse");
            }
    })();
    a.Player = a.Component.extend({init: function(b, c, d) {
        this.tag = b;
        var f =
            this.el = a.createElement("div"), g = this.options = {}, m = g.width = b.getAttribute("width"), n = g.height = b.getAttribute("height"), m = m || 300, n = n || 150;
        b.player = f.player = this;
        this.ready(d);
        b.parentNode.insertBefore(f, b);
        f.appendChild(b);
        f.id = this.id = b.id;
        f.className = b.className;
        b.id = b.id + "_html5_api";
        b.className = "vjs-tech";
        a.players[f.id] = this;
        f.setAttribute("width", m);
        f.setAttribute("height", n);
        f.style.width = m + "px";
        f.style.height = n + "px";
        b.removeAttribute("width");
        b.removeAttribute("height");
        a.merge(g, a.options);
        a.merge(g, this.getVideoTagSettings());
        a.merge(g, c);
        b.removeAttribute("controls");
        b.removeAttribute("poster");
        if (b.hasChildNodes()) {
            c = 0;
            for (d = b.childNodes; c < d.length; c++)
                (d[c].nodeName == "SOURCE" || d[c].nodeName == "TRACK") && b.removeChild(d[c])
        }
        this.values = {};
        this.addClass("vjs-paused");
        this.addEvent("ended", this.onEnded);
        this.addEvent("play", this.onPlay);
        this.addEvent("pause", this.onPause);
        this.addEvent("progress", this.onProgress);
        this.addEvent("error", this.onError);
        g.controls && this.ready(function() {
            this.initComponents()
        });
        this.textTracks = [];
        g.tracks && g.tracks.length > 0 && this.addTextTracks(g.tracks);
        if (!g.sources || g.sources.length == 0) {
            c = 0;
            for (d = g.techOrder; c < d.length; c++) {
                b = d[c];
                if (a[b].isSupported()) {
                    this.loadTech(b);
                    break
                }
            }
        } else
            this.src(g.sources)
    },values: {},destroy: function() {
        this.stopTrackingProgress();
        this.stopTrackingCurrentTime();
        a.players[this.id] = null;
        delete a.players[this.id];
        this.tech.destroy();
        this.el.parentNode.removeChild(this.el)
    },createElement: function() {
    },getVideoTagSettings: function() {
        var a = {sources: [],
            tracks: []};
        a.src = this.tag.getAttribute("src");
        a.controls = this.tag.getAttribute("controls") !== null;
        a.poster = this.tag.getAttribute("poster");
        a.preload = this.tag.getAttribute("preload");
        a.autoplay = this.tag.getAttribute("autoplay") !== null;
        a.loop = this.tag.getAttribute("loop") !== null;
        a.muted = this.tag.getAttribute("muted") !== null;
        if (this.tag.hasChildNodes())
            for (var b, c = 0, d = this.tag.childNodes; c < d.length; c++) {
                b = d[c];
                b.nodeName == "SOURCE" && a.sources.push({src: b.getAttribute("src"),type: b.getAttribute("type"),
                    media: b.getAttribute("media"),title: b.getAttribute("title")});
                b.nodeName == "TRACK" && a.tracks.push({src: b.getAttribute("src"),kind: b.getAttribute("kind"),srclang: b.getAttribute("srclang"),label: b.getAttribute("label"),"default": b.getAttribute("default") !== null,title: b.getAttribute("title")})
            }
        return a
    },loadTech: function(b, c) {
        if (this.tech)
            this.unloadTech();
        else if (b != "html5" && this.tag) {
            this.el.removeChild(this.tag);
            this.tag = false
        }
        this.techName = b;
        this.isReady = false;
        var d = a.merge({source: c,parentEl: this.el},
            this.options[b]);
        if (c) {
            if (c.src == this.values.src && this.values.currentTime > 0)
                d.startTime = this.values.currentTime;
            this.values.src = c.src
        }
        this.tech = new a[b](this, d);
        this.tech.ready(function() {
            this.player.triggerReady();
            this.support.progressEvent || this.player.manualProgressOn();
            this.support.timeupdateEvent || this.player.manualTimeUpdatesOn()
        })
    },unloadTech: function() {
        this.tech.destroy();
        this.manualProgress && this.manualProgressOff();
        this.manualTimeUpdates && this.manualTimeUpdatesOff();
        this.tech = false
    },manualProgressOn: function() {
        this.manualProgress =
            true;
        this.trackProgress();
        this.tech.addEvent("progress", function() {
            this.removeEvent("progress", arguments.callee);
            this.support.progressEvent = true;
            this.player.manualProgressOff()
        })
    },manualProgressOff: function() {
        this.manualProgress = false;
        this.stopTrackingProgress()
    },trackProgress: function() {
        this.progressInterval = setInterval(a.proxy(this, function() {
            if (this.values.bufferEnd < this.buffered().end(0))
                this.triggerEvent("progress");
            else if (this.bufferedPercent() == 1) {
                this.stopTrackingProgress();
                this.triggerEvent("progress")
            }
        }),
            500)
    },stopTrackingProgress: function() {
        clearInterval(this.progressInterval)
    },manualTimeUpdatesOn: function() {
        this.manualTimeUpdates = true;
        this.addEvent("play", this.trackCurrentTime);
        this.addEvent("pause", this.stopTrackingCurrentTime);
        this.tech.addEvent("timeupdate", function() {
            this.removeEvent("timeupdate", arguments.callee);
            this.support.timeupdateEvent = true;
            this.player.manualTimeUpdatesOff()
        })
    },manualTimeUpdatesOff: function() {
        this.manualTimeUpdates = false;
        this.stopTrackingCurrentTime();
        this.removeEvent("play",
            this.trackCurrentTime);
        this.removeEvent("pause", this.stopTrackingCurrentTime)
    },trackCurrentTime: function() {
        this.currentTimeInterval && this.stopTrackingCurrentTime();
        this.currentTimeInterval = setInterval(a.proxy(this, function() {
            this.triggerEvent("timeupdate")
        }), 250)
    },stopTrackingCurrentTime: function() {
        clearInterval(this.currentTimeInterval)
    },onEnded: function() {
        if (this.options.loop) {
            this.currentTime(0);
            this.play()
        } else {
            this.pause();
            this.currentTime(0);
            this.pause()
        }
    },onPlay: function() {
        a.removeClass(this.el,
            "vjs-paused");
        a.addClass(this.el, "vjs-playing")
    },onPause: function() {
        a.removeClass(this.el, "vjs-playing");
        a.addClass(this.el, "vjs-paused")
    },onProgress: function() {
        this.bufferedPercent() == 1 && this.triggerEvent("loadedalldata")
    },onError: function(b) {
        a.log("Video Error", b)
    },techCall: function(b, c) {
        if (this.tech.isReady)
            try {
                this.tech[b](c)
            } catch (d) {
                a.log(d)
            }
        else
            this.tech.ready(function() {
                this[b](c)
            })
    },techGet: function(b) {
        if (this.tech.isReady)
            try {
                return this.tech[b]()
            } catch (c) {
                if (this.tech[b] === g)
                    a.log("Video.js: " +
                        b + " method not defined for " + this.techName + " playback technology.", c);
                else if (c.name == "TypeError") {
                    a.log("Video.js: " + b + " unavailable on " + this.techName + " playback technology element.", c);
                    this.tech.isReady = false
                } else
                    a.log(c)
            }
    },play: function() {
        this.techCall("play");
        return this
    },pause: function() {
        this.techCall("pause");
        return this
    },paused: function() {
        return this.techGet("paused") === false ? false : true
    },currentTime: function(a) {
        if (a !== g) {
            this.values.lastSetCurrentTime = a;
            this.techCall("setCurrentTime", a);
            this.manualTimeUpdates && this.triggerEvent("timeupdate");
            return this
        }
        return this.values.currentTime = this.techGet("currentTime") || 0
    },duration: function() {
        return parseFloat(this.techGet("duration"))
    },remainingTime: function() {
        return this.duration() - this.currentTime()
    },buffered: function() {
        var b = this.techGet("buffered"), c = this.values.bufferEnd = this.values.bufferEnd || 0;
        if (b && b.length > 0 && b.end(0) !== c) {
            c = b.end(0);
            this.values.bufferEnd = c
        }
        return a.createTimeRange(0, c)
    },bufferedPercent: function() {
        return this.duration() ?
            this.buffered().end(0) / this.duration() : 0
    },volume: function(b) {
        if (b !== g) {
            b = Math.max(0, Math.min(1, parseFloat(b)));
            this.values.volume = b;
            this.techCall("setVolume", b);
            a.setLocalStorage("volume", b);
            return this
        }
        b = parseFloat(this.techGet("volume"));
        return isNaN(b) ? 1 : b
    },muted: function(a) {
        if (a !== g) {
            this.techCall("setMuted", a);
            return this
        }
        return this.techGet("muted") || false
    },width: function(a, b) {
        if (a !== g) {
            this.el.width = a;
            this.el.style.width = a + "px";
            b || this.triggerEvent("resize");
            return this
        }
        return parseInt(this.el.getAttribute("width"))
    },
        height: function(a) {
            if (a !== g) {
                this.el.height = a;
                this.el.style.height = a + "px";
                this.triggerEvent("resize");
                return this
            }
            return parseInt(this.el.getAttribute("height"))
        },size: function(a, b) {
            return this.width(a, true).height(b)
        },supportsFullScreen: function() {
            return this.techGet("supportsFullScreen") || false
        },requestFullScreen: function() {
            var b = a.support.requestFullScreen;
            this.isFullScreen = true;
            if (b) {
                a.addEvent(f, b.eventName, this.proxy(function() {
                    this.isFullScreen = f[b.isFullScreen];
                    this.isFullScreen == false && a.removeEvent(f,
                        b.eventName, arguments.callee);
                    this.triggerEvent("fullscreenchange")
                }));
                if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {
                    this.pause();
                    this.unloadTech();
                    a.addEvent(f, b.eventName, this.proxy(function() {
                        a.removeEvent(f, b.eventName, arguments.callee);
                        this.loadTech(this.techName, {src: this.values.src})
                    }))
                }
                this.el[b.requestFn]()
            } else if (this.tech.supportsFullScreen()) {
                this.triggerEvent("fullscreenchange");
                this.techCall("enterFullScreen")
            } else {
                this.triggerEvent("fullscreenchange");
                this.enterFullWindow()
            }
            return this
        },cancelFullScreen: function() {
            var b = a.support.requestFullScreen;
            this.isFullScreen = false;
            if (b) {
                if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {
                    this.pause();
                    this.unloadTech();
                    a.addEvent(f, b.eventName, this.proxy(function() {
                        a.removeEvent(f, b.eventName, arguments.callee);
                        this.loadTech(this.techName, {src: this.values.src})
                    }))
                }
                f[b.cancelFn]()
            } else {
                this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : this.exitFullWindow();
                this.triggerEvent("fullscreenchange")
            }
            return this
        },
        enterFullWindow: function() {
            this.isFullWindow = true;
            this.docOrigOverflow = f.documentElement.style.overflow;
            a.addEvent(f, "keydown", a.proxy(this, this.fullWindowOnEscKey));
            f.documentElement.style.overflow = "hidden";
            a.addClass(f.body, "vjs-full-window");
            a.addClass(this.el, "vjs-fullscreen");
            this.triggerEvent("enterFullWindow")
        },fullWindowOnEscKey: function(a) {
            a.keyCode == 27 && (this.isFullScreen == true ? this.cancelFullScreen() : this.exitFullWindow())
        },exitFullWindow: function() {
            this.isFullWindow = false;
            a.removeEvent(f,
                "keydown", this.fullWindowOnEscKey);
            f.documentElement.style.overflow = this.docOrigOverflow;
            a.removeClass(f.body, "vjs-full-window");
            a.removeClass(this.el, "vjs-fullscreen");
            this.triggerEvent("exitFullWindow")
        },selectSource: function(b) {
            for (var c = 0, d = this.options.techOrder; c < d.length; c++) {
                var f = d[c], g = a[f];
                if (g.isSupported())
                    for (var m = 0, n = b; m < n.length; m++) {
                        var i = n[m];
                        if (g.canPlaySource.call(this, i))
                            return {source: i,tech: f}
                    }
            }
            return false
        },src: function(b) {
            if (b instanceof Array) {
                var c = this.selectSource(b);
                if (c) {
                    b = c.source;
                    c = c.tech;
                    c == this.techName ? this.src(b) : this.loadTech(c, b)
                } else
                    a.log("No compatible source and playback technology were found.")
            } else if (b instanceof Object)
                a[this.techName].canPlaySource(b) ? this.src(b.src) : this.src([b]);
            else {
                this.values.src = b;
                if (this.isReady) {
                    this.techCall("src", b);
                    this.options.preload == "auto" && this.load();
                    this.options.autoplay && this.play()
                } else
                    this.ready(function() {
                        this.src(b)
                    })
            }
            return this
        },load: function() {
            this.techCall("load");
            return this
        },currentSrc: function() {
            return this.techGet("currentSrc") ||
                this.values.src || ""
        },preload: function(a) {
            if (a !== g) {
                this.techCall("setPreload", a);
                this.options.preload = a;
                return this
            }
            return this.techGet("preload")
        },autoplay: function(a) {
            if (a !== g) {
                this.techCall("setAutoplay", a);
                this.options.autoplay = a;
                return this
            }
            return this.techGet("autoplay", a)
        },loop: function(a) {
            if (a !== g) {
                this.techCall("setLoop", a);
                this.options.loop = a;
                return this
            }
            return this.techGet("loop")
        },controls: function() {
            return this.options.controls
        },poster: function() {
            return this.techGet("poster")
        },error: function() {
            return this.techGet("error")
        },
        ended: function() {
            return this.techGet("ended")
        }});
    var t, w, C, D;
    if (f.cancelFullscreen !== g) {
        t = "requestFullscreen";
        w = "exitFullscreen";
        C = "fullscreenchange";
        D = "fullScreen"
    } else
        a.each(["moz", "webkit"], function(a) {
            if ((a != "moz" || f.mozFullScreenEnabled) && f[a + "CancelFullScreen"] !== g) {
                t = a + "RequestFullScreen";
                w = a + "CancelFullScreen";
                C = a + "fullscreenchange";
                D = a == "webkit" ? a + "IsFullScreen" : a + "FullScreen"
            }
        });
    if (t)
        a.support.requestFullScreen = {requestFn: t,cancelFn: w,eventName: C,isFullScreen: D};
    a.PlaybackTech = a.Component.extend({init: function() {
    },
        onClick: function() {
            this.player.options.controls && a.PlayToggle.prototype.onClick.call(this)
        }});
    a.apiMethods = ["play", "pause", "paused", "currentTime", "setCurrentTime", "duration", "buffered", "volume", "setVolume", "muted", "setMuted", "width", "height", "supportsFullScreen", "enterFullScreen", "src", "load", "currentSrc", "preload", "setPreload", "autoplay", "setAutoplay", "loop", "setLoop", "error", "networkState", "readyState", "seeking", "initialTime", "startOffsetTime", "played", "seekable", "ended", "videoTracks", "audioTracks",
        "videoWidth", "videoHeight", "textTracks", "defaultPlaybackRate", "playbackRate", "mediaGroup", "controller", "controls", "defaultMuted"];
    a.each(a.apiMethods, function(b) {
        a.PlaybackTech.prototype[b] = function() {
            throw Error("The '" + b + "' method is not available on the playback technology's API");
        }
    });
    a.html5 = a.PlaybackTech.extend({init: function(a, b, c) {
        this.player = a;
        this.el = this.createElement();
        this.ready(c);
        this.addEvent("click", this.proxy(this.onClick));
        if ((b = b.source) && this.el.currentSrc == b.src)
            a.triggerEvent("loadstart");
        else if (b)
            this.el.src = b.src;
        a.ready(function() {
            if (this.options.autoplay && this.paused()) {
                this.tag.poster = null;
                this.play()
            }
        });
        this.setupTriggers();
        this.triggerReady()
    },destroy: function() {
        this.player.tag = false;
        this.removeTriggers();
        this.el.parentNode.removeChild(this.el)
    },createElement: function() {
        var b = this.player, c = b.tag, d;
        if (!c || this.support.movingElementInDOM === false) {
            c && b.el.removeChild(c);
            c = d = a.createElement("video", {id: c.id || b.el.id + "_html5_api",className: c.className || "vjs-tech"});
            a.insertFirst(c,
                b.el)
        }
        a.each(["autoplay", "preload", "loop", "muted"], function(a) {
            b.options[a] !== null && (c[a] = b.options[a])
        }, this);
        return c
    },setupTriggers: function() {
        a.each.call(this, a.html5.events, function(b) {
            a.addEvent(this.el, b, a.proxy(this.player, this.eventHandler))
        })
    },removeTriggers: function() {
        a.each.call(this, a.html5.events, function(b) {
            a.removeEvent(this.el, b, a.proxy(this.player, this.eventHandler))
        })
    },eventHandler: function(a) {
        a.stopPropagation();
        this.triggerEvent(a)
    },play: function() {
        this.el.play()
    },pause: function() {
        this.el.pause()
    },
        paused: function() {
            return this.el.paused
        },currentTime: function() {
            return this.el.currentTime
        },setCurrentTime: function(b) {
            try {
                this.el.currentTime = b
            } catch (c) {
                a.log(c, "Video isn't ready. (VideoJS)")
            }
        },duration: function() {
            return this.el.duration || 0
        },buffered: function() {
            return this.el.buffered
        },volume: function() {
            return this.el.volume
        },setVolume: function(a) {
            this.el.volume = a
        },muted: function() {
            return this.el.muted
        },setMuted: function(a) {
            this.el.muted = a
        },width: function() {
            return this.el.offsetWidth
        },height: function() {
            return this.el.offsetHeight
        },
        supportsFullScreen: function() {
            return typeof this.el.webkitEnterFullScreen == "function" && !navigator.userAgent.match("Chrome") && !navigator.userAgent.match("Mac OS X 10.5") ? true : false
        },enterFullScreen: function() {
            try {
                this.el.webkitEnterFullScreen()
            } catch (b) {
                b.code == 11 && a.log("VideoJS: Video not ready.")
            }
        },src: function(a) {
            this.el.src = a
        },load: function() {
            this.el.load()
        },currentSrc: function() {
            return this.el.currentSrc
        },preload: function() {
            return this.el.preload
        },setPreload: function(a) {
            this.el.preload = a
        },autoplay: function() {
            return this.el.autoplay
        },
        setAutoplay: function(a) {
            this.el.autoplay = a
        },loop: function() {
            return this.el.loop
        },setLoop: function(a) {
            this.el.loop = a
        },error: function() {
            return this.el.error
        },seeking: function() {
            return this.el.seeking
        },ended: function() {
            return this.el.ended
        },controls: function() {
            return this.player.options.controls
        },defaultMuted: function() {
            return this.el.defaultMuted
        }});
    a.html5.isSupported = function() {
        return !!f.createElement("video").canPlayType
    };
    a.html5.canPlaySource = function(a) {
        return !!f.createElement("video").canPlayType(a.type)
    };
    a.html5.events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"];
    a.html5.prototype.support = {fullscreen: typeof a.testVid.webkitEnterFullScreen !== g ? !a.ua.match("Chrome") && !a.ua.match("Mac OS X 10.5") ? true : false : false,movingElementInDOM: !a.isIOS()};
    if (a.isAndroid() && a.androidVersion() < 3)
        f.createElement("video").constructor.prototype.canPlayType =
            function(a) {
                return a && a.toLowerCase().indexOf("video/mp4") != -1 ? "maybe" : ""
            };
    a.flash = a.PlaybackTech.extend({init: function(b, c) {
        this.player = b;
        var d = c.source, f = c.parentEl, g = this.el = a.createElement("div", {id: f.id + "_temp_flash"}), m = b.el.id + "_flash_api", n = b.options, i = a.merge({readyFunction: "_V_.flash.onReady",eventProxyFunction: "_V_.flash.onEvent",errorEventProxyFunction: "_V_.flash.onError",autoplay: n.autoplay,preload: n.preload,loop: n.loop,muted: n.muted}, c.flashVars), p = a.merge({wmode: "opaque",bgcolor: "#000000"},
            c.params), q = a.merge({id: m,name: m,"class": "vjs-tech"}, c.attributes);
        if (d)
            i.src = encodeURIComponent(a.getAbsoluteURL(d.src));
        a.insertFirst(g, f);
        c.startTime && this.ready(function() {
            this.load();
            this.play();
            this.currentTime(c.startTime)
        });
        if (c.iFrameMode == true && !a.isFF) {
            var r = a.createElement("iframe", {id: m + "_iframe",name: m + "_iframe",className: "vjs-tech",scrolling: "no",marginWidth: 0,marginHeight: 0,frameBorder: 0});
            i.readyFunction = "ready";
            i.eventProxyFunction = "events";
            i.errorEventProxyFunction = "errors";
            a.addEvent(r,
                "load", a.proxy(this, function() {
                    var b, d = r.contentWindow;
                    b = r.contentDocument ? r.contentDocument : r.contentWindow.document;
                    b.write(a.flash.getEmbedCode(c.swf, i, p, q));
                    d.player = this.player;
                    d.ready = a.proxy(this.player, function(c) {
                        var c = b.getElementById(c), d = this.tech;
                        d.el = c;
                        a.addEvent(c, "click", d.proxy(d.onClick));
                        a.flash.checkReady(d)
                    });
                    d.events = a.proxy(this.player, function(a, b) {
                        this && this.techName == "flash" && this.triggerEvent(b)
                    });
                    d.errors = a.proxy(this.player, function(b, c) {
                        a.log("Flash Error", c)
                    })
                }));
            g.parentNode.replaceChild(r,
                g)
        } else
            a.flash.embed(c.swf, g, i, p, q)
    },destroy: function() {
        this.el.parentNode.removeChild(this.el)
    },play: function() {
        this.el.vjs_play()
    },pause: function() {
        this.el.vjs_pause()
    },src: function(b) {
        b = a.getAbsoluteURL(b);
        this.el.vjs_src(b);
        if (this.player.autoplay()) {
            var c = this;
            setTimeout(function() {
                c.play()
            }, 0)
        }
    },load: function() {
        this.el.vjs_load()
    },poster: function() {
        this.el.vjs_getProperty("poster")
    },buffered: function() {
        return a.createTimeRange(0, this.el.vjs_getProperty("buffered"))
    },supportsFullScreen: function() {
        return false
    },
        enterFullScreen: function() {
            return false
        }});
    var G = a.flash.prototype;
    createSetter = function(a) {
        var b = a.charAt(0).toUpperCase() + a.slice(1);
        G["set" + b] = function(b) {
            return this.el.vjs_setProperty(a, b)
        }
    };
    createGetter = function(a) {
        G[a] = function() {
            return this.el.vjs_getProperty(a)
        }
    };
    a.each(["preload", "currentTime", "defaultPlaybackRate", "playbackRate", "autoplay", "loop", "mediaGroup", "controller", "controls", "volume", "muted", "defaultMuted"], function(a) {
        createGetter(a);
        createSetter(a)
    });
    a.each(["error", "currentSrc",
        "networkState", "readyState", "seeking", "initialTime", "duration", "startOffsetTime", "paused", "played", "seekable", "ended", "videoTracks", "audioTracks", "videoWidth", "videoHeight", "textTracks"], function(a) {
        createGetter(a)
    });
    a.flash.isSupported = function() {
        return a.flash.version()[0] >= 10
    };
    a.flash.canPlaySource = function(b) {
        if (b.type in a.flash.prototype.support.formats)
            return "maybe"
    };
    a.flash.prototype.support = {formats: {"video/flv": "FLV","video/x-flv": "FLV","video/mp4": "MP4","video/m4v": "MP4"},progressEvent: false,
        timeupdateEvent: false,fullscreenResize: false,parentResize: !a.ua.match("Firefox")};
    a.flash.onReady = function(b) {
        var b = a.el(b), c = b.player || b.parentNode.player, d = c.tech;
        b.player = c;
        d.el = b;
        d.addEvent("click", d.onClick);
        a.flash.checkReady(d)
    };
    a.flash.checkReady = function(b) {
        b.el.vjs_getProperty ? b.triggerReady() : setTimeout(function() {
            a.flash.checkReady(b)
        }, 50)
    };
    a.flash.onEvent = function(b, c) {
        a.el(b).player.triggerEvent(c)
    };
    a.flash.onError = function(b, c) {
        a.el(b).player.triggerEvent("error");
        a.log("Flash Error",
            c, b)
    };
    a.flash.version = function() {
        var a = "0,0,0";
        try {
            a = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (b) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (c) {
            }
        }
        return a.split(",")
    };
    a.flash.embed = function(b, c, d, f, g) {
        b = a.flash.getEmbedCode(b, d, f, g);
        b = a.createElement("div",
            {innerHTML: b}).childNodes[0];
        d = c.parentNode;
        c.parentNode.replaceChild(b, c);
        if (a.isIE()) {
            var m = d.childNodes[0];
            setTimeout(function() {
                m.style.display = "block"
            }, 1E3)
        }
        return b
    };
    a.flash.getEmbedCode = function(b, c, d, f) {
        var g = "", m = "";
        attrsString = "";
        c && a.eachProp(c, function(a, b) {
            g = g + (a + "=" + b + "&amp;")
        });
        d = a.merge({movie: b,flashvars: g,allowScriptAccess: "always",allowNetworking: "all"}, d);
        a.eachProp(d, function(a, b) {
            m = m + ('<param name="' + a + '" value="' + b + '" />')
        });
        f = a.merge({data: b,width: "100%",height: "100%"}, f);
        a.eachProp(f, function(a, b) {
            attrsString = attrsString + (a + '="' + b + '" ')
        });
        return '<object type="application/x-shockwave-flash"' + attrsString + ">" + m + "</object>"
    };
    a.merge(a.Player.prototype, {addTextTracks: function(b) {
        for (var c = this.textTracks = this.textTracks ? this.textTracks : [], d = 0, f = b.length, g; d < f; d++) {
            g = a.uc(b[d].kind || "subtitles");
            g = new a[g + "Track"](this, b[d]);
            c.push(g);
            g["default"] && this.ready(a.proxy(g, g.show))
        }
        return this
    },showTextTrack: function(a, b) {
        for (var c = this.textTracks, d = 0, f = c.length, g, m; d < f; d++) {
            g =
                c[d];
            if (g.id === a) {
                g.show();
                m = g
            } else
                b && (g.kind == b && g.mode > 0) && g.disable()
        }
        (c = m ? m.kind : b ? b : false) && this.triggerEvent(c + "trackchange");
        return this
    }});
    a.Track = a.Component.extend({init: function(b, c) {
        this._super(b, c);
        a.merge(this, {id: c.id || "vjs_" + c.kind + "_" + c.language + "_" + a.guid++,src: c.src,"default": c["default"],title: c.title,language: c.srclang,label: c.label,cues: [],activeCues: [],readyState: 0,mode: 0})
    },createElement: function() {
        return this._super("div", {className: "vjs-" + this.kind + " vjs-text-track"})
    },
        show: function() {
            this.activate();
            this.mode = 2;
            this._super()
        },hide: function() {
            this.activate();
            this.mode = 1;
            this._super()
        },disable: function() {
            this.mode == 2 && this.hide();
            this.deactivate();
            this.mode = 0
        },activate: function() {
            this.readyState == 0 && this.load();
            if (this.mode == 0) {
                this.player.addEvent("timeupdate", this.proxy(this.update, this.id));
                this.player.addEvent("ended", this.proxy(this.reset, this.id));
                (this.kind == "captions" || this.kind == "subtitles") && this.player.textTrackDisplay.addComponent(this)
            }
        },deactivate: function() {
            this.player.removeEvent("timeupdate",
                this.proxy(this.update, this.id));
            this.player.removeEvent("ended", this.proxy(this.reset, this.id));
            this.reset();
            this.player.textTrackDisplay.removeComponent(this)
        },load: function() {
            if (this.readyState == 0) {
                this.readyState = 1;
                a.get(this.src, this.proxy(this.parseCues), this.proxy(this.onError))
            }
        },onError: function(a) {
            this.error = a;
            this.readyState = 3;
            this.triggerEvent("error")
        },parseCues: function(b) {
            for (var c, d, b = b.split("\n"), f = "", g = 1, m = b.length; g < m; g++)
                if (f = a.trim(b[g])) {
                    if (f.indexOf("--\>") == -1) {
                        c = f;
                        f = a.trim(b[++g])
                    } else
                        c =
                            this.cues.length;
                    c = {id: c,index: this.cues.length};
                    d = f.split(" --\> ");
                    c.startTime = this.parseCueTime(d[0]);
                    c.endTime = this.parseCueTime(d[1]);
                    for (d = []; b[++g] && (f = a.trim(b[g])); )
                        d.push(f);
                    c.text = d.join("<br/>");
                    this.cues.push(c)
                }
            this.readyState = 2;
            this.triggerEvent("loaded")
        },parseCueTime: function(a) {
            var b = a.split(":"), a = 0, c, d, f;
            if (b.length == 3) {
                c = b[0];
                d = b[1];
                b = b[2]
            } else {
                c = 0;
                d = b[0];
                b = b[1]
            }
            b = b.split(/\s+/);
            b = b.splice(0, 1)[0];
            b = b.split(/\.|,/);
            f = parseFloat(b[1]);
            b = b[0];
            a = a + parseFloat(c) * 3600;
            a = a + parseFloat(d) *
                60;
            a = a + parseFloat(b);
            f && (a = a + f / 1E3);
            return a
        },update: function() {
            if (this.cues.length > 0) {
                var a = this.player.currentTime();
                if (this.prevChange === g || a < this.prevChange || this.nextChange <= a) {
                    var b = this.cues, c = this.player.duration(), d = 0, f = false, m = [], n, i, p, q;
                    if (a >= this.nextChange || this.nextChange === g)
                        q = this.firstActiveIndex !== g ? this.firstActiveIndex : 0;
                    else {
                        f = true;
                        q = this.lastActiveIndex !== g ? this.lastActiveIndex : b.length - 1
                    }
                    for (; ; ) {
                        p = b[q];
                        if (p.endTime <= a) {
                            d = Math.max(d, p.endTime);
                            if (p.active)
                                p.active = false
                        } else if (a <
                            p.startTime) {
                            c = Math.min(c, p.startTime);
                            if (p.active)
                                p.active = false;
                            if (!f)
                                break
                        } else {
                            if (f) {
                                m.splice(0, 0, p);
                                i === g && (i = q);
                                n = q
                            } else {
                                m.push(p);
                                n === g && (n = q);
                                i = q
                            }
                            c = Math.min(c, p.endTime);
                            d = Math.max(d, p.startTime);
                            p.active = true
                        }
                        if (f)
                            if (q === 0)
                                break;
                            else
                                q--;
                        else if (q === b.length - 1)
                            break;
                        else
                            q++
                    }
                    this.activeCues = m;
                    this.nextChange = c;
                    this.prevChange = d;
                    this.firstActiveIndex = n;
                    this.lastActiveIndex = i;
                    this.updateDisplay();
                    this.triggerEvent("cuechange")
                }
            }
        },updateDisplay: function() {
            for (var a = this.activeCues, b = "", c = 0,
                     d = a.length; c < d; c++)
                b = b + ("<span class='vjs-tt-cue'>" + a[c].text + "</span>");
            this.el.innerHTML = b
        },reset: function() {
            this.nextChange = 0;
            this.prevChange = this.player.duration();
            this.lastActiveIndex = this.firstActiveIndex = 0
        }});
    a.CaptionsTrack = a.Track.extend({kind: "captions"});
    a.SubtitlesTrack = a.Track.extend({kind: "subtitles"});
    a.ChaptersTrack = a.Track.extend({kind: "chapters"});
    a.TextTrackDisplay = a.Component.extend({createElement: function() {
        return this._super("div", {className: "vjs-text-track-display"})
    }});
    a.TextTrackMenuItem =
        a.MenuItem.extend({init: function(b, c) {
            var d = this.track = c.track;
            c.label = d.label;
            c.selected = d["default"];
            this._super(b, c);
            this.player.addEvent(d.kind + "trackchange", a.proxy(this, this.update))
        },onClick: function() {
            this._super();
            this.player.showTextTrack(this.track.id, this.track.kind)
        },update: function() {
            this.track.mode == 2 ? this.selected(true) : this.selected(false)
        }});
    a.OffTextTrackMenuItem = a.TextTrackMenuItem.extend({init: function(a, b) {
        b.track = {kind: b.kind,player: a,label: "Off"};
        this._super(a, b)
    },onClick: function() {
        this._super();
        this.player.showTextTrack(this.track.id, this.track.kind)
    },update: function() {
        for (var a = this.player.textTracks, b = 0, c = a.length, d, f = true; b < c; b++) {
            d = a[b];
            d.kind == this.track.kind && d.mode == 2 && (f = false)
        }
        f ? this.selected(true) : this.selected(false)
    }});
    a.TextTrackButton = a.Button.extend({init: function(a, b) {
        this._super(a, b);
        this.menu = this.createMenu();
        this.items.length === 0 && this.hide()
    },createMenu: function() {
        var b = new a.Menu(this.player);
        b.el.appendChild(a.createElement("li", {className: "vjs-menu-title",innerHTML: a.uc(this.kind)}));
        b.addItem(new a.OffTextTrackMenuItem(this.player, {kind: this.kind}));
        this.items = this.createItems();
        this.each(this.items, function(a) {
            b.addItem(a)
        });
        this.addComponent(b);
        return b
    },createItems: function() {
        var b = [];
        this.each(this.player.textTracks, function(c) {
            c.kind === this.kind && b.push(new a.TextTrackMenuItem(this.player, {track: c}))
        });
        return b
    },buildCSSClass: function() {
        return this.className + " vjs-menu-button " + this._super()
    },onFocus: function() {
        this.menu.lockShowing();
        a.one(this.menu.el.childNodes[this.menu.el.childNodes.length -
            1], "blur", this.proxy(function() {
            this.menu.unlockShowing()
        }))
    },onBlur: function() {
    },onClick: function() {
        this.one("mouseout", this.proxy(function() {
            this.menu.unlockShowing();
            this.el.blur()
        }))
    }});
    a.CaptionsButton = a.TextTrackButton.extend({kind: "captions",buttonText: "Captions",className: "vjs-captions-button"});
    a.SubtitlesButton = a.TextTrackButton.extend({kind: "subtitles",buttonText: "Subtitles",className: "vjs-subtitles-button"});
    a.ChaptersButton = a.TextTrackButton.extend({kind: "chapters",buttonText: "Chapters",
        className: "vjs-chapters-button",createItems: function() {
            var b = [];
            this.each(this.player.textTracks, function(c) {
                c.kind === this.kind && b.push(new a.TextTrackMenuItem(this.player, {track: c}))
            });
            return b
        },createMenu: function() {
            for (var b = this.player.textTracks, c = 0, d = b.length, f, g, m = this.items = []; c < d; c++) {
                f = b[c];
                if (f.kind == this.kind && f["default"]) {
                    if (f.readyState < 2) {
                        this.chaptersTrack = f;
                        f.addEvent("loaded", this.proxy(this.createMenu));
                        return
                    }
                    g = f;
                    break
                }
            }
            b = this.menu = new a.Menu(this.player);
            b.el.appendChild(a.createElement("li",
                {className: "vjs-menu-title",innerHTML: a.uc(this.kind)}));
            if (g) {
                f = g.cues;
                for (var c = 0, d = f.length, n; c < d; c++) {
                    n = f[c];
                    n = new a.ChaptersTrackMenuItem(this.player, {track: g,cue: n});
                    m.push(n);
                    b.addComponent(n)
                }
            }
            this.addComponent(b);
            this.items.length > 0 && this.show();
            return b
        }});
    a.ChaptersTrackMenuItem = a.MenuItem.extend({init: function(b, c) {
        var d = this.track = c.track, f = this.cue = c.cue, g = b.currentTime();
        c.label = f.text;
        c.selected = f.startTime <= g && g < f.endTime;
        this._super(b, c);
        d.addEvent("cuechange", a.proxy(this, this.update))
    },
        onClick: function() {
            this._super();
            this.player.currentTime(this.cue.startTime);
            this.update(this.cue.startTime)
        },update: function() {
            var a = this.cue, b = this.player.currentTime();
            a.startTime <= b && b < a.endTime ? this.selected(true) : this.selected(false)
        }});
    a.merge(a.ControlBar.prototype.options.components, {subtitlesButton: {},captionsButton: {},chaptersButton: {}});
    a.autoSetup = function() {
        var b, c, d = f.getElementsByTagName("video");
        if (d && d.length > 0)
            for (var m = 0, n = d.length; m < n; m++)
                if ((c = d[m]) && c.getAttribute) {
                    if (c.player ===
                        g) {
                        b = c.getAttribute("data-setup");
                        if (b !== null) {
                            b = x.parse(b || "{}");
                            a(c, b)
                        }
                    }
                } else {
                    a.autoSetupTimeout(1);
                    break
                }
        else
            a.windowLoaded || a.autoSetupTimeout(1)
    };
    a.autoSetupTimeout = function(b) {
        setTimeout(a.autoSetup, b)
    };
    a.addEvent(c, "load", function() {
        a.windowLoaded = true
    });
    a.autoSetup();
    c.VideoJS = c._V_ = m
})(window);
Date.dayNames = "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split("");
Date.abbrDayNames = "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split("");
Date.monthNames = "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" ");
Date.abbrMonthNames = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
Date.firstDayOfWeek = 1;
Date.format = "yyyy-mm-dd";
Date.fullYearStart = "20";
(function() {
    function c(b, c) {
        Date.prototype[b] || (Date.prototype[b] = c)
    }
    c("isLeapYear", function() {
        var b = this.getFullYear();
        return b % 4 == 0 && b % 100 != 0 || b % 400 == 0
    });
    c("isWeekend", function() {
        return this.getDay() == 0 || this.getDay() == 6
    });
    c("isWeekDay", function() {
        return !this.isWeekend()
    });
    c("getDaysInMonth", function() {
        return [31, this.isLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.getMonth()]
    });
    c("getDayName", function(b) {
        return b ? Date.abbrDayNames[this.getDay()] : Date.dayNames[this.getDay()]
    });
    c("getMonthName",
        function(b) {
            return b ? Date.abbrMonthNames[this.getMonth()] : Date.monthNames[this.getMonth()]
        });
    c("getDayOfYear", function() {
        var b = new Date("1/1/" + this.getFullYear());
        return Math.floor((this.getTime() - b.getTime()) / 864E5)
    });
    c("getWeekOfYear", function() {
        return Math.ceil(this.getDayOfYear() / 7)
    });
    c("setDayOfYear", function(b) {
        this.setMonth(0);
        this.setDate(b);
        return this
    });
    c("addYears", function(b) {
        this.setFullYear(this.getFullYear() + b);
        return this
    });
    c("addMonths", function(b) {
        var c = this.getDate();
        this.setMonth(this.getMonth() +
            b);
        c > this.getDate() && this.addDays(-this.getDate());
        return this
    });
    c("addDays", function(b) {
        var c = this.getTimezoneOffset();
        this.setTime(this.getTime() + b * 864E5);
        b = this.getTimezoneOffset();
        b !== c && this.setTime(this.getTime() + (b - c) * 6E4);
        return this
    });
    c("addHours", function(b) {
        this.setHours(this.getHours() + b);
        return this
    });
    c("addMinutes", function(b) {
        this.setMinutes(this.getMinutes() + b);
        return this
    });
    c("addSeconds", function(b) {
        this.setSeconds(this.getSeconds() + b);
        return this
    });
    c("zeroTime", function() {
        this.setMilliseconds(0);
        this.setSeconds(0);
        this.setMinutes(0);
        this.setHours(0);
        return this
    });
    c("asString", function(b) {
        return (b || Date.format).split("yyyy").join(this.getFullYear()).split("yy").join((this.getFullYear() + "").substring(2)).split("dd").join(g(this.getDate())).split("d").join(this.getDate()).split("DD").join(this.getDayName(false)).split("D").join(this.getDayName(true)).split("mmmm").join(this.getMonthName(false)).split("mmm").join(this.getMonthName(true)).split("mm").join(g(this.getMonth() + 1)).split("hh").join(g(this.getHours())).split("min").join(g(this.getMinutes())).split("ss").join(g(this.getSeconds()))
    });
    Date.fromString = function(b, c) {
        var f = c || Date.format, g = new Date("01/01/1977"), a = 0, r, p, q;
        r = f.indexOf("mmmm");
        if (r > -1) {
            for (p = 0; p < Date.monthNames.length; p++) {
                q = b.substr(r, Date.monthNames[p].length);
                if (Date.monthNames[p] == q) {
                    a = Date.monthNames[p].length - 4;
                    break
                }
            }
            g.setMonth(p)
        } else {
            r = f.indexOf("mmm");
            if (r > -1) {
                q = b.substr(r, 3);
                for (p = 0; p < Date.abbrMonthNames.length; p++)
                    if (Date.abbrMonthNames[p] == q)
                        break;
                g.setMonth(p)
            } else
                g.setMonth(Number(b.substr(f.indexOf("mm"), 2)) - 1)
        }
        p = f.indexOf("yyyy");
        if (p > -1) {
            r < p && (p =
                p + a);
            g.setFullYear(Number(b.substr(p, 4)))
        } else
            g.setFullYear(Number(Date.fullYearStart + b.substr(f.indexOf("yy"), 2)));
        f = f.indexOf("dd");
        r < f && (f = f + a);
        g.setDate(Number(b.substr(f, 2)));
        return isNaN(g.getTime()) ? false : g
    };
    var g = function(b) {
        b = "0" + b;
        return b.substring(b.length - 2)
    }
})();
(function(c) {
    function g(b) {
        this.ele = b;
        this.button = this.horizontalOffset = this.verticalOffset = this.horizontalPosition = this.verticalPosition = this.numSelected = this.numSelectable = this.selectMultiple = this.rememberViewedMonth = this.displayClose = this.closeOnSelect = this.showYearNavigation = this.endDate = this.startDate = this.displayedYear = this.displayedMonth = null;
        this.renderCallback = [];
        this.selectedDates = {};
        this.inline = null;
        this.context = "#dp-popup";
        this.settings = {}
    }
    c.fn.extend({renderCalendar: function(b) {
        b = c.extend({},
            c.fn.datePicker.defaults, b);
        if (b.showHeader != c.dpConst.SHOW_HEADER_NONE)
            for (var f = c(document.createElement("tr")), g = Date.firstDayOfWeek; g < Date.firstDayOfWeek + 7; g++) {
                var a = g % 7, r = Date.dayNames[a];
                f.append(jQuery(document.createElement("th")).attr({scope: "col",abbr: r,title: r,"class": a == 0 || a == 6 ? "weekend" : "weekday"}).html(b.showHeader == c.dpConst.SHOW_HEADER_SHORT ? r.substr(0, 1) : r))
            }
        var p = c(document.createElement("table")).attr({cellspacing: 2}).addClass("jCalendar").append(b.showHeader != c.dpConst.SHOW_HEADER_NONE ?
            c(document.createElement("thead")).append(f) : document.createElement("thead")), f = c(document.createElement("tbody")), a = (new Date).zeroTime();
        a.setHours(12);
        var r = b.month == void 0 ? a.getMonth() : b.month, q = b.year || a.getFullYear(), n = new Date(q, r, 1, 12, 0, 0), g = Date.firstDayOfWeek - n.getDay() + 1;
        g > 1 && (g = g - 7);
        var s = Math.ceil((-1 * g + 1 + n.getDaysInMonth()) / 7);
        n.addDays(g - 1);
        for (var u = function(a) {
            return function() {
                if (b.hoverClass) {
                    var f = c(this);
                    b.selectWeek ? a && !f.is(".disabled") && f.parent().addClass("activeWeekHover") :
                        f.addClass(b.hoverClass)
                }
            }
        }, v = function() {
            if (b.hoverClass) {
                var a = c(this);
                a.removeClass(b.hoverClass);
                a.parent().removeClass("activeWeekHover")
            }
        }, x = 0; x++ < s; ) {
            for (var t = jQuery(document.createElement("tr")), w = b.dpController ? n > b.dpController.startDate : false, g = 0; g < 7; g++) {
                var C = n.getMonth() == r, C = c(document.createElement("td")).text(n.getDate() + "").addClass((C ? "current-month " : "other-month ") + (n.isWeekend() ? "weekend " : "weekday ") + (C && n.getTime() == a.getTime() ? "today " : "")).data("datePickerDate", n.asString()).hover(u(w),
                    v);
                t.append(C);
                b.renderCallback && b.renderCallback(C, n, r, q);
                n = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1, 12, 0, 0)
            }
            f.append(t)
        }
        p.append(f);
        return this.each(function() {
            c(this).empty().append(p)
        })
    },datePicker: function(b) {
        if (!c.event._dpCache)
            c.event._dpCache = [];
        b = c.extend({}, c.fn.datePicker.defaults, b);
        return this.each(function() {
            var f = c(this), m = true;
            if (!this._dpId) {
                this._dpId = c.guid++;
                c.event._dpCache[this._dpId] = new g(this);
                m = false
            }
            if (b.inline) {
                b.createButton = false;
                b.displayClose = false;
                b.closeOnSelect =
                    false;
                f.empty()
            }
            var a = c.event._dpCache[this._dpId];
            a.init(b);
            if (!m && b.createButton) {
                a.button = c('<a href="#" class="dp-choose-date" title="' + c.dpText.TEXT_CHOOSE_DATE + '">' + c.dpText.TEXT_CHOOSE_DATE + "</a>").bind("click", function() {
                    f.dpDisplay(this);
                    this.blur();
                    return false
                });
                f.after(a.button)
            }
            if (!m && f.is(":text")) {
                f.bind("dateSelected", function(a, b) {
                    this.value = b.asString()
                }).bind("change", function() {
                        if (this.value == "")
                            a.clearSelected();
                        else {
                            var b = Date.fromString(this.value);
                            b && a.setSelected(b, true, true)
                        }
                    });
                b.clickInput && f.bind("click", function() {
                    f.trigger("change");
                    f.dpDisplay()
                });
                m = Date.fromString(this.value);
                this.value != "" && m && a.setSelected(m, true, true)
            }
            f.addClass("dp-applied")
        })
    },dpSetDisabled: function(c) {
        return b.call(this, "setDisabled", c)
    },dpSetStartDate: function(c) {
        return b.call(this, "setStartDate", c)
    },dpSetEndDate: function(c) {
        return b.call(this, "setEndDate", c)
    },dpGetSelected: function() {
        var b = this[0]._dpId ? c.event._dpCache[this[0]._dpId] : false;
        return b ? b.getSelected() : null
    },dpSetSelected: function(c,
                              f, g, a) {
        f == void 0 && (f = true);
        g == void 0 && (g = true);
        a == void 0 && (a = true);
        return b.call(this, "setSelected", Date.fromString(c), f, g, a)
    },dpSetDisplayedMonth: function(c, f) {
        return b.call(this, "setDisplayedMonth", Number(c), Number(f), true)
    },dpDisplay: function(c) {
        return b.call(this, "display", c)
    },dpSetRenderCallback: function(c) {
        return b.call(this, "setRenderCallback", c)
    },dpSetPosition: function(c, f) {
        return b.call(this, "setPosition", c, f)
    },dpSetOffset: function(c, f) {
        return b.call(this, "setOffset", c, f)
    },dpClose: function() {
        return b.call(this,
            "_closeCalendar", false, this[0])
    },dpRerenderCalendar: function() {
        return b.call(this, "_rerenderCalendar")
    },_dpDestroy: function() {
    }});
    var b = function(b, f, g, a, r) {
        return this.each(function() {
            var p = this._dpId ? c.event._dpCache[this._dpId] : false;
            if (p)
                p[b](f, g, a, r)
        })
    };
    c.extend(g.prototype, {init: function(b) {
        this.setStartDate(b.startDate);
        this.setEndDate(b.endDate);
        this.setDisplayedMonth(Number(b.month), Number(b.year));
        this.setRenderCallback(b.renderCallback);
        this.showYearNavigation = b.showYearNavigation;
        this.closeOnSelect =
            b.closeOnSelect;
        this.displayClose = b.displayClose;
        this.rememberViewedMonth = b.rememberViewedMonth;
        this.numSelectable = (this.selectMultiple = b.selectMultiple) ? b.numSelectable : 1;
        this.numSelected = 0;
        this.verticalPosition = b.verticalPosition;
        this.horizontalPosition = b.horizontalPosition;
        this.hoverClass = b.hoverClass;
        this.setOffset(b.verticalOffset, b.horizontalOffset);
        this.inline = b.inline;
        this.settings = b;
        if (this.inline) {
            this.context = this.ele;
            this.display()
        }
    },setStartDate: function(b) {
        if (b)
            this.startDate = b instanceof
                Date ? b : Date.fromString(b);
        if (!this.startDate)
            this.startDate = (new Date).zeroTime();
        this.setDisplayedMonth(this.displayedMonth, this.displayedYear)
    },setEndDate: function(b) {
        if (b)
            this.endDate = b instanceof Date ? b : Date.fromString(b);
        if (!this.endDate)
            this.endDate = new Date("12/31/2999");
        if (this.endDate.getTime() < this.startDate.getTime())
            this.endDate = this.startDate;
        this.setDisplayedMonth(this.displayedMonth, this.displayedYear)
    },setPosition: function(b, c) {
        this.verticalPosition = b;
        this.horizontalPosition = c
    },setOffset: function(b,
                          c) {
        this.verticalOffset = parseInt(b) || 0;
        this.horizontalOffset = parseInt(c) || 0
    },setDisabled: function(b) {
        $e = c(this.ele);
        $e[b ? "addClass" : "removeClass"]("dp-disabled");
        if (this.button) {
            $but = c(this.button);
            $but[b ? "addClass" : "removeClass"]("dp-disabled");
            $but.attr("title", b ? "" : c.dpText.TEXT_CHOOSE_DATE)
        }
        $e.is(":text") && $e.attr("disabled", b ? "disabled" : "")
    },setDisplayedMonth: function(b, f, g) {
        if (!(this.startDate == void 0 || this.endDate == void 0)) {
            var a = new Date(this.startDate.getTime());
            a.setDate(1);
            var r = new Date(this.endDate.getTime());
            r.setDate(1);
            if (!b && !f || isNaN(b) && isNaN(f)) {
                b = (new Date).zeroTime();
                b.setDate(1)
            } else
                b = isNaN(b) ? new Date(f, this.displayedMonth, 1) : isNaN(f) ? new Date(this.displayedYear, b, 1) : new Date(f, b, 1);
            b.getTime() < a.getTime() ? b = a : b.getTime() > r.getTime() && (b = r);
            a = this.displayedMonth;
            r = this.displayedYear;
            this.displayedMonth = b.getMonth();
            this.displayedYear = b.getFullYear();
            if (g && (this.displayedMonth != a || this.displayedYear != r)) {
                this._rerenderCalendar();
                c(this.ele).trigger("dpMonthChanged", [this.displayedMonth, this.displayedYear])
            }
        }
    },
        setSelected: function(b, f, g, a) {
            if (!(b < this.startDate || b.zeroTime() > this.endDate.zeroTime())) {
                var r = this.settings;
                if (r.selectWeek) {
                    b = b.addDays(-(b.getDay() - Date.firstDayOfWeek + 7) % 7);
                    if (b < this.startDate)
                        return
                }
                if (f != this.isSelected(b)) {
                    if (this.selectMultiple == false)
                        this.clearSelected();
                    else if (f && this.numSelected == this.numSelectable)
                        return;
                    g && (this.displayedMonth != b.getMonth() || this.displayedYear != b.getFullYear()) && this.setDisplayedMonth(b.getMonth(), b.getFullYear(), true);
                    this.selectedDates[b.asString()] =
                        f;
                    this.numSelected = this.numSelected + (f ? 1 : -1);
                    var g = "td." + (b.getMonth() == this.displayedMonth ? "current-month" : "other-month"), p;
                    c(g, this.context).each(function() {
                        if (c(this).data("datePickerDate") == b.asString()) {
                            p = c(this);
                            if (r.selectWeek)
                                p.parent()[f ? "addClass" : "removeClass"]("selectedWeek");
                            p[f ? "addClass" : "removeClass"]("selected")
                        }
                    });
                    c("td", this.context).not(".selected")[this.selectMultiple && this.numSelected == this.numSelectable ? "addClass" : "removeClass"]("unselectable");
                    if (a) {
                        r = this.isSelected(b);
                        $e =
                            c(this.ele);
                        a = Date.fromString(b.asString());
                        $e.trigger("dateSelected", [a, p, r]);
                        $e.trigger("change")
                    }
                }
            }
        },isSelected: function(b) {
            return this.selectedDates[b.asString()]
        },getSelected: function() {
            var b = [], c;
            for (c in this.selectedDates)
                this.selectedDates[c] == true && b.push(Date.fromString(c));
            return b
        },clearSelected: function() {
            this.selectedDates = {};
            this.numSelected = 0;
            c("td.selected", this.context).removeClass("selected").parent().removeClass("selectedWeek")
        },display: function(b) {
            if (!c(this.ele).is(".dp-disabled")) {
                var b =
                    b || this.ele, f = this, b = c(b), g = b.offset(), a, r, p;
                if (f.inline) {
                    a = c(this.ele);
                    r = {id: "calendar-" + this.ele._dpId,"class": "dp-popup dp-popup-inline"};
                    c(".dp-popup", a).remove();
                    p = {}
                } else {
                    a = c("body");
                    r = {id: "dp-popup","class": "dp-popup"};
                    p = {top: g.top + f.verticalOffset,left: g.left + f.horizontalOffset};
                    this._checkMouse = function(a) {
                        for (var a = a.target, b = c("#dp-popup")[0]; ; ) {
                            if (a == b)
                                return true;
                            if (a == document) {
                                f._closeCalendar();
                                return false
                            }
                            a = c(a).parent()[0]
                        }
                    };
                    f._closeCalendar(true);
                    c(document).bind("keydown.datepicker",
                        function(a) {
                            a.keyCode == 27 && f._closeCalendar()
                        })
                }
                if (!f.rememberViewedMonth) {
                    var q = this.getSelected()[0];
                    if (q) {
                        q = new Date(q);
                        this.setDisplayedMonth(q.getMonth(), q.getFullYear(), false)
                    }
                }
                a.append(c("<div></div>").attr(r).css(p).append(c("<h2></h2>"), c('<div class="dp-nav-prev"></div>').append(c('<a class="dp-nav-prev-year" href="#" title="' + c.dpText.TEXT_PREV_YEAR + '">&lt;&lt;</a>').bind("click", function() {
                    return f._displayNewMonth.call(f, this, 0, -1)
                }), c('<a class="dp-nav-prev-month" href="#" title="' +
                    c.dpText.TEXT_PREV_MONTH + '">&lt;</a>').bind("click", function() {
                        return f._displayNewMonth.call(f, this, -1, 0)
                    })), c('<div class="dp-nav-next"></div>').append(c('<a class="dp-nav-next-year" href="#" title="' + c.dpText.TEXT_NEXT_YEAR + '">&gt;&gt;</a>').bind("click", function() {
                    return f._displayNewMonth.call(f, this, 0, 1)
                }), c('<a class="dp-nav-next-month" href="#" title="' + c.dpText.TEXT_NEXT_MONTH + '">&gt;</a>').bind("click", function() {
                    return f._displayNewMonth.call(f, this, 1, 0)
                })), c('<div class="dp-calendar"></div>')).bgIframe());
                a = this.inline ? c(".dp-popup", this.context) : c("#dp-popup");
                this.showYearNavigation == false && c(".dp-nav-prev-year, .dp-nav-next-year", f.context).css("display", "none");
                this.displayClose && a.append(c('<a href="#" id="dp-close">' + c.dpText.TEXT_CLOSE + "</a>").bind("click", function() {
                    f._closeCalendar();
                    return false
                }));
                f._renderCalendar();
                c(this.ele).trigger("dpDisplayed", a);
                if (!f.inline) {
                    this.verticalPosition == c.dpConst.POS_BOTTOM && a.css("top", g.top + b.height() - a.height() + f.verticalOffset);
                    this.horizontalPosition ==
                        c.dpConst.POS_RIGHT && a.css("left", g.left + b.width() - a.width() + f.horizontalOffset);
                    c(document).bind("mousedown.datepicker", this._checkMouse)
                }
            }
        },setRenderCallback: function(b) {
            if (b != null) {
                b && typeof b == "function" && (b = [b]);
                this.renderCallback = this.renderCallback.concat(b)
            }
        },cellRender: function(b, f) {
            var g = this.dpController, a = new Date(f.getTime());
            b.bind("click", function() {
                var b = c(this);
                if (!b.is(".disabled")) {
                    g.setSelected(a, !b.is(".selected") || !g.selectMultiple, false, true);
                    if (g.closeOnSelect) {
                        if (g.settings.autoFocusNextInput) {
                            var d =
                                g.ele, f = false;
                            c(":input", d.form).each(function() {
                                if (f) {
                                    c(this).focus();
                                    return false
                                }
                                this == d && (f = true)
                            })
                        } else
                            try {
                                g.ele.focus()
                            } catch (n) {
                            }
                        g._closeCalendar()
                    }
                }
            });
            if (g.isSelected(a)) {
                b.addClass("selected");
                g.settings.selectWeek && b.parent().addClass("selectedWeek")
            } else
                g.selectMultiple && g.numSelected == g.numSelectable && b.addClass("unselectable")
        },_applyRenderCallbacks: function() {
            var b = this;
            c("td", this.context).each(function() {
                for (var f = 0; f < b.renderCallback.length; f++) {
                    $td = c(this);
                    b.renderCallback[f].apply(this,
                        [$td, Date.fromString($td.data("datePickerDate")), b.displayedMonth, b.displayedYear])
                }
            })
        },_displayNewMonth: function(b, f, g) {
            c(b).is(".disabled") || this.setDisplayedMonth(this.displayedMonth + f, this.displayedYear + g, true);
            b.blur();
            return false
        },_rerenderCalendar: function() {
            this._clearCalendar();
            this._renderCalendar()
        },_renderCalendar: function() {
            c("h2", this.context).html((new Date(this.displayedYear, this.displayedMonth, 1)).asString(c.dpText.HEADER_FORMAT));
            c(".dp-calendar", this.context).renderCalendar(c.extend({},
                this.settings, {month: this.displayedMonth,year: this.displayedYear,renderCallback: this.cellRender,dpController: this,hoverClass: this.hoverClass}));
            if (this.displayedYear == this.startDate.getFullYear() && this.displayedMonth == this.startDate.getMonth()) {
                c(".dp-nav-prev-year", this.context).addClass("disabled");
                c(".dp-nav-prev-month", this.context).addClass("disabled");
                c(".dp-calendar td.other-month", this.context).each(function() {
                    var a = c(this);
                    Number(a.text()) > 20 && a.addClass("disabled")
                });
                var b = this.startDate.getDate();
                c(".dp-calendar td.current-month", this.context).each(function() {
                    var a = c(this);
                    Number(a.text()) < b && a.addClass("disabled")
                })
            } else {
                c(".dp-nav-prev-year", this.context).removeClass("disabled");
                c(".dp-nav-prev-month", this.context).removeClass("disabled");
                b = this.startDate.getDate();
                if (b > 20) {
                    var f = this.startDate.getTime(), g = new Date(f);
                    g.addMonths(1);
                    this.displayedYear == g.getFullYear() && this.displayedMonth == g.getMonth() && c(".dp-calendar td.other-month", this.context).each(function() {
                        var a = c(this);
                        Date.fromString(a.data("datePickerDate")).getTime() <
                            f && a.addClass("disabled")
                    })
                }
            }
            if (this.displayedYear == this.endDate.getFullYear() && this.displayedMonth == this.endDate.getMonth()) {
                c(".dp-nav-next-year", this.context).addClass("disabled");
                c(".dp-nav-next-month", this.context).addClass("disabled");
                c(".dp-calendar td.other-month", this.context).each(function() {
                    var a = c(this);
                    Number(a.text()) < 14 && a.addClass("disabled")
                });
                b = this.endDate.getDate();
                c(".dp-calendar td.current-month", this.context).each(function() {
                    var a = c(this);
                    Number(a.text()) > b && a.addClass("disabled")
                })
            } else {
                c(".dp-nav-next-year",
                    this.context).removeClass("disabled");
                c(".dp-nav-next-month", this.context).removeClass("disabled");
                b = this.endDate.getDate();
                if (b < 13) {
                    g = new Date(this.endDate.getTime());
                    g.addMonths(-1);
                    this.displayedYear == g.getFullYear() && this.displayedMonth == g.getMonth() && c(".dp-calendar td.other-month", this.context).each(function() {
                        var a = c(this), f = Number(a.text());
                        f < 13 && f > b && a.addClass("disabled")
                    })
                }
            }
            this._applyRenderCallbacks()
        },_closeCalendar: function(b, f) {
            if (!f || f == this.ele) {
                c(document).unbind("mousedown.datepicker");
                c(document).unbind("keydown.datepicker");
                this._clearCalendar();
                c("#dp-popup a").unbind();
                c("#dp-popup").empty().remove();
                b || c(this.ele).trigger("dpClosed", [this.getSelected()])
            }
        },_clearCalendar: function() {
            c(".dp-calendar td", this.context).unbind();
            c(".dp-calendar", this.context).empty()
        }});
    c.dpConst = {SHOW_HEADER_NONE: 0,SHOW_HEADER_SHORT: 1,SHOW_HEADER_LONG: 2,POS_TOP: 0,POS_BOTTOM: 1,POS_LEFT: 0,POS_RIGHT: 1,DP_INTERNAL_FOCUS: "dpInternalFocusTrigger"};
    c.dpText = {TEXT_PREV_YEAR: "Previous year",TEXT_PREV_MONTH: "Previous month",
        TEXT_NEXT_YEAR: "Next year",TEXT_NEXT_MONTH: "Next month",TEXT_CLOSE: "Close",TEXT_CHOOSE_DATE: "Choose date",HEADER_FORMAT: "mmmm yyyy"};
    c.dpVersion = "$Id$";
    c.fn.datePicker.defaults = {month: void 0,year: void 0,showHeader: c.dpConst.SHOW_HEADER_SHORT,startDate: void 0,endDate: void 0,inline: false,renderCallback: null,createButton: true,showYearNavigation: true,closeOnSelect: true,displayClose: false,selectMultiple: false,numSelectable: Number.MAX_VALUE,clickInput: false,rememberViewedMonth: true,selectWeek: false,verticalPosition: c.dpConst.POS_TOP,
        horizontalPosition: c.dpConst.POS_LEFT,verticalOffset: 0,horizontalOffset: 0,hoverClass: "dp-hover",autoFocusNextInput: false};
    if (c.fn.bgIframe == void 0)
        c.fn.bgIframe = function() {
            return this
        };
    c(window).bind("unload", function() {
        var b = c.event._dpCache || [], f;
        for (f in b)
            c(b[f].ele)._dpDestroy()
    })
})(jQuery);
(function() {
    if ($.browser.msie && $.browser.version < 7) {
        document.write('<div class="ie6-notsupported"><div id="logo" class="logo-l"></div><div class="broswer-update"><div class="a-broswer"><a class="chrome" href="http://www.google.cn/chrome/intl/zh-CN/landing_chrome.html" target="_blank">\u8c37\u6b4c\u6d4f\u89c8\u5668</a><a class="ie" href="" target="_blank">\u5347\u7ea7IE</a></div></div></div>');
        $("html,body").css({width: "100%",height: "100%",overflow: "hidden"});
        $("#logo").css("top", (WindowSize.height -
            306) / 4 - 36);
        navigator.userAgent.indexOf("Windows NT 6.1") > -1 ? $(".ie").attr("href", "http://dl.pconline.com.cn/download/60835.html") : $(".ie").attr("href", "http://dl.pconline.com.cn/html_2/1/104/id=49581&pn=0.html")
    }
})();
$(function() {
    var c = $("body"), g = $("#flash-notice,#flash-error,#flash-alert"), b;
    if (g.length) {
        b = g.width();
        g.css("margin-left", -b / 2);
        setTimeout(function() {
            g.fadeOut(200, function() {
                g.remove();
                g = null
            })
        }, 3E3)
    }
    $("button").prop("hidefocus", true).attr("hidefocus", "true");
    c.append('<div class="g-preload"><i class="l1"></i><i class="l2"></i></div>');
    var d, f = $("#new-notice"), m = function() {
        $.get("/notifications.json", function(a) {
                a && a.unread_count > 0 ? f.text(a.unread_count).removeClass("hidden") : f.addClass("hidden")
            },
            "json")
    };
    if (f.length > 0) {
        d = setInterval(m, 6E4);
        $(window).on("useridle", function() {
            clearInterval(d);
            d = setInterval(m, 12E5)
        }).on("userpresent", function() {
                clearInterval(d);
                d = setInterval(m, 6E4)
            })
    }
});
$(document).ajaxError(function(c, g) {
    g.status == 401 ? open_sign_in_window() : g.status == 403 && $(function() {
        $.confirm("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5", null, {btnCancel: false})
    })
});
function open_sign_in_window() {
    $.fancybox("/users/sign_in?iframe=true", {scrolling: "no",padding: 0,width: 450,height: 360,type: "iframe"})
}
function destinationSearch() {
    var c = $('input[name="q"]').hasPlaceholder();
    $("#destination-search").submit(function() {
        var g = c.val();
        if (!g || g == c.attr("placeholder"))
            return false
    })
}
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-33504546-1"]);
_gaq.push(["_trackPageview"]);
$(function() {
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.async = true;
    c.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var g = document.getElementsByTagName("script")[0];
    g.parentNode.insertBefore(c, g)
});
_V_.options.flash.swf = "http://cyjs.qiniudn.com/assets/video-js/video-js-6e518d1400bea4ce1a96767e3d705b88.swf";
