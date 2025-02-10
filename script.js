function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const maxWidth = window.innerWidth - noButton.clientWidth;
    const maxHeight = window.innerHeight - noButton.clientHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.style.transition = "left 0.3s ease, top 0.3s ease";
}
