<template>
    <div id="container">
        <div id="lhs">
            <img :src="product.imageUrl" :alt="product.title" />
        </div>
        <div id="rhs">
            <p>{{ product.title }}</p>
            <p>₹ {{ product.price }}</p>
            <q-btn @click="addToCart(product)" id="addToCart" label="Add to cart" color="black" />
        </div>
    </div>
</template>

<script setup>
import { doc, getDoc, db } from "../../firebase.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../../store.js";
const cartStore = useCartStore();
const route = useRoute();
const product = ref({});
onMounted(async () => {

    await fetchSingleFileData();

})
let fetchSingleFileData = async () => {

    const docRef = doc(db, "vuestore", route.params.id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        product.value = {...docSnap.data(),id:docSnap.id};
      
         console.log(product.value, "test")
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

}

const addToCart = (product) => {
    //calling the action inside cartStore and passing the value to 
    //update state 
    cartStore.addToCartAction(product);
}






</script>

<style  scoped>
#container {
    display: flex;
    margin-top: 5%;

}

#lhs {
    display: flex;
    flex: 4;
}

#lhs>img {
    width: 90%;
}

#rhs {
    display: flex;
    flex: 6;
    flex-direction: column;
    margin-left: 1rem;
    font-size: 20px;
    font-weight: bold;

}

#addToCart {
    width: 40%;
}

/* Styles for small screens (up to 767 pixels) */
@media only screen and (max-width: 767px) {
  /* Your styles for small screens go here */
  
#addToCart {
    width: 70%;
}
}

/* Styles for medium screens (768 pixels to 991 pixels) */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* Your styles for medium screens go here */
  #addToCart {
    width: 70%;
}
}








</style>