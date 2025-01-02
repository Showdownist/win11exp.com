let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    const vid1 = document.getElementById('vid'); // First video (vid)
    const vid2 = document.getElementById('vid2'); // Second video (vid2)

    if (screenWidth <= 768) {
        // Remove vid1 when screen is small
        if (vid1) {
            vid1.style.display = 'none'; // Hide vid1
        }
    } else {
        // Show vid1 when screen is larger
        if (vid1) {
            vid1.style.display = 'block'; // Show vid1
        }
    }
});

// Call the function on initial load to set the correct state
window.dispatchEvent(new Event('resize'));

// Function to disable all scrolling behavior
function disableScroll() {
    // Disable scroll events for mouse wheel, touchmove, and keyboard keys
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventKeyScroll, { passive: false });
    window.addEventListener('scroll', preventDefault, { passive: false });
}

// Helper function to prevent default scrolling behavior
function preventDefault(event) {
    event.preventDefault();
}

// Helper function to prevent scrolling with keyboard (e.g., arrow keys, space bar)
function preventKeyScroll(event) {
    const scrollKeys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down keys
    if (scrollKeys.indexOf(event.keyCode) !== -1) {
        event.preventDefault();
    }
}

// Call the function to disable scroll when the page loads
window.addEventListener('load', disableScroll);
