function preguntarNombreYApellido() 
{
    var nombre=prompt("Ingresa tu nombre:");
    var apellido=prompt("Hola "+nombre+", ahora tu apellido: ");
    var edad=prompt("Ingresa tu edad por favor: ");
    alert("Bienvenido "+nombre+" "+apellido+" de "+edad+" años!");
}

function convertidor() 
{
    var peso=prompt("Ingresa la cantidad de ARS que quieres convertir:");
    alert("En dólares es: "+200*peso);
}

function modoClaro() 
{
    var convertidor=document.getElementById("fondo");
    convertidor.style.background="white";
    convertidor.style.color="black";
}

function modoOscuro() 
{
    var convertidor=document.getElementById("fondo");
    convertidor.style.background="black";
    convertidor.style.color="white";
}


