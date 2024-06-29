
<template>
  <h1>{{ t("title1") }} </h1>
  <div id="myCarousel1" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel1" data-slide-to="1"></li>
      <li data-target="#myCarousel1" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
        <div class="d-flex justify-content-center" >
          <img src="../assets/slika1.png" >
        </div>
        
      </div>

      <div class="item" >
        <div class="  d-flex justify-content-center" >
          <img src="../assets/slika2.png">
        </div>
        
      </div>

      <div class="item d-flex justify-content-center">
        <div class="d-flex justify-content-center" >
          <img src="../assets/slika3.png" >
        </div>
        
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel1" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel1" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <h1>{{ t("title2") }} </h1>
  <div id="myCarousel2" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel2" data-slide-to="1"></li>
      <li data-target="#myCarousel2" data-slide-to="2"></li>
      <li data-target="#myCarousel2" data-slide-to="3"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <div class="d-flex justify-content-center" >
          <img src="../assets/hrana1.png" >
        </div>
        
      </div>

      <div class="item">
        <div class="  d-flex justify-content-center" >
          <img src="../assets/hrana2.png" >
        </div>
        
      </div>

      <div class="item d-flex justify-content-center">
        <div class="d-flex justify-content-center" >
          <img src="../assets/hrana3.png">
        </div>
        
      </div>


      <div class="item d-flex justify-content-center">
        <div class="d-flex justify-content-center" >
          <img src="../assets/hrana4.png" >
        </div>
        
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel2" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel2" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <h1>{{ t("title3") }}</h1>
  <iframe width="560" height="515" src="https://www.youtube.com/embed/7y_z7Ppv11w?si=zwxaz9b-Dfn88VJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</template>

<style>

  iframe{
    padding-top: 50px;
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