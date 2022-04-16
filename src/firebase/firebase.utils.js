import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
	apiKey: "AIzaSyDWWQTO_tP_xU44T7H245tbLvrPpfnC9_k",
	authDomain: "crwn-my-fire.firebaseapp.com",
	projectId: "crwn-my-fire",
	storageBucket: "crwn-my-fire.appspot.com",
	messagingSenderId: "282112404736",
	appId: "1:282112404736:web:2888ee667aab7fb92797e5",
	measurementId: "G-EFXY24TLVT",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
