export default function loadHome() {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const home = document.createElement('div');
    home.classList.add('home');

    const heading = document.createElement('h1');
    heading.textContent = 'Le Piège du Touriste';
    home.appendChild(heading);

    const tagline = document.createElement('h2');
    tagline.className = 'tagline';
    tagline.textContent = 'Where Money leaves, but memories remain.';
    home.appendChild(tagline);

    const description = document.createElement('p');
    description.textContent = 'Welcome to Le Piège du Touriste, where your finances are tested and your taste buds are tantalized. Our mission is to provide an unforgettable dining experience that will leave you questioning your life choices. We serve dishes so unfathomably exquisite, it would be a crime to make them affordable. Join us for a night of culinary excess and existential dread.';
    home.appendChild(description);


    // Reviews Section
    const reviewsSection = document.createElement('div');
    reviewsSection.classList.add('home-section');

    const reviewsTitle = document.createElement('h2');
    reviewsTitle.classList.add('home-section-title');
    reviewsTitle.textContent = '⭐ Guest Reviews';
    reviewsSection.appendChild(reviewsTitle);

    const reviews = [
        {
            author: '- Literally everyone who has ever eaten here',
            text: '"5 stars, would sell my soul again."'
        },
        {
            author: '- Former tourist, now permanent resident',
            text: '"The Black Truffle Nebula was so good, I considered quitting cooking and just eating there every day. The price? Money is just a concept anyway."'
        },
        {
            author: '- Your Future Self From 2050',
            text: '"I traveled back to a time when I had money just to eat here again."'
        }
    ];

    reviews.forEach(review => {
        const reviewBox = document.createElement('div');
        reviewBox.classList.add('review-box');

        const reviewText = document.createElement('p');
        reviewText.classList.add('review-text');
        reviewText.textContent = review.text;

        const reviewAuthor = document.createElement('p');
        reviewAuthor.classList.add('review-author');
        reviewAuthor.textContent = review.author;

        reviewBox.appendChild(reviewText);
        reviewBox.appendChild(reviewAuthor);
        reviewsSection.appendChild(reviewBox);
    });

    home.appendChild(reviewsSection);
    content.appendChild(home);




    // Hours Section
    const hoursSection = document.createElement('div');
    hoursSection.classList.add('home-section');

    const hoursTitle = document.createElement('h2');
    hoursTitle.classList.add('home-section-title');
    hoursTitle.textContent = '🕐 Hours of Operation';
    hoursSection.appendChild(hoursTitle);

    const hoursBox = document.createElement('div');
    hoursBox.classList.add('home-info-box');

    const hours = [
        { day: 'Monday - Thursday', time: '5:00 PM - 11:00 PM' },
        { day: 'Friday - Saturday', time: '5:00 PM - 12:00 AM' },
        { day: 'Sunday', time: '5:00 PM - 10:00 PM' }
    ];

    hours.forEach(hour => {
        const hourLine = document.createElement('p');
        hourLine.textContent = `${hour.day}: ${hour.time}`;
        hourLine.style.margin = '0.5rem 0';
        hoursBox.appendChild(hourLine);
    });

    hoursSection.appendChild(hoursBox);
    home.appendChild(hoursSection);

    // Location Section
    const locationSection = document.createElement('div');
    locationSection.classList.add('home-section');

    const locationTitle = document.createElement('h2');
    locationTitle.classList.add('home-section-title');
    locationTitle.textContent = '📍 Our Location';
    locationSection.appendChild(locationTitle);

    const locationBox = document.createElement('div');
    locationBox.classList.add('home-info-box');
    locationBox.textContent = 'Regret Blvd 66, 4th circle of Hell';
    locationSection.appendChild(locationBox);

    home.appendChild(locationSection);
}