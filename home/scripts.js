let music = document.getElementById("background-music");

function toggleMusic() {
    let speakerIcon = document.getElementById("speaker-toggle").children[0];
    
    if (music.paused) {
        music.play();  // Play the music if it is paused
        speakerIcon.setAttribute("name", "volume-high-outline"); // Change icon to volume-high
    } else {
        music.pause(); // Pause the music if it is playing
        speakerIcon.setAttribute("name", "volume-mute-outline"); // Change icon to volume-mute
    }
}

// Optional: Try to start music automatically when the page loads (browser might block it)
window.onload = function() {
    try {
        music.play().catch(() => {
            console.log("Autoplay was prevented by the browser.");
        });
    } catch (error) {
        console.log("Error playing audio:", error);
    }
};
