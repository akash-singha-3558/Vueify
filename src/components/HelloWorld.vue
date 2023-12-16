<template>
    <!-- <h1>{{ msg }}</h1>
    <h3>{{ msg2 }}</h3> -->
    <h4>value: {{ count }}</h4>
    <button @click="inc">Inc</button>
  </template>
  
  <script>
  // <script setup>
  // composition API
  // defineProps(["msg","msg2"])
  // import { ref } from 'vue';
  // let count=ref(0);
  
  // let inc=()=>{
  //     count.value++;
  // }
  
  // options API
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      inc() {
        this.count++;
      },
    },
  };
  </script>
  
  <style scoped>
  h1,
  h3 {
    color: green;
  }
  </style>
  