<template>
    <div id="products">
    <div id="individual_product" v-for="(item,index) in products" :key="index">
    <img id="prodImage" :src="item.imageUrl" :alt="item.name">
    <p>{{ item.title }}</p>
    <p>{{ item.price }}</p>
    </div>
    </div>
</template>

<script setup>

import{ref,onMounted,onUpdated} from "vue";
import axios from "axios";
//import firebase utilities
import {db,collection,getDocs} from "../../firebase.js";

let products=ref([]);
onMounted(async()=>{
 
await fetchProductData();



})

let fetchProductData=async()=>{
    const querySnapshot = await getDocs(collection(db, "vuestore"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  products.value.push(doc.data())
  console.log(doc.id, " => ", doc.data());
});
}


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