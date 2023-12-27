<template>
    <div>
        <NavbarComponent/>
        <h4>This is Admin Page</h4>
       <AddProductFormComponent/>
    </div>
</template>
<script setup>
//V-model --> The v-model directive is used to create a two-way binding 
//between a form input element, or between a Vue instance property and a component.
//Using reactive is a better solution than using ref each time for each individual form submission 
import { ref, reactive } from 'vue';
import NavbarComponent from '../components/HomePageComponents/Navbar.vue';
import AddProductFormComponent from '../components/AdminComponents/AddProductForm.vue';
let form = reactive({
    name:"",
    contact:"",
    city:"",
    age:0
})

const print=()=>{
    console.log(form);
}
</script>
<style scoped>

</style>