const capas = [
    {
        texto: "Mes 1: Cuando te conocí supe que eras diferente 💫",
        imagen: "imagen5.jpeg"
    },
    {
        texto: "Mes 2: Primera cita, primeras risas, primera vez donde sabia que eras tú ❤️",
        imagen: "imagen7.jpeg"
    },
    {
        texto: "Mes 3: Cada día contigo era mejor que el anterior 🥰",
        imagen: "imagen1.jpeg"
    },
    {
        texto: "Mes 4: Tus abrazos se volvieron mi lugar favorito 🤗",
        imagen: "imagen3.jpeg"
    },
    {
        texto: "Mes 5: 5 meses y estoy feliz que el destino nos juntara 🌌",
        imagen: "imagen6.jpeg"
    },
    {
        texto: "TE AMO:¡estoy más enamorado que nunca! 💖",
        imagen: "imagen4.jpeg"
    },
    {
        texto: "Carta final: Gracias por ser tú. Por estos 5 meses, y por todo lo que viene. Te amo. 💌",
        imagen: "imagen2.jpeg"
    },
];

let capaActual = 0;

function openNextLayer() {
    const textElement = document.getElementById("layer-text");
    const imageElement = document.getElementById("layer-image");

    if (capaActual === 0) {
        const music = document.getElementById("bg-music");
        music.play().catch(err => {
          console.log("El navegador bloqueó el audio:", err);
        });
    }

    if (capaActual < capas.length) {
        textElement.innerText = capas[capaActual].texto;
        imageElement.src = capas[capaActual].imagen;
        imageElement.style.display = "block";
        capaActual++;
    } else {
        textElement.innerText = "🎉 ¡Ya abriste toda la cajita! Pero aún tengo más sorpresas para ti...";
        imageElement.style.display = "none";
    }
}
