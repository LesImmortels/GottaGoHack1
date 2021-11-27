import firebase from "firebase/app";

class Firebase {
    constructor() {
        firebase.initializeApp({
            apiKey: "AIzaSyApv6lEULCSSevyf0Tg7nD1BRPxzIGtF58",
            authDomain: "restauck.firebaseapp.com",
            projectId: "restauck",
            storageBucket: "restauck.appspot.com",
            messagingSenderId: "194493879759",
            appId: "1:194493879759:web:9aba5454746c61b1b2aeba",
            measurementId: "G-8CF4080EYT"
        });
        this.firestore = firebase.firestore();
        this.googleProvider = new firebase.auth.GoogleAuthProvider();
    }


    getUserData = (id) => this.firestore.collection("users").doc(id).get();
    getOrders = async () => {
        const ref = this.firestore.collection("orders").doc(firebase.auth().currentUser.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().orders;
        }
        return [];
    }
    getStocks = async () => {
        const ref = this.firestore.collection("stocks").doc(firebase.auth().currentUser.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().stocks;
        }
        return [];
    }
}

const firebaseInstance = new Firebase();
export default firebaseInstance;