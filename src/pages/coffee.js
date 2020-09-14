import { siteCard } from "../index";

export const coffee = () => {
    const coffeeList = [
        {
            name: 'Corsica',
            roast: 'Dark Roast',
            description: 'Baker\'s Chocolate, Red Wine, Spices',
            price: 13
        },
        {
            name: 'Nizza',
            roast: 'Medium Roast',
            description: 'Milk Chocolate, Nuts, Brownie',
            price: 13
        },
        {
            name: 'Monaco',
            roast: 'Dark Roast',
            description: 'Currant, Caramel Apple, Malt',
            price: 14
        },
        {
            name: 'Eduador',
            roast: 'Light Roast',
            description: 'Winesap Apple, Honeydew, Barbados Sugar',
            price: 16
        },
        {
            name: 'Lyon',
            roast: 'Medium Roast',
            description: 'Caramel, Brownie, Toffee',
            price: 14
        }, 
        {
            name: 'Louisiane',
            roast: 'Dark Roast',
            description: 'Black Pepper, Green Pepper, Spices',
            price: 14
        }
    ];

    const coffeeDiv = document.createElement('div');
    coffeeDiv.classList.add('coffee-div');
    coffeeDiv.classList.add('page-container');

    const coffeeDivTitle = document.createElement('h2');
    coffeeDivTitle.innerText = 'Coffee';

    const productList = document.createElement('ul');
    productList.classList.add('coffee-grid');
    coffeeList.forEach((item, index) => {
        const coffeeItemDiv = document.createElement('div');
        coffeeItemDiv.classList.add('coffee-item-div');

        const coffeeProductImage = document.createElement('img');
        coffeeProductImage.src = `../src/coffee-photos/colombe-${index}.png`;

        const coffeeItemName = document.createElement('h3');
        coffeeItemName.classList.add('coffee-item-name');
        coffeeItemName.innerText = item.name;

        const coffeeItemRoast = document.createElement('h4');
        coffeeItemRoast.classList.add('coffee-item-roast');
        coffeeItemRoast.innerText = item.roast;

        const coffeeItemDescription = document.createElement('h4');
        coffeeItemDescription.classList.add('coffee-item-description');
        coffeeItemDescription.innerText = item.description;

        const coffeeItemPrice = document.createElement('h4');
        coffeeItemPrice.classList.add('coffee-item-price');
        coffeeItemPrice.innerText = '$' + item.price;

        coffeeItemDiv.appendChild(coffeeProductImage);
        coffeeItemDiv.appendChild(coffeeItemName);
        coffeeItemDiv.appendChild(coffeeItemRoast);
        coffeeItemDiv.appendChild(coffeeItemDescription);
        coffeeItemDiv.appendChild(coffeeItemPrice);

        productList.appendChild(coffeeItemDiv);
    });
    coffeeDiv.appendChild(coffeeDivTitle);
    coffeeDiv.appendChild(productList);
    siteCard.appendChild(coffeeDiv);
}