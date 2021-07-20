import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";

class Firebase {
	init = () => {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: "AIzaSyD3ewyD1spFvaUdgS-x40qhlOQ9GSI49cw",
				authDomain: "is-it-weekend.firebaseapp.com",
				projectId: "is-it-weekend",
				storageBucket: "is-it-weekend.appspot.com",
				messagingSenderId: "330499816852",
				appId: "1:330499816852:web:cac8710e1b8f22eaffa381",
				measurementId: "G-B4HF5YMM6D",
			});
		} else {
			firebase.app();
		}
		firebase.analytics();
		firebase.performance();
	};
}

export default new Firebase();
