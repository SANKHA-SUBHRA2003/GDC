function toggleSpiralMenu() {
    // Select the spiral menu
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Toggle the 'active' class to open/close the spiral menu
}

function goToPage(url) {
    // Redirect to the provided URL
    window.location.href = url;
}