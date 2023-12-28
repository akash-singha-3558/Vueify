import { defineStore } from 'pinia';
import {ref} from "vue";

export const useCartStore = defineStore('carts', ()=>{
 
 const cart=ref([]);
 const cart_count=ref(3);

return{
    cart_count,
    cart
}

})