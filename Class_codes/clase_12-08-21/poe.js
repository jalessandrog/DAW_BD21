function colorea_azul() {
    let elemento = document.getElementById("titulo_menu");
    elemento.style.color= "blue";
}

function colorea_verde() {
    let elemento = document.getElementById("titulo_menu");
    elemento.style.color= "green";
}

function muestra_platillos(){
    const platillos = [];
    platillos.push("Carnita Asada");
    platillos.push("Spaguetti");
    platillos.push("Lasagna");
    platillos.push("Pay de Limon");

    let html = "<ul>";
    for(let platillo of platillos){
        html += "<li>" + platillo + "</li>";
    }
    html += "</ul>";

    document.getElementById("platillos").innerHTML = html;
}

document.getElementById("titulo_menu").onclick = muestra_platillos;