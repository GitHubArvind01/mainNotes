// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable right-click (context menu)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Redirect to the image on click
const notes = document.querySelectorAll('.note a');
notes.forEach(note => {
    note.addEventListener('click', function(e) {
        window.location.href = this.href;
    });
});
