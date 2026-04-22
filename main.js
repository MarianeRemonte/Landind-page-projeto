// Seleciona todas as caixas
const boxes = document.querySelectorAll(".fade-box");

// Função que ativa animação ao aparecer na tela
function revealBoxes() {
    const windowHeight = window.innerHeight;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight - 100) {
            box.classList.add("show");
        }
    });
}

// Executa no scroll
window.addEventListener("scroll", revealBoxes);

// Executa ao carregar
revealBoxes();