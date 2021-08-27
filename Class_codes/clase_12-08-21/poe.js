const platillos = [];
platillos.push("Carne asada");
platillos.push("Spaguetti");
platillos.push("Lasagna");
platillos.push("Sopa de coditos");
platillos.push("Pay de limón");

function colorea_azul() {
    console.log("Colorea azul");
    let elemento = document.getElementById("titulo_menu");
    //console.log(elemento);
    elemento.style.color = "blue";
}

function colorea_verde() {
    console.log("Colorea verde");
    let elemento = document.getElementById("titulo_menu");
    //console.log(elemento);
    elemento.style.color = "green";
}

function muestra_platillos() {
    
    let html = "<ul>";

    for(let platillo of platillos) {
        html += "<li>" + platillo + "</li>";
    }

    html += "</ul>";

    document.getElementById("platillos").innerHTML = html;
}

function buscando() {
    for (let platillo of platillos) {
        if(document.getElementById("comida").value === platillo) {
            return true;
        }
    }
    return false;
}

function buscar_platillo() {
    console.log("Buscando platillo...");
    if (buscando()) {
        document.getElementById("respuesta").innerHTML = "¡En seguida sale su platillo!"; 
    } else {
        document.getElementById("respuesta").innerHTML = "Agotado, ordena algo más por favor."; 
    }
    
}

document.getElementById("boton_menu").onclick = muestra_platillos;

document.getElementById("comida").onkeyup = buscar_platillo;