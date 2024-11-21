window.onload = function () {
    const botonesNumeros = [];
    const contenedorNumeros = document.getElementById("numeros");
    for (let i = 1; i <= 90; i++) {
        let boton = document.createElement("button");
        boton.innerHTML = i;
        contenedorNumeros.appendChild(boton);
        botonesNumeros.push(boton);
        boton.addEventListener("click", function () {
            boton.style.backgroundColor = "green";
            boton.style.borderColor = "black";
            boton.disabled = true;
            console.log(boton.innerHTML); // Muestra el número del botón
        })
    }
}

