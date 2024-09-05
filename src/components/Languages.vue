<template>
    <div class="my-dropdown">
        <button class="my-dropbtn">{{ t("language") }}&nbsp;
        <i class='bx bxs-down-arrow' ></i>
        </button>
        <div class="my-dropdown-content">
        <a @click="changeLanguage('rs')">
            <img class="my-flag" src="../assets/SRB-flag.png">&ensp;
            {{ t("serbianLang") }}
        </a>
        <a @click="changeLanguage('en')">
            <img class="my-flag" src="../assets/UK-flag.png">&ensp;
            {{ t("englishLang") }}
        </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .my-flag {
        width: 30px;
        height: 30px;
    }

    .my-dropdown {
        float: left;
        overflow: hidden;
    }

    .my-dropdown .my-dropbtn {
        font-size: 18px;    
        border: none;
        outline: none;
        color: $font-color;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
        height: 100%;
        font-weight: bold;
    }

    .my-dropdown-content {
        display: none;
        position: absolute;
        background-color: #f67963;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 5;
    }

    .my-dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        text-align: left;
    }

    .my-dropdown:hover .my-dropbtn {
        background-color: $hover-color;
        color: $font-color;
    }

    .my-dropdown-content a:hover {
        background-color: $hover-color;
        color: $font-color;
        cursor: pointer;
    }

    .my-dropdown:hover .my-dropdown-content {
        display: block;
    }

    @media screen and (max-width: 890px) {
        .topnav .my-dropdown .my-dropbtn {
            display: none;
        }
    }

    @media screen and (max-width: 890px) {    
        .topnav.responsive .my-dropdown {float: none;}
        .topnav.responsive .my-dropdown-content {position: relative;}
        .topnav.responsive .my-dropdown .my-dropbtn {
            display: block;
            width: 100%;
            text-align: left;
        }
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
        name: "Languages",
        methods: {
            changeLanguage(lang) {
                this.$i18n.locale = lang;
            }
        }
    }
</script>

<i18n>
{
    "en": {
        "language": "Language",
        "serbianLang": "Serbian",
        "englishLang": "English",
    },
    "rs": {
        "language": "Језик",
        "serbianLang": "Српски",
        "englishLang": "Енглески",
    }
}
</i18n>