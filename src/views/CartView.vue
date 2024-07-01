<template>

    <div class="shopping-cart" >

        <div class="title" style="font-size: 25px; padding-top: 0px;font-weight: bold"> 
            {{t("cart")}}
        </div>

   
    
    <div v-for="product in products" :key="product.naziv" class="item">
    <div class="buttons">
      <span class="delete-btn" @click="obrisi(product)"></span>
      <!--<span class="like-btn"></span>-->
    </div>
 
    <div class="image">
      <img src="../assets/hrana1.png" alt="" style="width:90px; height:70px">
    </div>
 
    <div class="description">
      <span>{{product.naziv}}</span>
      <span>{{product.opis}}</span>
      <span>{{ product.cena }}RSD/kom</span>
    </div>
 
    <div class="quantity">
      <button class="plus-btn" type="button" name="button" @click="povecaj(product)">
        <img src="../assets/plus.svg" alt=""  style="width:13px;height:13px"/>
      </button>
      <!--<input type="text" name="name" value="">-->{{product.kolicina}}
      <button class="minus-btn" type="button" name="button" @click="smanji(product)">
        <img src="../assets/minus.svg" alt="" style="width:15px;height:15px"/>
      </button>
    </div>
 
    <div class="total-price">{{product.ukcena}}RSD</div>
  </div>

  
</div>
    <div class="container">

      <div class="col-lg-12" style="text-align: right;padding-right: 200px;font-size: 20px;">
        {{t("total")}}: {{ total }}RSD
      </div>

      <div class="col-lg-12" v-if="message" style="color: green; font-size: 25px;">
        {{t("message")}}
      </div>


      <div class="col-lg-12">
        <button type="button" class="btn btn-success" @click="poruci()"
        style="background-color: green; width:100px; height: 30px"
        >{{t("button")}}
        </button>
      </div>

  </div>

</template>



<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background-color: #7EC855;
  font-family: 'Roboto', sans-serif;
}

.shopping-cart {
  width: 750px;
  height: 423px;
  margin: 80px auto;
  background: #FFFFFF;
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
}

.title {
  height: 60px;
  border-bottom: 1px solid #E1E8EE;
  padding: 20px 30px;
  color: #5E6977;
  font-size: 18px;
  font-weight: 400;
}

.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
}

.item:nth-child(3) {
  border-top:  1px solid #E1E8EE;
  border-bottom:  1px solid #E1E8EE;
}

/* Buttons -  Delete and Like */
.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}

.delete-btn {
  display: inline-block;
  cursor: pointer;
  width: 18px;
  height: 17px;
  background: url("../assets/delete-icn.svg") no-repeat center;
  margin-right: 20px;
}

.like-btn {
  position: absolute;
  top: 9px;
  left: 15px;
  display: inline-block;
  background: url('../assets/twitter-heart.png');
  width: 60px;
  height: 60px;
  background-size: 2900%;
  background-repeat: no-repeat;
  cursor: pointer;
}

.is-active {
  animation-name: animate;
  animation-duration: .8s;
  animation-iteration-count: 1;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}

@keyframes animate {
  0%   { background-position: left;  }
  50%  { background-position: right; }
  100% { background-position: right; }
}

/* Product Image */
.image {
  margin-right: 50px;
}

/* Product Description */
.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.description span {
  display: block;
  font-size: 14px;
  color: #43484D;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939E;
}

/* Product Quantity */
.quantity {
  padding-top: 20px;
  margin-right: 60px;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}

button[class*=btn] {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}
button:focus,
input:focus {
  outline:0;
}

/* Total Price */
.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}

/* Responsive */
@media (max-width: 800px) {
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image img {
    width: 50%;
  }
  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
  .buttons {
    margin-right: 20px;
  }
  
}


</style>


<script>
import { useI18n } from "vue-i18n";

export default {
        data(){
            return{
                products:[],
                message:false,
                total:0,
            }
        },
        setup() {
            const {t} = useI18n();
            return {
                t,
            }
        },
        created(){
            if(localStorage.getItem("products") == null){
                var prod1 = {
                    naziv:"pirinac",
                    opis:"dobar pirinac",
                    cena:50,
                    kolicina:1,
                    ukcena:50,

                }

                var prod2={
                    naziv:"pirinac2",
                    opis:"dobar pirinac2",
                    cena:5054,
                    kolicina:1,
                    ukcena:5054,
                }

                var prod3={
                    naziv:"pohovano pile",
                    opis:"pile mmmm",
                    cena:123,
                    kolicina:1,
                    ukcena:123,
                }
                this.products.push(prod1)
                this.products.push(prod2)
                this.products.push(prod3)
                for(let i =0;i<this.products.length;i++){
                  this.total = this.total + this.products[i].ukcena
                }
                localStorage.setItem("products",JSON.stringify(this.products))
            }else{
                this.products = JSON.parse(localStorage.getItem("products"))
                for(let i =0;i<this.products.length;i++){
                  this.total = this.total + this.products[i].ukcena
                }
            }
        },
        methods:{
            povecaj(p){
                /*alert("SEEY" + p.naziv)*/
                p.kolicina = p.kolicina+1;
                p.ukcena = p.kolicina * p.cena;
                this.total = this.total + p.cena;
                /*for(let i=0;i<this.products.length;i++){
                    alert(i)
                    if(this.products[i].naziv == p.naziv){
                        this.products[i].kolicina = this.products[i].kolicina+1;
                        break;
                    }
                }*/
                localStorage.setItem("products",JSON.stringify(this.products))
            },
            smanji(p){
                if(p.kolicina>=1){
                  p.kolicina = p.kolicina-1;
                  this.total = this.total - p.cena;
                  p.ukcena = p.kolicina * p.cena;
                  localStorage.setItem("products",JSON.stringify(this.products))
                }
                
                
            },
            obrisi(p){
              let index = this.products.indexOf(p)
              this.products.splice(index,1)
              localStorage.setItem("products",JSON.stringify(this.products))

            },
            poruci(){
              this.products=[]
              localStorage.removeItem("products")
              this.message = true
            }
        }
      }

</script>

<i18n>
  {
      "en": {
          "button":"Checkout",
          "message":"Thank you for your order!",
          "total":"Total",
          "cart" : "My cart",
           
      }, 
      "rs": {
          "button":"Поручи",
          "message":"Хвала на поруџбини!",
          "total":"Укупно",
          "cart":"Моја корпа",
      }
  }
</i18n>