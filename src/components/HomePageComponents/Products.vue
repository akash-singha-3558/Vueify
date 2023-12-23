<template>
    <div id="products">
    <div id="individual_product" v-for="(item,index) in products" :key="index">
    <img id="prodImage" :src="item.image_url" :alt="item.name">
    <p>{{ item.name }}</p>
    <p>{{ item.price }}</p>
    </div>
    </div>
</template>

<script setup>
import ProductsData from "../../../src/data/products.json"
import{ref,onMounted,onUpdated} from "vue"
const products=ProductsData;


</script>

<style  scoped>
#products{

    display: grid;
    margin: auto;
    grid-template-columns: repeat(4,1fr);
    grid-gap:3%;
    padding-top: 1rem;
    
}
/* #individual_product{
    height: 220px;
    width: 320px;
    border: 1px solid black;
    margin: auto;
} */
#prodImage{
    
    width:100%;
    display: block;
    margin: auto;
}
</style>