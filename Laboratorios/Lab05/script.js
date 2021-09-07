function tabla_numeros() {
    const num = prompt("Ingresa un número: ");
    
    let tabla = "";
    if (num){
        if(num>1){
            tabla = tabla + "<tabla>";
            tabla = tabla + "<thead>";
            tabla = tabla + "<tr>";
            tabla = tabla + "<th>Numero</th>";
            tabla = tabla + "<th>Cuadrado</th>";
            tabla = tabla + "<th>Cubo</th>";
            tabla = tabla + "</tr>";
            tabla = tabla + "</thead>";

            tabla = tabla + "<tbody>";

            for (let i=1; i<=num; i++){
                tabla = tabla + "<tr>";
                tabla = tabla + "<td>" + i + "</td>";
                tabla = tabla + "<td>" + Math.pow(i, 2); + "</td>";
                tabla = tabla + "<td>" + Math.pow(i, 3); + "</td>";  
                tabla = tabla + "</tr>";      
            }


            tabla = tabla + "</tbody>";
            tabla = tabla + "</tabla>";
            document.getElementById("tabla_ejercicio1").innerHTML = tabla;
        }
    }
}

function suma_aleatoria(){
    
    const suma_usuario = prompt("Cuál crees que sea la suma de dos números: ");
    var inicio = new Date();
    
    let num1, num2;
    let mensaje = "";

    if (suma_usuario){
        
        num1 = parseInt(Math.random() * 20+1);
        num2 = parseInt(Math.random() * 20+1);

        if((num1 + num2) === suma_usuario){
            mensaje = mensaje + "Correcto!";
            mensaje = mensaje + "<br>"
            mensaje = mensaje + "La suma de " + num1 + " + " + num2 + " es igual a = " + suma_usuario;
        } else{
            mensaje = "Incorrecto!";
            mensaje = mensaje + "<br>"
            mensaje = mensaje + "La suma de " + num1 + " + " + num2 + " NO es igual a = " + suma_usuario;
            mensaje = mensaje + "<br>";
            mensaje = mensaje + "El resultado correcto es = " + (num1 + num2);
        }

        mensaje = mensaje + "<br>";
        mensaje = mensaje + "<br>";
        var fin = new Date();
        mensaje = mensaje + "El tiempo de respuesta del sistema fue: "+ (fin.getTime() - inicio.getTime()) + " milisegundos";

        document.getElementById("resultado_ejercicio2").innerHTML = mensaje;
    }
}

function array_numeros(){
    const cantidad_num = prompt("Cantidad de números a ingresar: ");
    if(cantidad_num){

        let array = [];
        let negativos = 0;
        let positivos = 0;
        let ceros = 0;
        let resultado = "";

        for(let i=0; i<cantidad_num; i++){
            array[i] = prompt("Ingresa el número: ")
        }

        for(let check of array){
            if(check>0){
                positivos++;
            }else if(check===0){
                ceros++;
            }else{
                negativos++;
            }
        }

        resultado = resultado + "En el array" + array + " se tienen: ";
        resultado = resultado + "<br>"
        resultado = resultado + " Números mayores a 0 : " + positivos;
        resultado = resultado + "<br>"
        resultado = resultado + "Números igual a 0 : " +  ceros;        
        resultado = resultado + "<br>"
        resultado = resultado + "Números menores a 0 : " + negativos;
        resultado = resultado + "<br>"

        document.getElementById("resultado_array").innerHTML = resultado;
    }
}

function array_arrays(){
    const filas = prompt("Número de filas de la matriz (cantidad de arreglos): ");
    const columnas = prompt("Número de columnas de la matriz: ");
    
    if(filas){
        if(columnas){

            let resultado = "";
            let matriz = new Array();
            let suma = 0;
            let arreglo = new Array;

            for(let i=0; i<filas; i++){
                matriz [i] = new Array();
                for(var j=0; j<columnas; j++){
                    matriz [i][j] = prompt("Ingresa el número de la coordenada " + i + "," + j);
                }
            }
            console.log(matriz)
        
            for(let i=0; i<filas; i++){
                for(var j=0; j<columnas; j++){
                    num = parseInt(matriz [i][j]);
                    suma = suma + num;
                }
                arreglo[i] = suma/columnas;
                suma = 0;
            }
            
            resultado = resultado + "Arreglo con promedio de cada arreglo de la matriz: ";
            resultado = resultado + "<br>"
            resultado = resultado + "[" + arreglo + "]";
        
            document.getElementById("resultado_arrays").innerHTML = resultado;

        }
    }
}

function inverso(){
    const cifra = prompt("Ingresa una cifra: ");
    if(cifra){

        let resultado= "";

        let arr = Array.from(cifra);
        let inverso = arr.reverse();
        
        for(let i=0; i<inverso.length; i++){
            resultado = resultado + inverso[i];
        }

        resultado = parseInt(resultado);
        document.getElementById("resultado_inverso").innerHTML = resultado;
    }
}




