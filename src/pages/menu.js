import { siteCard } from "../index";

export const menu = () => {
    const menuItems = [
        {
            name: 'Coffee',
            items: [
                {
                    name: 'coffee',
                    description: 'a cup of black coffee'
                }, 
                {
                    name: 'black & tan',
                    description: 'draft latte and cold brew'
                }, 
                {
                    name: 'cortado',
                    description: 'equal parts coffee and frothed milk'
                }
            ]
        }, 
        {
            name: 'Pastries',
            items: [
                {
                    name: 'scone',
                    description: 'a sensational scone'
                }, 
                {
                    name: 'chocolate croissant',
                    description: 'a croissant with chocolate'
                },
                {
                    name: 'muffin',
                    description: 'a singular muffin'
                }
            ]
        },
        {
            name: 'Sandwiches',
            items: [
                {
                    name: 'ham',
                    description: 'a ham sandwich on sourdough'
                }, 
                {
                    name: 'croque-monsieur',
                    description: 'a croque for a monsieur'
                }, 
                {
                    name: 'greek',
                    description: 'so. much. feta.'
                }
            ]
        }
    ]

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const menu = document.createElement('ul');
    menu.classList.add('menu');
    menu.classList.add('page-container');

    menuItems.forEach(item => {
        // Create div to append to ul
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-div');
        itemDiv.setAttribute('id', `${item.name}`);
        const itemTitle = document.createElement('h2');
        itemTitle.classList.add('item-title');
        itemTitle.innerText = `${item.name}`;

        menu.appendChild(itemDiv)
        itemDiv.appendChild(itemTitle);

        item.items.forEach(option => {
            const subItemName = document.createElement('h3');
            subItemName.classList.add('sub-item-name');
            const subItemDescription = document.createElement('p');

            subItemName.innerText = option.name;
            subItemDescription.innerText = option.description;

            subItemName.appendChild(subItemDescription);
            itemDiv.appendChild(subItemName);
        })
    })

    menuDiv.appendChild(menu);
    siteCard.appendChild(menu);

    return menu, menuDiv;
}