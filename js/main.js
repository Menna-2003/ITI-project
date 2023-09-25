let darkMode = document.getElementById("dark");
let LightMode = document.getElementById("light");

let sectionTwo = document.getElementById("two");
let darkModetext = document.getElementsByClassName("dark-mode");

if (window.localStorage.getItem("color")) {
    sectionTwo.style.backgroundColor = window.localStorage.getItem("color");

    darkMode.classList.remove("active");
}

darkMode.addEventListener("click", (e) => {
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    sectionTwo.style.backgroundColor = e.currentTarget.dataset.color;
    
    for (let i = 0; i < darkModetext.length; i++) {
        darkModetext[i].style.color = "#fff";
    }
});
LightMode.addEventListener("click", (e) => {
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    sectionTwo.style.backgroundColor = e.currentTarget.dataset.color;

    for (let i = 0; i < darkModetext.length; i++) {
        darkModetext[i].style.color = "#454443";
    }
});
