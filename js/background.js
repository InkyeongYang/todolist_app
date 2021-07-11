const images = [
    "pexels-pixabay-235621.jpg",
    "pexels-pixabay-531321.jpg",
    "pexels-pixabay-326055.jpg",
    "pexels-david-bartus-2466608.jpg",
    "pexels-tom-fisk-2526651.jpg",
    "pexels-rod-dion-1673992.jpg",
    "pexels-vittorio-staffolani-655677.jpg",
    "pexels-eberhard-grossgasteiger-979515.jpg"
];
const bgFrame = document.createElement("div");
bgFrame.setAttribute("class", "bgImg");

const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

//bgImage.src = `img/${randomImage}`;
//bgFrame.appendChild(bgImage);
bgFrame.style.backgroundImage = `url(img/${randomImage})`;
document.body.appendChild(bgFrame);