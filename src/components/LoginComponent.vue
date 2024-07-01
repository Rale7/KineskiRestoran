<template>
    <div class="login-form">
            <h1>{{ t("login") }}</h1>
            <h3>{{ t("username") }}</h3>
            <input type="text" name="username" autocomplete="off" v-model="username" @keydown.enter="login">
            <h3>{{ t("password") }}</h3>
            <input type="password" name="password" autocomplete="off" v-model="password" @keydown.enter="login">
            <div class="wrong-data-div">
                <div v-show="wrongData">{{ t("wrong-data") }}</div> 
            </div>
            <button @click="login()">{{ t("login") }}</button>
            <router-link to="/register">{{ t("noacc") }}</router-link>
        </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .wrong-data-div {
        height: 15px;
        color: $font-color;
        text-align: left;
        margin-top: 7px;
    }

    .login-form {
        position: absolute;
        z-index: 1;
        background-color: $bg-color;
        width: 400px;
        height: 400px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-self: center;
        border-radius: 10px;
    }

    .login-form h3 {
        text-align: left;
        margin-bottom: 3px;
        color: $font-color;
    }

    .login-form h1 {
        color: $font-color;
        margin-bottom: 40px;
    }

    .login-form input {
        border-radius: 2px;
        border: none;
        height: 30px;
        font-size: 20px;
        background-color: lighten($color: $bg-color, $amount: 5);
        padding: 4px;
        color: $font-color;
    }

    .login-form input:focus {
        outline: none;
    }

    .login-form button {
        border-radius: 2px;
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 25px;
        background-color: $font-color;
        color: $bg-color;
        font-weight: bolder;
        font-family: inherit;
        height: 50px;
        border: none;
        cursor: pointer; 
    }

    .login-form a {
        color: $font-color;
        font-weight: bold;
    }


</style>

<script>
    import { useI18n } from "vue-i18n";

    export default {
        setup() {
            const {t} = useI18n();
            return {
                t,
            }
        },
        name: "LoginComponent",
        methods: {
            login() {
                let allUsers = JSON.parse(localStorage.getItem('allUsers'));
                let user = allUsers.find( user => user.username === this.username);

                if (user != null && user.password == this.password) {
                    localStorage.setItem("logged-user", JSON.stringify(user));
                    this.$router.push("/");
                } else {
                    this.wrongData = true;
                }
                
            }
        },
        data() {
            return {
                username: '',
                password: '',
                wrongData: false
            }
        }
    }

</script>


<i18n>
    {
        "en": {
            "login": "Login",
            "username": "Username",
            "password": "Password",
            "noacc": "Don't have account, sign up",
            "wrong-data": "Username or password are incorrect"
        }, 
        "rs": {
            "login": "Пријави се",
            "username": "Корисничко име",
            "password": "Лозинка",
            "noacc": "Немаш налог, региструј се",
            "wrong-data": "Корисничко име или лозинка нису валидни"
        }
    }
</i18n>