const image = document.querySelector("#image");

// Radius
const radiusRange = document.querySelector(".radius-range");
const radiusValue = document.querySelector(".radius-value");
function setRadiusValue(e) {
    radiusRange.value = (e.target.value<51) ? e.target.value : 50;
    const value = e.target.value;
    radiusValue.innerText = `${value}%`;
    image.style.borderRadius = `${value}%`;
}

// Brightness
const brightnessRange = document.querySelector(".brightness-range");
const brightnessValue = document.querySelector(".brightness-value");
function setBrightnessValue(e) {
    const value = e.target.value;
    brightnessValue.innerText = `${value}%`;
    image.style.filter = `brightness(${value * 2}%)`;
}

// Blur
const blurRange = document.querySelector(".blur-range");
const blurValue = document.querySelector(".blur-value");
function setBlurValue(e) {
    const value = e.target.value;
    blurValue.innerText = `${value}%`;
    image.style.filter = `blur(${value/4}px)`;
}

// Contrast
const contrastRange = document.querySelector(".contrast-range");
const contrastValue = document.querySelector(".contrast-value");
function setContrastValue(e) {
    const value = e.target.value;
    contrastValue.innerText = `${value}%`;
    image.style.filter = `contrast(${value * 2}%)`;
}

// Grayscale
const grayscaleRange = document.querySelector(".grayscale-range");
const grayscaleValue = document.querySelector(".grayscale-value");
function setGrayscaleValue(e) {
    const value = e.target.value;
    grayscaleValue.innerText = `${value/100}`;
    image.style.filter = `grayscale(${value/100})`;
}

// Hue
const hueRange = document.querySelector(".hue-range");
const hueValue = document.querySelector(".hue-value");
function setHueValue(e) {
    const value = e.target.value;
    hueValue.innerText = `${value}deg`;
    image.style.filter = `hue-rotate(${value * 5}deg)`;
}

// Invert
const invertRange = document.querySelector(".invert-range");
const invertValue = document.querySelector(".invert-value");
function setInvertValue(e) {
    const value = e.target.value;
    invertValue.innerText = `${value/100}`;
    image.style.filter = `invert(${value/100})`;
}

// Opacity
const opacityRange = document.querySelector(".opacity-range");
const opacityValue = document.querySelector(".opacity-value");
function setOpacityValue(e) {
    const value = e.target.value;
    opacityValue.innerText = `${value/100}`;
    image.style.filter = `opacity(${value/100})`;
}

// Saturate
const saturateRange = document.querySelector(".saturation-range");
const saturateValue = document.querySelector(".saturation-value");
function setSaturateValue(e) {
    const value = e.target.value;
    saturateValue.innerText = `${value}%`;
    image.style.filter = `saturate(${value+1})`;
}

// Sepia
const sepiaRange = document.querySelector(".sepia-range");
const sepiaValue = document.querySelector(".sepia-value");
function setSepiaValue(e) {
    const value = e.target.value;
    sepiaValue.innerText = `${value/100}`;
    image.style.filter = `sepia(${value/100})`;
}