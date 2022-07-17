const image = document.querySelector("#image");
const saveBtn = document.querySelector(".save");
const rangeInputs = document.querySelectorAll(".range");

let brightness = 29;
let Blur = 0;
let contrast = 50;
let grayscale = 0;
let hue = 0;
let invert = 0;
let opacity = 100;
let saturate = 0;
let sepia = 0;

// Radius
const radiusRange = document.querySelector(".radius-range");
const radiusValue = document.querySelector(".radius-value");
function setRadiusValue(e) {
    const value = Number(e.target.value);
    radiusValue.innerText = `${value}%`;
    // Checks if square
    image.style.borderRadius = (image.width === image.height) ? `${value/2}%` : `${value}px`
}

// Brightness
const brightnessRange = document.querySelector(".brightness-range");
const brightnessValue = document.querySelector(".brightness-value");
function setBrightnessValue(e) {
    brightness = Number(e.target.value);
    brightnessValue.innerText = `${brightness}%`;
}

// Blur
const blurRange = document.querySelector(".blur-range");
const blurValue = document.querySelector(".blur-value");
function setBlurValue(e) {
    Blur = Number(e.target.value);
    blurValue.innerText = `${Blur}%`;
}

// Contrast
const contrastRange = document.querySelector(".contrast-range");
const contrastValue = document.querySelector(".contrast-value");
function setContrastValue(e) {
    contrast = Number(e.target.value);
    contrastValue.innerText = `${contrast}%`;

}

// Grayscale
const grayscaleRange = document.querySelector(".grayscale-range");
const grayscaleValue = document.querySelector(".grayscale-value");
function setGrayscaleValue(e) {
    grayscale = Number(e.target.value);
    grayscaleValue.innerText = `${grayscale/100}`;
}

// Hue
const hueRange = document.querySelector(".hue-range");
const hueValue = document.querySelector(".hue-value");
function setHueValue(e) {
    hue = Number(e.target.value);
    hueValue.innerText = `${hue}deg`;
}

// Invert
const invertRange = document.querySelector(".invert-range");
const invertValue = document.querySelector(".invert-value");
function setInvertValue(e) {
    invert = Number(e.target.value);
    invertValue.innerText = `${invert/100}`;
}

// Opacity
const opacityRange = document.querySelector(".opacity-range");
const opacityValue = document.querySelector(".opacity-value");
function setOpacityValue(e) {
    opacity = Number(e.target.value);
    opacityValue.innerText = `${opacity/100}`;
}

// Saturate
const saturateRange = document.querySelector(".saturation-range");
const saturateValue = document.querySelector(".saturation-value");
function setSaturateValue(e) {
    saturate = Number(e.target.value);
    saturateValue.innerText = `${saturate}%`;
}

// Sepia
const sepiaRange = document.querySelector(".sepia-range");
const sepiaValue = document.querySelector(".sepia-value");
function setSepiaValue(e) {
    sepia = Number(e.target.value);
    sepiaValue.innerText = `${sepia/100}`;
}

function updateFilters() {

    image.style.webkitFilter = `brightness(${brightness*2}%) blur(${Blur/10}px) contrast(${contrast*2}%) grayscale(${grayscale/100}) hue-rotate(${hue*5}deg) invert(${invert/100}) opacity(${opacity/100}) saturate(${saturate+1}) sepia(${sepia/100})`;

    image.style.filter = `brightness(${brightness*2}%) blur(${Blur/4}px) contrast(${contrast*2}%) grayscale(${grayscale/100}) hue-rotate(${hue*5}deg) invert(${invert/100}) opacity(${opacity/100}) saturate(${saturate+1}) sepia(${sepia/100})`;

}

rangeInputs.forEach(input => {
    input.addEventListener("input", updateFilters)
})