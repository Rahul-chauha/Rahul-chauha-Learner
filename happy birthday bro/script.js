
function redirectToNewPage() {
    window.location.href = "surprise/index1.html" ; // Change the URL as needed
}

fetch("settings.json")
    .then(response => response.json())
    .then(data => {
        console.log("Settings:", data);
        // Use data as needed
    })
    .catch(error => console.error("Error loading settings:", error));

