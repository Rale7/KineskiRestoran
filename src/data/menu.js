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


const meal = [
    {
        "id": 1,
        "name": "svin-ter",
        "big-portion-price": 750,
        "small-portion-price": 500,
        "img": "/img/meal/svin-ter.png",
        "rates": []
    },
    {
        "id": 2,
        "name": "jun-hoisin",
        "big-portion-price": 900,
        "small-portion-price": 600,
        "img": "/img/meal/jun-hois.png",
        "rates": []
    },
    {
        "id": 3,
        "name": "chicken-peanut",
        "big-portion-price": 700,
        "small-portion-price": 500,
        "img": "/img/meal/pil-kikiriki.png",
        "rates": []
    },



]

const desert=[
    {
        "id": 1,
        "name": "poh-cok",
        "big-portion-price": 300,
        "small-portion-price": 150,
        "img": "/img/desert/poh-cok.png",
        "rates": []
    },
    {
        "id": 2,
        "name": "poh-an",
        "big-portion-price": 400,
        "small-portion-price": 250,
        "img": "/img/desert/poh-an.png",
        "rates": []
    },
    {
        "id": 3,
        "name": "poh-ban",
        "big-portion-price": 300,
        "small-portion-price": 150,
        "img": "/img/desert/poh-ban.png",
        "rates": []
    },



]


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
        "meals": meal
    },
    {
        "name": "desert",
        "id": 3,
        "img": "/img/food-types/desert-pict.jpg",
        "meals": desert
    },
];

export default menu;