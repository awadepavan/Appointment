// // Handle form submission
// document.getElementById('appointmentForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const phoneNumber = document.getElementById('phoneNumber').value;
//     const email = document.getElementById('email').value;

//     const response = await fetch('/api/user', { // Adjusted the endpoint to match the correct routes
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, phoneNumber, email })
//     });

//     if (response.ok) {
//         alert('Appointment booked successfully!');
//         loadUserList(); // Load updated user list after submission
//     } else {
//         alert('Error booking appointment');
//     }
// });

// // Fetch user list to display
// async function loadUserList() {
//     const response = await fetch('/api/user', { // Adjusted the endpoint
//         method: 'GET'
//     });

//     const users = await response.json();
//     const userList = document.getElementById('userList');
//     userList.innerHTML = ''; // Clear previous list

//     users.forEach(user => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${user.name} - ${user.phoneNumber} - ${user.email}`; // Include phoneNumber
//         userList.appendChild(listItem);
//     });
// }

// // Load the user list when the page loads
// window.onload = loadUserList;

// async function fetchUsers() {
//     const response = await fetch('http://localhost:3000/api/user'); // Adjusted the endpoint
//     const users = await response.json();
//     const userList = document.getElementById('userList');
//     userList.innerHTML = '';

//     users.forEach(user => {
//         const userDiv = document.createElement('div');
//         userDiv.className = 'user';
//         userDiv.innerHTML = `
//             <span>${user.name} - ${user.phoneNumber} - ${user.email}</span>
//             <button onclick="deleteUser(${user.id})">Delete</button>
//         `;
//         userList.appendChild(userDiv);
//     });
// }

// async function deleteUser(id) {
//     await fetch(`http://localhost:3000/api/user/${id}`, { method: 'DELETE' }); // Adjusted the endpoint
//     fetchUsers();  // Refresh the user list
// }

// // Initial fetch of users
// fetchUsers();


// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phoneNumber, email })
    });

    if (response.ok) {
        alert('Appointment booked successfully!');
        loadUserList();
    } else {
        alert('Error booking appointment');
    }
});

// Fetch user list to display
async function loadUserList() {
    const response = await fetch('/api/users', {
        method: 'GET'
    });

    const users = await response.json();
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.phoneNumber} - ${user.email}`;
        userList.appendChild(listItem);
    });
}

// Load the user list when the page loads
window.onload = loadUserList;