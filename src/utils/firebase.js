import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDl4TmFtbYmNoUmbM2bmnx5rdf-tdjSctc",
	authDomain: "netflix-clone-2ac72.firebaseapp.com",
	projectId: "netflix-clone-2ac72",
	storageBucket: "netflix-clone-2ac72.appspot.com",
	messagingSenderId: "805227488053",
	appId: "1:805227488053:web:238334da6e99eee175627c",
	measurementId: "G-GF9GFCC74P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
