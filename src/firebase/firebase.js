import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoG1ruVBh114O3DmvcCVL5PYMZHAYA1VU",
  authDomain: "retail-pulse-315b6.firebaseapp.com",
  projectId: "retail-pulse-315b6",
  storageBucket: "retail-pulse-315b6.appspot.com",
  messagingSenderId: "932756328614",
  appId: "1:932756328614:web:f829ce4c7c2396911d6467",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
