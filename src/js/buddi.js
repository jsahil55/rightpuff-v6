document.addEventListener('DOMContentLoaded', () => {
    insertBuddiLogo();
});

function insertBuddiLogo() {
    const buddiLogo = document.getElementsByClassName("bdi-text-sm bdi-flex-grow")[0];
    buddiLogo.classList.add("navbar-brand--lightbg");
};

