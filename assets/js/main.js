const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const inputs = document.querySelectorAll("input")
console.log(inputs);

const formulario = document.querySelector("form")
console.log(formulario);

const datos = {
	nombre: false,
	apellido: false,
	email: false,
	password: false,
	telefono: false,
}

inputs.forEach((input) => {
	input.addEventListener("keyup",(e)=>{
		/* console.log(e.target.name); */
		switch (e.target.name){
			case "nombre":
				if(expresiones.nombre.test(e.target.value)) document.getElementById("nombre-error").textContent = "", datos.nombre = true
				else document.getElementById("nombre-error").textContent = "Error", datos.nombre = false
				break

			case "apellido":
				if(expresiones.nombre.test(e.target.value)) document.getElementById("apellido-error").innerHTML = "",datos.apellido = true
				else document.getElementById("apellido-error").innerHTML = "Error", datos.apellido = false
				break
			case "email":
				if(expresiones.email.test(e.target.value)) document.getElementById("email-error").innerHTML = "", datos.email = true
				else document.getElementById("email-error").innerHTML = "Error", datos.email = false
				break
			case "password":
				if(expresiones.password.test(e.target.value)) document.getElementById("password-error").innerHTML = "", datos.password = true
				else document.getElementById("password-error").innerHTML = "Error", datos.password = false
				break
			case "telefono":
				if(expresiones.telefono.test(e.target.value)) document.getElementById("telefono-error").innerHTML = "", datos.telefono = true
				else document.getElementById("telefono-error").innerHTML = "Error", datos.telefono = false
				break
		}
	})
})

formulario.addEventListener("submit",(e) =>{
	e.preventDefault();
	/* console.log(Object.values(datos).includes(false)); */
	const check = document.querySelector("#terminos").checked
	/* console.log(check) */
	if(!Object.values(datos).includes(false) && check){
		console.log("enviado");
		document.querySelector(".alert-danger").style.display = "none"
		
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos)
	}
	else{
		console.log("No enviado");
		document.querySelector(".alert-danger").style.display = "block"
	}
	
})
