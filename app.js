document.getElementById('workout-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from the form
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${exercise} - Séries: ${sets}, Repetições: ${reps}`;
    
    // Append the list item to the workout list
    document.getElementById('workout-list').appendChild(li);

    // Clear the form
    document.getElementById('workout-form').reset();
});
