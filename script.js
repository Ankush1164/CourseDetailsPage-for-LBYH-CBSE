document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("hamburgerMenu");
    const container = document.getElementById("hamburgerContainer");

    menu.addEventListener("click", () => {
        container.style.height = "100px";
        container.style.padding="30px 0px 0px 0px"
    });
});