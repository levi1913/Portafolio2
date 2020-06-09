function lleno(){
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    if(nombre===""){
        document.getElementById("nombre").style.border ="red";
        alert("Debe indicar su nombre");
        return false;
    }else{
        document.getElementById("nombre").style.border ="#262626";
       

    if(asunto===""){
        document.getElementById("asunto").style.border ="red";
        alert("Debe indicar un asunto");
        return false;
    }else{
        document.getElementById("asunto").style.border ="#262626";
    }
    
    if(email===""){
        document.getElementById("email").style.border ="red";
        alert("Debe indicar su email");
        return false;
    }else{
        document.getElementById("email").style.border ="#262626";
    }
    
    if(telefono===""){
        document.getElementById("telefono").style.border ="red";
        alert("Debe indicar su telefono");
        return false;
    }else{
        document.getElementById("telefono").style.border ="#262626";
    }
    
    if(mensaje===""){
        document.getElementById("mensaje").style.border ="red";
        alert("Debe indicar su mensaje");
        return false;
    }else{
        document.getElementById("mensaje").style.border ="#262626";
    }
}