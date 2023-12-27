<template>
  <div id="addProductForm">
    <q-form @submit="handleFormData" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="form.title"
        label="Product title *"
        hint="Name of your product"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Product Price *"
        hint="Price of your product"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Please type your product price',
        ]"
      />

      <q-file
        v-model="file"
        label="Choose Product Image"
        @update:model-value="fileUpload"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
  getStorage,
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL,
} from "../../firebase.js";


let form=reactive({
  title:"",
  price:null,
  imageUrl:""

})




let file = ref(null);

const fileUpload = () => {
  //access filedata
  console.log(file.value);

  const storage = getStorage();

  //abc => products/abc.jpg
  const storageRef = firebaseRef(storage, "products/" + file.value.name);

  //actually passing the file data
  const uploadTask = uploadBytesResumable(storageRef, file.value);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        form.imageUrl=downloadURL;

      });
    }
  );
};



const handleFormData=()=>{
//form data
console.log(form)





}











</script>

<style scoped>
#addProductForm {
  width: 50%;
}
</style>
