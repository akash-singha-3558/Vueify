<template>
    <div>
        <Navbar/>
        <h4>This is Admin Page</h4>
        <input type="text" v-model="form.name" placeholder="name"/>
        <input type="text" v-model="form.contact" placeholder="contact"/>
        <input type="text" v-model="form.city" placeholder="city"/>
        <input type="number" v-model="form.age" placeholder="age"/>
        <button @click="print">Submit</button>
        <br/>
        {{ form }}
    </div>
</template>
<script setup>
//V-model --> The v-model directive is used to create a two-way binding 
//between a form input element, or between a Vue instance property and a component.
//Using reactive is a better solution than using ref each time for each individual form submission 
import { ref, reactive } from 'vue';
import Navbar from '../components/HomePageComponents/Navbar.vue';

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