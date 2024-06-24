<template>
  <Navigation></Navigation> 
  <router-view/>
  <Footer></Footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>

  import Navigation from "@/components/Navigation.vue"
  import Footer from "@/components/Footer.vue"

  export default {
    name: "App",
    components: {
      Navigation, Footer
    }
  } 

</script>
