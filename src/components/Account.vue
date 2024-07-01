<template>
    <div class="my-dropdown">
        <button class="my-dropbtn" id="account-dropdown-button">
            <i class='bx bx-user-circle' id="font-icon"></i>&nbsp;
            {{ t("helloMessage") }}{{ username }}
        </button>
        <div class="my-dropdown-content">
        <a>
            <i class='bx bxs-cart'></i>&nbsp;
            {{ t('cart') }}
        </a>
        <a @click="logout()">
            <i class='bx bxs-log-out' ></i>&nbsp;
            {{ t('logout') }}
        </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    #account-dropdown-button {
        display: flex;
        align-items: center;
    }

    #font-icon {
        font-size: 30px;
    }

    .my-dropdown {
        float: right;
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
        min-width: 180px;
    }

    .my-dropdown-content {
        display: none;
        position: absolute;
        background-color: #f67963;
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
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
        name: "AccountButton",
        props: {
            username: String,
        },
        methods: {
            logout() {
                localStorage.removeItem("logged-user");
                this.$router.push("/login");
            }
        }
    }

</script>

<i18n>
    {
        "en": {
            "helloMessage": "Hi, ",
            "cart": "My shopping cart",
            "logout": "Logout"
        },
        "rs": {
            "helloMessage": "Здраво, ",
            "cart": "Моја корпа",
            "logout": "Одјави се"
        }
    }
</i18n>