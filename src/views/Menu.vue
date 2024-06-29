<template>
    <div id="menu">
        <div id="background-div"></div>
        <div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;


    #menu {
        position: relative;
        height: 100%;
        width: 100%;
    }

    #background-div {
        position: absolute;
        background-color: transparentize($color: $bg-color, $amount: 0.3);
        width: 100%;
        height: 100%;
    }

</style>

<script>

export default {
    name: "Menu",

}

</script>
