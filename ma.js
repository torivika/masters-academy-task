const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
const elementFruitsList = document.querySelector('[data-fruits]')


fruits.forEach((fruit) => {
    let createLiElement = document.createElement('li');
    let fruitName = fruit;

    if (fruit === 'Apple') {
        fruitName = 'Only ' + fruit;
    }


    createLiElement.innerText = fruitName;
    elementFruitsList.appendChild(createLiElement);
})