function lleno(){
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    if(nombre===""){
        document.getElementById("nombre").style.borderBottomColor ="red";
        document.getElementById("nombre").style.borderRightColor ="red";
        alert("Debe indicar su nombre");
        return false;
    }else{
        document.getElementById("nombre").style.borderBottomColor ="gray";
        document.getElementById("nombre").style.borderRightColor ="gray";
    } 

    if(asunto===""){
        document.getElementById("asunto").style.borderBottomColor ="red";
        document.getElementById("asunto").style.borderRightColor ="red";
        alert("Debe indicar un asunto");
        return false;
    }else{
        document.getElementById("asunto").style.borderBottomColor ="gray";
        document.getElementById("asunto").style.borderRightColor ="gray";
    }
    
    if(email===""){
        document.getElementById("email").style.borderBottomColor ="red";
        document.getElementById("email").style.borderRightColor ="red";
        alert("Debe indicar su email");
        return false;
    }else{
        document.getElementById("email").style.borderBottomColor ="gray";
        document.getElementById("email").style.borderRightColor ="gray";
    }
    
    if(telefono===""){
        document.getElementById("telefono").style.borderBottomColor ="red";
        document.getElementById("telefono").style.borderRightColor ="red";
        alert("Debe indicar su telefono");
        return false;
    }else{
        document.getElementById("telefono").style.borderBottomColor ="gray";
        document.getElementById("telefono").style.borderRightColor ="gray";
    }
    
    if(mensaje===""){
        document.getElementById("mensaje").style.borderBottomColor ="red";
        document.getElementById("mensaje").style.borderRightColor ="red";
        alert("Debe indicar su mensaje");
        return false;
    }else{
        document.getElementById("mensaje").style.borderBottomColor ="gray";
        document.getElementById("mensaje").style.borderRightColor ="gray";
    }
}