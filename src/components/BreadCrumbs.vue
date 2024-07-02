<!-- Breadcrumb.vue -->
<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
                <router-link :to="breadcrumb.path">{{ t(breadcrumb.label) }}</router-link>
            </li>
        </ol>
    </nav>
</template>

<style lang="scss" scoped>
$bg-color: #941816;
$font-color: #f9ba81;
$hover-color: #7c1412;

.breadcrumb {
    background-color: $font-color;
    color: $bg-color;
    font-weight: bold;
    display: flex;
    list-style: none;
    padding: 0 5px;
}
.breadcrumb a {
    color: $bg-color;
    text-decoration: none;
    font-weight: bold;
}
.breadcrumb-item {
    color: $bg-color;
}
.breadcrumb-item + .breadcrumb-item::before {
    content: ">";
    margin: 0 0.5rem;
}
</style>

<script>

import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const {t} = useI18n();
        return {
            t,
        }
    },
    name: "Breadcrumb",
    data() {
        return {
            breadcrumbs: [],
        };
    },
    created() {
        this.updateBreadcrumbs();
        this.$router.afterEach(() => {
            this.updateBreadcrumbs();
        });
    },
    methods: {
        updateBreadcrumbs() {
            let breadcrumbs = [];

            let currentRoutes = this.$route.fullPath.split('/');
            currentRoutes.shift();

            let currentPath = '';
            let previous = null;

            currentRoutes.forEach(route => {
                currentPath += '/' + route ;
                
                breadcrumbs.push({
                    "label": this.getLabel(route, previous),
                    "path": currentPath
                });
                previous = route;
            });

            this.breadcrumbs = breadcrumbs;
        },
        getLabel(route, previous) {
            if (this.isNumber(route)) {
                    let allMeals = JSON.parse(localStorage.getItem('menu'));

                    let meals = allMeals.find( type =>  type['name'] == previous)['meals'];

                    let meal = meals.find(meal => meal['id'] == route);

                    return meal['name'];
            } else {
                return route;
            }
        },
        isNumber(str) {
            return /^[+-]?\d+(\.\d+)?$/.test(str);
        }
    },
};
</script>

<i18n>
{
    "en": {
        "menu": "Menu",
        "galery": "Galery",
        "about": "About us",
        "appetizers": "Appetizers",
        "drinks": "Drinks",
        "meal": "Meal",
        "desert": "Desert",
        "cart": "My Cart",
        "orders": "My orders",
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
            "poh-an": "Fried pineapple" ,

    },
    "rs": {
        "menu": "Јеловник",
        "galery": "Галерија",
        "about": "О нама",
        "appetizers": "Предјелo",
        "drinks": "Пиће",
        "meal": "Главно јело",
        "desert": "Дезерт",
        "cart": "Моја корпа",
        "orders": "Моје наруџбине",
        "bao-buns": "Бао бунс",
        "egg-rolls": "Ролнице са јајима",
        "bigPrice": "Цена велике порције",
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