import { initializeApp } from 'firebase/app';

//firebase firestore functions
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc
}
  from 'firebase/firestore/lite';


//firebase storage functions
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
}
  from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAylQ28nXDetjq6tyWPmpUvTHmzsxE7qGg",
  authDomain: "vueify-f77ea.firebaseapp.com",
  projectId: "vueify-f77ea",
  storageBucket: "vueify-f77ea.appspot.com",
  messagingSenderId: "990261310319",
  appId: "1:990261310319:web:c5a2194bdc3a32f184ee9a",
  measurementId: "G-XNV4QYEGC4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//exporting all functions
export {
  app,
  db,
  collection,
  getDocs,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  doc,
  getDoc
};