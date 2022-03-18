import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import config from "../utils/database";

const firebaseApp = initializeApp(config);

export const storage = getStorage(firebaseApp);

let analytics: Analytics;

if (firebaseApp.name && typeof window !== "undefined") {
  analytics = getAnalytics(firebaseApp);
}

export { analytics, logEvent };
export default firebaseApp;
