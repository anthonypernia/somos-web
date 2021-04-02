
var url = "https://raw.githubusercontent.com/anthonyperniah/IntroWebCH/master/data/data.json"
var elements_div_card = document.getElementsByClassName("card");

function get_data(element) {
    var Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        var result = JSON.parse(Http.response);
        result.testimonios.forEach(function(d) {
            var name_e = element.getElementsByTagName("h3").item(0)
            var name_j = d['nombre']
            if(name_j.toLowerCase()===name_e.toLowerCase()){
                console('gggdggd')
            }
        });
    }
}
function set_data(){
    for (var e = 0; e < elements_div_card.length; e++) {
        get_data(elements_div_card[e])
    }
}


document.addEventListener("DOMContentLoaded", set_data());