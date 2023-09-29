//        **************           Start Dark mode      **************
// Your array of colors
var colors = ["#fff", "#000", "#303030", "#f4f2f2", "#454443", "#1d1d1d"];  //#1d1d1d

// Convert the array to a JSON string
var colorsJSON = JSON.stringify(colors);

// Store the JSON string in local storage with a key
localStorage.setItem("colors", colorsJSON);

// Retrieve the JSON string from local storage
var storedColorsJSON = localStorage.getItem("colors");

if (storedColorsJSON) {
    // Parse the JSON string back into an array
    var storedColors = JSON.parse(storedColorsJSON);

    // Access a specific color from the array
    var WhiteColor = storedColors[0];
    var blackColor = storedColors[1];
    var boxesColor = storedColors[2];
    var diffrentSectionLightColor = storedColors[3];  // diffrent from white section
    var textDarkColor = storedColors[4];
    var diffrentSectionDarkColor = storedColors[5]; // diffrent from black section
} else {
    // Handle the case where the key "colors" was not found in local storage
    console.log("No data found in local storage for key 'colors'.");
}

let darkMode = document.getElementById("dark");
let LightMode = document.getElementById("light");

let body = document.getElementById("body");
let sectionTwo = document.getElementById("two");
let darkModetext = document.getElementsByClassName("darkMode");
let icons = document.getElementsByClassName("fa-solid fa-tag");
let box1 = document.querySelectorAll(".three .divclass .box");
let boxes = document.querySelectorAll(".boxes");
let textMode = document.getElementsByClassName("textMode");
let threeSection = document.getElementById("threeID");
let three2Section = document.getElementById("three2ID");
let containerYara = document.getElementsByClassName("container-yara-one");
let containerYara2 = document.getElementsByClassName("container-yara-two");
let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");

if (window.localStorage.getItem("color")) {
    sectionTwo.style.backgroundColor = WhiteColor;
    threeSection.style.backgroundColor = diffrentSectionLightColor;
    three2Section.style.backgroundColor = WhiteColor;
    darkMode.classList.remove("active");
}

darkMode.addEventListener("click", (e) => {
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);

    sectionTwo.style.backgroundColor = e.currentTarget.dataset.color;
    threeSection.style.backgroundColor = diffrentSectionDarkColor;
    three2Section.style.backgroundColor = blackColor;
    body.style.backgroundColor = e.currentTarget.dataset.color;
    part1.style.backgroundColor = diffrentSectionDarkColor;
    part2.style.backgroundColor = blackColor;

    // body[0].style.backgroundColor = e.currentTarget.dataset.color;

    containerYara[0].style.color = diffrentSectionDarkColor;
    containerYara[0].style.backgroundColor = diffrentSectionDarkColor;
    containerYara2[0].style.color = blackColor;

    for (let i = 0; i < textMode.length; i++) {
        textMode[i].style.color = WhiteColor;
    }
    for (let i = 0; i < box1.length; i++) {
        box1[i].style.backgroundColor = boxesColor;
    }
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = boxesColor;
    }
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
    threeSection.style.backgroundColor = diffrentSectionLightColor;
    three2Section.style.backgroundColor = e.currentTarget.dataset.color;
    body.style.backgroundColor = e.currentTarget.dataset.color;
    part1.style.backgroundColor = diffrentSectionLightColor;
    part2.style.backgroundColor = e.currentTarget.dataset.color;

    body[0].style.backgroundColor = e.currentTarget.dataset.color;

    for (let i = 0; i < textMode.length; i++) {
        textMode[i].style.color = blackColor;
    }
    for (let i = 0; i < box1.length; i++) {
        box1[i].style.backgroundColor = WhiteColor;
    }

    containerYara[0].style.color = diffrentSectionLightColor;
    containerYara2[0].style.color = WhiteColor;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = WhiteColor;
    }
    for (let i = 0; i < darkModetext.length; i++) {
        darkModetext[i].style.color = "#000";
    }
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.backgroundColor = "#fff";
        icons[i].style.color = "#000";
    }
});

//        **************           End Dark mode      **************

//        **************           Start animation on scroll      **************

let texts = document.querySelectorAll(".animationText");

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
});

//        **************           End animation on scroll      **************
