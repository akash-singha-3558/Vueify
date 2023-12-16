<template>
    <div id="welcome_div">
        <h1>{{ text }}</h1>
    </div>
</template>

<script setup>
defineProps(["text"])
</script>

<style  scoped>
#welcome_div{
    display: flex;
    height: 200px;
    border-bottom: 1px solid black;
    justify-content: center;
    align-items: center;
    color: #0ac09d;
}
h1{
    font-weight: 500;
    font-size: 3rem;
}
</style>