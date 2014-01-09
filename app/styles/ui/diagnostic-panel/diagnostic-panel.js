$(document).ready(function () {

	document.previewWin;

	$(".div320px").click(function () {
		document.previewWin = showPreview(document.previewWin, 320,480);
	});
	$(".div480px").click(function () {
		document.previewWin = showPreview(document.previewWin, 480,320);
	});
	$(".div580px").click(function () {
		document.previewWin = showPreview(document.previewWin, 580,480);
	});
	$(".div768px").click(function () {
		document.previewWin = showPreview(document.previewWin, 768,1024);
	});
	$(".div980px").click(function () {
		document.previewWin = showPreview(document.previewWin, 980,768);
	});
	$(".div1200px").click(function () {
		document.previewWin = showPreview(document.previewWin, 1200,768);
	});
	$(".div1700px").click(function () {
		document.previewWin = showPreview(document.previewWin, 1700,768);
	});

});

function showPreview(win, width, height) {
	if(win != null && win.location != null) {
		win.resizeTo(width, height);
		return win;
	} else {
		return window.open(document.location.href, "newWin", "width=" + width + ",height=" + width);
	}
}