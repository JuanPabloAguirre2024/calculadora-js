const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";               
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
        function resultado(resultado) {
            document.getElementById("respuesta").value = resultado;
        }
        function raiz() {
            let numero2 = +document.getElementById("numero2").value;
            resultado(Math.sqrt(numero2));
        }
        function potencia() {
            let numero1 = +document.getElementById("numero1").value;
            let numero2 = +document.getElementById("numero2").value;
            resultado(Math.pow(numero1, numero2));
        }
        function absoluto() {
            let numero2 = +document.getElementById("numero2").value;
            resultado(Math.abs(numero2));
        }
        function random() {
            let minimo = +document.getElementById("numero1").value;
            let maximo = +document.getElementById("numero2").value;
            maximo = maximo + 1;
            resultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
        }
    })
)
