const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addContact();
});

function addContact() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    if (name && email && phone) {
        const contact = {
            name,
            email,
            phone
        };

        // Clear input fields
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';

        displayContact(contact);
    } else {
        alert('Please fill in all the fields.');
    }
}

function displayContact(contact) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${contact.name}</strong><br>
        Email: ${contact.email}<br>
        Phone: ${contact.phone}
    `;
    contactList.appendChild(li);
}
