
$(document).ready(function(){
    $(".h1").on({
        mouseenter: function(){
            $(this).css("color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("color", "lightblue");
        },
        click: function(){
            $(this).css("color", "yellow");
        }
    });
    $("#text").on({
        mouseenter: function(){
            $(this).css("color", "lightblue");
        },
        mouseleave: function(){
            $(this).css("color", "lightgray");
        },
        click: function(){
            $(this).css("color", "red");
        }
    });
    $("input").on({
        blur: function(){
            $(this).css("background-color", "lightgray");
        },
        focus: function(){
            $(this).css("background-color", "lightblue");
        },
    });
    $("ul li").on({
        mouseenter: function(){
            $(this).css("font-weight", "bold");
        },
        mouseleave: function(){
            $(this).css("font-weight", "normal");
        },
        mousedown: function(){
            $(this).css("font-weight", "bold");
        },
    });
    $("form").on({
        submit: function(){
            alert("Datos enviados");
        },
    });
    $("#pregunta1").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
            $("#pregunta1 h5").css("font-weight", "bold");
            $("#pregunta1 h5").css("color", "#13696A");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
            $("#pregunta1 h5").css("font-weight", "normal");
            $("#pregunta1 h5").css("color", "black");
        },
    });
    $("#pregunta2").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
            $("#pregunta2 h5").css("font-weight", "bold");
            $("#pregunta2 h5").css("color", "#13696A");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
            $("#pregunta2 h5").css("font-weight", "normal");
            $("#pregunta2 h5").css("color", "black");
        },
    });
    $("#pregunta3").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
            $("#pregunta3 h5").css("font-weight", "bold");
            $("#pregunta3 h5").css("color", "#13696A");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
            $("#pregunta3 h5").css("font-weight", "normal");
            $("#pregunta3 h5").css("color", "black");
        },
    });
    $("#pregunta4").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
            $("#pregunta4 h5").css("font-weight", "bold");
            $("#pregunta4 h5").css("color", "#13696A");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
            $("#pregunta4 h5").css("font-weight", "normal");
            $("#pregunta4 h5").css("color", "black");
        },
    });
})
