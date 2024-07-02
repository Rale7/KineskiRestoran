const appetizers = [
    {
        "id": 1,
        "name": "spring-rolls",
        "big-portion-price": 200,
        "small-portion-price": 100,
        "img": "/img/appetizers/spring-rolls.jpg",
        "rates": []
    },
    {
        "id": 2,
        "name": "bao-buns",
        "big-portion-price": 300,
        "small-portion-price": 200,
        "img": "/img/appetizers/bao-buns.jpg",
        "rates": []
    },
    {
        "id": 3,
        "name": "egg-rolls",
        "big-portion-price": 200,
        "small-portion-price": 100,
        "img": "/img/appetizers/egg-rolls.webp",
        "rates": []
    }
];

const drinks = [
    {
        "id": 1,
        "name": "green-tea",
        "big-portion-price": 250,
        "small-portion-price": 150,
        "img": "/img/drinks/green-tea.jpg",
        "rates": []
    },
    {
        "id": 2,
        "name": "juice",
        "big-portion-price": 350,
        "small-portion-price": 200,
        "img": "/img/drinks/juice.jpg",
        "rates": []
    },
    {
        "id": 3,
        "name": "wine",
        "big-portion-price": 500,
        "small-portion-price": 400,
        "img": "/img/drinks/vine.jpg",
        "rates": []
    }
];

const menu = [
    {
        "name": "drinks",
        "id": 0,
        "img": "/img/food-types/drink-pict.jpg",
        "meals": drinks
    },
    {
        "name": "appetizers",
        "id": 1,
        "img": "/img/food-types/appetizer-pict.jpg",
        "meals": appetizers
    },
    {
        "name": "meal",
        "id": 2,
        "img": "/img/food-types/meal-pict.jpg",
        "meals": []
    },
    {
        "name": "desert",
        "id": 3,
        "img": "/img/food-types/desert-pict.jpg",
        "meals": []
    },
];

export default menu;