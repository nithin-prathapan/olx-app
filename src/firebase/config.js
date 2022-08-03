import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDn-LhHuCjP6QucX5p76OtOcTLtmQXaasM",
  authDomain: "olx-clone-869fc.firebaseapp.com",
  projectId: "olx-clone-869fc",
  storageBucket: "olx-clone-869fc.appspot.com",
  messagingSenderId: "963453827632",
  appId: "1:963453827632:web:aaec4e16b7225fd5124bf5",
  measurementId: "G-8301EDGCZW",
};
export default firebase.initializeApp(firebaseConfig)

