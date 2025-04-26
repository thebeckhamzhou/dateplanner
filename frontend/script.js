async function findEvents() {
    // 1. Get user inputs test test
    const location = document.getElementById('location').value;
    const eventType = document.getElementById('eventType').value;
    const temperature = document.getElementById('temperature').value;
    const budget = document.getElementById('budget').value;

    // 2. Send these to your backend (your partner's server)
    try {
        const response = await fetch(`https://your-backend-url.com/events?location=${location}&eventType=${eventType}&temperature=${temperature}&budget=${budget}`);
        const data = await response.json();

        // 3. Display the event info nicely
        document.getElementById('results').innerHTML = `
            <h3>Recommended Event:</h3>
            <p><strong>Name:</strong> ${data.eventName}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Type:</strong> ${data.eventType}</p>
            <p><strong>Price:</strong> $${data.price}</p>
            <p><strong>Date:</strong> ${data.date}</p>
        `;
    } catch (error) {
        console.error('Error fetching events:', error);
        document.getElementById('results').innerText = 'Failed to find events.';
    }
}