function ejercicio_validacion() {
    let font = document.getElementById("ejercicio01");
    if (font.style.fontStyle === 'italic') {
        font.style.fontStyle = 'normal';
    } else {
        font.style.fontStyle = 'italic';
    }

    let x = document.getElementById("form");
    x.removeAttribute('hidden'); 
}

function validacion_fontstyle() {
    let font = document.getElementById("ejercicio01");
    if (font.style.fontStyle === 'italic') {
        font.style.fontStyle = 'normal';
    } else {
        font.style.fontStyle = 'italic';
    }

    if (font.style.fontWeight === 'bold') {
        font.style.fontWeight = 'normal';
    } else {
        font.style.fontWeight = 'bold';
    }
}


function submit() {    
    document.getElementById('thanks').innerHTML = "Tus datos se han recibido. Gracias!";
}

function requerido(){
    const error = document.getElementById('error');
    error.style.color = 'red';
    error.removeAttribute('hidden');
}

function verificar() {
    let password = document.getElementById("contraseña").value;
    let password2 = document.getElementById("contraseña2").value;
    if(!password || !password2){
        if(!password){
            const error = document.getElementById('error2');
            error.style.color = 'red';
            error.removeAttribute('hidden');
        } 
        if(!password2){
            const error = document.getElementById('error3');
            error.style.color = 'red';
            error.removeAttribute('hidden');
        }
    }else{
        if (password2 == password) {
            const aprobacion = document.getElementById('mensaje');
            aprobacion.style.color = 'green';
            aprobacion.removeAttribute('hidden');
        } else {
            alert("Las contraseñas no coinciden")
        }
    }
}

// EJERCICIO 2
function mostrar_tabla() {
    let tabla = document.getElementById("tabla");
    tabla.removeAttribute('hidden'); 
}

function total1(){
    let precio_unitario = document.getElementById("precio1").value;
    let cantidad = document.getElementById('cantidad1').value;
    let total= parseFloat(precio_unitario*cantidad);
    let IVA= parseFloat(.16*total);
    let total_final = Math.floor(parseFloat(total+IVA));;
    document.getElementById("total_sinIVA1").innerHTML = total + " MXN";
    document.getElementById("IVA1").innerHTML = IVA + " MXN";
    document.getElementById("total_conIVA1").innerHTML = total_final + " MXN";
}

function total2(){
    let precio_unitario = document.getElementById("precio2").value;
    let cantidad = document.getElementById('cantidad2').value;
    let total= parseFloat(precio_unitario*cantidad);
    let IVA= parseFloat(.16*total);
    let total_final = Math.floor(parseFloat(total+IVA));
    document.getElementById("total_sinIVA2").innerHTML = total + " MXN";
    document.getElementById("IVA2").innerHTML = IVA + " MXN";
    document.getElementById("total_conIVA2").innerHTML = total_final + " MXN";
}

function total3(){
    let precio_unitario = document.getElementById('precio3').value;
    let cantidad = document.getElementById('cantidad3').value;
    let total= parseFloat(precio_unitario*cantidad);
    let IVA= parseFloat(.16*total);
    let total_final = Math.floor(parseFloat(total+IVA));;
    document.getElementById("total_sinIVA3").innerHTML = total + " MXN";
    document.getElementById("IVA3").innerHTML = IVA + " MXN";
    document.getElementById("total_conIVA3").innerHTML = total_final + " MXN";
}

function total4(){
    let precio_unitario = document.getElementById('precio4').value;
    let cantidad = document.getElementById('cantidad4').value;
    let total= parseFloat(precio_unitario*cantidad);
    let IVA= parseFloat(.16*total);
    let total_final = Math.floor(parseFloat(total+IVA));;
    document.getElementById("total_sinIVA4").innerHTML = total + " MXN";
    document.getElementById("IVA4").innerHTML = IVA + " MXN";
    document.getElementById("total_conIVA4").innerHTML = total_final + " MXN";
}

function total5(){
    let precio_unitario = document.getElementById('precio5').value;
    let cantidad = document.getElementById('cantidad5').value;
    let total= parseFloat(precio_unitario*cantidad);
    let IVA= parseFloat(.16*total);
    let total_final = Math.floor(parseFloat(total+IVA));
    document.getElementById("total_sinIVA5").innerHTML = total + " MXN";
    document.getElementById("IVA5").innerHTML = IVA +" MXN";
    document.getElementById("total_conIVA5").innerHTML = total_final +" MXN";
}