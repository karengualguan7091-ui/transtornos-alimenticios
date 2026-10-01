// ============================================
// TRASTORNOS DE LA CONDUCTA ALIMENTARIA
// Script de interacción educativa
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    // ============================================
    // 1. NAVEGACIÓN SUAVE
    // ============================================

    const enlaces = document.querySelectorAll('nav a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (event) => {
            event.preventDefault();

            const destino = document.querySelector(
                enlace.getAttribute("href")
            );

            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ============================================
    // 2. ANIMACIÓN DE LAS SECCIONES
    // ============================================

    const secciones = document.querySelectorAll("main section");

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    secciones.forEach(seccion => {
        seccion.classList.add("animacion-seccion");
        observador.observe(seccion);
    });


    // ============================================
    // 3. BOTÓN "VOLVER ARRIBA"
    // ============================================

    const botonArriba = document.createElement("button");

    botonArriba.innerHTML = "↑";
    botonArriba.setAttribute("aria-label", "Volver arriba");

    botonArriba.style.position = "fixed";
    botonArriba.style.bottom = "25px";
    botonArriba.style.right = "25px";
    botonArriba.style.width = "50px";
    botonArriba.style.height = "50px";
    botonArriba.style.border = "none";
    botonArriba.style.borderRadius = "50%";
    botonArriba.style.background = "#6245ad";
    botonArriba.style.color = "white";
    botonArriba.style.fontSize = "25px";
    botonArriba.style.cursor = "pointer";
    botonArriba.style.display = "none";
    botonArriba.style.zIndex = "1000";
    botonArriba.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    document.body.appendChild(botonArriba);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }

    });

    botonArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // ============================================
    // 4. TARJETAS DE TIPOS DE TCA
    // ============================================

    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(tarjeta => {

        tarjeta.addEventListener("mouseenter", () => {
            tarjeta.style.transform = "translateY(-6px)";
            tarjeta.style.transition = "transform 0.25s ease";
        });

        tarjeta.addEventListener("mouseleave", () => {
            tarjeta.style.transform = "translateY(0)";
        });

    });


    // ============================================
    // 5. BOTÓN PARA MOSTRAR/OCULTAR INFORMACIÓN
    // ============================================

    const seccionTipos = document.querySelector("#tipos");

    if (seccionTipos) {

        const botonInfo = document.createElement("button");

        botonInfo.textContent = "Mostrar información adicional";
        botonInfo.style.marginTop = "25px";
        botonInfo.style.padding = "12px 20px";
        botonInfo.style.border = "none";
        botonInfo.style.borderRadius = "10px";
        botonInfo.style.background = "#7357c8";
        botonInfo.style.color = "white";
        botonInfo.style.cursor = "pointer";
        botonInfo.style.fontWeight = "bold";

        const informacionExtra = document.createElement("div");

        informacionExtra.style.display = "none";
        informacionExtra.style.marginTop = "20px";
        informacionExtra.style.padding = "20px";
        informacionExtra.style.background = "#f4f0ff";
        informacionExtra.style.borderRadius = "12px";

        informacionExtra.innerHTML = `
            <h3>Los TCA requieren atención</h3>
            <p>
                Los trastornos de la conducta alimentaria pueden afectar tanto
                la salud física como la salud mental. La detección temprana y
                el acompañamiento profesional pueden ser importantes.
            </p>
        `;

        seccionTipos.appendChild(botonInfo);
        seccionTipos.appendChild(informacionExtra);

        botonInfo.addEventListener("click", () => {

            const visible = informacionExtra.style.display === "block";

            if (visible) {
                informacionExtra.style.display = "none";
                botonInfo.textContent = "Mostrar información adicional";
            } else {
                informacionExtra.style.display = "block";
                botonInfo.textContent = "Ocultar información";
            }

        });
    }


    // ============================================
    // 6. MENSAJE DE BIENVENIDA
    // ============================================

    console.log(
        "Página educativa sobre trastornos de la conducta alimentaria cargada correctamente."
    );

});

Añade también este pequeño CSS

Para que la animación de las secciones funcione correctamente, agrega al final de tu <style>:

.animacion-seccion {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.animacion-seccion.visible {
    opacity: 1;
    transform: translateY(0);
}


Y al final de tu index.html, justo antes de </body>:

<script src="script.js"></script>


Así tendrás separadas las responsabilidades: index.html contiene el contenido, style controla el diseño y script.js controla la interacción.
