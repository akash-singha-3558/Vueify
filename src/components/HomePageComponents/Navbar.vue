<template>
  <div>
    <div id="navbar">
      <div id="lhs">
        <router-link to="/">Home</router-link>
      </div>
      <div id="rhs">
        <div>Account</div>
        <div id="cart" @click="toggoleCart()">
          <q-icon name="shopping_cart" />
          <div id="cart_count">{{ cartStore.cart_count }}</div>
          <!-- shopping_cart -->
      
          <CartPopupComponent :dialogVisibility="popUp"/>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script setup>
import { useCartStore } from "../../store.js";
import CartPopupComponent from "../CartComponents/CartPopup.vue";
import { ref } from "vue";
const cartStore = useCartStore();
const popUp=ref(false);
const toggoleCart=()=>{
  popUp.value=!popUp.value;
} 
</script>

<style  scoped>
#navbar {
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 130%;
  border-bottom: solid 1px black;
}

a {
  text-decoration: none;
  color: black;
}

#lhs {
  display: flex;
  flex: 3;
  align-items: center;
}

#rhs {
  display: flex;
  flex: 7;
  align-items: center;
  gap: 10%;
  justify-content: flex-end;
}

#cart {
  display: flex;

  align-items: center;

}

#cart_count {
  padding-bottom: 0.5rem;
}</style>