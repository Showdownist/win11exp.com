const startMenu = document.querySelector('.startmenu');
let isStartMenuOpen = false;

document.querySelector('.taskbar').addEventListener('click', () => {
    if (isStartMenuOpen) {
        // Hide the start menu
        startMenu.style.bottom = '-655px'; // Move back below the screen
        isStartMenuOpen = false;
    } else {
        // Show the start menu
        startMenu.style.bottom = '60px'; // Position just above the taskbar
        isStartMenuOpen = true;
    }
});
