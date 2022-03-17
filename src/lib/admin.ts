import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import config from "../utils/database";

const firebaseApp = initializeApp(config);


export const storage = getStorage(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
export const logEve = logEvent

export default firebaseApp;
