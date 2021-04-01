
var url = "https://raw.githubusercontent.com/anthonyperniah/IntroWebCH/master/data/data.json"

function set_data() {
    var Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        var result = JSON.parse(Http.response);
        console.log(result)
    }
}



document.addEventListener("DOMContentLoaded", set_data());