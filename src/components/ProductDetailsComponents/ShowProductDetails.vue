<template>
    <div id="container">
        <div id="lhs">
          <img :src="product.imageUrl" :alt="product.title"/>
        </div>
        <div id="rhs">
         <p>{{product.title}}</p>
         <p>₹{{product.price}}</p>
        </div>
    </div>
</template>

<script setup>
import {doc,getDoc,db} from "../../firebase.js";
import {onMounted,ref} from "vue";
import {useRoute} from "vue-router";

const route=useRoute();
const product=ref({});
onMounted(async() => {
    
 await fetchSingleFileData();

})
let fetchSingleFileData=async()=>{

const docRef = doc(db, "vuestore", route.params.id);

const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  product.value=docSnap.data();
  console.log(product.value,"test")
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}







}

</script>

<style  scoped>
#container{
display:flex;
margin-top:5%;

}
#lhs{
    display:flex;
    flex:4;
}
#lhs>img{
    width:90%;
}
#rhs{
    display:flex;
    flex:6;
    flex-direction:column;
    margin-left:1rem;
    font-size:20px;
    font-weight:bold;

}


</style>