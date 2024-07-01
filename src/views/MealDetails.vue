<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8">
                <div class="img-div">
                    <img :src="meal.img" alt="">
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="data-div">
                    <h1>{{t(meal.name)}}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit quaerat et maiores quisquam. Ipsam incidunt doloribus dolor corrupti ut, quam deserunt dolores porro sunt in sit magnam quaerat itaque.
                    </p>
                </div>
                <div class="price-div-wrapper">
                    <div class="price-div">
                        <div class="price-left">{{t('bigPrice')}}</div>
                        <div class="price-right">{{meal['big-portion-price']}}</div>
                    </div>
                    <div class="price-div">
                        <div class="price-left">{{t('smallPrice')}}</div>
                        <div class="price-right">{{meal['small-portion-price']}}</div>
                    </div>
                </div>
                <StarRating :value="4.25"></StarRating>
                <div class="amount-wrapper">
                    <div class="amount-div">
                        <button class="amount-left" @click="changeAmount(-1)">
                            <i class='bx bx-minus' ></i>
                        </button>
                        <span class="amount-center">{{amount}}</span>
                        <button class="amount-right" @click="changeAmount(1)">
                            <i class='bx bx-plus' ></i>
                        </button>
                    </div>
                </div>
                <button class="cart-button">
                    {{t('cart')}}&nbsp;<i class='bx bxs-cart-add' ></i>
                </button>
            </div>
        </div> 
    </div> 
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .img-div img {
        margin-top: 100px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .data-div {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        flex-direction: column;
    }

    @media screen and(max-width: 576px){
        .img-div img, .data-div {
            margin-top: 15px;
        }      
    }
    .data-div h1 {
        font-weight: bolder;
        margin-bottom: 40px;
    }

    .price-div {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .price-div-wrapper {
        margin: 40px 0;
    }

    .price-div .price-left {
        text-align: left;
    }

    .price-div .price-right {
        text-align: right;
    }

    .amount-wrapper {
        display: flex;
        justify-content: center;
    }

    .amount-div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        border-radius: 20px;
        border: 1px solid lightgray;
        height: 40px;
        margin-top: 40px;
    }

    .amount-div button {
        border-radius: 50%;
        background: transparent;
        color: $bg-color;
        border: none;
        font-size: 20px;
        display: flex;
    }

    .amount-div .amount-left {
        text-align: left;
    }
    
    .amount-div .amount-center {
        text-align: center;
    }

    .amount-div .amount-right {
        text-align: right;
    }

    .cart-button {
        background-color: $bg-color;
        color: $font-color;
        font-weight: bolder;
        border-radius: 20px;
        border: none;
        font-size: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px 0;
    }

    @media screen and (max-width: 576px){
        
        .amount-div {
            margin-top: 15px;
        }

        .data-div h1 {
            margin-bottom: 15px;
        }

        .cart-button, .price-div-wrapper {
            margin: 20px 0;
        }

    }

    .cart-button:hover {
        background-color: $hover-color;
    }

</style>

<script>

import StarRating from '@/components/StarRating.vue'
import { useI18n } from "vue-i18n";

export default {
    setup() {
        const {t} = useI18n();
        return {
            t,
        }
    },
    name: "MealDetails",
    data() {
        return {
            "meal": this.getMeal(),
            "amount": 1,
        }
    },
    components: {
        StarRating
    },
    methods: {
        getMeal() {
            let foodType = this.$route.params.food_type;
            let mealId = this.$route.params.meal_id;

            let allMeals = JSON.parse(localStorage.getItem('menu'));

            let meals = allMeals.find( type =>  type['name'] == foodType)['meals'];

            let meal = meals.find(meal => meal['id'] == mealId);

            return meal;
        },
        changeAmount(value) {
            this.amount += value;

            if (this.amount < 1) this.amount = 1; 
        }
    }
}

</script>

<i18n>
    {
        "en": {
            "cart": "Add to cart",
            "spring-rolls": "Spring rolls",
            "bao-buns": "Bao buns",
            "egg-rolls": "Egg rolls",
            "bigPrice": "Big portion price",
            "smallPrice": "Small portion price"
        },
        "rs": {
            "cart": "Додај у корпу",
            "spring-rolls": "Пролећне ролнице",
            "bao-buns": "Бао бунс",
            "egg-rolls": "Ролнице са јајима",
            "bigPrice": "Цена велике порције",
            "smallPrice": "Цена мале порције"
        }
    }
</i18n>

