import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import config from "../utils/database";

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

const firebaseApp = initializeApp(config);


export const storage = getStorage(firebaseApp);


let analytics: Analytics;

if (firebaseApp.name && typeof window !== "undefined") {
  analytics = getAnalytics(firebaseApp);
}


// export const analytics = getAnalytics(firebaseApp);

// export const logEve = logEvent

export { analytics, logEvent };
export default firebaseApp;
