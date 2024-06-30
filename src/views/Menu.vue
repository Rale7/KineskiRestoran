<template>
    <div id="menu" class="container">
        <div class="row">
            <div class="col-sm-12" id="food-menu">
                <h1>{{ t("menu") }}</h1>
                <div  class="row" id="types-of-food">
                    <div v-for="type in typeOfMeals" :key='type.id' class="col-sm-12 col-md-6">
                        <FoodType
                            :myType="type.name"
                            :typeName="t(type.name)" 
                            :imgSrc="type.img"
                        ></FoodType>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    #types-of-food {
        margin-bottom: 24px;
    }

    #food-menu h1 {
        color: $bg-color;
        font-weight: bold;
        margin: 5px 0px;
    }

</style>

<script>

import { useI18n } from "vue-i18n";
import FoodType from "@/components/FoodType.vue"

export default {
    setup() {
        const {t} = useI18n();
        return {
            t,
        }
    },
    name: "Menu",
    components: {
        FoodType
    },
    data() {
        return {
            "typeOfMeals": this.getMeals()
        }
    },
    methods: {
        getMeals() {
            let menu = JSON.parse(localStorage.getItem('menu'));

            let meals = [];

            menu.forEach(type => {
                meals.push({
                    "id": type['id'],
                    "name": type['name'],
                    'img': type['img']
                }) 
            });

            return meals;
        },
    }
}

</script>

<i18n>
{
    "en": {
        "menu": "Menu",
        "drinks": "Drinks",
        "appetizers": "Appetizers",
        "meal": "Meal",
        "desert": "Desert"
    },
    "rs": {
        "menu": "Јеловник",
        "drinks": "Пиће",
        "appetizers": "Предјело",
        "meal": "Главно јело",
        "desert": "Дезерт"
    }
}
</i18n>
