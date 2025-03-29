// let selectedElement = null;
// let offsetX, offsetY;

// document.querySelectorAll(".text").forEach(element => {
//     element.addEventListener("mousedown", (e) => {
//         selectedElement = e.target;
//         offsetX = e.clientX - selectedElement.getBoundingClientRect().left;
//         offsetY = e.clientY - selectedElement.getBoundingClientRect().top;
//         selectedElement.style.cursor = "grabbing";
//     });
// });

// document.addEventListener("mousemove", (e) => {
//     if (!selectedElement) return;
//     let x = e.clientX - offsetX;
//     let y = e.clientY - offsetY;
//     selectedElement.style.left = `${x}px`;
//     selectedElement.style.top = `${y}px`;
// });

// document.addEventListener("mouseup", () => {
//     if (selectedElement) {
//         selectedElement.style.cursor = "grab";
//         selectedElement = null;
//     }
// });  
// Ensure GSAP is loaded
if (!window.gsap) {
    let script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => console.log("GSAP Loaded");
    document.head.appendChild(script);
}

let selectedElement = null;
let offsetX = 0, offsetY = 0;
let highestZIndex = 1;
let isDragging = false;

// Start dragging
function startDrag(e) {
    e.preventDefault();
    let event = e.type.includes("touch") ? e.touches[0] : e;

    selectedElement = e.currentTarget;
    let rect = selectedElement.getBoundingClientRect();
    
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    selectedElement.style.zIndex = ++highestZIndex;

    document.addEventListener("pointermove", moveElement);
    document.addEventListener("pointerup", stopDrag);
}

// Move the element smoothly with cursor
function moveElement(e) {
    if (!selectedElement) return;

    let event = e.type.includes("touch") ? e.touches[0] : e;
    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY;

    selectedElement.style.left = `${x}px`;
    selectedElement.style.top = `${y}px`;
}

// Stop dragging
function stopDrag() {
    selectedElement = null;

    document.removeEventListener("pointermove", moveElement);
    document.removeEventListener("pointerup", stopDrag);
}

// Prevent multiple audio files from playing at the same time
let allAudios = document.querySelectorAll("audio");
allAudios.forEach(audio => {
    audio.addEventListener("play", () => {
        allAudios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});

// Apply event listeners to draggable elements
document.querySelectorAll(".draggable").forEach(element => {
    element.style.position = "absolute"; // Ensure draggable elements are positioned properly
    element.addEventListener("pointerdown", startDrag);
    element.addEventListener("touchstart", startDrag, { passive: false });
});

// Page Load Bounce Animation (Optimized for Lighthouse)
window.addEventListener("load", () => {
    document.querySelectorAll(".draggable").forEach(element => {
        gsap.fromTo(element, 
            { y: -20, opacity: 0 }, // Start position (slightly above)
            { 
                y: 0, opacity: 1, duration: 0.8, 
                ease: "bounce.out", delay: Math.random() * 0.5 
            } 
        );
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let audioElements = document.querySelectorAll("audio");
    let currentAudioIndex = 0;

    function playNextAudio() {
        if (currentAudioIndex < audioElements.length) {
            let currentAudio = audioElements[currentAudioIndex];
            currentAudio.play();
            
            currentAudio.onended = () => {
                currentAudioIndex++;
                playNextAudio();
            };
        }
    }

    // Start autoplay when page loads
    if (audioElements.length > 0) {
        playNextAudio();
    }

    // Stop other audios if one is manually played
    audioElements.forEach(audio => {
        audio.addEventListener("play", () => {
            audioElements.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});