import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class Firebase {
    constructor() {
        this.firebase = firebase.initializeApp({
            apiKey: "AIzaSyApv6lEULCSSevyf0Tg7nD1BRPxzIGtF58",
            authDomain: "restauck.firebaseapp.com",
            projectId: "restauck",
            storageBucket: "restauck.appspot.com",
            messagingSenderId: "194493879759",
            appId: "1:194493879759:web:9aba5454746c61b1b2aeba",
            measurementId: "G-8CF4080EYT",
        });
        this.firestore = firebase.firestore();
        this.googleProvider = new firebase.auth.GoogleAuthProvider();
        this.auth = firebase.auth();
    }
    signOut = () => this.auth.signOut();

    getUserDashboard = (id) =>
        this.firestore.collection("dashboards").doc(id).get();
    getUserData = (id) => this.firestore.collection("users").doc(id).get();
    getOrders = async (id) => {
        if (typeof id === "undefined") {
            if (!firebase.auth().currentUser) {
                return [];
            }
            id = firebase.auth().currentUser.uid;
        }
        const ref = this.firestore
            .collection("orders")
            .doc(id);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().orders;
        }
        return [];
    };

    getShops = async () => {
        const snapshot = await firebase.firestore().collection("shops").get();
        return snapshot.docs.map((doc) => doc.data());
    };

    getStocks = async (id) => {
        if (typeof id === "undefined") {
            if (!firebase.auth().currentUser) {
                return [];
            }
            id = firebase.auth().currentUser.uid;
        }
        const ref = this.firestore.collection("stocks").doc(id);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().products;
        }
        return [];
    };
    getSales = async () => {
        if (!firebase.auth().currentUser) return;
        const ref = this.firestore
            .collection("sales")
            .doc(firebase.auth().currentUser.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
            return snapshot.data().products;
        }
        return [];
    };
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
                    answered: false,
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
        });
    }

    async changeStock({ name, increment = 1 }) {
        const userRef = this.firestore.doc(
            `stocks/${firebase.auth().currentUser.uid}`
        );
        const data = await (await userRef.get()).data().products;
        let i = this.findArrayElementByTitle(data, name);
        data[i].quantity = Number(data[i].quantity) + increment;
        if (data[i].quantity <= 0) data.splice(i, 1);
        try {
            await userRef.set({ products: data });
        } catch (err) {
            console.log(err);
        }
        return userRef;
    }

    async changeRecommendedStock({ id, name, increment }) {
        const userRef = this.firestore.doc(`stocks/${id}`);

        const data = await (await userRef.get()).data().products;
        let i = this.findArrayElementByTitle(data, name);
        data[i].demand = Number(data[i].demand) + increment;

        if (data[i].demand <= 0) data[i].demand = 0;
        try {
            await userRef.set({ products: data });
        } catch (err) {
            console.log(err);
        }
        return userRef;
    }

    async changeSales({ name, increment = 1 }) {
        const userRef = this.firestore.doc(
            `sales/${firebase.auth().currentUser.uid}`
        );
        const data = await (await userRef.get()).data().products;
        let i = this.findArrayElementByTitle(data, name);
        data[i].quantity = Number(data[i].quantity) + increment;
        if (data[i].quantity <= 0) data.splice(i, 1);
        try {
            await userRef.set({ products: data });
        } catch (err) {
            console.log(err);
        }
        return userRef;
    }

    async removeStock({ name }) {
        const userRef = this.firestore.doc(
            `stocks/${firebase.auth().currentUser.uid}`
        );
        const data = await (await userRef.get()).data().products;
        let i = this.findArrayElementByTitle(data, name);
        data.splice(i, 1);
        try {
            await userRef.set({ products: data });
        } catch (err) {
            console.log(err);
        }
    }
    async removeSales({ name }) {
        const userRef = this.firestore.doc(
            `sales/${firebase.auth().currentUser.uid}`
        );
        const data = await (await userRef.get()).data().products;
        let i = this.findArrayElementByTitle(data, name);
        data.splice(i, 1);
        try {
            await userRef.set({ products: data });
        } catch (err) {
            console.log(err);
        }
    }

    async addProductToStock({ name, price, url, quantity }) {
        if (quantity == 0 || name === "") return;
        const userRef = this.firestore.doc(
            `stocks/${firebase.auth().currentUser.uid}`
        );
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            try {
                await userRef.set({
                    products: [
                        {
                            name,
                            price: Number(price),
                            quantity: Number(quantity),
                            url,
                            demand: Number(0),
                        },
                    ],
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await userRef.update({
                    products: firebase.firestore.FieldValue.arrayUnion({
                        name,
                        price: Number(price),
                        quantity: Number(quantity),
                        url,
                        demand: Number(0),
                    }),
                });
            } catch (err) {
                console.log(err);
            }
        }
        return userRef;
    }
    async addProductToSales({ name, price, url, quantity }) {
        if (quantity == 0 || name === "") return;
        const userRef = this.firestore.doc(
            `sales/${firebase.auth().currentUser.uid}`
        );
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            try {
                const date = new Date();
                await userRef.set({
                    products: [
                        {
                            name,
                            price: Number(price),
                            quantity: Number(quantity),
                            url,
                            date: `${date.getDate()} ${Date.now()
                                .toLocaleString("default", { month: "short" })
                                .toLowerCase()} ${Date.now().getFullYear()}`,
                        },
                    ],
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const date = new Date();
                await userRef.update({
                    products: firebase.firestore.FieldValue.arrayUnion({
                        name,
                        price: Number(price),
                        quantity: Number(quantity),
                        url,
                        date: `${date.getDate()} ${date
                            .toLocaleString("default", { month: "short" })
                            .toLowerCase()} ${date.getFullYear()}`,
                    }),
                });
            } catch (err) {
                console.log(err);
            }
        }
        return userRef;
    }

    async answer({ id }) {
        const userRef = this.firestore.doc(`users/${id}`);
        const snapshot = await userRef.get();
        try {
            await userRef.update({
                answered: true,
            });
        } catch (err) {
            console.log(err);
        }
        return userRef;
    }

    changeName = (newName) => {
        return new Promise((resolve, reject) => {
            let user = firebase.auth().currentUser.uid;
            this.firestore
                .collection("users")
                .doc(user)
                .update({
                    displayName: newName,
                })
                .then(() => resolve())
                .catch((err) => {
                    console.log(err);
                });
        });
    };
}

const firebaseInstance = new Firebase();
export default firebaseInstance;
