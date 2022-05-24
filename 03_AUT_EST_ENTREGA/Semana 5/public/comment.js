function fun() {
    var a = document.getElementById('comment').value;

    document.getElementById('sei').innerHTML = 'Comentário: ' + a;

};

var darkmode = 0
function botao(){
    if(darkmode==0){
        darkmode = 1
        $("body").hide()
        $("body").fadeIn("20000")
        $("#corpo").css({"color": "white"})
        $("#corpo").css({"backgroundColor": "black"})
        $(".top-selection").css({"backgroundColor": "#151b29"})
        $("body").css({"background-image": "radial-gradient(#121212 25%, rgb(53, 47, 232) 90%)"})
        $(".main").css({none})
        return darkmode
    }

}