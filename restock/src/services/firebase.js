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
    }
}