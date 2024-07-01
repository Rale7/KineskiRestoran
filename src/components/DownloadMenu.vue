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
import "@/assets/fonts/Roboto-Regular-normal"

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

            // Add custom font
            doc.setFont("Roboto-Regular");
            // Add title
            doc.setFontSize(18);
            doc.text(this.t('menu'), 10, 10);

            let yPosition = 20;

            menu.forEach((category) => {
                doc.setFontSize(16);
                doc.text(this.t(category.name), 10, yPosition);
                yPosition += 10;

                category.meals.forEach((meal) => {
                    doc.setFontSize(14);
                    doc.text(`${this.t('name')}: ${this.t(meal.name)}`, 10, yPosition);
                    yPosition += 10;

                    doc.setFontSize(12);
                    doc.text(`${this.t("bigPortion")}: ${meal["big-portion-price"]}`, 10, yPosition);
                    yPosition += 10;

                    doc.text(`${this.t("smallPortion")}: ${meal["small-portion-price"]}`, 10, yPosition);
                    yPosition += 10;
                });

                yPosition += 10;
            });

            doc.save(this.t('menu') + ".pdf");
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
        }
    }
</i18n>
