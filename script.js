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
// let selectedElement = null;
// let offsetX, offsetY;
// let highestZIndex = 1; // Keeps track of the highest z-index

// document.querySelectorAll(".text").forEach(element => {
//     element.style.zIndex = 1; // Initialize all divs with a base z-index

//     element.addEventListener("mousedown", (e) => {
//         selectedElement = e.target;
//         offsetX = e.clientX - selectedElement.getBoundingClientRect().left;
//         offsetY = e.clientY - selectedElement.getBoundingClientRect().top;
//         selectedElement.style.cursor = "grabbing";

//         // Bring the selected element to the top
//         highestZIndex++;
//         selectedElement.style.zIndex = highestZIndex;
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

function redirectToNewPage() {
    window.location.href = "surprise/index1.html" ; // Change the URL as needed
}





























