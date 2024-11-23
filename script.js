window.onload = function () {
    const contenedorNumeros = document.getElementById("numeros");
    const botonesNumeros = []; // Declaración dentro del onload

    for (let i = 1; i <= 90; i++) {
        let boton = document.createElement("button");
        boton.innerHTML = i;
        contenedorNumeros.appendChild(boton);
        botonesNumeros.push(boton);

        // Agregar evento de clic
        boton.addEventListener("click", function () {
            // Si el botón ya tiene la clase 'clicked', cambiamos el color de fondo a verde
            if (boton.classList.contains("clicked")) {
                // Si ya está en verde, lo desmarcamos (volviendo a su color original)
                boton.classList.remove("clicked");
            } else {
                // Si no está marcado, lo marcamos en verde
                boton.classList.add("clicked");
            }
        });
    }
};

