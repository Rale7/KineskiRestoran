<template>
    <div class="container" id="main">
        <h1 class="fw-bold">{{ t("discounts") }}</h1>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/discount1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../assets/discount2.png" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <h1 class="fw-bold">{{ t("employes") }}</h1>
        <div class="w-100 d-flex" style="justify-content: center;">
            <div class="row w-50">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <img src="../assets/user-profile.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 class="card-title">Rale</h1>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <img src="../assets/user-profile.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 class="card-title">Rasa</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="fw-bold">{{t('bestGrade')}}</h1>
        <div class="row w-100">
            <MealCard
                v-for="meal in meals"
                :key="meal.id"
                :mealName="meal.name"
                :imgSrc="meal.img"
                :smallPrice="meal['small-portion-price']"
                :bigPrice="meal['small-portion-price']"
                :foodId="meal['id']"
                :avgRate="getAvgRate(meal)"></MealCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#main {
    margin-bottom: 100px;
}

.carousel-inner {
    height: 0;
    padding-bottom: 25%;
}

.carousel-item {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.carousel-item img {
    height: 100%;
    object-fit: cover;
}

h1 {
    margin: 40px 0;
}
</style>

<script>
import { useI18n } from "vue-i18n";
import MealCard from "@/components/MealCard.vue";

export default {
    setup() {
        const { t } = useI18n();
        return {
            t,
        };
    },
    name: "HomeView",
    data() {
        return {
            meals: this.getMeals(),
        };
    },
    methods: {
        getMeals() {
            let allMeals = JSON.parse(localStorage.getItem("menu"));

            let meals = []

            let max1=0,max2=0,max3=0;
            let meal1,meal2,meal3;

            for(let i=0;i<4;i++){
                //alert("i="+i)
                for(let j=0;j<allMeals[i]["meals"].length;j++){
                    //alert("j=" + j)
                    let suma=0;
                    for(let k=0;k<allMeals[i]["meals"][j]["rates"].length;k++){
                        //alert("k=" + k)
                        suma += allMeals[i]["meals"][j]["rates"][k]
                    }
                    let avg = suma*1.0/(allMeals[i]["meals"][j]["rates"].length)
                    if(avg>=max1){
                        max3=max2
                        max2=max1
                        max1=avg

                        meal3=meal2
                        meal2=meal1
                        meal1=allMeals[i]["meals"][j]
                    }else if(avg>=max2){
                        max3=max2
                        max2=avg

                        meal3=meal2
                        meal2=allMeals[i]["meals"][j]
                    }else if(avg>=max3){
                        max3=avg
                        meal3=allMeals[i]["meals"][j]

                    }
                }
            }
            


            meals.push(meal1)
            meals.push(meal2)
            meals.push(meal3)


            return meals;
        },
        getAvgRate(meal) {
            if (meal["rates"].length == 0) {
                return 0;
            }

            let sum = 0;

            meal["rates"].forEach((rate) => {
                sum += rate;
            });

            return this.roundToTwoDecimals(sum / meal["rates"].length);
        },
        roundToTwoDecimals(num) {
            const rounded = Math.round(num * 100) / 100;

            return Number(rounded.toString());
        },
    },
    components: {
        MealCard
    }
};
</script>

<i18n>
    {
        "en": {
            "discounts": "Discounts",
            "employes": "Employees",
            "bestGrade": "3 best graded meals"
        },
        "rs": {
            "discounts": "Акције",
            "employes": "Запослени",
            "bestGrade": "3 најбоље оцењена јела"
        }
    }
</i18n>
