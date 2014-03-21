PUBL = !1;
var browser = { name: "", prefix: "", isIE: !1, versionIE: "", supportHTML5: !0, isFlash: !1, detect: function () {
    browser.checkFlash(); var a = navigator.userAgent.toLowerCase().match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0]; browser.name = "version" == a[1] ? a[3] : a[1]; switch (browser.name) {
        case "safari": browser.prefix = "Webkit"; break; case "firefox": browser.prefix = "Moz"; break; case "opera": browser.prefix = "O"; break; case "ie": browser.prefix = "ms"; browser.isIE =
!0; document.all && !document.querySelector && (browser.supportHTML5 = !1, browser.versionIE = 7); document.all && (document.querySelector && !document.getElementsByClassName) && (browser.supportHTML5 = !1, browser.versionIE = 8); document.all && (document.querySelector && document.getElementsByClassName && !window.atob) && (browser.versionIE = 9); document.all && (document.querySelector && document.getElementsByClassName && window.atob) && (browser.versionIE = 10, browser.prefix = "ms"); break; case "chrome": browser.prefix = "Webkit"; break; case "unknown": browser.prefix =
"webkit"
    } 
}, checkFlash: function () {
    var a = 0, b = null; if ("undefined" != typeof navigator.plugins && "object" == typeof navigator.plugins["Shockwave Flash"]) { if ((b = navigator.plugins["Shockwave Flash"].description) && !("undefined" != typeof navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) b = b.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a = parseInt(b.replace(/^(.*)\..*$/, "$1"), 10) } else if ("undefined" != typeof window.ActiveXObject) try {
        var c =
new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); if (c && (b = c.GetVariable("$version"))) b = b.split(" ")[1].split(","), a = parseInt(b[0], 10)
    } catch (d) { } 0 != a && (browser.isFlash = !0)
} 
}, workspace = { w: 1200, h: 800, listeners: [], addListener: function (a) { workspace.listeners.push(a) }, getSize: function () {
    browser.supportHTML5 ? (workspace.w = window.innerWidth ? window.innerWidth : workspace.w, workspace.h = window.innerHeight ? window.innerHeight : workspace.h) : (workspace.w = document.documentElement.clientWidth ? document.documentElement.clientWidth :
workspace.w, workspace.h = document.documentElement.clientHeight ? document.documentElement.clientHeight : workspace.h)
}, callFn: function () { for (var a = 0; a < workspace.listeners.length; a++) workspace.listeners[a].call(this) } 
}, blackBG = { create: function () {
    var a = document.createElement("div"); a.id = "blackBG"; a.style.width = workspace.w + "px"; a.style.height = workspace.h + "px"; a.style.position = "fixed"; a.style.top = "0px"; a.style.left = "0px"; a.style.display = "block"; a.style.zIndex = "1000000"; a.style.backgroundColor = "rgba(0,0,0,0.7)";
    a.addEventListener("click", blackBG.remove); var b = document.createElement("div"); b.className = "closeBG"; a.appendChild(b); workspace.addListener(blackBG.resize); document.getElementById("bodyBg").parentNode.appendChild(a)
}, remove: function (a) { var b = document.getElementById("blackBG"); b.parentNode.removeChild(b); a.preventDefault(); a.stopPropagation() }, resize: function () { var a = document.getElementById("blackBG"); a.style.width = workspace.w + "px"; a.style.height = workspace.h + "px" } 
}, notification = { noFlash: !1, show: function () {
    if (-1 !=
window.location.hash.indexOf("noFlash")) {
        notification.noFlash = !0; blackBG.create(); var a = document.getElementById("blackBG"); a.innerHTML = '<div id="flash-notification" style="width:600px; min-height:200px;  margin: auto; position: relative; top: 30%; padding: 18px; overflow: hidden; background-color: rgb(255, 255, 255); border: 1px solid rgb(200, 200, 200); border-radius: 7px; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: 14px; font-family: Arial; position: relative; background-position: initial initial; background-repeat: initial initial; -webkit-box-shadow: 0px 3px 10px rgba(0,0,0,.8);-moz-box-shadow: 0px 3px 10px rgba(0,0,0,.8); box-shadow: 0px 3px 10px rgba(0,0,0,.8);"><a id="closeButton" href="javascript:void();" style="display:block;width:30px;height:30px;text-decoration:none;font:0/0 a;cursor:pointer;background:url(style/close.png);position:absolute;top:5px;right:5px;left:auto;bottom:auto;"></a><div style="display:block;cursor:pointer;min-width:50px;min-height:50px;display:block;float:left;text-decoration:none;margin:10px 28px 10px 10px; "><img id="noteImage" onload="notification.animated(this);"  style="-webkit-box-shadow: 0px 3px 10px rgba(0,0,0,.5);-moz-box-shadow: 0px 3px 10px rgba(0,0,0,.5); box-shadow: 0px 3px 10px rgba(0,0,0,.5);" src="' +
COVER_SRC + '"></div><div id="noteText" style="margin-left: 128px;"><h3 style="font-weight:bold;padding: 14px 10px 10px 10px; font-size:18px; margin-right: 20px;line-height: 22px;">' + TITLE + '</h3><div style="padding: 10px;">' + LOCALS.NOTIFICATION_TEXT + '</div><a id="getFlash" href="http://get.adobe.com/flashplayer/" style="display:block;text-decoration:none;margin:15px 10px 0 10px;" target="_blank"><img src="http://www.adobe.com/macromedia/style_guide/images/160x41_Get_Flash_Player.jpg" alt="" border="0" style="border:0;display:block;" width="160" height="41"></a></div></div>';
        a.addEventListener("DOMContentLoaded", notification.eventFn(), !1)
    } 
}, eventFn: function () {
    var a = document.getElementById("flash-notification"); a.addEventListener("click", function (a) { a.preventDefault ? a.preventDefault() : a.returnValue = !1; a.stopPropagation ? a.stopPropagation() : a.returnValue = !1 }); a.childNodes[0].addEventListener("click", function (a) { blackBG.remove(a); a.preventDefault ? a.preventDefault() : a.returnValue = !1; a.stopPropagation ? a.stopPropagation() : a.returnValue = !1 }); var b = function (a) {
        window.location.replace(FULL_SRC);
        a.preventDefault ? a.preventDefault() : a.returnValue = !1; a.stopPropagation ? a.stopPropagation() : a.returnValue = !1
    }; a.getElementsByTagName("img") && a.getElementsByTagName("img")[0].parentNode.addEventListener("click", b); a = document.getElementById("getFlash"); a.childNodes[0].addEventListener("click", function (a) { window.open("http://get.adobe.com/flashplayer/", "", ""); a.preventDefault ? a.preventDefault() : a.returnValue = !1; a.stopPropagation ? a.stopPropagation() : a.returnValue = !1 })
}, animated: function (a) {
    a = a.parentNode.parentNode;
    a.childNodes[2].style.marginLeft = a.childNodes[1].offsetWidth + 28 + "px"; a.childNodes[1].innerHTML = '<iframe id="sprateIframe" style="-webkit-box-shadow: 0px 3px 10px rgba(0,0,0,.5);-moz-box-shadow: 0px 3px 10px rgba(0,0,0,.5); box-shadow: 0px 3px 10px rgba(0,0,0,.5);" frameborder="0"  width="' + a.childNodes[1].offsetWidth + 'px" height="' + (a.childNodes[1].offsetHeight - 3) + 'px"  title=' + TITLE + ' src="' + SPREAD_SRC + '" type="text/html" scrolling="no" marginwidth="0" marginheight="0"></iframe>'
} 
}, video = { play: function (a,
b) {
    blackBG.create(); var c = document.createElement("div"); c.id = "videoPlayer"; c.style.position = "relative"; c.style.margin = "5% auto"; c.style.minHeight = "200px"; c.style.minWidth = "300px"; c.style.maxHeight = "85%"; c.style.maxWidth = "80%"; c.style.width = "85%"; c.style.height = "85%"; c.style.backgroundColor = "rgba(0,0,0,1)"; document.getElementById("blackBG").appendChild(c); var d = document.createElement("iframe"); c.appendChild(d); d.className = "youtube-player"; d.type = "text/html"; d.width = "100%"; d.height = "100%"; d.frameBorder =
"0"; d.style.display = "inline-block"; "YouTube" == a ? (d.className = "youtube-player", d.src = "http://www.youtube.com/embed/" + b + "?autoplay=1&html5=1") : "Vimeo" == a && (d.src = "http://player.vimeo.com/video/" + b + "?title=0&amp;byline=0&amp;portrait=0&amp;color=da4541")
} 
}; BASIC_SRC = "";
function initLinks() {
    var a = "png" == COVER_SRC.split(".")[COVER_SRC.split(".").length - 1] ? "p" : "j"; if (-1 != document.domain.indexOf("publ.com")) {
        for (var b = document.URL.split("/"), c = "", d = 0; d < b.length; d++) { "bookdata" == c.toLowerCase() && (PUBL = b[d]); if ("seo" == b[d].toLowerCase() || "basic-html" == b[d].toLowerCase()) PUBL = c; c = b[d] } BASIC_SRC = decodeURIComponent("http://" + document.domain + "/BookData/" + PUBL + "/basic-html"); FULL_SRC = decodeURIComponent("http://" + document.domain + "/session/detectbrowser?returnTo=/" + PUBL); SPREAD_SRC =
decodeURIComponent("http://" + document.domain + "/e/" + PUBL + "?p=1&a=o&f=" + a + "&mode=spread&link=" + FULL_SRC)
    } else { var b = window.location.pathname.split("/"), e = FULL_SRC.split("/"), c = window.location.hostname, c = -1 != b[1].indexOf(":") ? b[1] : "http://" + c + "/" + b[1]; if (1 < b.length) for (d = 2; d < b.length - e.length; d++) c = c + "/" + b[d]; BASIC_SRC = decodeURIComponent(c); FULL_SRC = decodeURIComponent(c + "/" + e[e.length - 1]); SPREAD_SRC = decodeURIComponent(SPREAD_SRC + "?p=1&a=o&f=" + a + "&link=" + FULL_SRC) } 
}
function init() { initLinks(); browser.detect(); workspace.getSize(); workspace.addListener(workspace.getSize); browser.supportHTML5 ? window.addEventListener("resize", workspace.callFn, !1) : window.location.pathname.indexOf("index.html") && window.attachEvent("onresize", workspace.callFn); var a = document.getElementsByTagName("head")[0], b = document.createElement("script"); b.id = "formPrinter"; b.type = "text/javascript"; b.src = LOCALS_FOLDER + "/" + LANG + "/textlang.js"; a.appendChild(b) }
function bindReady(a) {
    function b() { c || (c = !0, setTimeout(a, 50)) } var c = !1; if (document.addEventListener) document.addEventListener("DOMContentLoaded", function () { b() }, !1); else if (document.attachEvent) { if (document.documentElement.doScroll && window == window.top) { var d = function () { if (!c && document.body) try { document.documentElement.doScroll("left"), b() } catch (a) { setTimeout(d, 0) } }; d() } document.attachEvent("onreadystatechange", function () { "complete" === document.readyState && b() }) } window.addEventListener ? window.addEventListener("load",
b, !1) : window.attachEvent ? window.attachEvent("onload", b) : window.onload = b
} bindReady(init);