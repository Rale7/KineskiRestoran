<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-3">
                <div class="search-div">
                    <h1>{{ t("search") }} <i class='bx bx-search'></i></h1>
                    <hr>
                    <input @input="filter()" type="text" v-model="name" :placeholder="t('name')">
                    <hr>
                    <div class="slide-container">
                        <div class="slide-container-heading">
                            <h4>{{ t("bigPortion") }}</h4>
                        </div>
                        <div class="slider-track" id="min-slider-track-1">
                            <input @input="slideOne()" type="range" min="0" max="100" v-model="range1">
                            <input @input="slideTwo()" type="range" min="0" max="100" v-model="range2">
                        </div>
                        <div class="result-div">
                            {{ value1 }}-{{ value2 }}
                        </div>
                    </div>
                    <hr>
                    <div class="slide-container">
                        <div class="slide-container-heading">
                            <h4>{{ t("smallPortion") }}</h4>
                        </div>
                        <div class="slider-track" id="min-slider-track-2">
                            <input @input="slideThree()" type="range" min="0" max="100" v-model="range3">
                            <input @input="slideFour()" type="range" min="0" max="100" v-model="range4">
                        </div>
                        <div class="result-div">
                            {{ value3 }}-{{ value4 }}
                        </div>
                    </div>
                    <hr>
                <div class="btn-group my-btn-group">
                    <button type="button" class="btn dropdown-toggle my-dropdown-button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ t(sortingType) }}
                    </button>
                    <ul class="dropdown-menu w-100 my-dropdown-menu">
                        <li><hr class="dropdown-divider my-divider"></li> 
                        <li><a class="dropdown-item" @click="sortingType='name-asc'; filter()">{{ t('name-asc') }}</a></li>
                        <li><a class="dropdown-item" @click="sortingType='name-desc'; filter()">{{ t('name-desc') }}</a></li>
                        <li><a class="dropdown-item" @click="sortingType='score-asc'; filter()">{{ t('score-asc') }}</a></li>
                        <li><a class="dropdown-item" @click="sortingType='score-desc'; filter()">{{ t('score-desc') }}</a></li>
                    </ul>
                    </div>
                </div> 
            </div>
            <div class="col-sm-12 col-md-9">
                <div class="row">
                <MealCard v-for="meal in meals" 
                :key="meal.id" 
                :mealName="meal.name" 
                :imgSrc="meal.img"
                :smallPrice="meal['small-portion-price']"
                :bigPrice="meal['small-portion-price']"
                :foodId="meal['id']"
                ></MealCard>
                </div>
            </div>

        </div>
    </div>    
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .search-div h1 {
        margin-bottom: 30px;
    }

    .my-btn-group {
        width: 100%;
        margin-bottom: 20px;
    }

    .my-dropdown-button {
        width: 100%;
        border-radius: 20px;
        border: none;
        color: $font-color;
    }

    .my-dropdown-button.show {
        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .my-dropdown-menu {
        background-color: $bg-color;
        border: none;
        border-radius: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        cursor: pointer;
        transition: display 0.5s ease !important;
    }

    .my-dropdown-menu a:hover {
        background-color: $hover-color;
    }

    .my-dropdown-menu a {
        color: $font-color;
        text-align: center;
    }

    .my-dropdown-menu hr {
        color: $font-color !important;
    }

    .search-div {
        margin-top: 20px;
        background-color: $bg-color;
        color: $font-color;
        border-radius: 20px;
        padding-top: 20px;
    }

    .search-div input[type="text"] {
        border-radius: 2px;
        border: none;
        height: 30px;
        font-size: 20px;
        background-color: lighten($color: $bg-color, $amount: 5);
        padding: 4px;
        color: $font-color;
    }

    .search-div input[type="text"] {
        outline: none;
    }

    .search-div input[type="text"]::placeholder {
        color: transparentize($color: $font-color, $amount: 0.5);
    }

    .slide-container {
        position: relative;
        width: 100%;
        height: 100px;
        margin-top: 15px; 
        display: flex;
        justify-content: center;
    }

    .slide-container-heading {
        width: 100%;
        display: flex;
        text-align: left;
        padding: 0 15px;
    }

    .result-div {
        position: absolute;
        top: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input[type="range"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        outline: none;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: transparent;
        pointer-events: none;
    }
    .slider-track {
        width: 90%;
        height: 5px;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        border-radius: 5px;
    }
    input[type="range"]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 5px;
    }
    input[type="range"]::-moz-range-track {
        -moz-appearance: none;
        height: 5px;
    }
    input[type="range"]::-ms-track {
        appearance: none;
        height: 5px;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 1.7em;
        width: 1.7em;
        background-color: $font-color;
        cursor: pointer;
        margin-top: -9px;
        pointer-events: auto;
        border-radius: 50%;
    }
    input[type="range"]::-moz-range-thumb {
        height: 1.7em;
        width: 1.7em;
        cursor: pointer;
        border-radius: 50%;
        background-color: $font-color;
        pointer-events: auto;
        border: none;
    }
    input[type="range"]::-ms-thumb {
        appearance: none;
        height: 1.7em;
        width: 1.7em;
        cursor: pointer;
        border-radius: 50%;
        background-color: $font-color;
        pointer-events: auto;
    }
    input[type="range"]:active::-webkit-slider-thumb {
        background-color: white;
        border: 1px solid white;
    }


</style>

<script>

import MealCard from "@/components/MealCard.vue"
import { useI18n } from "vue-i18n";

export default {
    setup() {
        const {t} = useI18n();
        return {
            t,
        }
    },
    name: "FoodList",
    components: {
        MealCard
    },
    methods: {
        getMealData() {

            let allMeals = JSON.parse(localStorage.getItem('menu'));

            let currentType = this.$route.params.food_type;

            let meals = allMeals.find( type =>  type['name'] == currentType)['meals'];
            
            return meals;
        },
        fillColor(range1, range2, slider1) {
            let percent1 = (range1 / this.sliderMaxValue) * 100;
            let percent2 = (range2 / this.sliderMaxValue) * 100;
            let sliderTrack = document.getElementById(slider1);
            sliderTrack.style.background = `linear-gradient(to right, white 
            ${percent1}% , #f9ba81 ${percent1}% , 
            #f9ba81 ${percent2}%, white ${percent2}%)`;
        },
        slideOne() {
            if (parseInt(this.range2) - parseInt(this.range1) <= this.minGap) {
                this.range1 = parseInt(this.range2) - this.minGap;
            }
            this.value1 = this.getValue(this.range1);
            this.fillColor(this.range1, this.range2, 'min-slider-track-1');
            this.filter();
        },
        slideThree() {
            if (parseInt(this.range4) - parseInt(this.range3) <= this.minGap) {
                this.range3 = parseInt(this.range4) - this.minGap;
            }
            this.value3 = this.getValue(this.range3);
            this.fillColor(this.range3, this.range4, 'min-slider-track-2');
            this.filter();
        },
        slideTwo() {
            if (parseInt(this.range2) - parseInt(this.range1) <= this.minGap) {
                this.range2 = parseInt(this.range1) + this.minGap;
            }
            this.value2 = this.getValue(this.range2) ;
            this.fillColor(this.range1, this.range2, 'min-slider-track-1');
            this.filter();
        },
        slideFour() {
            if (parseInt(this.range4) - parseInt(this.range3) <= this.minGap) {
                this.range4 = parseInt(this.range3) + this.minGap;
            }
            this.value4 = this.getValue(this.range4) ;
            this.fillColor(this.range3, this.range4, 'min-slider-track-2');
            this.filter();
        },
        getValue(range) {
            if (range == 100) {
                return '10000+';
            }

            return range * 100;
        },
        filter() {

            let downBigBorder = (this.value1 == '10000+' ? Infinity : parseInt(this.value1));
            let upBigBorder = (this.value2 == '10000+' ? Infinity : parseInt(this.value2));
            let downSmallBorder = (this.value3 == "10000+" ? Infinity : parseInt(this.value3));
            let upSmallBorder = (this.value4 == "10000+" ? Infinity : parseInt(this.value4));

            let allMeals = this.getMealData();

            this.meals = [];

            allMeals.forEach(meal => {
                
                if ( downBigBorder < meal['big-portion-price'] && meal['big-portion-price'] < upBigBorder &&
                    downSmallBorder < meal['small-portion-price'] && meal['small-portion-price'] < upSmallBorder &&
                    new RegExp(this.name, 'i').test(this.t(meal['name']))) {
                    this.meals.push(meal);
                }
            });

            if (this.sortingType == 'name-asc') {
                this.meals.sort((a, b) => this.t(a['name']).toLowerCase().localeCompare(this.t(b['name']).toLowerCase()));
            } else if (this.sortingType == 'name-desc') {
                this.meals.sort((a, b) => this.t(b['name']).toLowerCase().localeCompare(this.t(a['name']).toLowerCase()));
            }
        }
    },
    data() {
        return {
            'meals': this.filter(),
            'sliderMaxValue': 100,
            'minGap': 0,
            'name': '',
            'range1': 0,
            'range2': 100,
            'range3': 0,
            'range4': 100,
            'value1': '0',
            'value2': '0',
            'value3': '0',
            'value4': '0',
            'sortingType': 'name-asc'
        }
    },
    mounted() {
        this.slideOne();
        this.slideTwo();
        this.slideThree();
        this.slideFour();
    }
}

</script>

<i18n>
{
    "en": {
        "search": "Search",
        "bigPortion": "Big portion price",
        "smallPortion": "Small portion price",
        "name-asc": "Name ascending",
        "name": "Name",
        "name-desc": "Name descending",
        "score-asc": "Score ascending",
        "score-desc": "Score descending",
        "spring-rolls": "Spring rolls",
        "bao-buns": "Bao buns",
        "egg-rolls": "Egg rolls"
    },
    "rs": {
        "search": "Претрага",
        "bigPortion": "Цена велике порције",
        "smallPortion": "Цена мале порције",
        "name": "Назив",
        "name-asc": "Назив растуће",
        "name-desc": "Назив опадајуће",
        "score-asc": "Оцена растуће",
        "score-desc": "Оцена опадајуће",
        "spring-rolls": "Пролећне ролнице",
        "bao-buns": "Бао бунс",
        "egg-rolls": "Ролнице са јајима"
    }
}
</i18n>


