document.getElementById('plateForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const remainingPlates = document.getElementById('remainingPlates').value;
    const shortfall = document.getElementById('shortfall').value;

    // Send data to the backend using Fetch API
    fetch('/api/plate-optimization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ remainingPlates, shortfall }),
    })
    .then(response => response.json())
    .then(data => {
        // Update the reportContainer with the generated report
        document.getElementById('reportContainer').innerText = `Required additional plates: ${data.additionalPlates}, Surplus unused plates: ${data.surplusPlates}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
