const events = [
    {
        name: "Queens Food Festival",
        type: "Festival",
        priceCategory: "$$",
        price: 25,
        date: "2025-06-20",
        location: "Flushing Meadows Corona Park, Queens, NY",
        locationType: "Queens",
        temperature: "70°F",
        image: "https://queensnightmarket.com/uploads/2024/03/aa02e9ccea3c4a54a41048b9adadc03f_7c96fd9c4e8255dcb1bcdb8b72c98882.png?v=1711674919"
    },
    {
        name: "Astoria Street Fair",
        type: "Street Fair",
        priceCategory: "$",
        price: 10,
        date: "2025-07-15",
        location: "30th Ave, Astoria, Queens, NY",
        locationType: "Queens",
        temperature: "75°F",
        image: "https://www.qgazette.com/wp-content/uploads/images/2023-09-06/18p1.jpg"
    },
    {
        name: "Luxury Concert at Citi Field",
        type: "Concert",
        priceCategory: "$$$",
        price: 120,
        date: "2025-08-05",
        location: "Citi Field, Queens, NY",
        locationType: "Queens",
        temperature: "80°F",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Citi_Field_Night_Game.jpg/330px-Citi_Field_Night_Game.jpg"
    },
    {
        name: "Central Park SummerStage",
        type: "Concert",
        priceCategory: "$$",
        price: 50,
        date: "2025-07-10",
        location: "Central Park, New York, NY",
        locationType: "Manhattan",
        temperature: "85°F",
        image: "https://www.centralpark.com/downloads/5626/download/summerstage.jpg.jpe?cb=783665e2e86dabe11fdbe675f24e26c4"
    },
    {
        name: "SoHo Art Walk",
        type: "Art Walk",
        priceCategory: "$",
        price: 5,
        date: "2025-06-05",
        location: "SoHo, Manhattan, NY",
        locationType: "Manhattan",
        temperature: "72°F",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/0c/08/32.jpg"
    },
    {
        name: "Broadway Show Night",
        type: "Theater",
        priceCategory: "$$$",
        price: 150,
        date: "2025-07-25",
        location: "Broadway, Manhattan, NY",
        locationType: "Manhattan",
        temperature: "78°F",
        image: "https://images.contentstack.io/v3/assets/bltba617d00249585dc/bltd4f3f81f29e1f17d/60edf20703d890274e98b070/1-reedbroadway-heromobile-1440x1440.jpg"
    }
];

function generateEventCards() {
    const container = document.getElementById("events-container");
    container.innerHTML = "";

    const typeFilter = document.getElementById("type-select").value;
    const priceFilter = document.getElementById("price-select").value;
    const locationFilter = document.getElementById("location-select").value;

    const filteredEvents = events.filter(event => {
        const typeMatches = typeFilter === "All" || event.type === typeFilter;
        const priceMatches = priceFilter === "All" || event.priceCategory === priceFilter;
        const locationMatches = locationFilter === "All" || event.locationType === locationFilter;
        return typeMatches && priceMatches && locationMatches;
    });

    filteredEvents.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <img src="${event.image}" alt="${event.name}" class="event-image">
            <h3>${event.name}</h3>
            <p><strong>Type:</strong> ${event.type}</p>
            <p><strong>Price:</strong> $${event.price}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Temperature:</strong> ${event.temperature}</p>
        `;

        container.appendChild(card);
    });
}

document.getElementById("type-select").addEventListener("change", generateEventCards);
document.getElementById("price-select").addEventListener("change", generateEventCards);
document.getElementById("location-select").addEventListener("change", generateEventCards);

generateEventCards();
