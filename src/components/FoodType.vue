<template>
    <div class="container-img" @click="goToMeal(myType)">
        <div class="dark-div"></div>
        <img :src="imgSrc" alt="">
        <div class="type-text">
            {{ typeName }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .dark-div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: transparentize($color: black, $amount: 0.65);
        border-radius: 20px;
        z-index: 2;
        transition: background-color 0.5s ease;
    }

    .container-img:hover .dark-div {
        background-color: transparentize($color: black, $amount: 0.4);
    }

    .container-img:hover .type-text {
        top: -25px;
    }

    .type-text {
        position: absolute;
        font-size: 30px;
        color: white;
        font-weight: bold;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        top: 0;
        transition: top 0.5s ease;
    }

    .container-img {
        position: relative;
        margin-bottom: 24px;
        width: 100%;
        height: auto;
        aspect-ratio: 3/2;
        cursor: pointer;
    }

    .container-img img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

</style>

<script>

export default {
    name: "FoodType",
    props: {
        "myType": String,
        "typeName": String,
        "imgSrc": String
    },
    methods: {
        goToMeal(name) {
            this.$router.push('/menu/' + name);
        }
    }
}

</script>
