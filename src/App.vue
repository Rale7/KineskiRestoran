<template>
  <Navigation></Navigation> 
  <router-view/>
  <Footer></Footer>
</template>

<style>

@import url('https://fonts.cdnfonts.com/css/chinese-food');

#app {
  font-family: "Chinese Food", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>

  import Navigation from "@/components/Navigation.vue"
  import Footer from "@/components/Footer.vue"
  import users from "@/data/users"
  import menu from "@/data/menu"

  export default {
    name: "App",
    components: {
      Navigation, Footer
    },
    created() {
        if (localStorage.getItem('menu') == null) {
            localStorage.setItem('menu', JSON.stringify(menu));
        }
        if (localStorage.getItem('allUsers') == null) {
            localStorage.setItem("allUsers", JSON.stringify(users));
        }
    },
  } 

</script>
