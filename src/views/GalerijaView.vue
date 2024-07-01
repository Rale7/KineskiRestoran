
<template>
  <div class="container">
  <div class="main">


    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/slika1.png" class="d-block w-100 img-fluid" alt="...">
    </div>
    <div class="carousel-item my-carousel-item">
      <img src="../assets/slika2.png" class="d-block w-100 img-fluid" alt="...">
    </div>
    <div class="carousel-item my-carousel-item">
      <img src="../assets/slika3.png" class="d-block w-100 img-fluid" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <h1 style="padding-top: 50px;">{{ t("title3") }}</h1>
  <iframe width="1200" height="725" src="https://www.youtube.com/embed/7y_z7Ppv11w?si=zwxaz9b-Dfn88VJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


  </div>
</div>
  


</template>

<style scoped>

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

  .main {
    margin-top: 40px;
  }

  h1{
    font-weight: bold;
    margin-top: 0px;
    padding-top: 10px;
  }
  .item{
    height:1000px
  }

  iframe{
    padding-top: 15px;
    padding-bottom: 50px;
  }
</style>


<script >

import { useI18n } from "vue-i18n";

export default {
        setup() {
            const {t} = useI18n();
            return {
                t,
            }
        },
      }
</script>



<i18n>
  {
      "en": {
          "title1": "Resturant",
          "title2":"Food",
          "title3":"Youtube review"
           
      }, 
      "rs": {
          "title1": "Ресторан",
          "title2":"Храна",
          "title3": "Youtube рецензија"
      }
  }
</i18n>