let btn = document.querySelectorAll(".mobile-btn");

const toggleButton = (menu, show) => {
    let m = document.querySelector(`.${menu}`);

    if (m.className.includes(show)) {
        m.className = menu;
    } else {
        m.className += ` ${show}`;
    }
};

btn.addEventListener("click", () => {
    toggleButton("header-nav", "header-show");
});
