import firebase from 'firebase/app'
import 'firebase/firestore'

// TODO: Paste your own firebaseConfig data here
const firebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx",
    databaseURL: "xxxx",
    projectId: "xxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx",
    appId: "xxxx"
};

// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()
