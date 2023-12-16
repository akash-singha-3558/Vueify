<template>
    <div>
   <NavbarComponent/>
   <BannerComponent text="Welcome to Vueify"/>
   <ProductsComponents/>
    </div>
</template>

<script setup>
import NavbarComponent from "../components/HomePageComponents/Navbar.vue";
import BannerComponent from "../components/HomePageComponents/Banner.vue";
import ProductsComponents from "../components/HomePageComponents/Products.vue";
</script>

<style  scoped>

</style>