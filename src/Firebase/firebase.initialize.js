import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthrntication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthrntication;