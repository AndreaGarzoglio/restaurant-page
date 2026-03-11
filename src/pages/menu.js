export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');
    const heading = document.createElement('h1');
    heading.textContent = 'Our Humble Menu';
    menu.appendChild(heading);

    // Menu sections with items
    const menuSections = [
        {
            title: '🥂 Starters',
            items: [
                {
                    name: 'Deconstructed Dreams of Foie Gras',
                    description: 'Foie gras from ducks raised exclusively on classical music, presented in seven different textures on a bed of edible flower petals worth more than a car payment.',
                    price: '$195'
                },
                {
                    name: 'The Unicorn\'s Breath Scallop',
                    description: 'Impossibly large scallops seared for exactly 47 seconds, served over a cloud of vintage champagne foam with micro-greens harvested by monks in a remote monastery.',
                    price: '$288'
                },
                {
                    name: 'Caviar Constellation',
                    description: 'A celestial arrangement of the world\'s rarest caviars on blini made with flour blessed by angels. Each spoonful is an existential experience.',
                    price: '$425'
                }
            ]
        },
        {
            title: '🍽️ Main Courses',
            items: [
                {
                    name: 'The Platinum-Infused Wagyu Paradox',
                    description: 'A 24-karat-aged Japanese A5 wagyu, seared in truffle-scented clarified butter and finished with edible gold leaf and a reduction of 50-year-old balsamic vinegar.',
                    price: '$1385'
                },
                {
                    name: 'Lobster Tears of Joy',
                    description: 'A live Maine lobster, hand-massaged with champagne and served with saffron-kissed caviar espuma, topped with a whisper of Himalayan pink salt harvested at midnight.',
                    price: 'Your left kidney'
                },
                {
                    name: 'The Black Truffle Nebula',
                    description: 'A risotto made with rice grains individually hand-selected, infused with black truffle smoke, finished with a shaved white truffle the size of a golf ball.',
                    price: 'Your firstborn child'
                },
                {
                    name: 'Eternal Bliss Beef Wellington',
                    description: 'A beef tenderloin wrapped in duxelles of extinct mushroom varieties, encased in organic puff pastry blessed by a French chef with three Michelin stars.',
                    price: 'The concept of money itself'
                }
            ]
        },
        {
            title: '🍰 Desserts',
            items: [
                {
                    name: 'The Chocolate Singularity',
                    description: 'A dessert so decadent it defies the laws of physics. Made with chocolate from cacao pods that have never seen sunlight, topped with gold dust and served at the exact temperature of your memories.',
                    price: 'A mobious strip made out of hundred-dollar bills'
                },
                {
                    name: 'Spheres of Crystallized Dreams',
                    description: 'Edible spheres filled with passion fruit caviar and served with a smoke made from burning expensive French vanilla. Each sphere explodes in your mouth with existential joy.',
                    price: 'On the house... Jk, YOUR house'
                },
                {
                    name: 'The Infinity Soufflé',
                    description: 'A soufflé so light it may ascend to heaven. Made with eggs from chickens that meditate daily, served with a foam made from the essence of pure bliss.',
                    price: 'You can\'t afford it anyway'
                }
            ]
        }
    ];

    // Create sections
    menuSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.classList.add('menu-section-title');
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);

        const menuList = document.createElement('ul');
        menuList.classList.add('menu-list');

        section.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemName.classList.add('menu-item-name');

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDescription.classList.add('menu-item-description');

            const itemPrice = document.createElement('p');
            itemPrice.textContent = item.price;
            itemPrice.classList.add('menu-item-price');

            listItem.appendChild(itemName);
            listItem.appendChild(itemDescription);
            listItem.appendChild(itemPrice);
            menuList.appendChild(listItem);
        });

        sectionDiv.appendChild(menuList);
        menu.appendChild(sectionDiv);
    });

    content.appendChild(menu);
}