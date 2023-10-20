// Váriaveis

const btnOpen = document.querySelector('#btn-open');
const btnAgain = document.querySelector('#btn-again');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

// Array de frases motivacionais
const phrases = [
    "Acredite em você mesmo e tudo será possível.",
    "Seja a mudança que você deseja ver no mundo.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A vida é 10% o que nos acontece e 90% como reagimos a isso.",
    "A persistência realiza o impossível.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
    "O único caminho para fazer um excelente trabalho é amar o que você faz.",
    "Acredite que você pode e você está no meio do caminho.",
    "Não espere por circunstâncias ideais, crie-as.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
];

// Função para escolher uma frase aleatória
function randomPhrases() {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    return phrases[randomIndex]
}

// Função para exibir a frase aleatória quando o botão for clicado
function openCookie(event) {
    event.preventDefault();

    const randomPhrase = randomPhrases();
    toggleScreen();
    screen2.querySelector("h2").innerText = randomPhrase
}

// Função para alternar entre as telas
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// Eventos
btnOpen.addEventListener('click', openCookie)
btnAgain.addEventListener('click', openCookie)
