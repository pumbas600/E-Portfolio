import { FirebaseOptions, initializeApp } from 'firebase/app';
import { collection, getCountFromServer, getFirestore, query, where } from 'firebase/firestore';

const appConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREABSE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(appConfig);
const db = getFirestore(app);

const OneWeekMs = 7 * 24 * 60 * 60 * 1000;
const OneWeekAgo = new Date(Date.now() - OneWeekMs);

const githubContibutionMetrics = collection(db, 'github_contribution_metrics');

export async function getTotalApiCalls(): Promise<number> {
  try {
    const response = await getCountFromServer(githubContibutionMetrics);
    return response.data().count;
  } catch (error) {
    console.error(error);
    return -1;
  }
}

export async function getPastWeekApiCalls(): Promise<number> {
  try {
    const pastWeekCallsQuery = query(githubContibutionMetrics, where('date', '>=', OneWeekAgo));
    const response = await getCountFromServer(pastWeekCallsQuery);
    return response.data().count;
  } catch (error) {
    console.error(error);
    return -1;
  }
}
