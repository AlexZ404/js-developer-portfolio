 function easterEgg() {
    const easter = document.getElementById('easter');
    easter.innerHTML = 'Obrigado por me ensinar, Dio <3';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const pseudoAfterElement = document.getElementById('pseudoAfter');
    pseudoAfterElement.addEventListener('click', easterEgg);
});