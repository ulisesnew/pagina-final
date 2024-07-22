document.addEventListener("DOMContentLoaded", () => {
    const bebidas = document.querySelectorAll(".bebida");
    bebidas.forEach(bebida => {
        bebida.addEventListener("click", () => {
            const detalle = document.getElementById(bebida.dataset.bebida);
            if (detalle.style.display === "none" || detalle.style.display === "") {
                detalle.style.display = "block";
            } else {
                detalle.style.display = "none";
            }
        });
    });
});
