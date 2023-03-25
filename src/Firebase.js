import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBIHy7U3nFY-tU8RvjCu2kdiip_HJjpwvo",
  authDomain: "crud-operation-7e762.firebaseapp.com",
  projectId: "crud-operation-7e762",
  storageBucket: "crud-operation-7e762.appspot.com",
  messagingSenderId: "721291845262",
  appId: "1:721291845262:web:72ad00b233f53f73e533df",
  measurementId: "G-0C0952XGQJ"
};


const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
