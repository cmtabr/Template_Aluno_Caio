function fun() {
    var a = document.getElementById('comment').value;

    document.getElementById('sei').innerHTML = 'Comentário: ' + a;

};

var darkmode = 0
function botao(){
    if(darkmode==1){
        darkmode = 0
        $("body").hide()
        $("body").fadeIn("20000")
        $("#principle").css({"color": "black"})
        $("#principle").css({"backgroundColor": "white"})
        $(".top-selection").css({"backgroundColor": "#151b29"})
        $("body").css({"background-image": "radial-gradient(#c7c7c7 25%, #c7c7c7 74%)"})
        return darkmode
    }
    if(darkmode==0){
        darkmode = 1
        $("body").hide()
        $("body").fadeIn("20000")
        $("#principle").css({"color": "white"})
        $("#principle").css({"backgroundColor": "#121212"})
        $(".top-selection").css({"backgroundColor": "rgb(80, 17, 17)"})
        $("body").css({"background-image": "radial-gradient(rgb(18, 18, 18) 25%, rgb(181 47 47) 90%"})
        return darkmode
    }
}