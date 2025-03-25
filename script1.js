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
      
let selectedElement = null;
let offsetX, offsetY;
let highestZIndex = 1; // Keeps track of the highest z-index

document.querySelectorAll(".text").forEach(element => {
    element.style.zIndex = 1; // Initialize all divs with a base z-index

    element.addEventListener("mousedown", (e) => {
        e.preventDefault();
        selectedElement = element;
        offsetX = e.clientX - selectedElement.getBoundingClientRect().left;
        offsetY = e.clientY - selectedElement.getBoundingClientRect().top;
        selectedElement.style.cursor = "grabbing";

        // Bring the selected element to the top
        highestZIndex++;
        selectedElement.style.zIndex = highestZIndex;
    });
});

document.addEventListener("mousemove", (e) => {
    if (!selectedElement) return;
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    
    // Ensure it stays within bounds
    const maxX = window.innerWidth - selectedElement.clientWidth;
    const maxY = window.innerHeight - selectedElement.clientHeight;
    
    selectedElement.style.left = `${Math.min(Math.max(0, x), maxX)}px`;
    selectedElement.style.top = `${Math.min(Math.max(0, y), maxY)}px`;
});

document.addEventListener("mouseup", () => {
    if (selectedElement) {
        selectedElement.style.cursor = "grab";
        selectedElement = null;
    }
});

const allAudioPlayers = document.querySelectorAll("audio");

allAudioPlayers.forEach(audio => {
    audio.addEventListener("play", () => {
        allAudioPlayers.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause(); // Pause other audio tracks
                otherAudio.currentTime = 0; // Reset to start
            }
        });
    });
});