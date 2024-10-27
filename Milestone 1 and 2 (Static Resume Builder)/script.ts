const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;


skills.style.display = 'block';

toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block'; // Show skills
        toggleButton.textContent = 'Hide Skills'; // This is the update button section
    } else {
        skills.style.display = 'none'; // Hide skills
        toggleButton.textContent = 'Show Skills'; // Update button text
    }
});
