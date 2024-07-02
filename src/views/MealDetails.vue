<template>
    <div class="container" id="main">
        <div class="row">
            <div class="col-sm-12 col-md-8">
                <div class="img-div">
                    <img :src="meal.img" alt="" />
                </div>
                <DownloadMenu></DownloadMenu>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="data-div">
                    <h1>{{ t(meal.name) }}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit quaerat et maiores quisquam. Ipsam incidunt
                        doloribus dolor corrupti ut, quam deserunt dolores porro sunt in sit magnam quaerat itaque.
                    </p>
                </div>
                <div class="price-div-wrapper">
                    <div class="price-div">
                        <div class="price-left">{{ t("bigPrice") }}</div>
                        <div class="price-right">{{ meal["big-portion-price"] }}</div>
                    </div>
                    <div class="price-div">
                        <div class="price-left">{{ t("smallPrice") }}</div>
                        <div class="price-right">{{ meal["small-portion-price"] }}</div>
                    </div>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" v-model="velicina" checked/>
                    <label class="form-check-label" for="inlineRadio1">Mala</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"  v-model="velicina"/>
                    <label class="form-check-label" for="inlineRadio2">Velika</label>
                </div><br>
                <StarRating :valueR="4.25" :mealR="this.getMeal()"></StarRating>
                <div class="amount-wrapper">
                    <div class="amount-div">
                        <button class="amount-left" @click="changeAmount(-1)">
                            <i class="bx bx-minus"></i>
                        </button>
                        <span class="amount-center">{{ amount }}</span>
                        <button class="amount-right" @click="changeAmount(1)">
                            <i class="bx bx-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-button" v-if="logged" @click="add()">{{ t("cart") }}&nbsp;<i class="bx bxs-cart-add"></i></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$bg-color: #941816;
$font-color: #f9ba81;
$hover-color: #7c1412;

#main {
    margin-bottom: 100px;
}

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

@media screen and(max-width: 576px) {
    .img-div img,
    .data-div {
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

input[type='radio']:checked {
    box-shadow: none;
}

input[type='radio']:checked {
    background-color: $bg-color;
    border: none;
}

@media screen and (max-width: 576px) {
    .amount-div {
        margin-top: 15px;
    }

    .data-div h1 {
        margin-bottom: 15px;
    }

    .cart-button,
    .price-div-wrapper {
        margin: 20px 0;
    }
}

.cart-button:hover {
    background-color: $hover-color;
}
</style>

<script>
import StarRating from "@/components/StarRating.vue";
import DownloadMenu from "@/components/DownloadMenu.vue";
import { useI18n } from "vue-i18n";
/*import appetizers from "@/data/menu.js"*/

export default {
    setup() {
        const { t } = useI18n();
        return {
            t,
        };
    },
    name: "MealDetails",
    data() {
        return {
            meal: this.getMeal(),
            amount: 1,
            logged: false,
            velicina:"option1"
        };
    },
    components: {
        StarRating, DownloadMenu
    },
    methods: {
        getMeal() {
            let foodType = this.$route.params.food_type;
            let mealId = this.$route.params.meal_id;

            let allMeals = JSON.parse(localStorage.getItem("menu"));

            let meals = allMeals.find((type) => type["name"] == foodType)["meals"];

            let meal = meals.find((meal) => meal["id"] == mealId);

            return meal;
        },
        changeAmount(value) {
            this.amount += value;

            if (this.amount < 1) this.amount = 1;
        },
        add() {
            /*let niz = JSON.parse(localStorage.getItem("menu"))
            let tip = niz[this.$route.params.meal_id]["meals"]

            for(let i=0;i<tip.length;i++){
                
            }*/

            let meal = this.getMeal();
            let korisnik = JSON.parse(localStorage.getItem("logged-user"))["username"]
            

            if (localStorage.getItem("products") == null) {
                let prod;
                let ukcena;
                let Cena;
                let vel="mala"


                if(this.velicina == "option1"){
                    ukcena = meal["small-portion-price"] * this.amount;
                    Cena = meal["small-portion-price"]
                    vel="mala"
                }else{
                    ukcena = meal["big-portion-price"] * this.amount;
                    Cena = meal["big-portion-price"]
                    vel="velika"
                }

                
                prod = {
                    user:korisnik,
                    naziv: meal["name"],
                    kolicina: this.amount,
                    cena: Cena,
                    img: meal["img"],
                    ukcena: ukcena,
                    opis: "gg",
                    velicina:vel,
                };

                let prods = [];

                prods.push(prod);

                localStorage.setItem("products", JSON.stringify(prods));
            } else {
                let prods = JSON.parse(localStorage.getItem("products"));
                let ukcena;
                let Cena;
                let prod;
                let found = false;
                let vel="mala"

                if(this.velicina == "option1"){
                    ukcena = meal["small-portion-price"] * this.amount;
                    Cena = meal["small-portion-price"]
                    vel="mala"
                }else{
                    ukcena = meal["big-portion-price"] * this.amount;
                    Cena = meal["big-portion-price"]
                    vel="velika"
                }


                for (let i = 0; i < prods.length; i++) {
                    if (prods[i].naziv == meal["name"] && prods[i].velicina == vel) {
                        found = true;
                        prods[i].kolicina = prods[i].kolicina + this.amount;
                        prods[i].ukcena = prods[i].kolicina * prods[i].cena;
                    }
                }

                if (found == false) {
                    prod = {
                        user:korisnik,
                        naziv: meal["name"],
                        kolicina: this.amount,
                        cena: Cena,
                        img: meal["img"],
                        ukcena: ukcena,
                        opis: "gg",
                        velicina:vel
                    };
                    prods.push(prod);
                }
                localStorage.setItem("products", JSON.stringify(prods));
            }
        },
    },
    created() {
        if (localStorage.getItem("logged-user") == null) {
            this.logged = false;
        } else {
            this.logged = true;
        }
    },
};
</script>

<i18n>
    {
        "en": {
            "cart": "Add to cart",
            "spring-rolls": "Spring rolls",
            "bao-buns": "Bao buns",
            "egg-rolls": "Egg rolls",
            "bigPrice": "Big portion price",
            "smallPrice": "Small portion price",
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
            "cart": "Додај у корпу",
            "spring-rolls": "Пролећне ролнице",
            "bao-buns": "Бао бунс",
            "egg-rolls": "Ролнице са јајима",
            "bigPrice": "Цена велике порције",
            "smallPrice": "Цена мале порције",
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
