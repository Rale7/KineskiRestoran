<template>
    <div class="register-form">
        <h1>{{ t('register') }}</h1>
        <h3>{{ t('username') }}</h3>
        <input type="text" @keydown="checkUsernameAlreadyExists()" v-model="username">
        <div class="message-div">
            <span v-show="userAlreadyExists">{{ t("user-already-exist-msg") }}</span>
        </div>
        <h3>{{ t("password") }}</h3>
        <input type="password" v-model="password">
        <div class="message-div"></div>
        <h3>{{ t("confirm-password") }}</h3>
        <input type="password" v-model="confirmedPassword" @keydown="checkPasswordMatch()">
        <div class="message-div">
            <span v-show="passwordDidntMatch">{{ t("password-didnt-match") }}</span>
        </div>
        <button @click="register()">{{ t("register") }}</button>
    </div> 
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .message-div {
        height: 20px;
        text-align: left;
        color: $font-color;
        margin-top: 5px;
    }

    .register-form {
        position: absolute;
        z-index: 1;
        background-color: $bg-color;
        width: 400px;
        height: 500px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-self: center;
        border-radius: 10px;
    }

    .register-form h3 {
        text-align: left;
        margin-bottom: 3px;
        color: $font-color;
    }

    .register-form h1 {
        color: $font-color;
        margin-bottom: 40px;
    }

    .register-form input {
        border-radius: 2px;
        border: none;
        height: 30px;
        font-size: 20px;
        background-color: lighten($color: $bg-color, $amount: 5);
        padding: 4px;
        color: $font-color;
    }

    .register-form input:focus {
        outline: none;
    }

    .register-form button {
        border-radius: 2px;
        margin-top: 50px;
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

</style>

<script>

import {useI18n} from "vue-i18n"

export default ({
    setup() {
        const {t} = useI18n();
        return {
            t,
        }
    },
    name: "RegisterComponent",
    methods: {
        checkUsernameAlreadyExists() {
            let allUsers = JSON.parse(localStorage.getItem('allUsers'));

            if (allUsers.find( user => user.username == this.username )) {
                this.userAlreadyExists = true;
                return true;
            } else {
                this.userAlreadyExists = false;
                return false;
            }
        },
        checkPasswordMatch() {
            if (this.password != this.confirmedPassword && this.confirmedPassword != "") {
                this.passwordDidntMatch = true;
                return true;
            } else {
                this.passwordDidntMatch = false;
                return false;
            } 
        },
        register() {
            if (!this.checkUsernameAlreadyExists() && !this.checkPasswordMatch()) {
                let allUsers = JSON.parse(localStorage.getItem('allUsers'));

                let newUser = {
                    "username": this.username,
                    "password": this.password,
                };

                allUsers.push(newUser);
                localStorage.setItem("logged-user", JSON.stringify(newUser));
                localStorage.setItem("allUsers", JSON.stringify(allUsers));
                this.$router.push("/");
            }
        }
    },
    data() {
        return {
            username: '',
            password: '',
            confirmedPassword: '',
            userAlreadyExists: false,
            passwordDidntMatch: false
        }
    }
});
</script>

<i18n>
    {
        "en": {
            "register": "Sign up",
            "username": "Username",
            "password": "Password",
            "confirm-password": "Confirm password",
            "user-already-exist-msg": "Username is already in use",
            "password-didnt-match": "Passwords have to be same"
        },
        "rs": {
            "register": "Региструј се",
            "username": "Корисничко име",
            "password": "Лозинка",
            "confirm-password": "Поновљена лозинка",
            "user-already-exist-msg": "Корисничко име је заузето",
            "password-didnt-match": "Лозинке се не подударају"
        }
    }
</i18n>
