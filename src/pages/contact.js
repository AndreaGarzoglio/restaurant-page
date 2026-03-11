export default function loadContact() {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const heading = document.createElement('h1');
    heading.textContent = 'Get In Touch';
    contact.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Have a question or want to make a reservation? We\'d love to hear from you! Reach out to us through any of the methods below.';
    contact.appendChild(description);

    // Contact Information Section
    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('contact-section-title');
    contactTitle.textContent = 'Contact Information';
    contactSection.appendChild(contactTitle);

    const infoBox = document.createElement('div');
    infoBox.classList.add('contact-info');

    const email = document.createElement('p');
    email.textContent = '📧 Email: giveusmoney@gmail.com';
    infoBox.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = '📞 Phone: (123) 420-6769';
    infoBox.appendChild(phone);

    const address = document.createElement('p');
    address.textContent = '📍 Address: Regret Blvd 66, 4th circle of Hell';
    infoBox.appendChild(address);

    contactSection.appendChild(infoBox);
    contact.appendChild(contactSection);

    content.appendChild(contact);
}