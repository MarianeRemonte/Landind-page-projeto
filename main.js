const elementos = document.querySelectorAll('div');

function revelar() {
    elementos.forEach(elemento => {
        const topo = elemento.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {
            elemento.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revelar);
revelar();

const imagem = document.getElementById('imagem-galeria');
const btnProximo = document.getElementById('btn-proximo');
const btnAnterior = document.getElementById('btn-anterior');
 
const galeria = [
    "img/educacao.png",
    "dificuldades.png",
    "opiniao.png"
];
 
let indiceAtual = 0;
 
function atualizarGaleria() {
    imagem.src = galeria[indiceAtual];
}
 
btnProximo.addEventListener('click', function() {
    indiceAtual = (indiceAtual + 1) % galeria.length;
    atualizarGaleria();
});
 
btnAnterior.addEventListener('click', function() {
    indiceAtual = (indiceAtual - 1 + galeria.length) % galeria.length;
    atualizarGaleria();
});
 
atualizarGaleria();