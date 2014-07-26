function validar() {
    var nombre = document.getElementById("nombre");
    if(nombre.value === ""){
        alert("Campos vacios, falta llenar el campo Nombre");
        return false;
    }else{
        return true;
    }        
}

function colorear(){
    var text_box = document.getElementById("observaciones");
    text_box.style["background"] = "green";
}

function descolorear(){
    var text_box = document.getElementById("observaciones");
    text_box.style["background"] = "white";

}