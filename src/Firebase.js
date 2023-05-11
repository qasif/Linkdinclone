

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDBslt4GCYYoWtFcMFKZE9C4ODDzk5dW2k",
    authDomain: "linkedin-clone-yt-7e6e0.firebaseapp.com",
    projectId: "linkedin-clone-yt-7e6e0",
    storageBucket: "linkedin-clone-yt-7e6e0.appspot.com",
    messagingSenderId: "1051475312407",
    appId: "1:1051475312407:web:72a7b6f222416451bf4152"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export {db}