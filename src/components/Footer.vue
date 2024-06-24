<template>
    <div class="footer">
        {{ t('footer-text') }}
    </div>
</template>

<style lang="scss" scoped>
    $bg-color: #941816;
    $font-color: #f9ba81;
    $hover-color: #7c1412;

    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: $bg-color;
        color: $font-color;
        text-align: center;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: italic;
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
        name: "Footer"
    }
</script>

<i18n>
    {
        "en": {
            "footer-text": "Copyright 2024, Radovan Jevric, Radomir Damjanovic, Department of software engineering, School of Electrical engineering, University of Belgrade"
        }, 
        "rs": {
            "footer-text": "Copyright 2024, Радован Јеврић, Радомир Дамјановић, Одсек за софтверско инжењерство Електротехничког факултета Универзитета у Београду"
        }
    }
</i18n>