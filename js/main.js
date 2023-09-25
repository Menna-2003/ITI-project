//        **************           Start Dark mode      **************

let darkMode = document.getElementById("dark");
let LightMode = document.getElementById("light");

let sectionTwo = document.getElementById("two");
let darkModetext = document.getElementsByClassName("dark-mode");
let icons = document.getElementsByClassName("fa-solid fa-tag");

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
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.backgroundColor = "#fff";
        icons[i].style.color = "#000";
        icons[i].style.borderColor = "#d25b38";
    }
});
LightMode.addEventListener("click", (e) => {
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    sectionTwo.style.backgroundColor = e.currentTarget.dataset.color;

    for (let i = 0; i < darkModetext.length; i++) {
        darkModetext[i].style.color = "#454443";
    }
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.backgroundColor = "#fff";
        icons[i].style.color = "#000";
    }
});

//        **************           End Dark mode      **************

//        **************           Start animation on scroll      **************

let texts = document.querySelectorAll(".animationText");
let sentence = document.querySelectorAll(".word")


window.addEventListener("scroll", () => {
    let triggerBottom = (window.innerHeight / 5) * 4;

    texts.forEach((text) => {
        let textTop = text.getBoundingClientRect().top;

        if (textTop < triggerBottom) {
            text.classList.add("show");
        } else {
            text.classList.remove("show");
        }
    });


    sentence.forEach((word) => {
        let sentenceTop = word.getBoundingClientRect().top;

        if (sentenceTop < triggerBottom) {
            word.classList.add("show");
        } else {
            word.classList.remove("show");
        }
    });
});

//        **************           End animation on scroll      **************
