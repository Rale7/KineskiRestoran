<template>
    <div class="dropdown">
        <button class="dropbtn">{{ $t("language") }} 
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
        <a @click="changeLanguage('rs')">
            <img class="my-flag" src="../assets/SRB-flag.png">&ensp;
            {{ $t("serbianLang") }}
        </a>
        <a @click="changeLanguage('en')">
            <img class="my-flag" src="../assets/UK-flag.png">&ensp;
            {{ $t("englishLang") }}
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

    .dropdown {
        float: left;
        overflow: hidden;
    }

    .dropdown .dropbtn {
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

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f67963;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        text-align: left;
    }

    .dropdown:hover .dropbtn {
        background-color: $hover-color;
        color: $font-color;
    }

    .dropdown-content a:hover {
        background-color: $hover-color;
        color: $font-color;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    @media screen and (max-width: 890px) {
        .topnav .dropdown .dropbtn {
            display: none;
        }
    }

    @media screen and (max-width: 890px) {    
        .topnav.responsive .dropdown {float: none;}
        .topnav.responsive .dropdown-content {position: relative;}
        .topnav.responsive .dropdown .dropbtn {
            display: block;
            width: 100%;
            text-align: left;
        }
    }

</style>

<script>
    export default {
        name: "Languages",
        methods: {
            changeLanguage(lang) {
                this.$i18n.locale = lang;
            }
        }
    }
</script>