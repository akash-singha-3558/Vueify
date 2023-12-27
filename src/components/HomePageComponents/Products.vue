<template>
    <div id="products">
    <div id="individual_product" v-for="(item,index) in products" :key="index">
    <img id="prodImage" :src="item.image" :alt="item.name">
    <p>{{ item.title }}</p>
    <p>{{ item.price }}</p>
    </div>
    </div>
</template>

<script setup>
// import ProductsData from "../../../src/data/products.json"
import{ref,onMounted,onUpdated} from "vue"
let products=ref([]);
onMounted(async()=>{
    let res= await fetch("https://fakestoreapi.com/products")
    let data= await res.json();
    console.log("data==>",data)
    products.value=data;
})

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
    
    width:70%;
    height: 250px;
    display: block;
    margin: auto;
}
</style>