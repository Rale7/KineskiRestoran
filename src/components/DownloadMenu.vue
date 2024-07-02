<template>
    <div>
        <button @click="downloadPDF()">{{ t("buttonText") }}&nbsp;<i class="bx bxs-file-pdf"></i></button>
    </div>
</template>

<style lang="scss" scoped>
$bg-color: #941816;
$font-color: #f9ba81;
$hover-color: #7c1412;

button {
    background-color: $bg-color;
    color: $font-color;
    border: none;
    border-radius: 20px;
    margin: 15px 0;
    width: 200px;
    height: 40px;
    font-weight: bold;
}

button:hover {
    background-color: $hover-color;
}
</style>

<script>
import { useI18n } from "vue-i18n";
import jsPDF from "jspdf";
import "@/assets/fonts/Roboto-Regular-normal";

export default {
    setup() {
        const { t } = useI18n();
        return {
            t,
        };
    },
    name: "DownloadPDF",
    methods: {
        downloadPDF() {
            const doc = new jsPDF();
            let menu = JSON.parse(localStorage.getItem("menu"));

            doc.setFont("Roboto-Regular");
            doc.setFontSize(18);
            doc.text(this.t("menu"), 10, 10);

            const pageHeight = doc.internal.pageSize.height;
            const margin = 20;
            const lineHeight = 10;
            const maxLinesPerPage = Math.floor((pageHeight - margin * 2) / lineHeight);
            let currentLine = 0;

            const addNewPage = () => {
                doc.addPage();
                currentLine = 0;
            };

            menu.forEach((category) => {
                doc.setFontSize(16);
                doc.text(this.t(category.name), margin, margin + currentLine * lineHeight);
                currentLine++;

                category.meals.forEach((meal) => {
                    if (currentLine > maxLinesPerPage) {
                        addNewPage();
                    }

                    doc.setFontSize(12);
                    doc.text(
                        `- ${this.t(meal.name)}: ${this.t("bigPortion")} ${this.t(meal["big-portion-price"])} | ${this.t("smallPortion")} ${this.t(meal["small-portion-price"])}`,
                        margin,
                        margin + currentLine * lineHeight
                    );
                    currentLine++;
                });

                currentLine++;
                if (currentLine > maxLinesPerPage) {
                    addNewPage();
                }
            });

            doc.save(this.t("menu") + ".pdf");
        },
    },
};
</script>

<i18n>
    {
        "en":{
            "name": "Name",
            "buttonText": "Download PDF",
            "menu": "Menu",
            "bigPortion": "Big portion price",
            "smallPortion": "Small portion price",
            "drinks": "Drinks",
            "appetizers": "Appetizers",
            "meal": "Meal",
            "desert": "Desert",
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
            "poh-an": "Fried pineapple"
        },
        "rs": {
            "name": "Назив",
            "buttonText": "Преузми ПДФ",
            "menu": "Јеловник",
            "bigPortion": "Цена велике порције",
            "smallPortion": "Цена мале порције",
            "drinks": "Пиће",
            "appetizers": "Предјело",
            "meal": "Главно јело",
            "desert": "Дезерт",
            "spring-rolls": "Пролећне ролнице",
            "bao-buns": "Бао бунс",
            "egg-rolls": "Ролнице са јајима",
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
