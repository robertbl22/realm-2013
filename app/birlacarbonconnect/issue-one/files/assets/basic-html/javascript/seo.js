book = { width: 600, height: 400, minWidth: 560, scale: 1, less: !1, getSize: function () { var a = document.getElementById("Page"); a && (book.less = 400 > a.offsetWidth ? !0 : !1, book.height = !book.less ? a.offsetHeight : 400 * a.offsetHeight / a.offsetWidth, book.width = !book.less ? a.offsetWidth : 400, book.minWidth = 400 >= book.width ? book.width + 160 : book.minWidth, document.getElementsByTagName("body")[0].style.minWidth = book.minWidth + "px") }, correct: function () {
    var a = document.getElementById("Book"), b = document.getElementById("Page"); book.width > workspace.w -
160 ? (book.scale = workspace.w > book.minWidth ? (workspace.w - 160) / book.width : book.less ? 1 : 400 / book.width, a.style.width = book.width * book.scale + "px", b.style.height = book.height * book.scale + "px") : 400 > a.offsetWidth && (book.scale = book.less ? 1 : 400 / a.style.width.split("px")[0], a.style.width = "400px", b.style.height = book.height * book.scale + "px"); if (b = document.getElementById("navigation")) {
        var c = browser.supportHTML5 ? 135 : 120; b.style.width = a.offsetWidth + c + "px"; book.minWidth < workspace.w && (b.style.left = (workspace.w - a.offsetWidth -
c) / 2 + "px"); b.style.top = book.height + 100 < workspace.h ? (book.height + 100) / 2 + "px" : "50%"
    } browser.supportHTML5 || (a = document.getElementById("bodyBg"), b = a.currentStyle || window.getComputedStyle(a, null), "none" != b.backgroundImage && (c = document.createElement("img"), c.src = b.backgroundImage.substr(5, b.backgroundImage.length - 7), c.style.position = "fixed", c.style.top = "0px", c.style.left = "0px", c.style.width = "100%", c.style.height = "100%", a.appendChild(c), a.style.backgroundImage = "none"))
}, checkLongString: function () {
    for (var a =
document.getElementsByTagName("td"), b = 0; b < a.length; b++) { var c = a[b].parentNode.parentNode.parentNode, c = "LI" == c.tagName ? c : "LI" == c.parentNode.tagName ? c.parentNode : NaN; if (a[b].offsetWidth > c.offsetWidth - 40) { var c = c.offsetWidth - 40, d = a[b].getElementsByTagName("a"); d[0].innerText && (d[0].innerText = d[0].innerText.substring(0, c / 8) + "..."); d[0].innerHTML && (d[0].innerHTML = d[0].innerHTML.substring(0, c / 8) + "...") } } 
} 
};
function initContent() { book.getSize(); book.correct(); workspace.addListener(book.correct); window.sessionStorage && !window.sessionStorage.getItem(encodeURIComponent(FULL_SRC)) && (window.sessionStorage.setItem(encodeURIComponent(FULL_SRC), !0), about.action()); -1 != document.location.pathname.indexOf("toc.html") ? book.checkLongString() : zoom(book.scale) }
var about = { isShow: !1, action: function () { about.isShow ? (document.getElementById("infoBalloon").style.opacity = 0, window.setTimeout(function () { document.getElementById("infoBalloon").style.display = "none" }, 500), about.isShow = !1) : (document.getElementById("infoBalloon").style.display = "block", document.getElementById("infoBalloon").style.opacity = 1, about.isShow = !0) } };
function localPending() {
    document.getElementById("fullVersionLink").innerText = LOCALS.FULL_VERSION; document.getElementById("fullVersionLink").href = "" != CURRENT_PAGE ? FULL_SRC + "#" + CURRENT_PAGE : FULL_SRC; document.getElementById("tocLink") && (document.getElementById("tocLink").innerText = LOCALS.TOC_TITLE); var a = "", a = "" != CURRENT_PAGE ? BASIC_SRC + "/index.html#" + CURRENT_PAGE : BASIC_SRC + "/index.html", b = "" != CURRENT_PAGE ? FULL_SRC + "#" + CURRENT_PAGE : FULL_SRC, a = browser.isFlash ? browser.supportHTML5 ? LOCALS.SEO_INFO_RECOMMENDATION1.replace("{0}",
"<a href='" + decodeURIComponent(b) + "'>").replace("{1}", "</a>").replace("{2}", "<a href='" + a + "'>").replace("{3}", "</a>") : LOCALS.SEO_INFO_RECOMMENDATION1.replace("{0}", "<a href='" + decodeURIComponent(b) + "'>").split("{1}")[0] + "</a>" + LOCALS.SEO_INFO_RECOMMENDATION1.split("{3}")[1] : browser.supportHTML5 ? LOCALS.SEO_INFO_RECOMMENDATION3.replace("{0}", "<a href='" + decodeURIComponent(a) + "'>").replace("{1}", "</a>").replace("{2}", "<a href='" + decodeURIComponent("http://get.adobe.com/flashplayer/") + "' target='_blank'>").replace("{3}",
"</a>") : LOCALS.SEO_INFO_RECOMMENDATION2.replace("{0}", "<a href='" + decodeURIComponent("http://windows.microsoft.com/en-us/internet-explorer/download-ie") + "' target='_blank'>").replace("{1}", "</a>").replace("{2}", "<a href='" + decodeURIComponent("http://get.adobe.com/flashplayer/") + "' target='_blank'>").replace("{3}", "</a>"); document.getElementById("boxVersion").innerHTML = LOCALS.SEO_VERSION + "<span style='position: relative; top:0px; left:0px; overflow: hidden;'><img src='./style/info.png' style='width: 14px; height:14px; cursor: pointer; position: relative; top: 4px; left:0px;' onclick='javascript:about.action();'><div class='balloon' id='infoBalloon'><div class='arrow'></div><a href='javascript:about.action();' class='closeButton' title='Close'></a><h2>" +
LOCALS.SEO_INFO_TITLE.replace("{0}", document.title) + "</h2><p>" + LOCALS.SEO_INFO_TEXT.replace("{0}", "<b>" + document.title + "</b>").replace("{1}", "<br>") + "</p><br><p>" + a + "</p></div></span>"; document.getElementById("TocHeader") && (document.getElementById("TocHeader").getElementsByTagName("h2")[0].innerText = LOCALS.TOC_TITLE); document.getElementById("TocHeader") && (document.getElementById("TocHeader").getElementsByTagName("h2")[0].innerText = LOCALS.TOC_TITLE); document.getElementById("RightToolText") && "SPAN" !=
document.getElementById("RightToolText").tagName && (-1 != document.getElementById("RightToolText").href.indexOf("toc.html") ? document.getElementById("RightToolText").title = LOCALS.TOC_TITLE : document.getElementById("RightToolText").title = LOCALS.PAGE + " " + document.getElementById("RightToolText").title); document.getElementById("LeftToolText") && "SPAN" != document.getElementById("LeftToolText").tagName && (-1 != document.getElementById("LeftToolText").href.indexOf("toc.html") ? document.getElementById("LeftToolText").title =
LOCALS.TOC_TITLE : document.getElementById("LeftToolText").title = LOCALS.PAGE + " " + document.getElementById("LeftToolText").title); notification.show(); initContent()
}
function rotateContent(a) {
    var b = a.style.transform.substr(7, a.style.transform.length - 11), b = b.replace(",", "."); a.style.overflow = "visible"; var c = a.offsetWidth, d = Math.cos(b), e = Math.sin(b); 9 > 1 * browser.versionIE ? (a = a.childNodes[0], a.style.filter = 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11 = ' + d + ", M12 = " + -e + ", M21 = " + e + ", M22 = " + d + ")", Math.PI / 2 <= b && b < Math.PI ? a.style.marginLeft = Math.round(c * d) + "px" : Math.PI <= b && b < 3 * Math.PI / 2 ? (a.style.marginLeft = Math.round(c * d) + "px", a.style.marginTop =
Math.round(c * e) + "px") : 3 * Math.PI / 2 <= b && b < 2 * Math.PI && (a.style.marginTop = Math.round(c * e) + "px")) : 9 == 1 * browser.versionIE && (a.style.msTransformOrigin = "0 0 0", a.style.msTransform = " rotate(" + b + "rad)", a.style.left = 1 * a.style.left.replace("px", "") - a.style.width.replace("px", "") / 2 + Math.round(c * d / 2) + "px", a.style.top = 1 * a.style.top.replace("px", "") + Math.round(c * e / 2) + "px")
}
function zoom(a) {
    for (var b = document.getElementById("Page").childNodes, c = 0; c < b.length; c++) if ("DIV" == b[c].tagName) {
        if (1 != a && !b[c].id) {
            b[c].style.top = 1 * b[c].style.top.replace("px", "") * a + "px"; b[c].style.left = 1 * b[c].style.left.replace("px", "") * a + "px"; b[c].style.width = Math.abs(b[c].style.width.replace("px", "")) * a + "px"; b[c].style.height = Math.abs(b[c].style.height.replace("px", "")) * a + "px"; var d = b[c].getElementsByTagName("img")[0]; if (d) {
                var e = d.currentStyle || window.getComputedStyle(b[c], null); d.style.top =
1 * d.style.width.replace("px", "") * a + "px"; d.style.left = 1 * d.style.width.replace("px", "") * a + "px"; d.style.width = 1 * d.style.width.replace("px", "") * a + "px"; d.style.height = 1 * d.style.height.replace("px", "") * a + "px"
            } if (d = b[c].getElementsByTagName("iframe")[0]) d.currentStyle || window.getComputedStyle(b[c], null), d.style.top = 1 * d.style.width.replace("px", "") * a + "px", d.style.left = 1 * d.style.width.replace("px", "") * a + "px", d.style.width = 1 * d.style.width.replace("px", "") * a + "px", d.style.height = 1 * d.style.height.replace("px",
"") * a + "px"
        } if (d = b[c].getElementsByTagName("span")[0]) {
            e = d.currentStyle || window.getComputedStyle(d, null); if (scale = d.style.fontSize ? Math.abs(d.style.fontSize.replace("px", "")) * a : Math.abs(e.fontSize.replace("px", "")) * a) if (d.style.fontSize = scale + "px", d.offsetWidth > b[c].offsetWidth) for (; d.offsetWidth > b[c].offsetWidth && 1 < scale; ) scale -= 1, d.style.fontSize = scale + "px"; else if (d.offsetWidth < b[c].offsetWidth) {
                for (e = 0; d.offsetWidth < b[c].offsetWidth && 5 > e; ) scale += 1, e++, d.style.fontSize = scale + "px"; d.offsetWidth >
b[c].offsetWidth && (scale -= 1, d.style.fontSize = scale + "px")
            } e = (b[c].offsetHeight - d.offsetHeight) / 2; e = e.toFixed(); 0 < e && (d.style.padding = e + "px 0px"); d.style.top = (b[c].offsetHeight - d.offsetHeight) / 2 + "px"
        } browser.isIE && b[c].style.transform && rotateContent(b[c])
    } 
};