function solucion_problema(){
    
    alert("Analiza la consola para saber los productos disponibles");
    const products = [
        {
            producto: "Carne",
            precio_unidad: 120,
            unidad_medida: "Kilo(s)"
        },
        {
            producto: "Calabacita",
            precio_unidad: 5,
            unidad_medida: "Pieza(s)"
        },
        {
            producto: "Zanahoria",
            precio_unidad: 6,
            unidad_medida: "Pieza(s)",
        },
        {
            producto: "Leche",
            precio_unidad: 20,
            unidad_medida: "Litro(s)"
        },
        {
            producto: "Jamon",
            precio_unidad: 18,
            unidad_medida: "Paquete(s)"
        },
        {
            producto: "Atun",
            precio_unidad: 12,
            unidad_medida: "Lata(s)"
        },
        {
            producto: "Platano",
            precio_unidad: 12,
            unidad_medida: "Kilo(s)"
        },
        {
            producto: "Tuna",
            precio_unidad: 20,
            unidad_medida: "Kilo(s)"
        },
        {
            producto: "Sandia",
            precio_unidad: 30,
            unidad_medida: "Pieza(s)"
        }
    ];

    products.forEach(element => console.log(element.producto));

    const productos = prompt("Cuántos productos deseas agregar a tu lista de compras: ");
    let tabla = "";
    if (productos){
        if(productos>0){
            alert("Recuerda escribir el nombre del producto con la primera letra en mayuscula, sin acentos y en singular")
            tabla = tabla + "<tabla>";
            tabla = tabla + "<caption>Lista de Compras</caption>";
            tabla = tabla + "<thead>";
            tabla = tabla + "<tr>";
            tabla = tabla + "<th>Producto</th>";
            tabla = tabla + "<th>Cantidad</th>";
            tabla = tabla + "<th>Unidad de medida</th>";
            tabla = tabla + "<th>Precio por unidad</th>";
            tabla = tabla + "<th>Precio Total </th>";
            tabla = tabla + "</tr>";
            tabla = tabla + "</thead>";

            tabla = tabla + "<tbody>";

            for (let i=0; i<productos; i++){
                let product = prompt("Qué producto deseas agregar: ");
                console.log(product)
                const datosProducto = products.find(p => p.producto === product)
                if(datosProducto){
                    let cantidad = prompt("Cantidad que deseas agregar: ");
                    let unidad = datosProducto.unidad_medida;
                    let precio_unidadProducto = (datosProducto.precio_unidad);
                    let precio_totalProducto = (datosProducto.precio_unidad)*cantidad;

                    tabla = tabla + "<tr>";
                    tabla = tabla + "<td>" + product + "</td>";
                    tabla = tabla + "<td>" + cantidad + "</td>";
                    tabla = tabla + "<td>" + unidad + "</td>";  
                    tabla = tabla + "<td>" + precio_unidadProducto + "</td>";  
                    tabla = tabla + "<td>" +  precio_totalProducto + "</td>";  
                    tabla = tabla + "</tr>";
                }else{
                    alert("Producto no disponible en tienda")
                }   
            }


            tabla = tabla + "</tbody>";
            tabla = tabla + "</tabla>";
            document.getElementById("solucion").innerHTML = tabla;
        }
    }
}


class Ticket {
    constructor (folio, cliente, rfc, cfdi, subtotal, IVA){
        this.folio = folio;
        this.cliente = cliente;
        this.rfc = rfc;
        this.cfdi = cfdi;
        this.subtotal = subtotal;
        this.IVA = IVA;
    }

    get total(){
        return this.subtotal *(1 + (this.IVA)/100);
    }

    set nuevoCFDI(motivo){
        this.cfdi = motivo;
    }
}


function GenerarTicket(){
    let ticket_generado = "";
    let noFolio = prompt("Ingresa el número de folio de tu compra: ");

    if(noFolio){
        let razonSocial = prompt("Razón Social/Fiscal");
        let rfc = prompt("Escribe tu RFC");
        let cfdi = prompt("Escribe el CFDI");
        let subtotal = prompt("Escribe el total de tu compra sin IVA");
        let IVA = prompt("Escribe el porcentaje de IVA cobrado");

        let ticket = new Ticket(noFolio, razonSocial, rfc, cfdi, subtotal, IVA);
        console.log(ticket)

        ticket_generado = ticket_generado + "Ticket <strong>" + ticket.folio + "</strong>";
        ticket_generado = ticket_generado + "<br>";
        ticket_generado = ticket_generado + "Razón Social: " + ticket.cliente;
        ticket_generado = ticket_generado + "<br>";
        ticket_generado = ticket_generado + "RFC: " + ticket.rfc;
        ticket_generado = ticket_generado + "<br>";
        ticket_generado = ticket_generado + "CFDI: " + ticket.cfdi;
        ticket_generado = ticket_generado + "<br>";
        ticket_generado = ticket_generado + "Total de la compra: <strong>"+ ticket.total + " pesos </strong> con un cobro del %" + ticket.IVA + " de IVA";

        document.getElementById("generador_ticket").innerHTML = ticket_generado;
    }else{
        alert("Es necesario el folio de tu compra para poder proceder a generar el Ticket")
    }
}