// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDPTz2zXRkYQ9qvQLyfh5EWvpkASOfYNBs',
  authDomain: 'e-commerce-machinfy.firebaseapp.com',
  projectId: 'e-commerce-machinfy',
  storageBucket: 'e-commerce-machinfy.firebasestorage.app',
  messagingSenderId: '713389472474',
  appId: '1:713389472474:web:1f9bf19f28d1b9efed83e3',
  measurementId: 'G-DK2P0BW1LH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
