<template>
    <div class="login-page">
        <div class="transparent-color"></div>

        <LoginComponent v-if="$route.path === '/login'"></LoginComponent>
        <RegisterComponent v-if="$route.path === '/register'"></RegisterComponent>>
    </div>    
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .login-page {
        width: 100%;
        height: 870px;
        display: flex;
        justify-content: center;
        background-image: url("../assets/login-picture.jpg");
        background-size: cover;
        position: relative;
    }

    .transparent-color {
        background-color: transparentize($color: $bg-color, $amount: 0.3);
        position: absolute;
        width: 100%;
        height: 100%;
    }

  
</style>

<script>

    import LoginComponent from '@/components/LoginComponent.vue'
    import RegisterComponent from '@/components/RegisterComponent.vue'

    export default {
        name: "LoginRegisterView",
        components: {
            LoginComponent, RegisterComponent
        },
    }

</script>


