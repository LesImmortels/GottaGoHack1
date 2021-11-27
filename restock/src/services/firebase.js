import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

class Firebase {
    constructor() {
        this.firebase = firebase.initializeApp({
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
        this.auth = firebase.auth();
    }
    signOut = () => this.auth.signOut();

    getUserDashboard = (id) => this.firestore.collection("dashboards").doc(id).get();
    getUserData = (id) => this.firestore.collection("users").doc(id).get();
    getOrders = async () => {
        const ref = this.firestore.collection("orders").doc(firebase.auth().currentUser.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().order;
        }
        return [];
    }
    getStocks = async () => {
        const ref = this.firestore.collection("stocks").doc(firebase.auth().currentUser.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().products;
        }
        return [];
    }

    getSales = async () => {
        const ref = this.firestore.collection("sales").doc(firebase.auth().currentUser.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().products;
        }
        return [];
    }

    getShops = async () => {
        const ref = this.firestore.collection("shops").doc(firebase.auth().currentUser.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data();
        }
        return [];
    }
    getUser = () => {
        return new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
                unsubscribe();
                resolve(userAuth);
            }, reject);
        });
    };

    handleUserProfile = async ({ userAuth, additionalData }) => {
        if (!userAuth) return;

        const { uid } = userAuth;


        const userRef = this.firestore.doc(`users/${uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {

            const { displayName, email } = userAuth;
            const timestamp = new Date();
            const roles = ["user"];

            try {
                await userRef.set({
                    displayName,
                    email,
                    roles,
                    createdDate: timestamp,
                    ...additionalData,
                });
            } catch (err) { }
        }
        return userRef;
    };

    reauthenticate = (currentPassword) => {
        let user = firebase.auth().currentUser;
        let cred = firebase.auth.EmailAuthProvider.credential(
            user.email,
            currentPassword
        );
        return user.reauthenticateWithCredential(cred);
    };

    findArrayElementByTitle(array, title) {
        return array.findIndex((element) => {
            return element.name === title;
        })
    }


    async changeStock({ name, increment = 1 }) {

        const userRef = this.firestore.doc(`stocks/${firebase.auth().currentUser.uid}`);
        const data = await (await userRef.get()).data().products;
        let i = this.findArrayElementByTitle(data, name);
        console.log(increment)
        data[i].quantity = Number(data[i].quantity) + increment;

        try {
            await userRef.set({ products: data })
        } catch (err) {
            console.log(err);

        }
        return userRef
    }

    async changeSales({ name, increment = 1 }) {

        const userRef = this.firestore.doc(`sales/${firebase.auth().currentUser.uid}`);
        const data = await (await userRef.get()).data().products;
        let i = this.findArrayElementByTitle(data, name);
        console.log(increment)
        data[i].quantity = Number(data[i].quantity) + increment;

        try {
            await userRef.set({ products: data })
        } catch (err) {
            console.log(err);

        }
        return userRef
    }

    async addProductToStock({ name, price, url, quantity }) {

        const userRef = this.firestore.doc(`stocks/${firebase.auth().currentUser.uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            try {
                await userRef.set({
                    products: [{
                        name,
                        price: Number(price),
                        quantity: Number(quantity),
                        url,
                    }]
                });
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                await userRef.update({
                    products: firebase.firestore.FieldValue.arrayUnion({
                        name,
                        price: Number(price),
                        quantity: Number(quantity),
                        url,
                    })
                })
            } catch (err) {
                console.log(err);

            }
        }
        return userRef;
    }
    async addProductToSales({ name, price, url, quantity }) {

        const userRef = this.firestore.doc(`sales/${firebase.auth().currentUser.uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            try {
                await userRef.set({
                    products: [{
                        name,
                        price: Number(price),
                        quantity: Number(quantity),
                        url,
                    }]
                });
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                await userRef.update({
                    products: firebase.firestore.FieldValue.arrayUnion({
                        name,
                        price: Number(price),
                        quantity: Number(quantity),
                        url,
                    })
                })
            } catch (err) {
                console.log(err);

            }
        }
        return userRef;
    }
}




const firebaseInstance = new Firebase();
export default firebaseInstance;