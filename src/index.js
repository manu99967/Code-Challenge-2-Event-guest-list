const guestForm = document.getElementById('guestForm');
const guestNameInput = document.getElementById('guestName');
const guestList = document.getElementById('guestList');

let guests = [];

guestForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form submission and page refresh
    addGuest(guestNameInput.value);
    guestNameInput.value = '';  // Clear the input field
});

function addGuest(name) {
    if (guests.length >= 10) {
        alert('You can only have up to 10 guests.');
        return;
    }

    const guest = {
        name: name,
        attending: 'Not Attending',
        addedAt: new Date().toLocaleString()
    };
    guests.push(guest);
    renderGuestList();
}

function renderGuestList() {
    guestList.innerHTML = '';  // Clear the existing list

    guests.forEach((guest, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${guest.name} - ${guest.attending} (Added: ${guest.addedAt})</span>
            <button onclick="toggleRSVP(${index})">Toggle RSVP</button>
            <button onclick="removeGuest(${index})">Remove</button>
        `;
        guestList.appendChild(li);
    });
}

function removeGuest(index) {
    guests.splice(index, 1);  // Remove the guest from the array
    renderGuestList();  // Re-render the list
}

function toggleRSVP(index) {
    const guest = guests[index];
    guest.attending = guest.attending === 'Attending' ? 'Not Attending' : 'Attending';
    renderGuestList();  // Re-render the list after changing RSVP
}