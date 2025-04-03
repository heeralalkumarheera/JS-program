// app.js

// 1. Select the container where the data will be displayed
const userContainer = document.getElementById('users');

// 2. Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        // 3. Loop through the array of users and display each user in a card
        data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>City: ${user.address.city}</p>
            `;

            userContainer.appendChild(userCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        userContainer.innerHTML = '<p>Failed to load users. Please try again later.</p>';
    });
