<template>    
    <div class="topnav" id="myTopnav">
        <router-link to="/">
            <img src="../assets/my-logo.png" class="my-img">
        </router-link> 
        <router-link to="/" :class="checkPath('/')">{{ $t('home') }}</router-link>
        <router-link to="/galery" :class="checkPath('galery')">{{ $t('galery') }}</router-link>
        <router-link to="/menu" :class="checkPath('/menu')">{{ $t('menu') }}</router-link>
        <router-link to="/delivery" :class="checkPath('/delivery')">{{ $t('delivery') }}</router-link>
        <router-link to="/contact" :class="checkPath('/contact')">{{ $t('contact') }}</router-link>
        <router-link to="/about" :class="checkPath('/about')">{{ $t('about') }}</router-link>
        <router-link to="/comments" :class="checkPath('/comments')">{{ $t('comments') }}</router-link>
        <Language></Language>
        <a href="javascript:void(0);" style="font-size:30px;" class="icon" @click="dropdownMenu()">&#9776;</a>
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .my-img {
        height: 50px;
        width: 50px;
        vertical-align: middle;
    }

    .topnav {
        overflow: hidden;
        background-color: $bg-color;
    }

    @media screen and (min-width: 890px) {
        .topnav {
            display: flex;
            align-items: stretch;
        }
    }

    .topnav a {
        float: left;
        display: flex;
        align-items: center;
        color: $font-color;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
    }

    .active {
        text-decoration: underline !important;
        color: $font-color;
    }

    .topnav .icon {
        display: none;
    }

    .topnav a:hover {
        background-color: $hover-color;
        color: $font-color;
    }

    @media screen and (max-width: 890px) {
        .topnav a:not(:first-child), .dropdown .dropbtn {
            display: none;
        }
        .topnav a.icon {
            float: right;
            display: block;
        }
    }

    @media screen and (max-width: 890px) { 
        .topnav.responsive {position: relative;}
        .topnav.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
        }
        .topnav.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
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
    import Language from "@/components/Languages.vue"

    export default{
        name: "Navigaiton",
        methods: {
            dropdownMenu() {
                let x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            },
            checkPath(path) {
                if (path === this.$route.path) {
                    return "active";
                } else {
                    return "";
                }
            }
        }, components : {
            Language
        },
    }

</script>

