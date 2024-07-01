<template>
    <div class="col-sm-12 col-md-4">
        <div class="card my-card" style="width: 18rem;">
            <img :src="imgSrc" class="card-img-top" alt="...">
            <div class="card-body my-card-body">
                <h3 class="card-title">{{ t(mealName) }}</h3>
                <div class="price-div">
                    <div class="left">{{ t("smallPortion") }}</div>
                    <div class="right">{{ smallPrice }} RSD</div>
                </div>
                <div class="price-div">
                    <div class="left">{{ t("bigPortion") }}</div>
                    <div class="right">{{ bigPrice }} RSD</div>
                </div>
                <a class="btn my-btn" @click="goToDetails(foodId)">{{ t("details") }}</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

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
    }

    .my-card-body h3 {
        font-weight: bolder;
        height: 70px;
    }

    .my-btn {
        background-color: $bg-color;
        color: $font-color;
        border-radius: 20px;
        font-weight: bold;
        width: 70%;
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
        "foodId": Number
    },
    methods: {
        goToDetails(id) {

            const currentPath = this.$route.path;
            this.$router.push(`${currentPath}/${id}`);
        }
    }
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
            "egg-rolls": "Egg rolls"
        },
        "rs": {
            "smallPortion": "Мала порција",
            "bigPortion": "Велика порција",
            "details": "Прикажи детаље",
            "spring-rolls": "Пролећне ролнице",
            "bao-buns": "Бао бунс",
            "egg-rolls": "Ролнице са јајима"
        }
    }
</i18n>