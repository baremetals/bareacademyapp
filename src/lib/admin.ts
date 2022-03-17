import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import config from "../utils/database";

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const firebaseApp = initializeApp(config);


export const storage = getStorage(firebaseApp);

// export const analytics = () => {
//   if (typeof window !== "undefined") {
//     return firebase.analytics();
//   } else {
//     return null;
//   }
// };


export const analytics = getAnalytics(firebaseApp);

export const logEve = logEvent

export default firebaseApp;
