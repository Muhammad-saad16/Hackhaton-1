// Select the toggle button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');

// Add an event listener for the toggle button
toggleButton.addEventListener('click', function () {
    // Check the current display style of the skills section
    if (skills.style.display === 'none' || skills.style.display === '') {
        // Show the skills section if it's hidden
        skills.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';  // Update button text
    } else {
        // Hide the skills section if it's visible
        skills.style.display = 'none';
        toggleButton.textContent = 'Show Skills';  // Update button text
    }
});
