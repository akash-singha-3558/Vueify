import { defineStore } from "pinia";
import { ref,computed } from "vue";

//cart store
export const useCartStore = defineStore("carts", () => {
  const cart = ref([]);
  const cart_count = computed(()=>cart.value.length);

  //actions => these are functions which change state properties

  const addToCartAction = (product) => {
    if (cart.value.indexOf(product)===-1) {
      cart.value.push(product);
    }
  };
  const removefromCart=(id)=>{
    cart.value=cart.value.filter((ele,index)=>ele.id!=id)
  }
  return {
    cart_count,
    cart,
    addToCartAction,
    removefromCart
  };
});
