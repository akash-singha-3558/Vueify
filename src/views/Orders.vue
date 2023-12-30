<template>
    <NavbarComponent/>
    <div id="container">

<q-form
  @submit="onSubmit"
  class="q-gutter-md"
  id="orderForm"
>
  <q-input
    filled
    v-model="form.name"
    label="Your name *"
  />

  <q-input
    filled
    type="number"
    v-model="form.contact"
    label="Your Contact *"
  />

  <q-input
    filled
    v-model="form.address"
    label="Your Address *"
  />

  <div>
    <q-btn label="Submit" type="submit" color="primary"/>
  </div>
</q-form>

</div>
</template>

<script setup>
import NavbarComponent from '../components/HomePageComponents/Navbar.vue';
import {reactive} from "vue";
import { useCartStore } from '../store.js';
import { collection, addDoc, db } from "../firebase.js"; 
const cartStore=useCartStore();
const form=reactive({
    name:"",
    contact:null,
    address:"",
    order:cartStore.cart,
    total:cartStore.cart_total
})

const onSubmit=async()=>{
    
    try {
  const docRef = await addDoc(collection(db, "vuestoreorders"), form);
//   console.log("Document written with ID: ", docRef.id);
form.name="";
form.contact=null;
form.address="";
} catch (e) {
  console.error("Error adding document: ", e);
}



}







</script>

<style scoped>
#container{
    margin-top: 5rem;
}
#orderForm{
    width: 50%;
}
</style>