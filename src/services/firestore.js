import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApbEXKTeko5YsuCQ1OMnzwl2I91aY7ak4",
    authDomain: "forza-42793.firebaseapp.com",
    databaseURL: "https://forza-42793.firebaseio.com/",
    projectId: "forza-42793",
    storageBucket: "forza-42793.appspot.com",
    messagingSenderId: "170754823498",
    appId: "1:170754823498:web:c21bc65a6c3ed720f21db3",
    measurementId: "G-QEJJN86ZX9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export async function user () {
    const snapshot = await db.collection('team').get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
}
export default db
