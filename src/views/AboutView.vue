<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <div class="map-container">
                    <h1 style="padding-bottom: 50px; font-weight: bold; margin-top: 20px;">{{ t("title") }}</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353.7919557890253!2d20.508788450058383!3d44.81472632455624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7b0f0f77e315%3A0x8fa1924f9f77ea9e!2sPatrisa%20Lumumbe!5e0!3m2!1ssr!2srs!4v1719675826508!5m2!1ssr!2srs"
                        width="600"
                        height="450"
                        style="border: 0"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div class="col-md-12 col-lg-6">
                <div>
                    <h1 class="about-h">{{ t("title2") }}</h1>
                    <div class="about" style="font-size: 27px; text-align: center;margin-left: 30px">
                        {{ t("about") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer style="background-color: #f9ba81; padding-bottom: 30px;">
        &copy; 2024 Google Maps on KineskiRestoran. All rights reserved.
    </footer>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    setup() {
        const { t } = useI18n();
        return {
            t,
        };
    },
};
</script>

<style scoped>

.about-h {
  font-weight: bold;
  margin-top: 20px;
}

iframe {
  width: 100%;
  border-radius: 20px;
}

.about {
    padding-top: 50px;
    font-size: 2px;
}

table {
    margin-left: auto;
    margin-right: auto;
}

td {
    text-align: center;
}

body {
    font-family: "Poppins", sans-serif;
}

.button {
    display: inline-block;
    background-color: #941816;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #7c1412;
}
</style>

<i18n>
  {
      "en": {
          "title": "Our location",
          "title2":"About us",
          "button":"View on Google maps",
          "about":"On September 1, 2021, the spa opens its doors to all visitors with refined taste and connoisseurs of a wide variety of aromas and fragrances. A concept conceived as cognac and a good cigar. One of the few restaurants that is known for its relaxed atmosphere, quality coffee, excellent food and most importantly, for its always friendly and courteous staff. The idea behind the name of the bar became clear to everyone. This restaurant allows you to forget about all your problems and relax in a contemporary, modern environment.Find inspiration in our letter map, indulge in friendly music and let Maximus be the place of your new happiness. At Maximus, everyone can find their cup of tea, glass of wine, beer, whiskey or cognac. We believe that one should never judge the one who drinks more, lights a cigar, eats more dessert, who dances to music that others may not hear, but also the one who sits alone and enjoys it.You are in the right place because Maksimum is looking forward to all the friendship of the house with the desire to provide the joy of living and enjoying the moment with its top offers. There is one rule in Maxim. Here sit people who came to have a good time, try gastronomic specialties according to world standards and inspire all their senses. Welcome!",
      }, 
      "rs": {
          "title": "Наша локација",
          "title2":"О нама",
          "button":"Погледај на Google мапама",
          "about":"Првог септембра 2021. Бањица отвара врата за све посетиоце истанчаног укуса и уживаоце најразличитијих арома и мириса. Концепт замишљен као коњак и добра цигара. Један од ретких ресторана који је препознатљив по опуштеној атмосфери, квалитетној кафи, изврсној храни и најважније, по увек пријатном и љубазном особљу. Идеја која се крије иза имена локала постала је јасна свима. Овај ресторан вам максимално омогућава да заборавите на све ваше проблеме и опустите се у савременом, модерном амбијенту.Пронађите инспирацију у нашој карти пића, препустите се пријатној музици и дозволите да Максимум буде место ваших нових сусрета. У Максимуму свако нађе своју шољу чаја, чашу вина, пива, вискија или коњака. Ми верујемо да никада не треба судити ономе ко попије чашу више, запали цигару, поједе дезерт више, ко игра уз музику који други можда не чују, али ни ономе ко сам седи и ужива.На правом сте месту јер Максимум са задовољством очекује све пријатеље куће са жељом да својом врхунском понудом омогући радост живљења и уживања у тренутку. У Максимуму важи једно правило. Овде седе људи који су дошли да се проведу, искусе гастрономске специјалитете по светским стандардима и надахну сва своја чула. Добро нам дошли!"
      }
  }
</i18n>
