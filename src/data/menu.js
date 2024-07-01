const appetizers = [
    {
        "id": 1,
        "name": "spring-rolls",
        "big-portion-price": 200,
        "small-portion-price": 100,
        "img": "/img/appetizers/spring-rolls.jpg"
    },
    {
        "id": 2,
        "name": "bao-buns",
        "big-portion-price": 300,
        "small-portion-price": 200,
        "img": "/img/appetizers/bao-buns.jpg"
    },
    {
        "id": 3,
        "name": "egg-rolls",
        "big-portion-price": 200,
        "small-portion-price": 100,
        "img": "/img/appetizers/egg-rolls.webp"
    }
]

const menu = [
    {
        "name": "drinks",
        "id": 0,
        "img": "/img/food-types/drink-pict.jpg"
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
        "img": "/img/food-types/meal-pict.jpg"
    },
    {
        "name": "desert",
        "id": 3,
        "img": "/img/food-types/desert-pict.jpg"
    },
];

export default menu;