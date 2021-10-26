
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
    $(".card").on({
        mouseenter: function(){
            $("#card-text").show();
        },
        mouseleave: function(){
            $("#card-text").hide();
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
})
