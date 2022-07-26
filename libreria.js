/* let confirmar = document.getElementById ("boton");
let nombre = document.getElementById ("nombre");
let apellido = document.getElementById ("apellido");
let correo = document.getElementById ("correo");
let usuario = document.getElementById ("usuario");
let clave = document.getElementById ("clave");
let telefono = document.getElementById ("telefono");
 */





function validar (e){
	let nombre, apellido, correo, usuario, clave, telefono, expresion;
	 nombre = document.getElementById ("nombre").value;
	 apellido = document.getElementById ("apellido").value;
	 correo = document.getElementById ("correo").value;
	 usuario = document.getElementById ("usuario").value;
	 clave = document.getElementById ("clave").value;
	 telefono = document.getElementById ("telefono").value;

if(nombre === "" || apellido ==="" || correo === "" || usuario === "" || clave === "" || telefono ===""){
	
    Swal.fire({
        title : "Error!",
        text : "Debe rrellenar todos los campos",
        icon : "error",
        confirmButtonText : "=)",
        timer : 5000,
    })
		e.preventDefault (e);

}else if (nombre.length > 10) {
	/* alert ("El nombre es muy largo"); */

    Swal.fire({
        title : "Error!",
        text : "El nombre ingresado es muy largo",
        icon : "error",
        confirmButtonText : "=)",
        timer : 5000,
    })
	 e.preventDefault (e);
}else if (clave.length !== 8){
	Swal.fire({
        title : "Error!",
        text : "La clave debe tener 8 digitos",
        icon : "error",
        confirmButtonText : "=)",
        timer : 5000,
    })
	e.preventDefault (e);
}else if (isNan (telefono)) {
	Swal.fire({
        title : "Error!",
        text : "El telefono ingresado debe ser un numero",
        icon : "error",
        confirmButtonText : "=)",
        timer : 5000,
    })
	e.preventDefault (e);
}
}
formulario.addEventListener ("submit",validar);



let confirmar = document.getElementById ("boton");
confirmar.addEventListener("click", () =>{
    
    if (nombre, apellido, correo, usuario, clave, telefono){
        Swal.fire({
            position : "center",
            icon : "success", 
            title : "Usuario registrado",
            showConfirmButton : false,
            timer : 3000,
        })
    }else {
        Swal.fire({
            title : "Error!",
            text : "Debe rrellenar todos los campos",
            icon : "error",
            confirmButtonText : "=)",
            timer : 3000,
        })
    }
    
} )