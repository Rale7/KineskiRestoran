<template>
    <div class="col-sm-12 col-lg-6 col-xl-4">
        <div class="card w-100 my-card" style="width: 18rem;">
            <img :src="imgSrc" class="card-img-top" alt="...">
            <div class="card-body my-card-body">
                <h3 class="card-title">{{ t(mealName) }}</h3>
                <div class="rate-div">
                    <i class='bx bxs-star'></i>{{avgRate}}
                </div>
                <div class="price-div">
                    <div class="left">{{ t("smallPortion") }}</div>
                    <div class="right">{{ smallPrice }} RSD</div>
                </div>
                <div class="price-div">
                    <div class="left">{{ t("bigPortion") }}</div>
                    <div class="right">{{ bigPrice }} RSD</div>
                </div>
                <div v-if="this.$route.path != '/'">
                    <a class="btn my-btn" @click="goToDetails(foodId)">{{ t("details") }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .rate-div {
        color: $bg-color;
        font-size: 40px;
        margin-bottom: 20px;
    }

    .price-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .price-div .left {
        text-align: left
    }

    .price-div .right {
        text-align: right;
    }

    .my-card {
        margin-top: 20px;
        border-radius: 20px;
    }

    .my-card img {
        border-radius: 20px 20px 0 0;
        height: 190px;
        object-fit: cover;
    }

    .my-card-body h3 {
        font-weight: bolder;
    }

    .my-btn {
        background-color: $bg-color;
        color: $font-color;
        border-radius: 20px;
        font-weight: bold;
        width: 70%;
        margin-top: 20px;
    }

    .my-btn:focus,
    .my-btn:hover {
        background-color: $hover-color;
        color: $font-color;
    }

</style>

<script>

import { useI18n } from "vue-i18n";

export default {
    setup() {
        const {t} = useI18n();
        return {
            t,
        }
    },
    name: "MealCard",
    props: {
        "mealName": String,
        "imgSrc": String,
        "smallPrice": Number,
        "bigPrice": Number,
        "foodId": Number,
        "avgRate": Number,
    },
    methods: {
        goToDetails(id) {

            const currentPath = this.$route.path;
            this.$router.push(`${currentPath}/${id}`);
        }
    },
}

</script>

<i18n>
    {
        "en": {
            "smallPortion": "Small portion",
            "bigPortion": "Big portion",
            "details": "See details",
            "spring-rolls": "Spring rolls",
            "bao-buns": "Bao buns",
            "egg-rolls": "Egg rolls",
            "green-tea": "Green tea",
            "juice": "Juice",
            "wine": "Wine",
            "chicken-peanut":"Chicken with peanut sauce",
            "jun-hoisin":"Beef in hoishin sauce",
            "svin-ter":"Pork in teriyaki sauce",
            "poh-ban":"Fried banana",
            "poh-cok": "Fried chocolate",
            "poh-an": "Fried pineapple"
        },
        "rs": {
            "smallPortion": "Мала порција",
            "bigPortion": "Велика порција",
            "details": "Прикажи детаље",
            "spring-rolls": "Пролећне ролнице",
            "bao-buns": "Бао бунс",
            "egg-rolls": "Ролнице са јајима",
            "green-tea": "Зелени чај",
            "juice": "Сок",
            "wine": "Вино",
            "chicken-peanut":"Пилетина у кикирики сосу",
            "jun-hoisin":"Јунетина у хоисин сосу",
            "svin-ter":"Свињетина у терјаки сосу",
            "poh-ban": "Похована банана",
            "poh-cok":"Похована чоколада",
            "poh-an": "Поховани ананас"
        }
    }
</i18n>