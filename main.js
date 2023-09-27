//        **************           Start Dark mode      **************

// Your array of colors
var colors = ["#fff", "#000", "#303030", "#f4f2f2", "#454443", "#1B1F0E"];

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
    var box1Color = storedColors[2];
    var threeSectionLightColor = storedColors[3];
    var textModeColor = storedColors[4];
    var threeSectionColor = storedColors[5];
} else {
    // Handle the case where the key "colors" was not found in local storage
    console.log("No data found in local storage for key 'colors'.");
}

let darkMode = document.getElementById("dark");
let LightMode = document.getElementById("light");

let threeSection = document.getElementById("threeID");
let box1 = document.querySelectorAll(".three .divclass .box");
let textMode = document.getElementsByClassName("textMode");
let three2Section = document.getElementById("three2ID");
let body = document.getElementById("body");

if (window.localStorage.getItem("color")) {
    threeSection.style.backgroundColor = threeSectionLightColor;
    three2Section.style.backgroundColor = WhiteColor;
    darkMode.classList.remove("active");
}

darkMode.addEventListener("click", (e) => {
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    threeSection.style.backgroundColor = threeSectionColor;
    three2Section.style.backgroundColor = blackColor;
    body.style.backgroundColor = e.currentTarget.dataset.color;

    for (let i = 0; i < textMode.length; i++) {
        textMode[i].style.color = WhiteColor;
    }
    for (let i = 0; i < box1.length; i++) {
        box1[i].style.backgroundColor = box1Color;
    }
});
LightMode.addEventListener("click", (e) => {
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    threeSection.style.backgroundColor = threeSectionLightColor;
    three2Section.style.backgroundColor = e.currentTarget.dataset.color;
    body.style.backgroundColor = e.currentTarget.dataset.color;

    for (let i = 0; i < textMode.length; i++) {
        textMode[i].style.color = blackColor;
    }
    for (let i = 0; i < box1.length; i++) {
        box1[i].style.backgroundColor = WhiteColor;
    }
});

//        **************           End Dark mode      **************
