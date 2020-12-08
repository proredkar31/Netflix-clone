import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import {seedDatabase} from '../seed';


const config={
    apiKey: "AIzaSyBMklWFuBpp-vLMTsF6XkJHjqGwT9GXq30",
    authDomain: "netflix-clone-7ffdb.firebaseapp.com",
    databaseURL:'https://netflix-clone-7ffdb.firebase.io.com',
    projectId: "netflix-clone-7ffdb",
    storageBucket: "netflix-clone-7ffdb.appspot.com",
    messagingSenderId: "219619404966",
    appId: "1:219619404966:web:f6466f9c0f9a94f1825867"
};


const firebase= Firebase.initializeApp(config);
//seedDatabase(firebase);
export{firebase};