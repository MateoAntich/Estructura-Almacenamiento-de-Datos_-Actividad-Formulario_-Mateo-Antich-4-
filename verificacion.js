document.getElementById("loginForm").addEventListener("submit", function(e) {
e.preventDefault();

    //guardar datos ingreesados del usuario en una variable
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const message = document.getElementById("message").value;

   


    //datos validos de ingreso  
    const correo_valido = "mjantichdifrancesco@escuelasproa.edu.ar";
    const contraseña_valida = "soyhombre1122"
    

    //verificar datos
    if(email == correo_valido && password == contraseña_valida){
        Swal.fire({
            title: "Sesion correcta.!",
            icon: "success",
            draggable: true
          });
    }else{
        Swal.fire({
            icon: "error",
            title: "Sesion incorrecta.",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }




});